// // src/context/AuthContext.tsx
// import React, { createContext, useState, useEffect, ReactNode } from 'react';
// import { useRouter } from 'next/router';  // Змінено на useRouter

// import { GetLogin } from './api/ApiProvaider'; 

// import useLoginStore from './store/UserStor'; 

// type AuthContextType = { 
//   user: string | null;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

//   const AuthContext = createContext<AuthContextType | null>(null);

// type AuthProviderProps = {
//   children: ReactNode;
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<string | null>(null);
//   const { setData }: any = useLoginStore();
//   const router = useRouter();  // Змінено на useRouter

//   useEffect(() => {
//     setUser(localStorage.getItem('user'));
//   }, []);

//   const login = async (username: string, password: string) => {
//     try {
//       const res = await GetLogin(username, password);
//       console.log(res);
      
//       setData(res.data['client']);
      
//       if (res.data) {
//         setUser(username);
//         localStorage.setItem('user', username); 
//         router.push('/home');  // Змінено на router.push
//       } 
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');  // Додано видалення з localStorage
//     router.push('/login');  // Змінено на router.push
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   // console.log("Auth Context:", context);
//   // if (!context) {
//   //   throw new Error("useAuth must be used within an AuthProvider");
//   // }
//   return context;
// };
