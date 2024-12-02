import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { t } = useTranslation();
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          className="w-full bg-gray-900/50 backdrop-blur-lg text-white rounded-full px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-[#AFEEEE] placeholder-gray-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </div>
    </form>
  );
}