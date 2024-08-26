import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTodoById } from '../../api/ToDoApiProvaider'; // Імпортуйте вашу функцію для отримання даних
import { Container, Paper, Typography, Box, Button } from '@mui/material';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ToDoDetails = () => {
  const { id } = useParams(); // Отримуємо параметр `id` з URL
  const [todo, setTodo] = useState(null); // Створюємо стан для зберігання завдання

  useEffect(() => {
    const loadTodoDetails = async () => {
      try {
        const data = await fetchTodoById(id); // Отримуємо дані завдання за `id`

        const task = data.data["customer_todo"];
        console.log(task[0])

        setTodo(task[0]);
      } catch (error) {
        console.error("Error fetching todo details:", error);
      }
    };

    loadTodoDetails();
  }, [id]);

  const diffTime = () => {
    const totalSeconds = Math.floor(todo.diff_time / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days} day ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  if (!todo) {
    return <div>Loading...</div>; // Показуємо "завантаження", поки дані не отримані
  }

  return (
    <>



      <Button
        component={Link}
        to="/todo"
        sx={{ color: '#000000' }}
      >
        <FaArrowLeft size={30} />
      </Button>
      <Paper elevation={3} sx={{ padding: 5, width: '100%', height: '80vh' }}>
        <Typography variant="h4" gutterBottom>
          Todo Details
          <Typography sx={{ float: 'right' }} variant="h4" gutterBottom>
          {diffTime()}
        </Typography>
        </Typography>

       
        <Box sx={{marginBottom:'10px' }}>
          <Paper elevation={2} sx={{ padding: 2, marginBottom:'10px'  }}>
            <Typography variant="h6" component="div">
              <strong>ID:</strong> {todo.id}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2 , marginBottom:'10px'}}>
            <Typography variant="h6" component="div">
              <strong>Task:</strong> {todo.task}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2 , marginBottom:'10px'}}>
            <Typography variant="h6" component="div">
              <strong>Status:</strong> {todo.status}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2 , marginBottom:'10px'}}>
            <Typography variant="h6" component="div">
              <strong>Start Date:</strong> {todo.start_date}
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ padding: 2 , marginBottom:'10px'}}>
            <Typography variant="h6" component="div">
              <strong>End Date:</strong> {todo.end_date}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ float: 'right' }}>
          <Button sx={{ margin: '10px' }} variant="contained" color="primary">
            start
          </Button>

          <Button sx={{ margin: '10px' }} variant="contained" color="primary">
            end
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default ToDoDetails;
