import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Radio, RadioGroup } from '@headlessui/react'
import { useCart } from '@/context/CartContext'

interface Product {
  id: number;
  title: string;
  price: number;
  discountedPrice?: number;
  image: string;
  description: string;
  isOnSale?: boolean;
  sizes: {
    name: string;
    inStock: boolean;
  }[];
}

interface QuickViewProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function QuickView({ product, open, onClose }: QuickViewProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const { addToCart } = useCart()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // If on mobile, redirect to product page instead of showing QuickView
  useEffect(() => {
    if (isMobile && open) {
      onClose()
      window.location.href = `/product/${product.id}`
    }
  }, [isMobile, open, product.id, onClose])

  // Don't render anything on mobile
  if (isMobile) return null
  
  // Calculate discount percentage if discountedPrice exists
  const discountPercentage = product.discountedPrice 
    ? Math.round((1 - product.discountedPrice / product.price) * 100) 
    : 0

  const handleAddToCart = () => {
    if (!selectedSize.inStock) return;

    addToCart({
      id: product.id,
      name: product.title,
      href: `/product/${product.id}`,
      color: selectedSize.name, // Using size as color since we don't have color in the product interface
      price: product.discountedPrice || product.price,
      imageSrc: product.image,
      imageAlt: product.description,
    });
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      className="relative z-50 hidden md:block" // Hide on mobile, show on md and up
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-3xl rounded bg-white">
          <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>

            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="relative sm:col-span-4 lg:col-span-5">
                <img
                  alt={product.title}
                  src={product.image}
                  className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover"
                />
                {product.isOnSale && product.discountedPrice && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    -{discountPercentage}%
                  </span>
                )}
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>

                <section aria-labelledby="information-heading" className="mt-2">
                  <h3 id="information-heading" className="sr-only">
                    Product information
                  </h3>

                  {product.discountedPrice ? (
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-semibold text-red-600">${product.discountedPrice.toFixed(0)}</p>
                      <p className="text-xl text-gray-500 line-through">${product.price.toFixed(0)}</p>
                    </div>
                  ) : (
                    <p className="text-2xl text-gray-900">${product.price.toFixed(0)}</p>
                  )}
                </section>

                <section aria-labelledby="options-heading" className="mt-10">
                  <h3 id="options-heading" className="sr-only">
                    Product options
                  </h3>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">Size</h3>
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

                  <div className="mt-8 flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      disabled={!selectedSize.inStock}
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {selectedSize.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      onClick={onClose}
                      className="mt-2 flex w-full items-center justify-center rounded-md border border-indigo-600 bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      View Product Details
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
} 