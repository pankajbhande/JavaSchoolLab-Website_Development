export interface ContentBlock {
  content: string;          // HTML content
  codeExamples?: string[];  // optional code examples
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

export const CollectionFramework: Course[] = [

  {
    id: 'collection',
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
                content: `ArrayList is a resizable array implementation of the List interface. It provides dynamic arrays that can grow as needed.<br>
<br>
<h4>Key Features:</h4>

• Dynamic size<br>
• Allows duplicate elements<br>
• Maintains insertion order<br>
• Allows null values<br>
• Not synchronized (not thread-safe)<br>`,
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

                content: `The ArrayList (C) extends the AbstractList (C) & the implements List interface (I),It uses a Dynamic Array to Store the Duplicate element of different data type. <br><br>

<h3> Features:</h3>
• It is like an array, but there is no size limit. We can add or remove elements anytime. So, it is much 
  more flexible than the traditional array. <br>
• It is found in the java.util package,Duplicate Element => Allowed.<br>
• It maintains the insertion order. ( Insertion order => preserved / maintain )<br>
• It is non-synchronized so no thread safety. <br>
• Heterogeneous Objects => Allowed. <br>
• Null insertion => Possible. (we can add n number of null values in arraylist) <br>
• The elements stored in the ArrayList (C) can be randomly accessed, because array works at the 
  index basis. <br>
• In ArrayList, manipulation is little bit slower than LinkedList because a lot of shifting needs to be 
  occurred if any element is removed from the array list. <br><br>


<h3> Advantages:</h3>
• Easy to learn and use<br>
• Reduce programming effort <br>
• Increase program speed and quality <br>
`,
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
              },
              {

                content: `The ArrayList (C) extends the AbstractList (C) & the implements List interface (I),It uses a Dynamic Array to Store the Duplicate element of different data type. <br></br>

<h3> Constructor:</h3>
<h3> There are 3 types of constructor as below</h3> <br>
<h3>1. ArrayList al = new ArrayList();</h3>

• ArrayList():  It is used to build an empty array list. <br>
- Create the empty array list with default initial capacity 10. Once array list reaches its max capacity 
  then new array list will be created with its new capacity. 
  New Capacity = 2* Current Capacity <br><br>

<h3>2. ArrayList al = new ArrayList(int initial_capacity;</h3>
• ArrayList(int capacity): It is used to build an array list that has the specified initial capacity.  <br>
- Here we are passing the int type value.<br><br>

<h3>3. ArrayList al  = new ArrayList( Collection c);</h3>
• ArrayList(Collection<? extends E> c): It is used to build an array list that is initialized with the 
  elements of the collection c.<br>
- Here we are passing the objects.<br><br>

<p>ArrayList is the Best Choice if our frequent operation is Retrieval Operation: It implements the 
random access interface. <br>
ArrayList is the Worst Choice if our frequent operation is Insertion or Deletion (because several shift 
operation are required for this).</p>
`,
                codeExamples: [
                  `
package com.code_with_pankaj;

import java.util.ArrayList;
import java.util.Iterator;

public class Code_With_Pankaj {

    public static void main(String[] args) {

        // Create ArrayList with Integer generic
        ArrayList<Integer> obj = new ArrayList<>();

        // Adding elements
        obj.add(100);
        obj.add(50);
        obj.add(75);
        obj.add(30);
        obj.add(200);
        obj.add(200); // Duplicate elements are allowed

        // 1st Way: Simple print
        System.out.println(obj);

        // 2nd Way: Using Iterator
        Iterator<Integer> itr = obj.iterator();
        while (itr.hasNext()) {
            System.out.println("Using Iterator: " + itr.next());
        }

        // 3rd Way: Using For-Each Loop
        for (Integer abc : obj) {
            System.out.println("Using For Each Loop: " + abc);
        }
    }
}
`
                ]
              },
              {

                content: `
                <h3> Java ArrayList Methods</h3>

<style>
  /* ✅ ONLY FOR ARRAYLIST TABLE */
  .arraylist-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    background: #ffffff;
    font-family: Arial, sans-serif;
  }

  .arraylist-table th,
  .arraylist-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .arraylist-table th {
    background-color: #007bff;
    color: #ffffff;
  }

  .arraylist-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .arraylist-table tr:hover {
    background-color: #e9f3ff;
  }
</style>

<table class="arraylist-table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
      <th>Return Type</th>
    </tr>
  </thead>

  <tbody>
    <tr><td>add()</td><td>Add an item to the list</td><td>boolean / void</td></tr>
    <tr><td>addAll()</td><td>Add a collection of items to the list</td><td>boolean</td></tr>
    <tr><td>clear()</td><td>Remove all items from the list</td><td>void</td></tr>
    <tr><td>clone()</td><td>Create a copy of the ArrayList</td><td>Object</td></tr>
    <tr><td>contains()</td><td>Checks whether an item exists in the list</td><td>boolean</td></tr>
    <tr><td>ensureCapacity()</td><td>Increase the capacity of the list to fit specified items</td><td>void</td></tr>
    <tr><td>forEach()</td><td>Perform an action on every item</td><td>void</td></tr>
    <tr><td>get()</td><td>Return item at a specific position</td><td>T</td></tr>
    <tr><td>indexOf()</td><td>Return first occurrence position</td><td>int</td></tr>
    <tr><td>isEmpty()</td><td>Checks whether the list is empty</td><td>boolean</td></tr>
    <tr><td>iterator()</td><td>Return Iterator object</td><td>Iterator</td></tr>
    <tr><td>lastIndexOf()</td><td>Return last occurrence position</td><td>int</td></tr>
    <tr><td>listIterator()</td><td>Return ListIterator object</td><td>ListIterator</td></tr>
    <tr><td>remove()</td><td>Remove an item from the list</td><td>boolean / T</td></tr>
    <tr><td>removeAll()</td><td>Remove a collection of items</td><td>boolean</td></tr>
    <tr><td>removeIf()</td><td>Remove items based on condition</td><td>boolean</td></tr>
    <tr><td>replaceAll()</td><td>Replace each item after operation</td><td>void</td></tr>
    <tr><td>retainAll()</td><td>Retain matching collection items</td><td>boolean</td></tr>
    <tr><td>set()</td><td>Replace item at specified position</td><td>T</td></tr>
    <tr><td>size()</td><td>Return number of items</td><td>int</td></tr>
    <tr><td>sort()</td><td>Sort the list</td><td>void</td></tr>
    <tr><td>spliterator()</td><td>Return Spliterator object</td><td>Spliterator</td></tr>
    <tr><td>subList()</td><td>Return sublist from range</td><td>List</td></tr>
    <tr><td>toArray()</td><td>Convert list to array</td><td>Object[]</td></tr>
    <tr><td>trimToSize()</td><td>Reduce capacity to current size</td><td>void</td></tr>
  </tbody>
</table>

                `,
                codeExamples: [
                  `
package com.code_with_pankaj;

import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {

        // Create ArrayList
        ArrayList<String> cars = new ArrayList<>();

        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");

        // Get Iterator
        Iterator<String> it = cars.iterator();

        // Iterate using Iterator
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
        `
                ]
              },
              {

                content: `
                <h3>How to get the synchronized version of ArrayList? </h3>

• By default, all the methods in arraylist are non-synchronized but we can get the synchronized version 
  of arraylist by using collection class synchronized list method.<br>
  Example: <br>
   ArrayList al = new ArrayList();    <br>
            List list = Collections.synchronizedList(al); 


`,
                codeExamples: [
                  `
package com.code_with_pankaj;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SynchronizedArrayListExample {   // Main Class
    public static void main(String[] args) {  // Main Method

        // Create an ArrayList
        ArrayList<String> arrayList = new ArrayList<>();

        // Add elements to the ArrayList
        arrayList.add("Sheru");
        arrayList.add("Dheeraj");
        arrayList.add("Pankaj");

        // Get a synchronized (thread-safe) version of the ArrayList
        List<String> synchronizedList = Collections.synchronizedList(arrayList);

        // Synchronized block to ensure thread-safety during iteration
        synchronized (synchronizedList) {
            for (String item : synchronizedList) {
                System.out.println(item);
            }
        }
    }
}

                   `
                ]
              }
            ]
          },
          {
            id: 'linkedlist',
            name: 'LinkedList',
            beginner: [
              {
                content: `LinkedList is a Java class used to store multiple values.
It is part of the Collection Framework and is available in the java.util package.<br><br>
                
<h3> Simple Features :</h3>
• Underlying data structure is double linked list. <br>
• Allows duplicate values<br>
• Not thread-safe (non-synchronized) / maintained<br>
• Internally uses a doubly linked list<br>
• Null insertion is possible<br>
• It uses a doubly linked list internally to store the elements ( Duplicates Element => Allowed ) <br><br>
`,
                codeExamples: [
                  `import java.util.LinkedList;

public class LinkedListExample {
  public static void main(String[] args) {

    LinkedList<String> list = new LinkedList<>();

    list.add("Python");
    list.add("Java");
    list.add("JavaScript");

    System.out.println(list);

    String value = list.get(1);
    System.out.println(value);
  }
}
`
                ]
              }
            ],
            intermediate: [
              {
                content: `LinkedList implements the Collection interface. i.e. It is child of collection, It is present in Java.util Package.<br>
                <br>
<h3> Features :</h3>
• LinkedList will implements serializable and clonable interface but not random access interface. <br>
• LinkedList is best choice if our frequent operation is insertion and deletion in middle.<br>
• It is non-synchronized<br>
• LinkedList is worst choice if our frequent operation is retrieval. <br>
• Internally uses a doubly linked list to store elements<br>
• LinkedList, the manipulation is fast because no shifting is required.  <br><br>

<h3> Methods of Java LinkedList:</h3>
LinkedList provides various methods that allow us to perform different operations in linked lists. 
We will look at 4 commonly used LinkedList Operators in this tutorial:  <br><br>
<h3>1)Add elements::  We can use the add() method to add an element (node) at the end of the LinkedList. </h3><br>
•void addFirst(); <br>
•void addLast();  <br>

`,
                codeExamples: [
                  `package com.code_with_pankaj;

import java.util.LinkedList;

public class Code_With_Pankaj {
    public static void main(String[] args) {   // Main Method

        LinkedList<String> animals = new LinkedList<>(); // Object creation

        // add() method without index
        animals.add("Dog");   // Index: 0
        animals.add("Cat");   // Index: 1
        animals.add("Cow");   // Index: 2

        System.out.println("LinkedList: " + animals);

        // add() method with index
        animals.add(1, "Horse"); // Add Horse at index 1

        System.out.println("Updated LinkedList: " + animals);
    }
}
 `
                ],
              },
              {
                content: `<h3>2)Access elements: The get() method of the LinkedList class is used to access an element from the 
LinkedList.  </h3><br>  
`,

                codeExamples: [
                  `package com.code_with_pankaj;

import java.util.LinkedList;

public class Code_With_Pankaj {

    public static void main(String[] args) {   // Main Method

        // Creating LinkedList object
        LinkedList<String> languages = new LinkedList<>();

        // Adding elements using add() method
        languages.add("Python");        // Index: 0
        languages.add("Java");          // Index: 1
        languages.add("JavaScript");    // Index: 2

        // Printing the LinkedList
        System.out.println("LinkedList: " + languages);

        // Getting element from LinkedList using index
        String str = languages.get(1);  // Gets element at index 1

        // Printing the fetched element
        System.out.println("Element at index 1: " + str);
    }
}

 `
                ],
              },
              {
                content: `<h3>3) Change elements: The set() method of the LinkedList class is used to change an element of the 
LinkedList.   </h3><br>
•object getFirst();  <br>
•bject getLast();  <br>`,

                codeExamples: [`package com.code_with_pankaj;

import java.util.LinkedList;

class Code_With_Pankaj {

    public static void main(String[] args) {

        // Creating LinkedList object
        LinkedList<String> languages = new LinkedList<>();

        // Adding elements using add() method
        languages.add("Java");        // Index: 0
        languages.add("Python");      // Index: 1
        languages.add("JavaScript");  // Index: 2
        languages.add("Java");        // Index: 3 (Duplicate allowed)

        // Printing original LinkedList
        System.out.println("LinkedList: " + languages);

        // Updating element at index 3 using set() method
        languages.set(3, "Kotlin");

        // Printing updated LinkedList
        System.out.println("Updated LinkedList: " + languages);
    }
}`,
                ],
              },
              {
                content: `<h3>4) Remove elements: The remove() method of the LinkedList class is used to remove an element of 
the LinkedList.   </h3><br>
•object removeFirst();  <br>
•object removeLast();  <br>`,

                codeExamples: [`package com.code_with_pankaj;

import java.util.LinkedList;

class Code_With_Pankaj {

    public static void main(String[] args) {

        // Creating LinkedList object
        LinkedList<String> languages = new LinkedList<>();

        // Adding elements using add() method
        languages.add("Java");        // Index: 0
        languages.add("Python");      // Index: 1
        languages.add("JavaScript");  // Index: 2
        languages.add("Kotlin");      // Index: 3

        // Printing original LinkedList
        System.out.println("LinkedList: " + languages);

        // Removing element at index 1
        String str = languages.remove(1);

        // Printing removed element
        System.out.println("Removed Element: " + str);

        // Printing updated LinkedList
        System.out.println("Updated LinkedList: " + languages);
    }
}`
                ],
              },
              {
                content: `<h3> Constructor  </h3><br>
•LinkedList list = new LinkedList();  <br>
Create the empty linkedlist object.  <br>
•LinkedList list = new LinkedList(Collection c);   <br>
Create the empty linkedlist object. `
                ,


                codeExamples: [`package com.practice;

import java.util.*;

public class Pankaj {

    public static void main(String args[]) {

        // Object Creation with Generics
        LinkedList<String> obj = new LinkedList<String>();

        obj.add("Pankaj");        // Index: 0
        obj.add("Udgir");         // Index: 1
        obj.add("Latur");         // Index: 2
        obj.add("Maharashtra");   // Index: 3
        obj.add("India");         // Index: 4

        //------------------------------------------------------------------------------------
        // 1st Way: Simple Print
        System.out.println("Using Simple Way: " + obj);

        //------------------------------------------------------------------------------------
        // 2nd Way: Using Iterator
        Iterator<String> itr = obj.iterator();
        while (itr.hasNext()) {   // Checks true/false
            System.out.println("Using Iterator: " + itr.next());
        }

        //------------------------------------------------------------------------------------
        // 3rd Way: For-Each Loop
        for (String o : obj) {
            System.out.println("Using For Each Loop: " + o);
        }

        //------------------------------------------------------------------------------------
    }
}`
                ],
              },
              {
                content: `<h3>ArrayList Vs Linkedlist  </h3><br>
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ArrayList vs LinkedList</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f7fa;
            padding: 20px;
        }
        h2 {
            color: #2c3e50;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #3498db;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .note {
            margin-top: 20px;
            background: #eaf2f8;
            padding: 15px;
            border-left: 5px solid #3498db;
        }
    </style>
</head>
<body>

<h2>Difference Between ArrayList and LinkedList</h2>

<table>
    <tr>
        <th>ArrayList</th>
        <th>LinkedList</th>
    </tr>
    <tr>
        <td>Best choice when frequent operation is retrieval</td>
        <td>Best choice when frequent operation is insertion and deletion</td>
    </tr>
    <tr>
        <td>Worst choice for frequent insertion and deletion</td>
        <td>Worst choice for frequent retrieval</td>
    </tr>
    <tr>
        <td>Underlying data structure is a resizable array</td>
        <td>Underlying data structure is a doubly linked list</td>
    </tr>
    <tr>
        <td>Consumes less memory</td>
        <td>Consumes more memory due to next and previous references</td>
    </tr>
    <tr>
        <td>Implements RandomAccess interface</td>
        <td>Does not implement RandomAccess interface</td>
    </tr>
    <tr>
        <td>Better for storing and accessing data</td>
        <td>Better for manipulating data</td>
    </tr>
    <tr>
        <td>Insertion and deletion are slower</td>
        <td>Insertion and deletion are faster</td>
    </tr>
</table>

<div class="note">
    <strong>Interview Tip:</strong><br>
    ArrayList provides fast access, while LinkedList provides fast insertion and deletion.
</div>

</body>
</html>
`
                ,
                codeExamples: [],
              },
            ]
          },
          {
            id: 'vector',
            name: 'Vector',
            beginner: [
              {
                content: `Vector is a Java class used to store multiple values.<br>
It is part of the Collection Framework and is present in the java.util package<br><br>

<h3> Simple Features :</h3>
• Present in java.util package<br>
• Hence vector object is thread safe. <br>
• Data structure for vector is growable or resizable array. <br>
• Allows duplicate values <br>
• Null insertion is possible, Heterogeneous objects are allowed. `,
                codeExamples: [`import java.util.Vector;

public class VectorDemo {
  public static void main(String[] args) {

    Vector<String> v = new Vector<>();

    v.add("Java");
    v.add("Python");
    v.add("C++");

    System.out.println(v);

    System.out.println(v.get(1));
  }
}`
                ]
              }

            ],
            intermediate: [
              {
                content: `In Java, Vector is a part of the Collection Framework. Vector provide a dynamic array to store 
the data elements and that it grow as needed.<br><br>

<h3>Features :</h3>
• Vector is synchronized and contains many methods that are not the part of Collection framework.<br>
• Hence vector object is thread safe. <br>
• Data structure for vector is growable or resizable array. <br>
• Duplicates objects are allowed, Insertion order is preserved. <br>
• Null insertion is possible, Heterogeneous objects are allowed.<br>


<!DOCTYPE html>
<html>
<head>
    <title>Key Features of Vector</title><br>
</head>
<body>

<h2> Key Features of Vector</h2>

<ol>
    <li>
        <b>Dynamic Array</b>
        <ul>
            <li>
                Vector can grow and shrink in size as elements are added or removed,
                unlike arrays which have a fixed size.
            </li><br>
        </ul>
    </li>

    <li>
        <b>Synchronized</b>
        <ul>
            <li>
                All methods of Vector are synchronized, making it thread-safe.
            </li>
            <li>
                It is safe to use in multi-threaded environments without additional synchronization.
            </li>
            <li>
                Due to synchronization, Vector may have performance overhead compared to
                non-synchronized collections like ArrayList.
            </li><br>
        </ul>
    </li>

    <li>
        <b>Legacy Class</b>
        <ul>
            <li>
                Vector is a legacy class introduced in Java 1.0.
            </li>
            <li>
                Although it implements the List interface, it has largely been replaced by
                ArrayList in modern Java applications.
            </li>
        </ul>
    </li>
</ol>

</body>
</html>
<br>

<h2>Methods of Vector</h2>

<h3>For Adding Objects</h3>
<ul>
    <li>add(Object o)</li>
    <li>add(int index, Object o)</li>
    <li>addElement(Object o)</li>
</ul>

<h3>For Removing Objects</h3>
<ul>
    <li>remove(Object o)</li>
    <li>remove(int index)</li>
    <li>removeElement(Object o)</li>
</ul>

<h3>For Accessing Elements</h3>
<ul>
    <li>Object get(int index)</li>
    <li>Object elementAt(int index)</li>
    <li>Object firstElement()</li>
    <li>Object lastElement()</li>
</ul>

<h3>Other Methods</h3>
<ul>
    <li>int size()</li>
    <li>int capacity()</li>
</ul><br>


<h2>Constructors of Vector</h2>

<ol>
    <li>
        <b>Vector v = new Vector();</b><br>
        Creates an empty vector with default initial capacity 10.<br>
        When capacity is full, new capacity = 2 × current capacity.
    </li>
    <br>

    <li>
        <b>Vector v = new Vector(int initialCapacity);</b><br>
        Creates an empty vector with the specified initial capacity.
    </li>
    <br>

    <li>
        <b>Vector v = new Vector(int initialCapacity, int incrementalCapacity);</b><br>
        Creates a vector with given initial capacity and incremental capacity.
    </li>
    <br>

    <li>
        <b>Vector v = new Vector(Collection c);</b><br>
        Creates a vector containing all elements of the given collection.
    </li>
</ol>
`,
                codeExamples: [`
import java.util.Vector; 
  
public class VectorExample { 
 public static void main(String[] args) { 
  // Creating a Vector 
  Vector<String> vector = new Vector<>(); 
 
  // Adding elements 
  vector.add("Sheru"); 
  vector.add("Pankaj"); 
  vector.add("Dheeraj"); 
 
  // Inserting an element at a specific position 
  vector.add(1, "Udgir"); 
 
  // Displaying the vector 
  System.out.println("Vector: " + vector); 
 
  // Accessing an element 
  String names = vector.get(2); 
  System.out.println("Element at index 2: " + names); 
  vector.remove(1);    // Removes "Udgir" 
  System.out.println("Vector after removal: " + vector); 
 
  // Removing an element by value 
  vector.remove("Pankaj"); 
  System.out.println("Vector after removing 'Pankaj': " + vector); 
 
  // Iterating over the elements 
  System.out.println("Iterating over the vector:"); 
  for (String item : vector) { 
   System.out.println(item); 
  } 
 } 
} `,

                ]
              },
              {
                content: `<h2>Basic Operations of Vector</h2>

<h3>1. Creating a Vector</h3>
<p>
Java => Vector&lt;String&gt; vector = new Vector&lt;&gt;();
</p>

<h3>2. Adding Elements</h3>
<p>Elements can be added to the end of the vector or at a specific position.</p>
<pre>
Java =>
vector.add("Apple");
vector.add("Banana");
vector.add(1, "Orange");   // Insert at index 1
</pre>

<h3>3. Accessing Elements</h3>
<p>Elements can be accessed using their index.</p>
<pre>
Java => String fruit = vector.get(0);   // Returns "Apple"
</pre>

<h3>4. Removing Elements</h3>
<p>Elements can be removed by index or by value.</p>
<pre>
Java =>
vector.remove(2);
vector.remove("Sheru");
</pre>

<h3>5. Iterating Over Elements</h3>
<p>You can iterate using a loop or iterator.</p>
<pre>
Java =>
for (String names : vector) {
    System.out.println(names);
}
</pre>

<hr>

`
                ,
                codeExamples: [
                  `package com.code_with_pankaj;

import java.util.Vector;

class Student {
    private String name;
    private int id;

    public Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', id=" + id + "}";
    }
}

public class CustomObjectVectorExample {
    public static void main(String[] args) {

        // Creating a Vector of Student objects
        Vector<Student> students = new Vector<>();

        // Adding Student objects
        students.add(new Student("Alice", 1));
        students.add(new Student("Bob", 2));
        students.add(new Student("Charlie", 3));

        // Displaying the Vector
        System.out.println("Students Vector: " + students);

        // Accessing a Student object
        Student student = students.get(1);
        System.out.println("Student at index 1: " + student);

        // Removing a Student object by index
        students.remove(0);   // Removes Alice
        System.out.println("Students Vector after removal: " + students);

        // Iterating over the Vector
        System.out.println("Iterating over Students Vector:");
        for (Student s : students) {
            System.out.println(s);
        }
    }
}
`
                ]
              },
              {
                content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ArrayList vs Vector</title>

    <!-- Table CSS Only -->
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #ffffff;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
            margin-top: 15px;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 12px;
            text-align: center;
            font-size: 15px;
        }

        th {
            background-color: #2c7be5;
            color: white;
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #f4f6f9;
        }

        tr:hover {
            background-color: #eaf1ff;
        }
    </style>
</head>

<body>

<h2>Difference between ArrayList and Vector</h2>

<table>
    <tr>
        <th>Feature</th>
        <th>ArrayList</th>
        <th>Vector</th>
    </tr>

    <tr>
        <td>Synchronization</td>
        <td>Non-synchronized</td>
        <td>Synchronized</td>
    </tr>

    <tr>
        <td>Thread Safety</td>
        <td>Not thread-safe</td>
        <td>Thread-safe</td>
    </tr>

    <tr>
        <td>Thread Access</td>
        <td>Multiple threads can access simultaneously</td>
        <td>Only one thread can access at a time</td>
    </tr>

    <tr>
        <td>Performance</td>
        <td>Faster</td>
        <td>Slower due to synchronization</td>
    </tr>

    <tr>
        <td>Waiting of Threads</td>
        <td>No waiting required</td>
        <td>Threads must wait</td>
    </tr>

    <tr>
        <td>Java Version</td>
        <td>Introduced in Java 1.2</td>
        <td>Introduced in Java 1.0</td>
    </tr>

    <tr>
        <td>Legacy</td>
        <td>Non-legacy class</td>
        <td>Legacy class</td>
    </tr>
</table>

</body>
</html>
`
                ,
                codeExamples: []
              }

            ]
          },
          {
            id: 'stack',
            name: 'Stack',
            beginner: [
              {
                content: `Stack is a Java class used to store elements in LIFO order.<br>
LIFO means Last In, First Out (the last element added is removed first).<br><br>

<h3> Simple Features :</h3>
• Works on LIFO (Last In First Out)<br>
• Subclass of Vector: boolean <br>
• Provides special methods like push(), pop(), peek(), search() <br>
 `,
                codeExamples: [
                  `import java.util.Stack;

public class StackDemo {
  public static void main(String[] args) {

    Stack<String> stack = new Stack<>();

    stack.push("A");
    stack.push("B");
    stack.push("C");

    System.out.println(stack);

    System.out.println(stack.pop());
  }
}
`
                ]
              }

            ],
            intermediate: [
              {
                content: `A Stack is a legacy class in Java that represents a last-in-first-out (LIFO) stack of elements,The stack is the subclass of Vector, It implements the Last In First Out data structure, i.e., Stack <br>

<h3>Features :</h3>
• It is specially design the class for Last In First Out (LIFO or FILO)<br>
• The stack contains all of the methods of Vector class and also provides its methods like: boolean <br>
• push(), boolean peek(), boolean push(object o), which defines its properties. <br>
• Stack is the child class of vector. `,
                codeExamples: [
                  `import java.util.Stack; 
 
public class StackDemo { 
 public static void main(String[] args) { 
  Stack<String> obj = new Stack<>(); // Creating Object Here 
  // Use Push() Method => For Insert the Data 
  obj.push("A");  // 4 
  obj.push("B");  // 3 
  obj.push("C");  // 2 
  obj.push("D");  // 1 
  System.out.println(obj);   //  Check inserting data or not 
 
 // Using Search() Method Here 
  System.out.println(obj.search("A")); // 4 => LIFO 
  System.out.println(obj.search("B")); // 3 => LIFO 
  System.out.println(obj.search("C")); // 2 => LIFO 
  System.out.println(obj.search("D")); // 1 => LIFO 
   
  System.out.println(obj.search("Z")); // -1 =>> Not Present 
  // if element not found then return -1  
 
  // Using POP Method Here 
  System.out.println(obj.pop());  // D Element (Top Element) Remove here 
 
  // Calling All Data Here 
  System.out.println(obj);   // A B C 
 } 
} `
                ]
              },
              {
                content: `The stack contains all of the methods of Vector class and also provides its methods like: boolean 
push(), boolean peek(), boolean push(object o), which defines its properties.  <br>

<h3>Constructor: :</h3>

• Stack s = new Stack(); <br>

<h3>Methods :</h3><br>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stack Methods</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f6f9;
    }

    .stack-container {
      padding: 20px;
      max-width: 900px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    }

    .stack-container h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    .stack-table {
      width: 100%;
      border-collapse: collapse;
    }

    .stack-table th,
    .stack-table td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }

    .stack-table th {
      background-color: #0d6efd;
      color: white;
      font-weight: 600;
    }

    .stack-table tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    .stack-table tr:hover {
      background-color: #eef3ff;
    }
  </style>
