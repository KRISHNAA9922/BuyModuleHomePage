import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('Mumbai');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/sell" className="text-sm font-medium hover:text-blue-600">Sell</Link>
            <Link to="/buy" className="text-sm font-medium hover:text-blue-600">Buy</Link>
            <Link to="/repair" className="text-sm font-medium hover:text-blue-600">Repair</Link>
            <Link to="/partner" className="text-sm font-medium hover:text-blue-600">Become Partner</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1 text-sm">
              <span>{location}</span>
            </div>
            <Link to="/account" className="p-2">
              <User size={20} />
            </Link>
            <Link to="/cart" className="p-2">
              <ShoppingBag size={20} />
            </Link>
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-between mt-2 border-t border-gray-100 pt-2">
          <nav className="flex items-center space-x-6 text-sm">
            <Link to="/deals" className="py-1 hover:text-blue-600">Good deals</Link>
            <Link to="/sell-phone" className="py-1 hover:text-blue-600">Sell Phone</Link>
            <Link to="/sell-gadget" className="py-1 hover:text-blue-600">Sell Gadget</Link>
            <Link to="/buy-phone" className="py-1 hover:text-blue-600">Buy Phone</Link>
            <Link to="/repair-device" className="py-1 hover:text-blue-600">Repair Device</Link>
            <Link to="/accessories" className="py-1 hover:text-blue-600">Accessories</Link>
            <Link to="/store" className="py-1 hover:text-blue-600">Our store</Link>
            <Link to="/more" className="py-1 hover:text-blue-600">More</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-2">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <nav className="flex flex-col space-y-3 pb-3">
                <Link to="/sell" className="py-1 hover:text-blue-600">Sell</Link>
                <Link to="/buy" className="py-1 hover:text-blue-600">Buy</Link>
                <Link to="/repair" className="py-1 hover:text-blue-600">Repair</Link>
                <Link to="/partner" className="py-1 hover:text-blue-600">Become Partner</Link>
                <div className="border-t border-gray-100 pt-2">
                  <Link to="/deals" className="py-1 block hover:text-blue-600">Good deals</Link>
                  <Link to="/sell-phone" className="py-1 block hover:text-blue-600">Sell Phone</Link>
                  <Link to="/sell-gadget" className="py-1 block hover:text-blue-600">Sell Gadget</Link>
                  <Link to="/buy-phone" className="py-1 block hover:text-blue-600">Buy Phone</Link>
                  <Link to="/repair-device" className="py-1 block hover:text-blue-600">Repair Device</Link>
                  <Link to="/accessories" className="py-1 block hover:text-blue-600">Accessories</Link>
                  <Link to="/store" className="py-1 block hover:text-blue-600">Our store</Link>
                  <Link to="/more" className="py-1 block hover:text-blue-600">More</Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
