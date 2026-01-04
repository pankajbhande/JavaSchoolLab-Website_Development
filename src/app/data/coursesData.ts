// Course data structure for JavaSchoolLab
export interface Topic {
  id: string;
  name: string;
  beginner?: {
    content: string;
    codeExamples?: string[];
  };
  intermediate?: {
    content: string;
    codeExamples?: string[];
  };
  expert?: {
    content: string;
    codeExamples?: string[];
  };
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
  {
    id: 'java',
    name: 'Java',
    icon: 'Code',
    subTopics: [
      {
        id: 'basics',
        name: 'Java Basics',
        topics: [
          {
            id: 'introduction',
            name: 'Introduction to Java',
            beginner: {
              content: `Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was developed by James Gosling at Sun Microsystems (now owned by Oracle Corporation) and released in 1995.

Key Features of Java:
• Platform Independent: Write Once, Run Anywhere (WORA)
• Object-Oriented: Everything is an object
• Simple and Easy to Learn
• Secure: No explicit pointers
• Robust: Strong memory management
• Multi-threaded: Supports concurrent programming
• Architecture Neutral: Portable across platforms`,
              codeExamples: [
                `// First Java Program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
              ],

            },
            intermediate: {
              content: `Deep dive into Java Architecture and JVM internals. Understanding the compilation and execution process in detail.

Java Architecture Components:
• JDK (Java Development Kit): Complete development environment
• JRE (Java Runtime Environment): Runtime environment for Java applications
• JVM (Java Virtual Machine): Abstract machine that executes Java bytecode

Compilation Process:
1. Source code (.java) → Java Compiler → Bytecode (.class)
2. Bytecode → JVM → Machine Code → Execution

JVM Memory Areas:
• Heap: Object allocation
• Stack: Method execution and local variables
• Method Area: Class structures, constants
• PC Register: Current instruction address
• Native Method Stack: Native method execution`,
              codeExamples: [
                `// Understanding Class Loading
public class ClassLoadingExample {
    static {
        System.out.println("Static block executed");
    }

    {
        System.out.println("Instance block executed");
    }

    public ClassLoadingExample() {
        System.out.println("Constructor executed");
    }
}`
              ]
            },
            expert: {
              content: `Advanced JVM tuning, performance optimization, and understanding garbage collection algorithms.

Garbage Collection Algorithms:
• Serial GC: Single-threaded, suitable for small applications
• Parallel GC: Multiple threads for GC, high throughput
• CMS (Concurrent Mark Sweep): Low pause time
• G1 (Garbage First): Balanced throughput and latency
• ZGC: Scalable low-latency GC
• Shenandoah: Concurrent GC with predictable pause times

JVM Tuning Parameters:
-Xms: Initial heap size
-Xmx: Maximum heap size
-XX:NewRatio: Ratio of old/new generation
-XX:SurvivorRatio: Ratio of eden/survivor space
-XX:+UseG1GC: Enable G1 garbage collector

Performance Profiling Tools:
• JConsole: Monitor JVM performance
• VisualVM: Profiling and monitoring
• JProfiler: Commercial profiler
• YourKit: Advanced profiling`,
              codeExamples: [
                `// Custom ClassLoader Example
public class CustomClassLoader extends ClassLoader {
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        byte[] classData = loadClassData(name);
        if (classData == null) {
            throw new ClassNotFoundException();
        }
        return defineClass(name, classData, 0, classData.length);
    }

    private byte[] loadClassData(String name) {
        // Load class data from custom source
        // Implementation depends on requirements
        return null;
    }
}`
              ]
            },
          },

          {
            id: 'data-types',
            name: 'Data Types and Variables',
            beginner: {
              content: `Java has two categories of data types: Primitive and Reference types.

Primitive Data Types (8 types):
• byte: 8-bit integer (-128 to 127)
• short: 16-bit integer (-32,768 to 32,767)
• int: 32-bit integer (-2^31 to 2^31-1)
• long: 64-bit integer (-2^63 to 2^63-1)
• float: 32-bit floating point
• double: 64-bit floating point
• char: 16-bit Unicode character
• boolean: true or false

Variables:
A variable is a container that holds data. In Java, you must declare a variable before using it.`,
              codeExamples: [
                `// Variable Declaration and Initialization
public class DataTypesExample {
    public static void main(String[] args) {
        // Integer types
        int age = 25;
        long population = 7800000000L;

        // Floating point types
        double price = 99.99;
        float rate = 3.5f;

        // Character and boolean
        char grade = 'A';
        boolean isActive = true;

        // String (Reference type)
        String name = "Java";

        System.out.println("Age: " + age);
        System.out.println("Name: " + name);
    }
}`
              ]
            },
            intermediate: {
              content: `Understanding wrapper classes, autoboxing, type casting, and variable scope.

Wrapper Classes:
Convert primitive types to objects and vice versa.
• Byte, Short, Integer, Long
• Float, Double
• Character, Boolean

Type Casting:
• Widening (Implicit): byte → short → int → long → float → double
• Narrowing (Explicit): Requires manual casting

Variable Scope:
• Instance Variables: Belong to object
• Class Variables (static): Belong to class
• Local Variables: Belong to method/block
• Parameters: Passed to methods`,
              codeExamples: [
                `// Autoboxing and Type Casting
public class AdvancedDataTypes {
    public static void main(String[] args) {
        // Autoboxing
        Integer num = 10; // int to Integer
        int value = num; // Integer to int (unboxing)

        // Type Casting
        double d = 100.04;
        long l = (long) d; // Narrowing
        int i = (int) l;

        // Wrapper class methods
        String str = "123";
        int parsed = Integer.parseInt(str);

        System.out.println("Parsed: " + parsed);
    }
}`
              ]
            },
            expert: {
              content: `Memory management, immutability, and performance considerations for data types.

Memory Allocation:
• Primitive types: Stored in stack (faster access)
• Objects: Stored in heap (slower access)
• String Pool: Special memory region for strings

Immutability:
Wrapper classes and String are immutable for:
• Thread safety
• Security
• Performance (caching)

Performance Considerations:
• Use primitives when possible (less memory overhead)
• Avoid unnecessary boxing/unboxing
• String concatenation: Use StringBuilder for loops
• Consider memory footprint in large collections`,
              codeExamples: [
                `// Performance Comparison
public class PerformanceExample {
    public static void main(String[] args) {
        // Bad: Using Integer in performance-critical code
        long start = System.nanoTime();
        Integer sum1 = 0;
        for (int i = 0; i < 1000000; i++) {
            sum1 += i; // Autoboxing overhead
        }
        long end = System.nanoTime();
        System.out.println("With Integer: " + (end - start) + " ns");

        // Good: Using primitive int
        start = System.nanoTime();
        int sum2 = 0;
        for (int i = 0; i < 1000000; i++) {
            sum2 += i;
        }
        end = System.nanoTime();
        System.out.println("With int: " + (end - start) + " ns");
    }
}`
              ]
            },

          },
          {
            id: 'operators',
            name: 'Operators in Java',
            beginner: {
              content: `Operators are symbols that perform operations on variables and values.

          Types of Operators:
          • Arithmetic: +, -, *, /, %
          • Relational: ==, !=, >, <, >=, <=
          • Logical: && (AND), || (OR), ! (NOT)
          • Assignment: =, +=, -=, *=, /=
          • Unary: ++, --, +, -, !
          • Bitwise: &, |, ^, ~, <<, >>
          • Ternary: ? :`,
              codeExamples: [
                `// Operators Example
          public class OperatorsDemo {
              public static void main(String[] args) {
                  int a = 10, b = 5;

                  // Arithmetic
                  System.out.println("a + b = " + (a + b));
                  System.out.println("a % b = " + (a % b));

                  // Relational
                  System.out.println("a > b: " + (a > b));

                  // Logical
                  boolean result = (a > b) && (b > 0);
                  System.out.println("Logical AND: " + result);

                  // Ternary
                  String max = (a > b) ? "a is greater" : "b is greater";
                  System.out.println(max);
              }
          }`
              ]
            },
            intermediate: {
              content: `Understanding operator precedence, short-circuit evaluation, and bitwise operations.

          Operator Precedence (High to Low):
          1. Postfix: expr++, expr--
          2. Unary: ++expr, --expr, +expr, -expr, !
          3. Multiplicative: *, /, %
          4. Additive: +, -
          5. Shift: <<, >>, >>>
          6. Relational: <, >, <=, >=, instanceof
          7. Equality: ==, !=
          8. Bitwise AND: &
          9. Bitwise XOR: ^
          10. Bitwise OR: |
          11. Logical AND: &&
          12. Logical OR: ||
          13. Ternary: ? :
          14. Assignment: =, +=, -=, etc.

          Short-Circuit Evaluation:
          && and || operators don't evaluate the second operand if the result is determined by the first.`,
              codeExamples: [
                `// Advanced Operators
          public class AdvancedOperators {
              public static void main(String[] args) {
                  // Short-circuit evaluation
                  int x = 5;
                  if (x > 3 && ++x > 5) {
                      System.out.println("True");
                  }
                  System.out.println("x = " + x); // x = 6

                  // Bitwise operations
                  int a = 5;  // 0101
                  int b = 3;  // 0011
                  System.out.println("a & b = " + (a & b));  // 0001 = 1
                  System.out.println("a | b = " + (a | b));  // 0111 = 7
                  System.out.println("a ^ b = " + (a ^ b));  // 0110 = 6
                  System.out.println("~a = " + (~a));        // -6
                  System.out.println("a << 1 = " + (a << 1)); // 1010 = 10
              }
          }`
              ]
            },
            expert: {
              content: `Advanced bitwise operations, bit manipulation techniques, and performance optimization.

          Bit Manipulation Techniques:
          • Check if number is power of 2: (n & (n-1)) == 0
          • Toggle bit: n ^= (1 << pos)
          • Clear bit: n &= ~(1 << pos)
          • Set bit: n |= (1 << pos)
          • Count set bits: Brian Kernighan's algorithm

          Performance Considerations:
          • Bit operations are faster than arithmetic operations
          • Use bit shifting for multiplication/division by powers of 2
          • Bitwise operations for flags and permissions

          Real-world Applications:
          • Cryptography
          • Compression algorithms
          • Network protocols
          • Graphics programming`,
              codeExamples: [
                `// Bit Manipulation Techniques
          public class BitManipulation {
              // Check if power of 2
              public static boolean isPowerOfTwo(int n) {
                  return n > 0 && (n & (n - 1)) == 0;
              }

              // Count set bits
              public static int countSetBits(int n) {
                  int count = 0;
                  while (n > 0) {
                      n &= (n - 1);
                      count++;
                  }
                  return count;
              }

              // Fast multiplication by 2
              public static int multiplyByTwo(int n) {
                  return n << 1; // Faster than n * 2
              }

              // Swap without temp variable
              public static void swap(int a, int b) {
                  a = a ^ b;
                  b = a ^ b;
                  a = a ^ b;
                  System.out.println("a = " + a + ", b = " + b);
              }

              public static void main(String[] args) {
                  System.out.println("Is 16 power of 2? " + isPowerOfTwo(16));
                  System.out.println("Set bits in 7: " + countSetBits(7));
                  System.out.println("5 * 2 = " + multiplyByTwo(5));
                  swap(5, 10);
              }
          }`
              ]
            }
          },
        ]
      },

      {
        id: 'Java Operator',
        name: 'Java Operators',
        topics: [
          {
            id: 'Arithmetic Operator',
            name: 'Arithmetic Operator',
            beginner: {
              content: '',
              codeExamples: []
            }

          }

        ]
      },


      {
        id: 'oop',
        name: 'Object-Oriented Programming',
        topics: [
          {
            id: 'classes-objects',
            name: 'Classes and Objects',
            beginner: {
              content: `A class is a blueprint for creating objects. An object is an instance of a class.

Key Concepts:
• Class: Template that defines properties and behaviors
• Object: Instance of a class
• Fields: Variables that hold the state
• Methods: Functions that define behavior
• Constructor: Special method to initialize objects`,
              codeExamples: [
                `// Class and Object Example
public class Student {
    // Fields
    String name;
    int rollNumber;

    // Constructor
    public Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    // Method
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
    }

    public static void main(String[] args) {
        // Creating object
        Student student1 = new Student("John", 101);
        student1.displayInfo();
    }
}`
              ]
            },
            intermediate: {
              content: `Understanding encapsulation, access modifiers, static members, and inner classes.

Access Modifiers:
• private: Accessible only within the class
• default: Accessible within the package
• protected: Accessible within package and subclasses
• public: Accessible everywhere

Static Members:
• Belong to class, not to instance
• Shared among all objects
• Can be accessed without creating object

Types of Inner Classes:
• Member inner class
• Static nested class
• Local inner class
• Anonymous inner class`,
              codeExamples: [
                `// Encapsulation Example
public class BankAccount {
    private double balance; // Private field

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    // Getter
    public double getBalance() {
        return balance;
    }

    // Setter with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    // Static method
    public static void displayBankInfo() {
        System.out.println("Welcome to JavaBank");
    }
}`
              ]
            },
            expert: {
              content: `Advanced OOP concepts: Design patterns, SOLID principles, and memory management.

SOLID Principles:
• Single Responsibility: Class should have one reason to change
• Open/Closed: Open for extension, closed for modification
• Liskov Substitution: Derived classes must be substitutable for base classes
• Interface Segregation: Many specific interfaces better than one general
• Dependency Inversion: Depend on abstractions, not concretions

Design Considerations:
• Favor composition over inheritance
• Program to interfaces, not implementations
• Immutable objects for thread safety
• Lazy initialization for performance

Memory Implications:
• Object overhead: ~12-16 bytes per object
• Reference size: 4 bytes (32-bit) or 8 bytes (64-bit)
• Array overhead: ~16 bytes + element storage`,
              codeExamples: [
                `// Builder Pattern Example
public class Computer {
    // Required parameters
    private final String CPU;
    private final String RAM;

    // Optional parameters
    private final String storage;
    private final String GPU;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.GPU = builder.GPU;
    }

    public static class Builder {
        // Required
        private final String CPU;
        private final String RAM;

        // Optional
        private String storage;
        private String GPU;

        public Builder(String CPU, String RAM) {
            this.CPU = CPU;
            this.RAM = RAM;
        }

        public Builder storage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder GPU(String GPU) {
            this.GPU = GPU;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }

    public static void main(String[] args) {
        Computer pc = new Computer.Builder("Intel i7", "16GB")
            .storage("1TB SSD")
            .GPU("RTX 3080")
            .build();
    }
}`
              ]
            }
          },

          {
            id: 'abstraction',
            name: 'Abstraction',
            beginner: {
              content: `Abstraction in Java is a fundamental Object-Oriented Programming (OOP) concept that focuses on hiding the complex implementation details and showing only the essential features of an object.         

Java abstract classes may or may not contain abstract methods, i.e., methods without body ( public void get(); )

But, if a class has at least one abstract method, then the class must be declared abstract.

If a class is declared abstract, it cannot be instantiated.

To use an abstract class, you have to inherit it from another class, provide implementations to the abstract methods in it.

If you inherit an abstract class, you have to provide implementations to all the abstract methods in it.`,
              codeExamples: [
                `// Abstract parent class
abstract class Animal {
    // Abstract method (no implementation in the parent)
    public abstract void makeSound();

    // Concrete method (shared implementation)
    public void sleep() {
        System.out.println("The animal is sleeping.");
    }
}

// Subclass (concrete class)
class Dog extends Animal {
    // Must provide implementation for the abstract method
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

// Main class to run the code
public class Main {
    public static void main(String[] args) {
        // Cannot create an object of the abstract class (e.g., new Animal() is invalid)
        // Use an object of the concrete subclass instead
        Animal myDog = new Dog();

        myDog.makeSound(); // Output: Bark
        myDog.sleep();     // Output: The animal is sleeping.
    }
}
`
              ]
            }
          }
        ]
      }
    ],


    cheatNotes: [
      'javac FileName.java - Compile Java file',
      'java ClassName - Run Java program',
      'System.out.println() - Print with newline',
      'public static void main(String[] args) - Main method',
      'String[] args - Command line arguments',
      'int, double, boolean, char - Primitive types',
      'new keyword - Create object',
      'this keyword - Reference current object',
      'super keyword - Reference parent class',
      'extends - Inherit from class'
    ],
    interviewQuestions: [
      {
        company: 'Google',
        questions: [
          'What is the difference between JDK, JRE, and JVM?',
          'Explain the concept of polymorphism with an example',
          'What are the differences between Abstract class and Interface?',
          'How does garbage collection work in Java?',
          'What is the difference between equals() and == operator?'
        ]
      },
      {
        company: 'Amazon',
        questions: [
          'Explain the String pool concept in Java',
          'What is the difference between ArrayList and LinkedList?',
          'How do you implement a custom exception in Java?',
          'What are lambda expressions and functional interfaces?',
          'Explain the concept of streams in Java 8'
        ]
      },
      {
        company: 'Microsoft',
        questions: [
          'What is multithreading and how do you implement it?',
          'Explain synchronization in Java',
          'What are design patterns? Explain Singleton pattern',
          'What is the difference between overloading and overriding?',
          'How does HashMap work internally?'
        ]
      },
      {
        company: 'TCS',
        questions: [
          'What are the main features of Java?',
          'Explain inheritance and its types',
          'What is encapsulation and why is it important?',
          'Difference between final, finally, and finalize',
          'What are constructors and their types?'
        ]
      }
    ]
  },
  {
    id: 'collections',
    name: 'Collection Framework',
    icon: 'BookOpen',
    subTopics: [
      {
        id: 'list',
        name: 'List Interface',
        topics: [
          {
            id: 'arraylist',
            name: 'ArrayList',
            beginner: {
              content: `ArrayList is a resizable array implementation of the List interface. It provides dynamic arrays that can grow as needed.

Key Features:
• Dynamic size
• Allows duplicate elements
• Maintains insertion order
• Allows null values
• Not synchronized (not thread-safe)`,
              codeExamples: [
                `import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Accessing elements
        System.out.println("First fruit: " + fruits.get(0));

        // Iterating
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Size
        System.out.println("Size: " + fruits.size());
    }
}`
              ]
            },
            intermediate: {
              content: `Understanding ArrayList internals, performance characteristics, and best practices.

Internal Working:
• Uses Object[] array internally
• Default initial capacity: 10
• Growth factor: 1.5x (new capacity = old * 1.5)
• When to grow: When size exceeds capacity

Performance:
• add(): O(1) amortized
• get(): O(1)
• remove(): O(n)
• contains(): O(n)
• indexOf(): O(n)

Best Practices:
• Specify initial capacity if size is known
• Use ensureCapacity() to avoid multiple resizing
• Use trimToSize() to reduce memory footprint`,
              codeExamples: [
                `import java.util.ArrayList;

public class ArrayListAdvanced {
    public static void main(String[] args) {
        // Initialize with capacity
        ArrayList<Integer> numbers = new ArrayList<>(100);

        // Bulk operations
        ArrayList<Integer> moreNumbers = new ArrayList<>();
        moreNumbers.add(1);
        moreNumbers.add(2);
        numbers.addAll(moreNumbers);

        // Remove by index
        numbers.remove(0);

        // Remove by object
        numbers.remove(Integer.valueOf(2));

        // Clear all
        numbers.clear();

        // Check if empty
        System.out.println("Is empty: " + numbers.isEmpty());
    }
}`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      'List<T> list = new ArrayList<>() - Create ArrayList',
      'list.add(item) - Add element',
      'list.get(index) - Get element at index',
      'list.remove(index) - Remove element',
      'list.size() - Get size',
      'Set<T> set = new HashSet<>() - Create HashSet',
      'Map<K,V> map = new HashMap<>() - Create HashMap',
      'Collections.sort(list) - Sort list',
      'Collections.reverse(list) - Reverse list',
      'Collections.shuffle(list) - Shuffle list'
    ],
    interviewQuestions: [
      {
        company: 'Google',
        questions: [
          'What is the difference between ArrayList and LinkedList?',
          'How does HashMap work internally?',
          'What is the difference between HashSet and TreeSet?',
          'Explain the fail-fast and fail-safe iterators',
          'What is ConcurrentHashMap?'
        ]
      }
    ]
  },
  {
    id: 'design-patterns',
    name: 'Design Pattern',
    icon: 'FileText',
    subTopics: [
      {
        id: 'creational',
        name: 'Creational Patterns',
        topics: [
          {
            id: 'singleton',
            name: 'Singleton Pattern',
            beginner: {
              content: `Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

When to use:
• Logger classes
• Configuration classes
• Database connections
• Thread pools`,
              codeExamples: [
                `public class Singleton {
    private static Singleton instance;

    // Private constructor
    private Singleton() {}

    // Public method to get instance
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      'Singleton - One instance only',
      'Factory - Object creation logic',
      'Builder - Complex object construction',
      'Observer - Event notification',
      'Strategy - Interchangeable algorithms'
    ],
    interviewQuestions: [
      {
        company: 'Amazon',
        questions: [
          'What are design patterns and why are they important?',
          'Explain Singleton pattern and its thread-safe implementation',
          'What is the difference between Factory and Abstract Factory pattern?',
          'Explain Observer pattern with real-world example',
          'What is Dependency Injection?'
        ]
      }
    ]
  },
  {
    id: 'mysql',
    name: 'MySQL CSS',
    icon: 'Database',
    subTopics: [
      {
        id: 'basics',
        name: 'MySQL Basics',
        topics: [
          {
            id: 'introduction',
            name: 'Introduction to MySQL',
            beginner: {
              content: `MySQL is an open-source relational database management system (RDBMS).

Key Concepts:
• Database: Collection of tables
• Table: Collection of rows and columns
• Row: Single record
• Column: Field in a record
• Primary Key: Unique identifier
• Foreign Key: Reference to another table`,
              codeExamples: [
                `-- Create Database
CREATE DATABASE school;

-- Use Database
USE school;

-- Create Table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    grade VARCHAR(10)
);

-- Insert Data
INSERT INTO students (name, age, grade)
VALUES ('John', 20, 'A');

-- Select Data
SELECT * FROM students;`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      'CREATE DATABASE dbname - Create database',
      'USE dbname - Select database',
      'CREATE TABLE - Create table',
      'INSERT INTO - Insert data',
      'SELECT * FROM - Query data',
      'UPDATE - Modify data',
      'DELETE FROM - Remove data',
      'WHERE - Filter condition',
      'JOIN - Combine tables',
      'GROUP BY - Group results'
    ],
    interviewQuestions: [
      {
        company: 'Oracle',
        questions: [
          'What are different types of joins in MySQL?',
          'Explain normalization and its types',
          'What is the difference between INNER JOIN and LEFT JOIN?',
          'How do you optimize a slow query?',
          'What are indexes and when to use them?'
        ]
      }
    ]
  },
  {
    id: 'jdbc',
    name: 'JDBC',
    icon: 'Database',
    subTopics: [
      {
        id: 'basics',
        name: 'JDBC Basics',
        topics: [
          {
            id: 'introduction',
            name: 'Introduction to JDBC',
            beginner: {
              content: `JDBC (Java Database Connectivity) is an API for connecting and executing queries with databases.

JDBC Components:
• DriverManager: Manages database drivers
• Connection: Establishes connection to database
• Statement: Executes SQL queries
• ResultSet: Holds query results
• SQLException: Handles database errors`,
              codeExamples: [
                `import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String user = "root";
        String password = "password";

        try {
            // Load driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish connection
            Connection con = DriverManager.getConnection(url, user, password);

            // Create statement
            Statement stmt = con.createStatement();

            // Execute query
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // Process results
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " " + rs.getString("name"));
            }

            // Close connections
            rs.close();
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      'Class.forName() - Load driver',
      'DriverManager.getConnection() - Connect to DB',
      'createStatement() - Create statement',
      'executeQuery() - Execute SELECT',
      'executeUpdate() - Execute INSERT/UPDATE/DELETE',
      'PreparedStatement - Parameterized queries',
      'CallableStatement - Stored procedures',
      'ResultSet - Query results',
      'setAutoCommit(false) - Transaction control',
      'commit() / rollback() - Commit or rollback'
    ],
    interviewQuestions: [
      {
        company: 'Infosys',
        questions: [
          'What is JDBC and explain its architecture?',
          'What is the difference between Statement and PreparedStatement?',
          'How do you handle transactions in JDBC?',
          'What are different types of JDBC drivers?',
          'Explain connection pooling'
        ]
      }
    ]
  },
  {
    id: 'jsp-servlet',
    name: 'JSP Servlet',
    icon: 'Code',
    subTopics: [
      {
        id: 'servlet',
        name: 'Servlets',
        topics: [
          {
            id: 'introduction',
            name: 'Introduction to Servlets',
            beginner: {
              content: `A Servlet is a Java class that extends the capabilities of servers to host applications accessed via request-response model.

Servlet Lifecycle:
1. init() - Initialization
2. service() - Request handling
3. destroy() - Cleanup

Key Concepts:
• HttpServlet: Base class for HTTP servlets
• doGet(): Handle GET requests
• doPost(): Handle POST requests
• HttpServletRequest: Request object
• HttpServletResponse: Response object`,
              codeExamples: [
                `import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class HelloServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, 
                     HttpServletResponse response) 
                     throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Hello from Servlet!</h1>");
        out.println("</body></html>");
    }
}`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      'HttpServlet - Base servlet class',
      'doGet() - Handle GET requests',
      'doPost() - Handle POST requests',
      'request.getParameter() - Get form data',
      'response.sendRedirect() - Redirect',
      'RequestDispatcher - Forward request',
      'session.setAttribute() - Store in session',
      'application.setAttribute() - Store in application scope',
      '@WebServlet - Annotation for servlet mapping',
      'Filter - Preprocessing requests'
    ],
    interviewQuestions: [
      {
        company: 'Wipro',
        questions: [
          'What is a servlet and explain its lifecycle?',
          'What is the difference between doGet() and doPost()?',
          'Explain servlet filters and their use',
          'What are different session management techniques?',
          'What is the difference between forward and redirect?'
        ]
      }
    ]
  },
  {
    id: 'hibernate',
    name: 'Hibernate',
    icon: 'Database',
    subTopics: [
      {
        id: 'basics',
        name: 'Hibernate Basics',
        topics: [
          {
            id: 'introduction',
            name: 'Introduction to Hibernate',
            beginner: {
              content: `Hibernate is an Object-Relational Mapping (ORM) framework for Java. It simplifies database operations by mapping Java objects to database tables.

Key Concepts:
• ORM: Object-Relational Mapping
• SessionFactory: Factory for Session objects
• Session: Interface between application and database
• Transaction: Unit of work
• HQL: Hibernate Query Language

Advantages:
• Eliminates boilerplate JDBC code
• Database independence
• Automatic table creation
• Caching support
• Lazy loading`,
              codeExamples: [
                `// Entity Class
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    // Getters and setters
}

// Hibernate Configuration
public class HibernateUtil {
    private static SessionFactory sessionFactory;

    static {
        try {
            Configuration configuration = new Configuration();
            configuration.configure("hibernate.cfg.xml");
            sessionFactory = configuration.buildSessionFactory();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      '@Entity - Mark class as entity',
      '@Table - Specify table name',
      '@Id - Mark primary key',
      '@GeneratedValue - Auto-generate key',
      '@Column - Map to column',
      'session.save() - Insert record',
      'session.update() - Update record',
      'session.delete() - Delete record',
      'session.get() - Retrieve by ID',
      'HQL - Hibernate Query Language'
    ],
    interviewQuestions: [
      {
        company: 'Accenture',
        questions: [
          'What is Hibernate and its advantages?',
          'Explain Hibernate architecture',
          'What is the difference between get() and load()?',
          'What are different types of associations in Hibernate?',
          'Explain Hibernate caching mechanisms'
        ]
      }
    ]
  },
  {
    id: 'spring-mvc',
    name: 'Spring MVC',
    icon: 'Code',
    subTopics: [
      {
        id: 'basics',
        name: 'Spring MVC Basics',
        topics: [
          {
            id: 'introduction',
            name: 'Introduction to Spring MVC',
            beginner: {
              content: `Spring MVC is a web framework built on the Model-View-Controller pattern.

Components:
• DispatcherServlet: Front controller
• Controller: Handles requests
• Model: Data
• View: Presentation
• ViewResolver: Resolves view names

Request Flow:
1. Client sends request
2. DispatcherServlet receives request
3. Handler mapping finds controller
4. Controller processes request
5. Returns ModelAndView
6. ViewResolver resolves view
7. View renders response`,
              codeExamples: [
                `@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("message", "Welcome to Spring MVC");
        return "home";
    }

    @PostMapping("/submit")
    public String submit(@RequestParam String name, Model model) {
        model.addAttribute("name", name);
        return "result";
    }
}`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      '@Controller - Mark class as controller',
      '@RequestMapping - Map URL to method',
      '@GetMapping - Handle GET requests',
      '@PostMapping - Handle POST requests',
      '@RequestParam - Bind request parameter',
      '@PathVariable - Bind URL path variable',
      '@ModelAttribute - Bind form object',
      'Model - Pass data to view',
      '@ResponseBody - Return raw data',
      '@RestController - REST controller'
    ],
    interviewQuestions: [
      {
        company: 'Cognizant',
        questions: [
          'What is Spring MVC and its components?',
          'Explain the request flow in Spring MVC',
          'What is DispatcherServlet?',
          'What is the difference between @Controller and @RestController?',
          'How do you handle exceptions in Spring MVC?'
        ]
      }
    ]
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: 'Code',
    subTopics: [
      {
        id: 'basics',
        name: 'Spring Boot Basics',
        topics: [
          {
            id: 'introduction',
            name: 'Introduction to Spring Boot',
            beginner: {
              content: `Spring Boot is a framework that simplifies Spring application development with auto-configuration and embedded servers.

Key Features:
• Auto-configuration: Automatically configures beans
• Starter dependencies: Pre-configured dependencies
• Embedded server: Tomcat, Jetty, or Undertow
• Production-ready: Actuator for monitoring
• No XML configuration: Annotation-based

Advantages:
• Rapid development
• Microservices support
• Easy testing
• Reduced boilerplate code`,
              codeExamples: [
                `@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        // Save user logic
        return user;
    }
}`
              ]
            }
          }
        ]
      }
    ],
    cheatNotes: [
      '@SpringBootApplication - Main annotation',
      '@RestController - REST controller',
      '@Service - Service layer',
      '@Repository - Data access layer',
      '@Autowired - Dependency injection',
      '@Value - Inject property value',
      '@ConfigurationProperties - Bind properties',
      'application.properties - Configuration file',
      'Spring Actuator - Monitoring',
      '@EnableAutoConfiguration - Auto-configure'
    ],
    interviewQuestions: [
      {
        company: 'Capgemini',
        questions: [
          'What is Spring Boot and its advantages?',
          'Explain Spring Boot auto-configuration',
          'What are Spring Boot starters?',
          'How do you configure different environments in Spring Boot?',
          'What is Spring Boot Actuator?'
        ]
      }
    ]
  }
];



