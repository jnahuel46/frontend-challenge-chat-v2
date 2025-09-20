import React, { useState } from 'react';
import GlowingOrb from '../../atoms/GlowingOrb';
import ActionButton from '../../molecules/ActionButton';
import BottomNavigation from '../../organisms/BottomNavigation';
import ThemeToggle from '../../molecules/ThemeToggle';
import styles from './IrisLandingPage.module.scss';

interface IrisLandingPageProps {
  onStartChat: () => void;
  onStartTalk: () => void;
}

const IrisLandingPage: React.FC<IrisLandingPageProps> = ({
  onStartChat,
  onStartTalk
}) => {
  const [activeTab, setActiveTab] = useState<'insights' | 'chat' | 'iris' | 'explore'>('iris');

  const handleTabChange = (tab: 'insights' | 'chat' | 'iris' | 'explore') => {
    setActiveTab(tab);
    if (tab === 'chat') {
      onStartChat();
    }
  };

  return (
    <div className={styles.landingPage}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Iris</h1>
        <div className={styles.headerActions}>
          <div className={styles.menuDots}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="5" r="1"/>
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.topContent}>
          <div className={styles.orbContainer}>
            <GlowingOrb size="lg" />
          </div>

          <div className={styles.description}>
            <p>
              Chat with Iris. The more you engage, the more you'll build self-awareness—and
              move through life with clarity and confidence.
            </p>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <ActionButton
            type="talk"
            onClick={onStartTalk}
          />
          <ActionButton
            type="text"
            onClick={onStartChat}
          />
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default IrisLandingPage;