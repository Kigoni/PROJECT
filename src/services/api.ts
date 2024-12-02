import axios from 'axios';

const API_BASE_URL = 'https://aphrc.site/journal_api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export interface Article {
  id: number;
  title: string;
  authors: string;
  keywords: string | null;
  publication_date: string;
  abstract: string;
  doi: string;
  url: string;
  citation_count: number;
  reference_count: number;
  publisher: string;
  article_type: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const journalApi = {
  getArticles: async (page = 1) => {
    const response = await api.get<PaginatedResponse<Article>>(`/api/article/?page=${page}`);
    return response.data;
  },

  searchArticles: async (query: string, page = 1) => {
    const response = await api.get<PaginatedResponse<Article>>(`/articles/search/?query=${query}&page=${page}`);
    return response.data;
  },

  getJournalStats: async () => {
    const response = await api.get('/journal_stats/');
    return response.data;
  }
};

export interface Country {
  id: number;
  country: string;
  created_at: string;
}

export interface Language {
  id: number;
  language: string;
  created_at: string;
}

export const metadataApi = {
  getCountries: async () => {
    const response = await api.get<Country[]>('/api/country/');
    return response.data;
  },

  getLanguages: async () => {
    const response = await api.get<Language[]>('/api/languages/');
    return response.data;
  }
};

export default api;