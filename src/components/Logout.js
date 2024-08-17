// src/components/Logout.js
import React from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import {Logout as apiLogout} from '../api/ApiProvaider'
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Alert } from '@mui/material';


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
     apiLogout()
  
      navigate('/login');
   
   
    } catch (error) {
      console.error('Logout Error:', error.message);
    }
  };

  return (
    <Button onClick={handleLogout}>
      Logout
      </Button>
  );
};

export default Logout;
