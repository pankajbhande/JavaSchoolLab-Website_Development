import { useState, useRef, useEffect } from 'react';
import { Course, Topic, ContentBlock } from '../data/coursesData';
import { Copy, Check, Award, Image as ImageIcon } from 'lucide-react';
import { MCQTest } from './MCQTest';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
interface ContentAreaProps {
  course: Course | null;
  topic: Topic | null;
  difficulty: 'beginner' | 'intermediate' | 'expert';
  onDifficultyChange: (difficulty: 'beginner' | 'intermediate' | 'expert') => void;
  contentRef: React.RefObject<HTMLDivElement>;

   onPrevTopic: () => void;
  onNextTopic: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const handleAction = (code: string) => {
  localStorage.setItem("java_try_code", code);
  window.open("/src/app/components/JavaCompiler.html", "_blank");
};


export function ContentArea({
  course,
  topic,
  difficulty,
  onDifficultyChange,
  contentRef,

   onPrevTopic,
  onNextTopic,
  hasPrev,
  hasNext
}: ContentAreaProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showMCQ, setShowMCQ] = useState(false);
  const [topicImage, setTopicImage] = useState<string>('');

  // Get topic-related image
  useEffect(() => {
    if (topic) {
      // Generate image based on topic name
      const query = topic.name.toLowerCase().includes('java') ? 'java programming' :
        topic.name.toLowerCase().includes('collection') ? 'data structure' :
          topic.name.toLowerCase().includes('design') ? 'software architecture' :
            topic.name.toLowerCase().includes('database') || topic.name.toLowerCase().includes('sql') ? 'database' :
              topic.name.toLowerCase().includes('spring') ? 'spring framework' :
                'programming code';

      // Using a placeholder for now - in real app would use unsplash_tool
      setTopicImage(`https://source.unsplash.com/800x400/?${query.replace(' ', ',')}`);
    }
  }, [topic]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!course || !topic) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div
          className="text-center max-w-2xl px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Welcome to JavaSchoolLab</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Your comprehensive guide to mastering Java, Spring Boot, and enterprise technologies
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-8">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Beginner</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Start from basics</p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Intermediate</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Build expertise</p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Expert</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Master advanced topics</p>
            </motion.div>
          </div>

          <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 rounded-lg p-6">
            <p className="text-orange-800 dark:text-orange-300 font-medium mb-2">👈 Get started by selecting a course from the sidebar</p>
            <p className="text-orange-700 dark:text-orange-400 text-sm">
              Explore topics, read tutorials, use cheat sheets, and prepare for interviews with company-specific questions
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // const content = topic[difficulty];
  const contentBlocks: ContentBlock[] = topic[difficulty] || [];


  return (
    <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 custom-scrollbar">
      <div className="container mx-auto px-6 py-6" ref={contentRef}>
        {/* Difficulty Tabs */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex gap-1">
            <button
              onClick={() => onDifficultyChange('beginner')}
              className={`px-6 py-3 font-medium transition-all border-b-2 ${difficulty === 'beginner'
                ? 'border-green-500 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              Beginner
            </button>
            <button
              onClick={() => onDifficultyChange('intermediate')}
              className={`px-6 py-3 font-medium transition-all border-b-2 ${difficulty === 'intermediate'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              Intermediate
            </button>
            <button
              onClick={() => onDifficultyChange('expert')}
              className={`px-6 py-3 font-medium transition-all border-b-2 ${difficulty === 'expert'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              Expert
            </button>
          </div>

          {/* MCQ Test Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMCQ(true)}
            className="px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <Award className="w-5 h-5" />
            Take Test & Get Certificate
          </motion.button>
        </div>

        {/* Topic Title */}
        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {topic.name}
        </motion.h1>

        {/* Topic Image */}
        {topicImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={topicImage}
              alt={topic.name}
              className="w-full h-64 object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        )}

        {contentBlocks.length > 0 ? (
          contentBlocks.map((content, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="mb-8"
            >
              {/* Content Text */}
              <div className="prose max-w-none mb-4">
                {/<[a-z][\s\S]*>/i.test(content.content) ? (
                  <div dangerouslySetInnerHTML={{ __html: content.content }} />
                ) : (
                  content.content.split('\n\n').map((paragraph, index) => {
                    // Same paragraph parsing logic
                    if (paragraph.startsWith('•')) {
                      const items = paragraph.split('\n').filter(item => item.trim());
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 my-4">
                          {items.map((item, idx2) => (
                            <li key={idx2} className="text-gray-700 dark:text-gray-300">
                              {item.replace('•', '').trim()}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (/^\d+\./.test(paragraph)) {
                      const items = paragraph.split('\n').filter(item => item.trim());
                      return (
                        <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                          {items.map((item, idx2) => (
                            <li key={idx2} className="text-gray-700 dark:text-gray-300">
                              {item.replace(/^\d+\./, '').trim()}
                            </li>
                          ))}
                        </ol>
                      );
                    }

                    if (paragraph.includes(':') && paragraph.length < 100) {
                      return (
                        <h3
                          key={index}
                          className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3"
                        >
                          {paragraph}
                        </h3>
                      );
                    }

                    return (
                      <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  })
                )}
              </div>

              {/* Code Examples */}
              {content.codeExamples && content.codeExamples.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Code Examples</h2>
                  {content.codeExamples.map((code, codeIdx) => (
                    <motion.div
                      key={codeIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: codeIdx * 0.1 }}
                      className="relative"
                    >
                      {/* <div className="absolute top-2 right-2 z-10">
                <button
                  onClick={() => copyToClipboard(code, codeIdx)}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                  title="Copy code"
                >
                  {copiedIndex === codeIdx ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white" />}
                </button>
              </div> */}

                      <div className="absolute top-2 right-2 z-10 flex gap-2">
                        {/* Copy button */}
                        <button
                          onClick={() => copyToClipboard(code, codeIdx)}
                          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md"
                        >
                          {copiedIndex === codeIdx ? <Check /> : <Copy />}
                        </button>

                        {/* ⭐ Your new button */}
                        <button
                          onClick={() => handleAction(code)}
                          className="p-2 bg-orange-600 hover:bg-orange-500 rounded-md text-white text-sm font-semibold"
                        >
                        Try it
                        
                        </button>
                      </div>

                      <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{code}</code>
                      </pre>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
            <p className="text-yellow-800 dark:text-yellow-300">
              Content for <strong>{difficulty}</strong> level is coming soon. Please check other difficulty levels.
            </p>
          </div>
        )}

      </div>

      {/* MCQ Test Modal */}
      {showMCQ && (
        <MCQTest
          topicName={topic.name}
          courseName={course.name}
          onClose={() => setShowMCQ(false)}
        />
      )}

      {/* Previous / Next Navigation */}
<div className="flex justify-between items-center mt-12 border-t pt-6">
  <button
    onClick={onPrevTopic}
    disabled={!hasPrev}
    className={`px-6 py-2 rounded-lg font-semibold transition
      ${hasPrev
        ? 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
        : 'bg-gray-100 dark:bg-gray-800 opacity-50 cursor-not-allowed'}
    `}
  >
    ⬅ Previous
  </button>

  <button
    onClick={onNextTopic}
    disabled={!hasNext}
    className={`px-6 py-2 rounded-lg font-semibold transition
      ${hasNext
        ? 'bg-orange-600 text-white hover:bg-orange-500'
        : 'bg-orange-300 text-white opacity-50 cursor-not-allowed'}
    `}
  >
    Next ➡
  </button>
</div>

    </main>
  );
}