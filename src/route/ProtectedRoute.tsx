import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../AuthProvaider'

const ProtectedRoute = ({ children }: any) => {
  const {user} :any = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
