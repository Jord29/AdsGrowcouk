"use client";

// components/Hero.jsx

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-18 pb-24 sm:pt-12 sm:pb-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-12">
          <span className="block">Get More Business</span>
          <span className="block text-blue-600">With Powerful Google and Facebook Ads</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          We help businesses grow online with professionally run Google and Facebook ads management. 
        </p>

        {/* Refined 5-Star Rating Section with Badges */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Rating Text and Stars */}
          <div className="flex items-center space-x-2 text-center">
            <span className="text-lg text-gray-900">Rated 5.0</span>
            <div className="flex items-center text-yellow-400">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <span className="text-gray-500 text-sm">from 150+ reviews</span>
          </div>

          {/* Badges Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 p-2 rounded-lg">
              <img src="icons/Clutch-Badge-Blue-270x270-1-150x150.png" alt="Clutch" className="h-8" />
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <img src="/icons/Verfifed-Agency-Hexagonal-v1.png" alt="DesignRush" className="h-8" />
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <img src="/icons/Facebook-Reviews-Badge-Copy.png" alt="Facebook" className="h-8" />
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <img src="/icons/30_20230315105512_7420361_large-150x150.png" alt="Google" className="h-8" />
            </div>
          </div>
        </div>

        {/* Hero Buttons Section */}
        <div className="mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-6 justify-center">
          <a
            href="/contact"
            className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 inline-block" size={20} />
          </a>
          <a
            href="/#work"
            className="rounded-full bg-white/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-white/80 transition-all duration-200 border border-blue-600"
          >
            View Our Work
          </a>
        </div>

        {/* Trusted By Section with Company Logos */}
        <div className="mt-12">
          <p className="font-medium text-gray-500">Trusted by hundreds of companies, including local businesses and ecommerce brands</p>
          <div className="mt-8 grid grid-cols-2 gap-10 md:grid-cols-4 justify-center justfy-items-center items-center mx-auto max-w-xl ">
            <img src="/icons/logo.png.webp" alt="Nova Tissue" className="h-12 w-full object-contain" />
            <img src="/images/BATHROOM-10-e1713813123334.png" alt="Company 2" className="h-12 w-full object-contain" />
            <img src="/images/cropped-440971998_1402314967320734_801390844172152310_n-e1714760864427.png" alt="Company 3" className="h-12 w-full object-contain" />
            <img src="/images/logo-final-01.png" alt="Company 4" className="h-12 w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



