import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Course } from '../data/coursesData';
import { motion } from 'motion/react';

interface TopicsBarProps {
  courses: Course[];
  onCourseSelect: (courseId: string) => void;
  selectedCourseId: string | null;
  onGoHome?: () => void;
}

export function TopicsBar({ courses, onCourseSelect, selectedCourseId, onGoHome }: TopicsBarProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('topics-scroll-container');
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-2.5 sticky top-[72px] z-40 shadow-xs">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2">
          {/* Home / All Courses button */}
          {onGoHome && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGoHome}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                !selectedCourseId
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600'
              }`}
              title="Return to All Courses Dashboard"
            >
              <Home className="w-3.5 h-3.5" />
              <span>All Courses</span>
            </motion.button>
          )}

          <button
            onClick={() => scroll('left')}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors flex-shrink-0"
            title="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>

          <div
            id="topics-scroll-container"
            className="flex-1 overflow-x-auto scroll-smooth scrollbar-hide flex gap-2"
          >
            {courses.map((course) => (
              <motion.button
                key={course.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCourseSelect(course.id)}
                className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all flex-shrink-0 font-medium cursor-pointer ${
                  selectedCourseId === course.id
                    ? 'bg-orange-500 text-white font-semibold shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title={course.name}
              >
                {course.name}
              </motion.button>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors flex-shrink-0"
            title="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <style>{`
        #topics-scroll-container::-webkit-scrollbar {
          height: 4px;
        }
        #topics-scroll-container::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        #topics-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .dark #topics-scroll-container::-webkit-scrollbar-thumb {
          background: #4b5563;
        }
        .dark #topics-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </div>
  );
}
