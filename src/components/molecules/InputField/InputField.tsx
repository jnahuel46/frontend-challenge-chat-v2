import React, { useState, useRef } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styles from './InputField.module.scss';

interface InputFieldProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  onSend,
  disabled = false,
  placeholder = 'Type a message...',
  className = '',
}) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`${styles.inputField} ${className}`}>
      <div className={styles.inputWrapper}>
        <Input
          ref={inputRef}
          value={message}
          onChange={setMessage}
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          aria-label="Type your message"
          autoFocus
        />
      </div>
      <Button
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        className={styles.sendButton}
        aria-label="Send message"
      >
        <svg
          className={styles.sendIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </Button>
    </div>
  );
};

export default InputField;