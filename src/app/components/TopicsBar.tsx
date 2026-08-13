import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Course } from '../data/coursesData';
import { motion } from 'motion/react';

interface TopicsBarProps {
  courses: Course[];
  onCourseSelect: (courseId: string) => void;
  selectedCourseId: string | null;
}

export function TopicsBar({ courses, onCourseSelect, selectedCourseId }: TopicsBarProps) {
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
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3 sticky top-[80px] z-40">
      <div className="container mx-auto px-4">
        {/* <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"></div> */}
        <div className="flex items-center gap-2">
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
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all flex-shrink-0 font-medium ${
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
