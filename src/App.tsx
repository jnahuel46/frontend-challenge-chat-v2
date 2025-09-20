import React, { useEffect } from "react";
import { useNavigationStore, useThemeStore } from "./stores";
import IrisLandingPage from "./components/pages/IrisLandingPage";
import ChatPage from "./components/pages/ChatPage";
import VoicePage from "./components/pages/VoicePage";

function App() {
  const { currentView, goToChat, goToVoice } = useNavigationStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleStartChat = () => {
    goToChat();
  };

  const handleStartTalk = () => {
    goToVoice();
  };

  return (
    <>
      {currentView === 'landing' && (
        <IrisLandingPage
          onStartChat={handleStartChat}
          onStartTalk={handleStartTalk}
        />
      )}
      {currentView === 'chat' && <ChatPage />}
      {currentView === 'voice' && <VoicePage />}
    </>
  );
}

export default App;
