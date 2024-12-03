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
        {/* Section Header */}
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

        {/* Grid of Platform Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-8`}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gray-900">
                  <img
                    src={platform.image}
                    alt={platform.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {platform.title}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {platform.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
