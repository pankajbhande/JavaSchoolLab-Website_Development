import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Copy, Check, RotateCcw, Sparkles, Terminal, Code2, Maximize2, Minimize2 } from 'lucide-react';

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

const TEMPLATES: CodeTemplate[] = [
  {
    name: 'Hello World & Variables',
    category: 'Basics',
    code: `public class Main {
    public static void main(String[] args) {
        String greeting = "Welcome to JavaSchoolLab!";
        int year = 2026;
        double rating = 4.9;
        
        System.out.println(greeting);
        System.out.println("Year: " + year + " | Rating: " + rating + " / 5.0");
        
        // Loop demonstration
        System.out.println("\\n--- Number Count ---");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Step " + i + ": Learning Java is fun!");
        }
    }
}`
  },
  {
    name: 'OOP & Inheritance',
    category: 'OOP',
    code: `// Base class
class Developer {
    protected String name;
    protected String role;

    public Developer(String name, String role) {
        this.name = name;
        this.role = role;
    }

    public void displayInfo() {
        System.out.println("Developer: " + name + " | Role: " + role);
    }
}

// Subclass demonstrating inheritance and polymorphism
class JavaDeveloper extends Developer {
    private String favoriteFramework;

    public JavaDeveloper(String name, String favoriteFramework) {
        super(name, "Backend Java Engineer");
        this.favoriteFramework = favoriteFramework;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Specialization: Spring Boot / " + favoriteFramework);
    }

    public void code() {
        System.out.println(name + " is building high-performance microservices!");
    }
}

public class Main {
    public static void main(String[] args) {
        JavaDeveloper dev = new JavaDeveloper("Alex", "Spring Cloud");
        dev.displayInfo();
        dev.code();
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

        System.out.println("Original Frameworks: " + frameworks);

        // Filter frameworks starting with 'M' or 'S' & uppercase them
        List<String> filtered = frameworks.stream()
            .filter(f -> f.startsWith("S") || f.startsWith("M"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());

        System.out.println("\\nFiltered & Sorted: " + filtered);

        // Statistics using Stream
        long count = frameworks.stream().count();
        System.out.println("Total frameworks tracked: " + count);
    }
}`
  },
  {
    name: 'Multithreading (Runnable)',
    category: 'Concurrency',
    code: `class WorkerTask implements Runnable {
    private String taskName;

    public WorkerTask(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(taskName + " - Executing Step " + i + " on Thread: " + Thread.currentThread().getName());
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        System.out.println(taskName + " - Completed successfully! ✓");
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Starting multithreaded simulation...");

        Thread thread1 = new Thread(new WorkerTask("Data Processor"));
        Thread thread2 = new Thread(new WorkerTask("Report Generator"));

        thread1.start();
        thread2.start();

        thread1.join();
        thread2.join();

        System.out.println("All threads finished. Process done.");
    }
}`
  }
];

