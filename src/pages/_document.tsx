// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

 function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using Next.js" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>My Next.js App</title>
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Main /> {/* Тут рендериться ваш основний контент */}
        <NextScript /> {/* Сюди підключаються всі необхідні скрипти */}
      </body>
    </Html>
  );
}
export default Document
