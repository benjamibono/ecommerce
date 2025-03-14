import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'

const sweatshirts = products.filter(product => product.category === 'Sweatshirts')

export default function SweatshirtsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid 
        title="Sweatshirts Collection" 
        products={sweatshirts}
        columns={4}
      />
    </div>
  )
} 