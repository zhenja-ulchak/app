import {create} from 'zustand';

const useVisibleStore = create((set) => ({
    isVisible: false,
    setVisible: (value) => set({ isVisible: value }),
    idTask: 1,
    setId: (myId) => set({ idTask: myId }),
}));

export default useVisibleStore;
