import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock } from 'lucide-react';

interface JournalCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  index: number;
}

const JournalCard: React.FC<JournalCardProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-effect rounded-xl overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default JournalCard;