// src/components/Logout.js
import React from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import {Logout as apiLogout} from '../api/ApiProvaider'
import {  Button,  } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
   
     apiLogout()
  
      navigate('/login');
   
   
    
  };
  const { t } = useTranslation();
  return (
    <Button variant="outlined" onClick={handleLogout}>
      {t('logout.Logout')}
      </Button>
  );
};

export default Logout;
