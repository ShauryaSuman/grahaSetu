import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
  date: string;
  category: string;
  className?: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  excerpt,
  imageSrc,
  slug,
  date,
  category,
  className = '',
}) => {
  return (
    <div className={`card overflow-hidden group ${className}`}>
      <div className="h-48 overflow-hidden rounded-lg mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-xs font-medium text-primary-400 bg-primary-900/30 px-3 py-1 rounded-full">
          {category}
        </span>
        <div className="flex items-center text-gray-400 text-xs">
          <Calendar className="w-3 h-3 mr-1" />
          <span>{date}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 text-sm mb-4">
        {excerpt}
      </p>
      <Link
        to={`/blog/${slug}`}
        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
      >
        <span>Read Article</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};