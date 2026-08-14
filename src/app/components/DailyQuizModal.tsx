import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, CheckCircle2, XCircle, HelpCircle, Trophy, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';
import { Certificate } from './Certificate';

interface DailyQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    topic: 'Core Java',
    question: 'Which of the following creates a new String object in Java on the Heap even if an identical literal already exists in the String Pool?',
    options: [
      'String s = "Hello";',
      'String s = new String("Hello");',
      'String s = "Hel" + "lo";',
      'String s = String.valueOf("Hello");'
    ],
    correctIndex: 1,
    explanation: 'Using the "new" keyword forces JVM to allocate a new String object directly in heap memory, regardless of the String Constant Pool.'
  },
  {
    id: 2,
    topic: 'Collections Framework',
    question: 'Which collection implementation does NOT preserve insertion order, permits null elements, and offers O(1) average time complexity for basic operations?',
    options: [
      'TreeSet',
      'LinkedHashSet',
      'HashSet',
      'Vector'
    ],
    correctIndex: 2,
    explanation: 'HashSet uses a HashTable underneath, offering O(1) constant time average performance for add/remove/contains and does not maintain insertion order.'
  },
  {
    id: 3,
    topic: 'Java 8 Streams',
    question: 'What is the purpose of intermediate stream operations like filter() and map() in Java 8?',
    options: [
      'They immediately execute and produce a final List',
      'They are executed lazily and return another Stream',
      'They modify the underlying collection directly',
      'They can only be called once per JVM process'
    ],
    correctIndex: 1,
    explanation: 'Intermediate stream operations are lazy; they are not evaluated until a terminal operation (like collect(), forEach(), or count()) is invoked.'
  },
  {
    id: 4,
    topic: 'Multithreading & Concurrency',
    question: 'What does the "volatile" keyword guarantee when applied to a variable in Java?',
    options: [
      'Atomic execution of composite operations like count++',
      'Memory visibility across threads (reading directly from main memory)',
      'Prevents any other thread from accessing the variable',
      'Automatically serializes the variable into disk'
    ],
    correctIndex: 1,
    explanation: 'The "volatile" keyword ensures visibility of changes to variables across threads by guaranteeing reads/writes happen directly in main memory, preventing stale CPU cache reads.'
  },
  {
    id: 5,
    topic: 'Spring Boot',
    question: 'Which annotation combines @Configuration, @EnableAutoConfiguration, and @ComponentScan into a single convenient shortcut?',
    options: [
      '@EnableAutoConfiguration',
      '@SpringBootApplication',
      '@RestController',
      '@Service'
    ],
    correctIndex: 1,
    explanation: '@SpringBootApplication is a meta-annotation that bundles @SpringBootConfiguration (@Configuration), @EnableAutoConfiguration, and @ComponentScan.'
  }
];

export function DailyQuizModal({ isOpen, onClose }: DailyQuizModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(QUIZ_QUESTIONS.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const selectedAnswer = selectedAnswers[currentIndex];
  const isAnswered = selectedAnswer !== null;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (selectedAnswers[currentIndex + 1] !== null) {
        setShowExplanation(true);
      }
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers(new Array(QUIZ_QUESTIONS.length).fill(null));
    setShowExplanation(false);
    setIsCompleted(false);
    setShowCertificate(false);
  };

  const score = selectedAnswers.reduce((acc, ans, idx) => {
    return ans === QUIZ_QUESTIONS[idx].correctIndex ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);

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
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  Daily Java Challenge
                  <span className="text-xs bg-amber-300 text-gray-900 font-bold px-2 py-0.5 rounded-full">
                    5 Questions
                  </span>
                </h2>
                <p className="text-xs text-orange-100">Test your knowledge, gain XP & unlock certificate</p>
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

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {!isCompleted ? (
              <div>
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
                  <span className="px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-semibold">
                    {currentQ.topic}
                  </span>
                  <span>
                    Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-relaxed">
                  {currentQ.question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {currentQ.options.map((option, idx) => {
                    let optionStyle =
                      'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:border-orange-400 dark:hover:border-orange-500';

                    if (isAnswered) {
                      if (idx === currentQ.correctIndex) {
                        optionStyle =
                          'border-green-500 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 font-semibold shadow-xs';
                      } else if (idx === selectedAnswer) {
                        optionStyle =
                          'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-semibold';
                      } else {
                        optionStyle = 'border-gray-200 dark:border-gray-800 opacity-60 text-gray-500';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between text-sm ${optionStyle} ${
                          !isAnswered ? 'cursor-pointer' : ''
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </span>
                        {isAnswered && idx === currentQ.correctIndex && (
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />
                        )}
                        {isAnswered && idx === selectedAnswer && idx !== currentQ.correctIndex && (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-orange-50 dark:bg-gray-800/90 border border-orange-200 dark:border-gray-700 mb-6"
                  >
                    <div className="flex items-center gap-2 text-orange-800 dark:text-orange-300 font-semibold text-xs mb-1">
                      <HelpCircle className="w-4 h-4" />
                      Explanation:
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </motion.div>
                )}

                {/* Action button */}
                {isAnswered && (
                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>{currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Completion Screen */
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white mb-4 shadow-lg"
                >
                  <Trophy className="w-10 h-10" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                  Quiz Completed! 🎉
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  You scored <span className="font-bold text-orange-600 dark:text-orange-400">{score}</span> out of{' '}
                  {QUIZ_QUESTIONS.length} ({percentage}%)
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
                  <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-xl border border-orange-100 dark:border-gray-700">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">+{score * 20} XP</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Experience Points</div>
                  </div>
                  <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-xl border border-green-100 dark:border-gray-700">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {percentage >= 60 ? 'PASSED ✓' : 'PRACTICE'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Challenge Result</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleRestart}
                    className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again</span>
                  </button>

                  {percentage >= 60 && (
                    <button
                      onClick={() => setShowCertificate(true)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {showCertificate && (
        <Certificate
          courseName="Java Daily Challenge Arena"
          topicName="Comprehensive Java Mastery Test"
          score={score}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </AnimatePresence>
  );
}
