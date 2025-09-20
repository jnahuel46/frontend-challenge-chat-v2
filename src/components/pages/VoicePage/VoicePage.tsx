import React from 'react';
import VoiceInteraction from '../../organisms/VoiceInteraction';
import BottomNavigation from '../../organisms/BottomNavigation';
import ThemeToggle from '../../molecules/ThemeToggle';
import { useNavigationStore } from '../../../stores';
import styles from './VoicePage.module.scss';

const VoicePage: React.FC = () => {
  const { goToLanding } = useNavigationStore();

  const handleTabChange = (tab: 'insights' | 'chat' | 'iris' | 'explore') => {
    if (tab === 'iris') {
      goToLanding();
    }
  };

  return (
    <div className={styles.voicePage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.leftSection}>
          {/* Empty for spacing */}
        </div>

        <h1 className={styles.title}>Voice Mode</h1>

        <div className={styles.rightSection}>
          <ThemeToggle />
          <button className={styles.endButton} onClick={goToLanding}>
            End
          </button>
        </div>
      </header>

      {/* Voice Interaction */}
      <VoiceInteraction onEndSession={goToLanding} />

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab="iris"
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default VoicePage;