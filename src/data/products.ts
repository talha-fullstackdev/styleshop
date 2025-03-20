export interface Product {
  id: number;
  name: string;
  category: 'men' | 'women';
  subcategory: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Classic Fit T-Shirt",
    category: 'men',
    subcategory: 't-shirts',
    price: 29.99,
    image: '/images/products/men-tshirt-1.webp',
    description: "A comfortable classic fit t-shirt made from 100% cotton. Perfect for everyday wear.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Grey'],
    featured: true
  },
  {
    id: 2,
    name: "Men's Slim Fit Jeans",
    category: 'men',
    subcategory: 'jeans',
    price: 59.99,
    image: '/images/products/men-jeans-1.jpeg',
    description: "Stylish slim fit jeans with a modern look. Made from high-quality denim with a touch of stretch for comfort.",
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Blue', 'Black', 'Grey'],
  },
  {
    id: 3,
    name: "Men's Casual Jacket",
    category: 'men',
    subcategory: 'outerwear',
    price: 89.99,
    image: '/images/products/men-jacket-1.webp',
    description: "A versatile casual jacket perfect for fall and spring. Water-resistant and windproof.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Olive'],
    featured: true
  },
  {
    id: 4,
    name: "Men's Formal Shirt",
    category: 'men',
    subcategory: 'shirts',
    price: 49.99,
    image: '/images/products/men-formal-1.webp',
    description: "An elegant formal shirt for professional settings. Made from high-quality cotton with a sleek finish.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink', 'Grey'],
  },
  {
    id: 5,
    name: "Women's Floral Dress",
    category: 'women',
    subcategory: 'dresses',
    price: 69.99,
    image: '/images/products/women-dress-1.webp',
    description: "A beautiful floral dress perfect for spring and summer. Made from lightweight and breathable fabric.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue Floral', 'Pink Floral', 'White Floral'],
    featured: true
  },
  {
    id: 6,
    name: "Women's Skinny Jeans",
    category: 'women',
    subcategory: 'jeans',
    price: 54.99,
    image: '/images/products/women-jeans-1.avif',
    description: "Stylish skinny jeans with a perfect fit. Made from stretchy denim for all-day comfort.",
    sizes: ['26', '28', '30', '32', '34'],
    colors: ['Blue', 'Black', 'Light Blue'],
  },
  {
    id: 7,
    name: "Women's Blouse",
    category: 'women',
    subcategory: 'tops',
    price: 39.99,
    image: '/images/products/women-blouse-1.webp',
    description: "An elegant blouse for professional and casual settings. Made from soft, lightweight fabric.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Pink', 'Blue'],
    featured: true
  },
  {
    id: 8,
    name: "Women's Winter Coat",
    category: 'women',
    subcategory: 'outerwear',
    price: 129.99,
    image: '/images/products/women-coat-1.webp',
    description: "A warm and stylish winter coat. Features a water-resistant outer layer and cozy inner lining.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Red', 'Camel'],
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: 'men' | 'women'): Product[] {
  return products.filter(product => product.category === category);
}

export async function getProductById(id: number): Promise<Product | undefined> {
  // Simulate a small delay to make it async
  await new Promise(resolve => setTimeout(resolve, 0));
  return products.find(product => product.id === id);
} 