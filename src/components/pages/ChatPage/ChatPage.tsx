import React from 'react';
import { useChatStore } from '../../../stores';
import ChatLayout from '../../templates/ChatLayout';
import ChatHeader from '../../organisms/ChatHeader';
import MessageList from '../../organisms/MessageList';
import ChatInput from '../../organisms/ChatInput';

const ChatPage: React.FC = () => {
  const { messages, isTyping, error, sendMessage, clearError } = useChatStore();

  return (
    <ChatLayout
      header={<ChatHeader />}
      messages={
        <MessageList
          messages={messages}
          isTyping={isTyping}
        />
      }
      input={
        <ChatInput
          onSend={sendMessage}
          disabled={isTyping}
          error={error}
          onClearError={clearError}
        />
      }
    />
  );
};

export default ChatPage;