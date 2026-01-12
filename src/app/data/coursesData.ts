// Course data structure for JavaSchoolLab

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
            beginner: [
              {
                content: `Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was developed by James Gosling at Sun Microsystems (now owned by Oracle Corporation) and released in 1995.

🔹 Key Features of Java:
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
}`]
              }
            ],
            intermediate: [
              {
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
              }],
            expert: [
              {
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
              }],
          },

          {
            id: 'data-types',
            name: 'Data Types and Variables',
            beginner: [
              {
                content: `Java has two categories of data types: Primitive and Reference types.

🔹 Primitive Data Types (8 types):
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
              }],
            intermediate: [
              {
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
              }],
            expert: [
              {
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
              }],

          },
          {
            id: "operators",
            name: "Operators in Java",

            beginner: [
              {
                content: `
OPERATORS IN JAVA

Operators in Java are symbols used to perform operations on variables and values.


TYPES OF OPERATORS

1) Arithmetic Operators:

Used for mathematical calculations.

Symbols

• +  Addition 

• -  Subtraction

• *  Multiplication

• /  Division 

• %  Modulus  


2) Logical Operators:

Used to perform logical AND (&&) and OR (||) operations.

I).Logical AND (&&) Operator

• The && operator does NOT check the second condition if the first condition is FALSE.
• It checks the second condition ONLY if the first condition is TRUE.
Logical AND (&&)

true  &&  true   → true

true  &&  false  → false

false &&  true   → false

false &&  false  → false

II).Logical OR (||) Operator

• The || operator does NOT check the second condition if the first condition is TRUE.

• It checks the second condition ONLY if the first condition is FALSE.

Truth Table – Logical OR (||)

Expression1   Expression2   Result

true    ||      true    →      true

true     ||     false   →      true

false    ||     true     →     true

false    ||     false     →    false


3) Relational Operators:

Used to compare two values.

Operators:

• >   Greater than 

• <   Less than  

• >=  Greater than or equal to

• <=  Less than or equal to

• ==  Equal to  

• !=  Not equal to  


4) Assignment Operator:

Used to assign values to variables.

Syntax→
variable = value;

5) Bitwise Operators:

Used to perform bitwise AND (&) and OR (|) operations.

I).Bitwise AND (&)

• Always checks both conditions
• Executes even if the first condition is FALSE

Truth Table – Bitwise AND (&)

true  &  true   → true

true  &  false  → false

false &  true   → false

false &  false  → false


II).Bitwise OR (|)

• Always checks both conditions
• Executes even if the first condition is TRUE

Truth Table – Bitwise OR (|)

true  |  true   → true

true  |  false  → true

false |  true   → true

false |  false  → false


6) Unary Operators:

Used to increment or decrement a variable.

• ++  Increment  
• --  Decrement  

7) Ternary Operator:

Shorthand for if-else statement.


Syntax -  condition ? value_if_true ; value_if_false

8) Shift Operators:

• <<  Left Shift  
• >>  Right Shift  


9) Dot Operator (.):

Used to access class members (variables or methods).


10) New Operator:

Used to create an object of a class.
`,

                codeExamples: [
                  `// Java Operators - Complete Example
package com.test;

public class Operator {

    public static void main(String[] args) {

        int x = 10, y = 20, z = 30;

        // Arithmetic Operators
        System.out.println(x + y);
        System.out.println(x - y);
        System.out.println(x * y);
        System.out.println(x / y);
        System.out.println(x % y);

        // Logical Operators
        System.out.println(x < y && x < z);
        System.out.println(x > y || x < z);

        // Relational Operators
        System.out.println(x > y);
        System.out.println(x == y);

        // Bitwise Operators
        System.out.println(x < y & x < z);
        System.out.println(x > y | x < z);

        // Unary Operator
        int m = 10;
        m++;
        System.out.println(m);

        // Ternary Operator
        int max = (x > y) ? x : y;
        System.out.println(max);

        // Shift Operators
        System.out.println(x << 2);
        System.out.println(x >> 2);

        // Dot & New Operator
        Operator obj = new Operator();
        obj.demo();
    }

    void demo() {
        System.out.println("Dot operator example");
    }
}`
                ]
              }
            ],



            intermediate: [
              {
                content: `2) Logical Operators:
Used to perform logical AND and OR operations.

Logical AND (&&):
• Returns true only if both conditions are true
• Skips second condition if first is false

Logical OR (||):
• Returns true if any one condition is true
• Skips second condition if first is true

3) Relational Operators:
Used to compare values.
• >, <, >=, <=, ==, !=

4) Assignment Operators:
Used to assign values to variables.
Syntax: variable = value;`,

                codeExamples: [
                  `// Logical, Relational & Assignment Operators
package com.test;

public class Operator {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;
        int z = 30;

        // Logical AND
        System.out.println(x < y && x < z);
        System.out.println(x > y && x < z);

        // Logical OR
        System.out.println(x < y || x < z);
        System.out.println(x > y || x > z);

        // Relational Operators
        System.out.println(x > y);
        System.out.println(x < y);
        System.out.println(x >= y);
        System.out.println(x <= y);
        System.out.println(x == y);
        System.out.println(x != y);

        // Assignment Operator
        System.out.println("value of x is>>> " + x);
    }
}`
                ]
              }
            ],

            expert: [
              {
                content: `5) Bitwise Operators:
• &  Bitwise AND (checks both conditions)
• |  Bitwise OR  (checks both conditions)

6) Unary Operators:
• ++ Increment
• -- Decrement

7) Ternary Operator:
condition ? value_if_true : value_if_false

8) Shift Operators:
• << Left Shift (multiplication by 2^n)
• >> Right Shift (division by 2^n)

9) Dot (.) Operator:
Used to access class variables and methods.

10) new Operator:
Used to create an object of a class.`,

                codeExamples: [
                  `// Bitwise, Unary, Ternary & Shift Operators
package com.test;

public class Operator {
    public static void main(String[] args) {

        int x = 10, y = 20, z = 30;

        // Bitwise AND
        System.out.println(x < y & x < z);
        System.out.println(x > y & x < z);

        // Bitwise OR
        System.out.println(x > y | x < z);
        System.out.println(x > y | x > z);

        // Unary Operators
        int m = 10;
        m++;
        System.out.println("value of m is>> " + m);
        m--;
        System.out.println("value of m is>> " + m);

        // Ternary Operator
        int A = 10;
        int B = 20;
        int num = (A > B) ? A : B;
        System.out.println(num);

        // Shift Operators
        int K = 10;
        System.out.println(K << 2);
        System.out.println(K << 3);

        // new Operator & Dot Operator
        Code_With_Pankaj obj = new Code_With_Pankaj();
        obj.demo();
    }

    void demo() {
        System.out.println("Dot and new operator example");
         swap(5, 10);
    }
}`
                ]
              }
            ]
          },
          {
            id: "Control Statements in Java",
            name: "Control Statements in Java",
            beginner: [
              {
                content: `Control statements in Java manage the flow of program execution by allowing the code to make decisions, repeat tasks, or jump to different parts of the code`,
              }
            ],

            intermediate: [{
              content: `-This is the most fundamental concepts required for java programmer. <br>

 -It allows smooth flow of execution of program. <br>

 -It controls the flow of program.<br>
<br>
🔹 There are 5 types of control statements in java:<br>
1. If statements<br>
2. If else statements<br>
3. if-else-if ladder statement<br>
4. Nested if statements<br>
5. Switch statements <br>
<br>
<h2>1. IF STATEMENTS </h2>
If statement is true then if block is executed. 
<br>
            <div class="bg-secondary border border-primary p-3">
                Syntax-<br>
                       if (condition)  <br>
                       { <br>
                           statement 1;
                        <br>
                       }; 
            </div>

<h2>Flowchart of IF:</h2><br>
<img src="/src/assets/ifif.jpeg" alt="Online Image"class="d-block mx-auto h-80"/>
<br><br>`,

              codeExamples: [
                `public class Code_With_Pankaj {    // Main Class: Arithmatic  
              public static void main(String[] args) {   // Main Method   
               int a = 10;      // Initialize Value   
                if (a < 50) {  // 10<50 => True  // Condition    
                   System.out.println("a is Smaller");  
                  }            
                } 
              }`
              ],
            },
            {
              content: `<h2>2. IF ELSE STATEMENTS </h2>
            If statement is true then if block is executed, if statement is false then else block is executed. <br>
               <div class="bg-secondary border border-primary p-3">
                 Syntax-<br>
                       if (condition)  <br>
                       { <br>
                           statement 1; //executes when condition is true <br>
                       } <br>
                           else {  <br>
                            statement 2;  // executes when condition is false   <br> 
                          }  <br>
                       }; 
                </div>
               <h2>Flowchart of IF-ELSE:</h2><br>
               <img src="/src/assets/ifelse.png" alt="Online Image"class="d-block mx-auto h-80"/>
               <br><br>`,

              codeExamples: [
                ` public class Code_With_Pankaj {    // Main Class: Arithmatic  
                   public static void main(String[] args) {   // Main Method   
                     int a = 10;      // Initialize Value   
                      if (a > 50) {      // Condition    
                         System.out.println("a is greater.");  // Statement 1   
                        }   else {    
                             System.out.println("a is smaller."); // Statement 2   
                            }      
                          } 
                        }  
                `
              ]
            },
            {
              content:
                `<h2>3. IF-ELSE-IF LADDER STATEMENT </h2>
