import { Link } from "react-router-dom";
import { getImageUrl } from "@/utils/cloudinary";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants for different sections
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, isInView };
};

const Home = () => {
  const hero = useScrollAnimation();
  const categories = useScrollAnimation();
  const about = useScrollAnimation();
  const favorites = useScrollAnimation();
  const sales = useScrollAnimation();
  const services = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        ref={hero.ref}
        initial="hidden"
        animate={hero.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="relative bg-gray-900 min-h-[50dvh] 2xl:min-h-[70dvh]"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Clothing collection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <motion.div
          variants={staggerChildren}
          className="relative mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8 max-w-[90rem] 2xl:max-w-none 2xl:px-24 2xl:py-72"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl 2xl:text-8xl max-w-4xl"
          >
            New arrivals are here
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl text-gray-300 max-w-3xl 2xl:text-3xl 2xl:max-w-4xl"
          >
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they're still in
            stock.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 2xl:mt-16">
            <Link
              to="/new"
              className="inline-block bg-white border border-transparent rounded-md py-3 px-8 font-medium text-gray-900 hover:bg-gray-100 2xl:text-2xl 2xl:px-16 2xl:py-6"
            >
              Shop New Arrivals
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Categories Section - Bento Grid */}
      <motion.div
        ref={categories.ref}
        initial="hidden"
        animate={categories.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-white py-12 sm:py-16 2xl:py-32"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem] 2xl:max-w-none 2xl:px-24">
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-between mb-6 2xl:mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 2xl:text-5xl">
              Shop by Category
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid h-[800px] 2xl:h-[1200px] w-full gap-4 p-2 grid-cols-4 grid-rows-10"
          >
            {/* Category items with motion */}
            <motion.div variants={scaleIn} className="col-span-2 row-span-6">
              <Link
                to="/category/t-shirts"
                className="relative rounded-lg overflow-hidden group block h-full"
              >
                <img
                  src={getImageUrl("9")}
                  alt="T-Shirts Collection"
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 2xl:p-12 text-white">
                  <h3 className="text-2xl font-bold 2xl:text-5xl">T-Shirts</h3>
                  <p className="mt-2 text-sm 2xl:text-xl">Starting at 25 €</p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn} className="col-span-2 row-span-3">
              <Link
                to="/category/hoodies"
                className="relative rounded-lg overflow-hidden group block h-full"
              >
                <img
                  src={getImageUrl("13")}
                  alt="Hoodies Collection"
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 2xl:p-10 text-white">
                  <h3 className="text-2xl font-bold 2xl:text-4xl">Hoodies</h3>
                  <p className="mt-2 text-sm 2xl:text-xl">Starting at 50 €</p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn} className="col-span-2 row-span-3">
              <Link
                to="/category/leggings"
                className="relative rounded-lg overflow-hidden group block h-full"
              >
                <img
                  src={getImageUrl("2")}
                  alt="Leggings Collection"
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 2xl:p-10 text-white">
                  <h3 className="text-2xl font-bold 2xl:text-4xl">Leggings</h3>
                  <p className="mt-2 text-sm 2xl:text-xl">Starting at 25 €</p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn} className="col-span-4 row-span-6">
              <Link
                to="/category/tops"
                className="relative rounded-lg overflow-hidden group block h-full"
              >
                <img
                  src={getImageUrl("32")}
                  alt="Tops Collection"
                  className="w-full h-full object-top object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 2xl:p-12 text-white">
                  <h3 className="text-2xl font-bold 2xl:text-5xl">Tops</h3>
                  <p className="mt-2 text-sm 2xl:text-xl">Starting at 30 €</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        ref={about.ref}
        initial="hidden"
        animate={about.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="relative bg-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Sustainable fashion workspace"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40" />
        </div>
        <motion.div
          variants={staggerChildren}
          className="relative mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 max-w-[90rem] 2xl:max-w-none 2xl:px-24 2xl:py-64 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl 2xl:text-7xl"
          >
            Crafting Timeless Style
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto 2xl:text-3xl 2xl:max-w-5xl"
          >
            We're dedicated to creating sustainable, high-quality clothing that
            stands the test of time. Our commitment to ethical manufacturing and
            timeless design means each piece is crafted to be both
            environmentally conscious and eternally stylish.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 2xl:mt-16">
            <Link
              to="/about"
              className="inline-block bg-white border border-transparent rounded-md py-3 px-8 font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200 2xl:text-2xl 2xl:px-16 2xl:py-6"
              aria-label="Read our story"
              tabIndex={0}
            >
              Read our story
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Our Favorites Section */}
      <motion.div
        ref={favorites.ref}
        initial="hidden"
        animate={favorites.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Product items with motion */}
            <motion.div variants={scaleIn}>
              <Link to="/product/1" className="group">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={getImageUrl("1")}
                    alt="Essential Bra"
                    className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Essential Bra
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">50 €</p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Link to="/product/10" className="group">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={getImageUrl("10")}
                    alt="Vintage Hoodie"
                    className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Vintage Hoodie
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    <span className="line-through text-gray-400">35 €</span>{" "}
                    <span className="text-red-600">24.5 €</span>
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Link to="/product/4" className="group">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={getImageUrl("4")}
                    alt="Performance Tank Top"
                    className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Performance Tank Top
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">90 €</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Sales CTA Section */}
      <motion.div
        ref={sales.ref}
        initial="hidden"
        animate={sales.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="px-8 py-24 sm:px-12 lg:px-16 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Final Stock.
                <br />
                <span className="mt-2 block">Up to 50% off.</span>
              </h2>
              <div className="mt-8">
                <Link
                  to="/sale"
                  className="inline-flex items-center text-lg text-white hover:text-gray-200 font-medium"
                >
                  Shop the sale
                  <span aria-hidden="true" className="ml-2 text-xl">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-2 gap-4 p-8">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={getImageUrl("18")}
                  alt="Store interior with clothing display"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={getImageUrl("17")}
                  alt="Model wearing our clothing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={getImageUrl("19")}
                  alt="Folded t-shirts on shelf"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={getImageUrl("20")}
                  alt="Clothing on hangers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        ref={services.ref}
        initial="hidden"
        animate={services.isInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="bg-gray-50"
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 2xl:max-w-[90rem] 2xl:py-40">
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-16"
          >
            {/* Service items with motion */}
            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 bg-white rounded-full shadow-lg flex items-center justify-center 2xl:w-24 2xl:h-24">
                <svg
                  className="w-8 h-8 text-indigo-600 2xl:w-12 2xl:h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 2xl:text-2xl">
                Free returns
              </h3>
              <p className="text-gray-600 text-sm 2xl:text-xl">
                Not what you expected? Place it back in the parcel and attach
                the pre-paid postage stamp.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 bg-white rounded-full shadow-lg flex items-center justify-center 2xl:w-24 2xl:h-24">
                <svg
                  className="w-8 h-8 text-indigo-600 2xl:w-12 2xl:h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 2xl:text-2xl">
                Same day delivery
              </h3>
              <p className="text-gray-600 text-sm 2xl:text-xl">
                We offer a delivery service that has never been done before.
                Checkout today and receive your products within hours.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 bg-white rounded-full shadow-lg flex items-center justify-center 2xl:w-24 2xl:h-24">
                <svg
                  className="w-8 h-8 text-indigo-600 2xl:w-12 2xl:h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 2xl:text-2xl">
                All year discount
              </h3>
              <p className="text-gray-600 text-sm 2xl:text-xl">
                Looking for a deal? You can use the code "ALLYEAR" at checkout
                and get money off all year round.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 bg-white rounded-full shadow-lg flex items-center justify-center 2xl:w-24 2xl:h-24">
                <svg
                  className="w-8 h-8 text-indigo-600 2xl:w-12 2xl:h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 2xl:text-2xl">
                For the planet
              </h3>
              <p className="text-gray-600 text-sm 2xl:text-xl">
                We've pledged 1% of sales to the preservation and restoration of
                the natural environment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