</head>

<body>

  <div class="stack-container">
    <h2>Stack Methods</h2>

    <table class="stack-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Return Type</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>push(Object obj)</td>
          <td>Object</td>
          <td>Inserts the specified object onto the top of the stack and returns the inserted object.</td>
        </tr>

        <tr>
          <td>pop()</td>
          <td>Object</td>
          <td>Removes and returns the object at the top of the stack.</td>
        </tr>

        <tr>
          <td>peek()</td>
          <td>Object</td>
          <td>Returns the object at the top of the stack without removing it.</td>
        </tr>

        <tr>
          <td>search(Object obj)</td>
          <td>int</td>
          <td>Searches the specified object in the stack. Returns its position from the top if found, otherwise returns -1.</td>
        </tr>
      </tbody>
    </table>
  </div>

</body>
</html>
 `,
                codeExamples: [`
import java.util.Iterator;
import java.util.Vector;

public class A3 {
    public static void main(String[] args) {

        Vector<String> obj = new Vector<String>();

        // Adding Elements
        obj.add("Akash");
        obj.add("Avinash");
        obj.add("Pooja");
        obj.add("Pratiksha");
        obj.add("Shraddha");
        obj.add("Vaishnavi");
        obj.add("Seema");
        obj.add("Supriya");
        obj.add("Sushmita");
        obj.add("Mayuri");
        obj.add("Yashashri");

        obj.add("Pankaj");
        obj.add("Pankaj"); // Duplicate allowed

        // 1st Way - Normal way
        System.out.println(obj);

        // 2nd Way - Using Iterator
        Iterator<String> itr = obj.iterator();
        while (itr.hasNext()) {
            System.out.println("By Using Iterator:>> " + itr.next());
        }

        // 3rd Way - Using For Each loop
        for (String s : obj) {
            System.out.println("By Using For Each Loop:>> " + s);
        }
    }
}
`]
              }

            ]
          }
        ]
      },
      {
        id: 'set',
        name: 'Set Interface',
        topics: [
          {
            id: 'hashset',
            name: 'Hashset',
            beginner: [
              {
                content: `HashSet is a Java class that implements the Set interface.
