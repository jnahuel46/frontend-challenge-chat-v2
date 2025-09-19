import { render, screen } from '@testing-library/react';
import MessageBubble from './MessageBubble';
import { Message } from '../../../types';

const mockUserMessage: Message = {
  id: '1',
  content: 'Hello there!',
  sender: 'user',
  timestamp: new Date('2023-10-01T10:00:00Z'),
};

const mockAIMessage: Message = {
  id: '2',
  content: 'Hi! How can I help you today?',
  sender: 'ai',
  timestamp: new Date('2023-10-01T10:01:00Z'),
  mood: 'positive',
};

describe('MessageBubble', () => {
  test('renders user message correctly', () => {
    render(<MessageBubble message={mockUserMessage} />);

    expect(screen.getByText('Hello there!')).toBeInTheDocument();
    expect(screen.getByLabelText('User avatar')).toBeInTheDocument();
  });

  test('renders AI message with mood badge', () => {
    render(<MessageBubble message={mockAIMessage} />);

    expect(screen.getByText('Hi! How can I help you today?')).toBeInTheDocument();
    expect(screen.getByLabelText('AI Assistant avatar')).toBeInTheDocument();
    expect(screen.getByText('Positive')).toBeInTheDocument();
  });

  test('displays timestamp correctly', () => {
    render(<MessageBubble message={mockUserMessage} />);
    // Use a more flexible approach to test timestamp presence
    const timestamp = screen.getByText(/\d{1,2}:\d{2}\s?(AM|PM)/i);
    expect(timestamp).toBeInTheDocument();
  });

  test('shows streaming animation for streaming messages', () => {
    const streamingMessage = { ...mockAIMessage, isStreaming: true };
    render(<MessageBubble message={streamingMessage} />);

    const bubble = screen.getByText('Hi! How can I help you today?').closest('div');
    expect(bubble).toHaveClass('streaming');
  });
});