import React from 'react';
import { Mood } from '../../../types';
import styles from './MoodIndicator.module.scss';

interface MoodIndicatorProps {
  mood: Mood;
  className?: string;
}

const MoodIndicator: React.FC<MoodIndicatorProps> = ({ mood, className = '' }) => {
  const getMoodIcon = (mood: Mood) => {
    switch (mood) {
      case 'positive':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM5.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm5 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM5.2 9.2c.4.8 1.1 1.3 2.8 1.3s2.4-.5 2.8-1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'negative':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM5.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm5 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM10.8 11.8c-.4-.8-1.1-1.3-2.8-1.3s-2.4.5-2.8 1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'excited':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M6 7l1.5-1.5L9 7M5 10c.7 1.3 2 2 3 2s2.3-.7 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'thoughtful':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM6 7h4M7 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'neutral':
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM6 7h1M9 7h1M6.5 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <div className={`${styles.moodIndicator} ${styles[mood]} ${className}`} title={`Mood: ${mood}`}>
      {getMoodIcon(mood)}
    </div>
  );
};

export default MoodIndicator;