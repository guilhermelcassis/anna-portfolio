import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold">
            Anna Gargalak
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>
            <a href="#testimonials" className="hover:text-gray-600">Testimonials</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 