export function JavaPlaygroundModal({ isOpen, onClose, initialCode }: JavaPlaygroundModalProps) {
  const [code, setCode] = useState(initialCode || TEMPLATES[0].code);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [runMode, setRunMode] = useState<'embed' | 'simulated'>('embed');
  const [embedUrl, setEmbedUrl] = useState('');
  const [simulatedOutput, setSimulatedOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(TEMPLATES[selectedTemplateIndex].code);
    setEmbedUrl('');
    setSimulatedOutput([]);
  };

  const handleSelectTemplate = (index: number) => {
    setSelectedTemplateIndex(index);
    setCode(TEMPLATES[index].code);
    setEmbedUrl('');
    setSimulatedOutput([]);
  };

  const handleRun = () => {
    setIsRunning(true);
    if (runMode === 'embed') {
      const encoded = encodeURIComponent(code);
      setEmbedUrl(`https://www.jdoodle.com/embed/v0/2?code=${encoded}`);
      setTimeout(() => setIsRunning(false), 800);
    } else {
      // Simulated instant run output
      setTimeout(() => {
        const lines = [
          "Compiling Main.java...",
          "Build Successful (0.12s)",
          "----------------------------------------",
          "Running Java virtual machine...",
          "Output:",
          ...extractPrintlns(code),
          "----------------------------------------",
          "Process finished with exit code 0"
        ];
        setSimulatedOutput(lines);
        setIsRunning(false);
      }, 500);
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
      } else {
        outputs.push(`[Output]: ${val.replace(/\\n/g, ' ')}`);
      }
    }
    if (outputs.length === 0) {
      outputs.push("Program executed with no explicit System.out.println output.");
    }
    return outputs;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
            isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-5xl h-[88vh]'
          }`}
        >
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  Interactive Java Playground
                  <span className="text-xs bg-amber-400 text-gray-900 font-semibold px-2 py-0.5 rounded-full">
                    Live Runner
                  </span>
                </h2>
                <p className="text-xs text-orange-100">Write, test, and run Java code snippets instantly</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Template Bar */}
          <div className="bg-gray-100 dark:bg-gray-800/80 px-6 py-2.5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between gap-3 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Templates:</span>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {TEMPLATES.map((tmpl, idx) => (
                <button
                  key={tmpl.name}
                  onClick={() => handleSelectTemplate(idx)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                    selectedTemplateIndex === idx
                      ? 'bg-orange-500 text-white shadow-sm font-semibold'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {tmpl.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
              <div className="flex bg-gray-200 dark:bg-gray-700 p-0.5 rounded-lg text-xs">
                <button
                  onClick={() => setRunMode('embed')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    runMode === 'embed'
                      ? 'bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 shadow-xs'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  JDoodle Online
                </button>
                <button
                  onClick={() => setRunMode('simulated')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    runMode === 'simulated'
                      ? 'bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 shadow-xs'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Fast Simulator
                </button>
              </div>
            </div>
          </div>

          {/* Main Body */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-hidden bg-gray-50 dark:bg-gray-950">
            {/* Editor Pane */}
            <div className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100 dark:bg-gray-800/90 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-300 ml-2 font-medium">
                    Main.java
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                    title="Reset Code"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                  <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 px-4 py-1 text-xs font-semibold rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-sm transition-all cursor-pointer"
                  >
                    <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
                    {isRunning ? 'Running...' : 'Run ▶'}
                  </button>
                </div>
              </div>

              <div className="flex-1 p-3 flex flex-col">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full flex-1 p-3 font-mono text-sm leading-relaxed border-0 outline-none resize-none bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:ring-0"
                  placeholder="// Type or paste your Java code here..."
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Output Pane */}
            <div className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100 dark:bg-gray-800/90 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Execution Output</span>
                </div>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">
                  {runMode === 'embed' ? 'Online JDoodle Engine' : 'Built-in Output Simulation'}
                </span>
              </div>

              <div className="flex-1 p-3 flex flex-col bg-gray-950 text-gray-200 font-mono text-sm overflow-auto">
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
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3">
                        <Play className="w-6 h-6 ml-0.5" />
                      </div>
                      <p className="font-semibold text-gray-300 text-sm">Ready to execute your Java program</p>
                      <p className="text-xs text-gray-500 mt-1 max-w-sm">
                        Click the <span className="text-orange-400 font-medium">Run ▶</span> button above to compile and run your code with live stdout output.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="flex-1 flex flex-col">
                    {simulatedOutput.length > 0 ? (
                      <div className="space-y-1">
                        {simulatedOutput.map((line, i) => (
                          <div
                            key={i}
                            className={
                              line.startsWith("Build Successful") || line.includes("Completed successfully")
                                ? "text-green-400 font-semibold"
                                : line.startsWith("Output:") || line.startsWith("[Output]")
                                ? "text-amber-300 font-semibold"
                                : line.startsWith("---")
                                ? "text-gray-500"
                                : "text-gray-300"
                            }
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-400">
                        <Terminal className="w-10 h-10 text-gray-600 mb-2" />
                        <p className="text-sm font-semibold text-gray-300">Fast Simulator Mode Active</p>
                        <p className="text-xs text-gray-500 mt-1">Press Run to simulate compilation and output.</p>
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
