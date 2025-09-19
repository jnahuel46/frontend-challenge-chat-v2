export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  mood?: 'neutral' | 'positive' | 'negative' | 'excited' | 'thoughtful';
  isStreaming?: boolean;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  error: string | null;
  theme: 'light' | 'dark';
}

export type MessageSender = 'user' | 'ai';

export type Theme = 'light' | 'dark';

export type Mood = 'neutral' | 'positive' | 'negative' | 'excited' | 'thoughtful';