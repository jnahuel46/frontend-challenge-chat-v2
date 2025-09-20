import { Mood } from '../types';

export interface AIResponse {
  content: string;
  mood: Mood;
}

export interface StreamingCallback {
  onToken: (token: string, content: string) => void;
  onComplete: (finalContent: string, mood: Mood) => void;
  onError: (error: string) => void;
}

class AIService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://generativelanguage.googleapis.com/v1beta';

  constructor() {
    this.apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY;
    if (!this.apiKey || this.apiKey === 'your_gemini_api_key_here') {
      console.warn('Gemini API key not configured. Using mock responses.');
    }
  }

  private detectMood(content: string): Mood {
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes('!') || lowerContent.includes('amazing') || lowerContent.includes('excited')) {
      return 'excited';
    }
    if (lowerContent.includes('sad') || lowerContent.includes('sorry') || lowerContent.includes('unfortunately')) {
      return 'negative';
    }
    if (lowerContent.includes('great') || lowerContent.includes('wonderful') || lowerContent.includes('excellent')) {
      return 'positive';
    }
    if (lowerContent.includes('think') || lowerContent.includes('consider') || lowerContent.includes('perhaps')) {
      return 'thoughtful';
    }

    return 'neutral';
  }

  private async mockStreamingResponse(message: string, callbacks: StreamingCallback): Promise<void> {
    const responses = [
      "That's an interesting point! Let me think about it...",
      "I understand what you're saying. Here's my perspective on that topic.",
      "Great question! I'd love to help you explore this further.",
      "Thanks for sharing that with me. I appreciate your thoughtful input.",
      "That reminds me of something similar I've encountered before. Let me elaborate.",
      "I see what you're getting at. This is actually quite fascinating to consider.",
      "Your question touches on an important aspect that many people wonder about."
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];
    const mood = this.detectMood(response);

    // Simulate streaming with realistic typing speed
    let currentContent = '';
    for (let i = 0; i <= response.length; i++) {
      currentContent = response.substring(0, i);
      callbacks.onToken(response[i - 1] || '', currentContent);
      await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 40));
    }

    callbacks.onComplete(response, mood);
  }

  private async callGeminiAPI(message: string, callbacks: StreamingCallback): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Iris, a helpful and friendly AI assistant. Respond to the user's message in a conversational way. Keep responses concise but helpful.\n\nUser message: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I couldn\'t generate a response.';
      const mood = this.detectMood(content);

      // Simulate streaming for better UX
      let currentContent = '';
      for (let i = 0; i <= content.length; i++) {
        currentContent = content.substring(0, i);
        callbacks.onToken(content[i - 1] || '', currentContent);
        await new Promise(resolve => setTimeout(resolve, 20));
      }

      callbacks.onComplete(content, mood);
    } catch (error) {
      console.error('Gemini API Error:', error);
      callbacks.onError(error instanceof Error ? error.message : 'Failed to get AI response');
    }
  }

  async streamResponse(message: string, callbacks: StreamingCallback): Promise<void> {
    if (!this.apiKey || this.apiKey === 'your_gemini_api_key_here') {
      return this.mockStreamingResponse(message, callbacks);
    }

    return this.callGeminiAPI(message, callbacks);
  }

  async generateResponse(message: string): Promise<AIResponse> {
    return new Promise((resolve, reject) => {
      this.streamResponse(message, {
        onToken: () => {}, // Ignore tokens for non-streaming
        onComplete: (content, mood) => resolve({ content, mood }),
        onError: (error) => reject(new Error(error))
      });
    });
  }
}

export const aiService = new AIService();