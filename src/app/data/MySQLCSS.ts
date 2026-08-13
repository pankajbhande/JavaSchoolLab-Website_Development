// Minimal, conflict-free MySQL module
export interface ContentBlock {
  content: string;
  codeExamples?: string[];
}

export interface Topic {
  id?: string;
  name?: string;
  beginner?: ContentBlock[];
  intermediate?: ContentBlock[];
  expert?: ContentBlock[];
}

export interface SubTopic {
  id: string;
  name: string;
  topics?: Topic[];
}

export interface Course {
  id: string;
  name: string;
  icon: string;
  subTopics: SubTopic[];
  cheatNotes: string[];
  interviewQuestions: {
    company: string;
    questions: string[];
  }[];
}

// Provide an empty but valid export so imports succeed while resolving merge conflicts.
export const MySQLCSS: Course[] = [];
