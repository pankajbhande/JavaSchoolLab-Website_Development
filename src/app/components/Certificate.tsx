import { motion } from 'motion/react';
import { Award, Download } from 'lucide-react';

interface CertificateProps {
  topicName: string;
  courseName: string;
  score: number;
  onClose: () => void;
}

export function Certificate({ topicName, courseName, score, onClose }: CertificateProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const downloadCertificate = () => {
    // In a real app, this would generate a PDF
    alert('Certificate download feature - In production, this would generate a PDF certificate');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full p-8"
      >
        <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-8 border-double border-orange-400 dark:border-orange-600 rounded-xl p-12">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-orange-400 dark:border-orange-600 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-orange-400 dark:border-orange-600 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-orange-400 dark:border-orange-600 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-orange-400 dark:border-orange-600 rounded-br-lg" />

          {/* Content */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-600 to-amber-500 rounded-full mb-6"
            >
              <Award className="w-14 h-14 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
            >
              Certificate of Completion
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
            >
              This is to certify that
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-8 border-b-4 border-orange-400 dark:border-orange-600 pb-2 inline-block px-8"
            >
              Student Name
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-4"
            >
              has successfully completed the topic
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2"
            >
              {topicName}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-6"
            >
              from the course <span className="font-semibold text-orange-600 dark:text-orange-400">{courseName}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 inline-block mb-6"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400">Score Achieved</div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{score}/20 (100%)</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-between items-center mt-12 pt-6 border-t-2 border-orange-300 dark:border-orange-700"
            >
              <div className="text-left">
                <div className="text-sm text-gray-500 dark:text-gray-400">Date</div>
                <div className="font-semibold text-gray-800 dark:text-gray-200">{currentDate}</div>
              </div>
              
              <div className="text-center">
                <div className="w-48 border-t-2 border-gray-400 dark:border-gray-600 mb-2" />
                <div className="font-semibold text-gray-800 dark:text-gray-200">JavaSchoolLab</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Online Learning Platform</div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">Certificate ID</div>
                <div className="font-semibold text-gray-800 dark:text-gray-200 font-mono text-xs">
                  JSL-{Date.now().toString(36).toUpperCase()}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCertificate}
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg flex items-center gap-2 font-semibold"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
