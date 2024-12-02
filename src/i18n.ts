// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: 'Home',
      features: 'Features',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      language: 'Language',
      dashboard: 'Dashboard',
        footerText: "This is a footer in English",
      },
    },
    // Add more languages here if needed
  },
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
