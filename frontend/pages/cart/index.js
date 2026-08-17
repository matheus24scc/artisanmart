import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Handcrafted Silver Necklace",
      price: 89.99,
      image: "/placeholder-jewelry1.jpg",
      quantity: 1,
      artisan: "Maria Silva"
    },
    {
      id: 2,
      title: "Ceramic Coffee Mug Set",
      price: 45.00,
      image: "/placeholder-ceramics1.jpg",
      quantity: 2,
      artisan: "James Carter"
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - discount;
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleApplyCoupon = () => {
    // Simple coupon validation for demo
    if (couponCode.toUpperCase() === 'ARTISAN10') {
      const subtotal = calculateSubtotal();
      setDiscount(subtotal * 0.1); // 10% discount
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // In a real app, this would redirect to checkout page
    alert('Proceeding to checkout...');
  };

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <Link href="/" className="flex items-center space-x-3">
                <span className="text-xl font-bold text-indigo-600">ArtisanMart</span>
              </Link>
              <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Continue Shopping
              </Link>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Shopping Cart</h1>
          </div>
        </section>

        {/* Cart Contents */}
        {cartItems.length > 0 ? (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center py-6">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="ml-4 flex-1 space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <p>{item.title}</p>
                        <p className="text-indigo-600">${item.price}</p>
                      </div>
                      <p className="text-sm text-gray-500">Handcrafted by {item.artisan}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-indigo-700"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-xs text-red-600 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 text-center">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center h-96">
                <div className="space-y-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-500">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
                  <p className="text-lg text-gray-500">Add some beautiful handcrafted items to your cart and support independent artisans.</p>
                  <Link href="/" className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">Continue Shopping</Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">Have a coupon?</h2>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <p className="text-green-600 text-sm">You've saved ${discount.toFixed(2)}!</p>
                  )}
                </div>
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">Order summary</h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <span className="text-green-600">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t pt-4">
                      <span className="font-medium text-gray-900">Total</span>
                      <span className="font-bold text-xl text-gray-900">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} ArtisanMart. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}