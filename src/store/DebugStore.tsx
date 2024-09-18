import {create} from 'zustand';

const useDebugStore = create((set) => ({
    isOpen: false,
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    setOpen: (value) => set({ isOpen: value }),
}));

export default useDebugStore;
