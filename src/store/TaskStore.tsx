import {create} from 'zustand';

const useVisibleStore = create((set) => ({
    isVisible: false,
    setVisible: (value: any) => set({ isVisible: value }),
    idTask: 1,
    setId: (myId: any) => set({ idTask: myId }),
}));

export default useVisibleStore;
