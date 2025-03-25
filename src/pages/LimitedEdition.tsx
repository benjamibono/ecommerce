import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Limited Edition Products
          </h1>
          <p className="text-gray-500">{products.length} products</p>
        </div>
        <ProductGrid
          products={products}
          columns={4}
          title="Limited Edition Products"
        />
      </div>
    </div>
  );
}
