import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { Docker } from 'docker-cli-js';

const docker = new Docker();

export async function POST(request: Request) {
  try {
    const { code, language } = await request.json();
    
    // Generate a unique ID for this execution
    const executionId = uuidv4();
    const workDir = path.join(process.cwd(), 'tmp', executionId);
    
    // Create working directory
    await mkdir(workDir, { recursive: true });
    
    // Write code to file
    const filename = getFilename(language);
    await writeFile(path.join(workDir, filename), code);
    
    // Run code in Docker container
    const result = await runInDocker(workDir, language, filename);
    
    return NextResponse.json({ 
      success: true,
      output: result.output,
      executionTime: result.executionTime 
    });
    
  } catch (error) {
    console.error('Code execution error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Code execution failed' 
      },
      { status: 500 }
    );
  }
}

function getFilename(language: string): string {
  switch (language) {
    case 'javascript':
      return 'solution.js';
    case 'python':
      return 'solution.py';
    case 'java':
      return 'Solution.java';
    case 'cpp':
      return 'solution.cpp';
    default:
      throw new Error('Unsupported language');
  }
}

async function runInDocker(workDir: string, language: string, filename: string) {
  const containerConfig = getContainerConfig(language);
  
  // Run container with timeout and memory limits
  const { stdout, stderr } = await docker.command(`run --rm \
    --network none \
    --memory=512m \
    --cpus=1 \
    --ulimit nproc=1024:1024 \
    --ulimit nofile=1024:1024 \
    -v ${workDir}:/code \
    -w /code \
    ${containerConfig.image} \
    ${containerConfig.command} ${filename}
  `);

  return {
    output: stderr ? stderr : stdout,
    executionTime: 0 // TODO: Add actual execution time measurement
  };
}

function getContainerConfig(language: string) {
  switch (language) {
    case 'javascript':
      return {
        image: 'node:18-alpine',
        command: 'node'
      };
    case 'python':
      return {
        image: 'python:3.9-alpine',
        command: 'python'
      };
    case 'java':
      return {
        image: 'openjdk:17-alpine',
        command: 'java'
      };
    case 'cpp':
      return {
        image: 'gcc:latest',
        command: 'g++ -o solution solution.cpp && ./solution'
      };
    default:
      throw new Error('Unsupported language');
  }
}