The if-else-if ladder statement executes one condition from multiple statements.  <br>
 <div class="bg-secondary border border-primary p-3">
                 Syntax-<br>
                       if (condition 1)  <br>
                       { <br>
                           statement 1; //executes when condition is true <br>
                       } <br>
                           else if(condition 2) {  <br>
                            statement 1;  // executes when condition is true   <br> 
                          }  <br>
                            else if(condition 3) { <br>
                             statement 1 ;  executes when condition is true <br>
                          } <br>
                           else { <br>
                              statement 1 ;  // executed if all condition false <br>
                            }  <br>
                       }
            }; 
                </div>
                <h2>Flowchart of IF-ELSE-IF LADDER</h2><br>
                 <img src="/src/assets/ifelseladder.png" alt="Online Image"class="d-block mx-auto h-90"/>
                `,
              codeExamples: [
                `
                  public class Code_With_Pankaj {      // Main Class  
                   public static void main(String[] args) {     // Main Method   
                    int marks = 70;       // Initialize Value //  
                     if (marks >= 50 && marks < 60) {   // 50--59 // Condition    
                        System.out.println("D grade");   
                       } else if (marks >= 60 && marks < 70) {   // 60---69 // Condition    
                           System.out.println("C grade");    
                          } else if (marks >= 70 && marks < 80) {   // 70-79        // Condition    
                             System.out.println("B grade");    
                             } else if (marks >= 80 && marks <=100) {   // 80-100 // Condition    
                           System.out.println("A grade");  
                           }else {      
                              System.out.println("incorrect input");   
                           }  
                        }
}`
              ]
            },

            {
              content: `<h2>4. Nested if statements  </h2>
           The nested if statement represents the if block within another if block. <br>
           Here, the inner if block condition executes only when outer if block condition is true.    <br>
               <div class="bg-secondary border border-primary p-3">
                Syntax <br>
                if (Condition 1) {   <br>  
                if (Condition 2) {      <br>
                     Statement 1; // Execute when condition 1 is True  <br>  
                   } else {       <br>
                     Statement 2; // Execute when condition 2 is False   <br>  
                }<br>
                </div>
               <h2>Flowchart of Nested IF-ELSE:</h2><br>
               <img src="/src/assets/ifnested.png" alt="Online Image"class="d-block mx-auto h-100"/>
               <br><br>`,

              codeExamples: [
                `public class Code_With_Pankaj {     // Main Class  
        public static void main(String[] args) {    // Main Method   
        int no = 75;       // Initialize Value   
         if (no >= 18) {   // True   // Outer Condition    
           if (no > 50) {      // Inner Condition    
           System.out.println("No is greater than 50"); // Print Statement     
         }               
       }  
      }  
    }`,

                `package com.test;  
public class Code_With_Pankaj {  
public static void main(String[] args) {   // Main Method   
int age = 18;      // Initialize   
if (age >= 18) {     // Outer Condition     
 if (age <= 32) {    // Inner Condition     
   System.out.println(" Candidate is Applicable for UPSC Exam");    
  } else {     // It Print When Outer Condition is False     
   System.out.println("Candidate is Not Applicable for UPSC Exam");    
   }   
  }  
} 
}`
              ]
            },

            {
              content: `<h2>5. Switch statement</h2>
          - A switch statement in java is used to execute a single statement from multiple conditions. <br>
          - The switch statement can be used with short, byte, int, long, enum types, etc. Usage of break statement is made to terminate the statement sequence.<br>
          - Cases cannot be duplicate.   Default statement is executed when any of the case doesn't match the value of expression. <br>
          - It is optional to use this statement. We can use string and int in switch statements.   <br>
               <div class="bg-secondary border border-primary p-3">
                Syntax <br>
                switch (expression) <br>
                { <br>
                 case 1:  Statement 1 break; <br>
                 //--------------------------------------------------------<br>
                 case 2:  Statement 2 break; <br>
                 //--------------------------------------------------------<br>
                 case 3:  Statement 3 break; <br>
                 //--------------------------------------------------------<br>
                 default: default statement <br>
               }
                </div>
               <h2>Flowchart of Switch:</h2><br>
               <img src="/src/assets/switchcase.png" alt="Online Image"class="d-block mx-auto h-100"/>
               <br><br>`,

              codeExamples: [
                `public class Code_With_Pankaj {    // Main Class: Code_With_Pankaj  
public static void main(String[] args) {   // Main Method   
int number = 2;     // Initialize Value   
switch (number)  {    // switch(expression) 
//----------------------------------------------------------------------------------------------------   
case 1:     System.out.println("this is 1 number"); // Statement   
            break;      // break 
//----------------------------------------------------------------------------------------------------   
case 2:    System.out.println("this is 2 number"); // Statement    
           break;      // break 
//----------------------------------------------------------------------------------------------------   
case 3:    System.out.println("this is 3 number"); // Statement    
           break;      // break 
//----------------------------------------------------------------------------------------------------   
default:    System.out.println("Invalid input"); // Statement 
//----------------------------------------------------------------------------------------------------   
      } 
    } 
  } `,
              ]
            },
            ],
            expert: [
              {
                content: `
Best Practices 
• Avoid deep nesting
• Prefer switch for fixed values
• Use early returns
`
              }
            ]
          },
          {
            id: 'Jumping Statement',
            name: 'Jumping Statement',
            beginner: [
              {
                content: `
              In Java, jump statements are used to alter the normal flow of program execution when certain conditions are met. <br>
              They can be used to terminate a loop, skip an iteration, or exit from a method or block of code.<br><br>
              
              This particular statement works by jumping from one specific code to another one, thus exhibiting polymorphism in Java, to the flow of the execution of the program. "Jump Statements" are also called "Branching Statements in Java" as they evaluate different branches to enhance the flow of the execution.
              `,
              }
            ],
            intermediate: [
              {
                content: `
               There are 3 types of jumping statements in java as- 
               1) Break 
               2) Continue 
               3) Return
               <br>
               <img src="/src/assets/jumpstatement.png" alt="Online Image"class="d-block mx-auto"/>
               <br><br>
               <h2>1) Break Statement</h2>
               The break statement in java is used to terminate a loop and break the current flow of the program or to jump out of loop. 
              <br><br>
               <img src="/src/assets/breakstatement.png" alt="Online Image"class="d-block mx-auto"/><br>
               <div class="bg-secondary border border-primary p-3">
                Syntax-<br>
                       Jump - statement; <br>
                              break; 
                </div> `,
                codeExamples: [
                  `
                  package com.test;  
                    public class Code_With_Pankaj {   // Main Class: Test  
                     public static void main(String[] args) {  // Main Method   
                       for (int i = 1; i <= 5; i++) {   // i = 1,2,3,4,5    
                         if (i ==3) {    // 3==3 // True  => break       
                           break;    
                          }    
                        System.out.println(i);  // Output: 1,2,   
                      }   
                    System.out.println("after break....");          
                    } 
                  }`,
                  `
                  package com.test;  
                   public class Code_With_Pankaj {    // Main Class  
                    public static void main(String[] args) {   // Main Method   
                     for (char i = 'a'; i <= 'f'; i++) {   // a b c d e f    
                     if (i == 'c') {    // c == c   => True  => Break     
                       break;    // a b    
                      }    
                     System.out.println(i);  // Output: a b   
                    }  
                   }
                 } `]
              },
              {
                content: `<br>
                <h2>2) Continue Statement</h2>
                To jump to the next iteration of the loop, we make use of the continue statement. This statement continues the current flow of the program and skips a part of the code at the specified condition.  
                <br> It will skip the current iteration and continue with next iteration. 
                <br>
                <img src="/src/assets/jcontinuestatement.jpg" alt="Online Image"class="d-block mx-auto"/><br>
               <div class="bg-secondary border border-primary p-3">
                Syntax-<br>
                       Jump - statement; <br>
                              continue; 
                </div>
                `,
                codeExamples: [
                  `
                  package com.test;  
                   public class Test {      // Main Class  
                    public static void main(String[] args) {  // Main Method   
                      for (int i = 1; i <= 10; i++) {   // 1 to 10    
                       if (i == 5) {     
                       continue;   // 1,2,3,4,6,7,8,9,10  ( Print Except 5 )    
                       }    
                     System.out.println(i);       
                    } 
                   } 
                  }`,
                  `
                  package com.test;  
                    public class Code_With_Pankaj {    // Main Class  
                      public static void main(String[] args) {   // Main Method   
                         for (char i = 'a'; i <= 'f'; i++) {   // a b c d e f    
                          if (i == 'c') {     
                              continue;    // a,b,d,e,f ( Print Except 'c' )    
                            }    
                           System.out.println(i);  // Output: a b d e f   
                      }  
                    } 
                  }`
                ]
              },
              {
                content: `<br>
                <h2>3) Return Statement</h2> <br>
                The return statement in Java is used to exit a method and, optionally, send a value back to the caller. It transfers control back to the place where the method was invoked. 
                <br><br>
                <img src="/src/assets/returnstatement.png" alt="Online Image"class="d-block mx-auto" style="height: 350px;" /><br>
                `,
                codeExamples: [
                  `
                  public class Calculator {  // Method to add two integers and return the sum
                  public int add(int a, int b) {
                   int sum = a + b;
                    return sum; // Returns the integer value of 'sum'
                  }
                      public static void main(String[] args) {
                         Calculator calc = new Calculator();     
                         int result = calc.add(10, 5);        // The returned value is stored in the 'result' variable
                      System.out.println("Sum: " + result);    // Output: Sum: 15
                    }
                  }`,
                  `
                  public class Eligibility {   // Method to check if a person is eligible based on age
                     boolean isEligible(int age) {
                      return age >= 18; // Returns true if age is 18 or more, otherwise false
                     }
                     public static void main(String[] args) {
                       Eligibility e = new Eligibility();
                        System.out.println("Eligible: " + e.isEligible(20));       // Output: Eligible: true
                         System.out.println("Eligible: " + e.isEligible(16));      // Output: Eligible: false
                      }
                   }`
                ]
              }
            ]
          },
          {
            id: `Contructor in java`,
            name: `Constructor in Java`,
            beginner: [
              {
                content: `A constructor in Java is a special block of code used to initialize objects when they are created. It is automatically called when an instance of a class is created using the new keyword.<br>
