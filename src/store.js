import { create } from 'zustand';

const useStore = create((set) => ({
  // State for navigation
  targetSection: null,
  setTargetSection: (section) => set({ targetSection: section }),
  clearTargetSection: () => set({ targetSection: null }),

  // State for scroll progress
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),

  // State for performance/accessibility
  lowFidelity: false,
  toggleLowFidelity: () => set((state) => ({ lowFidelity: !state.lowFidelity })),
}));

export default useStore;