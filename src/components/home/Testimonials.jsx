import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 't1',
      name: 'John Doe',
      title: 'CEO, Company A',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'This is the best service I have ever used. Highly recommend to everyone!',
    },
    {
      id: 't2',
      name: 'Jane Smith',
      title: 'Marketing Manager, Company B',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'Amazing products and excellent customer support. Five stars!',
    },
    {
      id: 't3',
      name: 'Michael Johnson',
      title: 'Developer, Company C',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      quote: 'A seamless experience from start to finish. Will buy again.',
    },
  ];

  const maxIndex = testimonials.length - 1;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleMouseEnter = () => {
    nextTestimonial();
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2>
        <div 
          className="max-w-3xl mx-auto relative bg-white p-6 rounded-lg shadow-md"
          onMouseEnter={handleMouseEnter}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex-1 text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-2">"{testimonials[currentIndex].quote}"</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
            </div>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
