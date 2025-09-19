import { create } from 'zustand';
import { Message } from '../types';

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearError: () => void;
  addMessage: (message: Message) => void;
  setTyping: (isTyping: boolean) => void;
  setError: (error: string | null) => void;
  updateStreamingMessage: (id: string, content: string) => void;
  completeStreamingMessage: (id: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isTyping: false,
  error: null,

  addMessage: (message: Message) => {
    set((state) => ({
      messages: [...state.messages, message],
      error: null,
    }));
  },

  setTyping: (isTyping: boolean) => {
    set({ isTyping });
  },

  setError: (error: string | null) => {
    set({ error, isTyping: false });
  },

  updateStreamingMessage: (id: string, content: string) => {
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, content } : msg
      ),
    }));
  },

  completeStreamingMessage: (id: string) => {
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, isStreaming: false } : msg
      ),
      isTyping: false,
    }));
  },

  clearError: () => {
    set({ error: null });
  },

  sendMessage: async (content: string) => {
    if (!content.trim()) return;

    const { addMessage, setTyping, setError, updateStreamingMessage, completeStreamingMessage } = get();

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    addMessage(userMessage);

    try {
      // Simulate AI response
      const responses = [
        "That's an interesting point! Let me think about it...",
        "I understand what you're saying. Here's my perspective...",
        "Great question! I'd love to help you with that.",
        "Thanks for sharing that with me. I appreciate your input.",
        "That reminds me of something similar I've encountered before..."
      ];

      const moods: Array<Message['mood']> = ['positive', 'thoughtful', 'neutral', 'excited'];
      const response = responses[Math.floor(Math.random() * responses.length)];
      const mood = moods[Math.floor(Math.random() * moods.length)];

      const aiMessage: Message = {
        id: Date.now().toString() + '_ai',
        content: '',
        sender: 'ai',
        timestamp: new Date(),
        mood,
        isStreaming: true,
      };

      addMessage(aiMessage);
      setTyping(true);

      // Simulate streaming response
      for (let i = 0; i <= response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        updateStreamingMessage(aiMessage.id, response.substring(0, i));
      }

      completeStreamingMessage(aiMessage.id);
    } catch (error) {
      setError('Failed to send message. Please try again.');
    }
  },
}));