<h4>🔹 Key Characteristics :-</h4> 
• Same Name as Class: A constructor must have the exact same name as the class it belongs to.<br>
• No Return Type: It does not have a return type, not even void. Adding a return type makes it a regular method.<br>
• Automatic Invocation: Constructors are invoked implicitly by the Java runtime when an object is instantiated.<br>
• Initialization Logic: The primary purpose is to set initial values for the object's instance variables and perform any necessary setup tasks (like opening a file or database connection) to ensure the object is in a valid state. <br>`,

              }
            ],
            intermediate: [
              {
                content: `- Constructor name it is same like as class name. <br>
                - It is invoked by JVM automatically when you create the object of class.<br>
                - It does not return anything even void also.<br>
                
                
                🔹 There are 2 types of constructor are as <br>
                1. Default constructor (No- argument constructor)<br>
                2. Parameterized constructor ( Argument constructor)<br><br>

               <h2> 1. Default Constructor (No-Argument constructor)</h2><br>
                - A constructor that does not accept any arguments called as default constructor.<br>
                - If we do not create any constructor, the Java compiler automatically create a Default.<br>
                - Constructor (no-argument constructor) during the execution of the program. This constructor is called Default Constructor.<br>

                `,
                codeExamples: [
                  `package com.test;
public class Test {
String name; // Global
public Test() { // Default Constructor
name = "Default_Constructor";
}
public static void main(String[] args) {
Test test = new Test(); // Calling Constructor (Test)
System.out.println ("Name is>>" + test.name);
}
}
                  `,

                  `package com.test;
class Main {
int a;
boolean b;
public static void main(String[] args) {
Main obj = new Main();
System.out.println("a" + obj.a);
System.out.println("b" + obj.b);
}
}
                        `

                ]

              },
              {

                content: `
                <h4>- Here, we haven't created any constructors. Hence, the Java compiler automatically creates the
default constructor.</h4>
The default constructor initializes any uninitialized instance variables with default values.
<img src="/src/assets/defaulttable.png" alt="Online Image"class="d-block mx-auto" style="height: 350px;" /><br>
<p class="text-center"> In the above program, the variables a and b are initialized with default value 0 and false respectively.</p>
   

`
              },

              {
                content: `
                <h2> 2. Parameterized Constructor </h2><br>
                A constructor with arguments called as parameterized constructor.<br>

                `,
                codeExamples: [
                  `package com.test;
public class Example {
int id;
String name;
String city;
public Example (int userId, String userName, String userCity) {
id = userId;
name = userName;
city = userCity;
System.out.println("id>>" + id);
System.out.println("name>>" + name);
System.out.println("city>>" + city);
}
public static void main(String[] args) {
Example example = new Example(10, "Pankaj", "Udgir");
}
}`
                ]
              },
              {
                content: `
                <h3>Note -</h3>
1. When you do not write any constructor in the class then default constructor will be added by JVM automatically at the compile time. <br>
2. When you write any constructor in the class then default constructor will not added by JVM.<br>
3. Constructor does not have any return type. If you write any return type, then it will be called as method. <br>
4. Java constructor cannot be abstract, static, final, and synchronized.<br><br>

<h3>What is the Use of Constructor-? </h3>
If you want to execute some code at object creation. In other words, it is used for generally initialization
of global variables.
There are 5 ways to calling the constructor as <br>
- Employee e= new Employee(); <br>
- super(); <br>
- this(); <br>
- new Employee(); <br>
- class.forName(“com.test”).newInstance(); <br>
<h4>Constructor can be overloaded because we can write same name with different arguments.</h4>`,
                codeExamples: [
                  `package com.test;
public class Example {
// id,name,city
int id;
String name;
String city;
// Parameterized Constructor: 01
public Example(int id, String name, String city) {
System.out.println(id);
System.out.println(name);
System.out.println(city);
// OR
// System.out.println("ID>>"+ id +"Name>>"+ name + "City>>"+ city);
id = id; //10
name = name; // Pankaj // Dheeraj
city = city; // Udgir // Latur
}
public Example(String name,String city) {
System.out.println(name);
System.out.println(city);
name=name;
city=city;
}
public static void main(String[] args) {
Example example=new Example(10,"Pankaj","Udgir"); // calling the constructor
Example example1=new Example("Dheeraj", "Latur");
}
}`
                ]
              },
              {
                content: `
                <h4>Note:</h4>
1. Constructor cannot be overridden because we can’t write multiple constructors with same
arguments.If you are tried to write it then you will get compiler time error “Duplicate method
Employee”.<br>

2. Private Constructor is mostly used in singleton design pattern in java.`
              },

              {
                content: `<h4>1. What is a Constructor ?</h4>
  - Constructors are used to initialize the object’s state. <br>
  - Like methods, a constructor also contains collection of statements(i.e. instructions) that are executed at time of Object creation.
  <br><br>

  <h4>2. Do we have Copy Constructor in Java?</h4>
- Like C++, Java also supports copy constructor. But, unlike C++, Java doesn’t create a default copy constructor if you don’t write your own. <br>
- To copy the values of one object into another in java, you can use: <br>
- Constructor
- Assigning the values of one object into another. <br>
- Clone() method of object class.<br> <br>


<h4>3. What is Constructor Chaining ?</h4>
Constructor Chaining: <br>
A constructor is called from another constructor in the same class this process is known as constructor
chaining. <br>
When we create an instance of a derived class, all the constructors of base class are first invoked, after
that the constructor of derived class is invoked.<br>

Rules for constructor chaining<br>
1. must be use this keyword in first line of the constructor.<br>
2. Order does not matter in constructor chaining.<br>
3. There must exist at least one constructor that does not use this keyword.<br>
  `,
                codeExamples: [
                  `//Java program to illustrate Constructor Chaining
// within same class Using this() keyword
class Temp {
// default constructor 1
// default constructor will call another constructor
// using this keyword from same class

Temp() { // calls constructor 2
this(5);
System.out.println("The Default constructor");
}

Temp(int x) { // parameterized constructor 2
// calls constructor 3
this(5, 15);
System.out.println(x);
}
// parameterized constructor 3
Temp(int x, int y) {
System.out.println(x * y);
}
public static void main(String args[]) {
// invokes default constructor first
new Temp();
}
}`
                ]
              },
              {
                content: `<h4>4. Can we call sub class constructor from super class constructor?</h4>
No. There is no way in java to call sub class constructor from a super class constructor. <br><br>

<h4>5. What happens if you keep a return type for a constructor?</h4>
Ideally, Constructor must not have a return type. By definition, if a method has a return type, it’s not a
constructor. (JLS8.8 Declaration). It will be treated as a normal method. But compiler gives a warning
saying that method has a constructor name.<br>`,
                codeExamples: [
                  `Example:
package com.test;
public class Test {
int Test() {
return 0; // Warning for the return type
}
}
  `
                ]
              },
              {
                content: `<h4>6. What is No-arg constructor?</h4>
Constructor without arguments is called no-arg constructor. <br>
Default constructor in java is always a no-arg constructor.`,
                codeExamples: [
                  `Example:
public class ABC {
public ABC(){ // No-arg constructor
}
}`
                ]
              },
              {
                content: `<h4>7. How a no – argument constructor is different from default Constructor?</h4>
- If a class contains no constructor declarations, then a default constructor with no formal parameters
and no throws clause is implicitly declared.<br>
- If the class being declared is the primordial class Object, then the default constructor has an empty
body. <br>
- Otherwise, the default constructor simply invokes the superclass constructor with no arguments.<br><br>

<h4>8. What are private constructors and where are they used?</h4>
- Like any method we can provide access specifier to the constructor. <br>
- If it’s made private, then it can only be accessed inside the class. <br>
- The major scenarios where we use private constructor:<br>
a. Internal Constructor chaining. <br>
b. Singleton class design pattern.<br><br>

<h4>9. When do we need Constructor Overloading?</h4>
- Sometimes there is a need of initializing an object in different ways. <br>
- This can be done using constructor overloading. <br>
- Different constructors can do different work by implementing different line of codes and are called
based on the type and no of parameters passed. <br>
According to the situation , a constructor is called with specific number of parameters among
overloaded constructors. <br><br>

<h4>10. Do we have destructors in Java?</h4>
- No, Because Java is a garbage collected language you cannot predict when (or even if) an object will
be destroyed. Hence there is no direct equivalent of a destructor.<br><br>

<h4>11. Can we override constructor?</h4>
-NO, Constructor cannot be overridden because we can’t write multiple constructors with same arguments.<br>
If we tried to write it then we will get compiler time error “Duplicate method Employee”.<br><br><br>

<div class="bg-secondary p-2 rounded-md border-radius: var(--radius-md);">
<h4>1. What is a constructor in Java?</h4>
o A constructor is a special method used to initialize objects. It is called when an instance of a class is
created and has the same name as the class. Constructors do not have a return type.<br>
<h4>2. What is the difference between a default constructor and a parameterized constructor?</h4>
o A default constructor has no parameters and initializes objects with default values. A parameterized
constructor takes arguments, allowing you to initialize objects with specific values.<br>
<h4>3. Can a constructor be private or final?</h4>
o Yes, a constructor can be private, which is often used in Singleton design patterns to prevent the
creation of more than one instance. Constructors cannot be final because they are not inherited.<br>
<h4>4. What is constructor overloading?</h4>
o Constructor overloading is the process of having more than one constructor in a class, each with
different parameters. This allows the creation of objects in different ways.<br>
<h4>5. What is constructor chaining?</h4>
o Constructor chaining is the process of calling one constructor from another within the same class or
from a superclass. This is done using this() for the same class and super() for the superclass.<br>
<h4>6. How do you handle exceptions in constructors?</h4>
o Exceptions in constructors can be handled using try-catch blocks within the constructor. If an
exception occurs, it can be caught and handled appropriately.<br>
<h4>7. Can a constructor call a method?</h4>
o Yes, a constructor can call methods. However, it is generally advised to avoid calling overridable
methods from constructors to prevent unexpected behavior.<br>
<h4>8. What is the purpose of a copy constructor in Java?</h4>
o A copy constructor is used to create a new object as a copy of an existing object. Java does not
provide a default copy constructor, so you need to define it explicitly.<br>
<h4>9. What is the difference between a constructor and a method?</h4>
o A constructor is used to initialize an object, has the same name as the class, and does not have a
return type. A method performs a specific task, can have any name, and must have a return type.<br>
<h4>10.Can you explain constructor inheritance in Java?</h4>
o Constructors are not inherited in Java. However, a subclass constructor can call a superclass
constructor using the super() keyword.<br>
</div>

            `
              }

            ]
          },


          {
            id: 'static-keyword',
            name: 'Static Keyword in Java',
            beginner: [{
              content: `
STATIC KEYWORD IN JAVA

Static is used for memory management. It can be applied to variables, methods, inner classes, and static blocks.

🔹 KEY POINTS:

• Local variables cannot be static
• It means single copy storage
• We cannot call non-static members from static members because static variables are stored in memory before object creation
• Outer classes cannot be static, but inner classes can be static
• Constructors cannot be static
• The main method is static
• this and super keywords are not allowed in static context

WHY USE STATIC?

Static keyword is used to create members that:
• Belong to the class itself, not to objects
• Are shared among all instances of the class
• Should be accessed without creating an object
• Represent common properties of all objects
`,
              codeExamples: [
                `// Static Variable Example
public class Student {
    int id;
    String name;
    static String course = "Code_With_Pankaj";  // Common property
    
    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Course: " + course);
    }
    
    public static void main(String[] args) {
        Student st1 = new Student(1, "Omkar");
        Student st2 = new Student(2, "Dheeraj");
        Student st3 = new Student(3, "Shree");
        
        st1.display();
        st2.display();
        st3.display();
    }
}
`
              ]
            }],
            intermediate: [{
              content: `
1) STATIC VARIABLE / CLASS VARIABLE

• A variable defined with the static keyword is called a static variable
• Also known as class variables
• Stored in Metaspace (Permanent Generation before JDK 1.8)
• Loaded into memory at class loading time
• Used to refer to common properties of all objects
• Advantages: Makes programs memory efficient (saves memory)

HOW TO ACCESS STATIC VARIABLES - 3 WAYS:

1. By using class name (Recommended)
2. By using object name
3. Direct way (only in same class)

EXAMPLE - Static vs Non-Static Variables:

When you create multiple objects:
• Static variables share the same memory for all objects (single copy)
• Non-static variables create separate memory for each object

2) STATIC METHOD / CLASS METHOD

• A method defined with static keyword is called a static method
• Also known as class methods
• Belongs to the class rather than objects
• Loads into memory before object creation
• Can access only static data members
• Can be called without creating an object

HOW TO CALL STATIC METHODS - 3 WAYS:

1. ClassName.methodName()  (Recommended)
2. objectName.methodName()
3. Direct method name (in same class)

3) STATIC BLOCK

• Group of statements executed when class is loaded
• Executed before the main method
• Used to initialize static variables
• Executes only once during class loading
• Cannot access non-static variables directly
• Widely used to create static resources

RESTRICTIONS:

1. Cannot use non-static data members directly
2. Cannot call non-static methods directly
3. this and super cannot be used in static context

WHY IS MAIN METHOD STATIC?

The JVM calls main() without creating an object. If main() were non-static, the JVM would need to create an object first, leading to extra memory allocation and inefficiency.
`,
              codeExamples: [
                `// Example 1: Static Method Access
public class StaticDemo {
    static int a = 10;
    
    public static void main(String[] args) {
        // Access by class name (Recommended)
        System.out.println("Using class name: " + StaticDemo.a);  // 10
        
        // Access by object name
        StaticDemo obj = new StaticDemo();
        System.out.println("Using object name: " + obj.a);  // 10
        
        // Direct access (same class only)
        System.out.println("Direct way: " + a);  // 10
    }
}`,
                `// Example 2: Non-static Calling Static
public class StaticDemo {
    void nonStaticMethod() {  // Non-static
        System.out.println("This is non-static method");
        staticMethod();  // Can call static from non-static
    }
    
    static void staticMethod() {  // Static
        System.out.println("This is static method");
        // nonStaticMethod();  // ERROR: Cannot call non-static from static
    }
    
    public static void main(String[] args) {
        StaticDemo obj = new StaticDemo();
        obj.nonStaticMethod();
    }
}

`,
                `// Example 3: Static Block
public class StaticBlockExample {
    static int count = 0;
    
    static {  // Static Block 1
        System.out.println("Static Block 1");
        count = 10;
    }
    
    static {  // Static Block 2
        System.out.println("Static Block 2");
        count = 20;
    }
    
    public static void main(String[] args) {
        System.out.println("Main Method");
        System.out.println("Count: " + count);
    }
}
`
              ]
            }],
            expert: [{
              content: `
STATIC VS NON-STATIC: DETAILED COMPARISON

Static Members:
• Single copy shared by all objects
• Accessed using class name
• Loaded at class loading time
• Memory allocated in Metaspace
• Cannot be overridden (can be hidden)

Non-Static Members:
• Separate copy for each object
• Accessed using object reference
• Loaded at object creation time
• Memory allocated in Heap
• Can be overridden

MEMORY ALLOCATION EXAMPLE:

Consider: int a = 5 (non-static) and static int b = 5

Object 1: Creates separate memory for 'a'
Object 2: Creates separate memory for 'a'
Object 3: Creates separate memory for 'a'
All Objects: Share same memory location for 'b'

Result: After incrementing b three times, b = 8 (single shared value)
Result: Each object's 'a' increments independently (separate copies)

WHY CALLED "SINGLE COPY STORAGE"?

Because:
• Static members are loaded into memory only once at class loading time
• Non-static members are loaded into memory every time an object is created
• Only one copy of static members exists for all objects
• This saves memory in Java programs

STATIC INNER CLASSES:

• Allowed in Java
• Can be instantiated without an instance of outer class
• Cannot access non-static members of outer class
• Can access static members of outer class

ADVANCED CONCEPTS:

Static Import:
• Allows direct access to static members without class name
• Syntax: import static package.class.staticMember

Static Initializer Order:
1. All static blocks execute during class loading (top to bottom)
2. Main method executes after class loading
3. Instance initializers execute during object creation
4. Constructors execute last during object creation

PERFORMANCE CONSIDERATIONS:

• Use static for utility methods (no object needed)
• Use static for constants (single memory location)
• Use static for shared counters/tracking
• Avoid static for data that varies per object
• Static method calls are slightly faster (no virtual dispatch)

COMMON INTERVIEW QUESTIONS:

Q: Can static methods be overridden?
A: No, they cannot be overridden. They can only be hidden by defining a method with the same signature in subclass.

Q: Can we access instance variables from static method?
A: No, we cannot directly access instance variables from static methods.

Q: Why is the main method static?
A: So JVM can call it without creating an object, avoiding unnecessary memory allocation.

Q: Can constructor be static?
A: No, constructors cannot be static.

Q: What is a static block used for?
A: To initialize static variables when class is loaded.
`,
              codeExamples: [
                `// Example 1: Understanding Static Copy Storage
public class CopyStorageDemo {
    int nonStaticVar = 5;      // Non-static
    static int staticVar = 5;  // Static
    
    public static void main(String[] args) {
        CopyStorageDemo obj1 = new CopyStorageDemo();
        System.out.println("Object 1 - NonStatic: " + obj1.nonStaticVar++);  // 5
        System.out.println("Object 1 - Static: " + CopyStorageDemo.staticVar++);  // 5
        
        CopyStorageDemo obj2 = new CopyStorageDemo();
        System.out.println("Object 2 - NonStatic: " + obj2.nonStaticVar++);  // 5 (new copy)
        System.out.println("Object 2 - Static: " + CopyStorageDemo.staticVar++);  // 6 (shared)
        
        CopyStorageDemo obj3 = new CopyStorageDemo();
        System.out.println("Object 3 - NonStatic: " + obj3.nonStaticVar++);  // 5 (new copy)
        System.out.println("Object 3 - Static: " + CopyStorageDemo.staticVar++);  // 7 (shared)
    }
}

OUTPUT:
Object 1 - NonStatic: 5
Object 1 - Static: 5
Object 2 - NonStatic: 5
Object 2 - Static: 6
Object 3 - NonStatic: 5
Object 3 - Static: 7`,
                `// Example 2: Static Inner Class
public class OuterClass {
    static int staticVar = 10;
    int nonStaticVar = 20;
    
    static class StaticInnerClass {
        void display() {
            System.out.println("Static Var from inner: " + staticVar);  // OK
            // System.out.println(nonStaticVar);  // ERROR
        }
    }
    
    public static void main(String[] args) {
        // Can create static inner class without outer object
        OuterClass.StaticInnerClass inner = new OuterClass.StaticInnerClass();
        inner.display();
    }
}`,
                `// Example 3: Static Block Execution Order
public class ExecutionOrder {
    static int a;
    
    static {
        System.out.println("Static Block 1");
        a = 10;
    }
    
    static {
        System.out.println("Static Block 2");
        a = 20;
    }
    
    public static void main(String[] args) {
        System.out.println("Main Method");
        System.out.println("Value of a: " + a);
    }
}

OUTPUT:
Static Block 1
Static Block 2
Main Method
Value of a: 20`
              ]
            }]
          },

        ]
      },

    {
      id: 'wrapper-class',
      name: 'Wrapper Class',
      topics: [
        {
          id: 'wrapper-class-basics',
          name: 'Wrapper Classes',
          beginner: [
            {
              content: `
• Wrapper Class provides the mechanism to convert primitive data types into objects and objects into primitive data types.<br><br>

<h4>Wrapper Class – Definition</h4>
Wrapper classes are predefined classes in <b>java.lang</b> package that wrap primitive data into objects.<br><br>

<h4>Types of Conversion</h4>
1. <b>Autoboxing:</b> Process of converting Primitive Data Type into Object. (PDT → Object)<br>
   Example: int → Integer, long → Long, double → Double<br><br>

2. <b>Unboxing:</b> Process of converting Object into Primitive Data Type. (Object → PDT)<br>
   Example: Integer → int, Long → long, Double → double
              `,
              codeExamples: [
`package com.object;
public class Code_With_Pankaj {
    public static void main(String[] args) {
        int a = 20; // Primitive data type
        Integer i = new Integer(a); // Autoboxing
        System.out.println("i>>" + i);

        int b = i.intValue(); // Unboxing
        System.out.println("b>>" + b);
    }
}`
              ]
            }
          ],
          intermediate: [
            {
              content: `
<h4>Need of Wrapper Classes</h4>
There are certain needs for using Wrapper Classes in Java:<br><br>

1. Wrapper classes convert primitive data types into objects, which are required to modify arguments passed into methods.<br>
2. Classes in <b>java.util</b> package handle only objects.<br>
3. Collection framework classes like ArrayList and Vector store only objects, not primitive types.<br>
4. Objects are required to support synchronization in multithreading.<br><br>

<h4>Advantages of Wrapper Classes</h4>
1. Collections & Serialization allow only object data.<br>
2. Object data supports methods like compareTo(), equals(), toString().<br>
3. Cloning is possible only for objects.<br>
4. Wrapper objects can store null values.
              `,
              codeExamples: [
`import java.util.ArrayList;

class Autoboxing {
    public static void main(String[] args) {
        char ch = 'a';
        Character c = ch; // Autoboxing

        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(25); // Autoboxing

        System.out.println(list.get(0));
    }
}`
              ]
            },
            {
              content: `
<h4>Primitive Data Types and Corresponding Wrapper Classes</h4>

byte → Byte <br>
short → Short <br>
int → Integer <br>
long → Long <br>
float → Float <br>
double → Double <br>
char → Character <br>
boolean → Boolean
              `,
              codeExamples: [
`package com.inheritance;
class Code_With_Pankaj {
    public static void main(String[] args) {
        int x = 5;
        float y = 3.14f;
        long z = 6000;

        Integer intObj = x;
        Float floatObj = y;
        Long longObj = z;

        System.out.println(intObj);
        System.out.println(floatObj);
        System.out.println(longObj);
    }
}`
              ]
            },
            {
              content: `
<h4>Wrapper Class Methods</h4>
Wrapper classes provide useful methods like valueOf(), intValue(), parseInt(), compareTo().<br><br>

<h4>Example Explanation</h4>
• Converting float wrapper object to primitive int<br>
• Converting binary string into decimal number using Integer.valueOf()<br>
              `,
              codeExamples: [
`class Code_With_Pankaj {
    public static void main(String[] args) {
        Float floatWrap = Float.valueOf(45.158f);
        int floatToInt = floatWrap.intValue();
        System.out.println(floatToInt);

        Integer five = Integer.valueOf("101", 2);
        System.out.println(five);
    }
}`
              ]
            },
            {
              content: `
<h4>UNBOXING</h4>
Unboxing is the automatic conversion of wrapper object into primitive data type.<br>
This happens when assigning wrapper object to primitive variable.<br><br>

<h4>Example</h4>
              `,
              codeExamples: [
`import java.util.ArrayList;

class Unboxing {
    public static void main(String[] args) {
        Character ch = 'a';
        char a = ch; // Unboxing

        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(24);

        int num = list.get(0); // Unboxing
        System.out.println(num);
    }
}`
              ]
            },
            {
              content: `
<h4>Interview Questions & Answers</h4>

<b>1. Which are the wrapper classes in Java?</b><br>
Wrapper classes are classes whose objects wrap primitive data types.<br><br>

<b>2. Why use wrapper classes in Java?</b><br>
Wrapper classes convert primitive data into objects required for collections, synchronization, and object manipulation.<br><br>

<b>3. What are the 8 wrapper classes in Java?</b><br>
Boolean, Byte, Short, Character, Integer, Long, Float, Double.
              `
            }
          ]
        }
      ]
    },

