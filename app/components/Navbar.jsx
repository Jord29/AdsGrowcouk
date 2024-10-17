"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'How it Works', href: '/#howitworks' },
    { name: 'Pricing', href: '/#pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 px-4 py-4">
      <div className={`mx-auto max-w-7xl rounded-lg transition-all duration-300 
        ${scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'} 
        px-4 sm:px-6 lg:px-8 border border-white/20`}>
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <span className="text-2xl font-bold text-white bg-clip-text cursor-pointer">
                AdsGrow
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href}>
                  <button className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5">
                    {item.name}
                  </button>
                </Link>
              </div>
            ))}
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5">
                Contact Us
              </button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200">
                Start Project
              </button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-gray-300 hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 px-4">
          <div className="rounded-xl bg-black/50 backdrop-blur-md border border-white/20 p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href}>
                    <button className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {item.name}
                    </button>
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-base font-medium transition-all duration-200">
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