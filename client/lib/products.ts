export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  shortDescription: string;
  images: string[];
  specs: {
    label: string;
    value: string;
  }[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Audio",
    rating: 4.8,
    reviews: 328,
    shortDescription: "Crystal-clear sound with active noise cancellation",
    description: "Experience premium audio quality with our state-of-the-art wireless headphones. Featuring advanced noise cancellation technology and 30-hour battery life, these headphones are perfect for music lovers and professionals alike.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop",
    ],
    specs: [
      { label: "Driver Size", value: "40mm" },
      { label: "Battery Life", value: "30 hours" },
      { label: "Charging Time", value: "2 hours" },
      { label: "Bluetooth Version", value: "5.3" },
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Wearables",
    rating: 4.6,
    reviews: 256,
    shortDescription: "Advanced health tracking and notifications",
    description: "Stay connected with our cutting-edge smart watch. Monitor your health metrics, receive notifications, and control your smart home devices all from your wrist.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523275234026-b8b150ce3e99?w=500&h=500&fit=crop",
    ],
    specs: [
      { label: "Display", value: "1.9-inch AMOLED" },
      { label: "Battery Life", value: "7 days" },
      { label: "Water Resistance", value: "5ATM" },
      { label: "Sensors", value: "Heart rate, SpO2, Sleep tracking" },
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Ultra Portable Charger",
    price: 79,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.9,
    reviews: 512,
    shortDescription: "Fast charging on the go",
    description: "Compact and powerful. Keep your devices charged wherever you are with our ultra-portable charger featuring fast charging technology.",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1609102032815-ebb2c0c38b76?w=500&h=500&fit=crop",
    ],
    specs: [
      { label: "Capacity", value: "20000mAh" },
      { label: "Output", value: "100W" },
      { label: "Charging Time", value: "45 minutes" },
      { label: "Weight", value: "390g" },
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "4K Webcam",
    price: 159,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 189,
    shortDescription: "Professional video quality for content creators",
    description: "Stream and record in stunning 4K quality. Perfect for streaming, video calls, and content creation with built-in noise-canceling microphone.",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    ],
    specs: [
      { label: "Resolution", value: "4K UHD (2160p)" },
      { label: "Frame Rate", value: "60fps" },
      { label: "Field of View", value: "90°" },
      { label: "Microphone", value: "Dual noise-canceling" },
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    price: 129,
    originalPrice: 159,
    image: "https://images.unsplash.com/photo-1587829191301-34dccf3fba0b?w=500&h=500&fit=crop",
    category: "Peripherals",
    rating: 4.8,
    reviews: 341,
    shortDescription: "Precision typing and gaming",
    description: "Experience the satisfying feel of mechanical switches with our premium keyboard. Featuring RGB backlighting and wireless connectivity.",
    images: [
      "https://images.unsplash.com/photo-1587829191301-34dccf3fba0b?w=500&h=500&fit=crop",
    ],
    specs: [
      { label: "Switch Type", value: "Cherry MX Blue" },
      { label: "Layout", value: "Full-size (104 keys)" },
      { label: "Connection", value: "Wireless 2.4GHz + Bluetooth" },
      { label: "Backlighting", value: "Per-key RGB" },
    ],
    inStock: true,
  },
  {
    id: "6",
    name: "Premium Mouse",
    price: 89,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    category: "Peripherals",
    rating: 4.7,
    reviews: 278,
    shortDescription: "Ergonomic design with precision tracking",
    description: "Control meets comfort. Our ergonomic mouse provides superior tracking precision and all-day comfort for work and gaming.",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    ],
    specs: [
      { label: "Sensor", value: "PMW3389 (16000 DPI)" },
      { label: "Buttons", value: "7 programmable buttons" },
      { label: "Connection", value: "Wireless 2.4GHz" },
      { label: "Battery Life", value: "50 hours" },
    ],
    inStock: true,
  },
];

export const categories = [
  { id: "audio", name: "Audio", icon: "🎧" },
  { id: "wearables", name: "Wearables", icon: "⌚" },
  { id: "accessories", name: "Accessories", icon: "🎁" },
  { id: "electronics", name: "Electronics", icon: "💻" },
  { id: "peripherals", name: "Peripherals", icon: "🖱️" },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};
