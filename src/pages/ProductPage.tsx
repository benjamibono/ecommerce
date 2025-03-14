import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import FavoriteButton from '@/components/FavoriteButton'

interface Breadcrumb {
  id: number
  name: string
  href: string
}

interface Color {
  name: string
  class: string
  selectedClass: string
}

interface Size {
  name: string
  inStock: boolean
}

interface Image {
  id: number
  src: string
  alt: string
}

interface Product {
  id: string
  name: string
  price: number
  breadcrumbs: Breadcrumb[]
  rating: number
  reviewCount: number
  images: Image[]
  colors: Color[]
  sizes: Size[]
  description: string
  highlights: string[]
  details: string
}

interface Products {
  [key: string]: Product
}

// Mock database - En un caso real, esto vendría de tu backend
const products: Products = {
  '1': {
    id: '1',
    name: 'Classic Hoodie',
    price: 90,
    breadcrumbs: [
      { id: 2, name: 'Hoodies', href: '/category/hoodies' },
    ],
    rating: 4.5,
    reviewCount: 117,
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Classic Hoodie front view',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Classic Hoodie back view',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Classic Hoodie side view',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Classic Hoodie worn view',
      }
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description: 'The Classic Hoodie features a premium cotton blend material, offering both comfort and durability. Perfect for everyday wear, this hoodie includes a kangaroo pocket and adjustable drawstrings.',
    highlights: [
      'Premium cotton blend material',
      'Comfortable ribbed cuffs and hem',
      'Adjustable drawstring hood',
      'Kangaroo pocket',
      'Available in multiple colors',
      'Machine washable',
    ],
    details: 'This hoodie is made from a premium cotton blend that provides exceptional comfort and durability. The fabric is pre-shrunk to ensure a consistent fit, and the double-lined hood adds extra warmth. The ribbed cuffs and hem help maintain the garment\'s shape over time.',
  },
  '2': {
    id: '2',
    name: 'Premium Hoodie',
    price: 79,
    breadcrumbs: [
      { id: 1, name: 'Men', href: '/' },
    ],
    rating: 4.8,
    reviewCount: 89,
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Premium Hoodie front view',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Premium Hoodie back view',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Premium Hoodie side view',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Premium Hoodie worn view',
      }
    ],
    colors: [
      { name: 'Navy', class: 'bg-blue-900', selectedClass: 'ring-blue-900' },
      { name: 'Red', class: 'bg-red-600', selectedClass: 'ring-red-600' },
      { name: 'Green', class: 'bg-green-600', selectedClass: 'ring-green-600' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
    description: 'The Premium Hoodie is crafted from high-quality materials for superior comfort and style. Features a modern fit and premium details.',
    highlights: [
      'High-quality cotton blend',
      'Modern fit',
      'Premium metal hardware',
      'Double-layered hood',
      'Reinforced seams',
      'Machine washable',
    ],
    details: 'Our Premium Hoodie is designed for those who appreciate quality and style. Made with a specially developed cotton blend that offers superior softness while maintaining its shape wear after wear.',
  },
  '3': {
    id: '3',
    name: 'Sport Sweatshirt',
    price: 64,
    breadcrumbs: [
      { id: 2, name: 'Hoodies', href: '/category/hoodies' },
    ],
    rating: 4.3,
    reviewCount: 156,
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Sport Sweatshirt front view',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Sport Sweatshirt back view',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Sport Sweatshirt side view',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Sport Sweatshirt worn view',
      }
    ],
    colors: [
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Blue', class: 'bg-blue-600', selectedClass: 'ring-blue-600' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
    description: 'The Sport Sweatshirt is designed for active lifestyles, combining comfort with performance features. Perfect for workouts or casual wear.',
    highlights: [
      'Moisture-wicking fabric',
      'Breathable material',
      'Flexible fit',
      'Side pockets',
      'Reflective details',
      'Machine washable',
    ],
    details: 'Engineered for movement, our Sport Sweatshirt features moisture-wicking technology and breathable materials. The flexible fit ensures comfort during any activity.',
  },
  '4': {
    id: '4',
    name: 'Limited Edition Collection',
    price: 149,
    breadcrumbs: [
      { id: 1, name: 'Collections', href: '#' },
      { id: 2, name: 'Limited Edition', href: '#' },
    ],
    rating: 4.9,
    reviewCount: 42,
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Limited Edition Collection front view',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Limited Edition Collection back view',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Limited Edition Collection side view',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        alt: 'Limited Edition Collection worn view',
      }
    ],
    colors: [
      { name: 'Gold', class: 'bg-yellow-600', selectedClass: 'ring-yellow-600' },
      { name: 'Silver', class: 'bg-gray-300', selectedClass: 'ring-gray-300' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false },
    ],
    description: 'Part of our exclusive Limited Edition Collection, this premium piece features unique designs and premium materials. Each item is numbered and comes with a certificate of authenticity.',
    highlights: [
      'Limited production run',
      'Numbered edition',
      'Premium materials',
      'Exclusive design',
      'Certificate of authenticity',
      'Luxury packaging',
    ],
    details: 'This exclusive piece is part of our Limited Edition Collection, featuring unique designs and premium materials. Each item is individually numbered and comes with a certificate of authenticity.',
  },
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [selectedSize, setSelectedSize] = useState<Size>(products[id || '1'].sizes[2])
  const [selectedImage, setSelectedImage] = useState<Image>(products[id || '1'].images[0])

  const product = {
    id: parseInt(products[id || '1'].id),
    title: products[id || '1'].name,
    price: products[id || '1'].price,
    image: selectedImage.src,
    description: products[id || '1'].description,
  }

  if (!products[id || '1']) {
    return <div>Product not found</div>
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-full w-full rounded-lg object-cover object-center"
              />
              <div className="absolute top-4 right-4">
                <FavoriteButton product={product} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {products[id || '1'].images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 ${
                    selectedImage.id === image.id ? 'ring-2 ring-indigo-500' : 'ring-1 ring-transparent'
                  }`}
                >
                  <span className="sr-only">{image.alt}</span>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full rounded-md object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{products[id || '1'].name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${products[id || '1'].price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        products[id || '1'].rating > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">
                  {products[id || '1'].reviewCount} reviews
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <p>{products[id || '1'].description}</p>
              </div>
            </div>

            <form className="mt-8">
              {/* Sizes */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  {products[id || '1'].sizes.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={({ checked }) =>
                        classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          checked ? 'ring-2 ring-indigo-500' : '',
                          'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                        )
                      }
                    >
                      <span>{size.name}</span>
                      {size.inStock ? (
                        <span
                          className={classNames(
                            'pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500'
                          )}
                          aria-hidden="true"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                          </svg>
                        </span>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>

            {/* Product details */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  {products[id || '1'].highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 