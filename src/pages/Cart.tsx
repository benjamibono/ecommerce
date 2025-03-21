import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
          <p className="mt-4 text-gray-500">Your cart is empty</p>
          <div className="mt-6">
            <Link
              to="/"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

      <form className="mt-12">
        <div>
          <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cartItems.map((product) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="shrink-0">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="size-24 rounded-md object-cover object-center sm:size-48"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link to={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {product.name}
                          </Link>
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">{product.price.toFixed(2)}€</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, product.quantity - 1)}
                          className="rounded-full p-1 text-gray-400 hover:text-gray-500"
                        >
                          <MinusIcon className="size-4" />
                        </button>
                        <span className="text-gray-500 w-8 text-center">
                          {product.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, product.quantity + 1)}
                          className="rounded-full p-1 text-gray-400 hover:text-gray-500"
                        >
                          <PlusIcon className="size-4" />
                        </button>
                      </div>

                      <div className="absolute right-0 top-0">
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>{subtotal.toFixed(2)}€</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Proceed to Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}