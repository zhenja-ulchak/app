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
import {Footer} from './pages/Footer'
import useDebugStore from './store/DebugStore'; 
import {AccountPage} from './pages/miningView/Account'


const AppContent = () => {
  const location = useLocation();

  // Перелік маршрутів, на яких не потрібно відображати SideBar
  const hideSideBarRoutes = ['/register', '/login', '/'];
// @ts-ignore
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
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route path="/todo" element={<ProtectedRoute><FormTodo /></ProtectedRoute> } />
          <Route path="/account" element={ <ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute> } />
          <Route path="/setting" element={<ProtectedRoute><SettingPage /></ProtectedRoute> } />
          <Route path="/details/:id" element={<ProtectedRoute><ToDoDetails /></ProtectedRoute> } />
          <Route path="/dashboard" element={<ProtectedRoute><DashApp /></ProtectedRoute> } />
          <Route path="/tools" element={<ProtectedRoute><Tools /></ProtectedRoute> } />
          <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute> } />
 
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
