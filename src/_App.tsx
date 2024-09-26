// import React from 'react';
// import Login from './components/Login';
// // import Home from './pages';
// import { AuthProvider, useAuth } from './AuthProvaider';
// import Debug from './components/DebugPanel'
// import { Users } from './pages/Users';
// import SideBar from './pages/sidebar';
// import FormTodo from './components/todo/FormTodo'
// import { Footer } from './pages/Footer'
// import useDebugStore from './store/DebugStore';
// import Register from './components/Register';
// import { AccountPage } from './pages/miningView/Account';
// import SettingPage from './pages/Settings';
// import ToDoDetails from './components/todo/Details';
// import DashApp from './pages/Dashboard';
// import Tools from './components/ToolsC';


// const AppContent = () => {
//   const { user } = useAuth() || { user: null };

//   // @ts-ignore
//   const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
//   return (

//     <>
//       <SideBar />
//       {!user
//         ?
//         <>
//           <Register />
//           <Login />
//         </>
//         :
//         <>

//           <FormTodo />
//           <AccountPage />
//           <SettingPage />
//           <ToDoDetails />
//           <DashApp />
//           <Tools />

//           <Users />
//         </>}

//       <Debug open={isOpen} />
//       <Footer />
//     </>



//   );
// };

// const App = () => {

//   return (

//     <AuthProvider >
//       <AppContent />
//     </AuthProvider>

//   );
// };

// export default App;
