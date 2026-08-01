import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate fetching products from API
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - in a real app, this would come from an API
      const mockProducts = [
        {
          id: 1,
          title: "Handcrafted Silver Necklace",
          price: 89.99,
          image: "/placeholder-jewelry1.jpg",
          artisan: "Maria Silva",
          rating: 4.8,
          reviewCount: 24,
          category: "Jewelry"
        },
        {
          id: 2,
          title: "Ceramic Coffee Mug Set",
          price: 45.00,
          image: "/placeholder-ceramics1.jpg",
          artisan: "James Carter",
          rating: 4.9,
          reviewCount: 18,
          category: "Ceramics"
        },
        {
          id: 3,
          title: "Wool Blend Scarf",
          price: 65.00,
          image: "/placeholder-textiles1.jpg",
          artisan: "Anna Peterson",
          rating: 4.7,
          reviewCount: 31,
          category: "Textiles"
        },
        {
          id: 4,
          title: "Wooden Cutting Board",
          price: 38.50,
          image: "/placeholder-wood1.jpg",
          artisan: "David Wong",
          rating: 4.6,
          reviewCount: 15,
          category: "Woodworking"
        },
        {
          id: 5,
          title: "Glass Vase Set",
          price: 52.00,
          image: "/placeholder-glass1.jpg",
          artisan: "Sophie Laurent",
          rating: 4.8,
          reviewCount: 22,
          category: "Glasswork"
        },
        {
          id: 6,
          title: "Leather Journal",
          price: 42.00,
          image: "/placeholder-leather1.jpg",
          artisan: "Marcus Johnson",
          rating: 4.9,
          reviewCount: 28,
          category: "Leatherwork"
        }
      ];
      
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryFilter, searchQuery]);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <p className="mt-4 text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Handcrafted Products
          </h1>
          <p className="mt-2 text-gray-600">
            Discover unique items made by skilled artisans around the world
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1 lg:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, artisans, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>
          
          <div className="flex-1 lg:w-1/4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 mt-1 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="all">All Categories</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Ceramics">Ceramics</option>
              <option value="Textiles">Textiles</option>
              <option value="Woodworking">Woodworking</option>
              <option value="Glasswork">Glasswork</option>
              <option value="Leatherwork">Leatherwork</option>
            </select>
          </div>
          
          <div className="flex-1 lg:w-1/4 text-right lg:text-left">
            <p className="text-sm text-gray-500">
              Showing {filteredProducts.length} products
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 text-xs font-medium rounded-full">
                      {product.rating}⭐
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-1">
                      by {product.artisan}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-indigo-600">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
