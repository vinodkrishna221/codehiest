"use client";

import { useState } from "react";
import { CodeEditor } from "@/components/code-editor/editor";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { problemTests } from "@/lib/problem-validator";
import { runCode } from "@/lib/code-runner";

interface TestResult {
  passed: boolean;
  executionTime?: number;
  error?: string;
}

export function ProblemSolution({ problemId }: { problemId: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (code: string) => {
    setIsRunning(true);
    const results: TestResult[] = [];
    const problem = problemTests[problemId];

    if (!problem) {
      toast({
        title: "Error",
        description: "Problem tests not found",
        variant: "destructive",
      });
      setIsRunning(false);
      return;
    }

    try {
      for (const testCase of problem.testCases) {
        const result = await runCode(code, testCase.input);
        
        if (!result.success) {
          results.push({
            passed: false,
            error: result.error
          });
          continue;
        }

        const passed = problem.validator(result.output, testCase.expected);
        results.push({
          passed,
          executionTime: result.executionTime
        });
      }

      const allPassed = results.every(r => r.passed);
      const failedCount = results.filter(r => !r.passed).length;

      toast({
        title: allPassed ? "Success!" : "Tests Failed",
        description: allPassed 
          ? `All ${results.length} tests passed!` 
          : `${failedCount} out of ${results.length} tests failed`,
        variant: allPassed ? "default" : "destructive",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to run tests",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Card className="p-6 bg-black/20 border-white/10">
      <CodeEditor
        defaultLanguage="javascript"
        defaultValue={`// Write your solution here
function solution(nums, target) {
  // Your code here
}
`}
        onSubmit={handleSubmit}
      />
      <div className="mt-4 flex justify-end">
        <Button disabled={isRunning}>
          {isRunning ? "Running Tests..." : "Submit Solution"}
        </Button>
      </div>
    </Card>
  );
}