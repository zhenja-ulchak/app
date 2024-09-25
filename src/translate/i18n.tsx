import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// @ts-ignore
import en from './locales/en/translation.json';
// @ts-ignore
import ua from './locales/ua/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    lng: 'en', // Яка мова за замовчуванням
    fallbackLng: 'ua', // Мова за замовчуванням, якщо переклад відсутній
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
