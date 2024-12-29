export interface CodeRunResult {
  success: boolean;
  output?: any;
  error?: string;
  executionTime?: number;
}

export async function runCode(code: string, testCase: any[]): Promise<CodeRunResult> {
  try {
    // Create a safe evaluation context
    const fn = new Function(`
      ${code}
      return solution.apply(null, arguments);
    `);
    
    const start = performance.now();
    const result = fn(...testCase);
    const executionTime = performance.now() - start;

    return {
      success: true,
      output: result,
      executionTime
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Execution failed'
    };
  }
}