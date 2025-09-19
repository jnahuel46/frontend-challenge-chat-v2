import React from 'react';
import { MessageSender } from '../../../types';
import styles from './Avatar.module.scss';

interface AvatarProps {
  sender: MessageSender;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  sender,
  size = 'md',
  className = '',
}) => {
  const initials = {
    user: 'U',
    ai: 'AI',
  };

  const classes = `${styles.avatar} ${styles[size]} ${styles[sender]} ${className}`;

  return (
    <div className={classes} role="img" aria-label={`${sender === 'user' ? 'User' : 'AI Assistant'} avatar`}>
      {initials[sender]}
    </div>
  );
};

export default Avatar;