import React from 'react';
import { Message } from '../../../types';
import Avatar from '../../atoms/Avatar';
import Badge from '../../atoms/Badge';
import styles from './MessageBubble.module.scss';

interface MessageBubbleProps {
  message: Message;
  className?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, className = '' }) => {
  const isUser = message.sender === 'user';
  const timestamp = message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const bubbleClasses = `${styles.messageBubble} ${isUser ? styles.user : styles.ai} ${className}`;
  const contentClasses = `${styles.content} ${isUser ? styles.userContent : styles.aiContent}`;
  const bubbleInnerClasses = `${styles.bubble} ${isUser ? styles.userBubble : styles.aiBubble} ${message.isStreaming ? styles.streaming : ''}`;
  const metaClasses = `${styles.metadata} ${isUser ? styles.userMeta : styles.aiMeta}`;

  return (
    <div className={bubbleClasses}>
      <Avatar sender={message.sender} size="md" />

      <div className={contentClasses}>
        <div className={bubbleInnerClasses}>
          <p className={styles.text}>{message.content}</p>
          {message.isStreaming && (
            <div className={styles.streamingDots}>
              <div className={styles.streamingDot}></div>
              <div className={styles.streamingDot}></div>
              <div className={styles.streamingDot}></div>
            </div>
          )}
        </div>

        <div className={metaClasses}>
          <span className={styles.timestamp}>{timestamp}</span>
          {message.mood && !isUser && (
            <Badge mood={message.mood} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;