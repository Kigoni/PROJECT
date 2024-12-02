import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Camera, Heart } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#AFEEEE] mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-300 mb-8">
              {t('about.description')}
            </p>
            <div className="space-y-4">
              {[
                { icon: Compass, text: 'about.point1' },
                { icon: Camera, text: 'about.point2' },
                { icon: Heart, text: 'about.point3' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-6 h-6 text-[#AFEEEE]" />
                  <span className="text-gray-300">{t(item.text)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
              alt="African Safari"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}