import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star as StarIcon, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Avatar from '../../assets/avatar.png';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay]);

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover how our astrological insights have transformed lives and guided important decisions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial */}
            <div className="overflow-hidden">
              <div
                className="transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="card p-8 md:p-10 max-w-4xl mx-auto bg-orange-100">
                        <div className="mb-6 flex justify-center">
                          <div className="relative">
                            <Quote className="w-12 h-12 text-primary-500 opacity-20 absolute -top-6 -left-6" />
                            <img
                              src={Avatar}
                              alt={testimonial.name}
                              className="w-20 h-20 rounded-full object-cover border-2 border-primary-500"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-4 flex justify-center">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-5 h-5 ${
                                  i < testimonial.rating
                                    ? 'text-cosmic-gold'
                                    : 'text-gray-600'
                                }`}
                                fill={i < testimonial.rating ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-700 text-center mb-6 italic">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="text-center">
                          <h4 className="text-xl font-semibold text-orange-500">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400">{testimonial.location}</p>
                          <p className="text-primary-400 text-sm mt-1">{testimonial.service}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-cosmic-navy bg-opacity-70 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-cosmic-navy bg-opacity-70 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary-500 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};