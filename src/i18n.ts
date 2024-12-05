// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next
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
        footerText: 'This is a footer in English',
      },
    },
    // Additional languages can be added here
  },
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
