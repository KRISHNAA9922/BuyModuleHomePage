import React from 'react';
import { Smartphone } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Smartphone className="text-blue-600 mr-1" size={24} />
      <div>
        <span className="font-bold text-blue-600 text-lg">Quick</span>
        <span className="text-sm font-medium text-gray-600 block leading-none">Mobile</span>
      </div>
    </div>
  );
};

export default Logo;
