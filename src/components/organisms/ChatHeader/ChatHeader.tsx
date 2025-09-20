import React from 'react';
import { useNavigationStore } from '../../../stores';
import ThemeToggle from '../../molecules/ThemeToggle';
import styles from './ChatHeader.module.scss';

interface ChatHeaderProps {
  className?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ className = '' }) => {
  const { goToLanding } = useNavigationStore();

  return (
    <header className={`${styles.chatHeader} ${className}`}>
      <div className={styles.headerContent}>
        <button className={styles.backButton} onClick={goToLanding}>
          ←
        </button>

        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <span>AI</span>
          </div>
          <div className={styles.userDetails}>
            <h1 className={styles.userName}>
              AI Assistant
            </h1>
            <p className={styles.userStatus}>
              Online • Ready to help
            </p>
          </div>
        </div>

        <div className={styles.headerActions}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;