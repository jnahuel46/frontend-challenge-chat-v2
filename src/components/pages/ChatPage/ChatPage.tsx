import React, { useState } from "react";
import { useChatStore, useNavigationStore } from "../../../stores";
import GlowingOrb from "../../atoms/GlowingOrb";
import MoodIndicator from "../../atoms/MoodIndicator";
import MessageActions from "../../atoms/MessageActions";
import BottomNavigation from "../../organisms/BottomNavigation";
import ThemeToggle from "../../molecules/ThemeToggle";
import styles from "./ChatPage.module.scss";

const ChatPage: React.FC = () => {
  const { messages, isTyping, sendMessage } = useChatStore();
  const { goToLanding } = useNavigationStore();
  const [inputMessage, setInputMessage] = useState("");
  const [chatMode, setChatMode] = useState<"talk" | "text">("text");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage("");
    }
  };

  const handleTabChange = (tab: "insights" | "chat" | "iris" | "explore") => {
    // Solo permitir navegación a Iris (landing)
    if (tab === "iris") {
      goToLanding();
    }
    // Ignorar clics en otros tabs hasta que estén implementados
  };

  return (
    <div className={styles.chatPage}>
      {/* Header */}
      <header className={styles.chatHeader}>
        <div className={styles.headerControls}>
          <button
            className={`${styles.modeToggle} ${
              chatMode === "talk" ? styles.active : ""
            }`}
            onClick={() => setChatMode("talk")}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 10L2.25 14M6.25 7L6.25 17M10.25 3L10.25 21M14.25 9V15M18.25 6V18M22.25 10V14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`${styles.modeToggle} ${
              chatMode === "text" ? styles.active : ""
            }`}
            onClick={() => setChatMode("text")}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.75 12C2.75 8.13401 5.88401 5 9.75 5H15.75C19.616 5 22.75 8.13401 22.75 12V12C22.75 15.866 19.616 19 15.75 19H2.75V12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9.75 12C9.75 12.5523 9.30228 13 8.75 13C8.19772 13 7.75 12.5523 7.75 12C7.75 11.4477 8.19772 11 8.75 11C9.30228 11 9.75 11.4477 9.75 12Z"
                fill="currentColor"
              />
              <path
                d="M13.75 12C13.75 12.5523 13.3023 13 12.75 13C12.1977 13 11.75 12.5523 11.75 12C11.75 11.4477 12.1977 11 12.75 11C13.3023 11 13.75 11.4477 13.75 12Z"
                fill="currentColor"
              />
              <path
                d="M17.75 12C17.75 12.5523 17.3023 13 16.75 13C16.1977 13 15.75 12.5523 15.75 12C15.75 11.4477 16.1977 11 16.75 11C17.3023 11 17.75 11.4477 17.75 12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className={styles.orbContainer}>
          <GlowingOrb
            size={isTyping ? "md" : "sm"}
            isSpeaking={isTyping}
          />
        </div>

        <div className={styles.rightActions}>
          <ThemeToggle />
          <button className={styles.endButton} onClick={goToLanding}>
            End
          </button>
        </div>
      </header>

      {/* Session Title */}
      <div className={styles.sessionTitle}>
        <h2>Chatting with Iris about Sam</h2>
      </div>

      {/* Messages Area */}
      <main className={styles.messagesArea}>
        <div className={styles.messagesList}>
          {/* AI Message */}
          <div className={styles.message + " " + styles.aiMessage}>
            <div className={styles.messageBubble}>
              <span className={styles.messageContent}>Hi, what would you like to chat about today?</span>
              <div className={styles.messageExtras}>
                <MoodIndicator mood="positive" />
                <MessageActions />
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className={styles.message + " " + styles.userMessage}>
            <div className={styles.messageBubble}>
              <span className={styles.messageContent}>I was hoping to chat with you about my boss, Sam.</span>
              <div className={styles.messageExtras}>
                <MessageActions />
              </div>
            </div>
          </div>

          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                message.sender === "user"
                  ? styles.userMessage
                  : styles.aiMessage
              }`}
            >
              <div className={styles.messageBubble}>
                <span className={styles.messageContent}>{message.content}</span>
                <div className={styles.messageExtras}>
                  {message.sender === "ai" && message.mood && (
                    <MoodIndicator mood={message.mood} />
                  )}
                  <MessageActions />
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className={styles.message + " " + styles.aiMessage}>
              <div className={styles.messageBubble + " " + styles.typing}>
                <span>...</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Message Input */}

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className={styles.messageInput}
        />
        <button
          onClick={handleSendMessage}
          className={styles.sendButton}
          disabled={!inputMessage.trim()}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="iris" onTabChange={handleTabChange} />
    </div>
  );
};

export default ChatPage;
