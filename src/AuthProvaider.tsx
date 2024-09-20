// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { GetLogin } from './api/ApiProvaider'; 

import useLoginStore from './store/UserStor'; 

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const { setData }:any = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const res = await GetLogin(username, password);
      console.log( res?.data?.user?.[0] );

      setData(res?.data?.user?.[0]); // зберігаємо дані користувача в стан
      if (res.data?.token) { // якщо є токен в даних
        setUser(username); // можна зберігати дані користувача, наприклад, email
        localStorage.setItem('user', username); // зберігаємо в localStorage (тут можна зберігати токен)
        localStorage.setItem('token', res.data.token); // зберігаємо токен
        navigate('/home');
      } 
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // видаляємо токен при виході
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
