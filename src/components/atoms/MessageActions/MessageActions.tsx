import React, { useState } from 'react';
import styles from './MessageActions.module.scss';

interface MessageActionsProps {
  onRetry?: () => void;
  onCancel?: () => void;
  className?: string;
}

const MessageActions: React.FC<MessageActionsProps> = ({
  onRetry,
  onCancel,
  className = ''
}) => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleAction = (action: 'retry' | 'cancel') => {
    setShowTooltip('Work in progress');
    setTimeout(() => setShowTooltip(null), 2000);

    if (action === 'retry' && onRetry) {
      onRetry();
    } else if (action === 'cancel' && onCancel) {
      onCancel();
    }
  };

  return (
    <div className={`${styles.messageActions} ${className}`}>
      <button
        className={styles.actionButton}
        onClick={() => handleAction('retry')}
        title="Retry message"
        aria-label="Retry message"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12a8 8 0 0 1 8-8V2.5L16 6l-4 3.5V8a6 6 0 1 0 6 6h2a8 8 0 0 1-16-2z" fill="currentColor"/>
        </svg>
      </button>

      <button
        className={styles.actionButton}
        onClick={() => handleAction('cancel')}
        title="Cancel message"
        aria-label="Cancel message"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {showTooltip && (
        <div className={styles.tooltip}>
          {showTooltip}
        </div>
      )}
    </div>
  );
};

export default MessageActions;