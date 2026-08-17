import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-sm text-gray-500">Order reference:</p>
          <p className="text-lg font-medium text-gray-900">
            {id ? `#${id}` : 'Loading...'}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Thank you for your purchase! This is a demo order page.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-indigo-600 hover:text-indigo-500"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
