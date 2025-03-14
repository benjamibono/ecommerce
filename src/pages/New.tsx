import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'

export default function NewArrivalsPage() {
  const newProducts = products.filter(product => product.isNew)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">New Arrivals</span>
            <span className="block text-indigo-600 mt-2">Fresh Styles Just Dropped!</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Be the first to explore our latest collection. Discover the newest trends and must-have pieces before they're gone!
          </p>
        </div>
        <div className="mt-12">
          <ProductGrid 
            title="New Products" 
            products={newProducts}
            columns={4}
          />
        </div>
      </div>
    </div>
  )
} 