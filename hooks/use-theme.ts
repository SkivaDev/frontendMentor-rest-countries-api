import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      
      toggleTheme: () =>
        set((state) => ({ isDark: !state.isDark })),
      
      setDarkTheme: () => set({ isDark: true }),
      
      setLightTheme: () => set({ isDark: false }),
    }),
    {
      name: 'theme-storage', // Nombre de la clave en localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
