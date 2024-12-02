import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const destinations = [
  {
    name: 'destinations.serengeti.name',
    description: 'destinations.serengeti.description',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80'
  },
  {
    name: 'destinations.victoria.name',
    description: 'destinations.victoria.description',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80'
  },
  {
    name: 'destinations.sahara.name',
    description: 'destinations.sahara.description',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80'
  }
];

export default function Destinations() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="destinations" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#AFEEEE] mb-4">
            {t('destinations.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={destination.image}
                alt={t(destination.name)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-[#AFEEEE] mb-2">
                  {t(destination.name)}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(destination.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}