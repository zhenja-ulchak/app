import axios from 'axios';

import{ CustomerTodoType } from '../types/ToDoCustomerType'


const BASE_URL = `https://api.crosscore.app`;

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Тип для завдань


// Об'єднана функція для отримання всіх завдань або завдання за ID
export const fetchTodos = async (id?: number): Promise<CustomerTodoType | CustomerTodoType[]> => {
  try {
    const endpoint = id ? `/user/customer_todo/${id}` : `/user/customer_todo`;
    const response = await client.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching todo data:', error);
    throw error;
  }
};

export const createToDoList = async (todoList: CustomerTodoType): Promise<CustomerTodoType> => {
  try {
    const response = await client.post(`/user/customer_todo`, todoList);
    // Можливо, потрібен цей код для створення нового завдання локально:
    const newTodoList = { ...todoList, id: response.data.id };
    return newTodoList;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const updateToDoList = async (id: number, updatedTodo: Partial<CustomerTodoType>): Promise<CustomerTodoType> => {
  try {
    const response = await client.put(`/user/customer_todo/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const deleteToDoList = async (id: number): Promise<number> => {
  try {
    await client.delete(`/user/customer_todo/${id}`);
    return id; // Повертаємо ID видаленого завдання
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
