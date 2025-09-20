import { create } from 'zustand';

type AppView = 'landing' | 'chat';

interface NavigationState {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  goToLanding: () => void;
  goToChat: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentView: 'landing',
  setCurrentView: (view: AppView) => set({ currentView: view }),
  goToLanding: () => set({ currentView: 'landing' }),
  goToChat: () => set({ currentView: 'chat' }),
}));