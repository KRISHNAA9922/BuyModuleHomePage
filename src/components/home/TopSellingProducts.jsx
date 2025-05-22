import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopSellingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: '1',
      title: 'iPhone 16 - Unlocked',
      price: 39999,
      originalPrice: 45999,
      rating: 4.2,
      reviewCount: 142,
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
    {
      id: '2',
      title: 'iPhone 16 - Unlocked',
      price: 39999,
      originalPrice: 45999,
      rating: 4.7,
      reviewCount: 253,
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
    {
      id: '3',
      title: 'iPhone 16 - Unlocked',
      price: 39999,
      originalPrice: 45999,
      rating: 4.3,
      reviewCount: 189,
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
    {
      id: '4',
      title: 'iPhone 16 - Unlocked',
      price: 39999,
      originalPrice: 45999,
      rating: 4.1,
      reviewCount: 156,
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
    {
      id: '5',
      title: 'iPhone 16 - Unlocked',
      price: 39999,
      originalPrice: 45999,
      rating: 4.5,
      reviewCount: 227,
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
    {
      id: '6',
      title: 'iPhone 16 - Unlocked',
      price: 39999,
      originalPrice: 45999,
      rating: 4.8,
      reviewCount: 312,
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
  ];

  // Display products in a grid (mobile) or show 5 at a time (desktop)
  const productsToShow = window.innerWidth < 768 ? 2 : 5;
  const maxIndex = Math.max(0, products.length - productsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Selling Products</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
              aria-label="Previous products"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
              aria-label="Next products"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / productsToShow)}%)`,
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id}
                className="min-w-[50%] md:min-w-[20%] px-2"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    {product.onSale && (
                      <div className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded absolute right-6">
                        On Sale
                      </div>
                    )}
                    <div className="aspect-square mb-4 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-1 truncate">{product.title}</h3>
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-xs text-gray-400 ml-1">({product.reviewCount})</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-bold">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
