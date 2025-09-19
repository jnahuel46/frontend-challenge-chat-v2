import React from 'react';
import InputField from '../../molecules/InputField';
import styles from './ChatInput.module.scss';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  error?: string | null;
  onClearError?: () => void;
  className?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  disabled = false,
  error,
  onClearError,
  className = '',
}) => {
  return (
    <div className={`${styles.chatInput} ${className}`}>
      {error && (
        <div className={styles.errorBanner}>
          <div className={styles.errorContent}>
            <p className={styles.errorText}>{error}</p>
            {onClearError && (
              <button
                onClick={onClearError}
                className={styles.dismissButton}
                aria-label="Dismiss error"
              >
                <svg className={styles.dismissIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
      <div className={styles.inputWrapper}>
        <InputField
          onSend={onSend}
          disabled={disabled}
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
};

export default ChatInput;