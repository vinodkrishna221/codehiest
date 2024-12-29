"use client";

import { useState } from "react";
import { problems } from "@/components/problems/problem-data";
import { Pagination } from "@/components/ui/pagination";
import { SearchBar } from "./components/search-bar";
import { DifficultyFilter } from "./components/difficulty-filter";
import { CategoryFilter } from "./components/category-filter";
import { ProblemCard } from "./components/problem-card";

const PROBLEMS_PER_PAGE = 6;

export default function ProblemsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"Easy" | "Medium" | "Hard" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = 
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDifficulty = !selectedDifficulty || problem.difficulty === selectedDifficulty;
    const matchesCategory = !selectedCategory || problem.category.includes(selectedCategory);
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProblems.length / PROBLEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROBLEMS_PER_PAGE;
  const currentProblems = filteredProblems.slice(startIndex, startIndex + PROBLEMS_PER_PAGE);

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          Coding Problems
        </h1>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <div className="flex flex-col sm:flex-row gap-4">
            <DifficultyFilter value={selectedDifficulty} onChange={setSelectedDifficulty} />
            <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {currentProblems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}