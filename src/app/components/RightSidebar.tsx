import { useState } from 'react';
import { FileText, Building, Download, ChevronDown, ChevronRight, PanelRightClose, PanelRight } from 'lucide-react';
import { Course } from '../data/coursesData';
import { motion, AnimatePresence } from 'motion/react';
// import { Timer } from './Timer';
// import { Alarm } from './Alarm';
import { JavaCompiler } from './JavaCompiler';


interface RightSidebarProps {
  course: Course | null;
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

export function RightSidebar({ course, isMinimized, onToggleMinimize }: RightSidebarProps) {
  const [activeTab, setActiveTab] = useState<'cheatsheet' | 'interview' | 'tools'>('cheatsheet');
  const [expandedCompanies, setExpandedCompanies] = useState<Set<string>>(new Set());

  const toggleCompany = (company: string) => {
    const newExpanded = new Set(expandedCompanies);
    if (newExpanded.has(company)) {
      newExpanded.delete(company);
    } else {
      newExpanded.add(company);
    }
    setExpandedCompanies(newExpanded);
  };

  const handleDownloadPDF = () => {
    // In a real application, this would generate/fetch a PDF
    alert('PDF download functionality would open the PDF in a new tab. This is a demo.');
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isMinimized ? 60 : 320 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 overflow-hidden h-[calc(100vh-80px)] flex flex-col"
    >
      <div className="p-2 border-b border-gray-200 dark:border-gray-700 flex justify-start">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleMinimize}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
          title={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
        >
          {isMinimized ? <PanelRight className="w-5 h-5" /> : <PanelRightClose className="w-5 h-5" />}
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
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('cheatsheet')}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                    activeTab === 'cheatsheet'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">Notes</span>
                </button>
                <button
                  onClick={() => setActiveTab('interview')}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                    activeTab === 'interview'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span className="font-medium">Interview</span>
                </button>
                <button
                  onClick={() => setActiveTab('tools')}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                    activeTab === 'tools'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="font-medium">Tools</span>
                </button>
              </div>

              {/* Tools Tab */}
              {activeTab === 'tools' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {/* <Timer /> */}
                  {/* <Alarm /> */}
                  <JavaCompiler />
                 
                </motion.div>
              )}

              {/* Cheat Notes Tab */}
              {activeTab === 'cheatsheet' && course && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Quick Reference</h3>
                    <button
                      onClick={handleDownloadPDF}
                      className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 space-y-3">
                    {course.cheatNotes.map((note, index) => {
                      const [command, description] = note.split(' - ');
                      return (
                        <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-3 last:pb-0">
                          <code className="text-sm font-mono text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded">
                            {command}
                          </code>
                          {description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Interview Questions Tab */}
              {activeTab === 'interview' && course && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Company-wise Questions</h3>
                    <button
                      onClick={handleDownloadPDF}
                      className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {course.interviewQuestions.map((item, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                        <button
                          onClick={() => toggleCompany(item.company)}
                          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Building className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">{item.company}</span>
                          </div>
                          {expandedCompanies.has(item.company) ? (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                        </button>

                        <AnimatePresence>
                          {expandedCompanies.has(item.company) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-4 pb-4 space-y-3"
                            >
                              {item.questions.map((question, qIndex) => (
                                <div key={qIndex} className="flex gap-2">
                                  <span className="text-orange-500 dark:text-orange-400 font-semibold shrink-0">Q{qIndex + 1}.</span>
                                  <p className="text-sm text-gray-700 dark:text-gray-300">{question}</p>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {!course && activeTab !== 'tools' && (
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Select a course to view content
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}