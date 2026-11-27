import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const initialSettings = { theme: 'light', fontSize: 16, nickname: '' }

const useSettingsStore = create(
  persist(
    (set) => ({
      ...initialSettings,
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setFontSize: (fontSize) => set({ fontSize }),
      setNickname: (nickname) => set({ nickname }),
      reset: () => set(initialSettings),
    }),
    { name: 'day3-settings' },
  ),
)

export default useSettingsStore
