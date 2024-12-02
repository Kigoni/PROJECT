import React, { useState, ChangeEvent } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  question: string;
}

export default function QAForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      question: ''
    });
  };

  return (
    <div className="rounded-xl bg-gradient-to-r p-[1px] from-cyan-500/20 to-purple-500/20">
      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Ask a Question
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-300 mb-1">
              Your Question
            </label>
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-colors flex items-center justify-center gap-2 group"
          >
            <span>Submit Question</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
}