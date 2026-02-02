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

                        intermediate: [
                            {
                                content: `<h2>Singleton Pattern</h2>
<p>The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.</p>
<h4>Why?</h4>
`, 
codeExamples:[`package com.code_with_pankaj; 
public class SingletonTest { 
private static SingletonTest s; 
private static SingletonTest test() { 
 s = new SingletonTest(); 
 return s; 
 } 
public static void main(String args[]) { 
 System.out.println("one instance=" + SingletonTest.s.test().hashCode()); 
 System.out.println("two instance=" + SingletonTest.s.test().hashCode()); 
 System.out.println("three instance=" + SingletonTest.s.test().hashCode()); 
 } 
} 
`]
                            },
                            {
                                content:`In the above program, we have created the 3 instance of same class but I want to create only 1 instance 
of class then I should go for singleton design pattern. <br><br>
<h4>When? </h4>
If you have business requirement in which only 1 object is created then you should go for singleton 
design pattern.<br><br>

<h4>Steps to create the singleton design pattern as</h4><br>

<div class='bg-secondary border border-primary p-2'>
Step- 1 : Create class singleton and static member of class.<br> 
package com.code_with_pankaj; <br>
public class Singleton { <br>
private static Singleton singletonobject; <br>
} <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 2 : Make constructor as private <br>
package com.code_with_pankaj; <br>
public class Singleton { <br>
private static Singleton singletonobject; <br>
private singleton(){ <br>
 } <br>
} <br>
 </div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 3 : Create the method for checking the references and use synchronized block instead of 
method. <br>
package com.code_with_pankaj; <br>
 
public static Singleton getSingletonObject() { <br>
synchronized (Singleton.class) { <br>
 if (singletonobject == null) { <br>
 singletonobject = new Singleton(); <br>
 } else { <br>
 return singletonobject; <br>
 } <br>
 return singletonobject; <br>
 } <br>
} <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 4 : We can still able to create the copy of object by cloning it using object clone method. <br>
Override the object clone method to prevent cloning as below. <br>
(If singleton class will implements clonable interface ->class Singleton implements Clonable and 
override object clone method into singleton class) <br>
public static void main(String[] args) throws CloneNotSupportedException { <br>
 Singleton obj1 = Singleton.getSingletonObject(); <br>
 Singleton obj2 = (Singleton) obj1.clone(); <br>
 System.out.println("object 1>>"+obj1.hashCode()); <br>
 System.out.println("object 2>>"+obj2.hashCode()); <br>
} <br>
OUTPUT=object 1>>2018699554 <br>
object 2>>1311053135 <br>
 
This again violates the design principle. We need to override the object clone method which throws <br>
CloneNotSupportedException. <br>
@Override <br>
protected Object clone() throws CloneNotSupportedException { <br>
// TODO Auto-generated method stub<br>
return super.clone(); <br>
} <br>
OUTPUT=object 1>>2018699554 <br>
object 2>>1311053135 <br>
</div><br>
`,codeExamples:[`package com.code_with_pankaj; 
 
import java.io.Serializable; 
public class Singleton implements Cloneable { 
private static Singleton singletonobject; 
private Singleton() { 
 } 
public static Singleton getSingletonObject() { 
 synchronized (Singleton.class) { 
 if (singletonobject == null) { 
 singletonobject = new Singleton(); 
 } else { 
 return singletonobject; 
 } 
 return singletonobject; 
 } 
 } 
@Override
protected Object clone() throws CloneNotSupportedException { 
 // TODO Auto-generated method stub
 return super.clone(); 
 } 
public static void main(String[] args) throws CloneNotSupportedException { 
 Singleton obj1 = Singleton.getSingletonObject(); 
 Singleton obj2 = (Singleton) obj1.clone(); 
 System.out.println("object 1>>" + obj1.hashCode()); 
 System.out.println("object 2>>" + obj2.hashCode()); 
 } 
}`]
                            },
                            {
                                content:`<h4>Singleton Pattern with Serialization</h4>
        Some times in distributed system, we need to implement serializable interface in singleton class so that 
we can store it state in file system and retrieve it later point. <br>

<div class='bg-secondary border border-primary p-2'>
package com.code_with_pankaj; <br>
import java.io.Serializable; <br>
public class Singleton implements Cloneable, Serializable { <br>
private static Singleton singletonobject; <br>
private Singleton() { <br>
 } <br>
public static Singleton getSingletonObject() { <br>
 synchronized (Singleton.class) { <br>
 if (singletonobject == null) { <br>
 singletonobject = new Singleton(); <br>
 } else { <br>
 return singletonobject; <br>
 } <br>
 return singletonobject; <br>
 } <br>
 } <br>
@Override<br>
protected Object clone() throws CloneNotSupportedException { <br>
 // TODO Auto-generated method stub<br>
 return super.clone(); <br>
 } <br>
} <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 2 : Create class singleton with serialization <br>
package com.code_with_pankaj; <br>
import java.io.FileInputStream; <br>
import java.io.FileOutputStream; <br>
import java.io.ObjectInput; <br>
import java.io.ObjectInputStream; <br>
import java.io.ObjectOutput; <br>
import java.io.ObjectOutputStream; <br>
import java.io.Serializable; <br>
public class SingletonSerializedTest implements Serializable { <br>

private static final long serialVersionUID = 1L; <br>
public static void main(String[] args) { <br>
 try { <br>
 Singleton instance1 = Singleton.getSingletonObject(); <br>
 ObjectOutput out = new ObjectOutputStream(new FileOutputStream("E:\\test.txt")); <br>
 out.writeObject(instance1); <br>
 out.close(); <br>
 ObjectInput in = new ObjectInputStream(new FileInputStream("E:\\test.txt"));  <br>
 Singleton instance2 = (Singleton) in.readObject();  <br>
 in.close();  <br>
 System.out.println("instance 1>>" + instance1.hashCode());  <br>
 System.out.println("instance 2>>" + instance2.hashCode());  <br>
 } catch (Exception e) {  <br>
 e.printStackTrace();  <br>
 }  <br>
 }  <br>
}  <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 3 : Create the input and output for reading and writing the object .  <br>
ObjectOutput out = new ObjectOutputStream(new FileOutputStream("D:\\test.txt"));  <br>
out.writeObject(instance1);  <br>
out.close();  <br>
// deserailize from file to object <br>
ObjectInput in = new ObjectInputStream(new FileInputStream("D:\\test.txt"));  <br>
Singleton instance2 = (Singleton) in.readObject();  <br>
in.close();  <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 4 : Run program to check output.  <br>
instance1 hashCode:- 625576447  <br>
instance2 hashCode:- 1494279232  <br> <br>
It is prove that singleton object is not preserved during deserialization. Because both instance have 
different hashcode.  <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 5 : To overcome this problem, we need to override the readResolve() method into singleton class.  <br>
protected Object readResolve() {  <br>
return singletonobject;  <br>
}  <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step- 6 : After Running SingletonSerializedTest Program, you will get the output as  <br>
instance1 hashCode:- 625576447  <br>
instance2 hashCode:- 625576447 <br>
</div><br>

`
                            }
                        ]
                    },


                    {
                        id:'factory design pattern ',
                        name:'Factory Design Pattern ',
                        intermediate:[
                            {
                                content:`Design the factory method in which multiple objects are stored called as Factory Design Pattern. <br>

• The Factory Design Pattern is a Creational Pattern that provides an interface for creating 
objects but allows subclasses or methods to decide which class to instantiate. <br>

• It promotes loose coupling by removing the need to bind application-specific classes into code.<br><br>

<h4> 🔑 Key Points  </h4>
• Encapsulates Object Creation → Centralized place for creating objects. <br>
• Loose Coupling → Client code doesn’t know which class it gets, only the interface. <br>
• Promotes Reusability & Flexibility → Easy to add new product types. <br>
• Return Common Interface / Superclass → Factory method returns a parent type. <br>
• Real-Life Example → IRCTC Website. <br><br>

<h4>🎯 Advantages </h4>
• Centralized object creation. <br>
• Reduces tight coupling. <br>
• Makes code more maintainable & scalable. <br><br>

<h4>🚫 Disadvantages </h4>
• Adds extra classes (slightly more complexity). <br>
• Sometimes makes debugging harder due to indirect instantiation. <br><br>

<h4>Why? </h4>
• Sometime our application or frameworks don’t know what kind of object has to create at run time. <br>
It only knows when it has to create. <br>
• Another issue is that class will contain object of another classes, this can be easily achieved by just 
using the new keyword and the class constructor. The problem with this approach is that it is very 
hard coded approach to create the object as this creates dependency between two classes. <br>

To overcome this above situation, we should go for factory pattern. <br><br>

<h4>When? </h4>
When user wants the specific object at run time.<br><br>

<h4>Example </h4>
Suppose we have requirement to book AC ticket for First tier, second tier and Third tier. <br>
Step 1: Create the interface Booking. <br>
Step 2: Create the concreate class First tier will implement the same interface. <br>
Step 3: Create the concreate class Second tier will implement the same interface. <br>
Step 4: Create the concreate class Third tier will implement the same interface. <br>
Step 5: Create class BookingFactory to generate the object of concreate class. <br>
Step 6: Create the factory class to get the object of concreate class by passing the data. <br><br>


<div class='bg-secondary border border-primary p-2'>
Step 1: Create the interface Booking <br>
package com.code_with_pankaj; <br>
public interface Booking { // Step: 01<br>
public String getACClass(); <br>
} <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step 2: Create the concreate class First tier will implement the same interface <br>
package com.code_with_pankaj; <br>
public class FirstTier implements Booking { <br>
@Override<br>
public String getACClass() { <br>
 return "first class-AC- Seat availability:10"; <br>
 } <br>
} <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step 3: Create the concreate class Second tier will implement the same interface <br>
package com.code_with_pankaj; <br>
public class SecondTier implements Booking { <br>
@Override<br>
public String getACClass() { <br>
 return "Second class- AC- Seat availability:8"; <br>
 } <br>
} <br>
</div> <br>

<div class='bg-secondary border border-primary p-2'>
Step 4: Create the concreate class Third tier will implement the same interface  <br>
package com.code_with_pankaj;  <br>
public class ThirdTier implements Booking {  <br>
@Override <br>
public String getACClass() {  <br>
 return "Third class-AC Seat availability:2";  <br>
 }  <br>
}  <br>
</div> <br>

<div class='bg-secondary border border-primary p-2'>
Step 5: Create class BookingFactory to generate the object of concreate class. <br>
package com.code_with_pankaj; <br>
 
public class BookingFactory { <br>
// Design the factory method here<br>
// We Takes input should be first, second, third<br>
public static Booking createBooking(String input) { <br>
 if (input.equalsIgnoreCase("first")) { <br>
 return new FirstTier(); <br>
 } else if (input.equalsIgnoreCase("second")) { <br>
 return new SecondTier(); <br>
 } else if (input.equalsIgnoreCase("third")) { <br>
 return new ThirdTier(); <br>
 } <br>
 throw new IllegalArgumentException("Invalid input from user.."); <br>
 } <br>
} <br>
</div><br>

<div class='bg-secondary border border-primary p-2'>
Step 6: Create the factory class to get the object of concreate class by passing the data.<br>
package com.code_with_pankaj; <br>
 
import java.util.Scanner; <br>
public class TestMain { <br>
public static void main(String[] args) { <br>
 try { <br>
 String booking; <br>
 System.out.println("Enter the AC class type>>"); <br>
 Scanner scanner = new Scanner(System.in); <br>
 booking = scanner.next(); <br>
 Booking b = BookingFactory.createBooking(booking); <br>
 System.out.println(b.getACClass()); <br>
 scanner.close(); <br>
 } catch (Exception e) { <br>
 e.printStackTrace(); <br>
 } <br>
 } <br>
} <br><br>
OUTPUT <br>
Enter the AC class type>> <br>
first<br>
first class-AC- Seat availability:10 <br>
</div>
`
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
