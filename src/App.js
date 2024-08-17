import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './route/ProtectedRoute';
import Home from './pages/Home';
import { AuthProvider } from './AuthProvaider'
import UsersList from './components/UsersList';
import DashApp from './pages/Dashboard';
import Tools from './pages/Tools';
import { Users } from './pages/Users';
import SettingPage  from '../src/pages/Settings';

const App = () => {
  return (
    
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> }  />

          <Route path="/setting" element={<SettingPage />} />
       
          <Route path="/dashboard" element={<DashApp />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        </AuthProvider>
      </Router>
   
  );
};

export default App;
