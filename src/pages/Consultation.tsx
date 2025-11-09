import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  Star,
  CheckCircle,
  MapPin, 
  Gift 
} from 'lucide-react';

// Define cosmic-themed colors for enhanced aesthetics
const cosmicColors = {
  primary: 'text-indigo-600', // Stronger primary text color
  secondary: 'text-purple-600',
  background: 'bg-gray-900', // Dark background for the page
  card: 'bg-white',           // LIGHT card background
  accent: 'text-yellow-600',  // Stronger accent color
  darkText: 'text-gray-800', // Dark text for use on light cards
};

// Custom input field styles for dark theme
// Updated input class for light background (bg-gray-50) and dark text (text-gray-800)
const inputClass = "w-full p-3 pl-10 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-indigo-600 focus:border-indigo-600 transition duration-300 shadow-inner";
const selectClass = "w-full p-3 pl-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-indigo-600 focus:border-indigo-600 transition duration-300 shadow-inner appearance-none";
const iconWrapperClass = "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none";

export const Consultation: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',      
    tob: '',      
    pob: '',      
    message: '',
    date: '',
    time: '',
  });

  const services = [
    {
      id: 'birth-chart',
      name: 'Birth Chart Analysis',
      price: '₹2,499',
      duration: '60 minutes',
      description: 'Complete analysis of your birth chart revealing your strengths, challenges, and life purpose based on planetary positions at birth.',
    },
    {
      id: 'compatibility',
      name: 'Compatibility Analysis',
      price: '₹2,999',
      duration: '75 minutes',
      description: 'Detailed analysis of relationship compatibility between two individuals, identifying strengths, challenges, and suggestions for harmony.',
    },
    {
      id: 'career',
      name: 'Career Guidance',
      price: '₹2,299',
      duration: '60 minutes',
      description: 'Professional guidance based on your astrological chart to identify suitable career paths, timing for changes, and potential opportunities.',
    },
    {
      id: 'transit',
      name: 'Transit Predictions',
      price: '₹2,699',
      duration: '70 minutes',
      description: 'Forecast of upcoming planetary influences for the next 12 months, highlighting significant periods and potential challenges.',
    },
    {
      id: 'muhurta',
      name: 'Muhurta (Timing) Analysis',
      price: '₹1,999',
      duration: '45 minutes',
      description: 'Selection of auspicious timing for important events such as marriages, business launches, house warming, or travel.',
    },
    {
      id: 'remedial',
      name: 'Remedial Measures',
      price: '₹1,799',
      duration: '45 minutes',
      description: 'Personalized spiritual remedies to mitigate challenging planetary influences and enhance positive energies in your chart.',
    },
  ];

  const selectedService = services.find(s => s.id === selectedServiceId);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
        console.log('Form submitted:', { service: selectedServiceId, ...formData });
        setIsLoading(false);
        setFormSubmitted(true);
    }, 1500);
  };

  return (
    // Set a deep, dark cosmic background for the whole page
    <div className={`min-h-screen ${cosmicColors.background} pt-24 pb-16`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            The Guide You Need. Today.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect directly with our astrologer to ask your specific questions and get clear, actionable advice.
          </p>
        </div>

        {formSubmitted ? (
          <div className="max-w-2xl mx-auto animate-fadeIn">
            <div className={`${cosmicColors.card} text-center p-10 rounded-2xl shadow-2xl shadow-indigo-500/20`}>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse-slow">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </div>
              
              <h2 className={`text-3xl font-bold ${cosmicColors.darkText} mb-4`}>
                Consultation Request Received!
              </h2>
              
              <p className="text-gray-600 mb-6">
                Thank you for booking with GrahaSetu. We will prioritize your request and contact you within 24 hours to confirm your appointment and provide payment instructions.
              </p>
              
              <p className="text-gray-600 mb-8">
                Confirmation sent to: <span className="text-indigo-600 font-medium">{formData.email}</span>
              </p>
              
              <button
                onClick={() => setFormSubmitted(false)}
                className="w-full btn bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-purple-500/30"
              >
                Book Another Consultation
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10 max-w-7xl mx-auto">
            
            {/* 1. Services Selection Panel (Horizontal Scroll) */}
            <div className="w-full">
              {/* Light card background for service selection */}
              <div className={`${cosmicColors.card} p-8 rounded-2xl shadow-2xl shadow-indigo-500/10`}>
                <h2 className={`text-3xl font-semibold ${cosmicColors.darkText} mb-6 border-b border-gray-200 pb-3 flex items-center`}>
                  <Gift className={`w-6 h-6 ${cosmicColors.accent} mr-3`} />
                  Choose Your Service
                </h2>
                
                {/* HORIZONTAL SCROLL CONTAINER */}
                <div 
                  className="flex space-x-6 overflow-x-auto pb-4"
                >
                    {services.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          // Cards start white, hover becomes light gray
                          className={`flex-shrink-0 w-72 md:w-80 p-5 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] ${
                            selectedServiceId === service.id
                              ? 'bg-indigo-100 border-2 border-indigo-600 shadow-lg shadow-indigo-500/20'
                              : 'bg-white hover:bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-bold text-lg ${cosmicColors.darkText}`}>{service.name}</h3>
                            <span className={`${cosmicColors.accent} font-extrabold text-lg`}>{service.price}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm mb-2">
                            <Clock className={`w-4 h-4 mr-1 ${cosmicColors.secondary}`} />
                            <span>{service.duration}</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                    ))}
                </div>
                
                {/* Information box at the bottom (still uses dark background for contrast) */}
                <div className="mt-8 p-4 bg-gray-100 rounded-xl border border-indigo-200">
                  <p className="text-sm text-gray-700 flex items-start">
                    <Star className={`w-5 h-5 ${cosmicColors.accent} mr-2 flex-shrink-0 mt-0.5 animate-pulse`} />
                    <span className="leading-tight">All consultations include a personalized report and 7 days of follow-up support.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Booking Form (Below the Grid) */}
            <div className="w-full">
              {/* Light card background for the form */}
              <div className={`${cosmicColors.card} p-8 rounded-2xl shadow-2xl shadow-purple-500/20`}>
                <h2 className={`text-3xl font-semibold ${cosmicColors.darkText} mb-6 border-b border-gray-200 pb-3`}>
                  Submit Your Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Selected Service Confirmation Block */}
                  {selectedService ? (
                    <div className="p-4 bg-indigo-50 border border-indigo-300 rounded-xl text-gray-800">
                        <p className="text-sm font-semibold mb-1 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                            Selected Service:
                        </p>
                        <p className="text-lg font-bold">
                            {selectedService.name} - <span className={cosmicColors.accent}>{selectedService.price}</span>
                        </p>
                    </div>
                  ) : (
                    <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl text-yellow-800">
                        Please select a consultation service from the cards above to proceed with booking.
                    </div>
                  )}

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                      >
                        Full Name*
                      </label>
                      <div className="relative">
                        <div className={iconWrapperClass}>
                          <User className={`h-5 w-5 ${cosmicColors.primary}`} />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                      >
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className={iconWrapperClass}>
                          <Mail className={`h-5 w-5 ${cosmicColors.primary}`} />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Birth Details Section */}
                  <div className="pt-4 border-t border-gray-200">
                      <h3 className={`text-xl font-semibold ${cosmicColors.primary} mb-4`}>Your Natal Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Date of Birth */}
                        <div>
                          <label 
                            htmlFor="dob" 
                            className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                          >
                            Date of Birth*
                          </label>
                          <div className="relative">
                            <div className={iconWrapperClass}>
                              <Calendar className={`h-5 w-5 ${cosmicColors.secondary}`} />
                            </div>
                            <input
                              type="date"
                              id="dob"
                              name="dob"
                              value={formData.dob}
                              onChange={handleInputChange}
                              className={inputClass}
                              required
                            />
                          </div>
                        </div>
                        
                        {/* Time of Birth */}
                        <div>
                          <label 
                            htmlFor="tob" 
                            className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                          >
                            Time of Birth*
                          </label>
                          <div className="relative">
                            <div className={iconWrapperClass}>
                              <Clock className={`h-5 w-5 ${cosmicColors.secondary}`} />
                            </div>
                            <input
                              type="time"
                              id="tob"
                              name="tob"
                              value={formData.tob}
                              onChange={handleInputChange}
                              className={inputClass}
                              required
                            />
                          </div>
                        </div>

                         {/* Place of Birth */}
                        <div>
                          <label 
                            htmlFor="pob" 
                            className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                          >
                            Place of Birth*
                          </label>
                          <div className="relative">
                            <div className={iconWrapperClass}>
                              <MapPin className={`h-5 w-5 ${cosmicColors.secondary}`} />
                            </div>
                            <input
                              type="text"
                              id="pob"
                              name="pob"
                              value={formData.pob}
                              onChange={handleInputChange}
                              className={inputClass}
                              placeholder="City, State, Country"
                              required
                            />
                          </div>
                        </div>
                      </div>
                  </div>


                  {/* Phone Number & Preferred Schedule */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                      >
                        Phone Number*
                      </label>
                      <div className="relative">
                        <div className={iconWrapperClass}>
                          <PhoneCall className={`h-5 w-5 ${cosmicColors.primary}`} />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label 
                        htmlFor="date" 
                        className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                      >
                        Preferred Consultation Date*
                      </label>
                      <div className="relative">
                        <div className={iconWrapperClass}>
                          <Calendar className={`h-5 w-5 ${cosmicColors.primary}`} />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="time" 
                        className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                      >
                        Preferred Consultation Time*
                      </label>
                      <div className="relative">
                        <div className={iconWrapperClass}>
                          <Clock className={`h-5 w-5 ${cosmicColors.primary}`} />
                        </div>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium ${cosmicColors.darkText} mb-1`}
                    >
                      Your Questions or Concerns
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className={`h-5 w-5 ${cosmicColors.primary}`} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`${inputClass} pl-10 h-32 resize-none`}
                        placeholder="Please share any specific questions or areas you'd like to focus on during your consultation..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Note box (dark background for contrast against light form card) */}
                  <div className="p-4 bg-gray-100 rounded-xl text-sm text-gray-600 border border-gray-200">
                    <p className={`mb-2 font-semibold ${cosmicColors.darkText}`}>Important Notes:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Payment is required in advance to confirm your booking.</li>
                      <li>Rescheduling is available with 24 hours' notice.</li>
                      <li>Consultations are conducted via Zoom or phone call.</li>
                      <li>All information shared is kept strictly confidential.</li>
                    </ul>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-lg py-4 rounded-xl transition duration-300 shadow-xl shadow-indigo-500/40 transform hover:scale-[1.01] disabled:opacity-50 flex items-center justify-center"
                    disabled={!selectedServiceId || isLoading}
                  >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing Request...
                        </>
                    ) : (
                        selectedServiceId ? 'Finalize Booking and Request Payment Link' : 'Select a Service to Continue'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Consultation;