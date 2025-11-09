import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star as StarIcon, Quote, User } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Avatar from '../../assets/avatar.png';

// --- COSMIC THEME COLORS ---
const cosmicColors = {
  background: 'bg-gray-900',
  card: 'bg-white',
  darkText: 'text-gray-800',
  accent: 'text-yellow-500', 
  primary: 'text-indigo-600',
};

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Function to move to the next slide, wrapped in useCallback
  const moveToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoplay) {
      interval = setInterval(moveToNext, 6000); // Slightly longer interval
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay, moveToNext]);

  const handleNext = () => {
    setIsAutoplay(false);
    moveToNext();
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className={`py-16 md:py-24 ${cosmicColors.background}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Life Transformed: Read Our Client Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real People. Real Guidance. See How We Help Clients Find Clarity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial Slider Container */}
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-indigo-500/10">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className={`${cosmicColors.card} p-8 md:p-12`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        
                        {/* Left Column: Author Details */}
                        <div className="md:col-span-1 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 md:pr-8 pb-6 md:pb-0">
                          
                          {/* Avatar and Quote Icon */}
                          <div className="relative inline-block mb-4">
                            <Quote className="w-10 h-10 text-indigo-500 opacity-20 absolute -top-4 -left-4 z-0" />
                            {/* Generic User Placeholder Icon */}
                            <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center border-4 border-indigo-400 z-10 relative mx-auto md:mx-0">
                              <User className="w-10 h-10 text-indigo-600" />
                            </div>
                          </div>
                          
                          {/* Rating */}
                          <div className="flex justify-center md:justify-start space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-5 h-5 ${cosmicColors.accent}`}
                                fill={i < testimonial.rating ? 'currentColor' : 'none'}
                                strokeWidth={i < testimonial.rating ? '0' : '2'}
                              />
                            ))}
                          </div>

                          {/* Name and Location */}
                          <h4 className={`text-xl font-bold ${cosmicColors.primary} mt-2`}>
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500">{testimonial.location}</p>
                          <p className="text-indigo-600 text-sm mt-2 font-semibold bg-indigo-50 inline-block px-3 py-1 rounded-full">
                            {testimonial.service}
                          </p>
                        </div>
                        
                        {/* Right Column: Testimonial Text */}
                        <div className="md:col-span-2 relative pl-4 md:pl-0">
                          <p className={`text-2xl italic ${cosmicColors.darkText} font-serif leading-relaxed`}>
                            "{testimonial.text}"
                          </p>
                          {/* Large quote icon for visual emphasis */}
                          <Quote className="w-16 h-16 text-indigo-500 opacity-10 absolute bottom-0 right-0 transform translate-x-4 translate-y-4 hidden sm:block" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons (Moved inside the max-width container for better scaling) */}
            <button
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-indigo-600 bg-opacity-80 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors shadow-lg z-20"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-indigo-600 bg-opacity-80 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors shadow-lg z-20"
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-indigo-600 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;