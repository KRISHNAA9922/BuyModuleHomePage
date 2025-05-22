import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ title, imageSrc, link }) => {
  return (
    <Link to={link} className="group">
      <div className="bg-amber-50 rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
        <div className="w-28 h-28 mb-4 overflow-hidden">
          <img src={imageSrc} alt={title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-center font-medium">{title}</h3>
      </div>
    </Link>
  );
};

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Sell Phones",
      imageSrc: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/sell-phones"
    },
    {
      id: 2,
      title: "Sell Laptops",
      imageSrc: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/sell-laptops"
    },
    {
      id: 3,
      title: "Buy Phones",
      imageSrc: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/buy-phones"
    },
    {
      id: 4,
      title: "Buy Laptops",
      imageSrc: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/buy-laptops"
    },
    {
      id: 5,
      title: "Repair Phones",
      imageSrc: "https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/repair-phones"
    },
    {
      id: 6,
      title: "Repair Laptops",
      imageSrc: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/repair-laptops"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <ServiceItem 
              key={service.id}
              title={service.title}
              imageSrc={service.imageSrc}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
