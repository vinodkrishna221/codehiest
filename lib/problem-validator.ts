export interface TestCase {
  input: any[];
  expected: any;
}

export interface ProblemTests {
  id: number;
  testCases: TestCase[];
  validator: (result: any, expected: any) => boolean;
}

// Example test cases for Two Sum problem
export const problemTests: Record<number, ProblemTests> = {
  1: {
    id: 1,
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] },
      { input: [[3, 3], 6], expected: [0, 1] }
    ],
    validator: (result: number[], expected: number[]) => {
      if (!Array.isArray(result) || result.length !== 2) return false;
      return result[0] === expected[0] && result[1] === expected[1] ||
             result[0] === expected[1] && result[1] === expected[0];
    }
  }
};