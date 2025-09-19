import React from 'react';
import { Message } from '../../../types';
import { useAutoScroll } from '../../../hooks/useAutoScroll';
import MessageBubble from '../../molecules/MessageBubble';
import TypingIndicator from '../../molecules/TypingIndicator';
import styles from './MessageList.module.scss';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
  className?: string;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  isTyping,
  className = '',
}) => {
  const endRef = useAutoScroll([messages, isTyping]);

  return (
    <div className={`${styles.messageList} ${className}`}>
      {messages.length === 0 ? (
        <div className={styles.welcomeContainer}>
          <div className={styles.welcomeContent}>
            <div className={styles.welcomeEmoji}>👋</div>
            <h2 className={styles.welcomeTitle}>
              Welcome to the Chat!
            </h2>
            <p className={styles.welcomeText}>
              Start a conversation by typing a message below.
            </p>
          </div>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
        </>
      )}
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;