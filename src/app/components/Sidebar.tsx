import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Code, BookOpen, FileText, Database, PanelLeftClose, PanelLeft } from 'lucide-react';
import { Course, SubTopic } from '../data/coursesData';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  courses: Course[];
  selectedCourse: string | null;
  selectedSubTopic: string | null;
  selectedTopic: string | null;
  onCourseSelect: (courseId: string) => void;
  onSubTopicSelect: (subTopicId: string) => void;
  onTopicSelect: (topicId: string) => void;
  searchQuery?: string;
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

export function Sidebar({
  courses,
  selectedCourse,
  selectedSubTopic,
  selectedTopic,
  onCourseSelect,
  onSubTopicSelect,
  onTopicSelect,
  searchQuery,
  isMinimized,
  onToggleMinimize
}: SidebarProps) {
  
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(new Set());
  const [expandedSubTopics, setExpandedSubTopics] = useState<Set<string>>(new Set());

  // Auto-expand parent course and subtopic when a topic is selected
  useEffect(() => {
    if (selectedTopic) {
      for (const course of courses) {
        for (const subTopic of course.subTopics) {
          if (subTopic.topics.some((t) => t.id === selectedTopic)) {
            setExpandedCourses((prev) => {
              const newSet = new Set(prev);
              newSet.add(course.id);
              return newSet;
            });
            setExpandedSubTopics((prev) => {
              const newSet = new Set(prev);
              newSet.add(subTopic.id);
              return newSet;
            });
            return;
          }
        }
      }
    }
  }, [selectedTopic, courses]);

  // Auto-expand course when selected from TopicsBar
  useEffect(() => {
    if (selectedCourse) {
      setExpandedCourses(new Set([selectedCourse]));
      setExpandedSubTopics(new Set());
    }
  }, [selectedCourse]);

const toggleCourse = (courseId: string) => { 
  const newExpanded = new Set(expandedCourses); 
  if (newExpanded.has(courseId)) { 
    newExpanded.delete(courseId); 
  } else { newExpanded.add(courseId); 

  } setExpandedCourses(newExpanded); 
  onCourseSelect(courseId);
 }; 

const toggleSubTopic = (subTopicId: string) => { 
  const newExpanded = new Set(expandedSubTopics); 
  if (newExpanded.has(subTopicId)) { 
    newExpanded.delete(subTopicId);
   } 
   else { newExpanded.add(subTopicId); 
   } 
   setExpandedSubTopics(newExpanded); 
   onSubTopicSelect(subTopicId); 
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isMinimized ? 60 : 280 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-hidden h-[calc(100vh-80px)] flex flex-col"
    >
      <div className="p-2 border-b border-gray-200 dark:border-gray-700 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleMinimize}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
          title={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
        >
          {isMinimized ? <PanelLeft className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </motion.button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <h2 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">Courses</h2>
              
              <div className="space-y-2">
                {courses
                  .filter((course) => !selectedCourse || course.id === selectedCourse)
                  .map((course) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleCourse(course.id)}
                      className={`w-full flex items-center justify-between p-3 transition-colors ${
                        selectedCourse === course.id
                          ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                          : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {getIcon(course.icon)}
                        <span className="font-medium">{course.name}</span>
                      </div>
                      {expandedCourses.has(course.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedCourses.has(course.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                        >
                          {course.subTopics.map((subTopic) => (
                            <div key={subTopic.id}>
                              <button
                                onClick={() => toggleSubTopic(subTopic.id)}
                                className={`w-full flex items-center justify-between p-3 pl-8 transition-colors ${
                                  selectedSubTopic === subTopic.id
                                    ? 'bg-orange-100 dark:bg-orange-800/20 text-orange-700 dark:text-orange-400'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                                }`}
                              >
                                <span className="text-sm">{subTopic.name}</span>
                                {expandedSubTopics.has(subTopic.id) ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </button>

                              <AnimatePresence>
                                {expandedSubTopics.has(subTopic.id) && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="bg-white dark:bg-gray-800"
                                  >
                                    {subTopic.topics.map((topic) => (
                                      <button
                                        key={topic.id}
                                        onClick={() => onTopicSelect(topic.id)}
                                        className={`w-full text-left p-2 pl-12 transition-colors text-sm ${
                                          selectedTopic === topic.id
                                            ? 'bg-orange-500 text-white'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                                        }`}
                                      >
                                        {topic.name}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isMinimized && (
          <div className="p-2 space-y-2">
            {courses.map((course) => (
              <motion.button
                key={course.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleCourse(course.id)}
                className={`w-full p-3 rounded-lg transition-colors ${
                  selectedCourse === course.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title={course.name}
              >
                {getIcon(course.icon)}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </motion.aside>
  );
}