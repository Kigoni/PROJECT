import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import pt from './locales/pt.json';
import zu from './locales/zu.json';
import fr from './locales/fr.json';
import sw from './locales/sw.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      zu: { translation: zu },
      fr: { translation: fr },
      sw: { translation: sw },
      es: { translation: es }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;