export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pooja' | 'samagri' | 'virtual';
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "pooja-grih-pravesh",
    name: "Griha Pravesh Pooja",
    description: "Complete ritual for new home blessing with all necessary items and priest services.",
    price: 11999,
    image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
    category: "pooja",
    inStock: true
  },
  {
    id: "pooja-satyanarayan",
    name: "Satyanarayan Pooja",
    description: "Traditional Satyanarayan katha and pooja with all required materials.",
    price: 5999,
    image: "https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg",
    category: "pooja",
    inStock: true
  },
  {
    id: "virtual-grih-shanti",
    name: "Virtual Grih Shanti Pooja",
    description: "Online conducted Grih Shanti pooja with live priest interaction.",
    price: 2999,
    image: "https://images.pexels.com/photos/6044226/pexels-photo-6044226.jpeg",
    category: "virtual",
    inStock: true
  },
  {
    id: "samagri-basic",
    name: "Basic Pooja Samagri Kit",
    description: "Essential items for daily pooja including incense, kumkum, and rice.",
    price: 499,
    image: "https://images.pexels.com/photos/6044237/pexels-photo-6044237.jpeg",
    category: "samagri",
    inStock: true
  },
  {
    id: "samagri-tulsi",
    name: "Sacred Tulsi Plant",
    description: "Holy Basil plant with copper pot and maintenance guide.",
    price: 299,
    image: "https://images.pexels.com/photos/6044270/pexels-photo-6044270.jpeg",
    category: "samagri",
    inStock: true
  },
  {
    id: "samagri-premium",
    name: "Premium Pooja Set",
    description: "Complete brass pooja set with bell, lamp, and accessories.",
    price: 2499,
    image: "https://images.pexels.com/photos/6044272/pexels-photo-6044272.jpeg",
    category: "samagri",
    inStock: true
  }
];