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
                                content: `
Singleton Pattern ensures that only <b>one object</b> of a class is created in the entire application.</p>

<h4>Real-Life Example:</h4>
<ul>
<li>Database Connection</li>
<li>Printer Spooler</li>
<li>Configuration Manager</li>
</ul>

<h4>Why do we need Singleton?</h4>
<ul>
<li>To save memory</li>
<li>To maintain global access</li>
<li>To control object creation</li>
</ul>

<h4>Basic Rules:</h4>
<ul>
<li>Private constructor</li>
<li>Static instance variable</li>
<li>Public static method to get instance</li>
</ul>
`,
                                codeExamples: [
                                    `package com.code_with_pankaj;

public class Singleton {

    // Step 1: Create static instance
    private static Singleton instance;

    // Step 2: Make constructor private
    private Singleton() {
        System.out.println("Singleton Created");
    }

    // Step 3: Public method to access object
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();

        System.out.println(obj1.hashCode());
        System.out.println(obj2.hashCode());
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<p>The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.</p>
<h4>Why?</h4>
`,
                                codeExamples: [`package com.code_with_pankaj; 
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
                                content: `In the above program, we have created the 3 instance of same class but I want to create only 1 instance 
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
`, codeExamples: [`package com.code_with_pankaj; 
 
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
                                content: `<h4>Singleton Pattern with Serialization</h4>
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
                        ],

                        expert: [
                            {
                                content: `
<h4>Thread-Safe Singleton (Double Checked Locking)</h4>
<p>This ensures only one instance is created even in multithreaded environment.</p>
`,
                                codeExamples: [
                                    `public class Singleton {

    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`
                                ]
                            },
                            {
                                content: `
<h4>Bill Pugh Singleton Implementation (Best Practice)</h4>
<p>Uses inner static helper class. Thread-safe without synchronized.</p>
`,
                                codeExamples: [
                                    `public class Singleton {

    private Singleton() {}

    private static class Helper {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return Helper.INSTANCE;
    }
}`
                                ]
                            },
                            {
                                content: `
<h4>Singleton Using Enum (Most Secure Way)</h4>
<p>
✔ Prevents reflection attack<br>
✔ Prevents serialization issue<br>
✔ Prevents cloning issue<br>
✔ Thread-safe by default
</p>
`,
                                codeExamples: [
                                    `public enum Singleton {

    INSTANCE;

    public void showMessage() {
        System.out.println("Singleton using Enum");
    }

    public static void main(String[] args) {
        Singleton obj1 = Singleton.INSTANCE;
        Singleton obj2 = Singleton.INSTANCE;

        System.out.println(obj1.hashCode());
        System.out.println(obj2.hashCode());
    }
}`
                                ]
                            },
                            {
                                content: `
<h4>Common Singleton Issues & Solutions</h4>

<ul>
<li><b>Reflection:</b> Can break singleton → Use enum</li>
<li><b>Serialization:</b> Use readResolve()</li>
<li><b>Cloning:</b> Override clone() method</li>
<li><b>Multithreading:</b> Use Double Checked Locking or Bill Pugh</li>
</ul>

<h4>When NOT to use Singleton?</h4>
<ul>
<li>When dependency injection is better</li>
<li>When class has state changes frequently</li>
<li>When testing requires multiple instances</li>
</ul>
`
                            }
                        ]

                    },


                    {
                        id: 'factory design pattern ',
                        name: 'Factory Design Pattern ',

                        beginner: [
                            {
                                content: `
Factory Design Pattern is used to create objects <b>without exposing object creation logic</b> to the client.</p>

<h4>Simple Meaning:</h4>
<p>
Instead of using <code>new</code> keyword everywhere,
we create objects using a <b>Factory class</b>.
</p><br>

<h4>Why Factory Pattern?</h4>
<ul>
<li>Removes tight coupling</li>
<li>Centralizes object creation</li>
<li>Makes code cleaner</li>
</ul><br>

<h4>Basic Structure:</h4>
<ul>
<li>Step 1: Create Interface</li>
<li>Step 2: Create Concrete Classes</li>
<li>Step 3: Create Factory Class</li>
<li>Step 4: Call Factory from Client</li>
</ul><br>

<h4>Real Life Example:</h4>
<p>Shape Factory → Circle, Rectangle, Square</p>
`,
                                codeExamples: [
                                    `// Step 1: Create Interface
interface Shape {
    void draw();
}

// Step 2: Create Concrete Classes
class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle implements Shape {
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

// Step 3: Create Factory
class ShapeFactory {
    public static Shape getShape(String type) {
        if(type.equalsIgnoreCase("circle")) {
            return new Circle();
        } else if(type.equalsIgnoreCase("rectangle")) {
            return new Rectangle();
        }
        throw new IllegalArgumentException("Invalid Shape");
    }
}

// Step 4: Client Code
public class Test {
    public static void main(String[] args) {
        Shape shape = ShapeFactory.getShape("circle");
        shape.draw();
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `Design the factory method in which multiple objects are stored called as Factory Design Pattern. <br>

• The Factory Design Pattern is a Creational Pattern that provides an interface for creating 
objects but allows subclasses or methods to decide which class to instantiate. <br>

• It promotes loose coupling by removing the need to bind application-specific classes into code.<br><br>

<h4>  Key Points  </h4>
• Encapsulates Object Creation → Centralized place for creating objects. <br>
• Loose Coupling → Client code doesn’t know which class it gets, only the interface. <br>
• Promotes Reusability & Flexibility → Easy to add new product types. <br>
• Return Common Interface / Superclass → Factory method returns a parent type. <br>
• Real-Life Example → IRCTC Website. <br><br>

<h4> Advantages </h4>
• Centralized object creation. <br>
• Reduces tight coupling. <br>
• Makes code more maintainable & scalable. <br><br>

<h4>Disadvantages </h4>
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
                        ],

                        expert: [
                            {
                                content: `<h4>Problem in Simple Factory</h4>
<p>
Using multiple <code>if-else</code> blocks violates 
<b>Open Closed Principle (OCP)</b>.
Every new type requires modifying factory class.
</p>

<h4>Solution: Use Polymorphism (Factory Method Pattern)</h4>
`,
                                codeExamples: [
                                    `// Product Interface
interface Notification {
    void send();
}

// Concrete Products
class EmailNotification implements Notification {
    public void send() {
        System.out.println("Sending Email");
    }
}

class SMSNotification implements Notification {
    public void send() {
        System.out.println("Sending SMS");
    }
}

// Abstract Creator
abstract class NotificationFactory {
    public abstract Notification createNotification();
}

// Concrete Creators
class EmailFactory extends NotificationFactory {
    public Notification createNotification() {
        return new EmailNotification();
    }
}

class SMSFactory extends NotificationFactory {
    public Notification createNotification() {
        return new SMSNotification();
    }
}

// Client
public class Test {
    public static void main(String[] args) {
        NotificationFactory factory = new EmailFactory();
        Notification notification = factory.createNotification();
        notification.send();
    }
}`
                                ]
                            },
                            {
                                content: `
<h4>Factory Using Enum (Cleaner Approach)</h4>
<p>
Removes if-else and improves readability.
</p>
`,
                                codeExamples: [
                                    `enum ShapeType {
    CIRCLE, RECTANGLE
}

class ShapeFactory {
    public static Shape getShape(ShapeType type) {
        switch(type) {
            case CIRCLE:
                return new Circle();
            case RECTANGLE:
                return new Rectangle();
            default:
                throw new IllegalArgumentException("Invalid type");
        }
    }
}`
                                ]
                            },
                            {
                                content: `
<h4>Factory Pattern in Frameworks</h4>

<ul>
<li>Spring → BeanFactory</li>
<li>Hibernate → SessionFactory</li>
<li>Java → Calendar.getInstance()</li>
<li>JDBC → DriverManager.getConnection()</li>
</ul>

<h4>When NOT to Use Factory?</h4>
<ul>
<li>When object creation is simple</li>
<li>When only one implementation exists</li>
</ul>

<h4>Factory vs Abstract Factory</h4>
<ul>
<li>Factory → Creates one product</li>
<li>Abstract Factory → Creates families of related products</li>
</ul>
`
                            },

                            {
                                content: `
<h3>Factory Pattern with Dependency Injection (Spring Example)</h3>

<p>
Modern applications rarely use manual factories. 
Instead, frameworks like <b>Spring</b> internally use Factory pattern
with Dependency Injection.
</p>

<h4>How Spring Uses Factory?</h4>
<ul>
<li>BeanFactory</li>
<li>ApplicationContext</li>
<li>@Bean annotated methods</li>
</ul>

<p>
Spring container decides which object to create at runtime.
Client only depends on interface.
</p>
`,
                                codeExamples: [
                                    `// Service Interface
public interface PaymentService {
    void pay();
}

// Implementations
@Component
public class CreditCardPayment implements PaymentService {
    public void pay() {
        System.out.println("Paid using Credit Card");
    }
}

@Component
public class UpiPayment implements PaymentService {
    public void pay() {
        System.out.println("Paid using UPI");
    }
}

// Spring automatically works like a factory
@Autowired
private PaymentService paymentService;`
                                ]
                            },
                            {
                                content: `
<h3>Factory with Reflection (Dynamic Object Creation)</h3>

<p>
Instead of using if-else or switch,
we can dynamically create objects using Reflection.
This makes factory fully dynamic.
</p>

<h4>⚠️ Used in Frameworks & Libraries</h4>
`,
                                codeExamples: [
                                    `public class DynamicFactory {

    public static Object createInstance(String className) {
        try {
            Class<?> clazz = Class.forName(className);
            return clazz.getDeclaredConstructor().newInstance();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) {
        Object obj = createInstance("com.code_with_pankaj.Circle");
        System.out.println(obj.getClass().getName());
    }
}`
                                ]
                            },
                            {
                                content: `
<h3>Factory with Registry Pattern</h3>

<p>
Instead of modifying factory every time,
we can register objects in Map.
This follows Open Closed Principle properly.
</p>

<h4>Best for Scalable Systems</h4>
`,
                                codeExamples: [
                                    `import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

class ShapeFactory {

    private static final Map<String, Supplier<Shape>> registry = new HashMap<>();

    static {
        registry.put("circle", Circle::new);
        registry.put("rectangle", Rectangle::new);
    }

    public static Shape getShape(String type) {
        Supplier<Shape> shape = registry.get(type.toLowerCase());
        if (shape != null) {
            return shape.get();
        }
        throw new IllegalArgumentException("Invalid shape type");
    }
}`
                                ]
                            },
                            {
                                content: `
<h3>Thread-Safe Factory</h3>

<p>
If factory manages shared resources,
it must be thread-safe.
</p>

<h4>Example:</h4>
`,
                                codeExamples: [
                                    `public class ConnectionFactory {

    private static volatile Connection connection;

    public static Connection getConnection() {
        if (connection == null) {
            synchronized (ConnectionFactory.class) {
                if (connection == null) {
                    connection = createConnection();
                }
            }
        }
        return connection;
    }

    private static Connection createConnection() {
        // DB logic
        return null;
    }
}`
                                ]
                            },
                            {
                                content: `
<h3>Factory Pattern + SOLID Principles</h3>

<h4>How Factory Supports SOLID:</h4>
<ul>
<li><b>S - Single Responsibility</b> → Object creation separated</li>
<li><b>O - Open Closed</b> → Add new product without modifying client</li>
<li><b>L - Liskov Substitution</b> → Subtypes replace parent type</li>
<li><b>D - Dependency Inversion</b> → Depend on abstraction</li>
</ul>

<h4>Common Mistakes</h4>
<ul>
<li>Putting business logic inside factory</li>
<li>Using too many if-else blocks</li>
<li>Violating OCP</li>
<li>Creating God Factory class</li>
</ul>
`
                            },
                            {
                                content: `
<h3>Real Industry Use Cases</h3>

<ul>
<li>JDBC DriverManager → Returns driver implementation</li>
<li>Calendar.getInstance()</li>
<li>LoggerFactory in SLF4J</li>
<li>Spring BeanFactory</li>
<li>Hibernate SessionFactory</li>
<li>Microservices → Strategy selection based on config</li>
</ul>

<h4>Performance Consideration</h4>
<ul>
<li>Factory adds slight abstraction overhead</li>
<li>Reflection-based factory is slower</li>
<li>Best approach → Registry or Dependency Injection</li>
</ul>
`
                            },
                            {
                                content: `
<h3>Factory vs Factory Method vs Abstract Factory</h3>


<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
<tr>
<th>Type</th>
<th>Creates</th>
<th>Complexity</th>
</tr>
<tr>
<td>Simple Factory</td>
<td>One type of object</td>
<td>Low</td>
</tr>
<tr>
<td>Factory Method</td>
<td>Delegates creation to subclasses</td>
<td>Medium</td>
</tr>
<tr>
<td>Abstract Factory</td>
<td>Family of related objects</td>
<td>High</td>
</tr>
</table><br>

<p>
Factory Method is a step towards Abstract Factory.
</p>
`
                            }

                        ]
                    }
                ]
            },

        ],

        cheatNotes: [

            // ===== Common =====
            "Both Singleton and Factory are Creational Design Patterns.",
            "Creational patterns deal with object creation mechanisms.",
            "Singleton controls object count, Factory controls object creation process.",

            // ===== Singleton Notes =====
            "Singleton ensures only ONE instance of a class exists.",
            "Provides a global access point to the instance.",
            "Constructor must be private.",
            "Instance variable should be static.",
            "Provide public static getInstance() method.",
            "Eager initialization creates object at class loading.",
            "Lazy initialization creates object when required.",
            "Use Double Checked Locking for thread safety.",
            "Best practice: Bill Pugh implementation.",
            "Most secure implementation: Enum Singleton.",
            "Override clone() to prevent cloning.",
            "Override readResolve() to prevent serialization break.",
            "Reflection can break Singleton if not handled.",
            "Used in Logger, Cache, Configuration, DB Connection.",

            // ===== Factory Notes =====
            "Factory Pattern hides object creation logic.",
            "Client depends on interface, not concrete class.",
            "Removes direct use of new keyword.",
            "Promotes loose coupling.",
            "Supports Open/Closed Principle.",
            "Used when object type is decided at runtime.",
            "Types: Simple Factory, Factory Method, Abstract Factory.",
            "Factory Method delegates object creation to subclasses.",
            "Abstract Factory creates families of related objects.",
            "Avoid large if-else blocks using Registry Pattern (Map).",
            "Reflection-based factory allows dynamic object creation.",
            "Spring BeanFactory is real-world example.",
            "Factory can be combined with Singleton.",

            // ===== Comparison =====
            "Singleton ensures single object, Factory creates multiple objects.",
            "Singleton focuses on instance control, Factory focuses on object creation abstraction."
        ],

        interviewQuestions: [

            {
                company: "TCS / Infosys / Wipro",
                questions: [
                    "What is Singleton Pattern?",
                    "What is Factory Design Pattern?",
                    "Why constructor is private in Singleton?",
                    "Give real-time example of both patterns.",
                    "Are Singleton and Factory Creational patterns?"
                ]
            },

            {
                company: "Accenture / Cognizant",
                questions: [
                    "How to make Singleton thread-safe?",
                    "What is Double Checked Locking?",
                    "How does Factory promote loose coupling?",
                    "Difference between Factory and Abstract Factory?",
                    "Can Factory and Singleton be combined?"
                ]
            },

            {
                company: "Capgemini / HCL / Tech Mahindra",
                questions: [
                    "How to prevent Singleton from Serialization breaking?",
                    "How to prevent cloning in Singleton?",
                    "How to remove if-else from Factory?",
                    "Factory vs Strategy Pattern?",
                    "Advantages and disadvantages of both patterns?"
                ]
            },

            {
                company: "Product Based Companies",
                questions: [
                    "Explain Bill Pugh Singleton implementation.",
                    "How Reflection can break Singleton?",
                    "Design Payment system using Factory.",
                    "Explain Registry-based Factory.",
                    "Singleton vs Dependency Injection?"
                ]
            },

            {
                company: "FAANG Level",
                questions: [
                    "Design scalable thread-safe Singleton.",
                    "Implement dynamic Factory using Reflection.",
                    "How Singleton violates SOLID principles?",
                    "Factory Pattern in Microservices architecture?",
                    "Design pluggable system using Factory Pattern."
                ]
            }

        ]
    }
]
