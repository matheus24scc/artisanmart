import React from 'react';
import Link from 'next/link';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-indigo-600">ArtisanMart</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Home</Link>
            <Link href="/artisans" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Artisans</Link>
            <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Products</Link>
            <Link href="/cart" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Cart</Link>
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <button
                type="button"
                className="relative flex items-center rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                aria-label="Cart"
              >
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-red-600 text-xs font-medium text-white rounded-full">
                  0
                </span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.302 1.091.712l1.506 2.258a3.75 3.75 0 105.248 0l1.506-2.258c.136-.41.581-.712 1.091-.712H18.75a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H6a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75z" />
                </svg>
              </button>
            </div>
            
            <div className="ml-3 relative">
              <button
                type="button"
                className="relative flex rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                aria-label="User menu"
              >
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-blue-600 text-xs font-medium text-white rounded-full">
                  2
                </span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="-mr-2 flex items-center p-2 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6 text-gray-500 hover:text-gray-600" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-500 hover:text-gray-600" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
              <Link href="/artisans" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Artisans</Link>
              <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Products</Link>
              <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Cart</Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 px-4">
          {children}
        </div>
      </main>
      
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
