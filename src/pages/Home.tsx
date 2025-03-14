import { ProductGrid } from "@/components/ProductGrid";
import React from 'react';
import { products } from "@/data/products";


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