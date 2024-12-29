"use client";

import { Editor } from "@monaco-editor/react";

interface MonacoEditorProps {
  language: string;
  value: string;
  onChange: (value: string | undefined) => void;
}

export function MonacoEditor({ language, value, onChange }: MonacoEditorProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Editor
        height="400px"
        language={language}
        value={value}
        onChange={onChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}