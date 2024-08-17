import React, { useState, useEffect } from 'react';
import { fetchTodos, createToDoList, updateToDoList, deleteToDoList } from '../../api/ToDoApiProvaider';
import { styled } from '@mui/material/styles';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState({ id: null, task: '' });
  const [punch, setPunch] = useState(false);
  const [close, setClose] = useState(false);

  

  const marginButton = {
    marginTop: '8px',
    float: 'right',
    marginRight: '20px'
  };
  const updateBox = {
    width: '50%',
    position: 'fixed',
    top: '0',
    marginTop: '70px',

    zIndex: '9999',
    background: '#878787'


  }
  const updateDialog = {
    marginTop: '200px',
    width: '100%',

    zIndex: '9999',

  }
  const UpdateInput = {
    width: '83%',
    marginBottom: '40px',
    marginLeft: '10px'
  }
  const wInput = {
    width: '85%',
  };
  const conteinerW = {
    width: '86.5%',
    marginTop: '200px',
    marginLeft: '22%'
  }
  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      const task = data.data["customer_todo"]
      setTodos(task.map((i) => {
        return i
      }));
    };


    loadTodos();


  }, [punch]);

  const addTodo = async () => {
    const addedTodo = await createToDoList({ task: `${newTodo}` });
    setTodos([...todos, addedTodo]);
    setNewTodo('');
  };

  const handleEditClick = (todo) => {
    setEditTodo({
      id: todo.id,
      task: todo.text,
    });
  };

  const handleUpdate = async () => {
    try {
      const { id, task } = editTodo;
      const updatedTodo = await updateToDoList(id, { task });
      setTodos(todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      ));
      setEditTodo({ id: null, task: '' });
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
    setPunch(true)
  };
  const handleDelete = async (id) => {
    await deleteToDoList(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>

      <Container
        sx={{ ...conteinerW }}
      >
        {editTodo.id && (



          <Box sx={{ ...updateBox }}>

            <Typography sx={{ marginBottom: '40px', color: '#ffffff' }} variant="h6" noWrap component="p">
              Fix case   
              <Button
                sx={{ color: '#000000' }}
                onClick={() => setClose(true)}
              >
                <CloseIcon />
              </Button>
            </Typography>

            <TextField
              label="Update Todo"
              variant="outlined"
              sx={{
                width:'84%',
                marginBottom:'20px',
                marginLeft: '15px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f0f0f0', // Задній фон
                  borderRadius: '8px', // Радіус бордера
                  '&:hover': {
                    border: '2px solid #fff', // Бордер при наведенні
                  },
                },
              }}
              value={editTodo.task}
              onChange={(e) => setEditTodo({ ...editTodo, task: e.target.value })}
            />
            <Button sx={marginButton} variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Box>


        )}
        <h1>Add case</h1>
        <TextField
          sx={{ ...wInput }}
          label="New Todo"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button sx={marginButton} variant="contained" color="primary" onClick={addTodo}>
          Add
        </Button>
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(todo)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={todo.task} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default TodoApp;
