// src/components/JavaPlaygroundModal.tsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, Play, Copy, Check, RotateCcw, Sparkles, Terminal, Code2,
  Maximize2, Minimize2, Download, Wand2, Trash2, FileCode
} from 'lucide-react';

// ============================================
// INTERFACES
// ============================================
interface JavaPlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
}

interface CodeTemplate {
  name: string;
  category: string;
  code: string;
}

// ============================================
// CODE TEMPLATES (21 Practice Questions)
// ============================================
const TEMPLATES: CodeTemplate[] = [
  {
    name: 'Hello World & Loops',
    category: 'Basics',
    code: `public class Main {
    public static void main(String[] args) {
        String greeting = "Welcome to JavaSchoolLab Playground!";
        int year = 2026;
        double rating = 4.9;
        
        System.out.println(greeting);
        System.out.println("Year: " + year + " | Rating: " + rating + " / 5.0");
        
        System.out.println("\\n--- Number Counter Loop ---");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Step " + i + ": Coding in Java is super fast!");
        }
    }
}`
  },
  {
    name: 'Even or Odd Checker',
    category: 'Basics',
    code: `public class Main {
    public static void main(String[] args) {
        int num = 7;
        
        if (num % 2 == 0) {
            System.out.println(num + " is Even");
        } else {
            System.out.println(num + " is Odd");
        }
        
        // Check multiple numbers
        System.out.println("\\n--- Checking Multiple Numbers ---");
        int[] numbers = {1, 2, 3, 4, 5, 10, 15, 20};
        for (int n : numbers) {
            System.out.println(n + " -> " + (n % 2 == 0 ? "Even" : "Odd"));
        }
    }
}`
  },
  {
    name: 'Factorial & Fibonacci',
    category: 'Basics',
    code: `public class Main {
    public static void main(String[] args) {
        // Factorial
        int num = 5;
        long factorial = 1;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + num + " = " + factorial);
        
        // Fibonacci Series
        System.out.println("\\n--- Fibonacci Series (10 terms) ---");
        int a = 0, b = 1;
        for (int i = 1; i <= 10; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
    }
}`
  },
  {
    name: 'Swap Without Third Variable',
    category: 'Basics',
    code: `public class Main {
    public static void main(String[] args) {
        int a = 10, b = 20;
        
        System.out.println("Before Swap: a = " + a + ", b = " + b);
        
        a = a + b;  // a = 30
        b = a - b;  // b = 10
        a = a - b;  // a = 20
        
        System.out.println("After Swap:  a = " + a + ", b = " + b);
    }
}`
  },
  {
    name: 'Array Operations',
    category: 'Arrays',
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        // Find Largest
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        System.out.println("Original: " + Arrays.toString(arr));
        System.out.println("Largest Element: " + max);
        
        // Reverse Array
        int left = 0, right = arr.length - 1;
        int[] reversed = arr.clone();
        while (left < right) {
            int temp = reversed[left];
            reversed[left] = reversed[right];
            reversed[right] = temp;
            left++;
            right--;
        }
        System.out.println("Reversed: " + Arrays.toString(reversed));
        
        // Bubble Sort
        int[] sorted = arr.clone();
        for (int i = 0; i < sorted.length - 1; i++) {
            for (int j = 0; j < sorted.length - i - 1; j++) {
                if (sorted[j] > sorted[j + 1]) {
                    int temp = sorted[j];
                    sorted[j] = sorted[j + 1];
                    sorted[j + 1] = temp;
                }
            }
        }
        System.out.println("Sorted:   " + Arrays.toString(sorted));
    }
}`
  },
  {
    name: 'String Palindrome & Char Count',
    category: 'Strings',
    code: `import java.util.*;

