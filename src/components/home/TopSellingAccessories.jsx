import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopSellingAccessories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const accessories = [
    {
      id: 'a1',
      title: 'Wireless Earbuds',
      price: 2999,
      originalPrice: 3999,
      rating: 4.5,
      reviewCount: 120,
      image: 'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
    {
      id: 'a2',
      title: 'Phone Case - Black',
      price: 799,
      originalPrice: 999,
      rating: 4.2,
      reviewCount: 85,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: false
    },
    {
      id: 'a3',
      title: 'Portable Charger 10000mAh',
      price: 1499,
      originalPrice: 1999,
      rating: 4.7,
      reviewCount: 200,
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
    {
      id: 'a4',
      title: 'Screen Protector',
      price: 499,
      originalPrice: 699,
      rating: 4.0,
      reviewCount: 60,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: false
    },
    {
      id: 'a5',
      title: 'Bluetooth Speaker',
      price: 2499,
      originalPrice: 2999,
      rating: 4.6,
      reviewCount: 150,
      image: 'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      onSale: true
    },
  ];

  const accessoriesToShow = window.innerWidth < 768 ? 2 : 5;
  const maxIndex = Math.max(0, accessories.length - accessoriesToShow);

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
          <h2 className="text-2xl font-bold">Top Selling Accessories</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
              aria-label="Previous accessories"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
              aria-label="Next accessories"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / accessoriesToShow)}%)`,
            }}
          >
            {accessories.map((accessory) => (
              <div 
                key={accessory.id}
                className="min-w-[50%] md:min-w-[20%] px-2"
              >
                <Link to={`/product/${accessory.id}`} className="block">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow relative">
                    {accessory.onSale && (
                      <div className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded absolute right-6 top-2">
                        On Sale
                      </div>
                    )}
                    <div className="aspect-square mb-4 flex items-center justify-center">
                      <img 
                        src={accessory.image} 
                        alt={accessory.title} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-1 truncate">{accessory.title}</h3>
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(accessory.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 ml-1">{accessory.rating}</span>
                      <span className="text-xs text-gray-400 ml-1">({accessory.reviewCount})</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-bold">₹{accessory.price.toLocaleString()}</span>
                      {accessory.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">
                          ₹{accessory.originalPrice.toLocaleString()}
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

export default TopSellingAccessories;
