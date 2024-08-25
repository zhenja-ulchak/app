import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './route/ProtectedRoute';
import Home from './pages/Home';
import { AuthProvider } from './AuthProvaider';
import UsersList from './components/UsersList';
import DashApp from './pages/Dashboard';
import Tools from './pages/Tools';
import { Users } from './pages/Users';
import SettingPage from './pages/Settings';
import ToDoDetails from './components/todo/Details';
import SideBar from './pages/SideBar';
import FormTodo from './components/todo/FormTodo'


const AppContent = () => {
  const location = useLocation();
  
  // Перелік маршрутів, на яких не потрібно відображати SideBar
  const hideSideBarRoutes = ['/register', '/login'];

  return (
    <div>
      {!hideSideBarRoutes.includes(location.pathname) && <SideBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<FormTodo />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/details/:id" element={<ToDoDetails />} />
        <Route path="/dashboard" element={<DashApp />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
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
