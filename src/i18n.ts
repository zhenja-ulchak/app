import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Ініціалізуйте i18next
i18n
  .use(HttpApi) // Підключення бекенду для завантаження перекладів
  .use(LanguageDetector) // Автоматичне визначення мови
  .use(initReactI18next) // Інтеграція з React
  .init({
    fallbackLng: 'en', // Резервна мова
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React автоматично екранує значення
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Шлях до файлів перекладу
    },
  });

export default i18n;
