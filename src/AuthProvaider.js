// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetLogin } from './api/ApiProvaider';
import useLoginStore from './store/UserStor'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { setData } = useLoginStore()
  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, []);

  const login = async (email, password) => {
  try {
      const res = await GetLogin(email, password);
      console.log(res);
      
      setData(res.data)
    
      
      if (res.data) {
        setUser({ email });
        localStorage.setItem('user', email); // Token not email
        navigate('/home');
      } 
    } catch (err) {
      console.error(err);
      throw err;
    }

  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