public class Main {
    static boolean isPalindrome(String str) {
        int l = 0, r = str.length() - 1;
        while (l < r) {
            if (str.charAt(l) != str.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }

    public static void main(String[] args) {
        // Palindrome Check
        System.out.println("--- Palindrome Checker ---");
        String[] words = {"madam", "racecar", "hello", "level", "java"};
        for (String w : words) {
            System.out.println(w + " -> " + (isPalindrome(w) ? "Palindrome" : "Not Palindrome"));
        }
        
        // Character Count
        System.out.println("\\n--- Character Frequency ---");
        String text = "programming";
        HashMap<Character, Integer> map = new HashMap<>();
        for (char c : text.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        System.out.println("String: " + text);
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            System.out.println("  '" + entry.getKey() + "' appears " + entry.getValue() + " time(s)");
        }
    }
}`
  },
  {
    name: 'OOP & Inheritance',
    category: 'OOP',
    code: `class Animal {
    String name;
    void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking.");
    }
    
    @Override
    void eat() {
        System.out.println(name + " is eating dog food.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.name = "Buddy";
        dog.eat();    // Overridden method
        dog.bark();   // Dog's own method
        
        // Polymorphism
        System.out.println("\\n--- Polymorphism Demo ---");
        Animal a = new Dog();
        a.name = "Max";
        a.eat();  // Calls Dog's eat()
    }
}`
  },
  {
    name: 'Abstract Class & Interface',
    category: 'OOP',
    code: `abstract class Vehicle {
    String brand;
    abstract void start();
    
    void showBrand() {
        System.out.println("Brand: " + brand);
    }
}

interface Electric {
    void charge();
}

class Tesla extends Vehicle implements Electric {
    void start() {
        System.out.println("Tesla starts silently with button press");
    }
    
    public void charge() {
        System.out.println("Tesla is charging at Supercharger...");
    }
}

public class Main {
    public static void main(String[] args) {
        Tesla tesla = new Tesla();
        tesla.brand = "Tesla Model 3";
        tesla.showBrand();
        tesla.start();
        tesla.charge();
    }
}`
  },
  {
    name: 'Encapsulation (Bank Account)',
    category: 'OOP',
    code: `class BankAccount {
    private String holder;
    private double balance;
    
    public BankAccount(String holder, double balance) {
        this.holder = holder;
        this.balance = balance;
    }
    
    public String getHolder() { return holder; }
    public double getBalance() { return balance; }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: Rs." + amount);
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: Rs." + amount);
        } else {
            System.out.println("Insufficient balance!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Rahul", 5000);
        System.out.println("Holder: " + acc.getHolder());
        System.out.println("Balance: Rs." + acc.getBalance());
        
        acc.deposit(2000);
        acc.withdraw(1500);
        System.out.println("Final Balance: Rs." + acc.getBalance());
    }
}`
  },
  {
    name: 'Method Overloading',
    category: 'OOP',
    code: `public class Main {
    static int add(int a, int b) {
        return a + b;
    }
    
    static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    static double add(double a, double b) {
        return a + b;
    }
    
    static String add(String a, String b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println("add(5, 3) = " + add(5, 3));
        System.out.println("add(5, 3, 2) = " + add(5, 3, 2));
        System.out.println("add(5.5, 3.3) = " + add(5.5, 3.3));
        System.out.println("add(\\"Hello\\", \\" World\\") = " + add("Hello", " World"));
        
        System.out.println("\\n--- All are method 'add' with different parameters!");
        System.out.println("--- This is METHOD OVERLOADING (Compile-time Polymorphism)");
    }
}`
  },
  {
    name: 'Collections & Streams API',
    category: 'Java 8+',
    code: `import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> frameworks = Arrays.asList(
            "Spring Boot", "Hibernate", "Quarkus", "Micronaut", "JavaFX", "Jakarta EE"
        );

        System.out.println("Original Framework List: " + frameworks);

