export interface ZodiacSign {
  name: string;
  slug: string;
  date: string;
  element: string;
  ruling_planet: string;
  iconUrl: string;
  description: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries (Mesha)",
    slug: "aries",
    date: "Apr 14 - May 14",
    element: "Fire",
    ruling_planet: "Mars",
    iconUrl: "https://images.pexels.com/photos/5187231/pexels-photo-5187231.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Bold and ambitious, Aries individuals are characterized by their dynamic energy, initiative, and pioneering spirit."
  },
  {
    name: "Taurus (Vrishabha)",
    slug: "taurus",
    date: "May 15 - Jun 14",
    element: "Earth",
    ruling_planet: "Venus",
    iconUrl: "https://images.pexels.com/photos/5187210/pexels-photo-5187210.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Patient and reliable, Taurus individuals are known for their appreciation of beauty, stability, and practical approach to life."
  },
  {
    name: "Gemini (Mithuna)",
    slug: "gemini",
    date: "Jun 15 - Jul 14",
    element: "Air",
    ruling_planet: "Mercury",
    iconUrl: "https://images.pexels.com/photos/5187223/pexels-photo-5187223.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Versatile and curious, Gemini individuals are characterized by their communicative nature, adaptability, and intellectual approach."
  },
  {
    name: "Cancer (Karka)",
    slug: "cancer",
    date: "Jul 15 - Aug 14",
    element: "Water",
    ruling_planet: "Moon",
    iconUrl: "https://images.pexels.com/photos/5187252/pexels-photo-5187252.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Nurturing and intuitive, Cancer individuals are known for their emotional depth, protective nature, and strong connection to home and family."
  },
  {
    name: "Leo (Simha)",
    slug: "leo",
    date: "Aug 15 - Sep 15",
    element: "Fire",
    ruling_planet: "Sun",
    iconUrl: "https://images.pexels.com/photos/5187211/pexels-photo-5187211.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Confident and charismatic, Leo individuals are characterized by their generosity, leadership qualities, and creative expression."
  },
  {
    name: "Virgo (Kanya)",
    slug: "virgo",
    date: "Sep 16 - Oct 15",
    element: "Earth",
    ruling_planet: "Mercury",
    iconUrl: "https://images.pexels.com/photos/5187217/pexels-photo-5187217.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Analytical and meticulous, Virgo individuals are known for their attention to detail, practical skills, and service-oriented nature."
  },
  {
    name: "Libra (Tula)",
    slug: "libra",
    date: "Oct 16 - Nov 14",
    element: "Air",
    ruling_planet: "Venus",
    iconUrl: "https://images.pexels.com/photos/5187269/pexels-photo-5187269.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Balanced and diplomatic, Libra individuals are characterized by their sense of fairness, appreciation for harmony, and social grace."
  },
  {
    name: "Scorpio (Vrishchika)",
    slug: "scorpio",
    date: "Nov 15 - Dec 14",
    element: "Water",
    ruling_planet: "Mars, Pluto",
    iconUrl: "https://images.pexels.com/photos/5187261/pexels-photo-5187261.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Intense and transformative, Scorpio individuals are known for their passion, determination, and profound emotional depth."
  },
  {
    name: "Sagittarius (Dhanu)",
    slug: "sagittarius",
    date: "Dec 15 - Jan 13",
    element: "Fire",
    ruling_planet: "Jupiter",
    iconUrl: "https://images.pexels.com/photos/5187241/pexels-photo-5187241.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Optimistic and adventurous, Sagittarius individuals are characterized by their love of freedom, philosophical outlook, and enthusiasm."
  },
  {
    name: "Capricorn (Makara)",
    slug: "capricorn",
    date: "Jan 14 - Feb 12",
    element: "Earth",
    ruling_planet: "Saturn",
    iconUrl: "https://images.pexels.com/photos/5187219/pexels-photo-5187219.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Disciplined and responsible, Capricorn individuals are known for their ambition, practicality, and steady approach to achieving goals."
  },
  {
    name: "Aquarius (Kumbha)",
    slug: "aquarius",
    date: "Feb 13 - Mar 14",
    element: "Air",
    ruling_planet: "Saturn, Uranus",
    iconUrl: "https://images.pexels.com/photos/5187214/pexels-photo-5187214.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Innovative and humanitarian, Aquarius individuals are characterized by their originality, independence, and vision for the future."
  },
  {
    name: "Pisces (Meena)",
    slug: "pisces",
    date: "Mar 15 - Apr 13",
    element: "Water",
    ruling_planet: "Jupiter, Neptune",
    iconUrl: "https://images.pexels.com/photos/5187268/pexels-photo-5187268.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "Compassionate and intuitive, Pisces individuals are known for their imagination, sensitivity, and spiritual connection."
  }
];