It is used to store unique elements only (duplicates are not allowed).
HashSet is present in the java.util package.<br><br>

<h3>Simple Features :</h3> 
• Implements Set interface<br>
• Insertion order will not be maintained<br>
• Initial Capacity is 16<br>
• Load Factor 0.75<br>
• Internal Datastructure is Hashtable`,
                codeExamples: [
                  `import java.util.HashSet;

public class HashSetDemo {
  public static void main(String[] args) {

    HashSet<String> set = new HashSet<>();

    set.add("Java");
    set.add("Python");
    set.add("Java");   // Duplicate (ignored)

    System.out.println(set);
  }
}
`

                ]
              }
            ],
            intermediate: [
              {
                content: `Underlying data structure is hashtable,Duplicates are not allowed. If we are trying to insert the duplicates then we won’t get any compile. 
 <br><br>
                
<h3>Features :</h3>
• Null is allowed<br>
• Insertion order will not be maintained<br>
• Initial Capacity is 16<br>
• Load Factor 0.75<br>
• Internal Datastructure is Hashtable`,
                codeExamples: [
                  `
import java.util.HashSet;
import java.util.Iterator;

public class Code_With_Pankaj {

    public static void main(String[] args) {

        // Creating HashSet (Does NOT maintain insertion order)
        HashSet<Object> hashSet = new HashSet<>();

        // Adding elements
        hashSet.add("Pankaj");
        hashSet.add("Dheeraj");
        hashSet.add(null);       // Allows one null value
        hashSet.add(10);         // Heterogeneous elements allowed
        hashSet.add("Pankaj");   // Duplicate (ignored, returns false)
        hashSet.add("Dheeraj");  // Duplicate (ignored)

        // Display HashSet
        System.out.println("HashSet Elements: >> " + hashSet);

        // Size of HashSet
        System.out.println("Size: >> " + hashSet.size());

        // Check element existence
        System.out.println("Contains 'Pankaj'? >> " + hashSet.contains("Pankaj"));

        // Iterating using Iterator
        System.out.println("Using Iterator:");
        Iterator<Object> itr = hashSet.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

        // Remove an element
        hashSet.remove(10);
        System.out.println("After removing 10: >> " + hashSet);

        // Check empty
        System.out.println("Is HashSet empty? >> " + hashSet.isEmpty());
    }
}
 `

                ]
              },
              {
                content: `<h3>Constructor: </h3>
<h3>1. HashSet hs = new HashSet();</h3> 
   Create the empty hashset object with default initial capacity 16 & default fill ratio is 0.75. 
New Capacity =>> 16 * 0.75 = 12  <br>

<h3>2. HashSet hs= new HashSet(int initialcapacity);</h3>  
   Create the empty hashset object with specified initial capacity and default fill ratio is 0.75. 
<br>

<h3>3. HashSet hs= new HashSet(int initialcapacity, float loadfactor);</h3>
    Create the empty hashset object with specified initial capacity and specified load factor. 
 <br>

<h3>4. HashSet h s= new HashSet(Collection c);</h3>
               

<h3>Load factor or fill ratio </h3>
After loading, how much factor, new hashset object will be created that factor is called as load factor. 
`,
                codeExamples: [
                  `
package com.test;

import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {

        HashSet<Object> hashSet = new HashSet<>();
        hashSet.add(10);
        hashSet.add(20);
        hashSet.add(30);
        hashSet.add("pankaj");
        hashSet.add("pune");

        System.out.println("1st List:>> " + hashSet);

        HashSet<Object> hashSet1 = new HashSet<>();
        hashSet1.add(40);
        hashSet1.add(50);
        hashSet1.add(60);

        System.out.println("2nd List:>> " + hashSet1);

        // Add 2nd object into 1st
        hashSet.addAll(hashSet1);
        System.out.println("After Adding:>> " + hashSet);
    }
}
`

                ]
              }
            ], expert: [
              {
                content: ``,
                codeExamples: [

                ]
              }
            ]
          },
          {
            id: 'linkedhashset',
            name: 'LinkedHashSet ',
            beginner: [
              {
                content: `LinkedHashSet is a Java class that implements the Set interface.<br><br>
                
<h3>Simple Features :</h3>
• Internal Data Structure is Hash table + Double linked list<br>
• Duplicates are not allowed<br>
• Introduced in 1.4 version. <br>
• It is exactly same as hashset but except the following difference.`,
                codeExamples: [`
import java.util.LinkedHashSet;

public class LinkedHashSetDemo {
  public static void main(String[] args) {

    LinkedHashSet<String> set = new LinkedHashSet<>();

    set.add("Java");
    set.add("Python");
    set.add("C++");
    set.add("Java");   // Duplicate (ignored)

    System.out.println(set);
  }
}
`
                ]
              }
            ],
            intermediate: [
              {
                content: `It is the child class of HashSet,Insertion order is preserved. <br><br>
                
<h3>Features :</h3>
• Internal Data Structure is Hash table + Double linked list<br>
• Initial capacity 16, Load Factory 0.75<br>
• Introduced in 1.4 version. <br>
• It is exactly same as hashset but except the following difference.<br>

<h3>Note :</h3>
1. Load factor is vary between 0.0 to 1.0 & default load factor is 0.75.<br>
2. LinkedHashSet is best choice if we want to develop cache based application where 
duplicates are not allowed and insertion order is preserve

`,
                codeExamples: [
                  `import java.util.LinkedHashSet;
import java.util.Iterator;

public class Pankaj {

    public static void main(String[] args) {

        // Creating LinkedHashSet (Maintains insertion order)
        LinkedHashSet<Object> linkedHashSet = new LinkedHashSet<>();

        // Adding elements
        linkedHashSet.add("Pankaj");
        linkedHashSet.add("Dheeraj");
        linkedHashSet.add(null);       // Allows one null value
        linkedHashSet.add(10);         // Heterogeneous elements allowed
        linkedHashSet.add("Pankaj");   // Duplicate (ignored, returns false)

        // Display LinkedHashSet
        System.out.println("LinkedHashSet Elements: >> " + linkedHashSet);

        // Size of LinkedHashSet
        System.out.println("Size: >> " + linkedHashSet.size());

        // Check element existence
        System.out.println("Contains 'Pankaj'? >> " + linkedHashSet.contains("Pankaj"));

        // Iterating using Iterator
        System.out.println("Using Iterator:");
        Iterator<Object> itr = linkedHashSet.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

        // Remove element
        linkedHashSet.remove(10);
        System.out.println("After removing 10: >> " + linkedHashSet);

        // Check empty
        System.out.println("Is LinkedHashSet empty? >> " + linkedHashSet.isEmpty());
    }
}
 `

                ]
              },
              {
                content: `
                <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HashSet vs LinkedHashSet</title>

  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background-color: #eef2f7;
    }

    .table-box {
      width: 85%;
      margin: 40px auto;
      background: #ffffff;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
      color: #1f2937;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background-color: #2563eb;
      color: white;
    }

    th, td {
      padding: 14px;
      text-align: center;
      border: 1px solid #d1d5db;
    }

    tbody tr:nth-child(even) {
      background-color: #f9fafb;
    }

    tbody tr:hover {
      background-color: #e0e7ff;
    }
  </style>
</head>

<body>

  <div class="table-box">
    <h2>Difference Between HashSet and LinkedHashSet</h2>

    <table>
      <thead>
        <tr>
          <th>Basis</th>
          <th>HashSet</th>
          <th>LinkedHashSet</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Underlying Data Structure</td>
          <td>Hashtable</td>
          <td>Hashtable + LinkedList</td>
        </tr>

        <tr>
          <td>Insertion Order</td>
          <td>Not Preserved</td>
          <td>Preserved</td>
        </tr>

        <tr>
          <td>Duplicate Elements</td>
          <td>Not Allowed</td>
          <td>Not Allowed</td>
        </tr>

        <tr>
          <td>Null Elements</td>
          <td>Allows one null value</td>
          <td>Allows one null value</td>
        </tr>

        <tr>
          <td>Performance</td>
          <td>Faster</td>
          <td>Slightly slower than HashSet</td>
        </tr>

        <tr>
          <td>Memory Usage</td>
          <td>Less memory consumption</td>
          <td>More memory (maintains order)</td>
        </tr>

        <tr>
          <td>Introduced Version</td>
          <td>Java 1.2</td>
          <td>Java 1.4</td>
        </tr>

        <tr>
          <td>Use Case</td>
          <td>When order is not required</td>
          <td>When insertion order is required</td>
        </tr>
      </tbody>
    </table>
  </div>

