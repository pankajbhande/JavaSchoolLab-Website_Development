import { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { RightSidebar } from './components/RightSidebar';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider } from './components/ThemeProvider';
import { coursesData } from './data/coursesData';

function AppContent() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedSubTopicId, setSelectedSubTopicId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'expert'>('beginner');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [voiceGender, setVoiceGender] = useState<'male' | 'female'>('female');
  const [leftSidebarMinimized, setLeftSidebarMinimized] = useState(false);
  const [rightSidebarMinimized, setRightSidebarMinimized] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Get selected course, subtopic, and topic
  const selectedCourse = selectedCourseId 
    ? coursesData.find(c => c.id === selectedCourseId) || null 
    : null;
    
  const selectedSubTopic = selectedCourse && selectedSubTopicId
    ? selectedCourse.subTopics.find(st => st.id === selectedSubTopicId) || null
    : null;
    
  const selectedTopic = selectedSubTopic && selectedTopicId
    ? selectedSubTopic.topics.find(t => t.id === selectedTopicId) || null
    : null;

  // Text-to-speech functionality with voice selection
  const toggleSpeech = () => {
    if (!contentRef.current) return;

    if (isSpeaking) {
      // Stop speaking
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Start speaking
      const textContent = contentRef.current.innerText;
      
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(textContent);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Try to select Indian voice
        const voices = window.speechSynthesis.getVoices();
        const indianVoice = voices.find(voice => {
          const voiceName = voice.name.toLowerCase();
          const isIndian = voiceName.includes('indian') || voiceName.includes('hindi') || voiceName.includes('en-in');
          const matchesGender = voiceGender === 'female' 
            ? voiceName.includes('female') || voiceName.includes('woman') || !voiceName.includes('male')
            : voiceName.includes('male') || voiceName.includes('man');
          return isIndian && matchesGender;
        });
        
        if (indianVoice) {
          utterance.voice = indianVoice;
        } else {
          // Fallback to any voice matching gender
          const genderVoice = voices.find(voice => {
            const voiceName = voice.name.toLowerCase();
            return voiceGender === 'female'
              ? !voiceName.includes('male') || voiceName.includes('female')
              : voiceName.includes('male');
          });
          if (genderVoice) {
            utterance.voice = genderVoice;
          }
        }
        
        utterance.onend = () => {
          setIsSpeaking(false);
        };
        
        utterance.onerror = () => {
          setIsSpeaking(false);
        };
        
        speechSynthesisRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      } else {
        alert('Text-to-speech is not supported in your browser.');
      }
    }
  };

  // Load voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Stop speech when content changes
  useEffect(() => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [selectedTopicId, difficulty]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourseId(courseId);
    setSelectedSubTopicId(null);
    setSelectedTopicId(null);
    setDifficulty('beginner');
  };

  const handleSubTopicSelect = (subTopicId: string) => {
    setSelectedSubTopicId(subTopicId);
    setSelectedTopicId(null);
    setDifficulty('beginner');
  };

  // const handleTopicSelect = (topicId: string) => {
  //   setSelectedTopicId(topicId);
  //   setDifficulty('beginner');
  //   // Smooth scroll to top of content
  //   setTimeout(() => {
  //     if (contentRef.current) {
  //       contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }
  //   }, 100);
  // };

  const handleTopicSelect = (topicId: string) => {
  // Find parent course and subtopic
  let parentCourseId: string | null = null;
  let parentSubTopicId: string | null = null;

  for (const course of coursesData) {
    for (const subTopic of course.subTopics) {
      if (subTopic.topics.some(topic => topic.id === topicId)) {
        parentCourseId = course.id;
        parentSubTopicId = subTopic.id;
        break;
      }
    }
    if (parentCourseId) break;
  }

  if (parentCourseId) setSelectedCourseId(parentCourseId);
  if (parentSubTopicId) setSelectedSubTopicId(parentSubTopicId);
  
  setSelectedTopicId(topicId);
  setDifficulty('beginner');

  // Smooth scroll to top
  setTimeout(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};


  const handleDifficultyChange = (newDifficulty: 'beginner' | 'intermediate' | 'expert') => {
    setDifficulty(newDifficulty);
    // Smooth scroll to top of content when difficulty changes
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter courses based on search query
  const filteredCourses = searchQuery
    ? coursesData.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subTopics.some(subTopic =>
          subTopic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          subTopic.topics.some(topic =>
            topic.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      )
    : coursesData;

  const showDashboard = !selectedCourseId;

  

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header 
        onToggleSpeech={toggleSpeech} 
        isSpeaking={isSpeaking} 
        onSearch={handleSearch}
        voiceGender={voiceGender}
        onVoiceChange={setVoiceGender}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {!showDashboard && (
          <Sidebar
            courses={filteredCourses}
            selectedCourse={selectedCourseId}
            selectedSubTopic={selectedSubTopicId}
            selectedTopic={selectedTopicId}
            onCourseSelect={handleCourseSelect}
            onSubTopicSelect={handleSubTopicSelect}
            onTopicSelect={handleTopicSelect}
            searchQuery={searchQuery}
            isMinimized={leftSidebarMinimized}
            onToggleMinimize={() => setLeftSidebarMinimized(!leftSidebarMinimized)}
          />
        )}
        
        {showDashboard ? (
          <Dashboard onCourseSelect={handleCourseSelect} />
        ) : (
          <ContentArea
            course={selectedCourse}
            topic={selectedTopic}
            difficulty={difficulty}
            onDifficultyChange={handleDifficultyChange}
            contentRef={contentRef}
          />
        )}
        
        {!showDashboard && (
          <RightSidebar 
            course={selectedCourse}
            isMinimized={rightSidebarMinimized}
            onToggleMinimize={() => setRightSidebarMinimized(!rightSidebarMinimized)}
          />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}