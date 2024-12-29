"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LanguageSelector } from "./language-selector";
import { MonacoEditor } from "./monaco-editor";
import type { CodeEditorProps } from "./types";

export function CodeEditor({
  defaultLanguage = "javascript",
  defaultValue = "// Write your code here\n",
  onSubmit,
}: CodeEditorProps) {
  const [language, setLanguage] = useState(defaultLanguage);
  const [code, setCode] = useState(defaultValue);
  const [isExecuting, setIsExecuting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!onSubmit) return;
    
    setIsExecuting(true);
    try {
      await onSubmit(code);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to execute code",
        variant: "destructive",
      });
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LanguageSelector value={language} onChange={setLanguage} />
        <Button onClick={handleSubmit} disabled={isExecuting}>
          {isExecuting ? "Running..." : "Run Code"}
        </Button>
      </div>

      <MonacoEditor
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
}