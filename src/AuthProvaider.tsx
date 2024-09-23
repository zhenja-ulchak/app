// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { GetLogin } from './api/ApiProvaider'; 

import useLoginStore from './store/UserStor'; 
import { string } from 'zod';

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
    setUser(localStorage.getItem('user'));
  }, []);

  const login = async (username: string, password: string) => {
    try {
        const res = await GetLogin(username, password);
        console.log(res);
        
        setData(res.data['client'])
      
        
        if (res.data) {
          setUser( username );
          localStorage.setItem('user', username); 
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
};
