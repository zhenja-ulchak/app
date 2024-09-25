import { create } from 'zustand';

type VisibleStore = {
  isVisible: boolean;
  setVisible: (value: boolean) => void; 
  idTask: number;
  setId: (myId: number) => void; 
}

const useVisibleStore = create<VisibleStore>((set) => ({
  isVisible: false,
  setVisible: (value: boolean) => set({ isVisible: value }),
  idTask: 1, 
  setId: (myId: number) => set({ idTask: myId }), 
}));

export default useVisibleStore;