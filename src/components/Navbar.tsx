import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  UserIcon,
  HeartIcon,
  XMarkIcon,
  SparklesIcon,
  SwatchIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar";

const categories = [
  {
    name: "Hoodies",
    description: "Comfortable and stylish hoodies",
    href: "/category/hoodies",
    icon: ShoppingBagIcon,
  },
  {
    name: "T-Shirts",
    description: "Classic and trendy t-shirts",
    href: "/category/t-shirts",
    icon: ShoppingBagIcon,
  },
  {
    name: "Sweatshirts",
    description: "Cozy sweatshirts for everyday",
    href: "/category/sweatshirts",
    icon: ShoppingBagIcon,
  },
  {
    name: "Collections",
    description: "Curated seasonal collections",
    href: "/category/collections",
    icon: SwatchIcon,
  },
  {
    name: "All Products",
    description: "Browse our complete catalog",
    href: "/products",
    icon: ShoppingBagIcon,
  },
];

const userActions = [
  { name: "My Account", href: "/login", icon: UserIcon },
  { name: "Cart", href: "/cart", icon: ShoppingBagIcon },
  { name: "Wishlist", href: "/favorites", icon: HeartIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { favorites } = useFavorites();
  const { toggleCart, totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NexBuy</span>
            <span className="text-2xl font-bold text-blue-600">NexBuy</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Shop
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
              <div className="p-4">
                {categories.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-blue-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/sale" className="text-sm/6 font-semibold text-gray-900">
            On Sale
          </a>
          <a href="/new" className="text-sm/6 font-semibold text-gray-900">
            New Arrivals
          </a>
          <a
            href="/collections"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Collections
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full">
              <UserIcon className="h-6 w-6" />
            </Link>
            <Link
              to="/favorites"
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <HeartIcon className="h-6 w-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">NexBuy</span>
              <span className="text-2xl font-bold text-blue-600">NexBuy</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Shop
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {categories.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/sale"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Sale
                </a>
                <a
                  href="/new"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  New Arrivals
                </a>
                <a
                  href="/collections"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Collections
                </a>
              </div>
              <div className="py-6 space-y-2">
                {userActions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 flex rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 items-center gap-2"
                  >
                    <item.icon className="size-5" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
