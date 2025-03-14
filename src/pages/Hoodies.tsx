import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'

export default function HoodiesPage() {
  const hoodies = products.filter(product => product.category === 'Hoodies')

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid 
        title="Hoodies Collection" 
        products={hoodies}
        columns={4}
      />
    </div>
  )
} 