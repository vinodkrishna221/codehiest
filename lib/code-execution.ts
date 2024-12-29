import axios from 'axios';

interface ExecuteCodeParams {
  code: string;
  language: string;
}

interface ExecuteCodeResult {
  success: boolean;
  output?: string;
  error?: string;
  executionTime?: number;
}

export async function executeCode({ code, language }: ExecuteCodeParams): Promise<ExecuteCodeResult> {
  try {
    const response = await axios.post('/api/execute', {
      code,
      language
    });
    
    return response.data;
  } catch (error) {
    console.error('Code execution error:', error);
    return {
      success: false,
      error: 'Failed to execute code'
    };
  }
}