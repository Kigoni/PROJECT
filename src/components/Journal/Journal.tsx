import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import JournalCard from './JournalCard';

const journalEntries = [
  {
    title: 'journal.masaiMara.title',
    excerpt: 'journal.masaiMara.excerpt',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    readTime: '8',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80'
  },
  {
    title: 'journal.capeTown.title',
    excerpt: 'journal.capeTown.excerpt',
    author: 'Michael Chen',
    date: '2024-03-12',
    readTime: '6',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80'
  },
  {
    title: 'journal.zanzibar.title',
    excerpt: 'journal.zanzibar.excerpt',
    author: 'Emma Williams',
    date: '2024-03-10',
    readTime: '10',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80'
  }
];

const Journal: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('journal.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('journal.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {journalEntries.map((entry, index) => (
            <JournalCard
              key={index}
              {...entry}
              title={t(entry.title)}
              excerpt={t(entry.excerpt)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;