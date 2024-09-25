import {create} from 'zustand';

type DateColumn = {
  data: string | null
  setData:  (newData: string | null) => void
}

// Створюємо Zustand store
const useDateColumnStore = create<DateColumn>(set => ({
    data: null, // Рядок, який буде зберігатись
  setData: (newData:  string | null) => set({ data: newData }), // Функція для оновлення рядка
}));

export default useDateColumnStore;
