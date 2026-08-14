import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bot, Send, Sparkles, Copy, Check, User, Lightbulb, Zap, HelpCircle } from 'lucide-react';

interface AiMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCourseName?: string;
  currentTopicName?: string;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  code?: string;
  time: string;
}

const PRESET_QUESTIONS = [
  "Explain Java 8 Streams with a simple real-world example",
  "Why is String immutable in Java and what is String Pool?",
  "Difference between HashMap and ConcurrentHashMap?",
  "How does Spring Boot Dependency Injection work?",
  "Explain Java Garbage Collection and Memory Model",
  "Give me 5 tricky Java Interview questions with answers"
];

const KNOWLEDGE_BASE: Record<string, { answer: string; code?: string }> = {
  "streams": {
    answer: "Java 8 Streams provide a declarative, functional approach to processing sequences of elements. Streams support pipelining (chaining operations like `filter()`, `map()`, `sorted()`) and terminal operations (like `collect()`, `forEach()`, `reduce()`). Unlike collections, streams do not store data—they operate on a source lazily.",
    code: `List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

// Filter names with length > 3 and convert to uppercase
List<String> result = names.stream()
    .filter(n -> n.length() > 3)
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());

System.out.println(result); // [ALICE, CHARLIE, DAVID]`
  },
  "string immutable": {
    answer: "In Java, `String` objects are immutable for security, synchronization, caching, and performance: \n1. **String Constant Pool**: Saves heap memory by sharing identical string literals.\n2. **Security**: Sensitive data like DB URLs, passwords, and network connections cannot be altered maliciously.\n3. **Thread-Safety**: Immutable objects can be shared across multiple threads without synchronization overhead.",
    code: `String s1 = "Java";
String s2 = "Java"; // Points to the same object in String Pool

s1.concat(" Developer"); 
System.out.println(s1); // Still "Java" because strings cannot be mutated!

String modified = s1.concat(" Developer"); // Creates a new String object
System.out.println(modified); // "Java Developer"`
  },
  "hashmap": {
    answer: "**HashMap vs ConcurrentHashMap**:\n• **HashMap**: Not thread-safe. Allows one `null` key and multiple `null` values. Fast for single-threaded operations.\n• **ConcurrentHashMap**: Highly concurrent & thread-safe. Uses bucket/segment-level locking rather than locking the whole map (unlike `Hashtable`). Does NOT allow `null` keys or values.",
    code: `// Single-threaded or non-concurrent context
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 95);

// Concurrent, multi-threaded context
ConcurrentMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
concurrentMap.put("Worker1", 100);
concurrentMap.computeIfAbsent("Worker2", k -> 200);`
  },
  "spring": {
    answer: "**Spring Dependency Injection (DI)** is a design pattern where the Spring IoC (Inversion of Control) container creates and injects dependencies into your classes rather than objects instantiating them directly with `new`.\n\nKey Annotations:\n• `@Component` / `@Service` / `@Repository`: Marks a class as a Spring-managed Bean.\n• `@Autowired`: Injects the required dependency (Constructor injection is recommended).",
    code: `@Service
public class PaymentService {
    public void processPayment(double amount) {
        System.out.println("Processing payment of $" + amount);
    }
}

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final PaymentService paymentService;

    // Recommended: Constructor Injection
    public OrderController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/checkout")
    public String checkout() {
        paymentService.processPayment(49.99);
        return "Order Placed Successfully!";
    }
}`
  },
  "garbage": {
    answer: "**Java Memory Model & Garbage Collection (GC)**:\n• **Heap Memory**: Stores all instantiated objects. Divided into *Young Generation* (Eden, Survivor S0/S1) and *Old/Tenured Generation*.\n• **Stack Memory**: Stores primitive local variables and method execution frames (per thread).\n• **Garbage Collectors**: Automatic memory reclamation (G1GC, ZGC, Parallel GC) using Mark-Sweep-Compact algorithms to clear unreferenced objects.",
    code: `// Object is eligible for GC when no active references reach it
Developer dev = new Developer("Sam");
dev = null; // Previous Developer object in Heap is now eligible for GC

// Suggest JVM to trigger GC (no guarantee of immediate execution)
System.gc();`
  },
  "interview": {
    answer: "Here are Top Java Interview Must-Know Questions:\n1. **What is the difference between `==` and `.equals()`?** (`==` compares reference addresses; `.equals()` compares logical content).\n2. **Why does Java not support multiple inheritance with classes?** (To avoid Diamond Problem ambiguity; solved via default methods in interfaces).\n3. **What is the `volatile` keyword?** (Ensures thread visibility by reading/writing directly from main memory instead of CPU cache).\n4. **What is the difference between `fail-fast` and `fail-safe` iterators?** (Fail-fast throws `ConcurrentModificationException` like `ArrayList`; Fail-safe works on clone like `CopyOnWriteArrayList`).\n5. **What are Record classes in modern Java (Java 16+)?** (Concise syntax for immutable data carrier classes).",
    code: `// Modern Java Record example (Java 16+)
public record UserProfile(Long id, String username, String email) {
    // Automatically creates constructor, getters, equals(), hashCode(), toString()!
}`
  }
};

