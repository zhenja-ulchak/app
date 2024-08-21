import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTodoById } from '../../api/ToDoApiProvaider'; // Імпортуйте вашу функцію для отримання даних

const ToDoDetails = () => {
  const { id } = useParams(); // Отримуємо параметр `id` з URL
  const [todo, setTodo] = useState(null); // Створюємо стан для зберігання завдання

  useEffect(() => {
    const loadTodoDetails = async () => {
      try {
        const data = await fetchTodoById(id); // Отримуємо дані завдання за `id`
        setTodo(data);
      } catch (error) {
        console.error("Error fetching todo details:", error);
      }
    };

    loadTodoDetails();
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>; // Показуємо "завантаження", поки дані не отримані
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Task:</strong> {todo.task}</p>
      <p><strong>Status:</strong> {todo.status}</p>
      <p><strong>Start Date:</strong> {todo.start_date}</p>
      <p><strong>End Date:</strong> {todo.end_date}</p>
      {/* Відобразіть інші деталі завдання */}
    </div>
  );
};

export default ToDoDetails;
