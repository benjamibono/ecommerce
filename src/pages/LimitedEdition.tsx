import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'

const limitedEdition = products.filter(product => product.isLimitedEdition)

export default function LimitedEditionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid 
        title="Limited Edition" 
        products={limitedEdition}
        columns={4}
      />
    </div>
  )
} 