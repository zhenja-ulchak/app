import React from 'react';
import Debug from '../components/debugpanel'
import SideBar from './sidebar';
import { Footer } from './footer'
import useDebugStore from '../store/DebugStore';
import { AppProps } from 'next/app';



const AppContent = () => {
    const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
  
    return (
      <>
        <SideBar />
        <Debug open={isOpen} />
        <Footer />
      </>
    );
  };
  
  const MyApp = ({ Component, pageProps }: AppProps) => {
    console.log('Component:', Component);
    console.log('pageProps:', pageProps);
    return (
      <>
        <AppContent />
        <Component {...pageProps} /> {/* Відображаємо вміст сторінки */}
      </>
    );
  };
  
  export default MyApp;