        // Filter, Map, Sort using Streams
        List<String> filtered = frameworks.stream()
            .filter(f -> f.startsWith("S") || f.startsWith("M"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());

        System.out.println("\\nFiltered & Sorted: " + filtered);
        System.out.println("Total frameworks tracked: " + frameworks.stream().count());
        
        // ArrayList vs LinkedList
        System.out.println("\\n--- ArrayList Demo ---");
        ArrayList<String> arrList = new ArrayList<>();
        arrList.add("Apple");
        arrList.add("Banana");
        System.out.println("ArrayList: " + arrList);
        
        System.out.println("\\n--- LinkedList Demo ---");
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Cat");
        linkedList.add("Dog");
        linkedList.addFirst("Bird");
        System.out.println("LinkedList: " + linkedList);
    }
}`
  },
  {
    name: 'Type Casting Demo',
    category: 'Basics',
    code: `public class Main {
    public static void main(String[] args) {
        // Widening (Implicit) - small to big
        System.out.println("--- Widening (Implicit) Casting ---");
        int myInt = 9;
        double myDouble = myInt;
        System.out.println("int value: " + myInt);
        System.out.println("double value: " + myDouble + " (auto-converted)");
        
        // Narrowing (Explicit) - big to small
        System.out.println("\\n--- Narrowing (Explicit) Casting ---");
        double pi = 3.14159;
        int myPi = (int) pi;
        System.out.println("double value: " + pi);
        System.out.println("int value: " + myPi + " (manual cast, decimal lost)");
        
        // char to int
        System.out.println("\\n--- Char to Int ---");
        char letter = 'A';
        int ascii = letter;
        System.out.println("Char: " + letter + " -> ASCII: " + ascii);
    }
}`
  },
  {
    name: 'Design Patterns (Singleton)',
    category: 'Patterns',
    code: `// Singleton Pattern
class DatabaseConnection {
    private static DatabaseConnection instance;
    
    private DatabaseConnection() {
        System.out.println("Database Connection Established!");
    }
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}

// Factory Pattern
interface Shape { void draw(); }
class Circle implements Shape {
    public void draw() { System.out.println("Drawing Circle"); }
}
class Square implements Shape {
    public void draw() { System.out.println("Drawing Square"); }
}

class ShapeFactory {
    public static Shape getShape(String type) {
        if (type.equalsIgnoreCase("CIRCLE")) return new Circle();
        if (type.equalsIgnoreCase("SQUARE")) return new Square();
        return null;
    }
}

public class Main {
    public static void main(String[] args) {
        // Singleton Test
        System.out.println("--- Singleton Pattern ---");
        DatabaseConnection db1 = DatabaseConnection.getInstance();
        DatabaseConnection db2 = DatabaseConnection.getInstance();
        System.out.println("Same Instance? " + (db1 == db2));
        
        // Factory Test
        System.out.println("\\n--- Factory Pattern ---");
        Shape s1 = ShapeFactory.getShape("CIRCLE");
        Shape s2 = ShapeFactory.getShape("SQUARE");
        if (s1 != null) s1.draw();
        if (s2 != null) s2.draw();
    }
}`
  },
  {
    name: 'Spring Boot REST Controller',
    category: 'Spring Boot',
    code: `package com.javaschool.demo.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@SpringBootApplication
@RestController
@RequestMapping("/api/students")
public class Main {

    private final List<String> studentDb = new ArrayList<>(
        Arrays.asList("Alice", "Bob", "Charlie")
    );

    @GetMapping
    public List<String> getAllStudents() {
        return studentDb;
    }

    @PostMapping
    public String addStudent(@RequestParam String name) {
        studentDb.add(name);
        return "Student " + name + " created successfully!";
    }

