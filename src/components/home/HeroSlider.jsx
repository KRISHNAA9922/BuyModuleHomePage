import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Sell Your Old Phone in Seconds!",
      subtitle: "Instant quotes, hassle-free pickup, and quick payment. Upgrade to the latest tech today!",
      cta: "Sell Now",
      ctaLink: "/sell",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-amber-50"
    },
    {
      id: 2,
      title: "Buy Certified Refurbished Devices",
      subtitle: "Premium quality at affordable prices. All devices tested and verified by experts.",
      cta: "Shop Now",
      ctaLink: "/buy",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "Expert Repair Services",
      subtitle: "Quick and reliable repairs for all your devices. Guaranteed satisfaction.",
      cta: "Book Repair",
      ctaLink: "/repair",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-green-50"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className={`min-w-full ${slide.bgColor} relative`}
            style={{ height: '500px' }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="w-full md:w-1/2 pr-4 z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg text-gray-700 mb-8">{slide.subtitle}</p>
                <Link 
                  to={slide.ctaLink}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-lg"
                >
                  {slide.cta}
                </Link>
              </div>
              <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 hover:bg-white transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 hover:bg-white transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
