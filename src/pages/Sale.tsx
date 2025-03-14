import { ProductGrid } from '@/components/ProductGrid'
import { products } from '@/data/products'

export default function SalePage() {
  const saleProducts = products.filter(product => product.isOnSale)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Ofertas Especiales</span>
            <span className="block text-red-600 mt-2">¡30% de descuento en todo!</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Descubre nuestra selección de productos en oferta. ¡No te pierdas estas increíbles oportunidades!
          </p>
        </div>
        <div className="mt-12">
          <ProductGrid 
            title="Productos en Oferta" 
            products={saleProducts}
            columns={4}
          />
        </div>
      </div>
    </div>
  )
} 