export interface CodeEditorProps {
  defaultLanguage?: string;
  defaultValue?: string;
  onSubmit?: (code: string) => Promise<void>;
}

export interface Language {
  id: string;
  label: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "cpp", label: "C++" },
];