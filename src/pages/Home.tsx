import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  SunMedium,
  MoonIcon,
  Calendar,
  Users,
  BookOpen,
  ArrowRight,
  Heart,
  Clock,
  Compass
} from 'lucide-react';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { FeaturedArticle } from '../components/home/FeaturedArticle';

export const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3, // Adjust opacity as needed
          }}
        ></div>
        {/* Existing overlay */}
        <div className="absolute inset-0 bg-cosmic-navy opacity-70 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-6">
                Discover the Cosmic Blueprint of Your Life
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Unlock the ancient wisdom of Vedic Astrology to navigate life's journey with divine guidance and celestial insights.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link
                  to="/birth-chart"
                  className="btn btn-primary flex items-center justify-center space-x-2"
                >
                  <Star className="w-5 h-5" />
                  <span>Get Your Birth Chart</span>
                </Link>
                <Link
                  to="/horoscope"
                  className="btn btn-secondary flex items-center justify-center space-x-2"
                >
                  <SunMedium className="w-5 h-5" />
                  <span>Today's Horoscope</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-700/30 animate-pulse-slow"></div>
                <img
                  src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg"
                  alt="Astrology birth chart"
                  className="absolute inset-2 rounded-full object-cover shadow-2xl animate-float"
                />
                <div className="absolute w-24 h-24 -top-4 -right-4 rounded-full bg-primary-600/20 backdrop-blur-sm flex items-center justify-center animate-float">
                  <SunMedium className="w-12 h-12 text-primary-400" />
                </div>
                <div className="absolute w-20 h-20 -bottom-2 -left-2 rounded-full bg-primary-600/20 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <MoonIcon className="w-10 h-10 text-primary-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-cosmic-purple/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Cosmic Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive astrological services to illuminate your path and guide your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card group bg-gradient-to-br from-cosmic-purple/60 to-cosmic-navy hover:from-cosmic-purple hover:to-cosmic-navy/60">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                  <Star className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Birth Chart Analysis</h3>
              <p className="text-gray-300 text-center mb-6 text-base">
                Discover your cosmic blueprint with a detailed analysis of your birth chart, revealing your strengths, challenges, and life purpose.
              </p>
              <div className="text-center">
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="card group bg-gradient-to-br from-cosmic-purple/60 to-cosmic-navy hover:from-cosmic-purple hover:to-cosmic-navy/60">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                  <Heart className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Compatibility Analysis</h3>
              <p className="text-gray-300 text-center mb-6 text-base">
                Evaluate relationship dynamics and compatibility with detailed astrological insights into your connection with loved ones.
              </p>
              <div className="text-center">
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="card group bg-gradient-to-br from-cosmic-purple/60 to-cosmic-navy hover:from-cosmic-purple hover:to-cosmic-navy/60">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                  <Clock className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Muhurta (Timing) Analysis</h3>
              <p className="text-gray-300 text-center mb-6 text-base">
                Find the most auspicious timing for important events like weddings, business launches, or travel using ancient timing techniques.
              </p>
              <div className="text-center">
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="card group bg-gradient-to-br from-cosmic-purple/60 to-cosmic-navy hover:from-cosmic-purple hover:to-cosmic-navy/60">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                  <Compass className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Career Guidance</h3>
              <p className="text-gray-300 text-center mb-6 text-base">
                Discover your professional strengths and ideal career path through the lens of Vedic astrology and planetary influences.
              </p>
              <div className="text-center">
                <Link
                  to="/consultation" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="card group bg-gradient-to-br from-cosmic-purple/60 to-cosmic-navy hover:from-cosmic-purple hover:to-cosmic-navy/60">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                  <Calendar className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Transit Predictions</h3>
              <p className="text-gray-300 text-center mb-6 text-base">
                Understand upcoming planetary influences with detailed transit predictions for the next 12 months, helping you plan ahead.
              </p>
              <div className="text-center">
                <Link
                  to="/consultation" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="card group bg-gradient-to-br from-cosmic-purple/60 to-cosmic-navy hover:from-cosmic-purple hover:to-cosmic-navy/60">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                  <Users className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Personal Consultation</h3>
              <p className="text-gray-300 text-center mb-6 text-base ">
                Book a one-on-one session with our expert astrologers for personalized guidance tailored to your specific questions and concerns.
              </p>
              <div className="text-center">
                <Link
                  to="/consultation" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cosmic-purple to-cosmic-indigo relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-stars bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Begin Your Cosmic Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let the ancient wisdom of Vedic Astrology guide you through life's most important decisions. Discover insights about your past, present, and future.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/consultation" className="btn btn-primary flex items-center justify-center space-x-2"
              >
                <Star className="w-5 h-5" />
                <span>Get Your Birth Chart</span>
              </Link>
              <Link
                to="/consultation" className="btn btn-secondary flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Featured Articles */}
      <section className="py-16 md:py-24 bg-cosmic-navy/70">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
              Astrology Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest articles on Vedic astrology, planetary influences, and spiritual growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedArticle
              title="Understanding the Influence of Saturn Transit"
              excerpt="Learn how Saturn's movement through the zodiac affects different aspects of your life and how to navigate its challenges."
              imageSrc="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg"
              slug="saturn-transit"
              date="June 15, 2025"
              category="Planetary Transits"
              className="bg-gradient-to-br from-cosmic-purple/40 to-cosmic-navy/60 hover:from-cosmic-purple/60 hover:to-cosmic-navy/80"
            />

            <FeaturedArticle
              title="The Significance of Your Moon Sign"
              excerpt="Discover why your Moon sign is just as important as your Sun sign and what it reveals about your emotional nature."
              imageSrc="https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg"
              slug="moon-sign-significance"
              date="June 10, 2025"
              category="Lunar Astrology"
              className="bg-gradient-to-br from-cosmic-purple/40 to-cosmic-navy/60 hover:from-cosmic-purple/60 hover:to-cosmic-navy/80"
            />

            <FeaturedArticle
              title="Remedies for Challenging Planetary Positions"
              excerpt="Practical spiritual remedies to mitigate the challenging effects of difficult planetary positions in your birth chart."
              imageSrc="https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg"
              slug="planetary-remedies"
              date="June 5, 2025"
              category="Remedial Measures"
              className="bg-gradient-to-br from-cosmic-purple/40 to-cosmic-navy/60 hover:from-cosmic-purple/60 hover:to-cosmic-navy/80"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="btn btn-secondary inline-flex items-center space-x-2"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};