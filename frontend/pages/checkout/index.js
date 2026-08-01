import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA'
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    nameOnCard: ''
  });

  const handleNextStep = () => {
    if (step === 1) {
      // Validate shipping info
      if (!shippingInfo.fullName || !shippingInfo.address || !shippingInfo.city || 
          !shippingInfo.state || !shippingInfo.zipCode) {
        alert('Please fill in all required shipping information');
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handlePlaceOrder = () => {
    // Validate payment info
    if (!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvc || !paymentInfo.nameOnCard) {
      alert('Please fill in all payment information');
      return;
    }
    
    // In a real app, this would process the payment
    alert('Order placed successfully!');
    // Reset cart and redirect to confirmation page
    // For demo, we'll just reset the form
    setStep(1);
    setShippingInfo({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'USA'
    });
    setPaymentInfo({
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      nameOnCard: ''
    });
  };

  const steps = [
    { id: 1, title: 'Shipping Information' },
    { id: 2, title: 'Payment Method' },
    { id: 3, title: 'Order Review' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-indigo-600">ArtisanMart</span>
            </Link>
            <Link href="/cart" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              ← Back to Cart
            </Link>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Checkout
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {steps.map((stepItem) => (
              <React.Fragment key={stepItem.id}>
                <div className={`
                  flex h-9 w-9 items-center justify-center rounded-md 
                  ${step >= stepItem.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'}
                `}>
                  {stepItem.id}
                </div>
                {stepItem.id < steps.length && (
                  <div className="w-px h-5 bg-gray-300 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">
                Shipping Information
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={shippingInfo.fullName}
                      onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your street address"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Apartment, suite, etc. (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      value={shippingInfo.apartment}
                      onChange={(e) => setShippingInfo({...shippingInfo, apartment: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State / Province
                    </label>
                    <select
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="">Select a state</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your ZIP code"
                      value={shippingInfo.zipCode}
                      onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      value={shippingInfo.country}
                      onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="USA">United States</option>
                      <option value="CAN">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AUS">Australia</option>
                      <option value="DEU">Germany</option>
                      <option value="FRA">France</option>
                      <option value="JPN">Japan</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">
                Payment Method
              </h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      inputMode="numeric"
                      maxLength="19"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                        <input
                      type="text"
                      placeholder="MM / YY"
                      value={paymentInfo.expiryDate}
                      onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      inputMode="numeric"
                      maxLength="5"
                      required
                    />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={paymentInfo.cvc}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cvc: e.target.value})}
                        className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                                 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        inputMode="numeric"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      placeholder="Name as it appears on card"
                      value={paymentInfo.nameOnCard}
                      onChange={(e) => setPaymentInfo({...paymentInfo, nameOnCard: e.target.value})}
                      className="block w-full pl-3 pr-1 py-2 border border-gray-300 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    We accept Visa, Mastercard, American Express, and Discover.
                  </p>
                </div>
              </form>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">
                Order Review
              </h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Shipping to</span>
                      <span>
                        {shippingInfo.fullName}<br/>
                        {shippingInfo.address} {shippingInfo.apartment}<br/>
                        {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br/>
                        {shippingInfo.country}
                      </span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span>Items (2)</span>
                          <span className="font-medium">$123.50</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Shipping</span>
                          <span className="font-medium">Free</span>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between text-lg font-medium">
                            <span>Total</span>
                            <span className="text-indigo-600">$123.50</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Your card will be charged for the total amount shown above.
                  </p>
                  <p className="text-sm text-gray-500">
                    You'll receive an email confirmation once your order is processed.
                  </p>
                </div>
                
                <button
                  onClick={handlePlaceOrder}
                  className="w-flex items-center justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ArtisanMart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
