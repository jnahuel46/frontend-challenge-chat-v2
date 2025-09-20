import React from "react";
import { useNavigationStore } from "./stores";
import IrisLandingPage from "./components/pages/IrisLandingPage";
import ChatPage from "./components/pages/ChatPage";

function App() {
  const { currentView, goToChat, goToLanding } = useNavigationStore();

  const handleStartChat = () => {
    goToChat();
  };

  const handleStartTalk = () => {
    // For now, redirect to chat - could implement voice feature later
    goToChat();
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
    </>
  );
}

export default App;