</body>
</html>
`,
                codeExamples: [
                  `
package com.example;

import java.util.LinkedHashSet;

public class Code_With_Pankaj {

    public static void main(String[] args) {

        // Object creation
        LinkedHashSet<Object> linkedHashSet = new LinkedHashSet<>();

        // Properties:
        // Introduced in Java 1.4
        // Insertion order is preserved
        // Duplicate elements are not allowed

        linkedHashSet.add("ram");      // index 0
        linkedHashSet.add("shyam");    // index 1
        linkedHashSet.add(null);       // index 2
        linkedHashSet.add(" ");        // index 3
        linkedHashSet.add(10);         // index 4
        linkedHashSet.add(null);       // duplicate (ignored)
        linkedHashSet.add("ram");      // duplicate (ignored)

        System.out.println("Original Data: " + linkedHashSet);

        System.out.println("Check Size: " + linkedHashSet.size());
        System.out.println("Check Contains 'shyam': " + linkedHashSet.contains("shyam"));
        System.out.println("Remove Element 10: " + linkedHashSet.remove(10));
        System.out.println("Updated Data: " + linkedHashSet);
    }
}
 `

                ]
              },
              {
                content: `
                <h3>SortedSet::</h3>
- It the child interface of set.<br>
- If we want to represent group of objects according to some sorting order & duplicates are not 
  allowed then we should go for sortedset.<br>

 <h3>Methods:: </h3>
 
- Object first()- return the first element of sortedset. <br>
- Object last()- return the last element of sortedset.`,
                codeExamples: []
              }
            ], expert: [
              {
                content: ``,
                codeExamples: [

                ]
              }
            ]
          },
          {
            id: 'treeset',
            name: 'TreeSet  ',
            beginner: [
              {
                content: `TreeSet is a Java class that implements the Set interface.
It stores unique elements and keeps them in sorted (natural) order.<br><br>

<h3>Simple Features :</h3>

• Insertion order is not preserved. <br>
• All the objects will be inserted according to some sorting order. <br>
• Internal data structure is binary tree.<br>
• will get run time exception saying as classcastexception.`,
                codeExamples: [
                  `
import java.util.TreeSet;

public class TreeSetDemo {
  public static void main(String[] args) {

    TreeSet<String> set = new TreeSet<>();

    set.add("Pune");
    set.add("Mumbai");
    set.add("Hyderabad");

    System.out.println(set);
  }
}

                  `

                ]
              }
            ],
            intermediate: [
              {
                content: `It will maintain Natural Sorting Order, Under, Duplicates objects are not allowed, When we add null value it will try to compare null value with previous object then we will get NullPointerException.
<br>
                
<h3>Features :</h3>
• Internal data structure is binary tree.<br>
• Insertion order is not preserved. <br>
• All the objects will be inserted according to some sorting order. <br>
• Heterogeneous objects are not allowed. If we are trying to insert the Heterogeneous Objects then <br>
• will get run time exception saying as classcastexception. 
 `,
                codeExamples: [
                  `import java.util.TreeSet;
import java.util.Iterator;

public class TreeSetDemo {

    public static void main(String[] args) {

        // Creating TreeSet
        TreeSet<String> treeSet = new TreeSet<>();

        // Adding elements
        treeSet.add("A");
        treeSet.add("a");
        treeSet.add("B");
        treeSet.add("b");
        treeSet.add("C");
        treeSet.add("c");
        treeSet.add("D");
        treeSet.add("d");

        // 1. Normal Way (Sorted Order)
        System.out.println("Using Normal Way: >> " + treeSet);

        // 2. Size of TreeSet
        System.out.println("Size: >> " + treeSet.size());

        // 3. Check element
        System.out.println("Contains 'A'? >> " + treeSet.contains("A"));

        // 4. First and Last element
        System.out.println("First Element: >> " + treeSet.first());
        System.out.println("Last Element: >> " + treeSet.last());

        // 5. Iterate using Iterator
        System.out.println("Using Iterator:");
        Iterator<String> itr = treeSet.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

        // 6. Remove element
        treeSet.remove("a");
        System.out.println("After removing 'a': >> " + treeSet);

        // 7. Check empty
        System.out.println("Is TreeSet empty? >> " + treeSet.isEmpty());
    }
}
 `

                ]
              },
              {
                content: ` 
                
<h2>Constructor :</h2>
<h3>1. TreeSet ts= new TreeSet();</h3> 
  Create the empty treeset object where elements will be inserted according to default natural sorting 
  order. <br>
<h3>2. TreeSet ts= new TreeSet(Comparator c);</h3> 
Create empty treeset object where elements will be inserted according to customized sorting order. <br>

<h3>3. TreeSet t= new TreeSet(SortedSet s); </h3>
<h3>4. TreeSet t= new TreeSet(Collection c); </h3>
 `,
                codeExamples: [
                  `
package com.test;

import java.util.Iterator;
import java.util.TreeSet;

public class TreeSetDemo {
    public static void main(String[] args) {

        TreeSet<String> treeSet = new TreeSet<>();

        treeSet.add("A");
        treeSet.add("a");
        treeSet.add("B");
        treeSet.add("b");
        treeSet.add("C");
        treeSet.add("c");
        treeSet.add("D");
        treeSet.add("d");

        // 1st Way: Normal Way
        System.out.println("Using Normal Way:>> " + treeSet);

        // 2nd Way: Using Iterator() Method
        Iterator<String> itr = treeSet.iterator();
        while (itr.hasNext()) {
            System.out.println("Using Iterator() Method:>> " + itr.next());
        }

        // 3rd Way: Using For Each Loop
        for (String j : treeSet) {
            System.out.println("Using For Each Loop:>> " + j);
        }
    }
}
 `

                ]
              },
              {
                content: ` 
                
<h2>Comparison between Set Implemented Classes-:</h2>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Set Implemented Classes Comparison</title>

  <style>
    /* Table-specific CSS */
    .set-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: #ffffff;
      font-family: Arial, sans-serif;
    }

    .set-table th {
      background-color: #2c7be5;
      color: #ffffff;
      padding: 12px;
      text-align: left;
    }

    .set-table td {
      padding: 12px;
      border: 1px solid #ddd;
    }

    .set-table tr:nth-child(even) {
      background-color: #f4f6f9;
    }

    .set-table tr:hover {
      background-color: #eaf2ff;
    }

    h3 {
      color: #2c3e50;
      margin-top: 10px;
    }
  </style>
</head>

<body>



<table class="set-table">
  <thead>
    <tr>
      <th>Property</th>
      <th>HashSet</th>
      <th>LinkedHashSet</th>
      <th>TreeSet</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Underlying Data Structure</td>
      <td>Hashtable</td>
      <td>Hashtable + LinkedList</td>
      <td>Balanced Tree (Red-Black Tree)</td>
    </tr>

    <tr>
      <td>Insertion Order</td>
      <td>Not Preserved</td>
      <td>Preserved</td>
      <td>Not Preserved</td>
    </tr>

    <tr>
      <td>Sorting Order</td>
      <td>Not Applicable</td>
      <td>Not Applicable</td>
      <td>Natural / Customized Sorting</td>
    </tr>

    <tr>
      <td>Heterogeneous Objects</td>
      <td>Allowed</td>
      <td>Allowed</td>
      <td>Not Allowed (ClassCastException)</td>
    </tr>

    <tr>
      <td>Duplicate Objects</td>
      <td>Not Allowed</td>
      <td>Not Allowed</td>
      <td>Not Allowed</td>
    </tr>

    <tr>
      <td>Null Acceptance</td>
      <td>Allowed (Only Once)</td>
      <td>Allowed (Only Once)</td>
      <td>Not Allowed (NullPointerException)</td>
    </tr>
  </tbody>
</table>

</body>
</html>

 `,
                codeExamples: []
              }
            ], expert: [
              {
                content: ``,
                codeExamples: [

                ]
              }
            ]
          }
        ]
      },
      {
        id: 'map',
        name: 'Map Interface',
        topics: [
          {
            id: 'hashmap',
            name: 'HashMap',
            beginner: [
              {
                content: `HashMap is a class in Java that stores data in the form of key-value pairs. <br><br>
    
<h3>Simple Features :</h3>
• Each key must be unique, but values can repeat.<br>
• HashMap does not keep the order of elements.<br>
• Allows one null key and multiple null values.<br>
• Add elements using the put() method.<br>`,

                codeExamples: [
                  `
import java.util.HashMap;

public class HashMapBeginner {

    public static void main(String[] args) {

        // Create a simple HashMap
        HashMap<Integer, String> map = new HashMap<>();

        // Add key-value pairs
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Orange");

        // Print the HashMap
        System.out.println("HashMap: " + map);

        // Check if a key exists
        System.out.println("Contains key 2? " + map.containsKey(2));

        // Remove a key
        map.remove(3);
        System.out.println("After removal: " + map);
    }
}
`
                ]
              }
            ]
            ,
            intermediate: [
              {
                content: `A HashMap is class which implements the Map interface ,It stores values based on key.<br><br>
                
<h3>Features :</h3>               
• It has 16 size and internally it will increase the size by double, so new size will be 32, 64,128. 
 New Size: 2 * Current Size<br>
• It has insertion data is unordered / not Preserve, which means that the key must be unique<br>
• It may have null key-null value<br>
• In HashMap for adding elements using Put Method .<br>
• Return type of put method is Object. <br>
• New Capacity Formula: 2 × Current Capacity<br>
• HashMap does not preserve insertion order (elements are stored in an unordered manner).<br>
• It allows one null key and multiple null values.<br>
• Elements are added to a HashMap using the put() method..<br><br>

<h3> Important Methods of HashMap (Java).</h3>

<h3>1.HashMap containsKey() Method in Java </h3>
<h4>Example:: Mapping String Values to Integer Keys.</h4>
`,
                codeExamples: [`
import java.util.HashMap;

public class Hash_Map_Demo {

    public static void main(String[] args) {

        // Creating a HashMap with Integer keys and String values
        HashMap<Integer, String> hashMap = new HashMap<>();

        // Adding elements to the HashMap using put() method
        hashMap.put(10, "Udgir");
        hashMap.put(15, "Latur");
        hashMap.put(20, "Maharashtra");
        hashMap.put(25, "India");
        hashMap.put(30, "Asia");

        // Displaying all elements of the HashMap
        System.out.println("Elements in HashMap: >> " + hashMap);

        // Checking whether key '20' is present
        System.out.println("Is the key '20' present? : >> " 
                            + hashMap.containsKey(20));  // true

        // Checking whether key '5' is present
        System.out.println("Is the key '5' present? : >> " 
                            + hashMap.containsKey(5));   // false
    }
}
`
                ]
              },
              {
                content: `

<h3>2.HashMap containsValue() Method  </h3>
<h4>Example::Mapping String Values to Integer Keys.  </h4>
`,
                codeExamples: [`
import java.util.HashMap;

public class Hash_Map_Demo {
    public static void main(String[] args) {

        HashMap<Integer, String> hash_map = new HashMap<Integer, String>();

        // Adding elements
        hash_map.put(10, "Udgir");
        hash_map.put(15, "Latur");
        hash_map.put(20, "Maharashtra");
        hash_map.put(25, "India");
        hash_map.put(30, "Asia");

        // Display HashMap
        System.out.println("Initial Mappings are: " + hash_map);

        // Check values
        System.out.println("Is the value 'Mumbai' present? "
                + hash_map.containsValue("Mumbai"));

        System.out.println("Is the value 'Asia' present? "
                + hash_map.containsValue("Asia"));
    }
}

`
                ]
              },
              {
                content: `

<h3> HashMap clear() Method (Java).</h3>

<h4>Example:: Mapping String Values to Integer Keys.</h4>
`,
                codeExamples: [`
import java.util.HashMap;

public class Hash_Map_Demo {
    public static void main(String[] args) {

        // Creating an empty HashMap
        HashMap<Integer, String> hash_map = new HashMap<Integer, String>();

        // Adding elements
        hash_map.put(10, "Udgir");
        hash_map.put(15, "Latur");
        hash_map.put(20, "Maharashtra");
        hash_map.put(25, "India");
        hash_map.put(30, "Asia");

        // Displaying the HashMap
        System.out.println("Initial Mappings are: " + hash_map);

        // Clearing the HashMap
        hash_map.clear();

        // Displaying the final HashMap
        System.out.println("Finally the maps look like this: " + hash_map);
    }
}

`
                ]
              },
              {
                content: `

<h3>HashMap compute() method in Java with Examples </h3>

  • The compute(Key, BiFunction) method of HashMap class allows you to update a value in HashMap.  <br>
  • The compute() method tries to compute a mapping for the specified key and its current mapped value 
  (or null if there is no current mapping is found). This method is used to automatically update a value 
  for given key in HashMap. <br><br>

