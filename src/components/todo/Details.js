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

  if (!todo) {
    return <div>Loading...</div>; // Показуємо "завантаження", поки дані не отримані
  }

  return (
    <>


      <Container component="main" sx={{ marginTop: '100px' }}>
        <Button
          component={Link}
          to="/todo"
          sx={{ color: '#000000' }}
        >
          <FaArrowLeft size={30} />
        </Button>
        <Paper elevation={3} sx={{ padding: 5 }}>
          <Typography variant="h4" gutterBottom>
            Todo Details
          </Typography>
          <Box sx={{ marginBottom: 2, }}>
            <Typography variant="h6" component="div">
              <strong>ID:</strong> {todo.id}
            </Typography>
            <Typography variant="h6" component="div">
              <strong>Task:</strong> {todo.task}
            </Typography>
            <Typography variant="h6" component="div">
              <strong>Status:</strong> {todo.status}
            </Typography>
            <Typography variant="h6" component="div">
              <strong>Start Date:</strong> {todo.start_date}
            </Typography>
            <Typography variant="h6" component="div">
              <strong>End Date:</strong> {todo.end_date}
            </Typography>

          </Box>
          <Box sx={{ float: 'right' }}>
            <Button variant="contained" color="primary">
              start
            </Button>

            <Button variant="contained" color="primary">
              end
            </Button>
          </Box>
        </Paper>
      </Container></>
  );
};

export default ToDoDetails;
