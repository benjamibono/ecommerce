import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
}

export default function CheckoutPage() {
  const [sameAddress, setSameAddress] = useState(true);
  const [discountCode, setDiscountCode] = useState('');
  
  // Mock cart items - replace with your actual cart data
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Micro Backpack',
      price: 70,
      image: '/backpack.jpg',
      color: 'Moss',
      size: '5L'
    },
    {
      id: '2',
      name: 'Small Stuff Satchel',
      price: 180,
      image: '/satchel.jpg',
      color: 'Sand',
      size: '18L'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = -24; // Mock discount
  const shipping = 22;
  const taxes = subtotal * 0.1; // 10% tax rate
  const total = subtotal + discount + shipping + taxes;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          {/* Payment Form */}
          <div className="space-y-6">
            <div className="bg-white p-8 shadow-sm rounded-lg">
              {/* Apple Pay Button */}
              <button className="w-full bg-black text-white rounded-md py-3 flex items-center justify-center space-x-2 mb-6">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                <span>Pay</span>
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500">or</span>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Card Details */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name on card
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-2">
                      Expiration date (MM/YY)
                    </label>
                    <input
                      type="text"
                      id="expiration"
                      className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mt-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="mt-4 grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State / Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-2">
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="postal-code"
                    className="w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sameAddress}
                    onChange={(e) => setSameAddress(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-500">
                    Billing address is the same as shipping address
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 shadow-sm rounded-lg lg:sticky lg:top-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order summary</h2>

            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.size}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Edit
                          </button>
                          <div className="mx-2 text-gray-300">|</div>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Discount code"
                    className="block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="button"
                  className="ml-4 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between text-base">
                <p className="text-gray-500">Subtotal</p>
                <p className="font-medium">${subtotal.toFixed(2)}</p>
              </div>
              {typeof discount === 'number' && (
                <div className="flex items-center justify-between text-base">
                  <div className="flex items-center">
                    <p className="text-gray-500">Discount</p>
                    <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      CHEAPSKATE
                    </span>
                  </div>
                  <p className="font-medium text-green-600">${discount.toFixed(2)}</p>
                </div>
              )}
              <div className="flex items-center justify-between text-base">
                <p className="text-gray-500">Shipping</p>
                <p className="font-medium">${shipping.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between text-base">
                <p className="text-gray-500">Taxes</p>
                <p className="font-medium">${taxes.toFixed(2)}</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Pay ${total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 