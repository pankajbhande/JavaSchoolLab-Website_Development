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
            id: "control-statements",
            name: "Control Statements in Java",
            beginner: [
              {
                content:``,
                codeExamples:[`
                  
                  `]
              }
            ],

            intermediate: [{
content: `-This is the most fundamental concepts required for java programmer. <br>

 -It allows smooth flow of execution of program. <br>

 -It controls the flow of program.<br>
<br>
There are 5 types of control statements in java:<br>

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
                   System.out.println("a is Smaller."); // OUTPUT: a is Greater   
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
int number = 2;     // Initialize Value   switch (number)
{     // switch(expression) 
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
    
    `
    
    `
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
            id: 'jumping statement',
            name: 'Jumping statement',
            beginner: [
             {
              content:``,
              codeExamples:[]
             }
            ],
            intermediate:[
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
                content: ``,
                codeExamples: []
              }
            ],
            intermediate: [
              {
                content: `- Constructor name it is same like as class name. <br>
                - It is invoked by JVM automatically when you create the object of class.<br>
                - It does not return anything even void also.<br>
                
                
                There are 2 types of constructor are as <br>
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
                content:`
                <h4>Note:</h4>
1. Constructor cannot be overridden because we can’t write multiple constructors with same
arguments.If you are tried to write it then you will get compiler time error “Duplicate method
Employee”.<br>

2. Private Constructor is mostly used in singleton design pattern in java.`
              },

              {
                content : `<h4>1. What is a Constructor ?</h4>
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
  codeExamples:[
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
            content:`<h4>4. Can we call sub class constructor from super class constructor?</h4>
No. There is no way in java to call sub class constructor from a super class constructor. <br><br>

<h4>5. What happens if you keep a return type for a constructor?</h4>
Ideally, Constructor must not have a return type. By definition, if a method has a return type, it’s not a
constructor. (JLS8.8 Declaration). It will be treated as a normal method. But compiler gives a warning
saying that method has a constructor name.<br>`,
codeExamples:[
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
            content:`<h4>6. What is No-arg constructor?</h4>
Constructor without arguments is called no-arg constructor. <br>
Default constructor in java is always a no-arg constructor.`,
codeExamples:[
  `Example:
public class ABC {
public ABC(){ // No-arg constructor
}
}`
]
          },
          {
            content:`<h4>7. How a no – argument constructor is different from default Constructor?</h4>
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

KEY POINTS:

• It means single copy storage
• Local variables cannot be static
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

OUTPUT:
ID: 1, Name: Omkar, Course: Code_With_Pankaj
ID: 2, Name: Dheeraj, Course: Code_With_Pankaj
ID: 3, Name: Shree, Course: Code_With_Pankaj`
              ]
            }],
            intermediate:[ {
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

OUTPUT:
This is non-static method
This is static method`,
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

OUTPUT:
Static Block 1
Static Block 2
Main Method
Count: 20`
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
        id: 'oop',
        name: 'Object-Oriented Programming',
        topics: [
          {
            id: 'classes-objects',
            name: 'Classes and Objects',
            beginner: [
              {
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



