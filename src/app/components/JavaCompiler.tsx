import { useState } from 'react';
import { Code, Play, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

export function JavaCompiler() {
  const [code, setCode] = useState(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    // Simulate code execution
    try {
      // Simple pattern matching for println statements
      const printMatches = code.match(/System\.out\.println\((.*?)\);/g);
      if (printMatches) {
        const results = printMatches.map(match => {
          const content = match.match(/println\((.*?)\)/)?.[1] || '';
          // Remove quotes if string literal
          return content.replace(/^["']|["']$/g, '');
        });
        setOutput(results.join('\n'));
      } else {
        setOutput('Code compiled successfully (no output)');
      }
    } catch (error) {
      setOutput('Error: Unable to compile code');
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl shadow-md border border-green-200 dark:border-green-700"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Java Compiler</h3>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={copyCode}
            className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={runCode}
            className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            title="Run code"
          >
            <Play className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-48 p-3 font-mono text-sm bg-white dark:bg-gray-900 border border-green-300 dark:border-green-600 rounded-lg text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        spellCheck={false}
      />
      
      <div className="mt-3">
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</div>
        <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm min-h-[60px] max-h-32 overflow-y-auto">
          {output || 'Click Run to execute code...'}
        </div>
      </div>
    </motion.div>
  );
}