• If the remapping function passed in compute returns null, the mapping is removed from Map (or 
  remains absent if initially absent). <br>
• If the remapping function throws an exception, the exception is re-thrown, and the current mapping 
  is left unchanged. <br>
  During computation, remapping function should not be able to modify this map. <br>
• The compute() method can be used to update an existing value inside HashMap. <br>
  For example, <br>
  Mapping to increment a int value of mapping: map.compute(key, (k, v) -> (v == null) ? 1 : v+1) <br>
• The default implementation of this method takes no guarantee for detecting an error if the 
  remapping function of compute() method modifies this map during computation.<br><br>

• Exceptions: Non-concurrent implementations of this method should override this method and throw 
  a ConcurrentModificationException if it is detected a change in mapping during computation. <br>
  Concurrent implementations should override this method throw an IllegalStateException if it is 
  detected a change in mapping during computation and as a result computation would never complete. <br>
 
• The default implementation of this method takes no guarantees about synchronization or atomic 
  properties of this method. Any implementation providing atomicity guarantees must override this 
  method and document its concurrency properties.<br><br>

<h3>Syntax:</h3> 
default V  <br>
       compute(K key, <br>
             BiFunction<? super K, ? super V, ?<br>
                 extends V> remappingFunction) <br><br>
                 
<h3>Parameters</h3>
- This method accepts two parameters <br>
- key: key with which associate the value. <br>
- remappingFunction: function to compute the value. <br>
- Returns:This method returns new value associated with the specified key, or null if none.<br><br>

 Exception: This method throws: <br>
- NullPointerException: if the key is null and this map does not support null keys, or the 
 remappingFunction is null. <br>
- UnsupportedOperationException: if the put operation is not supported by this map. <br>
- ClassCastException: if the class of the key or value prevents it from being stored in this map. <br>
- IllegalArgumentException: if some property of the key or value prevents it from being stored in 
 this map. <br>

<h4>Example::Below programs illustrate the compute(Key, BiFunction) method:</h4>
`,
                codeExamples: [`
import java.util.HashMap;
import java.util.Map;

public class PANKAJ {
    public static void main(String[] args) {

        // Create a Map and add values
        Map<String, String> map = new HashMap<>();
        map.put("Name", "Pankaj");
        map.put("Address", "Udgir");

        // Print the map
        System.out.println("Map: " + map);

        // Remap values using compute()
        map.compute("Name", (key, val) -> val.concat(" Kumar"));
        map.compute("Address", (key, val) -> val.concat(" Maharashtra"));

        // Print updated map
        System.out.println("New Map: " + map);
    }
}


`
                ]
              },
              {
                content: `

<h3>HashMap get() Method in Java  </h3>

<h4>Example::Mapping String Values to Integer Keys.</h4>
`,
                codeExamples: [`
import java.util.HashMap;

public class Hash_Map_Demo {
    public static void main(String[] args) {

        // Creating an empty HashMap
        HashMap<Integer, String> hash_map = new HashMap<>();

        // Mapping string values to int keys
        hash_map.put(10, "Pankaj");
        hash_map.put(15, "Latur");
        hash_map.put(20, "Maharashtra");
        hash_map.put(25, "India");
        hash_map.put(30, "Asia");

        // Displaying the HashMap
        System.out.println("Initial Mappings are: " + hash_map);

        // Getting values
        System.out.println("The Value is: " + hash_map.get(25));
        System.out.println("The Value is: " + hash_map.get(10));
    }
}

                  `   ]
              },
              {
                content: `

<h3>HashMap put() Method in Java  </h3>

<h4>Example::When passing an existing key.  </h4>
`,
                codeExamples: [`
// Java code to illustrate the put() method
import java.util.HashMap;

public class Hash_Map_Demo {
    public static void main(String[] args) {

        // Creating an empty HashMap
        HashMap<Integer, String> hash_map = new HashMap<>();

        // Mapping string values to int keys
        hash_map.put(10, "Pankaj");
        hash_map.put(15, "Bhande");
        hash_map.put(20, "Udgir");
        hash_map.put(25, "Latur");
        hash_map.put(30, "Maharashtra");

        // Displaying the HashMap
        System.out.println("Initial Mappings are: " + hash_map);

        // Inserting existing key with new value
        String a = hash_map.put(20, "All");

        // Verifying returned value
        System.out.println("New value is: " + a);

        // Displaying updated map
        System.out.println("New map is: " + hash_map);
    }
}

                  `   ]
              },
              {
                content: `

<h3>HashMap remove() Method in Java  </h3>

<h4>Example::When passing an existing key.</h4>
`,
                codeExamples: [`
import java.util.HashMap;

public class Hash_Map_Demo {
    public static void main(String[] args) {

        // Creating an empty HashMap
        HashMap<Integer, String> hash_map = new HashMap<>();

        // Mapping string values to int keys
        hash_map.put(10, "Pankaj");
        hash_map.put(15, "Bhande");
        hash_map.put(20, "Udgir");
        hash_map.put(25, "Latur");
        hash_map.put(30, "Maharashtra");

        // Displaying the HashMap
        System.out.println("Initial Mappings are: " + hash_map);

        // Removing the existing key mapping
        String returned_value = hash_map.remove(20);

        // Verifying the returned value
        System.out.println("Returned value is: " + returned_value);

        // Displaying the new map
        System.out.println("New map is: " + hash_map);
    }
}
   `   ]
              },
              {
                content: `

<h3>AbstractMap equals() Method in Java with Examples  </h3>

`,
                codeExamples: [`// Java code to illustrate the equals() method
import java.util.AbstractMap;
import java.util.IdentityHashMap;

public class Abstract_Map_Demo {
    public static void main(String[] args) {

        // Creating AbstractMap objects using IdentityHashMap
        AbstractMap<Integer, String> abstract_hash1 = new IdentityHashMap<>();
        AbstractMap<Integer, String> abstract_hash2 = new IdentityHashMap<>();

        // Adding elements to first map
        abstract_hash1.put(10, "Pankaj");
        abstract_hash1.put(15, "Udgir");
        abstract_hash1.put(20, "Latur");
        abstract_hash1.put(25, "Maharashtra");
        abstract_hash1.put(30, "India");

        // Adding elements to second map
        abstract_hash2.put(10, "Pankaj");
        abstract_hash2.put(15, "Udgir");
        abstract_hash2.put(20, "Latur");
        abstract_hash2.put(25, "Maharashtra");
        abstract_hash2.put(30, "Asia");

        // Display maps
        System.out.println("First Map: " + abstract_hash1);
        System.out.println("Second Map: " + abstract_hash2);

        // Check equality
        System.out.println("Equality: " + abstract_hash1.equals(abstract_hash2));
    }
}
 `   ]
              },
              {
                content: `

<h3>AbstractMap hashCode() Method in Java with Examples  </h3>
<h3> Examples::Mapping String Values to Integer Keys.</h3>
`,
                codeExamples: [`import java.util.AbstractMap;
import java.util.IdentityHashMap;

public class Abstract_Map_Demo {
    public static void main(String[] args) {

        // Creating an empty AbstractMap
        AbstractMap<String, Integer> abs_hash = new IdentityHashMap<>();

        // Mapping int values to string keys
        abs_hash.put("Pankaj", 10);
        abs_hash.put("Udgir", 15);
        abs_hash.put("Latur", 20);
        abs_hash.put("India", 25);
        abs_hash.put("Asia", 30);

        // Displaying the AbstractMap
        System.out.println("Initial Mappings are: " + abs_hash);

        // Getting the hashcode value for the map
        System.out.println("The hashcode value of the map: " + abs_hash.hashCode());
    }
}
`   ]
              },
              {
                content: `

<h3>AbstractMap.SimpleEntry toString() Method in Java with Examples  </h3>

`,
                codeExamples: [`
// Java program to demonstrate AbstractMap.SimpleEntry.toString() method
import java.util.AbstractMap;
import java.util.ArrayList;

public class Abstract_Map_Demo {
    public static void main(String[] args) {

        // Create an ArrayList of Map entries
        ArrayList<AbstractMap.SimpleEntry<String, String>> arrayList =
                new ArrayList<>();

        // Add values
        arrayList.add(new AbstractMap.SimpleEntry<>("001AB", "Emp 1"));
        arrayList.add(new AbstractMap.SimpleEntry<>("011AC", "Emp 2"));
        arrayList.add(new AbstractMap.SimpleEntry<>("111AD", "Emp 3"));
        arrayList.add(new AbstractMap.SimpleEntry<>("101BE", "Emp 4"));
        arrayList.add(new AbstractMap.SimpleEntry<>("110CE", "Emp 5"));

        // Print entries using toString()
        for (int i = 0; i < arrayList.size(); i++) {

            AbstractMap.SimpleEntry<String, String> map = arrayList.get(i);
            String value = map.toString();

            System.out.println(value);
        }
    }
}
`   ]
              }
            ],
            expert: [
              {
                content: ``,
                codeExamples: [
                ]
              }
            ],
          },
          {
            id: 'linkedhashmap',
            name: 'LinkedHashMap',
            beginner: [
              {
                content: `LinkedHashMap is a class in Java that stores data as <b>key-value pairs</b> and maintains the <b>insertion order</b>.<br>
<br>
<h3>Simple Features :</h3>
• Stores unique keys and their corresponding values.<br>
• Maintains the order in which elements are inserted.<br>
• Allows one null key and multiple null values.<br>
• Not synchronized (not thread-safe).<br>
• Belongs to the java.util package.<br>`,

                codeExamples: [
                  `
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapBeginner {

    public static void main(String[] args) {
        // Create a LinkedHashMap
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();

        // Add key-value pairs
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Orange");

        // Print the LinkedHashMap
        System.out.println("LinkedHashMap: " + map);

        // Get value using key
        System.out.println("Value for key 2: " + map.get(2));

        // Check if key exists
        System.out.println("Contains key 3? " + map.containsKey(3));

        // Remove a key
        map.remove(1);
        System.out.println("After removing key 1: " + map);
    }
}
`
                ]
              }
            ]
            ,
            intermediate: [
              {
                content: `It is a ‘hashtable and linked list implementation of the map interface with a predictable iteration order.  
It contains values based on the key.<br><br>
<h3>Key Points :</h3>
• It contains unique elements.<br>
• It may have one null key and multiple null values. <br>
• It is non synchronized. <br>
• It maintains insertion order.   <br>
• It is the same as HashMap except it maintains an insertion order i.e. ordered <br>
• The initial default capacity of Java HashMap=16 with a load factor= 0.75. `,
                codeExamples: [`
package com.test;

import java.util.LinkedHashMap;

public class HashMapDemo {
    public static void main(String[] args) {

        LinkedHashMap<Integer, String> linkedHashMap = new LinkedHashMap<>();

        linkedHashMap.put(10, "ajay");   // 0th index
        linkedHashMap.put(11, "ram");    // 1st index
        linkedHashMap.put(12, "shyam");  // 2nd index

        // Insertion order is preserved
        System.out.println(linkedHashMap);
    }
}`
                ]
              }
            ],
            expert: [
              {
                content: ``,
                codeExamples: [
                ]
              }
            ],
          },
          {
            id: 'treemap',
            name: 'TreeMap ',
            beginner: [
              {
                content: `TreeMap stores data as <b>key-value pairs</b> and automatically sorts keys in <b>ascending order</b>.<br><br>

<h3>Simple Features :</h3>
• Keys must be unique.<br>
• Values can be duplicated.<br>
• Null keys are not allowed; null values are allowed.<br>
• Maintains keys in ascending order.<br>
• Belongs to java.util package.<br><br>

<h3>Diagram:</h3>
<img src="https://www.scientecheasy.com/wp-content/uploads/2020/11/treemap-hierarchy-diagram.png"
     alt="TreeMap Diagram"
     style="display:block; margin:auto; max-width:100%;">`,

                codeExamples: [
                  `
import java.util.TreeMap;

public class TreeMapSimple {

    public static void main(String[] args) {

        // Create TreeMap
        TreeMap<Integer, String> map = new TreeMap<>();

        // Add elements
        map.put(3, "Orange");
        map.put(1, "Apple");
        map.put(2, "Banana");

        // Display TreeMap
        System.out.println("TreeMap: " + map);

        // Get value using key
        System.out.println("Value for key 2: " + map.get(2));

        // Remove a key
        map.remove(1);
        System.out.println("After removing key 1: " + map);
    }
}
`
                ]
              }
            ]
            ,
            intermediate: [
              {
                content: ` It is a class which implements NavigableMap interface which is the sub- interface of SortedMap. 
 It contains values based on the key. It implements the NavigableMap interface and extends 
AbstractMap class.  <br><br>
<h3> Features :</h3>
• It maintains ascending order.  <br>
• Keys should be unique / Java TreeMap contains only unique elements.  <br>
• It maintains ascending order. Keys should be unique / Java TreeMap contains only unique elements. <br>
• It cannot have null key at run time but can have null values because the interpreter will not understand 
      how to sort null with other values. <br>
