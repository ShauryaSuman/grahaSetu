import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  MoonStar, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cosmic-navy pt-16 pb-8 border-t border-primary-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <Sun className="text-cosmic-gold h-6 w-6" />
                <MoonStar className="text-primary-400 h-5 w-5 -ml-2" />
              </div>
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-cosmic-gold to-primary-400 bg-clip-text text-transparent">
                GrahaSetu
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Bridging the cosmic forces with ancient Vedic wisdom, 
              guiding you through life's journey with celestial insights.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/birth-chart" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Birth Chart
                </Link>
              </li>
              <li>
                <Link to="/horoscope" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Daily Horoscope
                </Link>
              </li>
              <li>
                <Link to="/compatibility" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Compatibility
                </Link>
              </li>
              <li>
                <Link to="/planets" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Planetary Influences
                </Link>
              </li>
              <li>
                <Link to="/muhurta" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Muhurta Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learn" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Learn Astrology
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Astrology Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300">contact@grahasetu.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300">+91-8958704391</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300">
                  Anantya Vatika, Bulandshahr, 
                  Uttar Pradesh, India - 203001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GrahaSetu. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};