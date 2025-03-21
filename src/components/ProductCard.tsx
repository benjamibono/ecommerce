import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickView from './QuickView'
import FavoriteButton from './FavoriteButton'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  id: string
  name: string
  price: number
  discountedPrice?: number
  image: string
  category: string
  isNew?: boolean
  isOnSale?: boolean
  discountPercentage?: number
  sizes: {
    name: string;
    inStock: boolean;
  }[];
}

export const ProductCard = ({ 
  id,
  name, 
  price, 
  discountedPrice,
  image, 
  isNew, 
  isOnSale,
  discountPercentage = 0,
  sizes,
}: ProductCardProps) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const product = {
    id: parseInt(id),
    title: name,
    price: price,
    discountedPrice: discountedPrice,
    image: image,
    description: name, // Using name as description for now
    isOnSale: isOnSale,
    sizes: sizes,
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setQuickViewOpen(true)
  }

  return (
    <>
      <div className="group relative flex flex-col">
        <Link to={`/product/${id}`} className="block relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-75"
          />
          {isNew && !isOnSale && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
          {isOnSale && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          )}
          <div className="absolute top-2 right-2">
            <FavoriteButton product={product} />
          </div>
        </Link>
        <div className="mt-4 flex flex-col">
          <h3 className="text-sm text-gray-700 font-medium">{name}</h3>
          <div className="mt-1 flex items-center gap-2">
            {isOnSale && discountedPrice ? (
              <div className="flex items-baseline gap-2">
                <span className="text-base text-gray-500 line-through">${price.toFixed(0)}</span>
                <span className="text-lg font-semibold text-red-600">${discountedPrice.toFixed(0)}</span>
              </div>
            ) : (
              <p className="text-lg font-semibold text-gray-900">${price.toFixed(0)}</p>
            )}
          </div>
          <button
            onClick={handleClick}
            className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <QuickView 
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  )
}
