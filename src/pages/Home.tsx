import { ProductGrid } from "@/components/ProductGrid";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Clothing collection"
            className="w-full h-full object-cover object-center"
            style={{ opacity: "0.7" }}
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            New arrivals are here
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            The new arrivals have, well, newly arrived. Check out the latest options from our
            summer small-batch release while they're still in stock.
          </p>
          <div className="mt-10">
            <Link
              to="/new"
              className="inline-block bg-white border border-transparent rounded-md py-3 px-8 font-medium text-gray-900 hover:bg-gray-100"
            >
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section - Bento Grid */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
            {/* <Link to="/categories" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
              Browse all categories <span aria-hidden="true">→</span>
            </Link> */}
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* T-Shirts - Large Image */}
            <Link 
              to="/category/t-shirts"
              className="col-span-12 md:col-span-6 relative rounded-lg overflow-hidden group h-[28rem] md:h-[36rem] block"
            >
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="T-Shirts"
                className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">T-Shirts</h3>
              </div>
            </Link>

            {/* Right Column - Two Smaller Images */}
            <div className="col-span-12 md:col-span-6 grid grid-rows-2 gap-4">
              {/* Hoodies */}
              <Link 
                to="/category/hoodies"
                className="relative rounded-lg overflow-hidden group h-56 md:h-[17.5rem] block"
              >
                <img
                  src="https://images.unsplash.com/photo-1565978771542-0db9ab9ad3de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Hoodies"
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Hoodies</h3>
                </div>
              </Link>

              {/* Sweatshirts */}
              <Link 
                to="/category/sweatshirts"
                className="relative rounded-lg overflow-hidden group h-56 md:h-[17.5rem] block"
              >
                <img
                  src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Sweatshirts"
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Sweatshirts</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <ProductGrid title="Featured Products" products={products.slice(0, 8)} columns={4} />
        </div>
      </div>

      {/* New Products Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <ProductGrid title="New Arrivals" products={products.filter(p => p.isNew).slice(0, 4)} columns={4} />
        </div>
      </div>

      {/* Sale Products Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <ProductGrid title="On Sale" products={products.filter(p => p.isOnSale).slice(0, 4)} columns={4} />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl" id="newsletter-headline">
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              Get the latest updates on new products and upcoming sales. No spam, we promise.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;