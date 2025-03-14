import { ProductGrid } from '@/components/ProductGrid'

const limitedEdition = [
  {
    id: '1',
    name: 'Limited Edition Hoodie',
    price: 150,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
    isNew: true,
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
    name: 'Exclusive T-Shirt',
    price: 89,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
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
    name: 'Special Edition Sweatshirt',
    price: 129,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
  {
    id: '4',
    name: 'Artist Collaboration',
    price: 199,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
    isNew: true,
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
  {
    id: '5',
    name: 'Anniversary Edition',
    price: 169,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
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
    id: '6',
    name: 'Designer Special',
    price: 249,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },
  {
    id: '7',
    name: 'Custom Edition',
    price: 189,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
  {
    id: '8',
    name: 'Premium Limited',
    price: 299,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Limited Edition',
    isNew: true,
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
]

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