{
  id: 'this-super-keyword',
  name: 'This and Super Keywords',
  topics: [
    {
      id: 'this-super',
      name: 'This and Super Keywords',
      beginner: [
        {
          content: `
<h4>What is Super Keyword?</h4>
• Super keyword is used to refer to the parent class (superclass) object.<br>
• It helps access parent class members that might be hidden by child class.<br>
• Super keyword can be used with variables, methods, and constructors.<br><br>

<h4>What is This Keyword?</h4>
• This keyword refers to the current object instance.<br>
• It is used to distinguish between instance variables and local variables.<br>
• This keyword can be used with variables, methods, and constructors.<br><br>

<h4>Key Differences Between Super and This</h4>
<table border="2" cellpadding="15" cellspacing="0" style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #4CAF50; color: white;">
    <th style="border: 2px solid #333;">Super Keyword</th>
    <th style="border: 2px solid #333;">This Keyword</th>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 2px solid #333;">Refers to parent class object</td>
    <td style="border: 2px solid #333;">Refers to current class object</td>
  </tr>
  <tr>
    <td style="border: 2px solid #333;">Used to access parent class members</td>
    <td style="border: 2px solid #333;">Used to access current class members</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 2px solid #333;">Must be used in child class</td>
    <td style="border: 2px solid #333;">Can be used in any class</td>
  </tr>
  <tr>
    <td style="border: 2px solid #333;">Calls parent class constructor using super()</td>
    <td style="border: 2px solid #333;">Calls current class constructor using this()</td>
  </tr>
</table>
          `,
          codeExamples: [
`// Simple Example of Super Keyword
class Animal {
    String name = "Dog";
}

class Pet extends Animal {
    String name = "Puppy";
    
    void display() {
        System.out.println("This name: " + this.name);    // Output: Puppy
        System.out.println("Super name: " + super.name);  // Output: Dog
    }
}`,
`// Simple Example of This Keyword
class Student {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;  // this refers to instance variable
        this.age = age;
    }
    
    void display() {
        System.out.println("Name: " + this.name);
        System.out.println("Age: " + this.age);
    }
}`
          ]
        }
      ],
      intermediate: [
        {
          content: `
<h6><b>🔹 Super Keyword</b></h6>
• It is used to refer immediate parent class object, method and constructor.<br><br>

<h4>Why use super keyword?</h4>
• To access parent class members directly<br>
• To avoid unnecessary object creation<br>
• To improve memory utilization<br>
          `,
          codeExamples: [
`// Program 1: Use of immediate parent class variable
class Parent {
    int x = 20;
}

class Child extends Parent {
    int x = 25;

    public void test() {
        int x = 30;

        // Scenario 1: Using object
        Parent p = new Parent();
        System.out.println("Parent class x variable=" + p.x);

        // Scenario 2: Using super keyword
        System.out.println("Immediate super class of child class x variable=" + super.x);
    }
}

public class TestMain {
    public static void main(String[] args) {
        Child c = new Child();
        c.test();
    }
}`
          ]
        },
        {
          content: `
<h4>🔹 Super Keyword with Method</h4>
• Used to call immediate parent class method when child class overrides it.
          `,
          codeExamples: [
`// Program 2: Use of immediate super class method
class Parent {
    void test() {
        System.out.println("Parent class method.");
    }
}

class Child extends Parent {
    void test() {
        super.test();
    }
}

public class TestMain {
    public static void main(String[] args) {
        Child c = new Child();
        c.test();
    }
}`
          ]
        },
        {
          content: `
<h4>🔹 Super Keyword with Constructor</h4>
• Used to invoke immediate parent class constructor.
          `,
          codeExamples: [
`// Program 3: Use of immediate super class constructor
class Parent {

    Parent() {
        System.out.println("Parent class constructor.");
    }
}

class Child extends Parent {
    Child() {
        super();
    }
}

public class TestMain {
    public static void main(String[] args) {
        new Child();
    }
}`
          ]
        },
        {
          content: `
<h4>🔹 This Keyword</h4>
• It is used to refer current class variables, methods and constructors.<br>
• This keyword is not used in static context.
          `,
          codeExamples: [
`// Program 4: Use of current class variable
class Parent {
    int x = 20;
}

class Child extends Parent {
    int x = 25;

    void test() {
        int x = 30;

        // Scenario 1
        Child c = new Child();
        System.out.println("By creating objects=" + c.x);

        // Scenario 2
        System.out.println("By using this keyword=" + this.x);
    }
}

public class TestMain {
    public static void main(String[] args) {
        Child c = new Child();
        c.test();
    }
}`
          ]
        },
        {
          content: `
<h4>🔹 This Keyword with Method</h4>
• Used to call current class method.
          `,
          codeExamples: [
`// Program 5: Use of current class method
class Parent {
    void test() {
        System.out.println("Parent class method.");
    }
}

class Child extends Parent {
    void test() {
        System.out.println("Child class method");
    }

    void demo() {
        this.test();
    }
}

public class TestMain {
    public static void main(String[] args) {
        Child c = new Child();
        c.demo();
    }
}`
          ]
        },
        {
          content: `
<h6><b>🔹 This Keyword with Constructor</b></h6>
• Used for constructor chaining within the same class.
          `,
          codeExamples: [
`// Program 6: Use of current class constructor
class Test {

    public Test() {
        System.out.println("Test constructor called using this keyword..");
    }

    public Test(int x) {
        this();
    }

    public static void main(String[] args) {
        new Test(10);
    }
}`
          ]
        },
        {
          content: `
<h4>🔹 Constructor Chaining using this</h4>
• One constructor calls another constructor of the same class.
          `,
          codeExamples: [
`// Program 7: Constructor chaining example
class Example {

    Example() {
        this("Java");
        System.out.println("Inside Constructor without parameter");
    }

    Example(String str) {
        System.out.println("Inside Constructor with parameter " + str);
    }

    public static void main(String[] args) {
        new Example();
    }
}`
          ]
        }
      ]
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
            beginner: [
              {
                content: `A class is a blueprint for creating objects. An object is an instance of a class.

🔹 Key Concepts:
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
              }
            ],
            intermediate: [
              {
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
              }
            ],
            expert: [
              {
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
            ]
          },

          {
            id: `Encapsulation in Java`,
            name: `Encapsulation in Java`,
            beginner: [
              {
                content: `• Encapsulation in Java is a core Object-Oriented Programming (OOP) concept where the data (variables) and the code (methods) that operate on that data are bundled together as a single unit, which is typically a class. <br>
                • This mechanism is also known as data hiding because it restricts direct access to the class's internal state. <br>
                • The main idea is to hide the internal implementation details from the outside world and provide controlled access through well-defined public methods (getters and setters). <br><br>
                
                <h4>How to Achieve Encapsulation in Java</h4>
To implement encapsulation, you follow these steps: <br>
1. Declare variables as private: This prevents other classes from accessing the data directly. The variables are only accessible within their own class.<br>
2. Provide public getter and setter methods: These methods allow controlled, indirect access to the private variables.<br>
3. Getter methods (getXXX()) are used to retrieve the values of the variables.<br>
4. Setter methods (setXXX()) are used to modify the values of the variables and can include validation logic to ensure data integrity. <br>
                
                `,
                codeExamples: [
                  `package com.code_with_pankaj;
public class Person {
//------------------------------------------------------
// Private variables
private String name;
private int age;
//------------------------------------------------------
// Public getter method for name
public String getName() {
return name;
}
// Public setter method for name
public void setName(String name) {
this.name = name;
}
// Public getter method for age
public int getAge() {
return age;
}
// Public setter method for age
public void setAge(int age) {
if (age > 0) { // Simple validation
this.age = age;
} else {
System.out.println("Age must be positive");
}
}
//------------------------------------------------------
// Method to display information
public void displayInfo() {
System.out.println("Name: " + name);
System.out.println("Age: " + age);
}
//------------------------------------------------------
}
package com.code_with_pankaj;
public class Main {
public static void main(String[] args) {
// Creating an object of Person class
Person person = new Person();
// Using setter methods to set values
person.setName("Pankaj");
person.setAge(100);
// Using getter methods to access values
System.out.println("Person's Name: " + person.getName());
System.out.println("Person's Age: " + person.getAge());
// Display information using displayInfo method
person.displayInfo();
}
}

   
`
                ]
              }
            ],
            intermediate: [
              {
                content: `The binding of data into single entity called as “Encapsulation”.
                
                Example- Class is the entity which contains variables & methods.

                <div class="bg-secondary border border-primary p-2">
                Class Employee { <br>
int salary; <br>
void m5() {<br>
statements ;<br>
}<br>
}<br>
                </div>`
              },
              {
                content: `Through encapsulation, data is hidden and protected from access by outside non-member methods of a class.<br> 
Only member methods defined in a class will have access to the data.<br><br>
A Java class is an example of encapsulation because class binds variables and methods together.<br>
<div class="bg-secondary border border-primary p-2">
<h3>Key Concepts of Encapsulation:</h3>
<h4>1. Private Variables:</h4>
 • How: Declare class variables as private so they cannot be accessed directly from outside the class.<br>
 • Why: This restricts external code from directly accessing and modifying the internal state of the
object, ensuring data integrity.<br>
<h4>2. Public Getter and Setter Methods:</h4>
 • How: Provide public methods (getters and setters) to access and update the private variables.<br>
 • Why: This allows controlled access to the internal state of the object. You can add logic to these
methods to validate data before it is changed.<br>
</div>`,
                codeExamples: [
                  `package com.code_with_pankaj;
public class Person {
//------------------------------------------------------
// Private variables
private String name;
private int age;
//------------------------------------------------------
// Public getter method for name
public String getName() {
return name;
}
// Public setter method for name
public void setName(String name) {
this.name = name;
}
// Public getter method for age
public int getAge() {
return age;
}
// Public setter method for age
public void setAge(int age) {
if (age > 0) { // Simple validation
this.age = age;
} else {
System.out.println("Age must be positive");
}
}
//------------------------------------------------------
// Method to display information
public void displayInfo() {
System.out.println("Name: " + name);
System.out.println("Age: " + age);
}
//------------------------------------------------------
}
public class Main {
public static void main(String[] args) {
// Creating an object of Person class
Person person = new Person();
// Using setter methods to set values
person.setName("Pankaj");
person.setAge(100);
// Using getter methods to access values
System.out.println("Person's Name: " + person.getName());
System.out.println("Person's Age: " + person.getAge());
// Display information using displayInfo method
person.displayInfo();
}
}`
                ]
              }
            ],
            expert: [
              {
                content: `Generally, variables of a class are declared as “private” whereas, methods of class are declared as “public”. <br>
This means that variables cannot be accessed from outside the class but methods can be accessed from anywhere outside the class.<br>
• To use variables from outside, we will have to take the help of methods. <br>
• Thus, encapsulation protects data of a class from members of another class.<br><br>
<div class="bg-secondary border border-primary p-2">
<h4>Real Time Example:</h4>
Suppose you have an account in the bank. If your balance variable is declared as a public variable in
the bank software, your account balance will be known as public, In this case, anyone can know your
account balance. So, is it correct approach? Answer => is No.<br>
So, they declare balance variable as private for making your account safe, so that anyone cannot see
your account balance.<br>
The person who has to see his account balance, will have to access only private members through public
methods defined inside that class.
</div>

Thus, we can achieve security by utilizing the concept of data hiding. This is called Encapsulation in Java.<br>

Why ? <br>
<h4>Employee e1= new Employee();<br>
e1.salary= 5000; // case 1<br>
Employee e2= new Employee();<br>
e2.salary= -3000; // case 2</h4><br>

In this example, case 1, we are passing the 5000 salary to the employee that is correct but case 2, we are passing the salary 3000 that is the negative salary.<br>
So salary cannot be negative.<br>
<br>
`,
                codeExamples: [
                  `//How we are going to achieve this by using Encapsulation:
public class Employee { // Main Class: Employee
private int salary;
public void setSalary(int sal) {
if (sal > 0) { // 5000>0 True -3000>0 False = Salary =0
salary = sal; // 5000
} else {
salary = 0;
}
}
public int getSalary() {
return salary;
}
}`
                ]
              },
              {
                content: `In this example, we are checking the whether the salary is greater than zero. Because salary cannot
be negative so in this way, we are going to achieve the encapsulation.<br>
<h4>Note-</h4> Always keeps global variables private & allows others to assign values through public
methods.`,
                codeExamples: [`
//Program for Encapsulation Using Hard Coded Values
package com.encapsulation;
public class EncapsulationTest { // Main Class: EncapsulationTest
public static void main(String[] args) { // Main Method
Employee employee= new Employee (); // Creating Object
employee.setSalary(5000); // Hard Coded Value Pass
System.out.println("salary>>"+employee.getSalary());
}
}
  `, `Program for Encapsulation Using Dynamic values
package com.encapsulation;
public class Employee { // Main Class: Employee
//------------------------------------------------------
// Private Variables
private int employeeId;
private String employeeName;
private String employeeCity;
//------------------------------------------------------
// Generate Getter and Setter Method (Public Methods)
public int getEmployeeId() {
return employeeId;
}
public void setEmployeeId(int employeeId) {
this.employeeId = employeeId;
}
public String getEmployeeName() {
return employeeName;
}
public void setEmployeeName(String employeeName) {
this.employeeName = employeeName;
}
public String getEmployeeCity() {
return employeeCity;
}
public void setEmployeeCity(String employeeCity) {
this.employeeCity = employeeCity;
}
//------------------------------------------------------
}`, `package com.encapsulation;
import java.util.Scanner;
public class TestMain { // Main Class: TestMain
public static void getUserInput() { // Method getUserInput
Scanner scanner = new Scanner(System.in);
System.out.println("Enter the ID>>");
int id = scanner.nextInt();
System.out.println("Enter the Name>>");
String name = scanner.next();
System.out.println("Enter the City");
String city = scanner.next();
// Set Data
Employee employee = new Employee(); // Object Creation
employee.setEmployeeId(id);
employee.setEmployeeName(name);
employee.setEmployeeCity(city);
// Get Data
System.out.println("Employee Id>>" + employee.getEmployeeId());
System.out.println("Employee Name>>" + employee.getEmployeeName());
System.out.println("Employee City>>" + employee.getEmployeeCity());
}
public static void main(String[] args) {
getUserInput(); // static = Call Data Using getUserInput Method
}
}`]
              },
              {
                content: `Through encapsulation, data is hidden and protected from access by outside non-member methods
of a class. <br>Only member methods defined in a class will have access to the data.<br>
A Java class is an example of encapsulation because class binds variables and methods together.<br>
Generally, variables of a class are declared as “private” whereas, methods of class are declared as
“public”. <br>This means that variables cannot be accessed from outside the class but methods can be
accessed from anywhere outside the class.<br>
To use variables from outside, we will have to take the help of methods. Thus, encapsulation protects
data of a class from members of another class.<br>
<div class="bg-secondary border border-primary p-2">
<h4>Benefits of Encapsulation:</h4>
1. Control: Allows you to control how data is accessed and modified.<br>
2. Data Hiding: Protects the internal state of the object from outside access and misuse.<br>
3. Flexibility: Enables changes to the internal implementation without affecting external code.<br>
4. Maintainability: Simplifies code management and maintenance.<br>
5. Security: Enhances the security of data by restricting access to it.<br>
</div>
<br>
<div class="bg-secondary border border-primary p-2">
<h4>Disadvantages of Encapsulation (In Short):</h4>
1. Increased Complexity: Requires additional getter and setter methods.<br>
2. Performance Overhead: Extra method calls can slightly impact performance.<br>
3. Restricted Flexibility: Can make data access and modification harder.<br>
4. Testing Challenges: Private methods are harder to test directly.<br>
5. Verbose Code: More lines of code due to getter and setter methods can reduce readability.<br>
</div><br>

<div class="bg-secondary border border-primary p-2">
<h4>1. What is encapsulation in Java?</h4>
o Encapsulation is the process of wrapping data (variables) and code (methods) together into a single
unit, typically a class. It is also known as data hiding because it restricts direct access to some of the
object’s components.<br>
<h4>2. How do you achieve encapsulation in Java?</h4>
o Encapsulation is achieved by:<br>
 Declaring the variables of a class as private.<br>
 Providing public getter and setter methods to modify and view the variable values.<br>
<h4>3. What are the benefits of encapsulation?</h4>
o Encapsulation helps in:<br>
 Protecting the internal state of an object from unintended or harmful changes.<br>
 Improving modularity by keeping the data and methods that operate on the data together.<br>
 Enhancing maintainability and flexibility of the code.<br>
<h4>4. What is the difference between encapsulation and abstraction?</h4>
o Encapsulation is about bundling the data and methods that operate on the data within a single unit
and restricting access to some of the object’s components. Abstraction, on the other hand, is about
hiding the complex implementation details and showing only the essential features of the object.<br>
<h4>5. Can you give an example of encapsulation in Java?</h4>
o Sure! Here’s a simple example:<br>
Java
public class Person {<br>
private String name;<br>
private int age;<br>
public String getName() {<br>
return name;<br>
}<br>

public void setName(String name) {<br>
this.name = name;<br>
}<br>
In this example, the name and age variables are encapsulated within the Person class, and access to them
is controlled through getter and setter methods.<br>
<h4>6. What is a tightly encapsulated class?</h4>
o A tightly encapsulated class is one where all the instance variables are declared as private and
accessed only through public getter and setter methods.<br>
<h4>7. How does encapsulation improve code maintainability?</h4>
o Encapsulation improves maintainability by allowing changes to the internal implementation of a
class without affecting other parts of the code that use the class. This makes it easier to update and
manage the code.<br>
<h4>8. What is the role of getter and setter methods in encapsulation?</h4>
o Getter and setter methods provide controlled access to the private variables of a class. They allow
you to read and modify the values of the variables while maintaining control over how the variables
are accessed and updated.<br>
<h4>9. Can encapsulation be violated using reflection?</h4>
o Yes, encapsulation can be violated using Java Reflection API, which allows you to access private
fields and methods of a class. However, this should be avoided as it breaks the principles of
encapsulation and can lead to code that is difficult to maintain and debug.</h4>
<h4>10.Which design pattern is based on encapsulation in Java?</h4>
o The Singleton design pattern is based on encapsulation. It ensures that a class has only one instance
and provides a global point of access to it, encapsulating the instance creation logic.</h4>
</div>
`
              }
            ]
          },
          {
            id: `inheritance in Java`,
            name: `Inheritance in Java`,
             beginner:[
              {
                content:`In Java, it is possible to inherit attributes and methods from one class to another. <br>
                We group the "inheritance concept" into two categories:<br>

> subclass (child) - the class that inherits from another class<br>
> superclass (parent) - the class being inherited from<br><br>
To inherit from a class, use the extends keyword.<br><br>

In the example below, the Car class (subclass) inherits the attributes and methods from the Vehicle class (superclass):`,
codeExamples:[
  `class Vehicle {
  protected String brand = "Ford";        // Vehicle attribute
  public void honk() {                    // Vehicle method
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang";    // Car attribute
  public static void main(String[] args) {

    // Create a myCar object
    Car myCar = new Car();

    // Call the honk() method (from the Vehicle class) on the myCar object
    myCar.honk();

    // Display the value of the brand attribute (from the Vehicle class) and the value of the modelName from the Car class
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}`
]
              }
            ],
            intermediate: [
              {
                content: `• The process of creating the new class by using the existing class functionality called as
Inheritance.<br>
• It is a mechanism in which one class acquires the property of another class.<br>
• Inheritance means simply reusability.<br>
• It is called as - (IS Relationship)<br><br>
<h4>Example : </h4> IS Relationship<br>
<div class="bg-secondary border border-primary p-2">
package com.code_with_pankaj; <br>
class Policy { // Policy = Super Class<br>
}<br>
class TermPolicy extends Policy { // TermPolicy = Sub Class wher TermPolicy is Policy<br>
}<br>
</div>
`,
                codeExamples: [
                  `package com.code_with_pankaj;
//Superclass
public class Animal {
public void eat() {
System.out.println("This animal eats food.");
}
}
//Subclass
public class Dog extends Animal {
public void bark() {
System.out.println("The dog barks.");
}
@Override
public void eat() {
System.out.println("The dog eats kibble.");
}
}
//Main Class
public class Main {
public static void main(String[] args) {
Dog myDog = new Dog();
myDog.eat(); // Calls overridden method in Dog class
myDog.bark(); // Calls method in Dog class
}
}`
                ]
              }, {
                content: `<h4>Note-</h4>
All the parent members are derived into child class but they are depending upon the below 2 condition as <br>
• To check the access specifiers.<br>
• Members does not exist into sub class.<br><br>

<h4>UML Diagram</h4>
<div class="bg-secondary border border-primary p-2">
Parent -P // Where P = Parent Class & C is the Child Class<br>
|<br>
|<br>
|<br>
Child – C<br>
</div>

<h4>Note-</h4> Below are different names for super and sub class.<br>
<div class="bg-secondary border border-primary p-2">
Super Class->Parent Class->Base Class-> Old Class<br>
Sub Class-> Child Class-> Derived Class -> New Class<br>
</div>
<h4>Note-</h4>
1. Inherit the classes by using extends keywords.<br>
2. Whenever we create the object of subclass then all the member will get called super class as well.<br>
as sub class. Because reason is that super class members automatically inherited into sub class that’s why.<br>
3. Why we use inheritance that is for code reusability, reusability means we can reuse existing class
features such as variables and method, etc.<br>
4. We cannot extend the final class.<br><br>

`},
              
            ],
            expert:[
              {
                content:`
                <h3>When to use?</h3>
If we want to extends or increase of features of class then go for inheritance.<br>
<div class="bg-secondary border border-primary p-2">
<h4>Advantages</h4>
1. Modify the attributes / fields / variable in the existing class but this is not good option it will
increase the testing efforts for that class.<br>
2. Add the attributes / fields / variable in the new class, this is the good option we can also reduce
the testing efforts for this.<br>
</div><br><br>


<h3>Why inheritance?</h3>

Suppose we have 1 class which contain the fields like: firstname, lastname, address, city, mobile

number and in future we got the requirement to add the email then what option we have below-<br>

<h4>How the class will look like</h4>
<div class="bg-secondary border border-primary p-2">
package com.code_with_pankaj;<br
class Parent {<br>
String firstname;<br>
String lastname;<br>
String address;<br>
String city;<br>
String mobilenumber;<br>
}<br>
</div><br>
<div class="bg-blue-100 border border-primary p-2 ">
class Child extends Parent{<br>
String email;<br>
}<br>
</div>
<br>
<h4>Note:</h4> We cannot assign parent class to child class- it means<br>
Child c=new Parent(); => Here we can’t write new Parent();`
              },
              {
                content: `All the members of super class will be directly inherited into sub class and they are eligible and depends
on access specifiers only. <br>
<h3>Dynamic Dispatch</h3>
The process of assigning the child class reference to parent class called as “Dynamic dispatch.”<br>

<h4>Example : </h4>
<div class="bg-secondary border border-primary p-2">
package com.code_with_pankaj;<br>
class X {<br>
}<br>
</div><br>
<div class="bg-secondary border border-primary p-2">
package com.code_with_pankaj;<br>
class Y extends X {<br>
}<br>
</div><br>
<div class="bg-secondary border border-primary p-2">
package com.code_with_pankaj;<br>
class Test {<br>
public static void main(String[] args) {<br>
X x = new Y(); // Here we are assigning the child reference new Y() to parent class as X.<br>
}<br>
}<br>
</div><br>

<div class="bg-blue-100 border border-primary p-2">
Scenario 1 <br>
package com.code_with_pankaj;<br>
class X { // Super Class: X<br>
int a = 10; // Initialization<br>
int b = 20; // Initialization<br>
void m1() {<br>
System.out.println("Class X- m1() method");<br>
}<br>
void m2() {<br>
System.out.println("Class X- m2() method");<br>
}<br>
}<br>
</div><br>

<div class="bg-blue-100 border border-primary p-2">
package com.code_with_pankaj;<br>
class Y extends X { // Sub Class: Y<br>
int b = 30; // Initialization<br>
int c = 40; // Initialization<br>
void m2() {<br>
System.out.println("Class Y- m2() method");<br>
}<br>
void m3() {<br>
System.out.println("Class Y- m3() method");<br>
}<br>
}<br>

</div>

`, codeExamples: [
                  `package com.code_with_pankaj;
public class Test { // Main Class: Test
public static void main(String[] args) { // Main Method
// Scenario 1
X x=new X();
System.out.println(x.a); // OUTPUT: 10
System.out.println(x.b); // OUTPUT: 20
// System.out.println(x.c);
x.m1(); // Class X- m1() method
x.m2(); // Class X- m2() method
// x.m3();
// Scenario 2
Y y = new Y();
System.out.println(y.a); // OUTPUT: 10
System.out.println(y.b); // OUTPUT: 30
System.out.println(y.c); // OUTPUT: 40
y.m1(); // Class X- m1() method
y.m2(); // Class Y- m2() method
y.m3(); // Class Y- m3() method
// Scenario 3: Dynamic Dispatch: Process of assigning child class reference to parent class
X x = new Y();
System.out.println(x.a); // OUTPUT: 10
System.out.println(x.b); // OUTPUT: 20
//System.out.println(x.c);
x.m1(); // Class X- m1() method
x.m2(); // Class Y- m2() method
//x.m3();
// Scenario 4: (Note: 3rd and 4th scenario are same)
X x = new X();
Y y = new Y();
x = y;
System.out.println(x.a); // OUTPUT: 10
System.out.println(x.b); // OUTPUT: 20
// System.out.println(x.c);

x.m1(); // Class X- m1() method
x.m2(); // Class Y- m2() method
//x.m3();
// Scenario 5: Note- this is equivalent to 2nd scenario
X x = new Y();
Y y = new Y();
y = (Y) x; // Type casting
System.out.println(y.a); // OUTPUT: 10
System.out.println(y.b); // OUTPUT: 30
System.out.println(y.c); // OUTPUT: 40
y.m1(); // Class X- m1() method
y.m2(); // Class Y- m2() method
y.m3(); // Class Y- m3() method
// Scenario 6:
// Y y= new X(); // Not Allowed
// We cannot assign parent class to child class =>> Child child = new Parent();
}
}
  `
                ]
              },
              {
                content: `
                <div class="bg-blue-100 border border-primary p-2">
package com.code_with_pankaj;<br>
public class Parent {<br>
int Dheeraj = 5000;<br>
int Sheru = 6000;<br>
void x1() {<br>
System.out.println("Dheeraj From Parent Class");<br>
}<br>
void x2() {<br>
System.out.println("Sheru From Parent Class");<br>
}<br>
}<br>
</div><br>

<div class="bg-blue-100 border border-primary p-2">
package com.code_with_pankaj;<br>
public class Child extends Parent { // Step: 01<br>
int Sheru = 10000;<br>
int Omkar = 20000;<br>
void x2() {<br>
System.out.println("Sheru From Child Class");<br>
}<br>
void x3() {<br>
System.out.println("Omkar From Child Class");<br>
}<br>
}<br>
</div>
`,
                codeExamples: [
                  `package com.code_with_pankaj;
public class Test {
public static void main(String[] args) {
System.out.println("// +++++++++++++++++++++++++++++++++++++++++++++++++++++");
System.out.println("Scenario: 01 =>> Parent Class Data Access");
Parent p = new Parent();
System.out.println(p.Dheeraj); // 5000
System.out.println(p.Sheru); // 6000
// System.out.println(p.Omkar); // No Access
p.x1(); // Dheeraj From Parent Class
p.x2(); // Sheru From Parent Class
//p.x3();

System.out.println("// +++++++++++++++++++++++++++++++++++++++++++++++++++++");
System.out.println("Scenario: 02 ==>> Child Class Data Access");
Child c = new Child();
System.out.println(c.Dheeraj); // 5000 => Call from Parent Class
System.out.println(c.Sheru); // 10000=> Call from Child Class
System.out.println(c.Omkar); // 20000=> Call from Child Class
c.x1(); // Dheeraj From Parent Class
c.x2(); // Sheru From Child Class
c.x3(); // Omkar From Child Class

System.out.println("// +++++++++++++++++++++++++++++++++++++++++++++++++++++");
System.out.println("Scenario: 03 ==>> Dynamic Dispatch");
// Dynamic Dispatch: Process of assigning
// child class reference to parent class
Parent p3 = new Child();
System.out.println(p3.Dheeraj); // 5000 => Call from Parent Class
System.out.println(p3.Sheru); // 6000 => Call from Parent Class
//System.out.println(p3.Omkar);
p3.x1(); // Dheeraj From Parent Class
p3.x2(); // Sheru From Child Class
// p3.x3();
System.out.println("// +++++++++++++++++++++++++++++++++++++++++++++++++++++");
System.out.println("Scenario: 04 ==>> Note: 3rd Scenario and 4th Scenario are Same");
Parent p4 = new Parent();
Child c4 = new Child();
p4=c4;
System.out.println(p4.Dheeraj); // 5000 => Call from Parent Class
System.out.println(p4.Sheru); // 6000 => Call from Parent Class
//System.out.println(p4.Omkar);
p4.x1(); // Dheeraj From Parent Class
p4.x2(); // Sheru From Child Class
//p4.x3();
System.out.println("// +++++++++++++++++++++++++++++++++++++++++++++++++++++");
System.out.println("Scenario: 05 ==>> Type Casting : This is Equivalent to 2nd Scenario");
Parent p5 = new Child();
Child c5 = new Child();
c5 = (Child) p5;
System.out.println(c5.Dheeraj); // 5000 => Call from Parent Class
System.out.println(c5.Sheru); // 10000 => Call from Child Class
System.out.println(c5.Omkar); // 20000 => Call from Child Class
c5.x1(); // Dheeraj From Parent Class
c5.x2(); // Sheru From Child Class
c5.x3(); // Omkar From Child Class
System.out.println("// +++++++++++++++++++++++++++++++++++++++++++++++++++++");
System.out.println("Scenario: 06 ==>> Not Allowed in Java");
// Child c6 = new Parent();
// We can't assign Parent class to child class
}
} `
                ]
              }

            ]
          },
          {
            id: `Inheritance Types`,
            name: `Inheritance Types`,
            intermediate: [
              {
                content: `<h3>1. Single inheritance</h3>
                 In this only one super class and only one sub class called as single.<br>
                `,
                codeExamples: [
                  `package com.code_with_pankaj;
public class Insurance { // Super Class ( Parent )
void getInsuranceDetails() {
System.out.println("this is insurance details..");
}
}
public class HealthInsurance extends Insurance { // Sub Class (Child)
void getHealthInsuranceDetails() {
System.out.println("this is health insurance details.");
}
}
public class Test {
public static void main(String[] args) {
HealthInsurance hi = new HealthInsurance(); // Create Object
hi.getInsuranceDetails(); // this is insurance details..
hi.getHealthInsuranceDetails(); // this is health insurance details
}
}`,
                  `
class Animal {
void eat() {
System.out.println("eating...");
}
}
class Dog extends Animal {
void bark() {
System.out.println("barking...");
}
}
class Test {
public static void main(String args[]) {
Dog obj = new Dog();
obj.bark();
obj.eat();
}
}
`
                ]
              }, {
                content: `<h3>2. Multilevel Inheritance</h3>
                It has only one base class and multiple derived class called as multilevel.<br>
Or
It refers to the concept of one class extending (Or inherits) more than one base class.<br>
                `,

                codeExamples: [
                  `package com.code_with_pankaj;
public class Account {
void getAccountDetails() {
System.out.println("This is account details..");
}
}

public class CurrentAccount extends Account {
void getCurrentAccountDetails() {
System.out.println("This is current account details");
}
}


public class SavingAccount extends CurrentAccount {
void getSavingAccountDetails() {
System.out.println("This is saving account details");
}
}
public class Test {
public static void main(String[] args) {
SavingAccount savingAccount = new SavingAccount();
savingAccount.getAccountDetails();
savingAccount.getCurrentAccountDetails();
savingAccount.getSavingAccountDetails();
}
}
                  `,
                  `package com.code_with_pankaj;
class Animal {
void eat() {
System.out.println("eating...");
}
}

class Dog extends Animal {
void bark() {
System.out.println("barking...");
}
}
class BabyDog extends Dog {
void weep() {
System.out.println("weeping...");
}
}
class Test {
public static void main(String args[]) {
BabyDog d = new BabyDog();
d.weep();
d.bark();
d.eat();
}
}`
                ]
              },
              {
                content: `<h3>3. Hierarchical Inheritance</h3>
                Define: One Parent Class is inherited by many sub classes.<br>

                `, codeExamples: [
                  `package com.code_with_pankaj;
public class Loan {
void getLoanDetails() {
System.out.println("this is loan details");
}
}
public class HomeLoan extends Loan {
void getHomeLoanDetails() {
System.out.println("this is home loan details..");
}
}
public class PersonalLoan extends Loan {
void getPersonalLoanDetails() {
System.out.println("this is personal loan details");
}
}
public class CarLoan extends Loan {
void getCarLoanDetails() {
System.out.println("this is car loan details.");
}
}

public class Test {
public static void main(String[] args) {
HomeLoan homeLoan = new HomeLoan();
CarLoan carLoan = new CarLoan();
PersonalLoan personalLoan = new PersonalLoan();
homeLoan.getHomeLoanDetails();
carLoan.getCarLoanDetails();
personalLoan.getPersonalLoanDetails();
}
}`,
                  `package com.code_with_pankaj;
class Animal {
void eat() {
System.out.println("eating...");
}
}
class Dog extends Animal {
void bark() {
System.out.println("barking...");
}
}

class Cat extends Animal {
void meow() {
System.out.println("meowing...");
}
}

class Test{
public static void main(String args[]) {
Cat c = new Cat();
c.meow();
c.eat();
// c.bark();
                }
                }

`
                ]
              },
              {
                content: `<h3>4. Multiple Inheritance</h3>
                One Sub class has many super classes called as multiple inheritance.<br>
Why multiple inheritance not supported in java in case of classes?<br>
Class base has test () method and class derived has also test () method. Class test extends Base, Derived,<br>
which test method. It will called, so it create the ambiguity so that’s why multiple inheritance does not<br>
supports in java.
                `,
                codeExamples: [
                  `package com.multiple. code_with_pankaj;
public class A {
void m1() {
}
}

public class B {
void m1() {
}
}

class C extends A,B {

public static void main(String[] args) {
C c= new C();
c.m1();
}
}
                  `
                ]
              }, {
                content: `<h4>Note :- it will get the compile time error.</h4>`,
                codeExamples: [
                  `package com. code_with_pankaj;
class A {
void msg() {
System.out.println("Hello");
}
}
class B {
void msg() {
System.out.println("Welcome");
}
}


class C extends A,B{//suppose if it were
public static void main(String args[]) {
C obj = new C();
obj.msg();// Now which msg() method would be invoked?
}
}`
                ]
              },
              {
                content: `<h3>5. Hybrid Inheritance</h3>
It is the combination of single and multiple inheritance. So it is not allowed in java.<br>

<h4>Aggregation (Has Relationship)</h4>
If class has entity reference, it is known as Aggregation. It represents Has-A relationship.<br>
Consider a situation, Employee object contains many informations such as id, name, emailId etc. It
contains one more object named address, which contains its own informations such as city, state,
country, zipcode etc. as given below.<br>
<div class='bg-secondary border border-primary p-2'>

package com. code_with_pankaj;<br>
class Employee {<br>
int id;<br>
String name;<br>
Address address; // Address is a class<br>
}<br>
</div>
In such case, Employee has an entity reference address, so relationship is Employee HAS-A address.<br><br>
<h4>Why use Aggregation?</h4>
o For Code Reusability.<br>

Simple Example of Aggregation<br>
<img>

In this example, we have created the reference of Operation class in the Circle class<br>`,
                codeExamples: [
                  `package com. code_with_pankaj;
class Operation {
int square(int n) {
return n * n;
}
}
class Circle {
Operation op;// aggregation
double pi = 3.14;
double area(int radius) {
op = new Operation();
int rsquare = op.square(radius);
// code reusability (i.e. delegates the method call).
return pi * rsquare;
}
public static void main(String args[]) {
Circle c = new Circle();
double result = c.area(5);
System.out.println(result);
}
}`
                ]
              },
              {
                content: `<h4>When use Aggregation?</h4>
o Code reuse is also best achieved by aggregation when there is no is-a relationship.<br>
o Inheritance should be used only if the relationship is-a is maintained throughout the lifetime of
the objects involved; otherwise, aggregation is the best choice.<br>

Understanding meaningful example of Aggregation<br>
In this example, Employee has an object of Address, address object contains its own informations such
as city, state, country etc. In such case relationship is Employee HAS-A address.<br>
`, codeExamples: [
                  `//Address.java
public class Address {
String city,state,country;
public Address(String city, String state, String country) {
this.city = city;
this.state = state;
this.country = country;
}
}

//Emp.java
public class Emp {
int id;
String name;
Address address;
public Emp(int id, String name,Address address) {
this.id = id;
this.name = name;
this.address=address;
}
void display(){
System.out.println(id+" "+name);
System.out.println(address.city+" "+address.state+" "+address.country);
}
public static void main(String[] args) {
Address address1=new Address("Mumbai","Maharashtra","india");
Address address2=new Address("Udgir"," Maharashtra ","india");
Emp e=new Emp(111,"sheru",address1);
Emp e2=new Emp(112,"Moti",address2);
e.display();
e2.display();
}
}
  `,
                  `package com.code_with_pankaj;
import java.util.Scanner;
public class Employee {
private int id;
private String firstName;
private String lastName;
private String mobileNumber;
private Address address;
// Generate Getter and Setter
public int getId() {
return id;
}
public void setId(int id) {
this.id = id;
}
public String getFirstName() {
return firstName;
}
public void setFirstName(String firstName) {
this.firstName = firstName;
}
public String getLastName() {
return lastName;
}
public void setLastName(String lastName) {
this.lastName = lastName;
}
public String getMobileNumber() {
return mobileNumber;
}
public void setMobileNumber(String mobileNumber) {
this.mobileNumber = mobileNumber;
}
public Address getAddress() {
return address;
}
public void setAddress(Address address) {
this.address = address;
}
}
//Address
public class Address {
private String streetNo;
private String city;
private String state;
private String country;
// Generate Getter and Setter
public String getStreetNo() {
return streetNo;
}
public void setStreetNo(String streetNo) {
this.streetNo = streetNo;
}
public String getCity() {
return city;
}
public void setCity(String city) {
this.city = city;
}
public String getState() {
return state;
}
public void setState(String state) {
this.state = state;
}
public String getCountry() {
return country;
}
public void setCountry(String country) {
this.country = country;
}
}
//Test class
public class Test {
public void getUserDetails() {
Scanner scanner = new Scanner(System.in);
System.out.println("Enter employee id>>");

int id = scanner.nextInt();
System.out.println("Enter employee first name>>");
String firstName = scanner.next();
System.out.println("Enter employee last name>>");
String lastName = scanner.next();
System.out.println("Enter employee mobile number>>");
String mobileNumber = scanner.next();
System.out.println("Enter street no>>");
String streetNo = scanner.next();
System.out.println("Enter city>>");
String city = scanner.next();
System.out.println("Enter state>>");
String state = scanner.next();
System.out.println("Enter country>>");
String country = scanner.next();
// Set the value into employee object here
Employee employee = new Employee();
employee.setId(id);
employee.setFirstName(firstName);
employee.setLastName(lastName);
employee.setMobileNumber(mobileNumber);
// Set value into address object here
Address address = new Address();
address.setStreetNo(streetNo);
address.setCity(city);
address.setState(state);
address.setCountry(country);
// Set address object into employee object
employee.setAddress(address);
// get the value from employee object here
System.out.println("Employee ID>>" + employee.getId());
System.out.println("Employee First Name>>" + employee.getFirstName());
System.out.println("Employee Last Name>>" + employee.getLastName());
System.out.println("Employee Mobile Number>>"+employee.getMobileNumber());
System.out.println("Employee Street No>>" + employee.getAddress().getStreetNo());
System.out.println("Employee City>>" + employee.getAddress().getCity());
System.out.println("Employee State>>" + employee.getAddress().getState());
System.out.println("Employee Country>>" + employee.getAddress().getCountry());
}
public static void main(String[] args) { // Main Method
Test test = new Test();
test.getUserDetails();
}
}`
                ]
              },
              {
                content: `<div class='bg-secondary border border-primary p-2'>
<h4 class='text-center'>Interview Questions</h4>
<h4>1. What is inheritance in Java?</h4>
o Inheritance is an object-oriented feature that allows a class to inherit properties and behaviors (fields and
methods) from another class. The class that inherits is called the subclass (or derived class), and the class
being inherited from is called the superclass (or base class).<br>
<h4>2. What are the different types of inheritance in Java?</h4>
o Java supports single inheritance (a class inherits from one superclass), multilevel inheritance (a class inherits<br>
from a superclass, which in turn inherits from another superclass), and hierarchical inheritance (multiple
classes inherit from a single superclass). <br>Java does not support multiple inheritance (a class inheriting from
multiple superclasses) directly to avoid complexity and ambiguity.<br>
<h4>3. Why is multiple inheritance not supported in Java?</h4>
o Multiple inheritance is not supported in Java to avoid the “diamond problem,” where a class could inherit
conflicting properties or methods from multiple superclasses.<br> Instead, Java uses interfaces to achieve
multiple inheritance of type.<br>
<h4>4. How do you implement inheritance in Java?</h4>
o Inheritance is implemented using the extends keyword. For example:<br>
Java<br>
class Animal {<br>
void eat() {<br>
System.out.println("This animal eats food.");<br>
}<br>
}<br>
class Dog extends Animal {<br>
void bark() {<br>
System.out.println("The dog barks.");<br>
}<br>
}<br>
AI-generated code. Review and use carefully. More info on FAQ.<br>
<h4>5. What is the super keyword in Java?</h4>
o The super keyword is used to refer to the immediate superclass object. It can be used to access superclass
methods and constructors. For example:<br>
Java<br>
class Animal {<br>
void eat() {<br>
System.out.println("This animal eats food.");<br>
}<br>
}<br>
class Dog extends Animal {<br>
void eat() {<br>
super.eat(); // Calls the eat method of Animal class<br>
System.out.println("The dog eats bones.");<br>
}<br>
}<br>
<h4>6. Can you override a private or static method in Java?</h4>
o No, private methods cannot be overridden because they are not accessible outside the class they are
defined in. <br> Static methods cannot be overridden but can be hidden by defining a static method with the
same signature in the subclass.<br>
<h4>7. What is method overriding in Java?</h4>
o Method overriding occurs when a subclass provides a specific implementation for a method that is already
defined in its superclass.<br> The method in the subclass must have the same name, return type, and
parameters as the method in the superclass.<br>
<h4>8. What is the difference between method overloading and method overriding?</h4>
o Method overloading is when multiple methods in the same class have the same name but different
parameters. <br>Method overriding is when a subclass provides a specific implementation for a method that is
already defined in its superclass.<br>
<h4>9. What is the use of the instanceof keyword in Java?</h4>
o The instanceof keyword is used to test whether an object is an<br>
</div>`
              }

            ]
          },
          {
            id: `Abstraction in Java`,
            name: `Abstraction in Java`,
            beginner:[
              {
                content:`Data abstraction is the process of hiding certain details and showing only essential information to the user.<br>
Abstraction can be achieved with either abstract classes or interfaces (which you will learn more about in the next chapter).<br>
<br>
The abstract keyword is a non-access modifier, used for classes and methods:<br>

• Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).<br>

• Abstract method: can only be used in an abstract class, and it does not have a body. <br>
The body is provided by the subclass (inherited from).<br>`,
codeExamples:[
  `abstract class Animal {
  public abstract void animalSound();
  public void sleep() {
    System.out.println("Zzz");
  }
}
  `
]
              }
            ],
            intermediate: [
              {
                content: `It is the process of hiding the some details & showing the important information / functionalities to
the end user called as “Abstraction”.<br>
Example:<br>
1. Car<br>
2. ATM Machine<br>
3. TV Remote<br>
4. A real-time example of abstraction is “Sending SMS”. When you need to send SMS from your
mobile, you only type the text and send the message. But you don’t know the internal processing of the
message delivery.<br><br>

<h4>How to achieve the Abstraction in java?</h4>
There are 2 ways to achieve the abstraction in java.<br>
1. Abstract class (0 to 100%)<br>
2. Interface (100%)<br><br>

<h4>1. Abstract Class</h4>
• It contains abstract methods or concrete methods or empty class or combination of both
methods.<br>
• An abstract class is a class that is declared with an abstract keyword.<br>
• Abstract class have constructor.<br>

<h4>Note: Multiple inheritances are not allowed in abstract class but allowed in interfaces.</h4><br>

<div class='bg-secondary p-2'>
Example 1 <br>
package com. code_with_pankaj;<br>
public class Test { // this is abstract class<br>
// Abstract Method (does not have a body)<br>
public abstract void x1(); // this is Abstract Method<br>
public static final int a=10; // Variable<br>
}<br>
</div>`
              },
              {
                content: `Here, method is the abstract then class should be abstract only as per below example:<br>
                <div class='bg-secondary p-2'>
                package com. code_with_pankaj;<br>
public abstract class Test { // this is abstract class<br>
abstract void x1(); // this is abstract method<br>
public abstract void x2 (); // Automatic JVM add here abstract during compilation<br>
public abstract void x3(); // we can also write that<br>
}<br>
                </div><br>

                <div class='bg-secondary p-2'>
                Example 2 //we can write multiple abstract method into abstract class as per below<br>
package com. code_with_pankaj;<br>
public abstract class Test {<br>
// Write Multiple Abstract Method<br>
abstract void x1(); // abstract method<br>
abstract void x2(); // abstract method<br>
}<br>
                </div>

                <h4>How to implement abstract methods?</4>
                We need to create the class which extends from abstract class as shown in below.<br>
                `,
                codeExamples: [
                  `package com.code_with_pankaj;
//this is the implementation class
public class Example extends Test {
@Override
void x1() {
System.out.println("x1 method..");
}
@Override
void x2() {
System.out.println("x2 method..");
}
}

public class Test {
public static void main(String[] args) {
Example example = new Example();
example.x1();
example.x2();
}
}`
                ]
              },
              {
                content: `Note- Suppose in the sub class, I don’t want to override the abstract methods then make that subclass as
abstract.<br><br>

<h4>2. Interface</h4>
• It contains public abstract methods & public static final variables by default.<br>
• We must follow I to C design principle in java. It means every class should be implemented by
some interfaces.<br>

<div>
Example-1<br>
public interface Demo {<br>
public abstract void x1();<br>
public static final int a=5;<br>
// public abstract void x1(); // Here No Body so java restrict that<br>
}<br>
</div>
<div>
Example-2<br>
public interface A {<br>
public abstract void x1(); // allowed<br>
public void x2(); // allowed<br>
abstract void x3(); // allowed<br>
void x4(); // allowed<br>
}<br>
</div>
Note- if we don’t write public or abstract in interface then JVM will insert it automatically.<br>

<div class='bg-secondary p-2'>
Example 3<br>
package com.abstraction;<br>
public interface A {<br>
}<br>

package com.abstraction;<br>
public interface B {<br>
}<br>

package com.abstraction;<br>
public interface C extends A,B {<br>
}<br>
</div><br>
<h4>Multiple Inheritance Supported in Java or allowed in java. ?? -- NO</h4>

Below are the list of possible scenario regarding the interface and<br>
<h4>Note-</h4> 
• Try this from your end on laptop or desktop.<br>
• interface can extend interface1 and interface2<br>
• Interface can extends interface<br>
• Interface can extends the multiple interface<br>
• class extends class implements interface<br>
• class implements interface<br>
• class extends class implements interface1 and interface2<br>
<br>
<div class='bg-blue-200 p-3 '>
<h3 class='text-center'>Interview Questions </h3>
<h4>1. What is Abstraction in Java?</h4>
<h4>2. How to achieve or implement Abstraction in Java?</h4>
<h4>3. What is Abstract class in Java? How to define it?</h4>
<h4>4. What is the difference between abstract class and concrete class?</h4>
Ans: There are mainly 2 differences between an abstract class & concrete class.
They are:<br>
a) We cannot create an object of abstract class. Only objects of its non-abstract (or concrete) sub classes
can be created.<br>
b) It can have zero or more abstract methods that are not allowed in a non-abstract class (concrete class).<br>
<h4>5. What is Abstract in Java?</h4>
Ans: Abstract is a non-access modifier in java that is applicable for classes, interfaces, methods, and
inner classes.<br>
<h4>6. Can abstract modifier applicable for variables? - NO</h4>
<h4>7. What is Abstract method in Java?</h4>
Ans: A method which is declared with abstract modifier and has no implementation (means no body) is
called abstract method in java.<br>
It does not contain any body. It has simply a signature declaration followed by a semicolon. It has the
following general form as given below.<br>
Syntax: abstract type MethodName(arguments); // No body<br>
For example: abstract void msg(); // No body.<br>
<h4>8. Can an abstract method be declared as static? - No</h4>
<h4>9. Can an abstract method be declared with private modifier?</h4>
Ans: No, it cannot be private because the abstract method must be implemented in the child class.<br> If we
declare it as private, we cannot implement it from outside the class.<br>
<h4>10. What is Concrete method in Java?</h4>
Ans: A concrete method in Java is a method which has always the body. It is also called a complete
method in java.<br>
</div>
`
              }
            ],
            expert: [
              {
                content: `
                <h4>1. Abstract Class</h4>
• Abstract method can only be used in an abstract class, and it does not have a body. The body is
provided by the subclass (inherited from).<br>
• Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be
inherited from another class).<br>

• We cannot create the object of abstract class.<br>
• To use abstract method of class, we should extends the abstract class and use that methods.<br>
• If we don't want to implement or override that method, make that class as abstract.<br>
• A method-defined abstract must always be redefined in the subclass, thus making overriding
compulsory or making the subclass itself abstract.<br>
• If any method is abstract in a class then that class must be declared as abstract<br><br>

<div class='bg-secondary p-2'>
<h4>Advantages of Abstraction</h4>
1. It reduces the complexity of viewing things.<br>
2. Avoids code duplication and increases reusability.<br>
3. Helps to increase the security of an application or program as only essential details are provided to
the user.<br>
4. It improves the maintainability of the application.<br>
5. It improves the modularity of the application.<br>
6. The enhancement will become very easy because without affecting end-users we can able to perform
any type of changes in our internal system.<br>
7. Improves code reusability & maintainability.<br>
8. Hides implementation details and exposes only relevant information.<br>
9. Provides a clear and simple interface to the user.<br>
10. Increases security by preventing access to internal class details.<br>
11. Supports modularity, as complex systems can be divided into smaller and more manageable parts.<br>
12. Abstraction provides a way to hide the complexity of implementation details from the user, making
it easier to understand and use.<br>
13. Abstraction allows for flexibility in the implementation of a program, as changes to the underlying
implementation details can be made without affecting the user-facing interface.<br>
14. Abstraction enables modularity and separation of concerns, making code more maintainable and
easier to debug.<br>
15. Abstraction helps to hide complexities from the user to give a simple user interface.<br>
16. It improves security just by showing essential details.<br>
17. Due to abstraction, the user only focuses on what the object does instead of how it does.<br>
18. Because of abstraction we can update the internal implementation by keeping the same interface so
users will not have to adjust.<br> For example, disk brakes and drum brakes have different internal
working but both of them are accessed with a similar interface.<br>
</div><br>

<div class='bg-blue-100 p-2'>
<h4>Disadvantages of Abstraction in Java</h4>
1. Abstraction can make it more difficult to understand how the system works.<br>
2. It can lead to increased complexity, especially if not used properly.<br>
3. This may limit the flexibility of the implementation.<br>
4. Abstraction can add unnecessary complexity to code if not used appropriately, leading to increased
development time and effort.<br>
5. Abstraction can make it harder to debug and understand code, particularly for those unfamiliar with
the abstraction layers and implementation details.<br>
6. Overuse of abstraction can result in decreased performance due to the additional layers of code and
indirection.<br>
</div><br>

<h4>2. Interface</h4>
• In company, Senior Software Engineer or Team Lead or Manager level people can design the
interface then give it to developer then developer will implement it by writing the business logic into
it.<br>
• We cannot create the object of interface.<br>
• In interface, we can just define the method only but implemented those methods into
implemented class.<br>
• Before JDK 1.7, interface does not have any method body.<br>
• In JDK 1.8 Declare the default & static method with body in interface.<br>
• In JDK1.9 we can define the private methods in interface also.<br>
• Java supports multiple inheritance in the terms of interfaces but not classes.<br>
• Interface does not have constructor.<br>

<div class='bg-secondary p-2'>
Example 1<br>
package com.abstraction;<br>
public interface A {<br>
public abstract void x1(); // allowed<br>
}<br>

package com.abstraction;<br>
//this is the implementation class<br>
public class Test implements A {<br>
@Override<br>
public void x1() {<br>
System.out.println("Test-x1 method");<br>
}<br>
}<br>

package com.abstraction;<br>
public class TestExample {<br>
public static void main(String[] args) {<br>
Test test= new Test();<br>
test.x1();<br>
}<br>
}<br>
</div><br>

<div class='bg-secondary p-2'>
Example 2 // Java Supports multiple inheritance in the terms of interfaces but not classes.<br>
package com.abstraction;<br>
public interface A {<br>
public abstract void x1(); // allowed<br>
}<br>

package com.abstraction;<br>
public interface B {<br>
public abstract void x1(); // allowed<br>
}<br>

package com.abstraction;<br>
public class Test implements A,B { // Output depend on Sequence<br>
@Override<br>
public void x1() {<br>
System.out.println("Test-x1 method");<br>
}<br>
}<br>

package com.abstraction;<br>
public class TestExample {<br>
public static void main(String[] args) {<br>
Test test= new Test();<br>
test.x1();<br>
}<br>
}<br>
Output:<br>
Test-x1 method<br>
</div><br>

<h4>Why interface?</h4>
Suppose there is a requirement for Amazon to integrate SBI bank code into their shopping cart.<br>
Their customers want to make payment for products they purchased.<br>

<div class='bg-secondary p-2'>
Let's say SBI develops code like below:<br>
Class: 01<br>
class Transaction {<br>
void withdrawAmt(int amtToWithdraw) {<br>
//logic of withdraw<br>
// SBI DB connection and updating in their DB<br>
}<br>
}<br>
</div><br>

Amazon needs this class so they request SBI bank for the same. The problem with SBI is that if they
give this complete code to amazon they risk exposing everything of their own database to them as well
as their logic, which cause a security violation.<br>
Now the solution is for SBI to develop an Interface of Transaction class as shown below:<br>
<div class='bg-secondary p-2'>
Interface: 02<br>
interface Transactionid {<br>
void withdrawAmt(int amtToWithdraw) ;<br>
}<br>

Class: 03<br>
class TransactionImpl implements Transactionid {<br>
void withdrawAmt(int amtToWithdraw) {<br>
//logic of withdraw<br>
//SBI DB connection and updating in their DB<br>
}<br>
}<br>
</div><br>
Now how amazon will do this as below as-<br>
<div class='bg-secondary p-2'>
Class: 04<br>
class Test {<br>
// Main Method<br>
Transactionid ti = new TransactionImpl();<br>
ti.withdrawAmt(500);<br>
In this case, both application can achieve their aims.<br>
</div><br>

<div class='bg-blue-200 p-2'>
<h3 class='text-center'>Interview Questions</h3>
<h4>1. When to use Abstract class in Java?</h4>
<h4>2. When to use Abstract method in Java?</h4>
Ans: An abstract method can be used.<br>
a) When the same method has to perform different tasks depending on the object calling it.<br>
b) When you need to be overridden in its non-abstract subclasses.<br>
<h4>3. is abstract class a pure abstraction in Java?</h4>
Ans: No, It provides 0 to 100% abstraction.<br>
<h4>4. Is it possible to create an object of abstract class in Java?</h4>
Ans: No. It is not possible but we can create an object of its subclass.<br>
<h4>5. Is it possible that an abstract class can have without any abstract method?</h4>
Ans: Yes.<br>
<h4>6. Can an abstract class have constructor?</h4>
Ans: Yes.<br>
<h4>7. Is it possible to achieve multiple inheritance through abstract class?</h4>
Ans: No.<br>
<h4>8. Can we make an abstract class without abstract keyword?</h4>
Ans: No, a class must be declared with abstract keyword to make an abstract class.<br>
<h4>9. Can we define an abstract method inside non-abstract class (concrete class)?</h4>
Ans: No, we cannot define an abstract method in non-abstract class.<br>
For example:<br>
class Test {<br>
abstract void show();<br>
}<br>
The above code will generate a compile-time error.<br>
<h4>10. What is the difference between Abstraction and Encapsulation?</h4>
Ans: Abstraction hides the implementation details from users whereas, encapsulation wraps (binds) data
and code into a single unit.<br>
<h4>11. Why abstract class has constructor even though you cannot create object?</h4>
Ans: We cannot create an object of abstract class but we can create an object of subclass of abstract
class.<br> When we create an object of subclass of an abstract class, it calls the constructor of subclass.<br>
This subclass constructor has a super keyword in the first line that calls constructor of an abstract class.<br>
Thus, the constructors of an abstract class are used from constructor of its subclass.<br>
If the abstract class doesn’t have constructor, a class that extends that abstract class will not get
compiled.<br>
<h4>12. What is the advantage of Abstract class in Java?</h4>
Ans: The main advantages of using abstract class are as follows:<br>
• Abstract class makes programming better & more flexible by giving the scope of implementing
abstract methods.<br>
• Programmer can implement abstract method to perform different tasks depending on the need.<br>
• We can easily manage code.<br>
</div>`
              }
            ]
          },
          {
            id:`Polymorphism in java`,
            name:`Polymorphism in Java`,
            intermediate:[
              {
                content:`
                One entity that behaves differently in different cases called as polymorphism.

Example:

1. Light button, we are using that button to on or off the lights.
2. A person acts as an employee in the office, a customer in the shopping mall, a passenger in bus/train.
a student in school, and a son at home.
3. Smartphone is entity that behaves different such as text message, calling, send mail, video call etc.

How to Achieve Polymorphism in Java?

We can achieve polymorphism by using 2 ways.

1. Method Overloading / Compile Time Polymorphism / Early Binding / Static Binding:
2. Method Overriding / Runtime Polymorphism / Late Binding / Dynamic Binding:


1. Method Overloading / Compile Time Polymorphism /Early Binding / Static Binding:

• It is the Same Method Name with Different Argument called as Method overloading.

• There is No Need of Super & Sub Class Relationship.

• If we have to perform only one operation, having same method Name which increases the
readability of the program.

• Suppose you have to perform addition of the given numbers but there can be any number of
arguments, if you write the method such as a(int, int) for 2 parameters, and b(int, int, int) for 3
parameters then it may be difficult for you as well as other programmers to understand the
behaviour of the method because its name differs.

• So, we perform method overloading to figure out the program quickly.

Rules-
o Method Name must be Same.

o Parameter or Argument must be Different.
o Return Type is Anything
o Access specifier is Anything

Advantage of method overloading:

• Method overloading => Increases the Readability of the Program.

Different ways to overload the method

There are 2 ways to overload the method in java

• By changing number of arguments.

• By changing the data type`,

codeExamples:[
  `package com. code_with_pankaj;
public class TestMain {
void add(int a, int b) {
System.out.println(a + b);
}
void add(double a, double b) {
System.out.println(a + b);
}
void add(double a) {
System.out.println(a);
}
void add(int a, int b, int c) {
System.out.println(a + b + c);
}
}
public class ExampleMain { // Test Class
public static void main(String[] args) { // Main Method
TestMain obj = new TestMain(); // Creating Object
obj.add(10,5);
obj.add(10.5, 11.5);
obj.add(4.0);
obj.add(5, 10, 15);
}
}
  `
]
              },{
                content:`Why?:

Suppose we got the business requirement from the client in last year

Class Employee {

void addStudent (String firstname, String lastname, String city) { // 3 Arguments

}

Employee employee=new Employee (); // Object Create

// End user is calling the class as below

employee. addStudent (“Pankaj”, “Bhande”, “Udgir”); //End User 1

employee. addStudent (“Dheeraj”, “Patil”, “Mumbai”); //End User 2

After that I got the new requirement from the client in current year, to update the pan card details.

What options we have in this case.

> Modified field/Attributes/Variable into the existing method

1st way modifying attributes/field/variable into existing method is not good approach, it will increase
testing efforts of this class. If we are making the changes into existing method, then how end user calls
the method I mean they need to add one more extra field / variable / attributes, in future again, you got
requirement to add one more field / variable / attributes, so every time user need to change at their side,
this is not the good thing.

> Design new method and add new parameter into it

2nd way, design the same method in that class and add the new field into it. If client second want Pan
Card details so he can call that method otherwise calls the first method if pan card is not required.
`,
codeExamples:[
  `Example - 02
package com.code_with_pankaj;
public class A{ // Main Class: A
void test(Object object) { // Method: 01
System.out.println("test- Object");
}
void test(String string) { // Method: 02
System.out.println("test- String");
}
public static void main(String[] args) { // Main Method
A a = new A(); // Object Create
a.test(new Object());
a.test("ram");
a.test(new A());
a.test(new String());
}
}`
]
              },
           
              {
                content:`Why it is Called as Compile Time Polymorphism?

Because it is decided at compile time which one method should get called that’s why it is called as
Compile Time Polymorphism.

Method Overloading: Example - 01

Class MobilePattern{

void getMobilePattern(Thumb thumb){

// logic here

}

void getMobilePattern(int number){

// logic here

}

void getMobilePattern(int x1, int y1, int x2, int y2){

// logic here

}
}


Method Overloading: Example - 02

Class Banking{

void getBanking(CreditCard creditCard){

// logic here

}

void getBanking(Netbanking netBanking){

// logic here

}

void getBanking(DebitCard debitCard){ 

// logic here

}

void getBanking(UPI upi){

// logic here

}

}

Method Overriding / Run Time Polymorphism / Late Binding / Dynamic Binding:

• It is the Same Method Name with Same Argument called as method overriding.

• There is Need of Super & Sub Relationship.

>Rules:
o Method name must be Same.

o Parameters must be Same.

o Return type must be Same or Different.

o Access specifier is Anything.

Note- We can extend the method scope in overriding but not reduce the visibility of it:

Why?

• Maintainability

• Readability of code.
`,
codeExamples:[
  `Example - 01
package com.code_with_pankaj;
public class A { // Main Class: A
void m1() { // Method: m1
System.out.println("class - A- m1 () method");
}
}

public class B extends A {
@Override
void m1() { // Method: m1
System.out.println("class - B- m1 () method");
}
void m7() { // Method: m7
System.out.println("class- B- m7() method");
}
}
public class TestMain { // Test Class
public static void main(String[] args) { // Main Method
B b = new B(); // Object Create: b
b.m1(); // Call m1 Method: ObjectName.MethodName
b.m7(); // Call m7 Method: ObjectName.MethodName
}
}`
  
]
              },
              {
                content:`Program Explanation:

• In the above program, B is implementing the method m1 () with the same signature as super class A
i.e. m1 () of class B is overriding m1() of class A.

• If you want to add new features (variable or method) to existing class, then you should not disturb
the existing class. You should always write the subclass of that class that is the best practice.

Note: Why we need to write the sub class.

• To add the new features.

• To inherit the existing functionality.

Subclass method's access modifier must be the same or higher than the superclass method access
modifier

superclass In subclass, we can have access specifier

• public Public

• protected protected, public

• default default, protected, public

• private We cannot override the private

Method Overriding: Example: 01

Class SBI {

void getSimpleIntereset(float simpleRate){

// logic here

}

}

Class Axis extends SBI{

void getSimpleIntereset(float simpleRate){

// logic here

}

}

Class HDFC extends Axis {

void getSimpleIntereset(float simpleRate){

// logic here

}

}

Method Overriding: Example: 02

Class FirstTier {

void getSeatAvailability(int seat){

// logic here

}

}

Class SecondTier extends FirstTier{

void getSeatAvailability(int seat){

// logic here

}

}

Class ThirdTier extends SecondTier {

void getSeatAvailability(int seat){

// logic here

}

}
`
              }

            ]
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
            beginner: [
              {
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
              }
            ],
            intermediate: [
              {

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
            ]
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
            beginner: [
              {
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
            ]
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
            beginner: [
              {
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
            ]
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
            beginner: [
              {
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
            ]
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
            beginner: [
              {
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
            ]
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
            beginner: [
              {
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
            ]
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
            beginner: [
              {
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
            ]
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
            beginner: [
              {
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
            ]
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



