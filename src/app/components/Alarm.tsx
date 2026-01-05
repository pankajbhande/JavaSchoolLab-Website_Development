// import { useState } from 'react';
import { Bell, Plus, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import alarmSound from "./sounds/loud_alarm_sound.mp3";
import { useState, useEffect, useRef } from "react";

interface AlarmType {
  id: string;
  time: string;
  label: string;
  active: boolean;
  hasRang: boolean;
}

export function Alarm() {
  const [alarms, setAlarms] = useState<AlarmType[]>([]);
  const [newAlarmTime, setNewAlarmTime] = useState('');
  const [newAlarmLabel, setNewAlarmLabel] = useState('');

  //alarm sound effect
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio(alarmSound);
  }, []);

  // Load alarms when component mounts
  useEffect(() => {
    const saved = localStorage.getItem("alarms");
    if (saved) {
      setAlarms(JSON.parse(saved));
    }
  }, []);

  // Save alarms whenever they change
  useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }, [alarms]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const current = now.toTimeString().slice(0, 5);

      setAlarms(prev =>
        prev.map(a => {
          if (a.active && !a.hasRang && a.time === current) {
            audioRef.current?.play();

            return {
              ...a,
              active: true,   // disable AFTER ringing
              hasRang: true    // mark as rang
            };
          }

          return a;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const addAlarm = () => {
    if (newAlarmTime) {
      const alarm: AlarmType = {
        id: Date.now().toString(),
        time: newAlarmTime,
        label: newAlarmLabel || 'Study Reminder',
        active: true,
        hasRang: false,
      };
      setAlarms([...alarms, alarm]);
      setNewAlarmTime('');
      setNewAlarmLabel('');
    }
  };

  const removeAlarm = (id: string) => {
    setAlarms(alarms.filter(a => a.id !== id));
  };

  const toggleAlarm = (id: string) => {
    setAlarms(alarms.map(a =>
      a.id === id ? { ...a, active: !a.active } : a
    ));
  };


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-xl shadow-md border border-purple-200 dark:border-purple-700"
    >
      <div className="flex items-center gap-2 mb-3">
        <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Alarms</h3>
      </div>

      <div className="space-y-2 mb-3">
        <input
          type="time"
          value={newAlarmTime}
          onChange={(e) => setNewAlarmTime(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-purple-300 dark:border-purple-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        />
        <input
          type="text"
          placeholder="Label (optional)"
          value={newAlarmLabel}
          onChange={(e) => setNewAlarmLabel(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-purple-300 dark:border-purple-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={addAlarm}
          className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Alarm
        </motion.button>
      </div>

      <div className="space-y-2 max-h-40 overflow-y-auto">
        {alarms.map((alarm) => (
          <motion.div
            key={alarm.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={`flex items-center justify-between p-2 rounded-lg ${alarm.active
              ? 'bg-white dark:bg-gray-800 border border-purple-300 dark:border-purple-600'
              : 'bg-gray-200 dark:bg-gray-700 opacity-50'
              }`}
          >
            <div className="flex-1">
              <div className="font-semibold text-gray-800 dark:text-gray-200">{alarm.time}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{alarm.label}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleAlarm(alarm.id)}
                className={`px-3 py-1 rounded text-sm ${alarm.active
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-400 text-white'
                  }`}
              >
                {alarm.active ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={() => removeAlarm(alarm.id)}
                className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {alarms.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm py-4">
          No alarms set
        </div>
      )}
    </motion.div>
  );
}
