import React from 'react';
import { Link } from 'react-router-dom';
import { zodiacSigns } from '../../data/zodiacSigns';

export const ZodiacSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Explore Your Zodiac Sign
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the unique traits, strengths, and challenges of each zodiac sign in Vedic astrology
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-8">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.name}
              to={`/horoscope/${sign.slug}`}
              className="group"
            >
              <div className="card h-full flex flex-col items-center justify-center group-hover:bg-cosmic-purple/40 transition-colors p-4 md:p-6">
                <div className="w-20 h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={sign.iconUrl} 
                    alt={sign.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base md:text-lg font-display font-semibold text-white text-center group-hover:text-primary-300 transition-colors">
                  {sign.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 text-center mt-1">
                  {sign.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};