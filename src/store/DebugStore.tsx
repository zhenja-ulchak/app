import {create} from 'zustand';

const useDebugStore = create((set) => ({
    isOpen: false,
    toggleOpen: () => set((state: { isOpen: any; }) => ({ isOpen: !state.isOpen })),
    setOpen: (value: any) => set({ isOpen: value }),
}));

export default useDebugStore;
