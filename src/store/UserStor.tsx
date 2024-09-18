import create from 'zustand';

const useLoginStore = create((set) => ({
    data: null,  // Початковий стан для даних
    setData: (newData) => set({ data: newData }), // Функція для встановлення даних
}));

export default useLoginStore;