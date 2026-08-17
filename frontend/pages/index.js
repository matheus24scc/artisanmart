import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-none lg:grid lg:grid-cols-[30%_minmax(0,1fr)] lg:items-center lg:gap-8">
            <div className="lg:order-2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Discover Unique Handcrafted Treasures
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Explore one-of-a-kind handmade goods created by talented artisans from around the world.
              </p>
              <div className="mt-10 flex items-stretch lg:space-x-6">
                <Link
                  href="/products"
                  className="flex-1 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Shop Now
                </Link>
                <Link
                  href="/artisans"
                  className="ml-4 flex-1 flex items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Meet Artisans
                </Link>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="relative h-64 w-full lg:h-96 lg:w-full">
                <Image
                  src="/placeholder-handcrafted.jpg"
                  alt="Handcrafted items display"
                  fill
                  objectFit="cover"
                  className="hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h2 className="sr-only">Featured categories</h2>
          <div className="grid cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-jewelry.jpg"
                  alt="Handmade jewelry"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Jewelry
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp2">
                  Handcrafted necklaces, bracelets, earrings, and more
                </p>
              </div>
            </div>
            <div
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-ceramics.jpg"
                  alt="Handmade ceramics"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Ceramics
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp2">
                  Artistic pottery, mugs, bowls, and decorative pieces
                </p>
              </div>
            </div>
            <div
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-textiles.jpg"
                  alt="Handmade textiles"
                  fill
                  objectFit="fill"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Textiles
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp2">
                  Woven blankets, scarves, clothing, and home accessories
                </p>
              </div>
            </div>
            <div
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-woodwork.jpg"
                  alt="Handmade woodwork"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Woodwork
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp2">
                  Hand-carved furniture, décor, and kitchenware
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Meet Our Artisans
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Artisan Card 1 */}
            <Link
              href="/artisans/jane-doecraft"
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
              passHref
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-artisan1.jpg"
                  alt="Jane Doe - Ceramic Artist"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Jane Doe
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp1">
                  Ceramic Artist
                </p>
              </div>
            </Link>
            
            {/* Artisan Card 2 */}
            <Link
              href="/artisans/john-smithcraft"
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
              passHref
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-artisan2.jpg"
                  alt="John Smith - Woodworker"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  John Smith
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp1">
                  Woodworker
                </p>
              </div>
            </Link>
            
            {/* Artisan Card 3 */}
            <Link
              href="/artisans/maria-garciacraft"
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
              passHref
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-artisan3.jpg"
                  alt="Maria Garcia - Textile Artist"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Maria Garcia
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp1">
                  Textile Artist
                </p>
              </div>
            </Link>
            
            {/* Artisan Card 4 */}
            <Link
              href="/artisans/david-wilsoncraft"
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
              passHref
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder-artisan4.jpg"
                  alt="David Wilson - Jewelry Maker"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  David Wilson
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp1">
                  Jewelry Maker
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            How ArtisanMart Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <div>
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.302 1.091.712l1.506 2.258a3.75 3.75 0 105.248 0l1.506-2.258c.136-.41.581-.712 1.091-.712H18.75a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H6a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Discover</h3>
              <p className="text-sm text-gray-500">
                Browse unique handmade goods from talented artisans worldwide
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25l6 6-6 6V8.25zM12 3l.035.008h.007a1.97 1.97 0 011.38.056l4.875 6.188a1.5 1.5 0 002.158 0l4.875-6.188a1.5 1.5 0 00-.376-1.068l-3.75-4.76a3 3 0 00-5.251 0L7.265 6.468a1.5 1.5 0 00-.376 1.068z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Connect</h3>
              <p className="text-sm text-gray-500">
                Message artisans directly to learn about their craft and process
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Purchase</h3>
              <p className="text-sm text-gray-500">
                Secure checkout with protected payments that support artisans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
