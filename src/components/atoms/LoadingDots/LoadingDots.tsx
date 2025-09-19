import React from 'react';
import styles from './LoadingDots.module.scss';

interface LoadingDotsProps {
  className?: string;
}

const LoadingDots: React.FC<LoadingDotsProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.loadingDots} ${className}`} aria-label="AI is typing">
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default LoadingDots;