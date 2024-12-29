export type ProgrammingLanguage = {
  id: string;
  name: string;
  icon: string;
};

export type Problem = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string[];
  description: string;
  detailedDescription: string;
  realWorldApplications: string[];
  solutionApproach: string;
  timeComplexity: string;
  spaceComplexity: string;
  supportedLanguages: string[];
};

export const programmingLanguages: ProgrammingLanguage[] = [
  { id: "javascript", name: "JavaScript", icon: "js" },
  { id: "python", name: "Python", icon: "py" },
  { id: "java", name: "Java", icon: "java" },
  { id: "cpp", name: "C++", icon: "cpp" },
  { id: "typescript", name: "TypeScript", icon: "ts" },
  { id: "c", name: "C", icon: "c" }
];

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: ["Arrays", "Hash Tables"],
    description: "Find two numbers in an array that add up to a target sum.",
    detailedDescription: `Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    realWorldApplications: [
      "Financial transaction matching",
      "Shopping cart price combinations",
      "Resource allocation in scheduling systems"
    ],
    solutionApproach: "Use a hash map to store complements of each number as we traverse the array.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    supportedLanguages: ["javascript", "python", "java", "cpp", "typescript", "c"]
  },
  {
    id: 2,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: ["Trees", "BFS", "Queue"],
    description: "Traverse a binary tree in level order (breadth-first search).",
    detailedDescription: `Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).`,
    realWorldApplications: [
      "File system directory traversal",
      "Network packet routing",
      "Social network friend suggestions"
    ],
    solutionApproach: "Use a queue to process nodes level by level, keeping track of the current level.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(w) where w is the maximum width of the tree",
    supportedLanguages: ["javascript", "python", "java"]
  },
  {
    id: 3,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: ["Linked Lists", "Heap", "Divide and Conquer"],
    description: "Merge k sorted linked lists into one sorted linked list.",
    detailedDescription: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.`,
    realWorldApplications: [
      "Multi-way database merging",
      "Distributed system data aggregation",
      "Log file consolidation"
    ],
    solutionApproach: "Use a min-heap to efficiently select the smallest element among k lists.",
    timeComplexity: "O(N log k) where N is total number of nodes",
    spaceComplexity: "O(k)",
    supportedLanguages: ["python", "java", "cpp", "c"]
  },
  {
    id: 4,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: ["Stacks", "Strings"],
    description: "Determine if a string of parentheses is valid.",
    detailedDescription: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.`,
    realWorldApplications: [
      "Code editor syntax validation",
      "Mathematical expression parsing",
      "XML/HTML tag matching"
    ],
    solutionApproach: "Use a stack to keep track of opening brackets and match them with closing brackets.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    supportedLanguages: ["javascript", "python", "typescript"]
  },
  {
    id: 5,
    title: "Palindrome Validator",
    difficulty: "Easy",
    category: ["Strings", "Two Pointers"],
    description: "Check if a given string is a palindrome.",
    detailedDescription: "Write a program that takes a string input and determines whether it reads the same forwards and backwards, ignoring case and non-alphanumeric characters.",
    realWorldApplications: [
      "Text processing applications",
      "DNA sequence analysis",
      "Word game development"
    ],
    solutionApproach: "Use two pointers starting from both ends of the string, moving towards the center while comparing characters.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    supportedLanguages: ["javascript", "python", "java", "cpp", "c"]
  },
  {
    id: 6,
    title: "Pattern Printing",
    difficulty: "Easy",
    category: ["Loops", "Pattern Recognition"],
    description: "Print various patterns using nested loops.",
    detailedDescription: "Create different patterns like pyramids, diamonds, and number patterns using nested loops.",
    realWorldApplications: [
      "Understanding nested iterations",
      "Visual pattern generation",
      "Basic graphics programming"
    ],
    solutionApproach: "Use nested loops to control rows and columns, print appropriate characters based on position.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    supportedLanguages: ["javascript", "python", "java", "cpp", "c"]
  }
];