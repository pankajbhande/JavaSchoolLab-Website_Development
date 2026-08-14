import { Volume2, Search, Moon, Sun, Home, Code2, Bot, Trophy, Layers, Flame, Sparkles } from 'lucide-react';
import logo from '../../assets/logo1.png';
import { Alarm } from './Alarm';
import { Timer } from './Timer';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';
import { useState } from "react";
import { Bell } from "lucide-react";
import { Timer as TimerIcon } from "lucide-react";

interface HeaderProps {
  onToggleSpeech: () => void;
  isSpeaking: boolean;
  onSearch?: (query: string) => void;
  voiceGender: 'male' | 'female';
  onVoiceChange: (gender: 'male' | 'female') => void;
  onGoHome: () => void;
  isHomeActive: boolean;
  onOpenPlayground: () => void;
  onOpenAiMentor: () => void;
  onOpenDailyQuiz: () => void;
  onOpenFlashcards: () => void;
}

export function Header({
  onToggleSpeech,
  isSpeaking,
  onSearch,
  voiceGender,
  onVoiceChange,
  onGoHome,
  isHomeActive,
  onOpenPlayground,
  onOpenAiMentor,
  onOpenDailyQuiz,
  onOpenFlashcards
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [showAlarm, setShowAlarm] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-900 dark:via-orange-800 dark:to-amber-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer group select-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onGoHome}
          title="Go to Home Dashboard"
        >
          <img
            src={logo}
            alt="JavaSchoolLab Logo"
            className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
          />
          <div>
            <h1 className="font-bold text-2xl tracking-tight flex items-center gap-1.5">
              JavaSchoolLab
            </h1>
            <p className="text-xs text-orange-100 hidden sm:block">Learn Java, Spring Boot & More</p>
          </div>
        </motion.div>

        {/* Center Nav Menu */}
        <nav className="flex items-center gap-1.5 bg-black/15 dark:bg-black/30 backdrop-blur-md p-1 rounded-xl border border-white/10">
          <button
            onClick={onGoHome}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              isHomeActive
                ? 'bg-white text-orange-600 font-bold shadow-md'
                : 'text-white/90 hover:bg-white/15 hover:text-white'
            }`}
            title="Home Dashboard"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>

          <button
            onClick={onOpenPlayground}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all cursor-pointer"
            title="Interactive Java Playground & Compiler"
          >
            <Code2 className="w-4 h-4 text-amber-300" />
            <span className="hidden md:inline">Playground</span>
          </button>

          <button
            onClick={onOpenAiMentor}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all cursor-pointer"
            title="Ask AI Java Mentor"
          >
            <Bot className="w-4 h-4 text-green-300" />
            <span className="hidden md:inline">AI Mentor</span>
          </button>

          <button
            onClick={onOpenDailyQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all cursor-pointer"
            title="Daily Java Quiz & Challenges"
          >
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span className="hidden lg:inline">Daily Quiz</span>
          </button>

          <button
            onClick={onOpenFlashcards}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all cursor-pointer"
            title="Interview Flashcards & Quick Revision"
          >
            <Layers className="w-4 h-4 text-orange-200" />
            <span className="hidden lg:inline">Flashcards</span>
          </button>
        </nav>

        {/* Right Section Tools */}
        <div className="flex items-center gap-2">
          {/* Search Box */}
          <div className="hidden xl:flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/15">
            <Search className="w-4 h-4 mr-2 text-white/80" />
            <input
              type="text"
              placeholder="Search topics..."
              className="bg-transparent border-none outline-none text-white placeholder-orange-100/70 w-36 text-sm"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>

          {/* Gamified Streak Badge */}
          <div
            className="hidden sm:flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/15 cursor-default text-xs font-semibold"
            title="Daily Learning Streak"
          >
            <Flame className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>3 Days</span>
          </div>

          {/* Alarm dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowAlarm(!showAlarm)}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-all cursor-pointer"
              title="Study Alarms"
            >
              <Bell className="w-4 h-4" />
            </button>

            {showAlarm && (
              <div className="absolute right-0 mt-3 w-72 z-50">
                <Alarm />
              </div>
            )}
          </div>

          {/* Timer dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-all cursor-pointer"
              title="Study Timer"
            >
              <TimerIcon className="w-4 h-4" />
            </button>

            {showTimer && (
              <div className="absolute right-0 mt-3 w-72 z-50">
                <Timer />
              </div>
            )}
          </div>

          {/* Voice Gender Selection */}
          <div className="hidden sm:flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-0.5 border border-white/15">
            <button
              onClick={() => onVoiceChange('male')}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                voiceGender === 'male'
                  ? 'bg-white text-orange-600 font-bold shadow-xs'
                  : 'text-white hover:bg-white/10'
              }`}
              title="Male Voice"
            >
              Male
            </button>
            <button
              onClick={() => onVoiceChange('female')}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                voiceGender === 'female'
                  ? 'bg-white text-orange-600 font-bold shadow-xs'
                  : 'text-white hover:bg-white/10'
              }`}
              title="Female Voice"
            >
              Female
            </button>
          </div>

          {/* Text to Speech Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggleSpeech}
            className={`p-2.5 rounded-full transition-all cursor-pointer ${
              isSpeaking ? 'bg-white text-orange-600 animate-pulse' : 'bg-white/20 hover:bg-white/30'
            }`}
            title="Text to Speech"
          >
            <Volume2 className="w-4 h-4" />
          </motion.button>

          {/* Dark / Light Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-all cursor-pointer"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>
    </header>
  );
}