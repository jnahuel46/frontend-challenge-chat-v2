import { create } from 'zustand';

/**
 * Available app views/pages
 */
type AppView = 'landing' | 'chat' | 'voice';

/**
 * Navigation store state interface
 */
interface NavigationState {
  /** Current active view */
  currentView: AppView;
  /** Set the current view */
  setCurrentView: (view: AppView) => void;
  /** Navigate to landing page */
  goToLanding: () => void;
  /** Navigate to chat page */
  goToChat: () => void;
  /** Navigate to voice page */
  goToVoice: () => void;
}

/**
 * Navigation store for managing app view state
 * Handles transitions between landing, chat, and voice modes
 */
export const useNavigationStore = create<NavigationState>((set) => ({
  currentView: 'landing',
  setCurrentView: (view: AppView) => set({ currentView: view }),
  goToLanding: () => set({ currentView: 'landing' }),
  goToChat: () => set({ currentView: 'chat' }),
  goToVoice: () => set({ currentView: 'voice' }),
}));