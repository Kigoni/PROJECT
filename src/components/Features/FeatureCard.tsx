import React from 'react';
import { motion } from 'framer-motion';
import Image from './Image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="h-full"
    >
      <div className="h-full rounded-xl border-2 border-gray-800 p-8 transition-all duration-300 hover:-rotate-3 hover:bg-primary/10 glass-effect">
        <Image
          src={icon}
          alt={title}
          width={57}
          height={69}
          className="mb-6 h-[70px] w-auto"
        />
        <h3 className="mb-4 text-2xl font-semibold text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;