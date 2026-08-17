import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ArtisansPage() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    // For now, we'll use mock data
    const mockArtisans = [
      {
        id: 1,
        name: 'Jane Doe',
        bio: 'Jane is a ceramic artist with over 15 years of experience creating functional and decorative pottery. Her work is inspired by nature and traditional Japanese techniques.',
        location: 'Portland, Oregon',
        specialty: 'Ceramics & Pottery',
        avatar: '/placeholder-artisan1.jpg',
        stats: {
          sales: 245,
          followers: '1.2k',
          rating: 4.9
        }
      },
      {
        id: 2,
        name: 'John Smith',
        bio: 'John is a fourth-generation woodworker who specializes in creating custom furniture using sustainably sourced hardwoods.',
        location: 'Asheville, North Carolina',
        specialty: 'Woodworking & Furniture',
        avatar: '/placeholder-artisan2.jpg',
        stats: {
          sales: 189,
          followers: 850,
          rating: 4.8
        }
      },
      {
        id: 3,
        name: 'Maria Garcia',
        bio: 'Maria creates vibrant textiles using traditional weaving techniques passed down through generations in her family.',
        location: 'Santa Fe, New Mexico',
        specialty: 'Textiles & Weaving',
        avatar: '/placeholder-artisan3.jpg',
        stats: {
          sales: 312,
          followers: '2.1k',
          rating: 4.9
        }
      },
      {
        id: 4,
        name: 'David Wilson',
        bio: 'David crafts unique jewelry pieces using recycled metals and ethically sourced gemstones.',
        location: 'Denver, Colorado',
        specialty: 'Jewelry & Metalwork',
        avatar: '/placeholder-artisan4.jpg',
        stats: {
          sales: 423,
          followers: '1.7k',
          rating: 4.9
        }
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setArtisans(mockArtisans);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-indigo-600">ArtisanMart</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
            Discover Master Artisans
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Explore the work of talented artisans from around the world, each with their unique story and craft.
          </p>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Artisans</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {artisans.map((artisan) => (
              <Link
                key={artisan.id}
                href={`/artisans/${artisan.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}craft`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={artisan.avatar}
                      alt={`${artisan.name}'s portrait`}
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {artisan.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp2">
                      {artisan.bio}
                    </p>
                    <div className="mt-4 flex space-x-3 text-sm text-indigo-600">
                      <div className="flex items-center">
                                        <span className="mr-1">
                      ⭐
                    </span>
                        <span>{artisan.stats.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">
                      👥
                    </span>
                        <span>{artisan.stats.followers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Join Our Artisan Community
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Are you an artisan looking to showcase your work to a global audience? Join our community of talented makers and connect with buyers who appreciate handcrafted goods.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-6">
            <Link
              href="/artisans/apply"
              className="flex-1 sm:flex-none px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Apply to Sell
            </Link>
            <Link
              href="/"
              className="flex-1 sm:flex-none px-8 py-3 bg-white border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Browse Artisans
            </Link>
          </div>
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
