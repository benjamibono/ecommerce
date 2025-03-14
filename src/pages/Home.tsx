import { ProductGrid } from "@/components/ProductGrid";
import React from 'react';

const products = [
  {
    id: '1',
    name: 'Classic Hoodie',
    price: 90,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    isOnSale: true,
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },
  {
    id: '2',
    name: 'Premium Hoodie',
    price: 80,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    isOnSale: true,
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false },
    ],
  },
  {
    id: '3',
    name: 'Sport Sweatshirt',
    price: 65,
    image: '/sweatshirt.jpg',
    category: 'Sweatshirts',
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
  {
    id: '4',
    name: 'Limited Edition Collection',
    price: 150,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Collections',
    isNew: true,
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <section>
          <ProductGrid title="Featured Products" products={products} columns={4} />
        </section>
        <section>
          <ProductGrid title="New Products" products={products.filter(p => p.isNew)} columns={4} />
        </section>
        <section>
          <ProductGrid title="Sale Products" products={products.filter(p => p.isOnSale)} columns={4} />
        </section>
      </div>
    </div>
  );
};

export default Home;