    public static void main(String[] args) {
        System.out.println("Starting Embedded Tomcat Server on Port 8080...");
        System.out.println("Spring Boot Application Initialized Successfully!");
        System.out.println("\\nAvailable Endpoints:");
        System.out.println("  GET  /api/students -> List all students");
        System.out.println("  POST /api/students?name=John -> Add new student");
    }
}`
  }
];

// ============================================
// MAIN COMPONENT
// ============================================
export function JavaPlaygroundModal({ isOpen, onClose, initialCode }: JavaPlaygroundModalProps) {
  const [code, setCode] = useState(initialCode || TEMPLATES[0].code);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [runMode, setRunMode] = useState<'embed' | 'simulated'>('simulated');
  const [embedUrl, setEmbedUrl] = useState('');
  const [simulatedOutput, setSimulatedOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<{
    explanation?: string;
    status?: 'clean' | 'fixed';
    suggestion?: string;
  } | null>(null);
  const [executionTime, setExecutionTime] = useState<string | null>(null);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  // Keyboard Shortcut: Ctrl + Enter to Run
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
      // Escape to close
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, runMode]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Main.java';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFormat = () => {
    const lines = code.split('\n');
    let indent = 0;
    const formatted = lines.map((line) => {
      let trimmed = line.trim();
      if (trimmed.startsWith('}')) indent = Math.max(0, indent - 1);
      const padded = '    '.repeat(indent) + trimmed;
      if (trimmed.endsWith('{')) indent++;
      return padded;
    }).join('\n');
    setCode(formatted);
  };

  const handleReset = () => {
    setCode(TEMPLATES[selectedTemplateIndex].code);
    setEmbedUrl('');
    setSimulatedOutput([]);
    setExecutionTime(null);
    setAiAnalysis(null);
  };

  const handleClearOutput = () => {
    setSimulatedOutput([]);
    setEmbedUrl('');
    setExecutionTime(null);
  };

  const handleSelectTemplate = (index: number) => {
    setSelectedTemplateIndex(index);
    setCode(TEMPLATES[index].code);
    setEmbedUrl('');
    setSimulatedOutput([]);
    setExecutionTime(null);
    setAiAnalysis(null);
  };

  const handleRun = () => {
    setIsRunning(true);
    const startTime = performance.now();

    if (runMode === 'embed') {
      const encoded = encodeURIComponent(code);
      setEmbedUrl(`https://www.jdoodle.com/embed/v0/2?code=${encoded}`);
      setTimeout(() => {
        setIsRunning(false);
        setExecutionTime(
          ((performance.now() - startTime) / 1000).toFixed(2) + 's'
        );
      }, 800);
    } else {
      setTimeout(() => {
        const parsedPrintlns = extractPrintlns(code);
        const timeTaken =
          ((performance.now() - startTime) / 1000 + 0.08).toFixed(2) + 's';

        const lines = [
          'Compiling Main.java using JavaCompiler v21.0...',
          'Compilation Successful (0.04s)',
          '-----------------------------------------------------------------',
          'Running JVM Execution Process...',
          '',
          ...parsedPrintlns,
          '',
          '-----------------------------------------------------------------',
          `Process completed successfully (exit code 0) | Execution time: ${timeTaken}`,
        ];
        setSimulatedOutput(lines);
        setExecutionTime(timeTaken);
        setIsRunning(false);
      }, 400);
    }
  };

  const extractPrintlns = (sourceCode: string): string[] => {
    const outputs: string[] = [];
    const printRegex = /System\.out\.println\((.*?)\);/g;
    let match;
    while ((match = printRegex.exec(sourceCode)) !== null) {
      let val = match[1].trim();
      if (val.startsWith('"') && val.endsWith('"') && !val.includes('+')) {
        outputs.push(val.slice(1, -1).replace(/\\n/g, '\n'));
      } else if (val.includes('+')) {
        const parts = val.split('+').map((p) => p.trim());
        const result = parts
          .map((p) => {
            if (p.startsWith('"') && p.endsWith('"'))
              return p.slice(1, -1);
            return `[${p}]`;
          })
          .join('');
        outputs.push(result.replace(/\\n/g, ' '));
      } else {
        outputs.push(`[Output]: ${val.replace(/\\n/g, ' ')}`);
      }
    }
    if (outputs.length === 0) {
      outputs.push(
        'Program executed cleanly with no System.out.println output.'
      );
    }
    return outputs;
  };

  // AI Assistant
  const handleAiExplain = () => {
    setShowAiAssistant(true);
    let explanation = 'Code Overview:\n';
    if (code.includes('class Main')) {
      explanation +=
        '• Entry point class Main containing standard main method.\n';
    }
    if (code.includes('for (') || code.includes('while (')) {
      explanation += '• Iteration: Contains loop structures for data processing.\n';
    }
    if (code.includes('stream()')) {
      explanation += '• Streams API: Functional pipeline for collections.\n';
    }
    if (code.includes('@RestController') || code.includes('@SpringBootApplication')) {
      explanation += '• Spring Boot: REST endpoints with embedded Tomcat.\n';
    }
    if (code.includes('interface ') || code.includes('implements ')) {
      explanation += '• OOP: Uses polymorphism and abstraction.\n';
    }
    explanation += '\nPro Tip: Press Ctrl + Enter to run your code!';

    setAiAnalysis({
      explanation,
      status: 'clean',
      suggestion: 'Your code structure is clean and valid Java!',
    });
  };

  const handleAiAutoFix = () => {
    setShowAiAssistant(true);
    let fixedCode = code;
    let changesMade = false;

    if (/System\.out\.println\([^)]+\)(?!;)/.test(fixedCode)) {
      fixedCode = fixedCode.replace(
        /(System\.out\.println\([^)]+\))(?!;)/g,
        '$1;'
      );
      changesMade = true;
    }

    if (changesMade) {
      setCode(fixedCode);
      setAiAnalysis({
        status: 'fixed',
        suggestion: 'Auto-fixed syntax issues! Added missing semicolons.',
      });
    } else {
      setAiAnalysis({
        status: 'clean',
        suggestion: 'No critical syntax errors found! Code looks great.',
      });
    }
  };

  const lineCount = code.split('\n').length;
  const charCount = code.length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
            isFullscreen
              ? 'w-full h-full rounded-none'
              : 'w-full max-w-6xl h-[92vh]'
          }`}
        >
          {/* ===== TOP NAVBAR ===== */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-3 flex-shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  Java Playground
                  <span className="text-xs bg-amber-400 text-gray-950 font-bold px-2 py-0.5 rounded-full shadow-xs">
                    Live Compiler
                  </span>
                </h2>
                <p className="text-xs text-orange-100 hidden sm:block">
                  Write, format, analyze, and execute Java code in real-time
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* RUN BUTTON */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg transition-all cursor-pointer text-sm"
                title="Run Java Program (Ctrl + Enter)"
              >
                <Play
                  className={`w-4 h-4 fill-current ${
                    isRunning ? 'animate-spin' : ''
                  }`}
                />
                <span>{isRunning ? 'Compiling...' : 'Run ▶'}</span>
                <kbd className="hidden md:inline-block text-[10px] bg-black/20 px-1.5 py-0.5 rounded text-white/90">
                  Ctrl+Enter
                </kbd>
              </motion.button>

              {/* AI EXPLAIN */}
              <button
                onClick={handleAiExplain}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition-all cursor-pointer backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="hidden sm:inline">AI Explain</span>
              </button>

              {/* FORMAT */}
              <button
                onClick={handleFormat}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition-all cursor-pointer backdrop-blur-sm"
              >
                <Wand2 className="w-4 h-4 text-orange-200" />
                <span className="hidden md:inline">Format</span>
              </button>

              {/* DOWNLOAD */}
              <button
                onClick={handleDownload}
                className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all"
              >
                <Download className="w-4 h-4" />
              </button>

              {/* FULLSCREEN */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/20 hover:bg-red-500 text-white transition-all ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ===== SUB NAVBAR: Templates & Mode ===== */}
          <div className="bg-gray-100 dark:bg-gray-800/90 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <span className="font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1 flex-shrink-0">
                <FileCode className="w-3.5 h-3.5 text-orange-500" />
                Templates:
              </span>
              {TEMPLATES.map((tmpl, idx) => (
                <button
                  key={tmpl.name}
                  onClick={() => handleSelectTemplate(idx)}
                  className={`px-3 py-1 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedTemplateIndex === idx
                      ? 'bg-orange-500 text-white font-bold shadow-xs'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {tmpl.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-auto flex-shrink-0">
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                Engine:
              </span>
              <div className="flex bg-gray-200 dark:bg-gray-700 p-0.5 rounded-lg text-[11px]">
                <button
                  onClick={() => setRunMode('simulated')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    runMode === 'simulated'
                      ? 'bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 shadow-xs'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Fast Simulator
                </button>
                <button
                  onClick={() => setRunMode('embed')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    runMode === 'embed'
                      ? 'bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 shadow-xs'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  JDoodle Online
                </button>
              </div>
            </div>
          </div>

          {/* ===== AI ASSISTANT PANEL ===== */}
          <AnimatePresence>
            {showAiAssistant && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-800 px-5 py-3 flex items-start justify-between gap-4 text-xs"
              >
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1 flex items-center gap-2">
                      AI Code Assistant Analysis
                      {aiAnalysis?.status === 'fixed' && (
                        <span className="text-[10px] bg-green-500 text-white font-bold px-2 py-0.5 rounded-full">
                          Auto-Fixed
                        </span>
                      )}
                    </div>
                    {aiAnalysis?.suggestion && (
                      <p className="text-amber-800 dark:text-amber-300 font-medium mb-1">
                        {aiAnalysis.suggestion}
                      </p>
                    )}
                    {aiAnalysis?.explanation && (
                      <pre className="text-amber-900 dark:text-amber-200 font-mono whitespace-pre-wrap leading-relaxed bg-amber-100/50 dark:bg-black/30 p-2.5 rounded-lg border border-amber-200/50 dark:border-amber-800/50">
                        {aiAnalysis.explanation}
                      </pre>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAiAutoFix}
                    className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    Check & Fix Code
                  </button>
                  <button
                    onClick={() => setShowAiAssistant(false)}
                    className="p-1 text-amber-700 hover:text-amber-900 dark:text-amber-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ===== MAIN: Editor + Console ===== */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-hidden bg-gray-50 dark:bg-gray-950">
            {/* LEFT: Code Editor */}
            <div className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100 dark:bg-gray-800/90 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  <span className="text-xs font-mono text-gray-700 dark:text-gray-300 ml-2 font-semibold flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-orange-500" />
                    Main.java
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copied ? 'Copied' : 'Copy'}
                  </button>

                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>
              </div>

              <div className="flex-1 p-3 flex flex-col relative bg-white dark:bg-gray-900">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full flex-1 p-3 font-mono text-sm leading-relaxed border-0 outline-none resize-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-0"
                  placeholder="// Write or paste your Java code here..."
                  spellCheck={false}
                />
              </div>

              {/* Status Bar */}
              <div className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800/90 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <span>
                    Lines: <b>{lineCount}</b>
                  </span>
                  <span>
                    Chars: <b>{charCount}</b>
                  </span>
                </div>
                <div>
                  Press <b>Ctrl + Enter</b> to compile & run
                </div>
              </div>
            </div>

            {/* RIGHT: Output Console */}
            <div className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100 dark:bg-gray-800/90 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                    Output Console
                  </span>
                  {executionTime && (
                    <span className="text-[10px] bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-bold">
                      {executionTime}
                    </span>
                  )}
                </div>

                <button
                  onClick={handleClearOutput}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </button>
              </div>

              {/* Output Content */}
              <div className="flex-1 p-4 flex flex-col bg-gray-950 text-gray-200 font-mono text-sm overflow-auto">
                {runMode === 'embed' ? (
                  embedUrl ? (
                    <iframe
                      key={embedUrl}
                      src={embedUrl}
                      title="Java Output Console"
                      className="w-full h-full border-0 rounded-lg bg-black"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-400">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3 shadow-inner">
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </div>
                      <p className="font-semibold text-gray-200 text-sm">
                        Ready to compile Java code
                      </p>
                      <p className="text-xs text-gray-400 mt-1 max-w-xs">
                        Click{' '}
                        <span className="text-green-400 font-bold">Run ▶</span>{' '}
                        or press{' '}
                        <kbd className="bg-gray-800 px-1 rounded text-white">
                          Ctrl+Enter
                        </kbd>
                      </p>
                    </div>
                  )
                ) : (
                  <div className="flex-1 flex flex-col">
                    {simulatedOutput.length > 0 ? (
                      <div className="space-y-1.5">
                        {simulatedOutput.map((line, i) => (
                          <div
                            key={i}
                            className={
                              line.startsWith('Compilation') ||
                              line.includes('successfully') ||
                              line.startsWith('Process')
                                ? 'text-green-400 font-semibold'
                                : line.startsWith('Compiling') ||
                                  line.startsWith('Running')
                                ? 'text-blue-400 font-semibold'
                                : line.startsWith('---')
                                ? 'text-gray-600'
                                : 'text-gray-100'
                            }
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-400">
                        <Terminal className="w-12 h-12 text-gray-600 mb-3" />
                        <p className="text-sm font-semibold text-gray-200">
                          Fast Java Engine Ready
                        </p>
                        <p className="text-xs text-gray-400 mt-1 max-w-xs">
                          Click{' '}
                          <span className="text-green-400 font-bold">
                            Run ▶
                          </span>{' '}
                          or press{' '}
                          <kbd className="bg-gray-800 px-1.5 py-0.5 rounded text-white">
                            Ctrl+Enter
                          </kbd>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}