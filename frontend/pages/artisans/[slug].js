import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ArtisanProfile() {
  const router = useRouter();
  const { slug } = router.query;
  const [artisan, setArtisan] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    // For now, we'll use mock data
    const mockArtisans = {
      'jane-doecraft': {
        id: 1,
        name: 'Jane Doe',
        bio: 'Jane is a ceramic artist with over 15 years of experience creating functional and decorative pottery. Her work is inspired by nature and traditional Japanese techniques.',
        location: 'Portland, Oregon',
        specialty: 'Ceramics & Pottery',
        avatar: '/placeholder-artisan1.jpg',
        stats: {
          sales: 245,
          followers: 1.2k,
          rating: 4.9
        }
      },
      'john-smithcraft': {
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
      'maria-garciacraft': {
        id: 3,
        name: 'Maria Garcia',
        bio: 'Maria creates vibrant textiles using traditional weaving techniques passed down through generations in her family.',
        location: 'Santa Fe, New Mexico',
        specialty: 'Textiles & Weaving',
        avatar: '/placeholder-artisan3.jpg',
        stats: {
          sales: 312,
          followers: 2.1k,
          rating: 4.9
        }
      },
      'david-wilsoncraft': {
        id: 4,
        name: 'David Wilson',
        bio: 'David crafts unique jewelry pieces using recycled metals and ethically sourced gemstones.',
        location: 'Denver, Colorado',
        specialty: 'Jewelry & Metalwork',
        avatar: '/placeholder-artisan4.jpg',
        stats: {
          sales: 423,
          followers: 1.7k,
          rating: 4.9
        }
      }
    };

    const mockProducts = [
      {
        id: 1,
        title: 'Hand-thrown Ceramic Mug',
        price: 45.00,
        image: '/placeholder-product1.jpg',
        rating: 4.8,
        reviews: 24
      },
      {
        id: 2,
        title: 'Ceramic Serving Bowl',
        price: 65.00,
        image: '/placeholder-product2.jpg',
        rating: 4.9,
        reviews: 18
      },
      {
        id: 3,
        title: 'Set of 4 Ceramic Coasters',
        price: 28.00,
        image: '/placeholder-product3.jpg',
        rating: 4.7,
        reviews: 32
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setArtisan(mockArtisans[slug] || null);
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-center text-gray-600">Artisan not found</p>
        <Link href="/artisans" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
          ← Back to Artisans
        </Link>
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
            <Link href="/artisans" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              ← All Artisans
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Image
                src={artisan.avatar}
                alt={`${artisan.name}'s portrait`}
                className="rounded-xl shadow-lg"
                width={400}
                height={400}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                {artisan.name}
              </h1>
              <div className="mt-4 flex space-x-4 text-sm text-gray-500">
                <span>•</span>
                <span>{artisan.location}</span>
                <span>•</span>
                <span>{artisan.specialty}</span>
              </div>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {artisan.bio}
              </p>
              <div className="mt-8 flex space-x-6">
                <div className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium">
                  <span className="text-indigo-600">{artisan.stats.sales}</span> Sales
                </div>
                <div className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium">
                  <span className="text-indigo-600">{artisan.stats.followers}</span> Followers
                </div>
                <div className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium">
                  <span className="text-indigo-600">{artisan.stats.rating}</span> 
                  <span className="inline-flex items-center ml-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Artist</h2>
          <p className="text-gray-600 leading-relaxed">
            {artisan.bio}
          </p>
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Artistic Statement</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
                passHref
              >
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp2">
                    Handcrafted with care by {artisan.name}
                  </p>
                  <div className="mt-4 flex justify-between items-start">
                    <span className="font-semibold text-gray-900">${product.price}</span>
                    <div className="flex space-x-1 text-yellow-400 text-sm">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
