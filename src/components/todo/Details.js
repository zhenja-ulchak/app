import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTodoById } from '../../api/ToDoApiProvaider'; // Імпортуйте вашу функцію для отримання даних
import { Container, Paper, Typography, Box, Button } from '@mui/material';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { updateToDoList } from '../../api/ToDoApiProvaider';
import useVisibleStore from '../../store/TaskStore'

import GetFormattedDate from './components/GetFormattedDate'


const ToDoDetails = () => {
  const {setVisible} = useVisibleStore()
  const [myArray, setMyArray] = useState([]);
  const {setId} = useVisibleStore()
  const { id } = useParams(); // Отримуємо параметр `id` з URL
  const [todo, setTodo] = useState(null); // Створюємо стан для зберігання завдання
  const handleClickStart = async() => {
    setVisible(true)
    setId(todo.id)

    const storedArray = localStorage.getItem('idColor');
    const myArray = storedArray ? JSON.parse(storedArray) : [];
    
    // Додаємо новий ID в масив
    const updatedArray = [...myArray, todo.id];
    setMyArray(updatedArray);
  
    // Оновлюємо localStorage
    localStorage.setItem('idColor', JSON.stringify(updatedArray));




    const endTime = GetFormattedDate()
    
    await updateToDoList(id, { end_date: `${endTime}` });
  }

  const handleClick = async () => {
    const start = new Date(todo.start_date);
    const end = new Date(GetFormattedDate());
    const differenceInMilliseconds = end.getTime() - start.getTime();

    console.log(differenceInMilliseconds);
    await updateToDoList(id, { diff_time: differenceInMilliseconds });

  };


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



      <Button
        component={Link}
        to="/todo"
        sx={{ color: '#000000' }}
      >
        <FaArrowLeft size={30} />
      </Button>
      <Paper elevation={3} sx={{ padding: 5, width: '100%', marginTop:'40px' }}>
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
              <strong>End Date:</strong> {todo.end_date}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ float: 'right' }}>
          <Button
            onClick={() => handleClickStart()}
            sx={{ margin: '10px' }}
            variant="contained"
            color="primary">
            start
          </Button>

          <Button
            onClick={() => handleClick()}
            sx={{ margin: '10px' }}
            variant="contained"
            color="primary">
            end
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default ToDoDetails;
