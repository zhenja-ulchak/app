import React, { useState } from 'react';
import TodoDashboard from './ToDo'
import Logout from '../components/Logout';
import SideBar from './SideBar'
import { Users } from './Users'
import DashApp from './Dashboard'
import Container from '@mui/material/Container';
import ToDoTable from '../components/ToDoTable'
import Debug from '../components/DebugPanel'
import useDebugStore from '../store/DebugStore'; 

const Home = () => {
  const [activeToDoTable, setActiveToDoTable] = useState(false)
  const [activeTodoDashboard, setActiveTodoDashboard] = useState(false)
  const [activeTodoApp, setActiveTodoApp] = useState(true)
  const [activeUsers, setUsers] = useState(false)
  const openDashboard = {
    display: activeTodoDashboard ? 'display' : 'none',
  }
  const openTodoApp = {
    display: activeTodoApp ? 'display' : 'none',
  }
  const openUsers = {
    display: activeUsers ? 'display' : 'none',
  }
  const openToDoTable = {

    display: activeToDoTable ? 'display' : 'none',
  }
  const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
  return (
    <>
      <Logout />

      <SideBar
        setActiveTodoDashboard={setActiveTodoDashboard}
        setActiveTodoApp={setActiveTodoApp}
        setActiveToDoTable={setActiveToDoTable}
        setUsers={setUsers}
      />
      <Container sx={{ ...openToDoTable }}>
        <ToDoTable />
      </Container>
      <Container sx={{ ...openDashboard }}>
        <TodoDashboard activeTodoDashboard={activeTodoDashboard} />
      </Container>
      <Container sx={{ ...openTodoApp }}>
        <DashApp activeTodoApp={activeTodoApp} />
      </Container>
      <Container sx={{ ...openUsers }}>
        <Users activeUsers={activeUsers} />
      </Container>

      <Debug open={isOpen} />
    </>
  );

};

export default Home;