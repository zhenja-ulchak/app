import { create } from 'zustand';

type DebugStore = {
  isOpen: boolean;
  toggleOpen: () => void;
  setOpen: (value: boolean) => void;
};

const useDebugStore = create<DebugStore>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (value: boolean) => set({ isOpen: value }),
}));

export default useDebugStore;