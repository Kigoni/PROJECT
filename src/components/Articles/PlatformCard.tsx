// import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlatformCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function PlatformCard({ title, description, image, link }: PlatformCardProps) {
  return (
    <motion.article 
      className="group relative overflow-hidden rounded-2xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>
      
      <div className="relative p-8 h-full flex flex-col min-h-[400px]">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>
        </div>
        
        <a
          href={link}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group/link"
        >
          <span className="font-medium">Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}