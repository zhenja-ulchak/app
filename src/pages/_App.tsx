import React from 'react';
import { IntlProvider } from 'next-intl';
import Debug from '../components/debugpanel';
import SideBar from './sidebar';
import { Footer } from './footer';
import useDebugStore from '../store/DebugStore';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';




const AppContent = () => {
  const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
  const router = useRouter();
  

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
  const { locale, messages } = pageProps;
  console.log('Locale:', locale);
  console.log('Messages:', messages);
  return (
    <>
     <IntlProvider locale={locale} messages={messages}>
      <AppContent {...pageProps} />
      <Component {...pageProps} /> {/* Відображаємо вміст сторінки */}
      </IntlProvider>
    </>
  );
};

export default MyApp;
