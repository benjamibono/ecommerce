import { useState, useMemo } from 'react'
import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'
import ProductFilters, { SortOption } from '@/components/ProductFilters'

export default function NewPage() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [currentSort, setCurrentSort] = useState<SortOption>('name-asc')

  const newProducts = products.filter(product => product.isNew)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = newProducts;

    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => selectedSizes.includes(size.name))
      );
    }

    // Apply sorting
    return [...filtered].sort((a, b) => {
      switch (currentSort) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return (a.discountedPrice || a.price) - (b.discountedPrice || b.price);
        case 'price-desc':
          return (b.discountedPrice || b.price) - (a.discountedPrice || a.price);
        default:
          return 0;
      }
    });
  }, [newProducts, selectedSizes, currentSort]);

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">New Arrivals</span>
            <span className="block text-indigo-600 mt-2">Fresh Styles Just In!</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Check out our latest collection of products. Be the first to wear these new styles!
          </p>
        </div>
        
        <div className="mt-8">
          <ProductFilters
            selectedSizes={selectedSizes}
            onSizeChange={handleSizeChange}
            onSortChange={setCurrentSort}
            currentSort={currentSort}
          />
          
          <div className="mt-6">
            <ProductGrid 
              title="New Products" 
              products={filteredAndSortedProducts}
              columns={4}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 