import { ProductGrid } from '@/components/ProductGrid'

const collections = [
  {
    id: '1',
    name: 'Summer Collection',
    price: 120,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Collections',
    isNew: true,
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  }
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid 
        title="Collections" 
        products={collections}
        columns={4}
      />
    </div>
  )
} 