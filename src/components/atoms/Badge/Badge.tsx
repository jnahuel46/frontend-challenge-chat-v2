import React from 'react';
import { Mood } from '../../../types';
import styles from './Badge.module.scss';

interface BadgeProps {
  mood: Mood;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ mood, className = '' }) => {
  const moodConfig = {
    neutral: {
      label: 'Neutral',
      emoji: '😐',
    },
    positive: {
      label: 'Positive',
      emoji: '😊',
    },
    negative: {
      label: 'Concerned',
      emoji: '😟',
    },
    excited: {
      label: 'Excited',
      emoji: '🤩',
    },
    thoughtful: {
      label: 'Thoughtful',
      emoji: '🤔',
    },
  };

  const config = moodConfig[mood];
  const classes = `${styles.badge} ${styles[mood]} ${className}`;

  return (
    <span className={classes} title={`Mood: ${config.label}`}>
      <span className={styles.emoji} role="img" aria-label={config.label}>
        {config.emoji}
      </span>
      {config.label}
    </span>
  );
};

export default Badge;