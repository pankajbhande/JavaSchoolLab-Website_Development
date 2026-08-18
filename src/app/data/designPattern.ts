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
    "id": "design-patterns",
    "name": "Design Patterns in Java",
    "icon": "design_patterns_icon.png",
    "subTopics": [
        {
            "id": "1-introduction-to-design-patterns",
            "name": "1. Introduction to Design Patterns",
            "topics": [
                {
                    "id": "1-1-what-is-design-pattern",
                    "name": "1.1 What is Design Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is a Design Pattern?</h2><p>• A <b>Design Pattern</b> is a battle-tested, reusable template or solution for commonly occurring software design problems in object-oriented programming.</p><br><p>• Design patterns are not final code snippets; rather, they are conceptual blueprints that explain how to solve a structural or behavioral software challenge efficiently.</p>",
                            "codeExamples": [
                                "// Design patterns represent best practices refined by Gang of Four (GoF)\n// E.g., Encapsulate what varies, Program to interfaces, Favor composition over inheritance."
                            ]
                        }
                    ]
                },
                {
                    "id": "1-2-why-design-patterns-are-used",
                    "name": "1.2 Why Design Patterns are Used",
                    "beginner": [
                        {
                            "content": "<h2>Why Are Design Patterns Used?</h2><ul><li>• <b>Proven Solutions:</b> Solves architecture problems without re-inventing the wheel.</li><li>• <b>Code Reusability & Maintainability:</b> Ensures clean, modular, and loosely coupled code structure.</li><li>• <b>Standardized Vocabulary:</b> Allows developers to communicate architectural intent easily (e.g. 'Use a Factory here').</li><li>• <b>Accelerated Development:</b> Reduces debugging and refactoring overhead in large systems.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "1-3-advantages-of-design-patterns",
                    "name": "1.3 Advantages of Design Patterns",
                    "beginner": [
                        {
                            "content": "<h2>Key Advantages of Design Patterns</h2><ul><li>• <b>Flexibility:</b> Easy to extend applications with new features without breaking existing code.</li><li>• <b>Loose Coupling:</b> Decouples interfaces from implementation details.</li><li>• <b>Easier Code Review & Maintenance:</b> Standardized code patterns are easier to audit and debug.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "1-4-types-of-design-patterns",
                    "name": "1.4 Types of Design Patterns",
                    "beginner": [
                        {
                            "content": "<h2>Categories of Design Patterns (GoF)</h2><ul><li>• <b>Creational Patterns:</b> Deal with object creation mechanisms (Singleton, Factory, Builder, Prototype, Abstract Factory).</li><li>• <b>Structural Patterns:</b> Deal with object composition and class relationships (Adapter, Decorator, Facade, Proxy, Flyweight, Bridge, Composite).</li><li>• <b>Behavioral Patterns:</b> Deal with algorithm execution and communication between objects (Observer, Strategy, State, Command, Chain of Responsibility, Iterator, Template Method).</li></ul>"
                        }
                    ]
                },
                {
                    "id": "1-5-design-pattern-vs-framework",
                    "name": "1.5 Design Pattern vs Framework",
                    "beginner": [
                        {
                            "content": "<h2>Design Pattern vs Framework</h2><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><thead><tr style='background-color:#f2f2f2;'><th>Aspect</th><th>Design Pattern</th><th>Framework</th></tr></thead><tbody><tr><td><b>Definition</b></td><td>Conceptual blueprint/strategy to solve a specific problem.</td><td>A executable set of libraries providing application structure.</td></tr><tr><td><b>Scope</b></td><td>Focuses on specific component relationships.</td><td>Focuses on full application lifecycle and ecosystem.</td></tr><tr><td><b>Code Presence</b></td><td>No direct code included; implemented by developer.</td><td>Includes reusable compiled code and execution engine.</td></tr></tbody></table>"
                        }
                    ]
                },
                {
                    "id": "1-6-design-pattern-vs-architecture",
                    "name": "1.6 Design Pattern vs Architecture",
                    "beginner": [
                        {
                            "content": "<h2>Design Pattern vs Architecture</h2><p>• <b>Software Architecture</b> defines high-level system structure, tech stack, and module partitioning (e.g., Microservices, Layered Architecture, Monolith).</p><p>• <b>Design Patterns</b> operate at the code/class level inside individual software modules.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "2-creational-design-patterns",
            "name": "2. Creational Design Patterns",
            "topics": [
                {
                    "id": "2-1-singleton-pattern-overview",
                    "name": "2.1 Singleton Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Singleton Pattern Overview</h2><p>• Ensures that a class has only one instance and provides a global point of access to it.</p>"
                        }
                    ]
                },
                {
                    "id": "2-2-factory-pattern-overview",
                    "name": "2.2 Factory Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Factory Method Pattern Overview</h2><p>• Defines an interface for creating an object, but lets subclasses decide which class to instantiate.</p>"
                        }
                    ]
                },
                {
                    "id": "2-3-abstract-factory-pattern-overview",
                    "name": "2.3 Abstract Factory Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Abstract Factory Pattern Overview</h2><p>• Provides an interface for creating families of related or dependent objects without specifying their concrete classes.</p>"
                        }
                    ]
                },
                {
                    "id": "2-4-builder-pattern-overview",
                    "name": "2.4 Builder Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Builder Pattern Overview</h2><p>• Separates the construction of a complex object from its representation so that the same construction process can create different representations.</p>"
                        }
                    ]
                },
                {
                    "id": "2-5-prototype-pattern-overview",
                    "name": "2.5 Prototype Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Prototype Pattern Overview</h2><p>• Specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "3-structural-design-patterns",
            "name": "3. Structural Design Patterns",
            "topics": [
                {
                    "id": "3-1-adapter-pattern-overview",
                    "name": "3.1 Adapter Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Adapter Pattern Overview</h2><p>• Converts the interface of a class into another interface that clients expect.</p>"
                        }
                    ]
                },
                {
                    "id": "3-2-bridge-pattern-overview",
                    "name": "3.2 Bridge Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Bridge Pattern Overview</h2><p>• Decouples an abstraction from its implementation so that the two can vary independently.</p>"
                        }
                    ]
                },
                {
                    "id": "3-3-composite-pattern-overview",
                    "name": "3.3 Composite Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Composite Pattern Overview</h2><p>• Composes objects into tree structures to represent part-whole hierarchies.</p>"
                        }
                    ]
                },
                {
                    "id": "3-4-decorator-pattern-overview",
                    "name": "3.4 Decorator Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Decorator Pattern Overview</h2><p>• Attaches additional responsibilities to an object dynamically without modifying original class structure.</p>"
                        }
                    ]
                },
                {
                    "id": "3-5-facade-pattern-overview",
                    "name": "3.5 Facade Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Facade Pattern Overview</h2><p>• Provides a unified simplified interface to a set of interfaces in a subsystem.</p>"
                        }
                    ]
                },
                {
                    "id": "3-6-flyweight-pattern-overview",
                    "name": "3.6 Flyweight Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Flyweight Pattern Overview</h2><p>• Uses sharing to support large numbers of fine-grained objects efficiently by sharing intrinsic state.</p>"
                        }
                    ]
                },
                {
                    "id": "3-7-proxy-pattern-overview",
                    "name": "3.7 Proxy Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Proxy Pattern Overview</h2><p>• Provides a surrogate or placeholder for another object to control access to it.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "4-behavioral-design-patterns",
            "name": "4. Behavioral Design Patterns",
            "topics": [
                {
                    "id": "4-1-chain-of-responsibility-overview",
                    "name": "4.1 Chain of Responsibility Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Chain of Responsibility</h2><p>• Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.</p>"
                        }
                    ]
                },
                {
                    "id": "4-2-command-pattern-overview",
                    "name": "4.2 Command Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Command Pattern</h2><p>• Encapsulates a request as an object, thereby letting you parameterize clients with different requests.</p>"
                        }
                    ]
                },
                {
                    "id": "4-3-interpreter-pattern-overview",
                    "name": "4.3 Interpreter Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Interpreter Pattern</h2><p>• Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.</p>"
                        }
                    ]
                },
                {
                    "id": "4-4-iterator-pattern-overview",
                    "name": "4.4 Iterator Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Iterator Pattern</h2><p>• Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.</p>"
                        }
                    ]
                },
                {
                    "id": "4-5-mediator-pattern-overview",
                    "name": "4.5 Mediator Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Mediator Pattern</h2><p>• Defines an object that encapsulates how a set of objects interact, promoting loose coupling by keeping objects from referring to each other explicitly.</p>"
                        }
                    ]
                },
                {
                    "id": "4-6-memento-pattern-overview",
                    "name": "4.6 Memento Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Memento Pattern</h2><p>• Captures and externalizes an object's internal state so that the object can be restored to this state later without violating encapsulation.</p>"
                        }
                    ]
                },
                {
                    "id": "4-7-observer-pattern-overview",
                    "name": "4.7 Observer Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Observer Pattern</h2><p>• Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.</p>"
                        }
                    ]
                },
                {
                    "id": "4-8-state-pattern-overview",
                    "name": "4.8 State Pattern",
                    "beginner": [
                        {
                            "content": "<h2>State Pattern</h2><p>• Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.</p>"
                        }
                    ]
                },
                {
                    "id": "4-9-strategy-pattern-overview",
                    "name": "4.9 Strategy Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Strategy Pattern</h2><p>• Defines a family of algorithms, encapsulates each one, and makes them interchangeable.</p>"
                        }
                    ]
                },
                {
                    "id": "4-10-template-method-pattern-overview",
                    "name": "4.10 Template Method Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Template Method Pattern</h2><p>• Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses.</p>"
                        }
                    ]
                },
                {
                    "id": "4-11-visitor-pattern-overview",
                    "name": "4.11 Visitor Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Visitor Pattern</h2><p>• Represents an operation to be performed on elements of an object structure without changing the classes on which it operates.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "5-singleton-design-pattern",
            "name": "5. Singleton Design Pattern",
            "topics": [
                {
                    "id": "5-1-what-is-singleton-pattern",
                    "name": "5.1 What is Singleton Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Singleton Pattern?</h2><p>• Ensures that a class has only one instance created in the JVM and provides global access to that instance.</p>"
                        }
                    ]
                },
                {
                    "id": "5-2-need-for-singleton-pattern",
                    "name": "5.2 Need for Singleton Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Need for Singleton</h2><p>• Shared resources like database pools, logger instances, hardware drivers, and configuration cache require a single access instance to save memory and avoid synchronization bugs.</p>"
                        }
                    ]
                },
                {
                    "id": "5-3-singleton-implementation",
                    "name": "5.3 Singleton Implementation",
                    "beginner": [
                        {
                            "content": "<h2>Basic Singleton Setup Steps</h2><ol><li>1. Private constructor to prevent direct creation via <code>new</code>.</li><li>2. Private static variable of the class instance.</li><li>3. Public static getter method returning the static instance.</li></ol>"
                        }
                    ]
                },
                {
                    "id": "5-4-eager-initialization",
                    "name": "5.4 Eager Initialization",
                    "beginner": [
                        {
                            "content": "<h2>Eager Initialization Singleton</h2><p>• Object instance is created at class loading time.</p>",
                            "codeExamples": [
                                "public class EagerSingleton {\n    private static final EagerSingleton instance = new EagerSingleton();\n    private EagerSingleton() {}\n    public static EagerSingleton getInstance() {\n        return instance;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-5-lazy-initialization",
                    "name": "5.5 Lazy Initialization",
                    "beginner": [
                        {
                            "content": "<h2>Lazy Initialization Singleton</h2><p>• Instance created only when requested for the first time.</p>",
                            "codeExamples": [
                                "public class LazySingleton {\n    private static LazySingleton instance;\n    private LazySingleton() {}\n    public static LazySingleton getInstance() {\n        if (instance == null) {\n            instance = new LazySingleton();\n        }\n        return instance;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-6-thread-safe-singleton",
                    "name": "5.6 Thread-Safe Singleton",
                    "beginner": [
                        {
                            "content": "<h2>Thread-Safe Singleton with Synchronized Method</h2>",
                            "codeExamples": [
                                "public class ThreadSafeSingleton {\n    private static ThreadSafeSingleton instance;\n    private ThreadSafeSingleton() {}\n    public static synchronized ThreadSafeSingleton getInstance() {\n        if (instance == null) {\n            instance = new ThreadSafeSingleton();\n        }\n        return instance;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-7-double-checked-locking",
                    "name": "5.7 Double-Checked Locking",
                    "beginner": [
                        {
                            "content": "<h2>Double-Checked Locking Singleton (Efficient Thread Safety)</h2>",
                            "codeExamples": [
                                "public class DoubleCheckedSingleton {\n    private static volatile DoubleCheckedSingleton instance;\n    private DoubleCheckedSingleton() {}\n    public static DoubleCheckedSingleton getInstance() {\n        if (instance == null) {\n            synchronized (DoubleCheckedSingleton.class) {\n                if (instance == null) {\n                    instance = new DoubleCheckedSingleton();\n                }\n            }\n        }\n        return instance;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-8-enum-singleton",
                    "name": "5.8 Enum Singleton",
                    "beginner": [
                        {
                            "content": "<h2>Enum Singleton (Best Practice against Reflection Attacks)</h2>",
                            "codeExamples": [
                                "public enum EnumSingleton {\n    INSTANCE;\n    public void doSomething() {\n        System.out.println(\"Enum Singleton Executing...\");\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-9-advantages-and-disadvantages",
                    "name": "5.9 Advantages and Disadvantages",
                    "beginner": [
                        {
                            "content": "<h2>Pros & Cons of Singleton</h2><p>• <b>Pros:</b> Memory saving, controlled global access.</p><p>• <b>Cons:</b> Harder to unit test (global state), can violate Single Responsibility Principle if overused.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "6-factory-design-pattern",
            "name": "6. Factory Design Pattern",
            "topics": [
                {
                    "id": "6-1-what-is-factory-pattern",
                    "name": "6.1 What is Factory Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Factory Pattern?</h2><p>• Provides a factory method to instantiate objects based on inputs without exposing instantiation logic to the client.</p>"
                        }
                    ]
                },
                {
                    "id": "6-2-need-for-factory-pattern",
                    "name": "6.2 Need for Factory Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Why Factory Pattern?</h2><p>• Decouples client code from specific concrete implementation classes.</p>"
                        }
                    ]
                },
                {
                    "id": "6-3-factory-pattern-example",
                    "name": "6.3 Factory Pattern Example",
                    "beginner": [
                        {
                            "content": "<h2>Complete Factory Pattern Example</h2>",
                            "codeExamples": [
                                "interface Notification {\n    void notifyUser();\n}\nclass SMSNotification implements Notification {\n    public void notifyUser() { System.out.println(\"Sending SMS\"); }\n}\nclass EmailNotification implements Notification {\n    public void notifyUser() { System.out.println(\"Sending Email\"); }\n}\nclass NotificationFactory {\n    public static Notification createNotification(String channel) {\n        if (channel.equalsIgnoreCase(\"SMS\")) return new SMSNotification();\n        if (channel.equalsIgnoreCase(\"EMAIL\")) return new EmailNotification();\n        throw new IllegalArgumentException(\"Unknown channel\");\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "6-4-factory-method",
                    "name": "6.4 Factory Method",
                    "beginner": [
                        {
                            "content": "<h2>Factory Method Structure</h2><p>• Defines abstract creation methods implemented by dedicated concrete factory classes.</p>"
                        }
                    ]
                },
                {
                    "id": "6-5-advantages-and-disadvantages",
                    "name": "6.5 Advantages and Disadvantages",
                    "beginner": [
                        {
                            "content": "<h2>Advantages & Disadvantages</h2><p>• <b>Pros:</b> Adheres to Open/Closed Principle.</p><p>• <b>Cons:</b> Increases total number of classes in system.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "7-builder-design-pattern",
            "name": "7. Builder Design Pattern",
            "topics": [
                {
                    "id": "7-1-what-is-builder-pattern",
                    "name": "7.1 What is Builder Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Builder Pattern?</h2><p>• Construct complex objects step-by-step using a dedicated inner builder instance.</p>"
                        }
                    ]
                },
                {
                    "id": "7-2-need-for-builder-pattern",
                    "name": "7.2 Need for Builder Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Why Use Builder?</h2><p>• Avoids telescoping constructors with 10+ parameters and optional fields.</p>"
                        }
                    ]
                },
                {
                    "id": "7-3-builder-pattern-example",
                    "name": "7.3 Builder Pattern Example",
                    "beginner": [
                        {
                            "content": "<h2>Builder Pattern Implementation</h2>",
                            "codeExamples": [
                                "public class Computer {\n    private String HDD;\n    private String RAM;\n    private boolean isGraphicsCardEnabled;\n\n    private Computer(Builder b) {\n        this.HDD = b.HDD;\n        this.RAM = b.RAM;\n        this.isGraphicsCardEnabled = b.isGraphicsCardEnabled;\n    }\n\n    public static class Builder {\n        private String HDD;\n        private String RAM;\n        private boolean isGraphicsCardEnabled;\n        public Builder(String hdd, String ram) { this.HDD = hdd; this.RAM = ram; }\n        public Builder setGraphicsCard(boolean enabled) { this.isGraphicsCardEnabled = enabled; return this; }\n        public Computer build() { return new Computer(this); }\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "7-4-method-chaining",
                    "name": "7.4 Method Chaining",
                    "beginner": [
                        {
                            "content": "<h2>Fluent Interface / Method Chaining</h2><p>• Setter methods return <code>this</code> to allow chaining method calls: <code>new Builder().setA().setB().build()</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "7-5-advantages-and-disadvantages",
                    "name": "7.5 Advantages and Disadvantages",
                    "beginner": [
                        {
                            "content": "<h2>Pros & Cons of Builder</h2><p>• <b>Pros:</b> Highly readable object construction and immutability.</p><p>• <b>Cons:</b> Requires writing duplicate builder fields.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "8-prototype-design-pattern",
            "name": "8. Prototype Design Pattern",
            "topics": [
                {
                    "id": "8-1-what-is-prototype-pattern",
                    "name": "8.1 What is Prototype Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Prototype Pattern?</h2><p>• Creates new objects by cloning an existing prototype instance instead of running costly database or initialization operations.</p>"
                        }
                    ]
                },
                {
                    "id": "8-2-object-cloning",
                    "name": "8.2 Object Cloning",
                    "beginner": [
                        {
                            "content": "<h2>Object Cloning</h2><p>• Duplicating existing object memory state using Java <code>clone()</code> or copy constructors.</p>"
                        }
                    ]
                },
                {
                    "id": "8-3-shallow-copy",
                    "name": "8.4 Shallow Copy",
                    "beginner": [
                        {
                            "content": "<h2>Shallow Copy</h2><p>• Copies object primitive fields; reference objects still point to the same memory addresses.</p>"
                        }
                    ]
                },
                {
                    "id": "8-4-deep-copy",
                    "name": "8.4 Deep Copy",
                    "beginner": [
                        {
                            "content": "<h2>Deep Copy</h2><p>• Recursively clones primitive fields and all referenced nested objects.</p>"
                        }
                    ]
                },
                {
                    "id": "8-5-cloneable-interface",
                    "name": "8.5 Cloneable Interface",
                    "beginner": [
                        {
                            "content": "<h2>Java Cloneable Interface</h2><p>• Marker interface allowing calls to <code>Object.clone()</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "8-6-advantages-and-disadvantages",
                    "name": "8.6 Advantages and Disadvantages",
                    "beginner": [
                        {
                            "content": "<h2>Pros & Cons of Prototype</h2><p>• <b>Pros:</b> Improves performance when object creation is expensive.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "9-adapter-design-pattern",
            "name": "9. Adapter Design Pattern",
            "topics": [
                {
                    "id": "9-1-what-is-adapter-pattern",
                    "name": "9.1 What is Adapter Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>Adapter Pattern</h2><p>• Acts as a bridge between two incompatible interfaces.</p>"
                        }
                    ]
                },
                {
                    "id": "9-2-need-for-adapter-pattern",
                    "name": "9.2 Need for Adapter Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Why Adapter Pattern?</h2><p>• Allows legacy APIs or 3rd party libraries to work seamlessly with modern application interfaces without rewriting code.</p>"
                        }
                    ]
                },
                {
                    "id": "9-3-class-adapter",
                    "name": "9.3 Class Adapter",
                    "beginner": [
                        {
                            "content": "<h2>Class Adapter</h2><p>• Uses multiple inheritance (or extends target class while implementing interface) to adapt.</p>"
                        }
                    ]
                },
                {
                    "id": "9-4-object-adapter",
                    "name": "9.4 Object Adapter",
                    "beginner": [
                        {
                            "content": "<h2>Object Adapter (Preferred)</h2><p>• Uses object composition to wrap the adaptee instance inside the adapter class.</p>"
                        }
                    ]
                },
                {
                    "id": "9-5-real-time-example",
                    "name": "9.5 Real-Time Example",
                    "beginner": [
                        {
                            "content": "<h2>Real-Time Adapter Example</h2><p>• Indian vs US Socket Charger Adapter converting 240V to 110V output.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "10-decorator-design-pattern",
            "name": "10. Decorator Design Pattern",
            "topics": [
                {
                    "id": "10-1-what-is-decorator-pattern",
                    "name": "10.1 What is Decorator Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Decorator Pattern?</h2><p>• Dynamically adds new functionality to an object without altering its structure or extending base classes.</p>"
                        }
                    ]
                },
                {
                    "id": "10-2-need-for-decorator-pattern",
                    "name": "10.2 Need for Decorator Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Why Decorator?</h2><p>• Prevents class explosion caused by inheriting dozens of sub-combos (e.g. PlainCoffee, MilkCoffee, SugarMilkCoffee).</p>"
                        }
                    ]
                },
                {
                    "id": "10-3-decorator-pattern-example",
                    "name": "10.3 Decorator Pattern Example",
                    "beginner": [
                        {
                            "content": "<h2>Coffee Decorator Example</h2>",
                            "codeExamples": [
                                "interface Coffee {\n    double getCost();\n}\nclass SimpleCoffee implements Coffee {\n    public double getCost() { return 5.0; }\n}\nabstract class CoffeeDecorator implements Coffee {\n    protected Coffee decoratedCoffee;\n    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }\n    public double getCost() { return decoratedCoffee.getCost(); }\n}\nclass MilkDecorator extends CoffeeDecorator {\n    public MilkDecorator(Coffee c) { super(c); }\n    public double getCost() { return super.getCost() + 2.0; }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "10-4-real-time-example",
                    "name": "10.4 Real-Time Example",
                    "beginner": [
                        {
                            "content": "<h2>Java I/O Decorators</h2><p>• Java I/O streams use Decorator Pattern: <code>new BufferedReader(new FileReader(\"file.txt\"))</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "10-5-advantages-and-disadvantages",
                    "name": "10.5 Advantages and Disadvantages",
                    "beginner": [
                        {
                            "content": "<h2>Pros & Cons of Decorator</h2><p>• <b>Pros:</b> Flexible runtime augmentation of object behaviors.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "11-facade-design-pattern",
            "name": "11. Facade Design Pattern",
            "topics": [
                {
                    "id": "11-1-what-is-facade-pattern",
                    "name": "11.1 What is Facade Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Facade Pattern?</h2><p>• Hides complex subsystem implementation details behind a clean, unified high-level interface.</p>"
                        }
                    ]
                },
                {
                    "id": "11-2-need-for-facade-pattern",
                    "name": "11.2 Need for Facade Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Why Facade?</h2><p>• Simplifies client interaction when subsystems involve many complex interdependent steps.</p>"
                        }
                    ]
                },
                {
                    "id": "11-3-facade-pattern-example",
                    "name": "11.3 Facade Pattern Example",
                    "beginner": [
                        {
                            "content": "<h2>Home Theater Facade Example</h2>",
                            "codeExamples": [
                                "public class HomeTheaterFacade {\n    private Amplifier amp;\n    private DvdPlayer dvd;\n    private Projector projector;\n    public void watchMovie() {\n        projector.on();\n        amp.on();\n        dvd.play();\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "11-4-real-time-example",
                    "name": "11.4 Real-Time Example",
                    "beginner": [
                        {
                            "content": "<h2>Bank Account Transfer Facade</h2><p>• One single <code>transferMoney()</code> call executes PIN validation, balance checks, debit, credit, and SMS notification steps.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "12-observer-design-pattern",
            "name": "12. Observer Design Pattern",
            "topics": [
                {
                    "id": "12-1-what-is-observer-pattern",
                    "name": "12.1 What is Observer Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Observer Pattern?</h2><p>• Pub-Sub style notification pattern where state changes in a Subject automatically trigger updates to registered Observers.</p>"
                        }
                    ]
                },
                {
                    "id": "12-2-subject-and-observer",
                    "name": "12.2 Subject and Observer",
                    "beginner": [
                        {
                            "content": "<h2>Subject vs Observer</h2><p>• <b>Subject:</b> Maintains subscriber list and broadcasts events.</p><p>• <b>Observer:</b> Subscribes to Subject to receive event push updates.</p>"
                        }
                    ]
                },
                {
                    "id": "12-3-observer-pattern-example",
                    "name": "12.3 Observer Pattern Example",
                    "beginner": [
                        {
                            "content": "<h2>Weather Station Observer Example</h2>",
                            "codeExamples": [
                                "interface Observer { void update(float temp); }\nclass PhoneDisplay implements Observer {\n    public void update(float temp) { System.out.println(\"Temp: \" + temp); }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "12-4-real-time-example",
                    "name": "12.4 Real-Time Example",
                    "beginner": [
                        {
                            "content": "<h2>YouTube Channel Subscriber System</h2><p>• Channel uploads video (Subject) -> All Subscribed Users (Observers) receive mobile notifications!</p>"
                        }
                    ]
                },
                {
                    "id": "12-5-advantages-and-disadvantages",
                    "name": "12.5 Advantages and Disadvantages",
                    "beginner": [
                        {
                            "content": "<h2>Pros & Cons of Observer</h2><p>• Loose coupling between Subject and Observers.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "13-strategy-design-pattern",
            "name": "13. Strategy Design Pattern",
            "topics": [
                {
                    "id": "13-1-what-is-strategy-pattern",
                    "name": "13.1 What is Strategy Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Strategy Pattern?</h2><p>• Defines a family of interchangeable algorithms and allows selecting one dynamically at runtime.</p>"
                        }
                    ]
                },
                {
                    "id": "13-2-need-for-strategy-pattern",
                    "name": "13.2 Need for Strategy Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Why Strategy Pattern?</h2><p>• Replaces messy <code>if-else</code> or <code>switch-case</code> statements with clean object interfaces.</p>"
                        }
                    ]
                },
                {
                    "id": "13-3-strategy-pattern-example",
                    "name": "13.3 Strategy Pattern Example",
                    "beginner": [
                        {
                            "content": "<h2>Payment Strategy Example</h2>",
                            "codeExamples": [
                                "interface PaymentStrategy { void pay(int amount); }\nclass CreditCardStrategy implements PaymentStrategy {\n    public void pay(int amount) { System.out.println(\"Paid \" + amount + \" via Credit Card\"); }\n}\nclass PayPalStrategy implements PaymentStrategy {\n    public void pay(int amount) { System.out.println(\"Paid \" + amount + \" via PayPal\"); }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "13-4-strategy-with-interface",
                    "name": "13.4 Strategy with Interface",
                    "beginner": [
                        {
                            "content": "<h2>Strategy Execution Context</h2><p>• Context holds reference to <code>PaymentStrategy</code> interface and executes strategy method dynamically.</p>"
                        }
                    ]
                },
                {
                    "id": "13-5-real-time-example",
                    "name": "13.5 Real-Time Example",
                    "beginner": [
                        {
                            "content": "<h2>Google Maps Navigation Strategies</h2><p>• Route calculation strategies: Car Strategy, Walking Strategy, Transit Strategy.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "14-template-method-pattern",
            "name": "14. Template Method Pattern",
            "topics": [
                {
                    "id": "14-1-what-is-template-method-pattern",
                    "name": "14.1 What is Template Method Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Template Method Pattern?</h2><p>• Defines the mandatory steps of an algorithm in a base class final method while allowing subclasses to override specific individual steps.</p>"
                        }
                    ]
                },
                {
                    "id": "14-2-abstract-class-and-template-method",
                    "name": "14.2 Abstract Class and Template Method",
                    "beginner": [
                        {
                            "content": "<h2>Abstract Class Blueprint</h2>",
                            "codeExamples": [
                                "public abstract class Beverage {\n    // Template method declared final!\n    public final void prepareRecipe() {\n        boilWater();\n        brew();\n        pourInCup();\n    }\n    abstract void brew();\n    private void boilWater() { System.out.println(\"Boiling water\"); }\n    private void pourInCup() { System.out.println(\"Pouring\"); }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "14-3-template-method-example",
                    "name": "14.3 Template Method Example",
                    "beginner": [
                        {
                            "content": "<h2>Tea vs Coffee Implementation</h2><p>• <code>Tea</code> overrides <code>brew()</code> to steep tea leaves; <code>Coffee</code> overrides <code>brew()</code> to filter coffee grounds.</p>"
                        }
                    ]
                },
                {
                    "id": "14-4-real-time-example",
                    "name": "14.4 Real-Time Example",
                    "beginner": [
                        {
                            "content": "<h2>Spring Framework JdbcTemplate</h2><p>• Spring's <code>JdbcTemplate</code> encapsulates connection opening/closing steps, leaving query execution to custom callbacks!</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "15-chain-of-responsibility-pattern",
            "name": "15. Chain of Responsibility Pattern",
            "topics": [
                {
                    "id": "15-1-what-is-chain-of-responsibility",
                    "name": "15.1 What is Chain of Responsibility?",
                    "beginner": [
                        {
                            "content": "<h2>Chain of Responsibility</h2><p>• Passes a request along a chain of potential handlers until one handler processes it.</p>"
                        }
                    ]
                },
                {
                    "id": "15-2-handler",
                    "name": "15.2 Handler",
                    "beginner": [
                        {
                            "content": "<h2>Handler Interface</h2><p>• Interface defining <code>setNextHandler()</code> and <code>handleRequest()</code> methods.</p>"
                        }
                    ]
                },
                {
                    "id": "15-3-request-processing-chain",
                    "name": "15.3 Request Processing Chain",
                    "beginner": [
                        {
                            "content": "<h2>Chain Execution Mechanism</h2><p>• Handler checks if it can satisfy the request. If yes, it processes it; if no, forwards request to next handler.</p>"
                        }
                    ]
                },
                {
                    "id": "15-4-example",
                    "name": "15.4 Example",
                    "beginner": [
                        {
                            "content": "<h2>Logger Level Chain Example</h2><p>• InfoLogger -> DebugLogger -> ErrorLogger chain execution.</p>"
                        }
                    ]
                },
                {
                    "id": "15-5-real-time-applications",
                    "name": "15.5 Real-Time Applications",
                    "beginner": [
                        {
                            "content": "<h2>Servlet Filters in Spring Security</h2><p>• Request passes through <code>FilterChain</code>: AuthenticationFilter -> CorsFilter -> CsrfFilter -> AuthorizationFilter.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "16-command-design-pattern",
            "name": "16. Command Design Pattern",
            "topics": [
                {
                    "id": "16-1-what-is-command-pattern",
                    "name": "16.1 What is Command Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Command Pattern?</h2><p>• Encapsulates a request as a standalone object containing all information about the call.</p>"
                        }
                    ]
                },
                {
                    "id": "16-2-command-interface",
                    "name": "16.2 Command Interface",
                    "beginner": [
                        {
                            "content": "<h2>Command Interface</h2><p>• Interface declaring single <code>execute()</code> (and optional <code>undo()</code>) method.</p>"
                        }
                    ]
                },
                {
                    "id": "16-3-concrete-command",
                    "name": "16.3 Concrete Command",
                    "beginner": [
                        {
                            "content": "<h2>Concrete Command</h2><p>• Implements Command interface and delegates execution to Receiver.</p>"
                        }
                    ]
                },
                {
                    "id": "16-4-invoker-and-receiver",
                    "name": "16.4 Invoker and Receiver",
                    "beginner": [
                        {
                            "content": "<h2>Invoker vs Receiver</h2><p>• <b>Invoker:</b> Triggers the command (e.g. Remote Control Button).</p><p>• <b>Receiver:</b> Performs actual action (e.g. Light Bulb).</p>"
                        }
                    ]
                },
                {
                    "id": "16-5-example",
                    "name": "16.5 Example",
                    "beginner": [
                        {
                            "content": "<h2>Smart Home Remote Automation Example</h2>",
                            "codeExamples": [
                                "interface Command { void execute(); }\nclass LightOnCommand implements Command {\n    private Light light;\n    public LightOnCommand(Light l) { this.light = l; }\n    public void execute() { light.turnOn(); }\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "17-iterator-design-pattern",
            "name": "17. Iterator Design Pattern",
            "topics": [
                {
                    "id": "17-1-what-is-iterator-pattern",
                    "name": "17.1 What is Iterator Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Iterator Pattern?</h2><p>• Sequential access to elements of a collection without exposing underlying structure (Array, Tree, LinkedList).</p>"
                        }
                    ]
                },
                {
                    "id": "17-2-iterator-interface",
                    "name": "17.2 Iterator Interface",
                    "beginner": [
                        {
                            "content": "<h2>Iterator Methods</h2><p>• <code>hasNext()</code> and <code>next()</code> methods.</p>"
                        }
                    ]
                },
                {
                    "id": "17-3-iterable-interface",
                    "name": "17.3 Iterable Interface",
                    "beginner": [
                        {
                            "content": "<h2>Java Iterable Interface</h2><p>• <code>java.lang.Iterable</code> interface allowing foreach loop support.</p>"
                        }
                    ]
                },
                {
                    "id": "17-4-iterator-example",
                    "name": "17.4 Iterator Example",
                    "beginner": [
                        {
                            "content": "<h2>Custom NameRepository Iterator</h2>",
                            "codeExamples": [
                                "public class NameRepository implements Iterable<String> {\n    private String[] names = {\"Alice\", \"Bob\", \"Charlie\"};\n    public Iterator<String> iterator() {\n        return Arrays.asList(names).iterator();\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "17-5-java-collections-and-iterator",
                    "name": "17.5 Java Collections and Iterator",
                    "beginner": [
                        {
                            "content": "<h2>Java Collections Framework Integration</h2><p>• All Java Collections (ArrayList, HashSet, LinkedList) implement Iterator Pattern natively.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "18-state-design-pattern",
            "name": "18. State Design Pattern",
            "topics": [
                {
                    "id": "18-1-what-is-state-pattern",
                    "name": "18.1 What is State Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is State Pattern?</h2><p>• Alters object behavior when its internal state changes.</p>"
                        }
                    ]
                },
                {
                    "id": "18-2-state-interface",
                    "name": "18.2 State Interface",
                    "beginner": [
                        {
                            "content": "<h2>State Interface</h2><p>• Interface defining state-dependent actions.</p>"
                        }
                    ]
                },
                {
                    "id": "18-3-context",
                    "name": "18.3 Context",
                    "beginner": [
                        {
                            "content": "<h2>Context Class</h2><p>• Holds reference to current state object and delegates requests.</p>"
                        }
                    ]
                },
                {
                    "id": "18-4-state-pattern-example",
                    "name": "18.4 State Pattern Example",
                    "beginner": [
                        {
                            "content": "<h2>Vending Machine State Example</h2><p>• States: HasCoinState, NoCoinState, SoldState, SoldOutState.</p>"
                        }
                    ]
                },
                {
                    "id": "18-5-real-time-example",
                    "name": "18.5 Real-Time Example",
                    "beginner": [
                        {
                            "content": "<h2>E-Commerce Order State Machine</h2><p>• Order States: OrderPlaced -> Processing -> Shipped -> Delivered.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "19-mvc-design-pattern",
            "name": "19. MVC Design Pattern",
            "topics": [
                {
                    "id": "19-1-what-is-mvc-pattern",
                    "name": "19.1 What is MVC Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>What is Model-View-Controller (MVC)?</h2><p>• Architectural design pattern that separates application into three main components: Model, View, and Controller.</p>"
                        }
                    ]
                },
                {
                    "id": "19-2-model",
                    "name": "19.2 Model",
                    "beginner": [
                        {
                            "content": "<h2>Model Component</h2><p>• Encapsulates application data, POJOs, and business state.</p>"
                        }
                    ]
                },
                {
                    "id": "19-3-view",
                    "name": "19.3 View",
                    "beginner": [
                        {
                            "content": "<h2>View Component</h2><p>• Renders UI output to user (HTML/CSS/JSP/Thymeleaf).</p>"
                        }
                    ]
                },
                {
                    "id": "19-4-controller",
                    "name": "19.4 Controller",
                    "beginner": [
                        {
                            "content": "<h2>Controller Component</h2><p>• Processes user input HTTP requests, updates Model, and picks View to render.</p>"
                        }
                    ]
                },
                {
                    "id": "19-5-mvc-flow",
                    "name": "19.5 MVC Flow",
                    "beginner": [
                        {
                            "content": "<h2>MVC Architecture Flow</h2><p>• User -> View -> Controller -> Model -> Controller -> View -> User.</p>"
                        }
                    ]
                },
                {
                    "id": "19-6-java-mvc-example",
                    "name": "19.6 Java MVC Example",
                    "beginner": [
                        {
                            "content": "<h2>Simple Java MVC Example</h2>",
                            "codeExamples": [
                                "class StudentModel { String name; }\nclass StudentView { void printDetails(String name) { System.out.println(\"Student: \" + name); } }\nclass StudentController {\n    private StudentModel model; private StudentView view;\n    public StudentController(StudentModel m, StudentView v) { this.model = m; this.view = v; }\n    public void updateView() { view.printDetails(model.name); }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "19-7-mvc-in-spring",
                    "name": "19.7 MVC in Spring",
                    "beginner": [
                        {
                            "content": "<h2>Spring Web MVC Architecture</h2><p>• Uses <code>DispatcherServlet</code> as Front Controller handling request mappings.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "20-dao-design-pattern",
            "name": "20. DAO Design Pattern",
            "topics": [
                {
                    "id": "20-1-what-is-dao-pattern",
                    "name": "20.1 What is DAO Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>Data Access Object (DAO) Pattern</h2><p>• Separates low-level data access APIs/operations from high-level business services.</p>"
                        }
                    ]
                },
                {
                    "id": "20-2-dao-interface",
                    "name": "20.2 DAO Interface",
                    "beginner": [
                        {
                            "content": "<h2>DAO Interface</h2><p>• Defines CRUD operations without database-specific implementation code.</p>"
                        }
                    ]
                },
                {
                    "id": "20-3-dao-implementation",
                    "name": "20.3 DAO Implementation",
                    "beginner": [
                        {
                            "content": "<h2>DAO Concrete Class</h2><p>• Implements DAO interface to interact with actual storage.</p>"
                        }
                    ]
                },
                {
                    "id": "20-4-dao-with-jdbc",
                    "name": "20.4 DAO with JDBC",
                    "beginner": [
                        {
                            "content": "<h2>JDBC DAO Implementation</h2>",
                            "codeExamples": [
                                "public class StudentDaoImpl implements StudentDao {\n    public Student getById(int id) {\n        // JDBC PreparedStatement and ResultSet logic\n        return new Student();\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "20-5-dao-with-spring-boot",
                    "name": "20.5 DAO with Spring Boot",
                    "beginner": [
                        {
                            "content": "<h2>Spring Boot DAO with @Repository</h2><p>• Spring Data JPA repositories serve as high-level DAO implementations.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "21-dto-design-pattern",
            "name": "21. DTO Design Pattern",
            "topics": [
                {
                    "id": "21-1-what-is-dto",
                    "name": "21.1 What is DTO?",
                    "beginner": [
                        {
                            "content": "<h2>Data Transfer Object (DTO)</h2><p>• Plain Java object used to carry data between client and server across network calls.</p>"
                        }
                    ]
                },
                {
                    "id": "21-2-need-for-dto",
                    "name": "21.2 Need for DTO",
                    "beginner": [
                        {
                            "content": "<h2>Why DTO?</h2><ul><li>• Prevents exposing database Entity schema directly.</li><li>• Avoids sending sensitive fields like passwords.</li><li>• Reduces network calls by bundling fields.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "21-3-entity-vs-dto",
                    "name": "21.3 Entity vs DTO",
                    "beginner": [
                        {
                            "content": "<h2>Entity vs DTO Comparison</h2><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><thead><tr style='background-color:#f2f2f2;'><th>Feature</th><th>Entity</th><th>DTO</th></tr></thead><tbody><tr><td><b>Purpose</b></td><td>Mapped to database table via JPA.</td><td>Carries REST payload data.</td></tr><tr><td><b>Annotations</b></td><td><code>@Entity</code>, <code>@Table</code>, <code>@Id</code>.</td><td>Validation annotations (<code>@NotBlank</code>).</td></tr></tbody></table>"
                        }
                    ]
                },
                {
                    "id": "21-4-dto-example",
                    "name": "21.4 DTO Example",
                    "beginner": [
                        {
                            "content": "<h2>DTO Java Record / Class</h2>",
                            "codeExamples": [
                                "public record UserDTO(Long id, String username, String email) {}"
                            ]
                        }
                    ]
                },
                {
                    "id": "21-5-dto-in-spring-boot-rest-api",
                    "name": "21.5 DTO in Spring Boot REST API",
                    "beginner": [
                        {
                            "content": "<h2>Mapping Entity to DTO in Controllers</h2><p>• Use ModelMapper, MapStruct, or manually map fields inside Service layer.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "22-repository-design-pattern",
            "name": "22. Repository Design Pattern",
            "topics": [
                {
                    "id": "22-1-what-is-repository-pattern",
                    "name": "22.1 What is Repository Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>Repository Pattern</h2><p>• Mediates between domain and data mapping layers using a collection-like interface for accessing domain objects.</p>"
                        }
                    ]
                },
                {
                    "id": "22-2-repository-interface",
                    "name": "22.2 Repository Interface",
                    "beginner": [
                        {
                            "content": "<h2>Repository Interface</h2><p>• Declares high-level domain query contracts.</p>"
                        }
                    ]
                },
                {
                    "id": "22-3-repository-implementation",
                    "name": "22.3 Repository Implementation",
                    "beginner": [
                        {
                            "content": "<h2>Concrete Repository</h2><p>• Implements data storage lookup logic using ORM or DB connections.</p>"
                        }
                    ]
                },
                {
                    "id": "22-4-repository-in-spring-data-jpa",
                    "name": "22.4 Repository in Spring Data JPA",
                    "beginner": [
                        {
                            "content": "<h2>Spring Data JpaRepository</h2>",
                            "codeExamples": [
                                "public interface UserRepository extends JpaRepository<User, Long> {\n    Optional<User> findByEmail(String email);\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "23-service-layer-pattern",
            "name": "23. Service Layer Pattern",
            "topics": [
                {
                    "id": "23-1-what-is-service-layer-pattern",
                    "name": "23.1 What is Service Layer Pattern?",
                    "beginner": [
                        {
                            "content": "<h2>Service Layer Pattern</h2><p>• Establishes a set of available operations and coordinates application response in each operation.</p>"
                        }
                    ]
                },
                {
                    "id": "23-2-service-interface",
                    "name": "23.2 Service Interface",
                    "beginner": [
                        {
                            "content": "<h2>Service Interface</h2><p>• Declares business capabilities (e.g. <code>UserService</code>).</p>"
                        }
                    ]
                },
                {
                    "id": "23-3-service-implementation",
                    "name": "23.3 Service Implementation",
                    "beginner": [
                        {
                            "content": "<h2>Service Implementation</h2>",
                            "codeExamples": [
                                "@Service\npublic class UserServiceImpl implements UserService {\n    private final UserRepository repository;\n    public UserServiceImpl(UserRepository r) { this.repository = r; }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "23-4-controller-service-repository-flow",
                    "name": "23.4 Controller-Service-Repository Flow",
                    "beginner": [
                        {
                            "content": "<h2>Layered Execution Flow</h2><p>• Controller -> Service Interface -> Service Implementation -> Repository Interface -> Database.</p>"
                        }
                    ]
                },
                {
                    "id": "23-5-service-layer-in-spring-boot",
                    "name": "23.5 Service Layer in Spring Boot",
                    "beginner": [
                        {
                            "content": "<h2>Spring Boot @Service Stereotype</h2><p>• Annotated with <code>@Service</code> and optional <code>@Transactional</code> for transaction management.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "24-design-patterns-in-spring-boot",
            "name": "24. Design Patterns in Spring Boot",
            "topics": [
                {
                    "id": "24-1-singleton-in-spring",
                    "name": "24.1 Singleton in Spring",
                    "beginner": [
                        {
                            "content": "<h2>Singleton Bean Scope in Spring</h2><p>• Default scope of all Spring beans managed by IoC container.</p>"
                        }
                    ]
                },
                {
                    "id": "24-2-factory-pattern-in-spring",
                    "name": "24.2 Factory Pattern in Spring",
                    "beginner": [
                        {
                            "content": "<h2>BeanFactory & ApplicationContext</h2><p>• Spring uses Factory Pattern to instantiate and manage bean lifecycles via <code>BeanFactory</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "24-3-proxy-pattern-in-spring",
                    "name": "24.3 Proxy Pattern in Spring",
                    "beginner": [
                        {
                            "content": "<h2>Spring AOP Dynamic Proxies</h2><p>• Used by Spring AOP for transaction management (<code>@Transactional</code>) and security proxies (JDK Dynamic Proxy / CGLIB).</p>"
                        }
                    ]
                },
                {
                    "id": "24-4-template-pattern-in-spring",
                    "name": "24.4 Template Pattern in Spring",
                    "beginner": [
                        {
                            "content": "<h2>Template Pattern in Spring Helpers</h2><p>• Standardized templates: <code>JdbcTemplate</code>, <code>RestTemplate</code>, <code>JmsTemplate</code>, <code>TransactionTemplate</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "24-5-mvc-pattern-in-spring-mvc",
                    "name": "24.5 MVC Pattern in Spring MVC",
                    "beginner": [
                        {
                            "content": "<h2>Spring Web MVC Framework</h2><p>• Implements MVC Pattern using <code>DispatcherServlet</code>, <code>HandlerMapping</code>, and <code>ViewResolver</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "24-6-dependency-injection-as-a-design-principle",
                    "name": "24.6 Dependency Injection as a Design Principle",
                    "beginner": [
                        {
                            "content": "<h2>Dependency Injection Core Principle</h2><p>• Fundamental IoC pattern powering Spring's loose coupling capability.</p>"
                        }
                    ]
                },
                {
                    "id": "24-7-repository-pattern-in-spring-data-jpa",
                    "name": "24.7 Repository Pattern in Spring Data JPA",
                    "beginner": [
                        {
                            "content": "<h2>Spring Data JpaRepository Abstraction</h2><p>• Encapsulates persistence store queries into standard repository interfaces.</p>"
                        }
                    ]
                },
                {
                    "id": "24-8-service-layer-pattern-in-spring",
                    "name": "24.8 Service Layer Pattern",
                    "beginner": [
                        {
                            "content": "<h2>Service Layer Pattern in Enterprise Spring</h2><p>• Decouples REST controllers from persistence layers by housing all transactional business logic inside <code>@Service</code> classes.</p>"
                        }
                    ]
                }
            ]
        }
    ],
    "cheatNotes": [
        "⚡ Creational: Singleton, Factory, Abstract Factory, Builder, Prototype",
        "⚡ Structural: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy",
        "⚡ Behavioral: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor",
        "⚡ Singleton: Enum Singleton is thread-safe and reflection-proof!",
        "⚡ Builder: Ideal for objects with 5+ optional constructor parameters",
        "⚡ Decorator: Used extensively in Java I/O (BufferedReader, FileReader)",
        "⚡ Strategy: Replaces switch-case algorithms with dynamic interface strategies",
        "⚡ Spring Uses: Singleton (Beans), Factory (BeanFactory), Proxy (AOP/Transactions), Template (JdbcTemplate)"
    ],
    "interviewQuestions": [
        {
            "company": "Google / Amazon",
            "questions": [
                "How do you break Singleton pattern using reflection, serialization, or cloning, and how do you prevent it?",
                "Differentiate between Factory Method and Abstract Factory patterns with real examples.",
                "How does Spring Framework use Dynamic Proxies for @Transactional and @Aspect advice?",
                "Explain Strategy pattern vs State pattern architecture differences."
            ]
        },
        {
            "company": "TCS / Infosys / Wipro",
            "questions": [
                "What are the three main categories of Gang of Four (GoF) design patterns?",
                "Write a thread-safe Double-Checked Locking Singleton implementation in Java.",
                "What is the difference between Shallow Copy and Deep Copy in Prototype pattern?",
                "How does the Decorator pattern work in Java I/O libraries?"
            ]
        }
    ]
}
];
