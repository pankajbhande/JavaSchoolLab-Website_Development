import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';
import { Certificate } from './Certificate';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface MCQTestProps {
  topicName: string;
  courseName: string;
  onClose: () => void;
}

// Sample questions - in real app, these would be topic-specific
const generateQuestions = (topicName: string): Question[] => {
  const questions: Question[] = [];
  for (let i = 1; i <= 20; i++) {
    questions.push({
      id: i,
      question: `Question ${i}: What is the correct answer about ${topicName}?`,
      options: [
        `Option A for ${topicName}`,
        `Option B for ${topicName}`,
        `Option C for ${topicName}`,
        `Option D for ${topicName}`
      ],
      correctAnswer: Math.floor(Math.random() * 4)
    });
  }
  return questions;
};

export function MCQTest({ topicName, courseName, onClose }: MCQTestProps) {
  const [questions] = useState<Question[]>(generateQuestions(topicName));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(20).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitTest = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = showResults ? calculateScore() : 0;
  const passed = score >= 20; // Need all 20 correct to pass
  const percentage = (score / 20) * 100;

  const resetTest = () => {
    setSelectedAnswers(new Array(20).fill(-1));
    setCurrentQuestion(0);
    setShowResults(false);
    setShowCertificate(false);
  };

  if (showCertificate) {
    return <Certificate topicName={topicName} courseName={courseName} score={score} onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-6 text-white">
          <h2 className="text-3xl font-bold">Topic Completion Test</h2>
          <p className="text-orange-100 mt-1">{topicName} - {courseName}</p>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {!showResults ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Question {currentQuestion + 1} of 20</span>
                    <span>{selectedAnswers.filter(a => a !== -1).length}/20 Answered</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-orange-600 to-amber-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / 20) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {questions[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                            : 'border-gray-300 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswers[currentQuestion] === index
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-400 dark:border-gray-500'
                          }`}>
                            {selectedAnswers[currentQuestion] === index && (
                              <div className="w-3 h-3 bg-white rounded-full" />
                            )}
                          </div>
                          <span className="text-gray-800 dark:text-gray-200">{option}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToPrevious}
                    disabled={currentQuestion === 0}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </motion.button>

                  {currentQuestion === questions.length - 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={submitTest}
                      disabled={selectedAnswers.includes(-1)}
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Test
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={goToNext}
                      className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg"
                    >
                      Next
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
                passed ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
              }`}>
                {passed ? (
                  <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
                ) : (
                  <XCircle className="w-16 h-16 text-red-600 dark:text-red-400" />
                )}
              </div>

              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {passed ? 'Congratulations!' : 'Keep Learning!'}
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                You scored {score} out of 20 ({percentage}%)
              </p>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Your Performance</div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <motion.div
                    className={`h-4 rounded-full ${
                      passed 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                        : 'bg-gradient-to-r from-red-600 to-orange-600'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>

              {passed ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCertificate(true)}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto"
                >
                  <Award className="w-6 h-6" />
                  Get Your Certificate
                </motion.button>
              ) : (
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400">
                    You need to score 20/20 to pass and earn your certificate.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetTest}
                    className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg flex items-center gap-2 mx-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Retry Test
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
