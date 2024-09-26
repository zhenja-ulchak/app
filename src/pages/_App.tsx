import React from 'react';
import Debug from '../components/debugpanel';
import SideBar from './sidebar';
import { Footer } from './footer';
import useDebugStore from '../store/DebugStore';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const AppContent = () => {
  const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
  const router = useRouter();
 // Отримуємо шлях

  // Перелік маршрутів, на яких не потрібно відображати SideBar
  const hideSideBarRoutes = ['/register', '/login','/index','/'];
  const pathname = router.pathname; 
console.log(pathname);

  return (
    <>
      {!hideSideBarRoutes.includes(pathname) && (
        <>
          <SideBar />
          <Debug open={isOpen} />
          <Footer />
        </>
      )}
    </>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <AppContent />
      <Component {...pageProps} /> {/* Відображаємо вміст сторінки */}
    </>
  );
};

export default MyApp;