• It cannot have a null key but can have multiple null values. <br>
• It is non synchronized.<br>

<!DOCTYPE html>
<html>
<body>

<img src="https://www.scientecheasy.com/wp-content/uploads/2020/11/treemap-hierarchy-diagram.png"
     alt="TreeMap Diagram"
     style="display:block; margin:auto; max-width:100%;">

</body>
</html>
<br>

<h3> Methods Covered in This Program :</h3>
• put() <br>
• get()<br>
• containsKey()<br>
• containsValue()<br>
• firstKey()<br>
• lastKey()<br>
• higherKey()<br>
• lowerKey()<br>
• ceilingKey()<br>
• floorKey()<br>
• entrySet()<br>
• remove()<br>
• size()<br>
• isEmpty()`,
                codeExamples: [`
import java.util.TreeMap;
import java.util.Map;

public class TreeMap_Demo {

    public static void main(String[] args) {

        // Creating a TreeMap with Integer keys and String values
        TreeMap<Integer, String> treeMap = new TreeMap<>();

        // Adding elements using put() method
        treeMap.put(10, "Ajay");
        treeMap.put(11, "Ram");
        treeMap.put(12, "Shyam");
        treeMap.put(15, "Amit");
        treeMap.put(5, "Ravi");

        // Displaying TreeMap (Sorted by keys)
        System.out.println("TreeMap Elements: " + treeMap);

        // get() - Retrieve value using key
        System.out.println("Value for key 10: " + treeMap.get(10));

        // containsKey() - Check key existence
        System.out.println("Contains key 12? " + treeMap.containsKey(12));

        // containsValue() - Check value existence
        System.out.println("Contains value 'Ram'? " + treeMap.containsValue("Ram"));

        // firstKey() and lastKey()
        System.out.println("First Key: " + treeMap.firstKey());
        System.out.println("Last Key: " + treeMap.lastKey());

        // higherKey() and lowerKey()
        System.out.println("Higher key than 10: " + treeMap.higherKey(10));
        System.out.println("Lower key than 10: " + treeMap.lowerKey(10));

        // ceilingKey() and floorKey()
        System.out.println("Ceiling key of 11: " + treeMap.ceilingKey(11));
        System.out.println("Floor key of 11: " + treeMap.floorKey(11));

        // entrySet() - Display all key-value pairs
        System.out.println("Using entrySet():");
        for (Map.Entry<Integer, String> entry : treeMap.entrySet()) {
            System.out.println(entry.getKey() + " => " + entry.getValue());
        }

        // remove() - Remove an element
        treeMap.remove(12);
        System.out.println("After removing key 12: " + treeMap);

        // size() and isEmpty()
        System.out.println("Size of TreeMap: " + treeMap.size());
        System.out.println("Is TreeMap empty? " + treeMap.isEmpty());
    }
}
`
                ]
              }
            ],
            expert: [
              {
                content: ``,
                codeExamples: [
                ]
              }
            ],
          },
          {
            id: 'hashtable',
            name: 'Hashtable',
            beginner: [
              {
                content: `Hashtable is a class in Java that stores data as <b>key-value pairs</b> and implements the Map interface.<br></br>

<h3>Simple Features :</h3>
• Stores unique keys and their corresponding values.<br>
• Does not maintain insertion order (unordered).<br>
• Does not allow <b>null</b> keys or <b>null</b> values.<br>
• Thread-safe because its methods are synchronized.<br>
• Belongs to the java.util package.<br>
• Default initial capacity is 11 and load factor is 0.75.<br><br>

<h3> Difference from HashMap:</h3>
<ul>
  <li>Hashtable is synchronized (thread-safe), HashMap is not.</li>
  <li>Hashtable does not allow null keys or values; HashMap allows one null key and multiple null values.</li>
  <li>HashMap is faster than Hashtable.</li>
</ul>
`,

                codeExamples: [
                  `
import java.util.Hashtable;
import java.util.Enumeration;

public class HashtableBeginner {

    public static void main(String[] args) {
        // Create a Hashtable
        Hashtable<String, String> table = new Hashtable<>();

        // Add key-value pairs
        table.put("A", "Apple");
        table.put("B", "Banana");
        table.put("C", "Cherry");

        // Display all key-value pairs
        System.out.println("Hashtable Elements:");
        Enumeration<String> keys = table.keys();
        while (keys.hasMoreElements()) {
            String key = keys.nextElement();
            System.out.println(key + " => " + table.get(key));
        }

        // Check if a key exists
        System.out.println("Contains key 'B'? " + table.containsKey("B"));

        // Remove a key
        table.remove("C");
        System.out.println("After removing 'C': " + table);
    }
}
`
                ]
              }
            ]
            ,
            intermediate: [
              {
                content: `Hashtable is a class that extends the Dictionary class and implements the Map interface.It stores data in the form of key–value pairs.<br></br>

<h3>Features :</h3>

• It stores values. It is unordered & the key should be unique .<br>
• It contains values based on the key. <br>
• It is an array of a list. Each list is known as a bucket. The position of the bucket is identified by 
 calling the hashcode() method.  <br>
• It class contains unique elements. <br>
• It is class doesn't allow null key or value. <br>
• It’s class is synchronized methods and slower than hashmap <br>
• Due to synchronization, Hashtable is slower than HashMap.<br>
• The default initial capacity of Hashtable is 11.<br>
• The default load factor is 0.75.<br>
• It gives runtime error if we try to add any null keys or values but will not show an error at 
 compile time. <br>
• It has Thread Safety. <br>

<h2>hashtable vs hashmap :</h2>
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpObL6vYil5MaCtlBJ188HF-xF0w8ZUjSohbVChj7QS5nmBezzedeX1PHeDG3ahLMJ3RwefwvlI4wOOvLAzu_GjfJmwZMMzmtF5v4UgcXryiL_yoWCmV8nVj_lC6eBb_LTSXHVfyoebIVZ/s1600/Screenshot+%2528354%2529.png" 
     alt="Screenshot" width="600" height="400"><br>
     <h2>How to return Map to Method :</h2>
     `,
                codeExamples: [`
import java.util.*; 
 
public class HashMapDemo2 { 
 public static void main(String[] args) { 
  HashMap<Integer, String> map = new HashMap<Integer, String>(); 
 
  map.put(10, "Ram"); 
  map.put(20, "yogesh"); 
  map.put(30, "sohan"); 
  
  Set<Integer> s = map.keySet(); 
 
  Iterator<Integer> itr = s.iterator(); 
       while (itr.hasNext()) { 
  System.out.println("key=" + itr.next()); 
   
  System.out.println("value=" + map.get(itr)); 
  } 
 } 
} `
                ]
              },
              {
                content: `
                <h3> Comparison between HashMap, LinkedHashMap, TreeMap and Hashtable</h3>

<style>
  .map-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
  }

  .map-table th {
    background-color: #2c7be5;
    color: #ffffff;
    padding: 10px;
    text-align: left;
  }

  .map-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  .map-table tr:nth-child(even) {
    background-color: #f2f6fc;
  }

  .map-table tr:hover {
    background-color: #e8f1ff;
  }
</style>

<table class="map-table">
  <tr>
    <th>Topic</th>
    <th>HashMap</th>
    <th>LinkedHashMap</th>
    <th>TreeMap</th>
    <th>Hashtable</th>
  </tr>

  <tr>
    <td>Duplicate Keys</td>
    <td>Not Allowed</td>
    <td>Not Allowed</td>
    <td>Not Allowed</td>
    <td>Not Allowed</td>
  </tr>

  <tr>
    <td>Ordering</td>
    <td>Unordered</td>
    <td>Maintains insertion order</td>
    <td>Maintains ascending order (Sorted)</td>
    <td>Unordered</td>
  </tr>

  <tr>
    <td>Null (Key / Value)</td>
    <td>Allows one null key & multiple null values</td>
    <td>Allows one null key & multiple null values</td>
    <td>Null key not allowed, values allowed</td>
    <td>Null key & value not allowed</td>
  </tr>

  <tr>
    <td>Accessing Elements</td>
    <td>Iterator</td>
    <td>Iterator</td>
    <td>Iterator</td>
    <td>Iterator</td>
  </tr>

  <tr>
    <td>Thread Safety</td>
    <td>No</td>
    <td>No</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
</table><br></br>

<h3>Can we take custom Employee class as key in hashmap </h3>    
`,
                codeExamples: [`
package com.hashmap;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Set;

public class LinkedHashMapDemo {
    public static void main(String[] args) {

        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();

        map.put(10, "Ram");
        map.put(10, "Yogesh"); // Override value for key 10

        Set<Integer> keys = map.keySet();
        Iterator<Integer> itr = keys.iterator();

        while (itr.hasNext()) {
            Integer key = itr.next();
            System.out.println("key = " + key);
            System.out.println("value = " + map.get(key));
        }
    }
}


`
                ]
              },
              {
                content: `

<h3> How to return map to method ::</h3>    
`,
                codeExamples: [`
package com.test;

import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {

    public HashMap<Integer, String> addEmployee() {
        HashMap<Integer, String> hashMap = new HashMap<>();
        hashMap.put(10, "rohan");
        hashMap.put(20, "sohan");
        hashMap.put(30, "pankaj");
        return hashMap;
    }

    public static void main(String[] args) {
        HashMapDemo hashMapDemo = new HashMapDemo();

        // 1st way
        System.out.println("first way = " + hashMapDemo.addEmployee());

        // 2nd way
        HashMap<Integer, String> hashMap = hashMapDemo.addEmployee();
        System.out.println("second way = " + hashMap);

        // 3rd way
        Map<Integer, String> map = hashMapDemo.addEmployee();
        System.out.println("third way = " + map);
    }
}

`
                ]
              }
            ],
            expert: [
              {
                content: ``,
                codeExamples: [
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'comparable & Comparator',
        name: 'Comparable & Comparator InterFace',
        topics: [
          {
            id: 'comparable',
            name: 'Comparable ',
            beginner: [
              {
                content: `Comparable is an interface in Java used to sort objects in a <b>default (natural) order</b>.<br><br>


<h3> Simple Features :</h3>
• Present in java.lang package.<br>
• Used for natural sorting of objects.<br>
• Contains only one method: <b>compareTo()</b>.<br>
• Affects the original class.<br>
• Used when only one sorting logic is needed.<br>

`,

                codeExamples: [
                  `
import java.util.ArrayList;
import java.util.Collections;

class Employee implements Comparable<Employee> {
    int id;
    String name;
    int salary;

