import { notFound } from "next/navigation";
import { problems } from "@/components/problems/problem-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Code, HardDrive, Lightbulb } from "lucide-react";
import { ProblemSolution } from "./components/problem-solution";

export default function ProblemPage({ params }: { params: { id: string } }) {
  const problem = problems.find((p) => p.id === parseInt(params.id));
  
  if (!problem) {
    notFound();
  }

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            {problem.title}
          </h1>
          <div className="flex gap-2">
            <Badge
              variant={
                problem.difficulty === "Easy"
                  ? "default"
                  : problem.difficulty === "Medium"
                  ? "secondary"
                  : "destructive"
              }
            >
              {problem.difficulty}
            </Badge>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {problem.category.map((cat, index) => (
            <Badge key={index} variant="outline" className="border-white/10">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="description" className="mt-6">
          <TabsList className="grid w-full grid-cols-4 bg-black/50">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="approaches">Approaches</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
          </TabsList>

          {/* Description Tab */}
          <TabsContent value="description" className="space-y-4">
            <Card className="p-6 bg-black/20 border-white/10">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-xl font-bold text-white mb-4">Problem Description</h2>
                <p className="text-gray-300">{problem.detailedDescription}</p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-2">Constraints:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>1 ≤ nums.length ≤ 10^5</li>
                  <li>-10^9 ≤ nums[i] ≤ 10^9</li>
                  <li>All the integers in nums are unique.</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          {/* Approaches Tab */}
          <TabsContent value="approaches" className="space-y-4">
            <Card className="p-6 bg-black/20 border-white/10">
              <div className="space-y-6">
                {/* Approach 1 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-5 w-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Approach 1: Brute Force</h3>
                  </div>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-300">
                      The simplest approach is to check every possible pair of numbers...
                    </p>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Time Complexity:</h4>
                      <p className="text-gray-300">O(n²) - where n is the length of the input array</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Space Complexity:</h4>
                      <p className="text-gray-300">O(1) - only using constant extra space</p>
                    </div>
                  </div>
                </div>

                {/* Approach 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="h-5 w-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Approach 2: Hash Table</h3>
                  </div>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-300">
                      We can use a hash table to store complements...
                    </p>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Time Complexity:</h4>
                      <p className="text-gray-300">O(n) - single pass through the array</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Space Complexity:</h4>
                      <p className="text-gray-300">O(n) - storing at most n elements in the hash table</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Solution Tab */}
          <TabsContent value="solution" className="space-y-4">
            <ProblemSolution />
          </TabsContent>

          {/* Discussion Tab */}
          <TabsContent value="discussion" className="space-y-4">
            <Card className="p-6 bg-black/20 border-white/10">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-xl font-bold text-white mb-4">Common Pitfalls</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Not handling edge cases properly</li>
                  <li>Using the same element twice</li>
                  <li>Not considering negative numbers</li>
                  <li>Incorrect array indexing</li>
                </ul>

                <h2 className="text-xl font-bold text-white mt-8 mb-4">Real-world Applications</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {problem.realWorldApplications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}