import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../data';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { cn } from '../lib/utils';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = MOCK_ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-500 text-lg mb-4">Article not found.</p>
          <button onClick={() => navigate('/archive')} className="text-emerald-600 font-semibold hover:text-emerald-700">
            ← Back to Archive
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/archive')}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Archive
        </button>

        {article.imageUrl && (
          <div
            className="w-full h-72 rounded-2xl bg-cover bg-center mb-8"
            style={{ backgroundImage: `url(${article.imageUrl})` }}
          />
        )}

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
            {format(parseISO(article.date), 'MMMM d, yyyy')}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="prose prose-stone max-w-none">
          {article.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={i} className="text-lg font-bold text-stone-900 mt-6 mb-2">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-stone-700">
                  {paragraph.split('\n').map((item, j) => (
                    <li key={j}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            // Handle inline bold within paragraphs
            const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i} className="text-stone-700 leading-relaxed mb-4">
                {parts.map((part, j) =>
                  part.startsWith('**') && part.endsWith('**')
                    ? <strong key={j}>{part.replace(/\*\*/g, '')}</strong>
                    : part
                )}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