export function AiMentorModal({ isOpen, onClose, currentCourseName, currentTopicName }: AiMentorModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I am your **JavaSchoolLab AI Mentor** 🤖. \n\nI can explain any Java concept, debug your code, generate interview questions, or provide best-practice examples${
        currentCourseName ? ` for **${currentCourseName}**` : ''
      }. How can I assist your learning today?`,
      time: 'Just now'
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputPrompt).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let match = KNOWLEDGE_BASE["streams"];

      if (lower.includes("string") || lower.includes("immutable") || lower.includes("pool")) {
        match = KNOWLEDGE_BASE["string immutable"];
      } else if (lower.includes("hashmap") || lower.includes("concurrenthashmap") || lower.includes("map")) {
        match = KNOWLEDGE_BASE["hashmap"];
      } else if (lower.includes("spring") || lower.includes("boot") || lower.includes("injection") || lower.includes("di")) {
        match = KNOWLEDGE_BASE["spring"];
      } else if (lower.includes("garbage") || lower.includes("gc") || lower.includes("memory") || lower.includes("heap")) {
        match = KNOWLEDGE_BASE["garbage"];
      } else if (lower.includes("interview") || lower.includes("question") || lower.includes("tricky")) {
        match = KNOWLEDGE_BASE["interview"];
      } else {
        // Dynamic contextual response
        match = {
          answer: `Great question regarding **"${query}"**!\n\nIn Java enterprise development, understanding this principle is vital for writing clean, performant, and maintainable software. Here is a breakdown of the key concepts and practical application:`,
          code: `public class ExampleSolution {
    public static void main(String[] args) {
        // Concept demonstration for: ${query}
        System.out.println("Executing Java solution with best practices...");
    }
}`
        };
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: match.answer,
        code: match.code,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  JavaSchoolLab AI Mentor
                  <span className="text-xs bg-green-400 text-gray-900 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-900 animate-ping inline-block" />
                    Online Tutor
                  </span>
                </h2>
                <p className="text-xs text-orange-100">
                  Ask doubts, understand code, generate interview Q&A & practice exercises
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick suggestions */}
          <div className="bg-orange-50 dark:bg-gray-800/90 px-6 py-2 border-b border-orange-100 dark:border-gray-700 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-1 flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
              Popular Topics:
            </span>
            <div className="flex gap-2 overflow-x-auto py-1">
              {PRESET_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(q)}
                  className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-orange-200 dark:border-gray-600 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-all whitespace-nowrap cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-950">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-tr-none'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-tl-none'
                  }`}
                >
                  <div className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</div>

                  {msg.code && (
                    <div className="mt-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-900 text-gray-100 font-mono text-xs">
                      <div className="flex items-center justify-between px-3 py-1.5 bg-gray-800 text-gray-300">
                        <span className="text-[11px] font-semibold text-orange-400">Java Code Example</span>
                        <button
                          onClick={() => handleCopyCode(msg.code!, msg.id)}
                          className="flex items-center gap-1 text-[11px] hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                          {copiedId === msg.id ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                      <pre className="p-3 overflow-x-auto font-mono text-xs text-green-300 leading-normal">
                        {msg.code}
                      </pre>
                    </div>
                  )}

                  <div
                    className={`text-[10px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-orange-100' : 'text-gray-400'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs pl-11"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.4s]" />
                <span>AI Mentor is thinking...</span>
              </motion.div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask anything about Java, Spring Boot, Collections, Code debugging..."
                className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-sm transition-all"
              />
              <button
                type="submit"
                disabled={!inputPrompt.trim() || isTyping}
                className="px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 text-white font-semibold rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Ask</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
