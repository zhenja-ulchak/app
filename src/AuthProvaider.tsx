// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { GetLogin } from './api/ApiProvaider'; // виправив шлях

import useLoginStore from './store/UserStor'; // виправив шлях

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setData }:any = useLoginStore();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await GetLogin(email, password);
      console.log(res);

      setData(res.data); // зберігаємо дані користувача в стан
      if (res.data?.token) { // якщо є токен в даних
        setUser(email); // можна зберігати дані користувача, наприклад, email
        localStorage.setItem('user', email); // зберігаємо в localStorage (тут можна зберігати токен)
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
