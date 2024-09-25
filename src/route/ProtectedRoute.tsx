import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../AuthProvaider'

const ProtectedRoute = ({ children }: any) => {
  // const {user} :any = useAuth();
  const storedUser = localStorage.getItem('user');

  console.log(storedUser);
  
  if (!storedUser) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
