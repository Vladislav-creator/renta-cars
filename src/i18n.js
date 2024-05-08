import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ua from './locales/ua.json';

i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      US: {
        translation: en,
      },
      RU: {
        translation: ru,
      },
      UA: {
        translation: ua,
      },
    },
    fallbackLng: 'en', // язык по умолчанию, если нет подходящего перевода
    debug: true, // для вывода отладочной информации в консоль
    interpolation: {
      escapeValue: false, // реакт уже делает экранирование для XSS атак
    },
    react: {
      useSuspense: false, // отключаем автоматическое использование Suspense в react-i18next
    },
  });


export default i18n;