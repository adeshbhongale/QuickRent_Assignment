import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary-600">QuickRent</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600">How it Works</a>
            <a href="#devices" className="text-gray-600 hover:text-primary-600">Devices</a>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary-600">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-primary-600">How it Works</a>
            <a href="#devices" className="block px-3 py-2 text-gray-600 hover:text-primary-600">Devices</a>
            <button className="w-full text-left px-3 py-2 text-primary-600 font-medium">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}