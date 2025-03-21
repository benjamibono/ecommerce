import { useState, useMemo } from 'react'
import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'
import ProductFilters, { SortOption } from '@/components/ProductFilters'

export default function SweatshirtsPage() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [currentSort, setCurrentSort] = useState<SortOption>('name-asc')

  const sweatshirts = products.filter(product => product.category === 'Sweatshirts')

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = sweatshirts;

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
  }, [sweatshirts, selectedSizes, currentSort]);

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductFilters
        selectedSizes={selectedSizes}
        onSizeChange={handleSizeChange}
        onSortChange={setCurrentSort}
        currentSort={currentSort}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid 
          title="Sweatshirts Collection" 
          products={filteredAndSortedProducts}
          columns={4}
        />
      </div>
    </div>
  )
} 