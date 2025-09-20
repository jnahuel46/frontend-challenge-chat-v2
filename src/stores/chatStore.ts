import { create } from 'zustand';
import { Message } from '../types';
import { aiService } from '../services/aiService';

/**
 * Chat store state interface
 */
interface ChatState {
  /** Array of chat messages */
  messages: Message[];
  /** Whether AI is currently typing */
  isTyping: boolean;
  /** Current error message if any */
  error: string | null;
  /** Send a new message and get AI response */
  sendMessage: (content: string) => Promise<void>;
  /** Clear current error */
  clearError: () => void;
  /** Add a message to the chat */
  addMessage: (message: Message) => void;
  /** Set typing indicator state */
  setTyping: (isTyping: boolean) => void;
  /** Set error state */
  setError: (error: string | null) => void;
  /** Update content of a streaming message */
  updateStreamingMessage: (id: string, content: string) => void;
  /** Mark a streaming message as complete */
  completeStreamingMessage: (id: string) => void;
}

/**
 * Chat store for managing messages and conversation state
 * Handles message sending, streaming responses, and error states
 */
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

    const aiMessageId = Date.now().toString() + '_ai';
    const aiMessage: Message = {
      id: aiMessageId,
      content: '',
      sender: 'ai',
      timestamp: new Date(),
      mood: 'neutral',
      isStreaming: true,
    };

    addMessage(aiMessage);
    setTyping(true);

    try {
      await aiService.streamResponse(content.trim(), {
        onToken: (token: string, currentContent: string) => {
          updateStreamingMessage(aiMessageId, currentContent);
        },
        onComplete: (finalContent: string, mood) => {
          updateStreamingMessage(aiMessageId, finalContent);
          set((state) => ({
            messages: state.messages.map((msg) =>
              msg.id === aiMessageId ? { ...msg, mood, isStreaming: false } : msg
            ),
            isTyping: false,
          }));
        },
        onError: (error: string) => {
          setError(error);
          // Remove the failed AI message
          set((state) => ({
            messages: state.messages.filter((msg) => msg.id !== aiMessageId),
          }));
        }
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      // Remove the failed AI message
      set((state) => ({
        messages: state.messages.filter((msg) => msg.id !== aiMessageId),
      }));
    }
  },
}));