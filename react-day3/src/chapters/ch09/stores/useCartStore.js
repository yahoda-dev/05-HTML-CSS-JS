import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const exists = state.items.find((item) => item.id === product.id)
      if (exists) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        }
      }
      return { items: [...state.items, { ...product, qty: 1 }] }
    }),

  changeQty: (id, delta) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    })),

  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),

  clear: () => set({ items: [] }),
}))

export default useCartStore
