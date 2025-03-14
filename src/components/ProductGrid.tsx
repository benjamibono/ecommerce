import { ProductCard } from './ProductCard'

interface Product {
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

interface ProductGridProps {
  title: string
  products: Product[]
  columns?: 2 | 3 | 4
}

export const ProductGrid = ({ title, products, columns = 4 }: ProductGridProps) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
        <div className={`mt-6 grid gap-x-6 gap-y-10 ${gridCols[columns]} sm:gap-y-10 lg:gap-x-8`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              isOnSale={product.isOnSale}
              sizes={product.sizes}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 