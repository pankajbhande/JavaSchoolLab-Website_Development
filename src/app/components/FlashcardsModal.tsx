import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Layers, ChevronLeft, ChevronRight, Rotate3d, CheckCircle2, Bookmark, Sparkles } from 'lucide-react';

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Flashcard {
  id: number;
  category: string;
  question: string;
  answer: string;
  keyPoints: string[];
}

const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    category: 'Core Java',
    question: 'Why is Java platform independent, but JVM is platform dependent?',
    answer: 'Java source code (.java) compiles to bytecode (.class), which is uniform across all platforms. However, each operating system requires a custom JVM built specifically to translate that bytecode into native CPU machine instructions.',
    keyPoints: ['Write Once, Run Anywhere (WORA)', 'Bytecode is platform-neutral', 'JVM interprets/JIT compiles bytecode to machine code']
  },
  {
    id: 2,
    category: 'OOP Principles',
    question: 'What is the key difference between Method Overloading and Method Overriding?',
    answer: 'Overloading is Compile-Time Polymorphism (same method name, different parameters in the same class). Overriding is Runtime Polymorphism (subclass provides a specific implementation of a method declared in its parent class with the exact same signature).',
    keyPoints: ['Overloading = static binding', 'Overriding = dynamic/virtual method dispatch', 'Overriding requires inheritance']
  },
  {
    id: 3,
    category: 'Collections',
    question: 'How does HashMap handle hash collisions in Java 8+?',
    answer: 'Java 8 uses a linked list for collided buckets initially. When a bucket reaches 8 elements (TREEIFY_THRESHOLD) and total capacity >= 64, it transforms the linked list into a self-balancing Red-Black Tree, improving worst-case search time from O(n) to O(log n).',
    keyPoints: ['Separate Chaining technique', 'Converts to Red-Black Tree at 8 collisions', 'Reverts to LinkedList if size drops <= 6']
  },
  {
    id: 4,
    category: 'Multithreading',
    question: 'What is the difference between synchronized method and synchronized block?',
    answer: 'A synchronized method locks the entire instance (this) or class for the entire duration of the method. A synchronized block allows fine-grained locking on any specific monitor object only for critical lines of code, reducing contention and boosting throughput.',
    keyPoints: ['Synchronized block is more flexible', 'Reduces thread blocking duration', 'Can lock on custom mutex object']
  },
  {
    id: 5,
    category: 'Spring Boot',
    question: 'What is Spring Boot Auto-Configuration and how does it work?',
    answer: 'Spring Boot inspects classpath dependencies, existing bean configurations, and property settings at startup to automatically configure necessary Beans without requiring verbose XML or manual @Bean declarations.',
    keyPoints: ['Triggered via @EnableAutoConfiguration', 'Uses @ConditionalOnClass & @ConditionalOnMissingBean', 'Overridable via application.properties']
  },
  {
    id: 6,
    category: 'Databases & JDBC',
    question: 'Why is PreparedStatement preferred over Statement in JDBC?',
    answer: 'PreparedStatement is pre-compiled by the database engine for faster repeated execution with varying parameters, and it automatically escapes input values to prevent SQL Injection vulnerabilities.',
    keyPoints: ['Prevents SQL Injection attacks', 'Pre-compiled query plan in DB', 'Cleaner parameterized syntax (?)']
  }
];

export function FlashcardsModal({ isOpen, onClose }: FlashcardsModalProps) {
  const [cards, setCards] = useState(FLASHCARDS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<number>>(new Set());

  if (!isOpen) return null;

  const categories = ['All', ...Array.from(new Set(FLASHCARDS.map(c => c.category)))];

  const filteredCards = selectedCategory === 'All' 
    ? cards 
    : cards.filter(c => c.category === selectedCategory);

  const activeCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const toggleMastered = (id: number) => {
    const next = new Set(masteredIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setMasteredIds(next);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  Interview Flashcards
                  <span className="text-xs bg-amber-300 text-gray-900 font-bold px-2 py-0.5 rounded-full">
                    Quick Revision
                  </span>
                </h2>
                <p className="text-xs text-orange-100">Rapid-fire questions for technical interviews & exams</p>
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

          {/* Category Filter */}
          <div className="bg-gray-100 dark:bg-gray-800 px-6 py-2.5 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 flex-shrink-0">
              Filter:
            </span>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="ml-auto text-xs text-gray-500 dark:text-gray-400 font-medium flex-shrink-0">
              Mastered: {masteredIds.size}/{FLASHCARDS.length}
            </div>
          </div>

          {/* Flashcard Area */}
          <div className="p-6 flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950">
            {activeCard && (
              <div className="w-full max-w-lg perspective-1000">
                <motion.div
                  onClick={() => setIsFlipped(!isFlipped)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full min-h-[300px] cursor-pointer rounded-2xl p-8 bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-gray-700 shadow-xl flex flex-col justify-between relative transition-shadow hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950 px-3 py-1 rounded-full">
                      {activeCard.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMastered(activeCard.id);
                        }}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          masteredIds.has(activeCard.id)
                            ? 'text-green-600 bg-green-100 dark:bg-green-950'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                        title={masteredIds.has(activeCard.id) ? 'Mastered' : 'Mark as Mastered'}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                      <span className="text-xs text-gray-400 font-mono">
                        {currentIndex + 1} / {filteredCards.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Content (Question or Answer) */}
                  <div className="my-auto py-4">
                    {!isFlipped ? (
                      <div className="text-center">
                        <span className="text-xs font-semibold text-gray-400 block mb-2">QUESTION</span>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
                          {activeCard.question}
                        </h3>
                      </div>
                    ) : (
                      <div>
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400 block mb-2">
                          ANSWER & KEY TAKEAWAYS
                        </span>
                        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                          {activeCard.answer}
                        </p>
                        <div className="space-y-1 bg-orange-50 dark:bg-gray-900 p-3 rounded-lg border border-orange-100 dark:border-gray-700">
                          {activeCard.keyPoints.map((pt, i) => (
                            <div key={i} className="text-xs text-orange-900 dark:text-orange-300 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Flip Hint */}
                  <div className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                    <Rotate3d className="w-3.5 h-3.5 text-orange-500 animate-spin" />
                    <span>Click card to {isFlipped ? 'see Question' : 'reveal Answer'}</span>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700 shadow-sm transition-all cursor-pointer"
                title="Previous Card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Rotate3d className="w-4 h-4" />
                <span>Flip Card</span>
              </button>

              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700 shadow-sm transition-all cursor-pointer"
                title="Next Card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