    Employee(int id, String name, int salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    @Override
    public int compareTo(Employee e) {
        return this.salary - e.salary; // sort by salary
    }

    public static void main(String[] args) {
        ArrayList<Employee> list = new ArrayList<>();
        list.add(new Employee(101, "Ram", 9000));
        list.add(new Employee(102, "Ashok", 3000));
        list.add(new Employee(103, "Ajay", 8000));

        Collections.sort(list); // sort using compareTo()

        for (Employee e : list) {
            System.out.println(e.id + " " + e.name + " " + e.salary);
        }
    }
}
`
                ]
              }
            ],
            intermediate: [
              {
                content: `This interface is present in java.lang package,It contain the only one method compareTo() <br></br>

<h3>Features :</h3>
• Present in java.lang package <br>
• Used for default (natural) sorting<br>
• Contains only one method:<br>
• public int compareTo(Object obj)<br>
• Affects the original class<br>
• Used when only one sorting logic is needed<br>
• Affects the original class<br>
• Used when only one sorting logic is needed<br><br>

<h3> Public int compareTo(Object obj) </h3>

<h3>Example- obj1.compareTo(obj2) </h3>
•return 1 if obj1 is greater than obj2 // 1 >2 =>> 1 <br>
•return -1 if obj1 is less than obj2 // 1<2 =>> -1 <br>
•return 0 if obj1 & obj2 are equal // 1=2  =>> 0<br>`,
                codeExamples: [`
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Main implements Comparable<Main> {

    private int id;
    private String name;
    private int salary;

    public Main(int id, String name, int salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getSalary() {
        return salary;
    }

    // Comparable: sort by salary
    @Override
    public int compareTo(Main e) {
        return this.salary - e.salary;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + "]";
    }

    public static void main(String[] args) {

        ArrayList<Main> list = new ArrayList<>();
        list.add(new Main(101, "ram", 9000));
        list.add(new Main(102, "ashok", 3000));
        list.add(new Main(103, "ajay", 8000));

        // Sort by salary
        Collections.sort(list);
        System.out.println("Sorting by Salary:");
        for (Main e : list) {
            System.out.println(e);
        }

        // Sort by name
        Collections.sort(list, new Comparator<Main>() {
            @Override
            public int compare(Main e1, Main e2) {
                return e1.getName().compareTo(e2.getName());
            }
        });
        System.out.println("Sorting by Name:");
        for (Main e : list) {
            System.out.println(e);
        }

        // Sort by id
        Collections.sort(list, new Comparator<Main>() {
            @Override
            public int compare(Main e1, Main e2) {
                return e1.getId() - e2.getId();
            }
        });
        System.out.println("Sorting by Id:");
        for (Main e : list) {
            System.out.println(e);
        }
    }
}
`]


              }
            ]
          },
          {
            id: 'comparabtor',
            name: 'Comparator ',
            beginner: [
              {
                content: `Comparator is an interface in Java used to define <b>custom sorting logic</b> for objects.<br><br>

<h3>Simple Features :</h3>
• It is implemented outside the class.<br>
• Allows sorting in multiple ways (by id, name, salary, etc.).<br>
• Does not modify the original class.<br>
• Uses the <b>compare()</b> method to compare two objects.<br>
• Can be used with Collections.sort() or Arrays.sort().<br>
`,

                codeExamples: [
                  `
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Employee {
    int id;
    String name;
    int salary;

    Employee(int id, String name, int salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Comparator to sort by name
    static Comparator<Employee> nameComparator = new Comparator<Employee>() {
        public int compare(Employee e1, Employee e2) {
            return e1.name.compareTo(e2.name); // sort alphabetically by name
        }
    };

    public static void main(String[] args) {
        ArrayList<Employee> list = new ArrayList<>();

        list.add(new Employee(101, "Ram", 9000));
        list.add(new Employee(102, "Ashok", 3000));
        list.add(new Employee(103, "Ajay", 8000));

        // Sort by name using Comparator
        Collections.sort(list, nameComparator);

        for (Employee e : list) {
            System.out.println(e.id + " " + e.name + " " + e.salary);
        }
    }
}
`
                ]
              }
            ]

            ,
            intermediate: [
              {
                content: `We can use comparator to define our own sorting (customized sorting order) ,It present in java.util package. <br></br>

<h3>it defines 2 methods- :</h3>
1. Public int compare(Object obj1, Object obj2) 
2. Public Boolean equals(); <br

• Whenever we are implementing the comparator interface, compulsory we should provide the 
  implementation for compare() method.<br>
• Implementing the equals method is optional, because it is already available in every java class from 
  object class. <br><br>

<h3>Features :</h3>
• It is used when we do not want to change the original class<br>
• It allows multiple sorting logics (by name, salary, id, etc.)<br>
• It provides the compare() method<br><br>

<h3> When to Use Comparator? </h3>
• When you need custom sorting<br>
• When class does not implement Comparable<br>
• When sorting logic should be separate from the class`,
                codeExamples: [
                  `
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Employee {

    int id;
    String name;
    int salary;

    Employee(int id, String name, int salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Comparator to sort by salary
    static Comparator<Employee> salaryComparator = new Comparator<Employee>() {
        public int compare(Employee e1, Employee e2) {
            return e1.salary - e2.salary;
        }
    };

    public static void main(String[] args) {

        ArrayList<Employee> list = new ArrayList<>();

        list.add(new Employee(101, "Ram", 9000));
        list.add(new Employee(102, "Ashok", 3000));
        list.add(new Employee(103, "Ajay", 8000));

        Collections.sort(list, salaryComparator);

        for (Employee e : list) {
            System.out.println(e.id + " " + e.name + " " + e.salary);
        }
    }
}

  `
                ]

              }
            ]
          },
          {
            id: 'differnce bet comparable & comparator',
            name: 'Comparable Vs Comparator ',
            beginner: [
              {
                content: `In Java, sorting can be done in two ways: <b>Comparable</b> and <b>Comparator</b>.<br><br>


<h3> When to Use:</h3>
<ul>
<li>Use <b>Comparable</b> when your class has a <i>natural sorting</i> (like sorting numbers, names).</li><br>
<li>Use <b>Comparator</b> when you want <i>different ways to sort</i> the same class (by id, salary, name, etc.).</li>
</ul>
`,
                codeExamples: []
              }
            ]
            ,
            intermediate: [
              {
                content: `Comparable is used for natural/default sorting by modifying the class, while Comparator is used for customized sorting without modifying the class.<br></br>

<h3> Comparable Vs Comparator :</h3>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Comparable vs Comparator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            padding: 20px;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        table {
            width: 90%;
            margin: auto;
            border-collapse: collapse;
            background-color: #fff;
        }
        th, td {
            border: 1px solid #999;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #2c3e50;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<table>
    <tr>
        <th>Comparable</th>
        <th>Comparator</th>
    </tr>
    <tr>
        <td>Provides single sorting sequence</td>
        <td>Provides multiple sorting sequences</td>
    </tr>
    <tr>
        <td>Sorts using one field (id or name or salary)</td>
        <td>Sorts using multiple fields</td>
    </tr>
    <tr>
        <td>Modifies the original class</td>
        <td>Does not modify the original class</td>
    </tr>
    <tr>
        <td>Uses compareTo() method</td>
        <td>Uses compare() method</td>
    </tr>
    <tr>
        <td>Present in java.lang package</td>
        <td>Present in java.util package</td>
    </tr>
    <tr>
        <td>Used for default (natural) sorting</td>
        <td>Used for customized sorting</td>
    </tr>
</table>

</body>
</html>
`,
                codeExamples: []

              }
            ]
          }
        ]

      },
      {
        id: 'Internal working of HashSet and HashMap',
        name: 'Internal working of HashSet and HashMap',
        topics: [
          {
            id: 'HashSet Internally works? ',
            name: 'HashSet Internally works?   ',
            beginner: [
              {
                content: `Each and every element in set is unique. So that there is no duplicate element in set. So In Java, if we 
want to add element in set then write a code like this..<br></br>

HashSet in Java is a popular collection class that implements the Set interface, backed by a HashMap,

It uses a hashing mechanism to store its elements, ensuring that no duplicates are stored and providing 
constant-time performance for basic operations like add, remove, and contains .<br></br>



`,

                codeExamples: [
                  `
package com.pankaj;

import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {

        HashSet hs = new HashSet();

        hs.add(3);
        hs.add("ram");
        hs.add("Udgir");
        hs.add(3);        // Duplicate not allowed
        hs.add("Udgir");  // Duplicate not allowed

        System.out.println(hs);
    }
}


`
                ]
              }
            ],
            intermediate: [
              {
                content: `
<h3>Internal Working of HashSet:</h3>
<h3>Backed by HashMap:</h3>
•Internally, HashSet uses a HashMap to store its elements. Each element in the HashSet is stored as a 
 key in the HashMap, with a constant dummy value (e.g., Boolean.TRUE).<br><br>

<h3>Hashing: </h3>
•When an element is added to the HashSet, its hash code is computed using the hashCode() method. 
 The hash code is then used to determine the bucket location in the HashMap.<br><br>

<h3>Buckets: </h3>
•The HashMap consists of an array of buckets. Each bucket can hold multiple entries (key-value 
 pairs) that have the same hash code (collisions are handled using a linked list or a balanced tree).<br><br>

<h3>Adding Elements:  </h3>
•When adding an element, HashSet checks if the element is already present by computing its hash  
 code and comparing it with existing keys in the corresponding bucket.<br>
•If the element is not present, it is added to the HashMap as a key with a dummy value.<br><br>

<h3>Removing Elements: </h3>
•When removing an element, HashSet computes the hash code of the element and removes the 
 corresponding entry (key) from the HashMap.<br><br>

<h3>Checking for Containment: : </h3>
•When checking if an element is present, HashSet computes the hash code of the element and checks 
 the corresponding bucket in the HashMap for the key. <br>

 `,
                codeExamples: [`package com.arraylist;

import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {

        HashSet<String> set = new HashSet<>(); // Creating a HashSet

        // Adding elements
        set.add("Hello");
        set.add("Pankaj");
        set.add("Java");
        set.add("Pankaj"); // Duplicate, will not be added

        // Displaying elements
        System.out.println("HashSet: " + set);
    }
}
`]


              },
              {
                content: `

•Now what happen internally when you pass duplicate element in set then add () method of set 
 object, it will return false and do not add to hashset as element is already present. But main problem 
 is arising that how it return false, here is the answer. <br><br>


<h3>When you open hashset implementation of add()method in Java API’s you will find the following 
 code-</h3>

public static void main(String[] args) { <br>
public class HashSet <E> extends AbstractSet<E> implements Set<E>, clonable java.io.serializable{ <br>
 private transient Hashmap<E, Object> Map; <br>
 /* dummy value associate with object in map */ <br>
 
 private static final object Present= new object(); <br>
  
 public HashSet(){  <br>
   Map= new Hashmap<>(); <br>
 //some code, other method in hashset
 }<br> 
 
 public Boolean add (E e) { <br>
  return map. Put(e, PRESENT)==null; <br>
 } <br><br>

• We are achieving uniqueness in set, internally java through hashmap. Whenever you create the object 
  of hashset it will create the object of hashmap as see in above. <br>

• As we know, in hashmap each key is unique. We do in set is that we pass argument in add(Element E) 
 that is E as key in hashmap, now we need to associate some value to key, so what java developer did 
 to pass dummy value that is (new Object()); which is referred by object reference PRESENT.  <br>

• So actually when you are adding line in hashset like hashset.add(3) what java internally is that it will 
 put that element as E here as 3 key in hashmap and some dummy value that object is passed as value 
 to key.<br><br>

<h3>If you see code of hashmap put(K k, value v) method, you will find something like this</h3>

public v put (K Key, V value){<br>
//some code <br>
} <br><br>


<h3>The main point is that .put(key,value) will return </h3>
1. Null, if key is unique and added to map. <br>
2. Old value of key, if key is duplicate. <br>

<h3>So in Hashset add() method, we check return value of map.put(key,value) method will null value i.e. </h3>

public Boolean add(E e){  <br>
// code here <br>
}<br>

So If Map.put(key,value) return null, then map.put(e,PRESENT)==null, then 
map.put(e,PRESENT)==null will return true & element added to hashset. <br></br>
  
So If Map.put(key,value) return old value of key, then map.put(e,PRESENT)==null, then 
map.put(e,PRESENT)==null will return false & element is not added to hashset.
`,
                codeExamples: []


              }
            ]
          },
          {
            id: 'HashMap Internally works?',
            name: 'HashMap Internally works? ',
            beginner: [
              {
                content: `If you want to represent group of objects as key-value pair then you should go for map. <br>
• HashMap is a popular implementation of the Map interface in Java. <br>
• It stores key-value pairs and provides a means of efficient retrieval, insertion, and deletion using a 
• technique called hashing. <br>
• Let's dive into the internal working of HashMap: <br>

`,

                codeExamples: [
                  `
package com.code_with_pankaj;

import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {

        // Creating a HashMap
        HashMap<String, Integer> map = new HashMap<>();

        // Adding elements
        map.put("Sheru", 1);
        map.put("Pankaj", 2);
        map.put("Dheeraj", 3);

        // Getting values
        System.out.println("Value for key 'Pankaj': " + map.get("Pankaj"));
        System.out.println("Value for key 'Dheeraj': " + map.get("Dheeraj"));

        // Checking key presence
        System.out.println("Does the map contain key 'Sheru'? " + map.containsKey("Sheru"));

        // Removing an element
        map.remove("Dheeraj");

        // Printing final HashMap
        System.out.println("Map after removing 'Dheeraj': " + map);
    }
}
`
                ]
              }
            ]

            ,
            intermediate: [
              {
                content: `
<h3>Key Concepts: :</h3>
<h3>1.Hashing: </h3>
 Hashing transforms the key using a hash function to produce a hash code. This hash code is then 
 used to determine the index (or bucket) where the entry should be stored in an array.<br></br>
<h3>2.Buckets:</h3> 
 HashMap uses an array of nodes, where each node is an instance of an inner class Node (which 
 ximplements the Map.Entry interface). Each element of the array is a bucket. Multiple entries with the 
 xsame hash code are stored in a linked list or a balanced tree within the bucket.<br></br>

<h3>3. Node Structure:</h3>
• Each entry in the HashMap is represented as a Node object, which contains: <br></br>
1. The key <br></br>
2. The value <br></br>
3. The hash code of the key <br></br>
4. A reference to the next node (to handle collisions) <br></br>

<h3>Operations: </h3><br></br>
<h3>Insertion:</h3> 
•The put method calculates the hash code of the key and determines the bucket index.<br></br> 
•If the bucket is empty, the new key-value pair is placed in that bucket. <br></br>
•If the bucket already has one or more nodes, the key is compared with the existing keys using the 
 equals method.<br></br> 
• If a match is found, the value is updated. <br></br>
• If no match is found, the new node is added to the bucket, either as a linked list node or as a tree 
 node (if the number of nodes exceeds a certain threshold).<br></br> 

 <h3>Get Operation: </h3> 
  <h3>Retrieval:  </h3>
•The get method calculates the hash code of the key and determines the bucket index.<br></br> 
•It then traverses the bucket to find the node with the matching key using the equals method. <br></br>
•The value associated with the key is returned if found. <br></br> 

<h3>Handling Collisions:  </h3> 
•Collisions occur when multiple keys generate the same hash code. <br></br> 
•HashMap handles collisions using a linked list or a balanced tree (for better performance when the 
 number of nodes in a bucket becomes large).  <br></br>

 <h3>Rehashing:   </h3> 
•When the number of entries exceeds the threshold (determined by the load factor and current 
 capacity), the HashMap rehashes its entries into a new array of a larger capacity. <br></br> 
•This process involves recalculating the bucket index for each entry and placing it into the new array.  <br></br>

`,
                codeExamples: [`
  package com.code_with_pankaj;

import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {

        // Creating a HashMap
        HashMap<String, Integer> hm = new HashMap<>();

        // Adding elements to the HashMap
        hm.put("Pankaj", 10);
        hm.put("Patil", 20);
        hm.put("Udgir", 30);
        hm.put("Pankaj", 50); // Updates value for key "Pankaj"

        // Display the HashMap
        System.out.println("HashMap: " + hm);

        // Getting the value associated with a key
        int value = hm.get("Patil");
        System.out.println("Value for key 'Patil': " + value);

        // Checking if a key exists
        boolean hasKey = hm.containsKey("Udgir");
        System.out.println("HashMap contains key 'Udgir': " + hasKey);

        // Checking if a value exists
        boolean hasValue = hm.containsValue(50);
        System.out.println("HashMap contains value 50: " + hasValue);

        // Removing an element
        hm.remove("Patil");
        System.out.println("HashMap after removing key 'Patil': " + hm);

        // Checking if the HashMap is empty
        boolean isEmpty = hm.isEmpty();
        System.out.println("Is HashMap empty? " + isEmpty);

        // Getting the size of the HashMap
        int size = hm.size();
        System.out.println("Size of HashMap: " + size);

        // Iterating over the HashMap
        System.out.println("Iterating over HashMap:");
        for (HashMap.Entry<String, Integer> entry : hm.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }

        // Clearing all entries in the HashMap
        hm.clear();
        System.out.println("HashMap after clear(): " + hm);
    }
}

  `]

              },
              {
                content: `
<h3>Code_Explanation:</h3>
<h3>1.Creating a HashMap:</h3>
• HashMap<String, Integer> hm = new HashMap<>(); 
  Creates a HashMap instance that maps String keys to Integer values.<br></br>

  <h3>2. Adding Elements: </h3> 
• hm.put("Pankaj", 10); adds a key-value pair to the map.<br></br>
• If the key already exists, the new value will replace the old value (hm.put("Pankaj", 50);). 

<h3>4.Checking for Keys and Values:</h3> 
• hm.containsKey("Udgir"); checks if the key "Udgir" exists in the map. <br></br>
•hm.containsValue(50); checks if the value 50 exists in the map.<br></br>


<h3>5. Removing an Element: </h3> 
• hm.remove("Patil"); removes the key-value pair for the key "Patil".<br></br>
 

<h3>6. Checking if Empty: </h3> 
•hm.isEmpty(); checks if the map is empty. <br></br>


<h3>7.Getting the Size:  </h3> 
•  hm.size(); returns the number of key-value pairs in the map. <br></br>
 

<h3>8.Iterating Over the Map:  </h3> 
•  A for loop iterates over the entries in the map and prints each key-value pair.<br></br>

<h3>9. Clearing the Map: </h3> 
•hm.clear(); removes all entries from the map. <br></br>

•These methods provide a comprehensive overview of how you can interact with and manipulate a 
HashMap in Java. <br></br>

<h3>How hashCode() and equals() methods works into HashMap?  </h3><br></br>
 
•In Java, the hashCode() and equals() methods play crucial roles in the functioning of a HashMap.  <br></br> 
•They determine how objects are stored and retrieved in a HashMap. <br></br>

<h3>hashCode() method:</h3>
• hashCode method is used to get the hashcode of every objects. <br></br> 
• Purpose: The hashCode() method returns an integer hash code value for an object, which is used by 
  the HashMap to determine the bucket location for storing the key-value pair.  <br></br>
• Hashing: The hash code value helps in reducing collisions by distributing objects more evenly 
  across the buckets.<br></br>

 <h3>equals() method: equals method is used to check that 2 objects are equal or not.  
 </h3> 
•This method is provided by Object class,HashMap uses equals() to compare the key whether they are equal or not.  <br></br> 
•If equals() method return true, they are equal otherwise not equal.<br></br>
•Purpose: The equals() method determines if two objects are equal. In a HashMap, it is used to 
 compare keys for equality to handle collisions.
•Comparison: When a hash code collision occurs (i.e., two keys have the same hash code), the 
 equals() method is used to check if the keys are actually equal.<br></br> 

<h3>How They Work Together in HashMap: </h3>
<h3>1. Adding Elements (put method) </h3> 
•When you add a key-value pair using the put method, HashMap calculates the hash code of the key 
 using hashCode(). <br></br> 
• This hash code is used to find the appropriate bucket in the hash table.<br></br>
• If Bucket => Empty, then key-value pair is added directly. <br></br> 
• If Bucket => contains one or more elements (collision occurs), equals() is used to check if the 
 key already exists.<br></br> 
• If key => Exists, then value is updated. <br></br> 
• If Key => Not Exists, then new entry is added.<br></br> 

<h3>2. Retrieving Elements (get method):  </h3> 
• When you retrieve a value using the get method, HashMap calculates the hash code of the key to 
 find the bucket. <br></br> 
•Within the bucket, it uses equals() to find the exact key and retrieve the associated value.  <br></br>

`,
                codeExamples: [`package com.code_with_pankaj;

import java.util.HashMap;

public class Person {

    private String name;
    private int id;

    // Constructor
    public Person(String name, int id) {
        this.name = name;
        this.id = id;
    }

    @Override
    public int hashCode() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;

        Person p = (Person) obj;
        return id == p.id && name.equals(p.name);
    }

    @Override
    public String toString() {
        return name + " (ID: " + id + ")";
    }

    // MAIN METHOD IS HERE 
    public static void main(String[] args) {

        HashMap<Person, String> map = new HashMap<>();

        Person p1 = new Person("Pankaj", 1);
        Person p2 = new Person("Sheru", 2);
        Person p3 = new Person("Dheeraj", 3);
        Person p4 = new Person("Pankaj", 1); // same as p1

        map.put(p1, "Developer");
        map.put(p2, "Manager");
        map.put(p3, "Designer");
        map.put(p4, "Architect"); // replaces p1 value

        System.out.println("Person: " + p1 + ", Role: " + map.get(p1));
        System.out.println("Person: " + p2 + ", Role: " + map.get(p2));
        System.out.println("Person: " + p3 + ", Role: " + map.get(p3));
        System.out.println("Person: " + p4 + ", Role: " + map.get(p4));

        System.out.println("HashMap: " + map);
    }
}
`]

              },
              {
                content: `
<h3>Code_Explanation:</h3>
<h3>1. Person Class: </h3>
• Overrides hashCode() to return a simplified hash code based on the id. <br></br>
• Overrides equals() to compare name and id for equality.  <br></br>

<h3>2. HashMap: </h3> 
•  A HashMap of Person objects as keys and their roles as values is created. <br></br>
•  When adding p4, it replaces the value for p1 since p1 and p4 are considered equal based on equals().<br></br>

<h3>Key Points: </h3> 
•hashCode() ensures that keys are distributed across the hash table efficiently. <br></br>
•equals() ensures that keys are compared correctly to handle collisions. <br></br>

• By understanding the roles of hashCode() and equals(), you can effectively manage and manipulate 
collections in a HashMap. <br></br>
 


<h3>How to Calculate Index Internally? </h3>
•In Java's HashMap, the index for storing and retrieving elements is calculated using the following steps:<br></br> 

<h3>Compute Hash Code: </h3>
• The hashCode() method of the key object is called to generate an integer hash code. <br></br> 
• Example: int hashCode = key.hashCode();<br></br>

<h3>Apply Hash Function:  </h3>
• The hash code is processed using a hash function to distribute the keys more uniformly.<br></br> 
• Example: int hash = hashCode ^ (hashCode >>> 16); <br></br>
• This step reduces collisions by spreading the hash codes across the buckets.<br></br>

<h3>Calculate Index:  </h3>
• The index in the array (bucket) is calculated using the bitwise AND operator with the array size 
  minus one. <br></br> 
•  Example: int index = (n - 1) & hash; (where n is the length of the array, typically a power of two).  <br></br>
• This operation ensures that the index falls within the bounds of the array. <br></br>


• Put( K k, V v)     // Here put is the method having key and value pair <br></br>
• hash(k)  -> hash(Pankaj) -> 73589640 <br></br> 
• index= hash & (n-1)    Here index=2 .<br></br> 
• So Pankaj will be stored at 2nd position.  <br></br> 
• Next time again I get the 2nd index or position then what will happen? <br></br> 
• It will store it at 2nd and uses the linked list as shown in fig. <br></br> 
•After than I get the 6th index so Patil will be stored at 6th position then next time get the index 10th then 
 Udgir will be placed at 10th positon. <br></br>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>HashMap Internal Working Diagram</title>

<style>
/* ===== HashMap Diagram Scoped CSS ===== */
.hashmap-diagram {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    padding: 20px;
    border-radius: 10px;
}

.hashmap-diagram h2 {
    text-align: center;
    margin-bottom: 25px;
}

.hashmap-diagram .container {
    display: flex;
    justify-content: center;
    gap: 15px;
}

/* Bucket */
.hashmap-diagram .bucket {
    border: 2px solid #333;
}

.hashmap-diagram .bucket div {
    width: 50px;
    height: 28px;
    border-bottom: 1px solid #333;
    text-align: center;
    line-height: 28px;
    font-weight: bold;
}

.hashmap-diagram .bucket .active {
    background: #c8e6c9;
}

/* Arrows from index */
.hashmap-diagram .arrows {
    display: flex;
    flex-direction: column;
}

.hashmap-diagram .arrow-space {
    height: 28px;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
}

/* Nodes */
.hashmap-diagram .nodes {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-left: 10px;
}

.hashmap-diagram .label {
    font-weight: bold;
}

.hashmap-diagram .node-row {
    display: flex;
    align-items: center;
    gap: 10px;
}

.hashmap-diagram .node {
    display: flex;
    border: 2px solid #333;
}

.hashmap-diagram .cell {
    padding: 6px 12px;
    border-right: 1px solid #333;
    background: #64b5f6;
    color: #000;
}

.hashmap-diagram .cell.key {
    background: #1e88e5;
    color: #fff;
    font-weight: bold;
}

.hashmap-diagram .cell:last-child {
    border-right: none;
}

.hashmap-diagram .chain-arrow {
    font-size: 22px;
    font-weight: bold;
}
</style>
</head>

<body>

<div class="hashmap-diagram">

<h2>HashMap Internal Working (Index → Bucket → Node)</h2>

<div class="container">

    <!-- Bucket -->
    <div class="bucket">
        <div>0</div>
        <div>1</div>
        <div class="active">2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div class="active">6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div class="active">10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
    </div>

    <!-- Arrows -->
    <div class="arrows">
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space">➡</div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space">➡</div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space">➡</div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
        <div class="arrow-space"></div>
    </div>

    <!-- Nodes -->
    <div class="nodes">

        <div class="label">Index 2 → Collision (LinkedList)</div>
        <div class="node-row">
            <div class="node">
                <div class="cell key">Pankaj</div>
                <div class="cell">23164178</div>
                <div class="cell">10</div>
                <div class="cell">Null</div>
            </div>
            <div class="chain-arrow">→</div>
            <div class="node">
                <div class="cell key">Pankaj</div>
                <div class="cell">23164512</div>
                <div class="cell">50</div>
                <div class="cell">Null</div>
            </div>
        </div>

        <div class="label">Index 6</div>
        <div class="node-row">
            <div class="node">
                <div class="cell key">Patil</div>
                <div class="cell">23166189</div>
                <div class="cell">20</div>
                <div class="cell">Null</div>
            </div>
        </div>

        <div class="label">Index 10</div>
        <div class="node-row">
            <div class="node">
                <div class="cell key">Udgir</div>
                <div class="cell">16161230</div>
                <div class="cell">30</div>
                <div class="cell">Null</div>
            </div>
        </div>

    </div>

</div>
</div>

</body>
</html>

<h3> How get() method works here? </h3>
•Now let’s try some get method to get a value .get(K key) method is used to get a value by its key.  <br></br> 

•If you don’t know the key then it is not possible to fetch a value. 

`,
                codeExamples: []

              }
            ]
          },

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
  }

]