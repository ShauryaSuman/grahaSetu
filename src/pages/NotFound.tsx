import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Star } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-primary-700/30 animate-pulse-slow flex items-center justify-center">
                <Star className="w-16 h-16 text-primary-400 animate-twinkle" />
              </div>
              <div className="w-4 h-4 absolute top-8 left-4 rounded-full bg-cosmic-gold animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-3 h-3 absolute bottom-10 right-6 rounded-full bg-primary-300 animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
              <div className="w-2 h-2 absolute top-6 right-8 rounded-full bg-accent-400 animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            404 - Cosmic Void
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            It seems your cosmic journey has led you to uncharted space. This celestial path does not exist in our universe.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/"
              className="btn btn-primary flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Return to Earth</span>
            </Link>
            
            <Link
              to="/birth-chart"
              className="btn btn-secondary flex items-center justify-center space-x-2"
            >
              <Star className="w-5 h-5" />
              <span>Explore Your Stars</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};