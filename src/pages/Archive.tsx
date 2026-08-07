import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../data';
import { BookOpen, Search, Clock, Tag } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

export function Archive() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<'All' | 'News' | 'History' | 'Culture'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = MOCK_ARTICLES.filter(article => {
    const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            Community Archive
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl">
            Explore historical articles, cultural deep-dives, and the latest news from Amassoma and the ACDS.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-start md:items-center">
          <div className="flex flex-wrap gap-2">
            {['All', 'News', 'History', 'Culture'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input 
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={article.id} 
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div 
                className="h-48 w-full bg-stone-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.imageUrl})` }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className={cn(
                    "text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider",
                    article.category === 'History' ? "bg-amber-100 text-amber-800" :
                    article.category === 'News' ? "bg-blue-100 text-blue-800" :
                    "bg-emerald-100 text-emerald-800"
                  )}>
                    {article.category}
                  </span>
                  <span className="text-xs text-stone-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3" />
                    {format(parseISO(article.date), 'MMM d, yyyy')}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                  {article.summary}
                </p>
                
                <button
                  onClick={() => navigate(`/archive/${article.id}`)}
                  className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:text-emerald-700 transition-colors mt-auto">
                  Read Full Article
                </button>
              </div>
            </motion.article>
          ))}
          
          {filteredArticles.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-stone-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
