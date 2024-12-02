// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PlatformCard from './PlatformCard';

interface Platform {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface PlatformSectionProps {
  title: string;
  description: string;
  platforms: Platform[];
  columns?: number;
}

export default function PlatformSection({ title, description, platforms, columns = 2 }: PlatformSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {description}
          </p>
        </motion.div>

        <div className={`grid md:grid-cols-${columns} gap-8`}>
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <PlatformCard {...platform} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}