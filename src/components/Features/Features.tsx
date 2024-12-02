import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '/assets/img/icons/icon-violet-feature-1.svg',
      title: t('features.items.0.title'),
      description: t('features.items.0.description'),
    },
    {
      icon: '/assets/img/icons/icon-violet-feature-2.svg',
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
    },
    {
      icon: '/assets/img/icons/icon-violet-feature-3.svg',
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
    },
    {
      icon: '/assets/img/icons/icon-violet-feature-4.svg',
      title: t('features.items.3.title'),
      description: t('features.items.3.description'),
    },
  ];

  return (
    <section className="relative z-10 bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('features.title')}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;