import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchTodos, updateToDoList } from '../../api/ToDoApiProvaider'; // Імпортуйте ваші функції для отримання та оновлення даних
import { Container, Paper, Typography, Box, Button } from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import useVisibleStore from '../../store/TaskStore';
import GetFormattedDate from './components/GetFormattedDate';

// Типи даних
interface Todo {
  id: number;
  task: string;
  status: string;
  start_date: string;
  end_date?: string;
}

const ToDoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Отримуємо параметр `id` з URL
  const { setVisible, setId }: any = useVisibleStore();
  const [todo, setTodo] = useState<Todo | null>(null); // Створюємо стан для зберігання завдання
  const [myArray, setMyArray] = useState<number[]>([]); // Стан для масиву ID

  // Обробник для початку завдання
  const handleClickStart = async () => {
    setVisible(true);
    setId(todo!.id);

    const storedArray = localStorage.getItem('idColor');
    const myArray = storedArray ? JSON.parse(storedArray) : [];

    const updatedArray = [...myArray, todo!.id];
    setMyArray(updatedArray);
    localStorage.setItem('idColor', JSON.stringify(updatedArray));

    const endTime = GetFormattedDate();
    await updateToDoList(todo!.id, { end_date: `${endTime}` });
  };

  // Обробник для завершення завдання
  const handleClickEnd = async () => {
    const start = new Date(todo!.start_date);
    const end = new Date(GetFormattedDate());
    const differenceInMilliseconds = String(end.getTime() - start.getTime());
    await updateToDoList(todo!.id, { diff_time: differenceInMilliseconds });
  };

  useEffect(() => {
    const loadTodoDetails = async () => {
      try {
        const data = await fetchTodos(Number(id));
        // @ts-ignore
        const task = data.data.customer_todo[0];
        setTodo(task);
      } catch (error) {
        console.error('Error fetching todo details:', error);
      }
    };

    loadTodoDetails();
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>; // Показуємо "завантаження", поки дані не отримані
  }

  return (
    <>
      <Button component={Link} to="/todo" sx={{ color: '#000000' }}>
        <FaArrowLeft size={30} />
      </Button>

      <Paper elevation={3} sx={{ padding: 5, width: '100%', marginTop: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Todo Details
        </Typography>

        <Box sx={{ marginBottom: '10px' }}>
          <Paper elevation={2} sx={{ padding: 2, marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              <strong>ID:</strong> {todo.id}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2, marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              <strong>Task:</strong> {todo.task}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2, marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              <strong>Status:</strong> {todo.status}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2, marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              <strong>Start Date:</strong> {todo.start_date}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2, marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              <strong>End Date:</strong> {todo.end_date || 'N/A'}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ float: 'right' }}>
          <Button onClick={handleClickStart} sx={{ margin: '10px' }} variant="contained" color="primary">
            Start
          </Button>

          <Button onClick={handleClickEnd} sx={{ margin: '10px' }} variant="contained" color="primary">
            End
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default ToDoDetails;
