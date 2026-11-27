import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: { name: '김리액트' },

  login: () => set({ user: { name: '김리액트' } }),
  logout: () => set({ user: null }),
}))

export default useUserStore
