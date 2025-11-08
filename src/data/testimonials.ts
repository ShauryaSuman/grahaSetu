export interface Testimonial {
  name: string;
  avatar: string;
  location: string;
  text: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Vandana",
    avatar: "https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Uttar Pradesh, India",
    text: "The birth chart analysis was incredibly accurate and insightful. It helped me understand my strengths and weaknesses in a completely new light. The career guidance was spot on - I changed my career path based on the advice, and I've never been happier!",
    rating: 5,
    service: "Birth Chart & Career Analysis"
  },
  {
    name: "Priyanka",
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Delhi, India",
    text: "The compatibility reading for me and my partner was eye-opening. It explained so many of our dynamics and gave us practical tools to strengthen our relationship. I'm grateful for the insights which have brought us closer together.",
    rating: 5,
    service: "Relationship Compatibility"
  },
  {
    name: "Shalini",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Bangalore, India",
    text: "I consulted GrahaSetu for muhurta timing for my business launch. Following their guidance, we started our venture at the recommended time, and we've seen remarkable growth ever since. The planetary remedies suggested have also helped overcome initial obstacles.",
    rating: 5,
    service: "Muhurta & Business Consultation"
  },
  {
    name: "Sandeep",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Pune, India",
    text: "The transit predictions were incredibly accurate. They prepared me for a challenging period at work and guided me through it with specific recommendations. I was able to turn potential setbacks into opportunities because I was prepared.",
    rating: 4,
    service: "Transit Predictions"
  },
  {
    name: "Naveen",
    avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Chennai, India",
    text: "The personal consultation was worth every penny. The astrologer took time to understand my concerns and provided detailed insights about my spiritual path. The remedies suggested have brought a sense of peace and purpose to my life.",
    rating: 5,
    service: "Personal Consultation"
  }
];