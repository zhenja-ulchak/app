import {create} from 'zustand';

// Створюємо Zustand store
const useDateColumnStore = create(set => ({
    data: null, // Рядок, який буде зберігатись
  setData: (newData) => set({ data: newData }), // Функція для оновлення рядка
}));

export default useDateColumnStore;
