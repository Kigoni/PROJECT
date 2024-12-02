// import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Article } from '../services/api';

interface ArticleListProps {
  articles: Article[];
  loading: boolean;
}

export default function ArticleList({ articles, loading }: ArticleListProps) {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#AFEEEE]"></div>
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#AFEEEE] mb-3">
                {article.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {article.abstract.replace('jats:p', '')}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{article.authors}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(article.publication_date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={16} />
                  <span>{article.citation_count} citations</span>
                </div>
                {article.doi && (
                  <a
                    href={`https://doi.org/${article.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#AFEEEE] hover:text-white transition-colors"
                  >
                    <LinkIcon size={16} />
                    <span>DOI</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}