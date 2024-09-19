import {create} from 'zustand';

type LoginStore = {
    data: string | null
    setData: ( newData: null | string )=> void
}

const useLoginStore = create<LoginStore>((set) => ({
    data: null,  // Початковий стан для даних
    setData: (newData: null | string) => set({ data: newData }), // Функція для встановлення даних
}));

export default useLoginStore;