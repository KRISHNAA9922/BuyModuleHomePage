import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-blue-600">About us</Link></li>
              <li><Link to="/press" className="text-sm text-gray-600 hover:text-blue-600">Press</Link></li>
              <li><Link to="/impact" className="text-sm text-gray-600 hover:text-blue-600">Our impact</Link></li>
              <li><Link to="/accessibility" className="text-sm text-gray-600 hover:text-blue-600">Accessibility statement</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-blue-600">We're hiring!</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact us</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact us</Link></li>
              <li><Link to="/help" className="text-sm text-gray-600 hover:text-blue-600">Help Center</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-600 hover:text-blue-600">Shipping</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-600 hover:text-blue-600">Returns and refunds</Link></li>
              <li><Link to="/payment" className="text-sm text-gray-600 hover:text-blue-600">Payment methods</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/warranty" className="text-sm text-gray-600 hover:text-blue-600">1-year warranty</Link></li>
              <li><Link to="/protection" className="text-sm text-gray-600 hover:text-blue-600">Protection plans</Link></li>
              <li><Link to="/trade-in" className="text-sm text-gray-600 hover:text-blue-600">Trade-in</Link></li>
              <li><Link to="/student" className="text-sm text-gray-600 hover:text-blue-600">Student offer</Link></li>
              <li><Link to="/sell" className="text-sm text-gray-600 hover:text-blue-600">Seller Register to sell</Link></li>
              <li><Link to="/portal" className="text-sm text-gray-600 hover:text-blue-600">Seller portal</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/tech-guides" className="text-sm text-gray-600 hover:text-blue-600">Tech Guides</Link></li>
              <li><Link to="/reviews" className="text-sm text-gray-600 hover:text-blue-600">Guides and reviews</Link></li>
              <li><Link to="/compare" className="text-sm text-gray-600 hover:text-blue-600">Compare devices</Link></li>
              <li><Link to="/gift" className="text-sm text-gray-600 hover:text-blue-600">Gift ideas</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Law and order</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600">Terms of service</Link></li>
              <li><Link to="/conditions" className="text-sm text-gray-600 hover:text-blue-600">Terms and conditions</Link></li>
              <li><Link to="/cookies" className="text-sm text-gray-600 hover:text-blue-600">Cookies</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo />
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-blue-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-blue-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-500 hover:text-blue-600" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© 2025 Quick Mobile</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
