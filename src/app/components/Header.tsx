import { Volume2, Search, Moon, Sun, Mic } from 'lucide-react';
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
}

export function Header({ onToggleSpeech, isSpeaking, onSearch, voiceGender, onVoiceChange }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [showAlarm, setShowAlarm] = useState(false);
  const [showTimer, setShowTimer] = useState(false);


  return (
    <header className="bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-800 dark:to-amber-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src={logo} alt="JavaSchoolLab Logo" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="font-bold text-2xl">JavaSchoolLab</h1>
            <p className="text-sm text-orange-100">Learn Java, Spring Boot & More</p>
          </div>
        </motion.div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <Search className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search topics..."
              className="bg-transparent border-none outline-none text-white placeholder-orange-100 w-64"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>

          {/*  Alarm selection  */}
          <div className="relative">
            <button
              onClick={() => setShowAlarm(!showAlarm)}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              title="Alarms"
            >
              <Bell className="w-5 h-5" />
            </button>

            {showAlarm && (
              <div className="absolute right-0 mt-3 w-72">
                <Alarm />
              </div>
            )}
          </div>

          {/*Timer section  */}
          <div className="relative">
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              title="Timer"
            >
              <TimerIcon className="w-5 h-5" />
            </button>

            {showTimer && (
              <div className="absolute right-0 mt-3 w-72">
                <Timer />
              </div>
            )}
          </div>


          {/* Voice Gender Selection */}
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-1">
            <button
              onClick={() => onVoiceChange('male')}
              className={`px-3 py-1 rounded text-sm transition-all ${voiceGender === 'male'
                ? 'bg-white text-orange-600 font-semibold'
                : 'text-white hover:bg-white/10'
                }`}
              title="Male Voice"
            >
              Male
            </button>
            <button
              onClick={() => onVoiceChange('female')}
              className={`px-3 py-1 rounded text-sm transition-all ${voiceGender === 'female'
                ? 'bg-white text-orange-600 font-semibold'
                : 'text-white hover:bg-white/10'
                }`}
              title="Female Voice"
            >
              Female
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggleSpeech}
            className={`p-3 rounded-full transition-all ${isSpeaking
              ? 'bg-white text-orange-600 animate-pulse'
              : 'bg-white/20 hover:bg-white/30'
              }`}
            title="Text to Speech"
          >
            <Volume2 className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </header>
  );
}