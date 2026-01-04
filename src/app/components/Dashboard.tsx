import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Book, Code, Database, Layout, Server, Layers } from 'lucide-react';

interface DashboardProps {
  onCourseSelect: (courseId: string) => void;
}

const courseCards = [
  { 
    id: 'java', 
    name: 'Java', 
    icon: Code, 
    color: 'from-orange-500 to-red-500',
    description: 'Master Java programming fundamentals',
    query: 'java programming code'
  },
  { 
    id: 'collection', 
    name: 'Collection Framework', 
    icon: Layers, 
    color: 'from-blue-500 to-cyan-500',
    description: 'Learn Java Collections in depth',
    query: 'data structure collection'
  },
  { 
    id: 'design-patterns', 
    name: 'Design Patterns', 
    icon: Layout, 
    color: 'from-purple-500 to-pink-500',
    description: 'Understand software design patterns',
    query: 'design pattern architecture'
  },
  { 
    id: 'mysql', 
    name: 'MySQL CSS', 
    icon: Database, 
    color: 'from-green-500 to-emerald-500',
    description: 'Database and styling concepts',
    query: 'database mysql'
  },
  { 
    id: 'jdbc', 
    name: 'JDBC', 
    icon: Database, 
    color: 'from-teal-500 to-cyan-500',
    description: 'Java Database Connectivity',
    query: 'database connection'
  },
  { 
    id: 'jsp-servlet', 
    name: 'JSP Servlet', 
    icon: Server, 
    color: 'from-indigo-500 to-blue-500',
    description: 'Server-side Java web technologies',
    query: 'web server technology'
  },
  { 
    id: 'hibernate', 
    name: 'Hibernate', 
    icon: Database, 
    color: 'from-violet-500 to-purple-500',
    description: 'Object-Relational Mapping framework',
    query: 'orm framework'
  },
  { 
    id: 'spring-mvc', 
    name: 'Spring MVC', 
    icon: Server, 
    color: 'from-lime-500 to-green-500',
    description: 'Model-View-Controller framework',
    query: 'spring framework'
  },
  { 
    id: 'spring-boot', 
    name: 'Spring Boot', 
    icon: Book, 
    color: 'from-amber-500 to-orange-500',
    description: 'Modern Spring application development',
    query: 'spring boot application'
  },
];

export function Dashboard({ onCourseSelect }: DashboardProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Welcome to JavaSchoolLab
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose a course to begin your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCards.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCourseSelect(course.id)}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className={`h-48 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-2xl font-bold">{course.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    {course.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 text-orange-600 dark:text-orange-400 font-semibold flex items-center gap-2"
                  >
                    Start Learning →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">9+</div>
            <div className="text-gray-600 dark:text-gray-300">Comprehensive Courses</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Topics Covered</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">Free</div>
            <div className="text-gray-600 dark:text-gray-300">Certifications</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
