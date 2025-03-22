import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Radio, RadioGroup } from '@headlessui/react'
import FavoriteButton from '@/components/FavoriteButton'
import ShareButton from '@/components/ShareButton'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0])
  const { addToCart } = useCart()
  
  if (!product) {
    return <div className="text-center py-12">Product not found</div>
  }

  const productForFavorite = {
    id: parseInt(product.id),
    title: product.name,
    price: product.isOnSale && product.discountedPrice ? product.discountedPrice : product.price,
    image: product.image,
    description: product.description || '',
  }

  const shareUrl = window.location.href
  const shareTitle = `Check out ${product.name} on our store!`
  const shareDescription = product.description || `${product.name} - ${product.category}`

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedSize?.inStock) return

    addToCart({
      id: parseInt(product.id),
      name: product.name,
      href: `/product/${product.id}`,
      color: selectedSize.name,
      price: product.isOnSale && product.discountedPrice ? product.discountedPrice : product.price,
      imageSrc: product.image,
      imageAlt: product.description || product.name,
    })
  }

  // Calculate discount percentage if discountPercentage exists
  const discountPercentage = product.discountPercentage || 0

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full rounded-lg object-cover object-center"
              />
              {product.isOnSale && product.discountedPrice && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  -{discountPercentage}% OFF
                </span>
              )}
              <div className="absolute top-4 right-4">
                <FavoriteButton product={productForFavorite} />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              <ShareButton 
                url={shareUrl}
                title={shareTitle}
                description={shareDescription}
              />
            </div>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <div className="flex items-center gap-4">
                {product.discountedPrice ? (
                  <>
                    <p className="text-3xl tracking-tight text-red-600 font-semibold">${product.discountedPrice}</p>
                    <p className="text-2xl tracking-tight text-gray-500 line-through">${product.price}</p>
                  </>
                ) : (
                  <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
                )}
              </div>
            </div>

            {/* Product status */}
            <div className="mt-4 space-x-2">
              {product.isNew && !product.isOnSale && (
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  New
                </span>
              )}
              {product.isOnSale && (
                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  On Sale
                </span>
              )}
              {product.isLimitedEdition && (
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                  Limited Edition
                </span>
              )}
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <p>{product.description || `${product.name} - ${product.category}`}</p>
              </div>
            </div>

            <form onSubmit={handleAddToCart} className="mt-8">
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
                  {product.sizes.map((size) => (
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
                            'pointer-events-none absolute -inset-px rounded-md border-2 border-transparent'
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
                disabled={!selectedSize?.inStock}
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {selectedSize?.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </form>

            {/* Category */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Category</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                <p>{product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}