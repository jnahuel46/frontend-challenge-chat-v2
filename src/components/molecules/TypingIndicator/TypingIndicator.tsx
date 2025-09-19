import React from 'react';
import Avatar from '../../atoms/Avatar';
import LoadingDots from '../../atoms/LoadingDots';
import styles from './TypingIndicator.module.scss';

interface TypingIndicatorProps {
  className?: string;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.typingIndicator} ${className}`}>
      <Avatar sender="ai" size="md" />
      <div className={styles.typingBubble}>
        <LoadingDots />
      </div>
    </div>
  );
};

export default TypingIndicator;