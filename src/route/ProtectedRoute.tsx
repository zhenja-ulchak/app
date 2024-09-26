import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }: any) => {

  const storedUser = localStorage.getItem('user');

  console.log(storedUser);
  
  if (!storedUser) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
