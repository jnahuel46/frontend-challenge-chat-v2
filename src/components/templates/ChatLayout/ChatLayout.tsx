import React from 'react';
import styles from './ChatLayout.module.scss';

interface ChatLayoutProps {
  header: React.ReactNode;
  messages: React.ReactNode;
  input: React.ReactNode;
  className?: string;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  header,
  messages,
  input,
  className = '',
}) => {
  return (
    <div className={`${styles.chatLayout} ${className}`}>
      {header}
      {messages}
      {input}
    </div>
  );
};

export default ChatLayout;