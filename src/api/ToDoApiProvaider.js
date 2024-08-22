import { mockTodos } from './mockData';
import axios from 'axios';


const BASE_URL = `https://api.crosscore.app`;

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export const fetchTodos = async () => {
 
  try {
    const response = await client.get(`/user/customer_todo`);

  
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
    
  };


export const createToDoList = async (todoList) => {
  console.log(todoList);
  
  try {
    const response = await client.post(`/user/customer_todo`, todoList );

 
    const newTodoList = {...todoList, id: mockTodos.length + 1}
 
    return newTodoList
    
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }

}

export const fetchTodoById = async (id) => {
  try {
    const response = await client.get(`/user/customer/${id}/contract_status`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    throw error;
  }
};

export const updateToDoList = async(id, updatedTodo) => {
  console.log(updatedTodo);
  
  try {
    const response = await client.put(`/user/customer_todo/${id}`,updatedTodo);

    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }

}

export const deleteToDoList = async(id) => {



  try {
    await client.delete(`/user/customer_todo/${id}`);
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

