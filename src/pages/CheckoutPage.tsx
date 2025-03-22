import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart, updateQuantity, removeFromCart } = useCart();
  const [sameAddress, setSameAddress] = useState(true);
  const [discountCode, setDiscountCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate totals
  const shipping = 22;
  const taxes = subtotal * 0.1; // 10% tax rate
  const discount = discountCode === 'CHEAPSKATE' ? -24 : 0;
  const total = subtotal + shipping + taxes + discount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Here you would typically make an API call to process the payment
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Clear the cart and redirect to success page
      clearCart();
      navigate('/checkout/success');
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Checkout</h1>
            <p className="mt-4 text-gray-500">Your cart is empty</p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Order Summary for Mobile */}
        <div className="lg:hidden">
          <div className="border-b border-gray-200">
            <div className="px-4 py-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order summary</h2>
              <div className="flex justify-between text-base">
                <p className="text-gray-500">Subtotal</p>
                <p className="font-medium">{subtotal.toFixed(2)}€</p>
              </div>
              {discount !== 0 && (
                <div className="flex justify-between text-base mt-2">
                  <div className="flex items-center">
                    <p className="text-gray-500">Discount</p>
                    <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      CHEAPSKATE
                    </span>
                  </div>
                  <p className="font-medium text-green-600">{discount.toFixed(2)}€</p>
                </div>
              )}
              <div className="mt-2 flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>{total.toFixed(2)}€</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at the next step</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          {/* Payment Form */}
          <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 shadow-sm rounded-lg">
                {/* Apple Pay Button */}
                <button
                  type="button"
                  className="w-full bg-black text-white rounded-md py-3 flex items-center justify-center space-x-2 mb-6 hover:bg-gray-800 transition-colors"
                >
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
                    <span className="bg-white px-4 text-gray-500">or pay with card</span>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-y-4">
                    <div>
                      <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
                        Name on card
                      </label>
                      <input
                        type="text"
                        id="card-name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                        Card number
                      </label>
                      <input
                        type="text"
                        id="card-number"
                        required
                        pattern="[0-9]{16}"
                        maxLength={16}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                          Expiration (MM/YY)
                        </label>
                        <input
                          type="text"
                          id="expiration"
                          required
                          pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                          placeholder="MM/YY"
                          maxLength={5}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          required
                          pattern="[0-9]{3,4}"
                          maxLength={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping address</h3>
                    <div className="grid grid-cols-1 gap-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6 sm:col-span-2">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-3 sm:col-span-2">
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                            State
                          </label>
                          <input
                            type="text"
                            id="state"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-3 sm:col-span-2">
                          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            Postal code
                          </label>
                          <input
                            type="text"
                            id="postal-code"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={sameAddress}
                      onChange={(e) => setSameAddress(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-2 text-sm text-gray-500">
                      Billing address is the same as shipping address
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="mt-8 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isProcessing ? 'Processing...' : `Pay ${total.toFixed(2)}€`}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary - Desktop */}
          <div className="hidden lg:block px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white p-6 sm:p-8 shadow-sm rounded-lg">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Order summary</h2>

                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="text-sm">{item.name}</h3>
                              <p className="ml-4 text-sm">{(item.price * item.quantity).toFixed(2)}€</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                          </div>
                          
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2 border rounded-md">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 hover:bg-gray-100 rounded-l-md disabled:opacity-50"
                                  disabled={item.quantity <= 1}
                                >
                                  <MinusIcon className="h-3 w-3 text-gray-500" />
                                </button>
                                <span className="w-6 text-center text-sm text-gray-600">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:bg-gray-100 rounded-r-md"
                                >
                                  <PlusIcon className="h-3 w-3 text-gray-500" />
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1"
                              >
                                <XMarkIcon className="h-3 w-3" />
                                Remove
                              </button>
                            </div>

                            <p className="text-xs text-gray-500">
                              {item.price.toFixed(2)}€ each
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="Discount code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 whitespace-nowrap transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-500">Subtotal</p>
                    <p className="font-medium">{subtotal.toFixed(2)}€</p>
                  </div>
                  {discount !== 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <p className="text-gray-500">Discount</p>
                        <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                          CHEAPSKATE
                        </span>
                      </div>
                      <p className="font-medium text-green-600">{discount.toFixed(2)}€</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-500">Shipping</p>
                    <p className="font-medium">{shipping.toFixed(2)}€</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-500">Taxes</p>
                    <p className="font-medium">{taxes.toFixed(2)}€</p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex items-center justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>{total.toFixed(2)}€</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Including VAT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 