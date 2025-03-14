import { ProductGrid } from '@/components/ProductGrid'

const hoodies = [
  {
    id: '1',
    name: 'Classic Hoodie',
    price: 50,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
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
    name: 'Premium Cotton Hoodie',
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
    name: 'Sport Hoodie',
    price: 60,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
  {
    id: '4',
    name: 'Limited Edition Hoodie',
    price: 90,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    isNew: true,
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
  {
    id: '5',
    name: 'Urban Style Hoodie',
    price: 70,
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
    id: '6',
    name: 'Winter Hoodie',
    price: 100,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },
  {
    id: '7',
    name: 'Streetwear Hoodie',
    price: 85,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
  {
    id: '8',
    name: 'Designer Hoodie',
    price: 130,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies',
    isNew: true,
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
  },
]

export default function HoodiesPage() {
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