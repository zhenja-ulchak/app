import React from 'react';
import TodoApp from '../components/todo/FormTodo';
import {
  Container, TextField, Button, Box, Typography, IconButton,

} from '@mui/material';
const TodoDashboard = () => {

  return(
    <>
    <Box sx={{marginTop: '150px',width: '100%',}}>
    <TodoApp/>

    </Box>
      
    </>
  )
  
 
};

export default TodoDashboard;