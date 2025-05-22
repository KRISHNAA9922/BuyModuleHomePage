import React from 'react';
import { Shield, DollarSign, Clock, CheckCircle } from 'lucide-react';

const SellOldDevice = () => {
  const benefits = [
    {
      id: 1,
      icon: <Shield className="w-6 h-6" />,
      text: "Best price guarantee"
    },
    {
      id: 2,
      icon: <DollarSign className="w-6 h-6" />,
      text: "Instant payment"
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6" />,
      text: "Quick pickup"
    },
    {
      id: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Safe and secure"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Sell your old devices for instant cash</h2>
          <p className="text-xl text-gray-600">Whether pristine or broken, secure the best deal from over 300+ certified buyers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellOldDevice;
