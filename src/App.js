import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './route/ProtectedRoute';
import Home from './pages/Home';
import { AuthProvider } from './AuthProvaider';
import Debug from './components/DebugPanel'
import DashApp from './pages/Dashboard';
import Tools from './pages/Tools';
import { Users } from './pages/Users';
import SettingPage from './pages/Settings';
import ToDoDetails from './components/todo/Details';
import SideBar from './pages/SideBar';
import FormTodo from './components/todo/FormTodo'
import {  Box } from '@mui/material';
import useDebugStore from './store/DebugStore'; 
import {AccountPage} from './pages/miningView/Account'
import {Footer} from './pages/Footer'

const AppContent = () => {
  const location = useLocation();

  // Перелік маршрутів, на яких не потрібно відображати SideBar
  const hideSideBarRoutes = ['/register', '/login', '/'];

  const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
  return (

    <>

      {!hideSideBarRoutes.includes(location.pathname) && (

     <>
        <SideBar />
        <Debug open={isOpen} />
        <Footer />
     </>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<FormTodo />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/details/:id" element={<ToDoDetails />} />
          <Route path="/dashboard" element={<DashApp />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Box>

     
    </>



  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;
