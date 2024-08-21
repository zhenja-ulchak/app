import { mockTodos } from './mockData';
import axios from 'axios';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const BASE_URL = `https://api.crosscore.app`;

export const fetchTodos = async () => {
 
  try {
    const response = await axios.get(`${BASE_URL}/user/customer_todo`, {
      withCredentials: true 
    });

  
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
    
  };


export const createToDoList = async (todoList) => {
  console.log(todoList);
  
  try {
    const response = await axios.post(`${BASE_URL}/user/customer_todo`, todoList , {
      withCredentials: true
    });

 
    const newTodoList = {...todoList, id: mockTodos.length + 1}
 
    return newTodoList
    
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }

}

export const fetchTodoById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/customer/${id}/contract_status`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    throw error;
  }
};

export const updateToDoList = async(id, updatedTodo) => {
  console.log(updatedTodo);
  
  try {
    const response = await axios.put(`${BASE_URL}/user/customer_todo/${id}`,updatedTodo, {
      withCredentials: true
    });

    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }

}

export const deleteToDoList = async(id) => {



  try {
    await axios.delete(`${BASE_URL}/user/customer_todo/${id}`, {
      withCredentials: true
    });
    return id; // Повертаємо id видаленої задачі або просто підтвердження успіху
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
  //   await delay(500); // Імітуємо затримку запиту
  // const index = mockTodos.findIndex(todo => todo.id === id);
  // if (index !== -1) {
  //   const [deletedTodo] = mockTodos.splice(index, 1);
  //   return deletedTodo;
  // } else {
  //   throw new Error('Todo not found');
  // }
}

