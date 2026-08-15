// Course data structure for JavaSchoolLab

import { CollectionFramework } from "./CollectionFramework";
import { coreJava } from "./coreJava";
import { designPattern } from "./designPattern";
import { Hibernate } from "./Hibernate";
import { HtmlandCSS } from "./HtmlandCSS";
import { JSPServlets } from "./JSPServlet";
import { MySQLCSS } from "./MySQLCSS";
import { Reactjs } from "./Reactjs";
import {SpringMVC} from "./SpringMVC";

export interface ContentBlock {
  content: string;
  codeExamples?: string[];
}

export interface Topic {
  id: string;
  name: string;
  beginner?: ContentBlock[];
  intermediate?: ContentBlock[];
  expert?: ContentBlock[];
}

export interface SubTopic {
  id: string;
  name: string;
  topics: Topic[];
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

export const coursesData: Course[] = [
  ...HtmlandCSS,
  ...coreJava,
  ...JSPServlets,
  ...CollectionFramework,
  ...designPattern,
  ...MySQLCSS,
  ...Hibernate,
  ...Reactjs,
  ...SpringMVC
];
