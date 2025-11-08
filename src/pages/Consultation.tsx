import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  Star,
  CheckCircle
} from 'lucide-react';

export const Consultation: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDetails: '',
    date: '',
    time: '',
    message: '',
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

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { service: selectedService, ...formData });
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold mb-4">
            Book a Consultation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect with our expert Vedic astrologers for personalized guidance on your life's journey
          </p>
        </div>

        {formSubmitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="card text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-success-500/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-success-500" />
                </div>
              </div>
              
              <h2 className="text-2xl font-display font-semibold text-white mb-4">
                Consultation Request Received!
              </h2>
              
              <p className="text-gray-300 mb-6">
                Thank you for booking a consultation with GrahaSetu. We have received your request and will contact you within 24 hours to confirm your appointment and provide payment instructions.
              </p>
              
              <p className="text-gray-300 mb-8">
                A confirmation email has been sent to <span className="text-primary-400">{formData.email}</span> with your booking details.
              </p>
              
              <button
                onClick={() => setFormSubmitted(false)}
                className="btn btn-secondary"
              >
                Book Another Consultation
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Services Selection */}
            <div className="lg:col-span-1">
              <div className="bg-cosmic-navy p-6 rounded-xl sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Our Services
                </h2>
                
                <div className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedService === service.id
                          ? 'bg-primary-700/50 border-2 border-primary-500'
                          : 'bg-cosmic-purple/20 hover:bg-cosmic-purple/30 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium">{service.name}</h3>
                        <span className="text-primary-400 font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-cosmic-purple/20 rounded-lg">
                  <p className="text-sm text-gray-300 flex items-start">
                    <Star className="w-4 h-4 text-cosmic-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span>All consultations include a personalized report and follow-up support for 7 days.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="card shadow-2xl">
                <h2 className="text-2xl font-semibold text-orange-500 mb-6">
                  Book Your Session
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Selected Service */}
                  <div>
                    <label 
                      htmlFor="service" 
                      className="block text-sm font-medium text-gray-500 mb-1"
                    >
                      Select Service*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={selectedService}
                      onChange={(e) => handleServiceSelect(e.target.value)}
                      className="input-field"
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Full Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-500 mb-1"
                      >
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-medium text-gray-500 mb-1"
                      >
                        Phone Number*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhoneCall className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="birthDetails" 
                        className="block text-sm font-medium text-gray-500 mb-1"
                      >
                        Birth Details
                      </label>
                      <input
                        type="text"
                        id="birthDetails"
                        name="birthDetails"
                        value={formData.birthDetails}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Date, Time, Place (if known)"
                      />
                    </div>
                  </div>

                  {/* Preferred Schedule */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="date" 
                        className="block text-sm font-medium text-gray-500 mb-1"
                      >
                        Preferred Date*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="time" 
                        className="block text-sm font-medium text-gray-500 mb-1"
                      >
                        Preferred Time*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-500 mb-1"
                    >
                      Your Questions or Concerns
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-500" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="input-field pl-10 h-32"
                        placeholder="Please share any specific questions or areas you'd like to focus on during your consultation..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="p-4 bg-cosmic-navy rounded-lg text-sm text-gray-300">
                    <p className="mb-2">By booking a consultation, you agree to our terms and conditions:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Payment is required in advance to confirm your booking</li>
                      <li>Rescheduling is available with 24 hours' notice</li>
                      <li>Consultations are conducted via Zoom or phone call</li>
                      <li>All information shared is kept strictly confidential</li>
                    </ul>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                  >
                    Book Consultation
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