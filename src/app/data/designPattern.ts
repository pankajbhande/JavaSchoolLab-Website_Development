export interface ContentBlock {
    content: string;          // HTML content
    codeExamples?: string[];  // optional code examples

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

export const designPattern: Course[] = [
    {

        id: 'design-patterns',
        name: 'Design Patterns in Java',
        icon: 'design_patterns_icon.png',
        subTopics: [
            {
                id: 'creational-patterns',
                name: 'Creational Patterns',
                topics: [
                    {
                        id: 'singleton-pattern',
                        name: 'Singleton Pattern',

                        beginner: [
                            {
                                content: `<h2>Singleton Pattern</h2>
<p>The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.</p>`,


                                codeExamples: [
                                    `// Singleton Pattern Example
public class Singleton {
    private static Singleton instance;
                                
    private Singleton() {}
                                
    public static Singleton getInstance() {
                                
                                `]
                            }
                        ]
                    }
                ]
            },

        ],
        cheatNotes: [
            'DesignPatterns_CheatSheet.pdf'
        ],
        interviewQuestions: [
            {
                company: 'TechCorp',
                questions: [
                    'What is the Singleton Pattern and when would you use it?',
                    'Can you explain the Factory Method Pattern with an example?'
                ]
            },
        ]
    }

]
