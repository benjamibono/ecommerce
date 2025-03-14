import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'

const tshirts = products.filter(product => product.category === 'T-Shirts')

export default function TShirtsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid 
        title="T-Shirts Collection" 
        products={tshirts}
        columns={4}
      />
    </div>
  )
} 