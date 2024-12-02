import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'zu', name: 'Zulu' },
  { code: 'fr', name: 'French' },
  { code: 'sw', name: 'Swahili' },
  { code: 'es', name: 'Spanish' }
];

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-[#AFEEEE] transition-colors"
      >
        <Globe size={20} />
        <span className="hidden md:inline">{t('Language')}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#AFEEEE]/10"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}