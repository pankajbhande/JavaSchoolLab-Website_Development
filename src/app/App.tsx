import { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { RightSidebar } from './components/RightSidebar';
import { Dashboard } from './components/Dashboard';
import { TopicsBar } from './components/TopicsBar';
import { ThemeProvider } from './components/ThemeProvider';
import { JavaPlaygroundModal } from './components/JavaPlaygroundModal';
import { AiMentorModal } from './components/AiMentorModal';
import { DailyQuizModal } from './components/DailyQuizModal';
import { FlashcardsModal } from './components/FlashcardsModal';

import { coursesData } from './data/coursesData';
import { MySQLCSS } from './data/MySQLCSS';
import { JDBC } from './data/JDBC';
import { MongoDB } from './data/MongoDB';

type ActiveModalType = 'playground' | 'ai-mentor' | 'quiz' | 'flashcards' | null;

function AppContent() {
  // Deduplicate by course id so later, richer data files override older duplicates.
  const courses = Array.from(
    new Map(
      [...coursesData, ...MySQLCSS, ...JDBC, ...MongoDB].map(course => [course.id, course])
    ).values()
  );

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedSubTopicId, setSelectedSubTopicId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [difficulty, setDifficulty] =
    useState<'beginner' | 'intermediate' | 'expert'>('beginner');

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [voiceGender, setVoiceGender] = useState<'male' | 'female'>('female');

  const [leftSidebarMinimized, setLeftSidebarMinimized] = useState(false);
  const [rightSidebarMinimized, setRightSidebarMinimized] = useState(false);

  // New Modals State
  const [activeModal, setActiveModal] = useState<ActiveModalType>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  // =========================
  // SELECTION
  // =========================
  const selectedCourse = selectedCourseId
    ? courses.find(c => c.id === selectedCourseId) || null
    : null;

  const selectedSubTopic = selectedCourse && selectedSubTopicId
    ? selectedCourse.subTopics.find(st => st.id === selectedSubTopicId) || null
    : null;

  const selectedTopic = selectedSubTopic && selectedTopicId
    ? selectedSubTopic.topics?.find(t => t.id === selectedTopicId) || null
    : null;

  const topicsList = selectedSubTopic?.topics || [];
  const currentTopicIndex = topicsList.findIndex(t => t.id === selectedTopicId);

  const prevTopicName =
    currentTopicIndex > 0 ? topicsList[currentTopicIndex - 1].name : undefined;

  const nextTopicName =
    currentTopicIndex < topicsList.length - 1
      ? topicsList[currentTopicIndex + 1].name
      : undefined;

  // =========================
  // HANDLERS
  // =========================
  const handleGoHome = () => {
    setSelectedCourseId(null);
    setSelectedSubTopicId(null);
    setSelectedTopicId(null);
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourseId(courseId);
    setSelectedSubTopicId(null);
    setSelectedTopicId(null);
  };

  const handleSubTopicSelect = (subTopicId: string) => {
    setSelectedSubTopicId(subTopicId);
    setSelectedTopicId(null);
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopicId(topicId);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleDifficultyChange = (level: 'beginner' | 'intermediate' | 'expert') => {
    setDifficulty(level);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // =========================
  // FILTER
  // =========================
  const filteredCourses = searchQuery
    ? courses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subTopics.some(sub =>
          sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.topics?.some(topic =>
            topic.name?.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      )
    : courses;

  const showDashboard = !selectedCourseId;

  // =========================
  // UI
  // =========================
  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header
        onToggleSpeech={() => {}}
        isSpeaking={isSpeaking}
        onSearch={handleSearch}
        voiceGender={voiceGender}
        onVoiceChange={setVoiceGender}
        onGoHome={handleGoHome}
        isHomeActive={showDashboard}
        onOpenPlayground={() => setActiveModal('playground')}
        onOpenAiMentor={() => setActiveModal('ai-mentor')}
        onOpenDailyQuiz={() => setActiveModal('quiz')}
        onOpenFlashcards={() => setActiveModal('flashcards')}
      />

      {!showDashboard && (
        <TopicsBar
          courses={filteredCourses}
          selectedCourseId={selectedCourseId}
          onCourseSelect={handleCourseSelect}
          onGoHome={handleGoHome}
        />
      )}

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
          <Dashboard
            onCourseSelect={handleCourseSelect}
            onOpenPlayground={() => setActiveModal('playground')}
            onOpenAiMentor={() => setActiveModal('ai-mentor')}
            onOpenDailyQuiz={() => setActiveModal('quiz')}
            onOpenFlashcards={() => setActiveModal('flashcards')}
          />
        ) : (
          <ContentArea
            course={selectedCourse}
            topic={selectedTopic}
            difficulty={difficulty}
            onDifficultyChange={handleDifficultyChange}
            contentRef={contentRef}
            onPrevTopic={() =>
              currentTopicIndex > 0 &&
              handleTopicSelect(topicsList[currentTopicIndex - 1].id)
            }
            onNextTopic={() =>
              currentTopicIndex < topicsList.length - 1 &&
              handleTopicSelect(topicsList[currentTopicIndex + 1].id)
            }
            hasPrev={currentTopicIndex > 0}
            hasNext={currentTopicIndex < topicsList.length - 1}
            prevTopicName={prevTopicName}
            nextTopicName={nextTopicName}
          />
        )}

        {!showDashboard && (
          <RightSidebar
            course={selectedCourse}
            isMinimized={rightSidebarMinimized}
            onToggleMinimize={() =>
              setRightSidebarMinimized(!rightSidebarMinimized)
            }
          />
        )}
      </div>

      {/* Global Interactive Modals */}
      <JavaPlaygroundModal
        isOpen={activeModal === 'playground'}
        onClose={() => setActiveModal(null)}
      />

      <AiMentorModal
        isOpen={activeModal === 'ai-mentor'}
        onClose={() => setActiveModal(null)}
        currentCourseName={selectedCourse?.name}
        currentTopicName={selectedTopic?.name}
      />

      <DailyQuizModal
        isOpen={activeModal === 'quiz'}
        onClose={() => setActiveModal(null)}
      />

      <FlashcardsModal
        isOpen={activeModal === 'flashcards'}
        onClose={() => setActiveModal(null)}
      />
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
