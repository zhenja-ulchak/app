import React, { useState } from 'react';
import TodoDashboard from './ToDo'

import SideBar from './SideBar'
import { Users } from './Users'
import DashApp from './Dashboard'
import Container from '@mui/material/Container';
import ToDoTable from '../components/ToDoTable'
import Debug from '../components/DebugPanel'
import useDebugStore from '../store/DebugStore'; 
import Box from '@mui/material/Box';

const Home = () => {
  const [activeToDoTable, setActiveToDoTable] = useState(false)
  const [activeTodoDashboard, setActiveTodoDashboard] = useState(false)
  const [activeTodoApp, setActiveTodoApp] = useState(true)
  const [activeUsers, setUsers] = useState(false)

  const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
  return (
    <>
     
   
      <Container>
        <ToDoTable />
      </Container>
      <Box >
        <TodoDashboard  />
      </Box>
      <Container >
        <DashApp  />
      </Container>
      <Container>
        <Users  />
      </Container>

      <Debug open={isOpen} />
    </>
  );

};

export default Home;