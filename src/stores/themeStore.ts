import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../types';

/**
 * Theme store state interface
 */
interface ThemeState {
  /** Current active theme */
  theme: Theme;
  /** Toggle between light and dark themes */
  toggleTheme: () => void;
  /** Set specific theme */
  setTheme: (theme: Theme) => void;
}

/**
 * Theme store for managing light/dark mode
 * Persists theme preference in localStorage and syncs with DOM
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark';
        set({ theme: newTheme });
        document.documentElement.setAttribute('data-theme', newTheme);
      },
      setTheme: (theme: Theme) => {
        set({ theme });
        document.documentElement.setAttribute('data-theme', theme);
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.setAttribute('data-theme', state.theme);
        }
      },
    }
  )
);