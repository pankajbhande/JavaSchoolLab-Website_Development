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
                content: `Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. <br>
                It was developed by James Gosling at Sun Microsystems (now owned by Oracle Corporation) and released in 1995. <br> <br>
 <h4>Key Features of Java: </h4>

• Platform Independent: Write Once, Run Anywhere (WORA) <br>
• Object-Oriented: Everything is an object <br>
• Simple and Easy to Learn <br>
• Secure: No explicit pointers <br>
• Robust: Strong memory management <br>
• Multi-threaded: Supports concurrent programming <br>
• Architecture Neutral: Portable across platforms <br>`,
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
                content: ` Deep dive into Java Architecture and JVM internals.
                Understanding the compilation and execution process in detail.<br><br>

<h4>Java Architecture Components:</h4>
• JDK (Java Development Kit): Complete development environment<br>
• JRE (Java Runtime Environment): Runtime environment for Java applications<br>
• JVM (Java Virtual Machine): Abstract machine that executes Java bytecode<br><br>

<h4>Compilation Process:</h4>

1. Source code (.java) → Java Compiler → Bytecode (.class)<br>
2. Bytecode → JVM → Machine Code → Execution<br><br>

<h4>JVM Memory Areas:</h4>

• Heap: Object allocation<br>
• Stack: Method execution and local variables<br>
• Method Area: Class structures, constants<br>
• PC Register: Current instruction address<br>
• Native Method Stack: Native method execution<br>`,
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
                content: `Advanced JVM tuning, performance optimization, and understanding garbage collection algorithms.<br><br>

<h4>Garbage Collection Algorithms:</h4>

• Serial GC: Single-threaded, suitable for small applications<br>
• Parallel GC: Multiple threads for GC, high throughput<br>
• CMS (Concurrent Mark Sweep): Low pause time<br>
• G1 (Garbage First): Balanced throughput and latency<br>
• ZGC: Scalable low-latency GC<br>
• Shenandoah: Concurrent GC with predictable pause times<br><br>

<h4>JVM Tuning Parameters:</h4>

• Xms: Initial heap size<br>
• Xmx: Maximum heap size<br>
• XX:NewRatio: Ratio of old/new generation<br>
• XX:SurvivorRatio: Ratio of eden/survivor space<br>
• XX:+UseG1GC: Enable G1 garbage collector<br><br>

<h4>Performance Profiling Tools:</h4>

• JConsole: Monitor JVM performance<br>
• VisualVM: Profiling and monitoring<br>
• JProfiler: Commercial profiler<br>
• YourKit: Advanced profiling<br>`,
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
            id: 'feautures of java',
            name: 'Features of Java',
            beginner: [
              {
                content: `Java has certain traits that make it an excellent choice for development as a Programming Language.
                It is commonly utilised in mobile development, chatbots and DevOps.<br><br>
                
<h4>Some common Features of Java that make it so popular with developers are as follows:</h4>
                
1. Simple<br>
2. Object-Oriented<br>
3. Portable<br>
4. Platform independent<br>
5. Secured<br>
6. Robust<br>
7. Architecture neutral<br>
8. Interpreted<br>
9. High Performance<br>
10. Multithreaded<br>
11. Distributed<br>
12. Dynamic<br><br>

                `
              }

            ],

            intermediate: [
              {
                content: `The primary objective of Java programming language creation was to make it portable, simple and
secure programming language. <br>

Apart from this, there are also some excellent features which play an important role in the popularity of this language. <br>

The features of Java are also known as Java buzzwords.<br><br>

<h4>A list of the most important features of the Java language is given below.</h4>
<img src="/src/assets/feauture.png" alt="Online Image"class="d-block mx-auto" style="height: 450px;"/><br>


<h3>Simple</h3>

Java is very easy to learn, and its syntax is simple, clean and easy to understand. According to Sun 
Microsystem, Java language is a simple programming language because: <br>

• Java syntax is based on C++ (so easier for programmers to learn it after C++). <br>
• Java has removed many complicated and rarely-used features, for example, explicit pointers, 
operator overloading, etc. <br>
• There is no need to remove unreferenced objects because there is an Automatic Garbage Collection 
in Java. <br><br>



<h3>Object-oriented</h3>

• Java is an object-oriented programming language. 
• Everything in Java is an object. Object-oriented means we organize our software as a combination of different types of objects that incorporate both 
data and behaviour. <br>
• Object-oriented programming (OOPs) is a methodology that simplifies software development and 
maintenance by providing some rules. <br>

<h4>Basic concepts of OOPs are: </h4>
1. Object<br>
2. Class<br>
3. Inheritance<br>
4. Polymorphism<br>
5. Abstraction<br>
6. Encapsulation<br>
 <br>


<h3>Platform Independent</h3>
 <img src="/src/assets/platformindependent.png" alt="Online Image"class="d-block mx-auto" style="height: 280px;"/><br>

• Java is platform independent because it is different from other languages like C, C++, etc. which are 
compiled into platform specific machines while Java is a write once, run anywhere language.<br>
• A platform is the hardware or software environment in which a program runs. <br> 
• There are 2 types of platforms software-based and hardware-based. Java provides a software-based 
platform. <br> 
• The Java platform differs from most other platforms in the sense that it is a software-based platform 
that runs on top of other hardware-based platforms. It has 2 components: <br>
1. Runtime Environment  <br>
2. API(Application Programming Interface)  <br>

• Java code can be executed on multiple platforms, for example, Windows, Linux, Sun Solaris, Mac/OS, 
etc. Java code is compiled by the compiler and converted into bytecode. This bytecode is a platform independent code because it can be run on multiple platforms, i.e., Write Once and Run Anywhere 
(WORA).  <br> <br>


<h3>Secured</h3>

Java is best known for its security. With Java, we can develop virus-free systems. Java is secured 
because:  <br>
• No explicit pointer <br>
• Java Programs run inside a virtual machine sandbox <br>
  <img src="/src/assets/secured.png" alt="Online Image"class="d-block mx-auto" style="height: 280px;"/><br>

• Classloader: Classloader in Java is a part of the Java Runtime Environment (JRE) which is used to load Java 
classes into the Java Virtual Machine dynamically. It adds security by separating the package for the classes of 
the local file system from those that are imported from network sources. <br>
• Bytecode Verifier: It checks the code fragments for illegal code that can violate access rights to objects.<br> 
• Security Manager: It determines what resources a class can access such as reading and writing to the local disk. <br><br>
Java language provides these securities by default. Some security can also be provided by an 
application developer explicitly through SSL, JAAS, Cryptography, etc. <br><br>


<h3>Robust</h3>
The English mining of Robust is strong. Java is robust because: <br>
• It uses strong memory management. <br>
• There is a lack of pointers that avoids security problems.<br> 
• Java provides automatic garbage collection which runs on the Java Virtual Machine to get rid of 
objects which are not being used by a Java application anymore. <br>
• There are exception handling and the type checking mechanism in Java. All these points make Java 
robust. <br><br>


<h3>Architecture-neutral</h3>
• Java is architecture neutral because there are no implementation dependent features, for example, the 
size of primitive types is fixed. <br>

• In C programming, int data type occupies 2 bytes of memory for 32-bit architecture and 4 bytes of 
memory for 64-bit architecture. <br>
• However, it occupies 4 bytes of memory for both 32 and 64-bit architectures in Java. <br><br>


<h3>Portable </h3>
• Java is portable because it facilitates you to carry the Java bytecode to any platform. <br>
• It doesn't require any implementation. <br> <br>


<h3>High-performance</h3>
• Java is faster than other traditional interpreted programming languages because Java bytecode is "close" to native code.<br> 
• It is still a little bit slower than a compiled language (e.g., C++).<br> 
• Java is an interpreted language that is why it is slower than compiled languages, e.g., C, C++, etc. 
<br>
<br>


<h3>Distributed</h3>
• Java is distributed because it facilitates users to create distributed applications in Java. 
RMI and EJB are used for creating distributed applications.<br>
• This feature of Java makes us able to access files by calling the methods from any machine on the internet.
<br><br>

<h3>Multi-threaded</h3>
• A thread is like a separate program, executing concurrently. We can write Java programs that deal with 
many tasks at once by defining multiple threads. <br>
•The main advantage of multi-threading is that it doesn't occupy memory for each thread. It shares a common memory area. Threads are important for 
multi-media, Web applications, etc. 
<br><br>


<h3>Dynamic</h3>
• Java is a dynamic language. It supports the dynamic loading of classes. It means classes are loaded on 
demand. <br>
• It also supports functions from its native languages, i.e., C and C++. <br>
• Java supports dynamic compilation and automatic memory management (garbage collection).<br>
`
              }
            ]

          },

          {
            id: 'difference between JVM JDK JRE',
            name: `Difference between JVM, JDK, JRE`,
            intermediate: [
              {
                content: `1. A summary of JVM <br>
2. Java Runtime Environment (JRE) <br>
3. Java Development Kit (JDK)<br><br>

We must understand the differences between JDK, JRE, and JVM before proceeding further to Java. <br>
See the brief overview of JVM here. <br> <br>
If you want to get the detailed knowledge of Java Virtual Machine, move to the next page. Firstly, let's 
see the differences between the JDK, JRE, and JVM. <br><br>

<h3> JVM : </h3>
• JVM (Java Virtual Machine) is an abstract machine. <br>
• It is called a virtual machine because it doesn't physically exist. <br>
• It is a specification that provides a runtime environment in which Java bytecode can be executed. <br>
• It can also run those programs which are written in other languages and compiled to Java bytecode. <br>
• JVMs are available for many hardware and software platforms. <br>
• JVM, JRE, and JDK are platform dependent because the configuration of each OS is different from 
each other. However, Java is platform independent. <br><br>

There are 3 notions of the JVM: specification, implementation, and instance. <br>

The JVM performs the following main tasks: <br>
• Loads code <br>
• Verifies code <br>
• Executes code <br>
• Provides runtime environment <br><br>

<h3> JRE : </h3>
• JRE is an acronym for Java Runtime Environment. <br>
• It is also written as Java RTE.<br>
• The Java Runtime Environment is a set of software tools which are used for developing Java applications. <br>
• It is used to provide the runtime environment. <br>
• It is the implementation of JVM. <br>
• It physically exists. <br>
• It contains a set of libraries + other files that JVM uses at runtime. <br>
• The implementation of JVM is also actively released by other companies besides Sun Micro Systems.<br><br>
            
<img src="/src/assets/jre.png" alt="Online Image"class="d-block mx-auto" style="height:300px"/><br>

<h3 > JDK : </h3>
JDK is an acronym for Java Development Kit. The Java Development Kit (JDK) is a software 
development environment which is used to develop Java applications and applets. It physically exists. 
It contains JRE + development tools. <br><br>
JDK is an implementation of any one of the below given Java Platforms released by Oracle 
Corporation: <br>
• Standard Edition Java Platform <br>
• Enterprise Edition Java Platform <br>
• Micro Edition Java Platform <br><br>
 
The JDK contains a private Java Virtual Machine (JVM) and a few other resources such as an 
interpreter/loader (java), a compiler (javac), an archiver (jar), a documentation generator (Javadoc), 
etc. to complete the development of a Java Application.
<img src="/src/assets/jdk.png" alt="Online Image"class="d-block mx-auto" style="height:300px"/>
<br><br><br>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
  <tr>
    <th> JDK </th>
    <th> JRE </th>
    <th> JVM </th>
  </tr>

  <tr>
  <td>The full form of JDK is Java Develoment Kit</td>
  <td>The full form of JRE is Java Runtime Environment</td>
  <td>The full form of JDK is Java Develoment Kit</td>

  </tr>

  <tr>
  <td>JDK is software development kit to develop applications in java</td>
  <td>It is a software bundle which provides Java class Libraries with necessary components to run Java code.</td>
  <td>JVM executes Java byte code and provides an environment for executing it.</td>
  </tr>

  <tr>
  <td>JDK is platform dependent</td>
  <td>JRE is also platform dependent</td>
  <td>JVM is platform independent</td>
  </tr>

  <tr>
  <td>It contains tools for developing,debugging,and monitoring java code.</td>
  <td>It contains class libraries and other supporting files that JVM requires to execute the program.</td>
  <td>Software development tools are not included in JVM</td>
  </tr>

  <tr>
  <td>It is the superset of JRE</td>
  <td>It is the subset of JDK</td>
  <td>It is the subset of JRE</td>
  </tr>

  <tr>
  <td>The JDk enables developers to create Java programs that can be executed and run by the JRE and JVM</td>
  <td>The JRE is the part of Java that creates the JVM.</td>
  <td>It is the Java platform component that executes source code </td>
  </tr>

  <tr>
  <td>JDK comes with the installer.</td>
  <td>JRE only contain environment to execute source code</td>
  <td>JVM bundled in both software JDK and JRE</td>
  </tr>
</table>







                `
              }
            ]
          },

          {
            id: 'data-types',
            name: 'Data Types and Variables',
            beginner: [
              {
                content: `Java has two categories of data types : Primitive and Reference types.

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
                content: `Understanding wrapper classes, autoboxing, type casting, and variable scope:

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
                content: `Memory management, immutability, and performance considerations for data types:

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
            id: 'access specifiers',
            name: 'Access Specifiers',
            beginner: [
              {
                content: `Access specifier’s plays very important role while performing the operation on variable, methods, 
classes, etc. <br>
In other words, it is simply used to restrict the access. <br><br>
There are 4 types of access specifiers as <br>
• Default <br>
• Public <br>
• Private <br>
• Protected <br> <br>

<h3>1. Default </h3>
                • It apply to Global Variable (GV), Local Variable (LV), Constructors (C), Method (M),Inner Class (IC) & Outer Class (OC).<br><br>

<div class='border border-primary p-2'>
package p1; <br>
class A { // Apply to Outter Class<br>
int a = 10; // Apply to Global Variable<br>
 // ( Global Variable: Inside Class but Outside Main Method ) <br>
 
public static void main(String args[]) { <br>
 int b = 20; // Apply to Local Variable<br>
 // ( Local Variable: Inside Class & Inside Main Method ) <br>
} <br>
 
A{ // Apply to Constructor<br>
System.out.println("Default Acees Specifier We Can Apply to Constructor"); <br>
 } <br>
void x1{ // Apply to Method<br>
 System.out.println("Code_with_Pankaj"); <br>
} <br>
 
class Demo { // Apply to Inner Class<br>
 } <br>
} <br>
</div><br>

• It can be accessible within the same package only.<br>
• When the access specifier is not specified then it will be treated as default members. <br>
• No need to use keyword default like private. <br>
• It provides more accessibility than private. But, it is more restrictive than protected, and public. <br><br>

 In Below Code, trying to access default method of another class <br>`,
                codeExamples: [`package com.p1;
public class A { 
void display() {
 System.out.println("Code_With_Pankaj");
 } 
} 
OUTPUT: Code_With_Pankaj
----------------------------------------------
package com.p1; 
public class B { 
public static void main(String args[]) { 
 A obj = new A(); // Create Object 
 obj.display(); // ObjectName.Method 
 } 
} `]
              },

              {
                content: `<h3>2. Public </h3>
• It apply to Global Variable, Constructor, Method, Class, Static Variable, Inner Class, 
Outer Class. <br>
• It can access anywhere in the class or outside the class or same package or different package. <br>
• Local variables cannot public because they have limited scope within the method only. If we 
make it public then getting error only. “Illegal modifier for parameter”. <br>
• The public access modifier has the widest/largest scope among all other access modifiers. <br><br>


<div class='border border-primary p-2'>
package p1; // Package: p1 <br>
public class A { // Class: A<br>
public void display() { // Method: display <br>
 System.out.println("Code_with_Pankaj "); <br>
 } <br>
} <br>
Output: Code_with_Pankaj<br>
</div><br>

<div class='border border-primary p-2'>
package p2; // Package: p2 <br>
import p1.*; <br>
class B { // Class: B <br>
public static void main(String args[]) { <br>
 A a = new A(); // Create Object <br>
 a.display(); // ObjName.Method<br>
 } <br>
} <br>
</div><br>

<h4>Important Points:</h4>
• If other programmers use your class, try to use the most restrictive access level that makes sense 
for a particular member. Use private unless you have a good reason not to. <br>
• Avoid public fields except for constants. <br>

Why we use Access Specifiers? <br>

If we have a business requirement where we need to perform the employee CRUD operations and all the 
methods need to be called from getEmployeeData() only. <br><br>

<h4>Scenario ( Using Public Access Specifier ) </h4>`,
                codeExamples: [`package com.test; 
public class Employee {
public void addOperation() { 
 System.out.println("Add operation"); 
 } 
public void editOperation() { 
 System.out.println("Edit operation"); 
 } 
public void getOperation() { 
 System.out.println("Get operation"); 
 } 
public void deleteOperation() { 
 System.out.println("Delete operation"); 
 } 
public void getEmployeeData() { 
 addOperation(); // calling the methods
 editOperation(); 
 getOperation(); 
 deleteOperation(); 
 } 
} 
 -------------------------------------------
package com.test; 
public class Test { 
 public static void main(String[] args) { 
 // Create 2 object 
 Employee employee = new Employee(); 
 Employee employee2 = new Employee();
 employee.getEmployeeData(); 
 } 
} 
----------------------------------------------
OUTPUT: 
Add operation
Edit operation
Get operation
Delete operation

`]
              },

              {
                content: `Here we are directly call any method from outside class because scope is public. Hence requirement is 
not fulfilled here. 
`
              },

              {
                content: `<h3>3. Private </h3>
                • Access specifier’s plays very important role while performing the operation on variable, methods, 
classes, etc. <br>
In other words, it is simply used to restrict the access. <br>

• It apply to Global Variable (GV), Method (M), Constructor (C) & Inner Class (IC) only.<br> 
• Outside Class cannot be private. <br>
• Local variables cannot private. <br>
`,
                codeExamples: [
                  `package p1; 
public class A { // Outter class cannot be private 
//-------------------------------------------------------------------------------------------------------- 
private int a = 10; // Apply to Global Variable
 // (Global Variable: Inside Class but Outside Main Method) 
//-------------------------------------------------------------------------------------------------------- 
private void x1(){ // Apply to Method
 System.out.println("Code_with_Pankaj"); 
} 
//-------------------------------------------------------------------------------------------------------- 
private A() { // Apply to Constructor
 System.out.println("Default Constructor"); 
 } 
//-------------------------------------------------------------------------------------------------------- 
 private class Demo { // Apply to Inner Class
 } 
public static void main(String args[]) { 
 
 // private int b = 20; // Can’t Apply to Local Variable 
 // ( Local Variable: Inside Class & Inside Main Method ) 
} 
} 
`]
              },

              {
                content: `
                • It can access within class only, not outside class or outside package as scope is very limited. 
                
                <div class='border border-primary p-2'>
                package com.test;<br>
                // Class: 01st<br>
                public class Example { <br>
                private void x1 () { // Method: x1 <br>
                System.out.println("This is x1 Method"); <br>
                } <br>
                 private int a = 20; // Variable <br>
                }<br>

                </div><br>

                <div class='border border-primary p-2'>
                package com.test;<br>
                // Class 02nd<br>
                public class Test { <br>
                public static void main(String[] args) { <br>
                Example example = new Example (); <br>
                example.x1(); // ObjectName.MethodName <br>
                System.out.println(example.a); <br>
                } <br>
                } <br>
              </div><br>
          
                <h4>Note: Here x1 method and a=20 both are Private so we can’t access outside of class.</h4><br>

<div class='border border-primary p-2'>
package com.p1; <br>
public class A { <br>
private void display() { <br>
 System.out.println("Code_With_Pankaj"); <br>
 } <br>
} <br>
  </div><br>

<div class='border border-primary p-2'>
package com.p2; <br>
import com.p1.A; <br>
public class B { <br>
public static void main(String args[]) { <br>
 A obj = new A(); <br>
 // Trying to access private method of another class<br>
 obj.display(); // object.Method_Name <br>
 } <br>
} <br><br>

OUTPUT:<br>
error: display() has private access in A <br>
 obj.display(); 
</div><br>

• Top-level classes or interfaces cannot be declared as private because <br>
- private means “only visible within the enclosing class”. <br>
- protected means “only visible within the enclosing class and any subclasses.”<br><br>

<h4>Scenario ( Using private Access Specifier )</h4>
                `,
                codeExamples: [`package com.code_with_pankaj; 
public class Employee { 
private void addOperation() { 
 System.out.println("Add operation"); 
 } 
private void editOperation() { 
 System.out.println("Edit operation"); 
 } 
private void getOperation() { 
 System.out.println("Get operation"); 
 } 
private void deleteOperation() { 
 System.out.println("Delete operation"); 
 } 
public void getEmployeeData() { 
 addOperation(); 
 editOperation(); 
 getOperation(); 
 deleteOperation(); 
 } 
} 
---------------------------------------
package com.test; 
public class Test { 
public static void main(String[] args) { 
 Employee employee = new Employee(); 
 Employee employee2 = new Employee(); 
 employee.getEmployeeData(); 
 } 
}
---------------------------------------
OUTPUT: 
Add operation
Edit operation
Get operation
Delete operation
`]
              },
              {
                content: `<h4>• Here we cannot directly call any method except getEmployeeData() because scope is private. <br>
• So it cannot be directly accessible from outside. We need to access it from by calling 
getEmployeeData (). <br>
• We not able to access addOperation(), editOperaation(), getOpeartion(), deleteOpearation() 
method because these methods are private not public.</h4>`
              },

              {
                content: `<h3>4. Proctected </h3>
                • It apply to Global Variables (GV), Constructor (C), Methods (M), & Inner Class. <br>
• It cannot apply to Local Variables & Outer Class.

`,
                codeExamples: [`package p1; 
public class A { // Protected: Can’t Apply to Outter Class
 protected class Demo { // Apply to Inner Class
 } 
protected void x1{ // Apply to Method
 System.out.println("Code_with_Pankaj"); 
} 
 protected int a = 10; // Apply to Global Variable
// ( Global Variable: Inside Class but Outside Main Method ) 
public static void main(String args[]) { 
 int b = 20; // Protected: Can’t Apply to Local Variable 
// ( Local Variable: Inside Class & Inside Main Method ) 
} 
} `]
              },
              {
                content: `• It is accessible within the same package and also possible into another package if inheritance is 
happened while calling. <br><br>

In this example, we will create 2 packages p1 and p2. Class A in p1 is made public, 
to access it in p2. The method display in class A is protected and class B is inherited from class A and 
this protected method is then accessed by creating an object of class B. 
`,
                codeExamples: [
                  `package p1; 
// Class A 
protected class A { 
protected void display() { 
 // Method
 System.out.println("Code_With_Pankaj "); 
 } 
} 
OUTPUT: Code_With_Pankaj 
--------------------------------------------
// protected modifier import p1.*; 
// importing all classes in package p1 
// Class B is subclass of A 
protected B extends A { 
public static void main(String args[]) { 
 B obj = new B(); 
 obj.display(); 
 } 
} 
`
                ]
              },
            ],

            intermediate: [
              {
                content: `We can apply default access Specifiers or final on local variable. <br><br>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
<tr>
<th></th>
<th>default</th>
<th>public</th>
<th>private</th>
<th>protected</th>
</tr>

<tr class='text-center'>
<td>Same class</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr class='text-center'>
<td>Same Package sub class</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr class='text-center'>
<td>Same Package sub-class</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr class='text-center'>
<td>Same Package non-subclass</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr class='text-center'>
<td>Different package sub-class</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr class='text-center'>
<td>Different package non-subclass </td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
</table>
<br>
• Algorithm to use access modifier in Java <br>
Here’s a basic algorithm for using access modifiers in Java:<br><br>
<h4>Define a class: </h4>
• Create a class that represents the object you want to manage. <br><br>

<h4>Define instance variables:</h4>
Within the class, define instance variables that represent the data you want to manage. <br><br>

<h4>Specify an access modifier:</h4> 
• For each instance variable, specify an access modifier that determines the visibility of the variable. <br>
• The three main access modifiers in Java are private, protected, and public. <br><br>

<h4>Use private for variables that should only be accessible within the class:</h4> 
• If you want to prevent access to a variable from outside the class, use the private access modifier.<br> 
• This is the most restrictive access modifier and provides the greatest level of encapsulation. <br><br>

<h4>Use protected for variables that should be accessible within the class and its subclasses: </h4>
• If you want to allow access to a variable from within the class and its subclasses, use the protected 
access modifier. <br>
•This is less restrictive than private and provides some level of inheritance. <br><br>

<h4>Use public for variables that should be accessible from anywhere:</h4> 
• If you want to allow access to a variable from anywhere, use the public access modifier. 
• This is the least restrictive access modifier and provides the least amount of encapsulation. <br><br>

<h4>Use accessor and mutator methods to manage access to the variables:</h4> 
• In order to access and modify the variables, use accessor (getter) and mutator (setter) methods, even if the variables have 
a public access modifier. <br>
• This provides a level of abstraction and makes your code more maintainable and testable.<br><br>

In this way, we use the access specifiers. <br>
<h4>1. What are access modifiers in Java? </h4>
Access modifiers in Java are the keywords that are used for controlling the use of the methods, 
constructors, fields, and methods in a class. <br>
 
<h4>2. What is void in Java?</h4>
Void in Java is used to specify no return value with the method. <br>
 
<h4>3. What are the 12 modifiers in Java?</h4>
12 Modifiers in Java are public, private, protected, default, final, synchronized, abstract, native, 
strictfp, transient, and volatile. <br>
                
<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2">
<tr>
<th>Public Access Modifier</th>
<th>Private Access Modifier </th>
</tr>

<tr>
<td>This modifier is applicable for both top-level classes and interfaces.</td>
<td>This modifier is not applicable for both top-level classes and interfaces</td>
</tr>

<tr>
<td>Public members can be accessed from the child class of the same package.</td>
<td>Private members cannot be accessed from the child class of the same package.</td>
</tr>

<tr>
<td>Public member can be accessed from non-child class of same package.</td>
<td>Private members cannot be accessed from non-child class of same package.
</td>
</tr>

<tr>
<td>Public members can be accessed from child class of outside package.</td>
<td>Private members cannot be accessed from child class of outside package.</td>
</tr>

<tr>
<td>Public members can be accessed from non-child class of outside package</td>
<td>Private members cannot be accessed from non-child class of outside package.</td>
</tr>

<tr>
<td>Public modifier is the most accessible modifier.</td>
<td>Private modifier is the most restricted modifier.</td>
</tr>

</table>`
              }
            ]
          },

          {
            id: "operators",
            name: "Operators in Java",

            intermediate: [

              {
                content: `
<h4>1) Arithmetic Operators</h4>
Used to perform mathematical calculations.<br>

Operators:<br>
• +  Addition  <br>
• -  Subtraction  <br>
• *  Multiplication  <br>
• /  Division  <br>
• %  Modulus  <br>
`,
                codeExamples: [
                  `int a = 10, b = 3;

System.out.println(a + b); // 13
System.out.println(a - b); // 7
System.out.println(a * b); // 30
System.out.println(a / b); // 3
System.out.println(a % b); // 1`
                ]
              },

              {
                content: `
<h4>2) Logical AND (&&) Operator</h4>
• Returns true only if BOTH conditions are true  <br>
• Second condition is skipped if first is false <br>
<img src="./src/assets/operator1.png" 
     alt="String in Java" 
     class="d-block mx-auto" /> <br>
`,
                codeExamples: [
                  `int x = 10, y = 20;

System.out.println(x < y && x > 5);   // true
System.out.println(x > y && x > 5);   // false`
                ]
              },

              {
                content: `
<h4>3) Logical OR (||) Operator</h4>
• Returns true if ANY one condition is true  <br>
• Second condition is skipped if first is true <br>
<img src="./src/assets/operator2.png" 
     alt="String in Java" 
     class="d-block mx-auto" /> <br>
`,
                codeExamples: [
                  `int x = 10, y = 20;

System.out.println(x > y || x < y);   // true
System.out.println(x > y || x > 30);  // false`
                ]
              },

              {
                content: `
<h4>4) Relational Operators</h4>
Used to compare two values.<br>

Operators:<br>
• >   Greater than  <br>
• <   Less than  <br>
• >=  Greater than or equal to  <br>
• <=  Less than or equal to  <br>
• ==  Equal to  <br>
• !=  Not equal to  <br>
`,
                codeExamples: [
                  `int a = 10, b = 20;

System.out.println(a > b);   // false
System.out.println(a < b);   // true
System.out.println(a == b);  // false
System.out.println(a != b);  // true`
                ]
              },

              {
                content: `
<h4>5) Assignment Operator</h4>
Used to assign value to a variable.<br>

Syntax:<br>
variable = value;<br>
`,
                codeExamples: [
                  `int x = 50;
System.out.println(x); // 50`
                ]
              },

              {
                content: `
<h4>6) Bitwise AND (&) Operator</h4>
• Always checks BOTH conditions  <br>
• Executes even if first condition is false <br>
<img src="./src/assets/operator3.png" 
     alt="String in Java" 
     class="d-block mx-auto" /> <br>
`,
                codeExamples: [
                  `int x = 10, y = 20;

System.out.println(x < y & x > 5);  // true
System.out.println(x > y & x > 5);  // false`
                ]
              },

              {
                content: `
<h4>7) Bitwise OR (|) Operator</h4>
• Always checks BOTH conditions  <br>
• Executes even if first condition is true <br>
<img src="./src/assets/operator4.png" 
     alt="String in Java" 
     class="d-block mx-auto" /> <br>
`,
                codeExamples: [
                  `int x = 10, y = 20;

System.out.println(x < y | x > 50); // true
System.out.println(x > y | x > 50); // false`
                ]
              },

              {
                content: `
<h4>8) Unary Operators</h4>
Used to increment or decrement value.<br>

Operators:<br>
• ++ Increment  <br>
• -- Decrement  <br>
`,
                codeExamples: [
                  `int a = 10;

a++;
System.out.println(a); // 11

a--;
System.out.println(a); // 10`
                ]
              },

              {
                content: `
<h4>9) Ternary Operator</h4>
Shorthand for if-else statement.<br>

Syntax:<br>
condition ? value_if_true : value_if_false<br>
`,
                codeExamples: [
                  `int a = 10, b = 20;

int max = (a > b) ? a : b;
System.out.println(max); // 20`
                ]
              },

              {
                content: `
<h4>10) Shift Operators</h4>
• Right shift operator >> is used to move left operands value to right by the number of bits specified 
by the right operand. <br>
• Left shift operator << is used to shift all of the bits in a value to the left side of a specified number 
of times. <br>

`,
                codeExamples: [
                  `int x = 10;

System.out.println(x << 2); // 40
System.out.println(x >> 1); // 5`
                ]
              },

              {
                content: `
<h4>11) Dot (.) Operator</h4>
Used to access class variables and methods.<br>
`,
                codeExamples: [
                  `class Demo {
    void show() {
        System.out.println("Dot operator example");
    }

    public static void main(String[] args) {
        Demo obj = new Demo();
        obj.show(); // using dot operator
    }
}`
                ]
              },

              {
                content: `
<h4>12) new Operator</h4>
Used to create an object of a class.
`,
                codeExamples: [
                  `class Test {
    Test() {
        System.out.println("Object created");
    }

    public static void main(String[] args) {
        Test t = new Test(); // new operator
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
              content: `This is the most fundamental concepts required for java programmer. 
It allows smooth flow of execution of program. It controls the flow of program.<br> <br>

<h4> There are 5 types of control statements in java:</h4>
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

          },

          {
            id: 'Jumping Statement',
            name: 'Jumping Statements in Java',
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
            id: 'Looping Statements',
            name: 'Looping Statements',
            beginner: [
              {
                content: `
      Loops are used to execute a set of instructions repeatedly when some conditions become true.<br><br>
      In Java, looping statements help us avoid writing the same code multiple times and improve code efficiency.<br><br>
      There are 3 types of loops in Java:<br>
      1) For Loop<br>
      2) While Loop<br>
      3) Do While Loop
      `
              }
            ],
            intermediate: [
              {
                content: `
      <h2>1) For Loop</h2>
      For loop in Java is used to iterate and evaluate a block of code multiple times.<br><br>
       
                     <img src="/src/assets/loop 1.png" alt="Online Image"class="d-block mx-auto"/>

      <b>When to use:</b><br>
      If the number of iterations is fixed, it is recommended to use a for loop.<br><br>

      <div class="bg-secondary border border-primary p-3">
        Syntax:<br>
        for (initialization; condition; increment/decrement) {<br>
        &nbsp;&nbsp;Statements;<br>
        }
      </div>
      `,
                codeExamples: [
                  `
        public class Code_With_Pankaj {
          public static void main(String[] args) {
            for (int i = 1; i <= 5; i++) {
              System.out.println("value of i>>" + i);
            }
          }
        }
        `,
                  `
        public class Code_With_Pankaj {
          public static void main(String[] args) {
            for (int j = 10; j > 0; j--) {
              System.out.println("j>>" + j);
            }
          }
        }
        `
                ]
              },
              {
                content: `
      <h2>2) While Loop</h2>
      The while loop evaluates a condition before executing the loop body.<br>
      If the condition is true, the loop continues; otherwise, it stops.<br><br>

                      <img src="/src/assets/loop 2.png" alt="Online Image"class="d-block mx-auto"/>

      <b>When to use:</b><br>
      If the number of iterations is not fixed, it is recommended to use a while loop.<br><br>

      <div class="bg-secondary border border-primary p-3">
        Syntax:<br>
        Initialization;<br>
        while (condition) {<br>
        &nbsp;&nbsp;Statements;<br>
        &nbsp;&nbsp;Increment / Decrement;<br>
        }
      </div>
      `,
                codeExamples: [
                  `
        public class Code_With_Pankaj {
          public static void main(String[] args) {
            int i = 1;
            while (i <= 10) {
              System.out.println("value of i>>" + i);
              i++;
            }
          }
        }
        `,
                  `
        public class Code_With_Pankaj {
          public static void main(String[] args) {
            int i = 10;
            while (i > 0) {
              System.out.println("value of i>>" + i);
              i--;
            }
          }
        }
        `
                ]
              },
              {
                content: `
      <h2>3) Do While Loop</h2>
      The do-while loop is similar to the while loop, but the condition is checked after executing the loop body.<br>
      This guarantees that the loop runs at least once.<br><br>
                     <img src="/src/assets/loop 3.png" alt="Online Image"class="d-block mx-auto"/>


      <b>When to use:</b><br>
      If the number of iterations is not fixed and the loop must execute at least once.<br><br>

      <div class="bg-secondary border border-primary p-3">
        Syntax:<br>
        Initialization;<br>
        do {<br>
        &nbsp;&nbsp;Statements;<br>
        &nbsp;&nbsp;Increment / Decrement;<br>
        } while (condition);
      </div>
      `,
                codeExamples: [
                  `
        public class Looping {
          public static void main(String[] args) {
            int i = 1;
            do {
              System.out.println(i);
              i++;
            } while (i <= 10);
          }
        }
        `
                ]
              },
              {
                content: `
      <h2>All In One Program (For Loop, While Loop, Do While Loop)</h2>
      `,
                codeExamples: [
                  `
        package com.example;

        public class Code_With_Pankaj {
          public static void main(String[] args) {

            // For Loop
            for (int x = 1; x <= 10; x++) {
              System.out.println("By Using For Loop:>>" + x);
            }

            // While Loop
            int i = 1;
            while (i <= 10) {
              System.out.println("By Using While Loop:>> " + i);
              i++;
            }

            // Do While Loop
            int p = 1;
            do {
              System.out.println("By Using Do While Loop:>> " + p);
              p++;
            } while (p <= 10);
          }
        }
        `
                ]
              }
            ]
          },

          {
            id: 'Packages',
            name: 'Packages',
            beginner: [
              {
                content: `
      Package is nothing but a collection of classes and interfaces that work together, called a package.<br><br>

      <b>Default Package:</b> java.lang<br>
      <b>User Defined Package:</b> We can create our own packages.<br><br>

      <b>Why Packages?</b><br>
      Suppose you have a large number of files deployed on a server. If bugs occur in specific files, 
      finding them without packages is difficult. Packages help organize code into folders, making 
      navigation, debugging, and maintenance easy.<br><br>

      <b>Advantages:</b><br>
      • Reusability – Common code can be reused.<br>
      • Maintenance – Easy for new developers or testers to find files.
      `
              }
            ],
            intermediate: [
              {
                content: `
      <h2>Types of Packages in Java</h2>
      There are two types of packages in Java:<br>
      1) User-defined Package<br>
      2) Built-in Package (Predefined Package)<br><br>

      <div class="bg-secondary border border-primary p-3">
        Syntax:<br>
        package package_name;
      </div><br>

      Packages generally start with <b>com</b> folder.<br><br>

      <b>Example (Company-based Package Naming):</b><br>
      Domain: www.google.com<br>
      Package name: com.google<br><br>

      <b>Package are generally starts with com folder.</b><br>
1. Suppose you are working in Google and the domain name of Google is www.google.com. You can
declare the package by reversing the domain like this:<br>
Package com.google;<br>
where,<br>

com ➝ It is generally company specification name and the folder starts with com which
is called root folder.<br>
google ➝ Company name where the product is developed. It is the subfolder.<br>

2. dell ➝ Client name for which we are developing our product or working for the project.<br>
3. smartwatch ➝ Name of the project.
4. android ➝ It is the name of the modules of the android project. There are a number of modules in
the android project like a mobile android, tab android, or android watch. Suppose you are working for
android module.<br>


      <b>Note:</b> Package names are written in lowercase only.
      `
              },
              {
                content: `
      <h2>Import Statement</h2>
      When we use one class inside another class from a different package, we use the import statement.<br><br>


                     <img src="/src/assets/package 1.png" alt="Online Image"class="d-block mx-auto"/>

      <b>Different ways to import:</b><br>
      import com.p1.Test;  // correct<br>
      import com.p1.*;     // correct (imports all classes)<br>
      import com.p1;       // wrong
      `,
                codeExamples: [
                  `
        package com.p1;
        public class Test {
          public void m1() {
            System.out.println("This is m1 method");
          }
        }
        `,
                  `
        package com.p2;
        import com.p1.Test;

        public class Pankaj {
          public static void main(String[] args) {
            Test test = new Test();
            test.m1();
          }
        }
        `
                ]
              },
              {
                content: `
      <h2>Scanner in Java</h2>
Scanner is a class in java.util package used for obtaining the input of the primitive types like int,
double, and strings etc.<br>
It is the easiest way to read input in a Java program.<br>
-To create an object of Scanner class, we usually pass the predefined object System.in.<br>
- To read numerical values of a certain data type, the method to use is nextInt().
For example, to read a value of type short, we can use nextShort() and so on.<br>
- To read strings, we use nextLine() or next().<br>
      <b>Features:</b><br>
      • Reads primitive data types and strings<br>
      • Uses System.in for input<br>
      • Easy to use
      <br><br>

      <b>Common Scanner Methods:</b><br>
                     <img src="/src/assets/package 2.png" alt="Online Image"class="d-block mx-auto"/>

      `
              },
              {
                content: `<h2>Scanner Examples</h2>`,
                codeExamples: [
                  `
        package com.test;
        import java.util.Scanner;

        public class Code_With_Pankaj {
          public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter an integer: ");
            int xyz = sc.nextInt();
            System.out.println("Using nextInt(): " + xyz);
          }
        }
        `,
                  `
        package com.test;
        import java.util.Scanner;

        public class Code_With_Pankaj {
          public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter Double value: ");
            double value = sc.nextDouble();
            System.out.println("Using nextDouble(): " + value);
          }
        }
        `,
                  `
        package com.test;
        import java.util.Scanner;

        public class Code_With_Pankaj {
          public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter your name: ");
            String value = sc.next();
            System.out.println("Using next(): " + value);
          }
        }
        `,
                  `
        package com.test;
        import java.util.Scanner;

        public class Code_With_Pankaj {
          public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter your name: ");
            String value = sc.nextLine();
            System.out.println("Using nextLine(): " + value);
          }
        }
        `,
                  `
        package com.test;
        import java.math.BigDecimal;
        import java.math.BigInteger;
        import java.util.Scanner;

        public class Code_With_Pankaj {
          public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter a big integer: ");
            BigInteger value1 = sc.nextBigInteger();
            System.out.print("Enter a big decimal: ");
            BigDecimal value2 = sc.nextBigDecimal();
            System.out.println("Using nextBigInteger(): " + value1);
            System.out.println("Using nextBigDecimal(): " + value2);
          }
        }
        `,
                  `
        package com.test;
        import java.util.Scanner;

        public class Code_With_Pankaj {
          public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            System.out.println("Enter Your Name:");
            String name = sc.nextLine();

            System.out.println("Enter Your Gender:");
            char gender = sc.next().charAt(0);

            System.out.println("Enter Your Age:");
            int age = sc.nextInt();

            System.out.println("Enter Your Mobile Number:");
            long mobile = sc.nextLong();

            System.out.println("Enter Your Percentage:");
            double percentage = sc.nextDouble();

            System.out.println("Name: " + name);
            System.out.println("Gender: " + gender);
            System.out.println("Age: " + age);
            System.out.println("Mobile: " + mobile);
            System.out.println("Percentage: " + percentage);
          }
        }
        `
                ]
              }
            ]
          },


          {
            id: `Array in java`,
            name: `Array in Java`,

            intermediate: [

              {
                content: `
<b>Array</b><br>
• Array is a collection of similar type of elements stored in contiguous memory locations.<br>
• Java array is an object that contains elements of the same data type.<br>
• Array size is fixed and cannot grow at runtime.<br>
• Array is index-based, starting from index <b>0</b>.<br>
               <img src="/src/assets/Array1.png" alt="Online Image"class="d-block mx-auto"/>

`
              },

              {
                content: `
<h4>Advantages of Array</h4>
• Code Optimization – efficient data access and sorting<br>
• Random Access – direct access using index<br><br>

<h4>Disadvantages of Array</h4>
• Fixed size – cannot grow dynamically<br>
• Memory wastage may occur<br>
• Collection framework overcomes this limitation<br>
`
              },

              {
                content: `
<h4>Types of Arrays in Java</h4>
1. Single Dimensional Array<br>
2. Multidimensional Array<br>
`
              },

              {
                content: `
<h4>Single Dimensional Array</h4>
<b>Declaration Syntax</b><br>
1. dataType[] arr;<br>
2. dataType []arr;<br>
3. dataType arr[];<br>
`
              },

              {
                content: `
<h4>Array Declaration, Instantiation & Initialization</h4>
`,
                codeExamples: [
                  `int a[] = new int[5];
a[0] = 10;
a[1] = 20;
a[2] = 30;
a[3] = 40;
a[4] = 50;

for(int i=0;i<a.length;i++){
    System.out.println(a[i]);
}`
                ]
              },

              {
                content: `
<h4>Array Initialization in Single Line</h4>
`,
                codeExamples: [
                  `int a[] = {10, 20, 30};

for(int i=0;i<a.length;i++){
    System.out.println(a[i]);
}`
                ]
              },

              {
                content: `
<h4>For-each Loop with Array</h4>
We can also print the Java array using for-each loop. The Java for-each loop prints the array elements
one by one. It holds an array element in a variable, then executes the body of the loop.
`,
                codeExamples: [
                  `int arr[] = {10, 20, 30, 40};

for(int i : arr){
    System.out.println(i);
}`
                ]
              },

              {
                content: `
<h4>Passing Array to Method</h4>
We can pass the java array to method so that we can reuse the same logic on any array.
`,
                codeExamples: [
                  `static void min(int arr[]){
    int min = arr[0];
    for(int i=1;i<arr.length;i++){
        if(min > arr[i])
            min = arr[i];
    }
    System.out.println(min);
}

int a[] = {33, 3, 4, 5};
min(a);`
                ]
              },

              {
                content: `
<h4>Anonymous Array</h4>
Java supports the feature of an anonymous array, so you don't need to declare the array while passing an
array to the method.
`,
                codeExamples: [
                  `printArray(new int[]{10, 22, 44, 66});`
                ]
              },

              {
                content: `
<h4>Returning Array from Method</h4>
We can also return an array from the method in Java.
`,
                codeExamples: [
                  `static int[] get(){
    return new int[]{10, 30, 50, 90, 60};
}

int arr[] = get();
for(int i : arr){
    System.out.println(i);
}`
                ]
              },

              {
                content: `
<h4>ArrayIndexOutOfBoundsException</h4>
The Java Virtual Machine (JVM) throws an ArrayIndexOutOfBoundsException if length of the array in
negative, equal to the array size or greater than the array size while traversing the array.`,
                codeExamples: [
                  `int arr[] = {50, 60, 70, 80};
for(int i=0;i<=arr.length;i++){
    System.out.println(arr[i]);
}`
                ]
              },

              {
                content: `
<h4>Multidimensional Array</h4>
• Stored in row and column format (matrix)<br>
`,
                codeExamples: [
                  `int arr[][] = {
    {1,2,3},
    {2,4,5},
    {4,4,5}
};

for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        System.out.print(arr[i][j]+" ");
    }
    System.out.println();
}`
                ]
              },

              {
                content: `
<h4>Jagged Array</h4>
If we are creating odd number of columns in a 2D array, it is known as a jagged array. In other words, it
is an array of arrays with different number of columns.`,
                codeExamples: [
                  `int arr[][] = new int[3][];
arr[0] = new int[3];
arr[1] = new int[4];
arr[2] = new int[2];`
                ]
              },

              {
                content: `
<h4>Copying an Array</h4>
We can copy an array to another by the arraycopy() method of System class.
`,
                codeExamples: [
                  `char[] src = {'d','e','c','a','f','f','e','i','n'};
char[] dest = new char[7];

System.arraycopy(src, 2, dest, 0, 7);
System.out.println(String.valueOf(dest));`
                ]
              },

              {
                content: `
<h4>Cloning an Array</h4>
Since, Java array implements the Cloneable interface, we can create the clone of the Java array. If we
create the clone of a single-dimensional array, it creates the deep copy of the Java array. It means, it will
copy the actual value. But, if we create the clone of a multidimensional array, it creates the shallow copy
of the Java array which means it copies the references.
`,
                codeExamples: [
                  `int arr[] = {33, 3, 4, 5};
int clone[] = arr.clone();

System.out.println(arr == clone); // false`
                ]
              },

              {
                content: `
<h4>Matrix Addition</h4>
In the case of matrix multiplication, a one-row element of the first matrix is multiplied by all the
columns of the second matrix which can be understood by the image given below.
`,
                codeExamples: [
                  `int a[][] = {{1,3,4},{3,4,5}};
int b[][] = {{1,3,4},{3,4,5}};
int c[][] = new int[2][3];

for(int i=0;i<2;i++){
    for(int j=0;j<3;j++){
        c[i][j] = a[i][j] + b[i][j];
        System.out.print(c[i][j]+" ");
    }
    System.out.println();
}`
                ]
              },

              {
                content: `
<h4>Matrix Multiplication</h4>
`,
                codeExamples: [
                  `int a[][] = {{1,1,1},{2,2,2},{3,3,3}};
int b[][] = {{1,1,1},{2,2,2},{3,3,3}};
int c[][] = new int[3][3];

for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        c[i][j]=0;
        for(int k=0;k<3;k++){
            c[i][j]+=a[i][k]*b[k][j];
        }
        System.out.print(c[i][j]+" ");
    }
    System.out.println();
}`
                ]
              },

              {
                content: `
<h4>Find 3rd Largest Element</h4>
`,
                codeExamples: [
                  `Arrays.sort(a);
System.out.println(a[a.length-3]);`
                ]
              },

              {
                content: `
<div class="bg-secondary p-2 rounded-md">
<h4>Important Interview Questions</h4>
1. What is array?<br>
2. Why array size is fixed?<br>
3. Difference between array & collection<br>
4. What is jagged array?<br>
5. Array vs ArrayList<br>
</div>
`
              }

            ]
          },


          {
            id: `String in java`,
            name: `String in Java`,

            intermediate: [

              {
                content: `
      String: 
      It is the class that represents sequence of character.<br>
Package: Java.lang.<br>
Strings in Java are a sequence of characters, and they are one of the most commonly used data types
for storing and manipulating text.<br>
<img src="./src/assets/string.png" 
     alt="String in Java" 
     class="d-block mx-auto" />


<b>Q. Why String is Immutable in Java?</b><br>
• String is immutable, once a String object is created it cannot be changed.<br>
• Any modification creates a <b>new String object</b>.<br>
• Improves <b>security, memory efficiency, and thread safety</b>.<br><br>

<b>CharSequence Interface</b><br>
• Represents a sequence of characters.<br>
• Implemented by String, StringBuffer, StringBuilder.<br>
• Allows treating all three uniformly.<br>
<img src="./src/assets/string2.png" 
     alt="String in Java" 
     class="d-block mx-auto" />

`
              },

              {
                content: `
<h4>Creating String Objects</h4>
1. String Literal<br>
2. Using new keyword<br>
3. Using Character Array<br>
4. Using String Methods<br>
`
              },

              {
                content: `
<h4>1. String Literal</h4>
• Created using double quotes.<br>
• Stored in <b>String Constant Pool</b>.<br>
• JVM reuses existing objects for memory efficiency.<br>
`,
                codeExamples: [
                  `String s1 = "pankaj";
String s2 = "pankaj";
System.out.println(s1 == s2); // true`
                ]
              },

              {
                content: `
<h4>2. Using new Keyword</h4>
• Always creates a new object in heap memory.<br>
• Even if value exists in String Pool.<br>
`,
                codeExamples: [
                  `String s1 = "pankaj";
String s2 = new String("pankaj");

System.out.println(s1 == s2);      // false
System.out.println(s1.equals(s2)); // true`
                ]
              },

              {
                content: `
<h4>String Immutability Example</h4>
• concat() does not modify original String.<br>
• New object is created.<br>
`,
                codeExamples: [
                  `String s = "pankaj";
s = s.concat("bhande");
System.out.println(s); // pankajbhande`
                ]
              },

              {
                content: `
<h4>String Manipulation Methods</h4>
• length()<br>
• concat()<br>
• charAt()<br>
• substring()<br>
• toUpperCase()<br>
• trim()<br>
• replace()<br>
`,
                codeExamples: [
                  `String original = "Code With Pankaj";

System.out.println("Length: " + original.length());
System.out.println("Concatenated: " + original.concat(" is fun!"));
System.out.println("First Char: " + original.charAt(0));
System.out.println("Substring: " + original.substring(5, 16));
System.out.println("Uppercase: " + original.toUpperCase());
System.out.println("Trimmed: " + " Java ".trim());
System.out.println("Replaced: " + original.replace('a', '@'));`
                ]
              },

              {
                content: `
<h4>String Comparison</h4>
<b>3 Ways:</b><br>
1. equals() → Content comparison<br>
2. == → Reference comparison<br>
3. compareTo() → Lexicographical comparison<br>
<img src="./src/assets/string6.png" 
     alt="String in Java" 
     class="d-block mx-auto" />

`,
                codeExamples: [
                  `String s1 = "Pankaj";
String s2 = "Pankaj";
String s3 = new String("Pankaj");

System.out.println(s1.equals(s2)); // true
System.out.println(s1 == s3);      // false`
                ]
              },

              {
                content: `
<h4>compareTo() Example</h4>
`,
                codeExamples: [
                  `String s1 = "Pankaj";
String s2 = "Pankaj";
String s3 = "Dheeraj";

System.out.println(s1.compareTo(s2)); // 0
System.out.println(s1.compareTo(s3)); // positive
System.out.println(s3.compareTo(s1)); // negative`
                ]
              },

              {
                content: `
<h4>String Concatenation Techniques</h4>
1. + operator<br>
2. concat() method<br>
3. StringBuilder<br>
4. String.format()<br>
5. String.join()<br>
`,
                codeExamples: [
                  `String s = "Pankaj" + " Bhande";
System.out.println(s);`,

                  `StringBuilder sb = new StringBuilder("Hello");
sb.append(" Pankaj");
System.out.println(sb.toString());`
                ]
              },

              {
                content: `
<h4>Concatenation Using format()</h4>
`,
                codeExamples: [
                  `String s1 = "Hello";
String s2 = " Pankaj";
String s = String.format("%s%s", s1, s2);
System.out.println(s);`
                ]
              },

              {
                content: `
<h4>Concatenation Using String.join()</h4>
`,
                codeExamples: [
                  `String s = String.join("", "Hello", " Pankaj");
System.out.println(s);`
                ]
              },

              {
                content: `
<h4>Concatenation Using StringJoiner</h4>
`,
                codeExamples: [
                  `StringJoiner sj = new StringJoiner(", ");
sj.add("Hello");
sj.add("Pankaj");
System.out.println(sj.toString());`
                ]
              },

              {
                content: `
<h4>Character Array to String</h4>
• String can be created from char array.<br>
• Char array is mutable, String is immutable.<br>
`,
                codeExamples: [
                  `char[] arr = {'H','e','l','l','o'};
String str = new String(arr);
System.out.println(str);`
                ]
              },

              {
                content: `
<h4>Counting Spaces in String</h4>
`,
                codeExamples: [
                  `String str = "Code With Pankaj";
int count = 0;

for(int i=0;i<str.length();i++){
    if(str.charAt(i)==' '){
        count++;
    }
}
System.out.println("Total spaces: " + count);`
                ]
              },

              {
                content: `
<h4>Why String is Immutable? (Interview)</h4>
1. ClassLoader safety<br>
2. Thread safety<br>
3. Security (passwords, DB URLs)<br>
4. Heap memory optimization<br>
`
              },

              {
                content: `
<h4>Difference Between String, StringBuffer, StringBuilder</h4>
• String → Immutable, Thread-safe<br>
• StringBuffer → Mutable, Thread-safe<br>
• StringBuilder → Mutable, Fastest, Not Thread-safe<br>
`
              },

              {
                content: `
<div class="bg-secondary p-2 rounded-md">
<h4>Important Interview Questions</h4>
1. Why String is immutable?<br>
2. What is String Constant Pool?<br>
3. == vs equals()<br>
4. StringBuffer vs StringBuilder<br>
5. How JVM handles + operator?<br>
</div>
`
              }
            ]
          },

          {
            id: `Contructor in java`,
            name: `Constructor in Java`,
            beginner: [
              {
                content: `A constructor in Java is a special block of code used to initialize objects when they are created. 
                It is automatically called when an instance of a class is created using the new keyword.<br><br>
<h4> Key Characteristics :-</h4> 
• Same Name as Class: A constructor must have the exact same name as the class it belongs to.<br>
• No Return Type: It does not have a return type, not even void. Adding a return type makes it a regular method.<br>
• Automatic Invocation: Constructors are invoked implicitly by the Java runtime when an object is instantiated.<br>
• Initialization Logic: The primary purpose is to set initial values for the object's instance variables and perform any necessary setup tasks (like opening a file or database connection) to ensure the object is in a valid state. <br>`,

              }
            ],
            intermediate: [
              {
                content: `Constructor name it is same like as class name. It is invoked by JVM automatically when you create the object of class.
                It does not return anything even void also.<br><br>
                
                
                <h4>There are 2 types of constructor are as </h4>
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
            id: 'constructor-chaining',
            name: 'Constructor Chaining',

            beginner: [
              {
                content: `
<h4>What is Constructor Chaining?</h4>
• <b>Constructor Chaining</b> is the process of calling one constructor from another constructor.<br>
• It is used to <b>reuse constructor logic</b> and reduce code duplication.<br>
• Constructor chaining can happen <b>within the same class</b> or <b>between parent and child classes</b>.<br><br>

<b>Why use Constructor Chaining?</b><br>
• Improves code reusability<br>
• Maintains proper initialization sequence<br>
• Makes code clean and manageable
      `,
                codeExamples: []
              },

              {
                content: `
<h4>Rules of Constructor Chaining</h4>
• <b>this()</b> or <b>super()</b> must be the <b>first statement</b> inside constructor.<br>
• We cannot use both <b>this()</b> and <b>super()</b> together.<br>
• At least <b>one constructor must not use this()</b>.
      `,
                codeExamples: []
              },

              {
                content: `
<h4>Constructor Chaining Within Same Class</h4>
• If constructors belong to the <b>same class</b>, we use <b>this()</b> keyword.<br>
• One constructor can call another constructor of the same class.
      `,
                codeExamples: [
                  `package com.test;

public class Chaining {

    Chaining() {
        this(5);
        System.out.println("This is Default constructor");
    }

    Chaining(int x) {
        this("Java");
        System.out.println(x);
    }

    Chaining(String str) {
        System.out.println(str);
    }

    public static void main(String args[]) {
        new Chaining();
    }
}

/*
Output:
Java
5
This is Default constructor
*/`
                ]
              }
            ],

            intermediate: [

              {
                content: `
<h4>Constructor Chaining Using super()</h4>
• When constructor chaining happens between <b>parent and child classes</b>, we use <b>super()</b>.<br>
• Parent class constructor executes <b>before</b> child class constructor.
      `,
                codeExamples: [
                  `package com.test;

public class Base {
    String name;

    Base() {
        this("");
        System.out.println("No-argument constructor of base class....");
    }

    Base(String name) {
        this.name = name;
        System.out.println("Calling parameterized constructor of base class....");
    }
}`
                ]
              },

              {
                content: `
<h4>Derived Class Constructor</h4>
• <b>super()</b> is used to call base class constructor.<br>
• If super() is not written, Java adds it implicitly.<br>
• super() must be the first statement.
      `,
                codeExamples: [
                  `package com.test;

public class Derived extends Base {

    Derived() {
        System.out.println("No-argument constructor of derived class");
    }

    Derived(String name) {
        super(name);
        System.out.println("Calling parameterized constructor of derived class");
    }

    public static void main(String args[]) {
        new Derived("test");
    }
}

/*
Output:
Calling parameterized constructor of base class....
Calling parameterized constructor of derived class
*/`
                ]
              },

              {
                content: `
<h4>Important Points (Interview)</h4>
• Constructor chaining works automatically with inheritance.<br>
• Constructors are not inherited, but they are executed.<br>
• Helps in proper object initialization.
      `
              }
            ]
          },

          {
            id: `Array in java`,
            name: `Array in Java`,

            intermediate: [

              {
                content: `
<b>Array</b><br>
• Array is a collection of similar type of elements stored in contiguous memory locations.<br>
• Java array is an object that contains elements of the same data type.<br>
• Array size is fixed and cannot grow at runtime.<br>
• Array is index-based, starting from index <b>0</b>.<br>
<img src="./src/assets/array1.png" 
     alt="String in Java" 
     class="d-block mx-auto" />
`
              },

              {
                content: `
<h4>Advantages of Array</h4>
• Code Optimization – efficient data access and sorting<br>
• Random Access – direct access using index<br><br>

<h4>Disadvantages of Array</h4>
• Fixed size – cannot grow dynamically<br>
• Memory wastage may occur<br>
• Collection framework overcomes this limitation<br>
`
              },

              {
                content: `
<h4>Types of Arrays in Java</h4>
1. Single Dimensional Array<br>
2. Multidimensional Array<br>
`
              },

              {
                content: `
<h4>Single Dimensional Array</h4>
<b>Declaration Syntax</b><br>
1. dataType[] arr;<br>
2. dataType []arr;<br>
3. dataType arr[];<br>
`
              },

              {
                content: `
<h4>Array Declaration, Instantiation & Initialization</h4>
`,
                codeExamples: [
                  `int a[] = new int[5];
a[0] = 10;
a[1] = 20;
a[2] = 30;
a[3] = 40;
a[4] = 50;

for(int i=0;i<a.length;i++){
    System.out.println(a[i]);
}`
                ]
              },

              {
                content: `
<h4>Array Initialization in Single Line</h4>
`,
                codeExamples: [
                  `int a[] = {10, 20, 30};

for(int i=0;i<a.length;i++){
    System.out.println(a[i]);
}`
                ]
              },

              {
                content: `
<h4>For-each Loop with Array</h4>
We can also print the Java array using for-each loop. The Java for-each loop prints the array elements
one by one. It holds an array element in a variable, then executes the body of the loop.
`,
                codeExamples: [
                  `int arr[] = {10, 20, 30, 40};

for(int i : arr){
    System.out.println(i);
}`
                ]
              },

              {
                content: `
<h4>Passing Array to Method</h4>
We can pass the java array to method so that we can reuse the same logic on any array.
`,
                codeExamples: [
                  `static void min(int arr[]){
    int min = arr[0];
    for(int i=1;i<arr.length;i++){
        if(min > arr[i])
            min = arr[i];
    }
    System.out.println(min);
}

int a[] = {33, 3, 4, 5};
min(a);`
                ]
              },

              {
                content: `
<h4>Anonymous Array</h4>
Java supports the feature of an anonymous array, so you don't need to declare the array while passing an
array to the method.
`,
                codeExamples: [
                  `printArray(new int[]{10, 22, 44, 66});`
                ]
              },

              {
                content: `
<h4>Returning Array from Method</h4>
We can also return an array from the method in Java.
`,
                codeExamples: [
                  `static int[] get(){
    return new int[]{10, 30, 50, 90, 60};
}

int arr[] = get();
for(int i : arr){
    System.out.println(i);
}`
                ]
              },

              {
                content: `
<h4>ArrayIndexOutOfBoundsException</h4>
The Java Virtual Machine (JVM) throws an ArrayIndexOutOfBoundsException if length of the array in
negative, equal to the array size or greater than the array size while traversing the array.`,
                codeExamples: [
                  `int arr[] = {50, 60, 70, 80};
for(int i=0;i<=arr.length;i++){
    System.out.println(arr[i]);
}`
                ]
              },

              {
                content: `
<h4>Multidimensional Array</h4>
• Stored in row and column format (matrix)<br>
`,
                codeExamples: [
                  `int arr[][] = {
    {1,2,3},
    {2,4,5},
    {4,4,5}
};

for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        System.out.print(arr[i][j]+" ");
    }
    System.out.println();
}`
                ]
              },

              {
                content: `
<h4>Jagged Array</h4>
If we are creating odd number of columns in a 2D array, it is known as a jagged array. In other words, it
is an array of arrays with different number of columns.`,
                codeExamples: [
                  `int arr[][] = new int[3][];
arr[0] = new int[3];
arr[1] = new int[4];
arr[2] = new int[2];`
                ]
              },

              {
                content: `
<h4>Copying an Array</h4>
We can copy an array to another by the arraycopy() method of System class.
`,
                codeExamples: [
                  `char[] src = {'d','e','c','a','f','f','e','i','n'};
char[] dest = new char[7];

System.arraycopy(src, 2, dest, 0, 7);
System.out.println(String.valueOf(dest));`
                ]
              },

              {
                content: `
<h4>Cloning an Array</h4>
Since, Java array implements the Cloneable interface, we can create the clone of the Java array. If we
create the clone of a single-dimensional array, it creates the deep copy of the Java array. It means, it will
copy the actual value. But, if we create the clone of a multidimensional array, it creates the shallow copy
of the Java array which means it copies the references.
`,
                codeExamples: [
                  `int arr[] = {33, 3, 4, 5};
int clone[] = arr.clone();

System.out.println(arr == clone); // false`
                ]
              },

              {
                content: `
<h4>Matrix Addition</h4>
In the case of matrix multiplication, a one-row element of the first matrix is multiplied by all the
columns of the second matrix which can be understood by the image given below.
`,
                codeExamples: [
                  `int a[][] = {{1,3,4},{3,4,5}};
int b[][] = {{1,3,4},{3,4,5}};
int c[][] = new int[2][3];

for(int i=0;i<2;i++){
    for(int j=0;j<3;j++){
        c[i][j] = a[i][j] + b[i][j];
        System.out.print(c[i][j]+" ");
    }
    System.out.println();
}`
                ]
              },

              {
                content: `
<h4>Matrix Multiplication</h4>
`,
                codeExamples: [
                  `int a[][] = {{1,1,1},{2,2,2},{3,3,3}};
int b[][] = {{1,1,1},{2,2,2},{3,3,3}};
int c[][] = new int[3][3];

for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        c[i][j]=0;
        for(int k=0;k<3;k++){
            c[i][j]+=a[i][k]*b[k][j];
        }
        System.out.print(c[i][j]+" ");
    }
    System.out.println();
}`
                ]
              },

              {
                content: `
<h4>Find 3rd Largest Element</h4>
`,
                codeExamples: [
                  `Arrays.sort(a);
System.out.println(a[a.length-3]);`
                ]
              },

              {
                content: `
<div class="bg-secondary p-2 rounded-md">
<h4>Important Interview Questions</h4>
1. What is array?<br>
2. Why array size is fixed?<br>
3. Difference between array & collection<br>
4. What is jagged array?<br>
5. Array vs ArrayList<br>
</div>
`
              }

            ]
          },

          {
            id: `String in java`,
            name: `String in Java`,

            intermediate: [

              {
                content: `
      String: 
      It is the class that represents sequence of character.<br>
Package: Java.lang.<br>
Strings in Java are a sequence of characters, and they are one of the most commonly used data types
for storing and manipulating text.<br>
<img src="./src/assets/string.png" 
     alt="String in Java" 
     class="d-block mx-auto" />


<b>Q. Why String is Immutable in Java?</b><br>
• String is immutable, once a String object is created it cannot be changed.<br>
• Any modification creates a <b>new String object</b>.<br>
• Improves <b>security, memory efficiency, and thread safety</b>.<br><br>

<b>CharSequence Interface</b><br>
• Represents a sequence of characters.<br>
• Implemented by String, StringBuffer, StringBuilder.<br>
• Allows treating all three uniformly.<br>
<img src="./src/assets/string2.png" 
     alt="String in Java" 
     class="d-block mx-auto" />

`
              },

              {
                content: `
<h4>Creating String Objects</h4>
1. String Literal<br>
2. Using new keyword<br>
3. Using Character Array<br>
4. Using String Methods<br>
`
              },

              {
                content: `
<h4>1. String Literal</h4>
• Created using double quotes.<br>
• Stored in <b>String Constant Pool</b>.<br>
• JVM reuses existing objects for memory efficiency.<br>
`,
                codeExamples: [
                  `String s1 = "pankaj";
String s2 = "pankaj";
System.out.println(s1 == s2); // true`
                ]
              },

              {
                content: `
<h4>2. Using new Keyword</h4>
• Always creates a new object in heap memory.<br>
• Even if value exists in String Pool.<br>
`,
                codeExamples: [
                  `String s1 = "pankaj";
String s2 = new String("pankaj");

System.out.println(s1 == s2);      // false
System.out.println(s1.equals(s2)); // true`
                ]
              },

              {
                content: `
<h4>String Immutability Example</h4>
• concat() does not modify original String.<br>
• New object is created.<br>
`,
                codeExamples: [
                  `String s = "pankaj";
s = s.concat("bhande");
System.out.println(s); // pankajbhande`
                ]
              },

              {
                content: `
<h4>String Manipulation Methods</h4>
• length()<br>
• concat()<br>
• charAt()<br>
• substring()<br>
• toUpperCase()<br>
• trim()<br>
• replace()<br>
`,
                codeExamples: [
                  `String original = "Code With Pankaj";

System.out.println("Length: " + original.length());
System.out.println("Concatenated: " + original.concat(" is fun!"));
System.out.println("First Char: " + original.charAt(0));
System.out.println("Substring: " + original.substring(5, 16));
System.out.println("Uppercase: " + original.toUpperCase());
System.out.println("Trimmed: " + " Java ".trim());
System.out.println("Replaced: " + original.replace('a', '@'));`
                ]
              },

              {
                content: `
<h4>String Comparison</h4>
<b>3 Ways:</b><br>
1. equals() → Content comparison<br>
2. == → Reference comparison<br>
3. compareTo() → Lexicographical comparison<br>
<img src="./src/assets/string6.png" 
     alt="String in Java" 
     class="d-block mx-auto" />

`,
                codeExamples: [
                  `String s1 = "Pankaj";
String s2 = "Pankaj";
String s3 = new String("Pankaj");

System.out.println(s1.equals(s2)); // true
System.out.println(s1 == s3);      // false`
                ]
              },

              {
                content: `
<h4>compareTo() Example</h4>
`,
                codeExamples: [
                  `String s1 = "Pankaj";
String s2 = "Pankaj";
String s3 = "Dheeraj";

System.out.println(s1.compareTo(s2)); // 0
System.out.println(s1.compareTo(s3)); // positive
System.out.println(s3.compareTo(s1)); // negative`
                ]
              },

              {
                content: `
<h4>String Concatenation Techniques</h4>
1. + operator<br>
2. concat() method<br>
3. StringBuilder<br>
4. String.format()<br>
5. String.join()<br>
`,
                codeExamples: [
                  `String s = "Pankaj" + " Bhande";
System.out.println(s);`,

                  `StringBuilder sb = new StringBuilder("Hello");
sb.append(" Pankaj");
System.out.println(sb.toString());`
                ]
              },

              {
                content: `
<h4>Concatenation Using format()</h4>
`,
                codeExamples: [
                  `String s1 = "Hello";
String s2 = " Pankaj";
String s = String.format("%s%s", s1, s2);
System.out.println(s);`
                ]
              },

              {
                content: `
<h4>Concatenation Using String.join()</h4>
`,
                codeExamples: [
                  `String s = String.join("", "Hello", " Pankaj");
System.out.println(s);`
                ]
              },

              {
                content: `
<h4>Concatenation Using StringJoiner</h4>
`,
                codeExamples: [
                  `StringJoiner sj = new StringJoiner(", ");
sj.add("Hello");
sj.add("Pankaj");
System.out.println(sj.toString());`
                ]
              },

              {
                content: `
<h4>Character Array to String</h4>
• String can be created from char array.<br>
• Char array is mutable, String is immutable.<br>
`,
                codeExamples: [
                  `char[] arr = {'H','e','l','l','o'};
String str = new String(arr);
System.out.println(str);`
                ]
              },

              {
                content: `
<h4>Counting Spaces in String</h4>
`,
                codeExamples: [
                  `String str = "Code With Pankaj";
int count = 0;

for(int i=0;i<str.length();i++){
    if(str.charAt(i)==' '){
        count++;
    }
}
System.out.println("Total spaces: " + count);`
                ]
              },

              {
                content: `
<h4>Why String is Immutable? (Interview)</h4>
1. ClassLoader safety<br>
2. Thread safety<br>
3. Security (passwords, DB URLs)<br>
4. Heap memory optimization<br>
`
              },

              {
                content: `
<h4>Difference Between String, StringBuffer, StringBuilder</h4>
• String → Immutable, Thread-safe<br>
• StringBuffer → Mutable, Thread-safe<br>
• StringBuilder → Mutable, Fastest, Not Thread-safe<br>
`
              },

              {
                content: `
<div class="bg-secondary p-2 rounded-md">
<h4>Important Interview Questions</h4>
1. Why String is immutable?<br>
2. What is String Constant Pool?<br>
3. == vs equals()<br>
4. StringBuffer vs StringBuilder<br>
5. How JVM handles + operator?<br>
</div>
`
              }
            ]
          },

          {
            id: 'static-keyword',
            name: 'Static Keyword',

            beginner: [
              {
                content: `
<h4>What is Static Keyword?</h4>
• The <b>static</b> keyword is used to create class-level members.<br>
• Static members belong to the class, not to objects.<br>
• Only one copy of static members is created in memory.<br><br>

<b>Why use static?</b><br>
• Saves memory<br>
• Shares common data among objects<br><br>

<b>Basic Rules</b><br>
• Static variables are shared among all objects<br>
• Static methods can be called without object creation<br>
• The main() method is static
      `,
                codeExamples: [
                  `class HelloStatic {
    static int number = 100;

    public static void main(String[] args) {
        System.out.println(number);
    }
}`
                ]
              }
            ],

            intermediate: [

              {
                content: `
<h4>Static Keyword – Detailed Rules</h4>
• Used for memory management<br>
• Can be applied to variable, method, static block and inner class<br>
• Represents single-copy storage<br>
• Local variables cannot be static<br>
• Constructors cannot be static<br>
• Outer class cannot be static, but inner class can be static<br>
• main() method is static<br>
• this and super are not allowed in static context
      `
              },

              {
                content: `
<h4>Static Variable / Class Variable</h4>
A variable declared using the <b>static</b> keyword is called a static variable.<br>
• Also known as class variable<br>
• Stored in <b>Metaspace</b> (since JDK 1.8)<br>
• Represents common properties shared by all objects<br>
• Loaded into memory at class loading time<br><br>

<b>Examples:</b><br>
• College name<br>
• Company name
      `,
                codeExamples: [
                  `static int a;     // Declaration
static int b = 10; // Initialization`
                ]
              },

              {
                content: `
<h4>Accessing Static Variable (Same Class)</h4>
Three ways:<br>
1. Using class name<br>
2. Using object name<br>
3. Directly (same class only)
      `,
                codeExamples: [
                  `public class StaticDemo {
    int z = 30;
    static int a = 10;

    public static void main(String[] args) {
        System.out.println("Using class name >> " + StaticDemo.a);

        StaticDemo obj = new StaticDemo();
        System.out.println("Using object name >> " + obj.a);

        System.out.println("Direct way >> " + a);
    }
}`
                ]
              },

              {
                content: `
<h4>Static Variable – Different Class</h4>
      `,
                codeExamples: [
                  `class StaticDemo {
    static int a = 10;
}

class Demo {
    public static void main(String[] args) {
        System.out.println(StaticDemo.a);

        StaticDemo obj = new StaticDemo();
        System.out.println(obj.a);
    }
}`
                ]
              },

              {
                content: `
<h4>Difference Between Static and Non-Static</h4>
Non-static variables have separate memory for each object, static variables share memory.
      `,
                codeExamples: [
                  `class Test {
    int x = 5;
    static int y = 5;

    public static void main(String[] args) {
        Test a = new Test();
        Test b = new Test();

        a.x++;
        y++;

        System.out.println(a.x); // 6
        System.out.println(b.x); // 5
        System.out.println(y);   // 6
    }
}`
                ]
              },

              {
                content: `
<h4>Static Method / Class Method</h4>
•If you define any method with static keyword then it is called as static method.<br>
•Static Method is known as class method.<br>
•Static Method belongs to class rather than object of class.<br>
•Static Method loads into memory before object creation.<br>
•Static Method can access only static data member only & it can change the value of it.<br>
      `,
                codeExamples: [
                  `class StaticMethodDemo {

    static void show() {
        System.out.println("This is static method");
    }

    public static void main(String[] args) {
        show();
        StaticMethodDemo.show();

        StaticMethodDemo obj = new StaticMethodDemo();
        obj.show();
    }
}`
                ]
              },

              {
                content: `
<h4>Calling Static Members from Non-Static Method</h4>
      `,
                codeExamples: [
                  `class StaticDemo {

    static void x1() {
        System.out.println("This is static method");
    }

    void x2() {
        System.out.println("This is non-static method");
        x1();
    }

    public static void main(String[] args) {
        StaticDemo obj = new StaticDemo();
        obj.x2();
    }
}`
                ]
              },

              {
                content: `
<h4>Static Block</h4>
1. It is group of statements that are executed when class is loading into memory by
Classloader.<br>
2. Static Block widely used to create the static resource.<br>
3. We cannot access non-static variable into static block.<br>
4. Static Block always executed first.<br>
5. Static Block used to initialize the static data member.<br>
6. Static Block executed before the main method at the time of classloading.<br>
      `,
                codeExamples: [
                  `class StaticBlockExample {
    static {
        System.out.println("This is static block");
    }

    public static void main(String[] args) {
        System.out.println("This is main method");
    }
}`
                ]
              },

              {
                content: `
<h4>Multiple Static Blocks</h4>
      `,
                codeExamples: [
                  `class StaticExample {

    static {
        System.out.println("Static block 1");
    }

    static {
        System.out.println("Static block 2");
    }

    public static void main(String[] args) {
        System.out.println("Main method");
    }
}`
                ]
              },

              {
                content: `
<h4>Interview Questions</h4>

<b>1.What is the purpose of the static keyword in Java?</b><br>
o The static keyword is used to indicate that a member (variable, method, or nested class) belongs
to the class itself rather than to instances of the class. This means that static members are shared
among all instances of the class.<br>
<b>2. What is a static variable?</b><br>
o A static variable is a class-level variable that is shared among all instances of the class. It is
initialized only once, at the start of the program, and retains its value between different instances
of the class.<br>
<b>3. What is a static method?</b><br>
o A static method belongs to the class rather than any specific instance. It can be called without
creating an instance of the class. Static methods can only access other static members (variables
and methods) directly.<br>
<b>4. What is a static block?</b><br>
o A static block, also known as a static initializer, is used to initialize static variables. It is executed
when the class is loaded into memory, before any objects are created or any static methods are
called.<br>
<b>5. Can you differentiate between a static block and a constructor in Java?</b><br>
o A static block is used to initialize static variables and is executed once when the class is loaded. A
constructor is used to initialize instance variables and is executed each time an instance of the
class is created.<br>
<b>6. Can you create a static inner class in Java?</b><br>
o Yes, a static inner class (also known as a static nested class) is a nested class that does not have
access to the instance variables and methods of the outer class. It can be instantiated without an
instance of the outer class.<br>
<b>7. Why do we use static keywords in Java?</b><br>
o The static keyword is used for memory management and to create utility or helper methods that
do not require an instance of the class. It is also used to define constants and to implement the
Singleton design pattern.<br>
<b>8. Can we override static methods in Java?</b><br>
o No, static methods cannot be overridden because they belong to the class, not to instances of the
class. However, they can be hidden by defining a static method with the same signature in a
subclass.<br>
<b>9. What is the difference between a static method and an instance method?</b><br>
o A static method belongs to the class and can be called without creating an instance, while an
instance method belongs to an object and requires an instance to be called. Static methods can
only access static members, whereas instance methods can access both static and instance
members.<br>
<b>10. Can a static method access instance variables or methods?</b><br>
o No, a static method cannot directly access instance variables or methods because it does not have
a reference to any instance of the class. It can only access static variables and methods.<br>      `
              }
            ]
          },

          {
            id: `Input and Output Stream in Java`,
            name: `Input and Output Stream in Java`,

            intermediate: [

              {
                content: `
<b>Input and Output Stream in Java</b><br>
• Java I/O (Input and Output) is used to process the input and produce the output.<br>
• Java uses the concept of a <b>stream</b> to make I/O operation fast.<br>
• The <b>java.io</b> package contains all the classes required for input and output operations.<br>
• We can perform file handling in Java by using Java I/O API.<br>
`
              },

              {
                content: `
<h4>Stream</h4>
• A stream is a sequence of data.<br>
• In Java, a stream is composed of bytes.<br>
`
              },

              {
                content: `
<h4>Automatically Created Streams</h4>
In Java, three streams are created automatically and attached to the console.<br><br>

1) <b>System.out</b> – Standard Output Stream<br>
2) <b>System.in</b> – Standard Input Stream<br>
3) <b>System.err</b> – Standard Error Stream<br>
`
              },

              {
                content: `
<h4>Printing Output and Error Message</h4>
`
                ,
                codeExamples: [
                  `System.out.println("simple message");
System.err.println("error message");`
                ]
              },

              {
                content: `
<h4>OutputStream</h4>
• OutputStream is used to write data to a destination.<br>
• Destination may be a file, array, peripheral device, or socket.<br>
`
              },

              {
                content: `
<h4>InputStream</h4>
• InputStream is used to read data from a source.<br>
• Source may be a file, array, peripheral device, or socket.<br>
<img src="./src/assets/IO1.png" 
     alt="String in Java" 
     class="d-block mx-auto" />
     <br>
     <img src="./src/assets/IO2.png" 
     alt="String in Java" 
     class="d-block mx-auto" />
     <br>
     <img src="./src/assets/IO3.png" 
     alt="String in Java" 
     class="d-block mx-auto" />
`
              },

              {
                content: `
<h4>Read a File Line by Line using Scanner</h4>
`
                ,
                codeExamples: [
                  `import java.io.*;
import java.util.Scanner;

public class ReadLineByLineExample2 {

    public static void main(String args[]) {

        try {
            FileInputStream fis = new FileInputStream("Demo.txt");
            Scanner sc = new Scanner(fis);

            while (sc.hasNextLine()) {
                System.out.println(sc.nextLine());
            }

            sc.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
                ]
              },

              {
                content: `
<h4>Write Data into File using FileWriter</h4>
In this example, data is written into a file using the FileWriter class.<br>
`
                ,
                codeExamples: [
                  `package com.test;

import java.io.FileWriter;

public class FileWriterExample {

    public static void main(String args[]) {

        try {
            FileWriter fw = new FileWriter("D:\\\\testout.txt");
            fw.write("Pankaj Dnyanoba Bhande.");
            fw.close();
        } catch (Exception e) {
            System.out.println(e);
        }

        System.out.println("Success...");
    }
}`
                ]
              },

              {
                content: `
<div class="bg-secondary p-2 rounded-md">
<h4>Important Interview Questions</h4>
1. What is Java I/O?<br>
2. What is a stream in Java?<br>
3. Difference between InputStream and OutputStream<br>
4. What are System.in, System.out, and System.err?<br>
5. Difference between FileInputStream and FileReader<br>
</div>
`
              }

            ]
          },

          {
            id: `Serialization in Java`,
            name: `Serialization in Java`,

            intermediate: [

              {
                content: `
<b>Serialization</b><br>
• Serialization is the process of storing the state of an object into a file.<br>
• Deserialization is the process of reading the state of an object from a file.<br>
• Serialization in Java is implemented using input and output streams.<br>
`
              },

              {
                content: `
<h4>How to Implement Serialization in Java</h4>
• A class must implement the <b>Serializable</b> interface.<br>
• ObjectOutputStream is used for serialization.<br>
• ObjectInputStream is used for deserialization.<br>
`
              },

              {
                content: `
<h4>Example 01: Student Class</h4>
`
                ,
                codeExamples: [
                  `package com.test;

import java.io.Serializable;

public class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    String firstname;
    String lastname;
    String city;

    // Getter & Setter
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}`
                ]
              },

              {
                content: `
<h4>Serialization Code</h4>
`
                ,
                codeExamples: [
                  `package com.test;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class SerializeStudent {

    public static void main(String[] args) {

        Student s = new Student();
        s.setFirstname("pankaj");
        s.setLastname("bhande");
        s.setCity("pune");

        try {
            FileOutputStream fos =
                new FileOutputStream("C:\\\\Users\\\\ThisPC\\\\Desktop\\\\demo.txt");

            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(s);

            fos.close();
            oos.close();

            System.out.println("Serialization is done...");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
                ]
              },

              {
                content: `
<h4>Deserialization Code</h4>
`
                ,
                codeExamples: [
                  `package com.test;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class DeserializeStudent {

    public static void main(String[] args) {

        try {
            FileInputStream fis =
                new FileInputStream("C:\\\\Users\\\\ThisPC\\\\Desktop\\\\demo.txt");

            ObjectInputStream ois = new ObjectInputStream(fis);
            Object o = ois.readObject();

            Student s = (Student) o;

            System.out.println(s.getFirstname());
            System.out.println(s.getLastname());
            System.out.println(s.getCity());

            fis.close();
            ois.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
                ]
              },

              {
                content: `
<h4>Output</h4>
pankaj<br>
bhande<br>
pune<br>
`
              },

              {
                content: `
<h4>Important Points of Serialization</h4>
• ObjectOutputStream and ObjectInputStream are used for serialization and deserialization.<br>
• Static variables are not serialized because they belong to the class.<br>
• If superclass implements Serializable, all subclasses are serializable by default.<br>
• Every Serializable class has a unique version number called <b>serialVersionUID</b>.<br>
• serialVersionUID is used to verify compatibility during deserialization.<br>
`
              },

              {
                content: `
<h4>Transient Keyword</h4>
• If a variable is declared as <b>transient</b>, it will not be serialized.<br>
• After deserialization, transient variables get default values.<br>
`
              },

              {
                content: `
<h4>Example 02: Transient Variable</h4>
`
                ,
                codeExamples: [
                  `package com.test;

import java.io.Serializable;

public class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    String firstname;
    String lastname;
    transient int salary;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}`
                ]
              },

              {
                content: `
<h4>Serialization with Transient Field</h4>
`
                ,
                codeExamples: [
                  `package com.test;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class SerializeStudent {

    public static void main(String[] args) {

        Student s = new Student();
        s.setFirstname("pankaj");
        s.setLastname("bhande");
        s.setSalary(5000); // won't be serialized

        try {
            FileOutputStream fos =
                new FileOutputStream("C:\\\\Users\\\\ThisPC\\\\Desktop\\\\demo.txt");

            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(s);

            fos.close();
            oos.close();

            System.out.println("Serialization is done...");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
                ]
              },

              {
                content: `
<h4>Deserialization with Transient Field</h4>
`
                ,
                codeExamples: [
                  `package com.test;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class DeserializeStudent {

    public static void main(String[] args) {

        try {
            FileInputStream fis =
                new FileInputStream("C:\\\\Users\\\\ThisPC\\\\Desktop\\\\demo.txt");

            ObjectInputStream ois = new ObjectInputStream(fis);
            Object o = ois.readObject();

            Student s = (Student) o;

            System.out.println(s.getFirstname());
            System.out.println(s.getLastname());
            System.out.println(s.getSalary()); // default value 0

            fis.close();
            ois.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
                ]
              },

              {
                content: `
<div class="bg-secondary p-2 rounded-md">
<h4>Important Interview Questions</h4>
1. What is serialization and deserialization?<br>
2. Why Serializable interface is marker interface?<br>
3. What is transient keyword?<br>
4. Why static variables are not serialized?<br>
5. What is serialVersionUID?<br>
</div>
`
              }

            ]
          },

          {
            id: "final-keyword",
            name: "Final Keyword",

            beginner: [
              {
                content:
                  "• <b>Final</b> is a keyword in Java which is applied to <b>variables, methods, and classes</b>.<br>" +
                  "• The final keyword is used to <b>restrict modification</b>.<br><br>" +

                  "<h4>Final Variable</h4>" +
                  "• A variable declared with the <b>final</b> keyword is called a final variable.<br>" +
                  "• Once a value is assigned, it <b>cannot be changed</b>.<br>" +
                  "• Final variables work like <b>constants</b> in Java.<br><br>" +

                  "<h4>Declaration</h4>" +
                  "final int a = 5;",
                codeExamples: [
                  "package com.test;\n\n" +
                  "public class Code_With_Pankaj {\n" +
                  "    public static void main(String[] args) {\n" +
                  "        final int a = 5;\n" +
                  "        System.out.println(a);\n" +
                  "    }\n" +
                  "}\n" +
                  "// Output: 5"
                ]
              },
              {
                content:
                  "<h4>Final Variable – Compile Time Error Example</h4>" +
                  "• Final variable values cannot be modified.<br>" +
                  "• Any attempt to change the value will cause a <b>compile-time error</b>.",
                codeExamples: [
                  "package com.test;\n\n" +
                  "public class Code_With_Pankaj {\n" +
                  "    public static void main(String[] args) {\n" +
                  "        final int a = 5;\n" +
                  "        // a++;   Compile-time error\n" +
                  "    }\n" +
                  "}"
                ]
              }
            ],

            intermediate: [
              {
                content:
                  "• <b>Final</b> is a keyword in Java which is applied to <b>variables, methods, and classes</b>.<br>" +
                  "• The final keyword is used to <b>restrict modification</b>.<br><br>" +

                  "<h4>Final Variable</h4>" +
                  "• A variable declared with the <b>final</b> keyword is called a final variable.<br>" +
                  "• Once a value is assigned, it <b>cannot be changed</b>.",
                codeExamples: [
                  "final int a = 5;\n" +
                  "// a++; Compile Time Error"
                ]
              },
              {
                content:
                  "<h4>Final Method</h4>" +
                  "• A method declared with the <b>final</b> keyword is called a final method.<br>" +
                  "• Final methods <b>cannot be overridden</b>.",
                codeExamples: [
                  "class X {\n" +
                  "    public final void x1() {\n" +
                  "        System.out.println(\"Class X method\");\n" +
                  "    }\n" +
                  "}\n\n" +
                  "class Y extends X {\n" +
                  "    // Cannot override final method\n" +
                  "}"
                ]
              },
              {
                content:
                  "<h4>Final Class</h4>" +
                  "• A class declared with the <b>final</b> keyword cannot be inherited.",
                codeExamples: [
                  "final class Demo {\n" +
                  "}\n\n" +
                  "// Cannot inherit from final class"
                ]
              }
            ]
          },

          {
            id: 'wrapper-class',
            name: 'Wrapper Class',

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
          },

          {
            id: 'return-object',
            name: 'Return Object from Method',

            beginner: [
              {
                content: `
• In industry, methods usually return <b>objects</b> instead of primitive data types.<br>
• Returning objects makes code more <b>scalable, reusable, and maintainable</b>.<br><br>

<h4>Basic Object Return</h4>
A method can return an object of its class type.
          `,
                codeExamples: [
                  `package com.test;

public class Employee {

    public Employee addEmployee() {
        Employee employee = new Employee();
        return employee;   // returning object
    }
}`
                ]
              },
              {
                content: `
<h4>Printing Returned Object (Without toString)</h4>
If toString() is not overridden, object reference is printed.
          `,
                codeExamples: [
                  `package com.test;

public class Employee {

    int id = 101;
    String name = "Pankaj";
    String city = "Pune";

    public Employee addEmployee() {
        Employee emp = new Employee();
        System.out.println(emp);
        return emp;
    }

    public static void main(String[] args) {
        Employee e = new Employee();
        e.addEmployee();
    }
}

// Output:
// com.test.Employee@7852e922`
                ]
              }
            ],

            intermediate: [
              {
                content: `
<h4>Returning Object with toString()</h4>
Override toString() to return meaningful data.
          `,
                codeExamples: [
                  `package com.test;

public class Employee {

    int id = 101;
    String name = "Pankaj";
    String city = "Pune";

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", city=" + city + "]";
    }

    public Employee addEmployee() {
        Employee emp = new Employee();
        System.out.println(emp);
        return emp;
    }

    public static void main(String[] args) {
        Employee e = new Employee();
        e.addEmployee();
    }
}

// Output:
// Employee [id=101, name=Pankaj, city=Pune]`
                ]
              },
              {
                content: `
<h4>Returning Object with Single Value (empId)</h4>
Instead of returning int, return object containing id.
          `,
                codeExamples: [
                  `package com.test;

public class Test {

    public static Employee getEmployeeById() {
        int id = 10;
        return new Employee(id);
    }

    public static void main(String[] args) {
        Employee e = getEmployeeById();
        System.out.println(e.id);
    }
}

package com.test;

public class Employee {
    int id;

    public Employee(int id) {
        this.id = id;
    }
}

// Output:
// 10`
                ]
              },
              {
                content: `
<h4>Returning Multiple Values Using Object</h4>
Industry-standard way to return multiple values.
          `,
                codeExamples: [
                  `package com.test;

public class Test {

    public static Employee getEmployeeDetails() {

        int id = 10;
        String name = "Pankaj";
        String city = "Pune";

        return new Employee(id, name, city);
    }

    public static void main(String[] args) {

        Employee e = getEmployeeDetails();

        System.out.println("id=" + e.id);
        System.out.println("name=" + e.name);
        System.out.println("city=" + e.city);
    }
}

package com.test;

public class Employee {

    int id;
    String name;
    String city;

    public Employee(int id, String name, String city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}

`
                ]
              }
            ]
          },

          {
            id: 'Different way to return to the method in java.',
            name: 'Different way to return to the method in java.',
            intermediate: [{
              content: `• In industry, No one use float and integer return type as method even void and string are also very rarely used in 
now a days. <br>
• The most preferable way is return object to method or value from object in java. <br>
In industry, how the method looks like as below<br>

<div class='border border-primary p-2'>
package com.test; <br>
public class Employee { <br>
public Employee addEmployee() { <br>
 //here you need to return the employee class object <br>
 } <br>
} <br>
</div><br>

<h4> Note  </h4> If you have Department class as return type for method then it must return the department class object 
not employee class objects.<br>

How to return the object to method? <br>

<div class='border border-primary p-2'>
package com.test; <br>
public class Employee { <br>
public Employee addEmployee() { <br>
 Employee employee = new Employee(); <br>
 return employee; <br>
 } <br>
}<br>
</div><br>
In this example, we are returning the object as emp to method.<br>`,
              codeExamples: [`package com.test; 
public class Employee { // Main Class: Employee 
int id = 101; 
 String name = "Pankaj"; 
 String city = "Pune"; 
public Employee addEmployee() { 
 Employee emp = new Employee(); 
 System.out.println(emp); 
 return emp; // return object as emp to Employee type method
 } 
public static void main(String[] args) { // Main Method 
 Employee e = new Employee(); 
 e.addEmployee(); 
 } 
} `, `package com.test; 
public class Employee { 
int id = 101; 
 String name = "Pankaj"; 
 String city = "Pune"; 
@Override
public String toString() { 
 return "Employee [id=" + id + ", name=" + name + ", city=" + city + "]"; 
 } 
public Employee addEmployee() { 
 Employee emp = new Employee(); 
 System.out.println(emp); 
 return emp; // return object as emp to Employee type method
 } 
public static void main(String[] args) { 
 Employee e = new Employee(); 
 e.addEmployee(); 
 } 
} 
`]
            },
            {
              content: `How to return the empId only`,
              codeExamples: [`package com.test; 
public class Test { 
public static Employee getEmployeeById() { 
 int id = 10; 
 return new Employee(id); // return empid here
 } 
public static void main(String[] args) { 
 Employee e = getEmployeeById(); 
 System.out.println(e.id); 
 } 
}`]
            }, {
              content: `
              <div class='border border-primary p-2'>
              package com.test; <br>
public class Employee { <br>
int id; <br>
public Employee(int id) {<br> 
 this.id = id;<br> 
 } <br>
} <br>
              </div><br>

              How to return the multiple values from object to method? <br>
              
              `, codeExamples: [`package com.test; 
public class Test { 
public static Employee getEmployeeDetails() { 
 int id = 10; 
 String name = "Pankaj"; 
 String city = "Pune"; 
 return new Employee(id, name, city); // return multiple values from object here
 } 
public static void main(String[] args) { 
 Employee e = getEmployeeDetails(); 
 System.out.println("id=" + e.id); 
 System.out.println("name=" + e.name); 
 System.out.println("city=" + e.city); 
 } 
}`]
            }, {
              content: `<div class='border border-primary p-2'>
              package com.test; <br>
public class Employee { <br>
int id; <br>
 String name; <br>
 String city; <br>
public Employee(int id, String name, String city) { <br>
 this.id = id; <br>
 this.name = name; <br>
 this.city = city; <br>
 } <br>
}<br>
              </div>`
            }

            ]
          },

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
        name: 'OOPS Concept',
        topics: [
          {
            id: 'classes-objects',
            name: 'Classes and Objects',
            beginner: [
              {
                content: `A class is a blueprint for creating objects. An object is an instance of a class<br>

<h4> Key Concepts:</h4>

• Class: Template that defines properties and behaviors<br>
• Object: Instance of a class<br>
• Fields: Variables that hold the state<br>
• Methods: Functions that define behavior<br>
• Constructor: Special method to initialize objects<br>`,
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
                content: `It is the parent class of all the classes in java. 
It is called as topmost class of java which is present in java.lang package. <br>
Every class in Java is directly or indirectly derived from the object class. If a Class does not extend any 
other class then it is direct child class of object. <br><br>

<h4> There are different methods of object class are as follows. </h4>
1. public final Class getClass() <br>
2. public int hashCode() <br>
3. public boolean equals(Object obj) <br>
4. protected Object clone() throws CloneNotSupportedException <br>
5. public String toString() <br>
6. public final void notify() <br>
7. public final void notifyAll() <br>
8. public final void wait() <br>
9. public final void wait(long timeout) <br>
10. public final void wait(long timeout, int nanos) <br>
11. protected void finalize()throws Throwable <br><br>


<h3>1. Public final Class getClass() </h3>
This class is used to get the metadata of class. <br>
`,
                codeExamples: [
                  `package com.test; 
public class Test { 
public static void main(String[] args) { 
 Test test = new Test(); 
 System.out.println(test.getClass().getName()); 
 System.out.println(test.getClass().getSimpleName()); 
 } 
} `
                ]
              },
              {
                content: `<h3>2. public int hashCode()</h3>
                
For every object unique number is generated by JVM called as hashcode. <br>
It does not represent object of address then what is the use of hashcode. it will store into bucket based on hashcode.  <br>
Note- The most of java native method are written in c or c++ that why not able show the body. <br>
                `,
                codeExamples: [
                  `package com.test;. 
public class Test1 { 
public static void main(String[] args) { 
 Test1 test2 = new Test1(); 
 Test1 test3 = new Test1(); 
 System.out.println(test2.hashCode()); 
 System.out.println(test3.hashCode()); 
 } 
} 
`
                ]
              },
              {
                content: `<h3>3. public boolean equals (Object obj) </h3>
               It compares the given object to this object. There are two equals method, this equals method is used to check 
the address of string not contents. `,
                codeExamples: [`package com.test; 
public class Test3 { // Main Class: Test3 
int empId; 
 String empName; 
public static void main(String[] args) { // Main Method 
 Test3 test3 = new Test3(); 
 test3.empId = 1; 
 test3.empName = "ashok"; 
 Test3 test4 = new Test3(); 
 test4.empId = 2; 
 test4.empName = "ram"; 
 System.out.println(test3.equals(test4)); 
 } 
} 
`, `package com.test; 
public class Test3 { // Main Class: Test3 
int empId; 
 String empName; 
public static void main(String[] args) { // Main Method 
 Test3 test3 = new Test3(); 
 test3.empId = 1; 
 test3.empName = "ashok"; 
 Test3 test4 = new Test3(); 
 test4.empId = 2; 
 test4.empName = "ram"; 
 test3 = test4; 
 System.out.println(test3.equals(test4)); 
 } 
} 
`
                ]
              },
              {
                content: `<h3>4. protected Object clone() throws CloneNotSupportedException</h3>
                It creates and returns the exact copy (clone) of this object. 
                `,
                codeExamples: [
                  `package com.test; 
//clone method- create copy of objects 
public class Test4 implements Cloneable { 
int x; 
public static void main(String[] args) throws CloneNotSupportedException { 
 Test4 test4 = new Test4(); 
 test4.x = 50; 
 System.out.println("first object is>>" + test4.x); 
 Object test5 = test4.clone(); 
 System.out.println("second object is>>" + test5.toString()); 
 } 
} 
`
                ]
              }, {
                content: `Here, second output line, we will get address instead of value. To solve this issue, we should override toString 
method.`,
                codeExamples: [`package com.test; 
//clone method- create copy of objects 
public class Test4 implements Cloneable { 
int x; 
public static void main(String[] args) throws CloneNotSupportedException { 
 Test4 test4 = new Test4(); 
 test4.x = 50; 
 System.out.println("first object is>>" + test4.x); 
 Object test5 = test4.clone(); 
 System.out.println("second object is>>" + test5.toString()); 
 } 
@Override
public String toString() { 
 return "Test4 [x=" + x + "]"; 
 } 
} 
`]
              },
              {
                content: `<h3>5. public String toString() </h3>
                It returns the string representation of this object. 
`,
                codeExamples: [`package com.test; 
public class Employee { // Main Class: Employee 
int id; // Declaration 
 String employeeName; // Declaration 
 String employeeCity; // Declaration 
@Override
public String toString() { 
return "Employee [id=" + id + ", employeeName=" + employeeName + ", employeeCity=" + 
employeeCity + "]"; 
 } 
public static void main(String[] args) { // Main Method 
 Employee employee = new Employee(); 
 employee.id = 10; 
 employee.employeeName = "ajay"; 
 employee.employeeCity = "pune"; 
 System.out.println(employee); 
 } 
} `]
              },
              {
                content: `
                <div class='bg-secondary border border-primary p-2'>
                <h4>public final void notify()</h4>
                It wakes up single thread, waiting on this object's monitor.
                </div><br>

                <div class='bg-secondary border border-primary p-2'>
                <h4>public final void notifyAll() </h4>
                It wakes up all the threads, waiting on this object's monitor.
                </div><br>

                <div class='bg-secondary border border-primary p-2'>
                <h4>public final void wait(long timeout)throws InterruptedException() </h4>
                It causes the current thread to wait for the specified milliseconds, until another thread notifies (invokes 
                notify() or notifyAll() method). 
                </div><br>

                <div class='bg-secondary border border-primary p-2'>
                <h4>public final void wait(long timeout,int nanos)throws InterruptedException </h4>
                It causes the current thread to wait for the specified milliseconds and nanoseconds, until another thread 
                notifies (invokes notify() or notifyAll() method). 
                </div><br>

                <div class='bg-secondary border border-primary p-2'>
                <h4>public final void wait()throws InterruptedException </h4>
                It causes the current thread to wait, until another thread notifies (invokes notify() or notifyAll() method).
                </div><br>

                <div class='bg-secondary border border-primary p-2'>
                <h4>protected void finalize()throws Throwable </h4>
                 It is invoked by the garbage collector before object is being garbage collected. 
                </div>
                `
              }
            ],
            expert: [


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
            beginner: [
              {
                content: `In Java, it is possible to inherit attributes and methods from one class to another. <br>
                We group the "inheritance concept" into two categories:<br>

• subclass (child) - the class that inherits from another class<br>
• superclass (parent) - the class being inherited from<br><br>
To inherit from a class, use the extends keyword.<br><br>

In the example below, the Car class (subclass) inherits the attributes and methods from the Vehicle class (superclass):`,
                codeExamples: [
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
            expert: [
              {
                content: `
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
                  <img src="/src/assets/singleinheritance.png" alt="Online Image"class="d-block mx-auto" style="height:300px"/>
                 
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
 <img src="/src/assets/multilevelinheritance.png" alt="Online Image"class="d-block mx-auto" style="height:300px"/>
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
                 <img src="/src/assets/hireachicalinheritance.png" alt="Online Image"class="d-block mx-auto" style="height:300px"/>

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
                 <img src="/src/assets/multipleinheritance.png" alt="Online Image"class="d-block mx-auto"style="height:300px"/><br>
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
<img src="/src/assets/hybridinheritance.png" alt="Online Image"class="d-block mx-auto" style="height:350px"/><br>

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
• For Code Reusability.<br>
Simple Example of Aggregation<br>
<img src="/src/assets/1.png" alt="Online Image"class="d-block mx-auto" style="height:200px"/><br>

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
• Code reuse is also best achieved by aggregation when there is no is-a relationship.<br>
• Inheritance should be used only if the relationship is-a is maintained throughout the lifetime of
the objects involved; otherwise, aggregation is the best choice.<br><br>

Understanding meaningful example of Aggregation:<br>
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
            beginner: [
              {
                content: `Data abstraction is the process of hiding certain details and showing only essential information to the user.<br>
Abstraction can be achieved with either abstract classes or interfaces (which you will learn more about in the next chapter).<br>
<br>
The abstract keyword is a non-access modifier, used for classes and methods:<br>

• Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).<br>

• Abstract method: can only be used in an abstract class, and it does not have a body. <br>
The body is provided by the subclass (inherited from).<br>`,
                codeExamples: [
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
            id: 'Polymorphism in java',
            name: 'Polymorphism in Java',
            intermediate: [
              {
                content: `
                One entity that behaves differently in different cases called as polymorphism.

Example:

1. Light button, we are using that button to on or off the lights.
2. A person acts as an employee in the office, a customer in the shopping mall, a passenger in bus/train.
a student in school, and a son at home.
3. Smartphone is entity that behaves different such as text message, calling, send mail, video call etc.

How to Achieve Polymorphism in Java?:

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

                codeExamples: [
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
              }, {
                content: `Why?:

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
                codeExamples: [
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
                content: `Why it is Called as Compile Time Polymorphism?

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
                codeExamples: [
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
                content: `Program Explanation:

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
      },

      {
        id: `multithreading and multitasking`,
        name: `Multithreading&Multitasking`,
        topics: [
          {
            id: `Multitasking in Java`,
            name: `Multitasking in Java`,
            beginner: [
              {
                content: `Multitasking in Java refers to the system's ability to run multiple tasks concurrently, primarily achieved through
                Process-based multitasking (running different Java apps or OS apps simultaneously) and Thread-based multitasking (multithreading), 
                where a single Java program performs multiple tasks (threads) concurrently, sharing resources for better efficiency and responsiveness, 
                using java.lang.Thread and Runnable for implementation.<br>

                Multithreading is Java's key to efficient resource use, allowing tasks like UI updates and background processing to run in parallel<br><br>
                <h4> Types of Multitasking in Java</h4>
1. Process-based Multitasking: <br>
• Definition: Running multiple independent programs (processes) at the same time, managed by the Operating System (OS). 
• Example: Using a web browser, media player, and code editor simultaneously. <br>
• Key Feature: Each process has its own memory space, providing isolation. <br><br>
2. Thread-based Multitasking (Multithreading):<br>
• Definition: Executing multiple threads (lightweight sub-processes) within a single Java program concurrently, within the same memory space. <br>
• Example: Formatting text while printing in a word processor, or a server handling multiple client requests. <br>
• Key Feature: Threads share resources, leading to faster execution and better CPU utilization for complex tasks. <br>`

              }
            ],
            intermediate: [
              {
                content: `Process of executing multiple tasks simultaneously. We use multitasking to utilize the CPU.<br>
• Multitasking is when a single CPU performs several tasks (program, process, task, threads) at the
same time. To perform multitasking, the CPU switches among these tasks very frequently so that
user can interact with each program simultaneously.<br>
• In a multitasking operating system, several users can share the system simultaneously. CPU rapidly
switches among the tasks, so a little time is needed to switch from one user to the next user. This
puts an impression on a user that entire computer system is dedicated to him.<br><br>
 <img src="/src/assets/multitasking.jpg" alt="Image"class="d-block mx-auto"/><br>

• When several users are sharing a multitasking operating system, CPU scheduling and
multiprogramming makes it possible for each user to have at least a small portion of Multitasking
OS and let each user have at least one program in the memory for execution.<br>

<h4>Multitasking can be achieved in two ways:</h4>
• Process-based Multitasking (Multiprocessing)<br>
• Thread-based Multitasking (Multithreading)<br>
Example:<br> In online session, what are the different activities done by students as?<br>
• Listen the class<br>
• Taking running notes<br>
• Checking mobile<br>

<h4>1. Process Based / Process Based Multitasking (Multiprocessing):</h4>
• Executing several tasks simultaneously where each task is separate independent process such
as multitasking is called as Process Based.<br>
Example <br> 
1: Typing java program into eclipse, also listening the audio songs, download a file from
internet.<br>
2. In this every activity is independent process here.<br>

Example<br> 
2: Task manager, see the multiple process list. (Control+Shift+Esc key)<br>
• Cost of communication between the process is high.<br>
• Switching from one process to another requires some time for saving and loading registers, memory
maps, updating lists, etc.<br>
• Process is heavy weight components.<br>
• Each process has an own address in memory. In other words, each process allocates a separate
memory area.<br>

<h4>2. Thread Based / Thread Based Multitasking (Multithreading):</h4>

• Executing several tasks simultaneously where each task is separate part of same program called as
thread based.<br>
Example-<br> suppose I have 1000 lines of code into java program and it will takes 4 hours to execute it
where first 500 line is executed after that remaining 500 lines is executed but there is no any
dependency between them so I can run that tasks simultaneously to minimize the execution time.<br>
• Thread shares the same address space.<br>
• Thread is light weight components.<br>
• Cost of communication between the thread is low.<br>


<table border="2" cellpadding="15" cellspacing="0" style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #4CAF50; color: white;">
    <th style="border: 2px solid #333;">Process-Based Multitasking</th>
    <th style="border: 2px solid #333;">Thread-Based Multitasking</th>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 2px solid #333;">This deals with "Big Picture"</td>
    <td style="border: 2px solid #333;">This deals with Details</td>
  </tr>
  <tr>
    <td style="border: 2px solid #333;">These are Heavyweight tasks</td>
    <td style="border: 2px solid #333;">These are Lightweight tasks</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 2px solid #333;">Inter-process communication is expensive and limited </td>
    <td style="border: 2px solid #333;">Inter-thread communication is inexpensive</td>
  </tr>
  <tr>
    <td style="border: 2px solid #333;">Context switching from one process to another is costly in terms of memory</td>
    <td style="border: 2px solid #333;">Context switching is low cost in terms of memory , because they run on the same address space</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 2px solid #333;">This is not under the control of Java </td>
    <td style="border: 2px solid #333;">This is controlled by Java</td>
  </tr>
</table>

`,
              }
            ]
          },
          {
            id: `MultiThreading in Java`,
            name: `Multithreading in Java`,
            beginner: [
              {
                content: `• Multithreading in Java is a programming concept that allows multiple threads (smaller units of a process) to run concurrently within a single Java program. <br>
                • Each thread represents a separate path of execution, enabling tasks to be performed simultaneously, which enhances the efficiency and responsiveness of applications.<br>
                • Java provides built-in support for multithreading through the java.lang.Thread class and the Runnable interface, allowing developers to create and manage threads easily.<br> 
                • Multithreading is particularly useful for tasks that require parallel processing, such as handling user interfaces, performing background operations, or managing multiple client requests in server applications.<br><br>
                `
              }

            ],
            intermediate: [

              {
                content: `<h4>Process of executing multiple threads simultaneously.</h4>
• Multithreading is different from multitasking in a sense that multitasking allows multiple tasks at the
same time, whereas, the Multithreading allows multiple threads of a single task (program, process) to be
processed by CPU at the same time.<br>
• A thread is a basic execution unit which has its own program counter, set of the register and stack. But it
shares the code, data, and file of the process to which it belongs.<br>
• A process can have multiple threads simultaneously, and the CPU switches among these threads so
frequently making an impression on the user that all threads are running simultaneously.<br><br>


<h4>Benefits of Multithreading</h4>
• Multithreading increases the responsiveness of system as, if one thread of the application is not
responding, the other would respond in that sense the user would not have to sit idle.<br>
• Multithreading allows resource sharing as threads belonging to the same process can share code and
data of the process and it allows a process to have multiple threads at the same time active in same
address space.<br>
• Creating a different process is costlier as the system has to allocate different memory and resources
to each process, but creating threads is easy as it does not require allocating separate memory and
resources for threads of the same process.<br><br>

<img src="/src/assets/multi.png" alt="Image"class="d-block mx-auto" style="height:250px"/><br>`,
              },
              {
                content: `<h4>What is Thread?</h4>
• It is the smallest unit of program called as Thread.<br>
• A thread is a lightweight subprocess, the smallest unit of processing. It runs within the context of a larger
process & it is a separate path of execution.<br>
• Threads are independent. If there occurs exception in one thread, it doesn't affect other threads. It
uses a shared memory area.<br>

<img src="/src/assets/multithreading.png" alt="Image"class="d-block mx-auto" style="height:380px" /><br>

As shown in the above figure, a thread is executed inside the process. There is context-switching 
between the threads. There can be multiple processes inside the OS, and one process can have multiple 
threads. <br>
<h4>Note: At a time one thread is executed only</h4>
How to Create the Thread? <br>
There are 2 ways to create the thread as <br>
1. By extending Thread class <br>
2. By implementing Runnable interface.<br> <br>

<h4> 1. By Extending Thread Class </h4>

Thread class provide constructors & methods to create and perform Operations on a thread. <br>
Thread class extends Object class & implements Runnable interface. <br>
Constructors <br>
• Thread() <br>
• Thread(String name) <br>
• Thread(Runnable r) <br>
• Thread(Runnable r,String name)<br> <br>

<h4>Methods with Description: </h4>
1. public void run(): It is used to perform action for a thread. <br>
2. public void start(): starts the execution of the thread. JVM calls the run() method on the thread. <br>
3. public void sleep(long miliseconds): Causes the currently executing thread to sleep (temporarily 
cease execution) for the specified number of milliseconds. <br>
4. public void join(): waits for a thread to die. <br>
5. public void join(long miliseconds): waits for a thread to die for the specified miliseconds. <br>
6. public int getPriority(): returns the priority of the thread. <br>
7. public int setPriority(int priority): changes the priority of the thread.<br> 
8. public String getName(): returns the name of the thread.<br>
9. public void setName(String name): changes the name of the thread. <br>
10. public hread currenthread(): returns the reference of currently executing thread. <br>
11. public int getd(): returns the id of the thread. <br>
12. public hread.tate gettate(): returns the state of the thread. <br>
13. public boolean islive(): tests if the thread is alive.<br> 
14. public void yield(): causes the currently executing thread object to temporarily pause and allow 
other threads to execute. <br>
15. public void suspend(): is used to suspend the thread(depricated).<br> 
16. public void resume(): is used to resume the suspended thread(depricated).<br> 
17. public void stop(): is used to stop the thread(depricated). <br>
18. public boolean isaemon(): tests if the thread is a daemon thread. <br>
19. public void setaemon(boolean b): marks the thread as daemon or user thread. <br>
20. public void interrupt(): interrupts the thread. <br>
21. public boolean isnterrupted(): tests if the thread has been interrupted. <br>
22. public static boolean interrupted(): tests if the current thread has been interrupted .<br>`,

                codeExamples: [
                  `Program: 01 Program for Thread
package com.code_with_pankaj; 
public class ThreadDemo extends Thread { 
public void run() { 
 for (int i = 1; i <= 5; i++) { // 1 to 5 
 System.out.println(i); 
 } 
 } 
public static void main(String[] args) { 
 ThreadDemo thread = new ThreadDemo(); 
 thread.start(); // Starts the new thread
 } 
}`,

                  `Program: 02 
package com.code_with_pankaj; 
class MyThread extends Thread { 
public void run() { 
 System.out.println("Thread is running."); 
 } 
} 
public class Main { 
public static void main(String[] args) { 
 MyThread thread = new MyThread(); 
 thread.start(); // Starts the new thread
 } 
}`
                ]
              },
              {
                content: `<h4>2. By implementing Runnable interface. </h4>
The Runnable interface should be implemented by any class whose instances are intended to be 
executed by a thread.<br> Runnable interface have only one method named run().`,

                codeExamples: [
                  `package com.threads; 
public class ThreadDemo implements Runnable { 
public static void main(String[] args) { // Main Method
 ThreadDemo thread = new ThreadDemo(); // Create Object
 Thread t = new Thread(thread); // Create Thread Object
 t.start(); // Start Thread => run() method Invoked
 } 
@Override
public void run() { 
 for (int i = 1; i <= 10; i++) { 
 System.out.println(i); 
 } 
 } 
} 
  `,
                  `package com.code_with_pankaj; 
  class MyRunnable implements Runnable { 
public void run() { 
 System.out.println("Thread is running."); 
 } 
} 
public class Main { 
public static void main(String[] args) { 
 MyRunnable myRunnable = new MyRunnable(); 
 Thread thread = new Thread(myRunnable); 
 thread.start(); // Starts the new thread
 } 
}
  `
                ]
              },
              {
                content: `<h4>Note- </h4>If you are not extending the Thread class, your class object would not be treated as a thread 
object. So you need to explicitely create Thread class object. We are passing the object of your class that 
implements Runnable so that your class run() method may execute. <br><br>

When? <br>
Extending thread class- if the class is not extending another class then we should go for thread 
class. <br>
Implementing runnable interface- if our class is already extending another class then we could 
not use extend keyword due to multiple inheritance. So best way to go for runnable interface<br><br>

<h3>Difference between thread class & runnable interface (Self assignments) </h3>
<h4>Thread (C)</h4>
• It is a class. <br>
• It can be used to create a thread.<br> 
• It has multiple methods such as ‘start’ and ‘run’. <br>
• It requires more memory space.<br>
• Since multiple inheritance is not allowed in Java, 
hence, after a class extends the Thread class, it can’t 
extend to any other class. <br>
• Every thread creates a unique object and associates 
with it. <br><br>

<h4>Runnable (I)</h4>
• It is a functional interface. <br>
• It can be used to create a thread.<br> 
• It has a single abstract method ‘run’.<br>
• It requires less memory space. <br>
• When a class implements the ‘runnable’ interface, 
the class can extend to other classes.<br>
• Multiple threads can share the same objects.<br>

<table border="2" cellpadding="15" cellspacing="0" style="border-collapse: collapse; width: 100%;">

  <tr style="background-color: #4CAF50; color: white;">
    <th style="border: 2px solid #333;" class="p-2">Sr.no</th>
    <th style="border: 2px solid #333;" class="p-2">Key</th>
    <th style="border: 2px solid #333;">Thread </th>
    <th style="border: 2px solid #333;">Runnable</th>
  </tr>

  <tr>
    <td style="border: 2px solid #333;">1.</td>
    <td style="border: 2px solid #333;" class="p-2">Basic</td>
    <td style="border: 2px solid #333;">Thread is a class. It is used to create a thread</td>
    <td style="border: 2px solid #333;">Runnable is a functional interface which is used to create a thread</td>
  </tr>

   <tr>
    <td style="border: 2px solid #333;">2.</td>
    <td style="border: 2px solid #333;" class="p-2">Method</td>
    <td style="border: 2px solid #333;">It has multiple methods including start() and run()</td>
    <td style="border: 2px solid #333;">It has only abstract method run() </td>
  </tr>

  <tr>
    <td style="border: 2px solid #333;">3.</td>
    <td style="border: 2px solid #333;" class="p-2">Object</td>
    <td style="border: 2px solid #333;">Each thread creates a unique object and gets associated with it</td>
    <td style="border: 2px solid #333;">Multiple threads share the same objects. </td>
  </tr>

  <tr>
    <td style="border: 2px solid #333;">4.</td>
    <td style="border: 2px solid #333;" class="p-2" >Memory</td>
    <td style="border: 2px solid #333;">More memory required</td>
    <td style="border: 2px solid #333;">Less memory required</td>
  </tr>

  <tr>
    <td style="border: 2px solid #333;">5.</td>
    <td style="border: 2px solid #333;" class="p-2" >Limitation</td>
    <td style="border: 2px solid #333;">Multiple Inheritance is not allowed in java hence after a class extends Thread class, after this same class can’t extend any other class</td>
    <td style="border: 2px solid #333;">If a class is implementing the runnable interface then your class can extend another class. </td>
  </tr>

</table>


`,
                codeExamples: [
                  `Example of Runnable
package com.code_with_pankaj; 
public class RunnableExample implements Runnable { 
public void run() { 
 System.out.println("Thread is running for Runnable Implementation"); 
 } 
public static void main(String args[]) { 
 RunnableExample runnable = new RunnableExample(); 
 Thread t1 = new Thread(runnable); 
 t1.start(); 
 } 
} `,

                  `Example of Thread
package com.code_with_pankaj; 
 
public class ThreadExample extends Thread { 
public void run() { 
 System.out.println("Thread is running"); 
 } 
public static void main(String args[]) { 
 ThreadExample t1 = new ThreadExample(); 
 t1.start(); 
 }
 `,
                  `Example for MultiThreading 
package com.multi; 
public class MultithreadingExample extends Thread { 
public void run() { 
 for (int i = 1; i <= 5; i++) { 
 try { 
 Thread.sleep(500);// it will pause the thread execution for particular milliseconds
 } catch (Exception e) { 
 System.out.println(e.getMessage()); 
 } 
 System.out.println(i); 
 } 
 } 
public static void main(String[] args) { 
 MultithreadingExample thread1 = new MultithreadingExample(); 
 MultithreadingExample thread2 = new MultithreadingExample(); 
 thread1.start(); 
 thread2.start(); 
 } 
}`        ]
              },
              {
                content: `<h4>Advantages for Multithreading in Java</h4>
• The users are not blocked because threads are independent, and we can perform multiple operations 
at same times.<br>
• You can perform many operations together, so it saves time. <br>
• Threads are independent, so it doesn't affect other threads if an exception occurs in a single thread. <br><br>
Here are some key benefits: <br>
1. Improved Performance: By allowing multiple threads to run concurrently, multithreading can 
significantly improve the performance of applications, especially on multi-core processors.<br> 
2. Better Resource Utilization: Multithreading helps in better utilization of CPU resources by 
ensuring that idle time (e.g., waiting for I/O operations to complete) is minimized and other threads 
can continue executing. <br>
3. Responsive User Interface: In GUI applications, multithreading allows the user interface to remain 
responsive by performing time-consuming tasks in the background. <br>
4. Simplified Program Structure: Using multiple threads can simplify the program structure, making 
it easier to manage tasks like asynchronous I/O, periodic tasks, or background processing.<br> 
5. Parallel Execution: Multithreading enables parallel execution of tasks, which is useful for tasks that 
can be performed simultaneously, leading to faster completion times. <br>
6. Scalability: Multithreaded applications can easily scale with the increasing number of CPU cores, 
providing better performance and efficiency. <br>
7. Concurrency Handling: Multithreading allows for more efficient handling of multiple tasks at the 
same time, such as processing multiple client requests in a server application. <br><br>
These advantages make multithreading a valuable technique for developing high-performance, 
responsive, and scalable applications in Java.<br>`,

                codeExamples: [
                  `package com.threads; 
public class ThreadDemo extends Thread { 
public static void main(String[] args) { 
 ThreadDemo thread = new ThreadDemo(); 
 System.out.println(thread.getId());
 System.out.println(thread.getName()); 
 System.out.println(thread.getPriority()); 
 System.out.println(thread.getState()); 
 } 
}`
                ]
              }
            ]
          },
          {
            id: `Life Cycle of Thread`,
            name: `Life Cycle of Thread`,
            intermediate: [
              {
                content: `<img src="/src/assets/lifecycle.png" alt="Image"class="d-block mx-auto" style="height:280px" /><br>

• A thread goes through various stages in its life cycle. <br>
• For example: A thread is born, started, runs, and then dies.<br> 
• The following diagram shows the complete life cycle of a thread.<br><br>
<h4>There are different types of thread state are as follows as</h4>
1. New or Born State <br>
• The thread is in new state if you create an instance of Thread class but before the invocation of 
start () method. <br>
2. Runnable State <br>
• The thread is in runnable state after invocation of start () method, but the thread scheduler has not 
selected it to be the running thread. <br> 
3. Running State <br>
• The thread is in running state if the thread scheduler has selected it. <br>
4. Dead State <br>
• A thread is in terminated or dead state when its run () method exits. <br>
5. Waiting State <br>
• When a thread is temporarily inactive, then it’s in one of the following states: Blocked and 
Waiting state. Or Running thread calls join method then it will enter into waiting state (Blocking 
for joining). <br>
6. Sleep State <br>
• If running thread calls sleep method then it will enter into sleep state. If sleeping thread got 
interrupted or time expire then it will enter into ready state. <br>
7. Waiting State <br>
• If running thread calls wait method then it will enter into waiting state. If waiting state got 
notification then it will enter into another wating state. <br>
8. Suspended State <br>
• If running state called suspend method then thread will enter into suspended state. <br>
9. Resume State <br>
• If we call thread from resume () method then it will enter into ready state. <br>
<br>

<img src="/src/assets/thread.png" alt="Image"class="d-block mx-auto border border-primary" style="height:300px" /><br>
`,
              }
            ],

          },
          {
            id: `Synchronization in Java `,
            name: `Synchronization in Java `,
            beginner: [
              {
                content: `• Synchronization in java is the capability to control the access of multiple threads to any shared resource. <br>
                • In the Multithreading concept, multiple threads try to access the shared resources at a time to produce inconsistent results. <br>
                • The synchronization is necessary for reliable communication between threads.<br>
                `,
                codeExamples: [
                  `package com.synchronizaitons; 
public class Account { 
private int balance=5000; 
//-------------------------------------- 
// Generate Getter Method 
public int getBalance() { 
 return balance; 
 } 
public int withdraw(int amount) { // Method: Withdraw 
 balance= balance-amount; 
 return balance; 
 } 
} `
                ]
              }
            ],
            intermediate: [
              {
                content: `We can apply synchronization on method and block only. We cannot apply it on variables and 
class. <br>
• Multiple threads is accessing the one resource at the same time called as Synchronization.<br>
• The main purpose of this is we need to ensure that resource will be used by only one thread at a time. <br>
• The process by which this is achieved is called synchronization.<br><br>

<h4>Why?</h4>
`,
                codeExamples: [`
package com.synchronizaitons; 
public class AccountDetails implements Runnable{ 
Account account = new Account(); 
@Override 
public void run() { 
 for (int x = 0; x < 5; x++) { 
 makeWithdrawal(500); 
 if (account.getBalance() <= 0) { 
 System.out.println("Account is overdrawn..."); 
 } 
 } 
 } 
private void makeWithdrawal(int amt) { 
 if (account.getBalance() >= amt) { 
 System.out.println(Thread.currentThread().getName() +"is going to withdraw=>"); 
 } 
 try { 
 Thread.sleep(100); 
 } catch (InterruptedException e) { 
 System.out.println(e.getMessage()); 
 } 
 int bal = account.withdraw(amt); 
 System.out.println(Thread.currentThread().getName()+"complete withdrawal=>" + bal); 
 } 
} 
`,
                  `package com.synchronizaitons; 
public class MainTest { 
public static void main(String[] args) { 
 AccountDetails accountDetails= new AccountDetails(); 
 Thread thread1=new Thread(accountDetails); 
 Thread thread2= new Thread(accountDetails); 
 thread1.setName("Pankaj"); 
 thread2.setName("bhande"); 
 thread1.start(); 
 thread2.start(); 
 } 
}`
                ]
              },
              {
                content: `In this Example => there are 2 thread which are executed randomly but I want to execute one by one 
thread at a time then go for synchronization. <br>
<h4>Note:</h4> Just make the makeWithdrawal method as synchronized, so you will get the output like as <br>

<div class="p-2 bg-secondary">
<h4>Output- Using Synchronization</h4>
bhande>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>4500 <br>
bhande>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>4000 <br>
bhande>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>3500 <br>
bhande>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>3000 <br>
bhande>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>2500 <br>
Pankaj>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>2000 <br>
Pankaj>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>1500 <br>
Pankaj>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>1000 <br>
Pankaj>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>500 <br>
Pankaj>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>0 <br>
Account is overdrawn... <br>
</div>
<br>
<div class="p-2 bg-secondary">
<h4>Output- without synchronization </h4>
Pankaj>>is going to withdraw=> <br>
bhande>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>4500<br> 
Pankaj>>complete the withdrawal=>4000 <br>
bhande>>is going to withdraw=> <br>
Pankaj>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>3500 <br>
Pankaj>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>3000 <br>
bhande>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>2000 <br>
bhande>>complete the withdrawal=>2500 <br>
bhande>>is going to withdraw=> <br>
Pankaj>>is going to withdraw=> <br>
Pankaj>>complete the withdrawal=>1500 <br>
bhande>>complete the withdrawal=>1000 <br>
Pankaj>>is going to withdraw=> <br>
bhande>>is going to withdraw=> <br>
bhande>>complete the withdrawal=>0 <br>
Account is overdrawn... <br>
Pankaj>>complete the withdrawal=>500 <br>
Account is overdrawn... <br>
</div><br>

<h4>Types 01=> Synchronized Method: </h4>

• If you declare any method as synchronized, it is known as Synchronized Method.<br>
• Synchronized method is used to lock an object for any shared resource.<br>
• When a thread invokes a synchronized method, it automatically acquires the lock for that object and 
releases it when the thread completes its task.<br>

<div class="p-2 bg-secondary">
Example- <br>
 synchronized void test (){ <br>
// write code here <br>
} <br>
</div><br>

<h4>Types 02=> Synchronized Block: </h4>
• Synchronized block can be used to perform synchronization on any specific resource of the 
method.<br>
• Suppose you have 50 lines of code in your method, but you want to synchronize only 5 lines, you 
can use synchronized block. <br>
• If you put all the codes of the method in the synchronized block, it will work same as the 
synchronized method.<br>
 
<h4>Note </h4>
• Synchronized block is used to lock an object for any shared resource. <br>
• Scope of synchronized block is smaller than the method.<br>

<div class="p-2 bg-secondary">
Syntax synchronized (object reference) { <br>
 // code block <br>
} <br>
 </div>

<br><br>

<h3>Synchronization Interview Question & Answer</h3>
<br>

<h4> Explain Synchronization? How to achieve synchronization? </h4>
Synchronization:<br>
• Multiple threads are accessing the same resource at the same time. <br>
• Synchronize keyword is used to achieve Synchronization in Java. <br>
• Synchronize keyword used for methods or blocks, or objects but cannot be used with classes and 
variables. <br>

Type 01 => Synchronized Method:<br>
• If you declare any method with synchronize keyword, it is known as Synchronized Method. <br>

Type 02 => Synchronized Block: <br>
• If you declare any block with synchronize keyword, it is known as Synchronized Block. <br>
• Suppose you have 50 lines of code in your method, but you want to synchronize only 5 lines, then 
we can use synchronized block. <br>


`
              }
            ]
          },
          {
            id: `Interview Questions`,
            name: `Interview Questions`,
            beginner: [
              {
                content: `
               <h4>1. What is multithreading in Java?</h4>
• Multithreading is a process of executing multiple threads simultaneously to maximize CPU 
utilization. <br>
• It allows multiple operations to run concurrently within a single program.<br><br>

<h4>2. How do you create a thread in Java?</h4>
 • There are two main ways to create a thread in Java<br>
1. By extending the Thread class: <br>
Java<br>
class MyThread extends Thread { <br>
 public void run() { <br>
 System.out.println("Thread is running");<br> 
 } <br>
} <br>
MyThread t1 = new MyThread(); <br>
t1.start();<br> 
2. By implementing the Runnable interface: <br>
Java<br>
class MyRunnable implements Runnable {<br> 
 public void run() { <br>
 System.out.println("Thread is running"); <br>
 } <br>
} <br>
Thread t1 = new Thread(new MyRunnable()); <br>
t1.start(); <br><br>

<h4>3. What is the difference between start() and run() methods in Java threads?</h4>
• The start() method creates a new thread and executes the run() method in that new thread. <br>
• The run() method, when called directly, does not create a new thread and runs in the current thread. <br><br>

<h4>4. What are the different states of a thread in Java?</h4>
• A thread can be in one of the following states: <br>
• New: The thread is created but not yet started. <br>
• Runnable: The thread is ready to run and waiting for CPU time. <br>
• Blocked: The thread is blocked and waiting for a monitor lock. <br>
• Waiting: The thread is waiting indefinitely for another thread to perform a particular action. <br>
• Timed Waiting: The thread is waiting for another thread to perform an action for up to a specified waiting 
time. <br>
• Terminated: The thread has finished its execution.<br>
                
                `
              }
            ],
            intermediate: [
              {
                content: `<h4>1. What is synchronization in Java?</h4>
• Synchronization is a mechanism that ensures that two or more concurrent threads do not simultaneously 
execute some particular program segment known as a critical section.<br>
• It is used to prevent thread interference and memory consistency errors.<br> <br>

<h4>2. What is a deadlock in Java?</h4>
• A deadlock is a situation where two or more threads are blocked forever, waiting for each other.<br> 
• This usually happens when two threads have a circular dependency on a pair of synchronized objects. <br><br>

<h4>3. How can you avoid deadlock in Java?</h4>
- Deadlock can be avoided by: <br>
• Avoiding nested locks. <br>
• Using a timeout while waiting for locks. <br>
• Using a lock ordering or lock hierarchy.<br> <br>

<h4>4. What is the difference between wait() and sleep() methods in Java?</h4>
• The wait() method releases the lock on the object and waits until another thread calls notify() or notifyAll() on that object. 
• The sleep() method pauses the current thread for a specified period but does not release the lock. <br><br>

<h4>5. What is the volatile keyword in Java?</h4>
• The volatile keyword is used to indicate that a variable’s value will be modified by different threads. <br>
• It ensures that the value of the volatile variable is always read from the main memory, and not from the 
thread’s local cache. <br><br>

<h4>6. What is the ThreadLocal class in Java?</h4>
• The ThreadLocal class provides thread-local variables. <br>
• Each thread accessing such a variable has its own, independently initialized copy of the variable.`
              }
            ]
          }
        ]
      },


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



