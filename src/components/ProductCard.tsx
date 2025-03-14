import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickView from './QuickView'
import FavoriteButton from './FavoriteButton'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  isOnSale?: boolean
  sizes: {
    name: string;
    inStock: boolean;
  }[];
}

export const ProductCard = ({ 
  id,
  name, 
  price, 
  image, 
  category,
  isNew, 
  isOnSale,
  sizes,
}: ProductCardProps) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const product = {
    id: parseInt(id),
    title: name,
    price: price,
    image: image,
    description: name, // Using name as description for now
    sizes: sizes,
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setQuickViewOpen(true)
  }

  return (
    <>
      <div className="group">
        <Link to={`/product/${id}`} className="block" onClick={handleClick}>
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            {isNew && (
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                New
              </span>
            )}
            {isOnSale && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}
            <div className="absolute top-2 right-2">
              <FavoriteButton product={product} />
            </div>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${price.toFixed(0)}</p>
        </Link>
      </div>
      <QuickView 
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  )
}
