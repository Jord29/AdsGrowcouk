"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link'; // For Next.js navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' }, // Home link pointing to the homepage
    {
      name: 'Services',
      href: '/#services',
    },
    { name: 'How it Works', href: '/#howitworks' },
    {
      name: 'Pricing',
      href: '/#pricing',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-white relative z-50 px-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`mx-auto max-w-7xl rounded-full transition-all duration-300 
          ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-white/50 backdrop-blur-sm'} 
          px-4 sm:px-6 lg:px-8 border border-gray-200/50`}>
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              AdsGrow
            </span>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href}> {/* Use Link component for navigation */}
                  <button
                    className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/50"
                    onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={16} className="ml-1 transform group-hover:rotate-180 transition-transform duration-200" />}
                  </button>
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                Contact Us
              </button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200">
              Start Project
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-gray-700 hover:bg-white/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 px-4">
          <div className="rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href}> {/* Use Link component for navigation */}
                    <button
                      onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                      {item.submenu && <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />}
                    </button>
                  </Link>

                  {item.submenu && activeSubmenu === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact">
                  <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-full text-base font-medium border border-blue-600 hover:bg-blue-50 transition-all duration-200">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
