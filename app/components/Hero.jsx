"use client";

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black pt-20 sm:pt-16 pb-16 sm:pb-16 overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-8 sm:mb-12">
          <div className="flex -space-x-2">
            <Image src="/icons/30_20230315105512_7420361_large-150x150.png" alt="User" width={50} height={40} className="rounded-full border-2 border-black"/>
            <Image src="/icons/Verfifed-Agency-Hexagonal-v1.png" alt="User" width={40} height={60} className="rounded-full border-2 border-black"/>
            <Image src="/icons/Clutch-Badge-Blue-270x270-1-150x150.png" alt="User" width={50} height={40} className="rounded-full border-2 border-black"/>
          </div>
          <div className="flex items-center text-yellow-300">
            <Star fill="currentColor" size={20}/>
            <Star fill="currentColor" size={20}/>
            <Star fill="currentColor" size={20}/>
            <Star fill="currentColor" size={20}/>
            <Star fill="currentColor" size={20}/>
          </div>
          <span className="text-blue-500 text-sm">200+ businesses scaled</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-8 sm:mt-12">
          <span className="block">
            Get <span className="font-['Playfair_Display'] italic font-normal text-5xl sm:text-6xl md:text-7xl">more</span> Business
          </span>
          <span className="block">
            with Facebook and Google ads.
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
          We help businesses grow online with professionally run Google and Facebook ads management.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-6 justify-center">
          <Link href="/contact" className="rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            Start Your Project
            <ArrowRight className="ml-2 inline-block" size={18} />
          </Link>
          <Link href="/#work" className="rounded-full bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-400 hover:bg-white/20 transition-all duration-200 border border-blue-400">
            View Our Work
          </Link>
        </div>

        {/* Trusted By Section */}
        <div className="mt-10 sm:mt-12">
          <p className="font-medium text-sm sm:text-base text-gray-400">Trusted by hundreds of companies, including local businesses and ecommerce brands</p>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4 justify-center justify-items-center items-center mx-auto max-w-4xl">
            <Image 
              src="/images/BATHROOM (200 x 50 px).svg" 
              alt="Book Your Boiler" 
              width={150}
              height={38}
              className="h-8 sm:h-12 w-full object-contain" 
            />
            <Image 
              src="/images/BATHROOM (200 x 50 px).png" 
              alt="Nova Tissue" 
              width={150}
              height={38}
              className="h-8 sm:h-12 w-full object-contain" 
            />
            <Image 
              src="/images/cropped-440971998_1402314967320734_801390844172152310_n-e1714760864427 (1).png" 
              alt="MAK Roofing" 
              width={150}
              height={38}
              className="h-8 sm:h-12 w-full object-contain" 
            />
            <Image 
              src="/images/logo-final-01 (1).png" 
              alt="Taxi Medical" 
              width={150}
              height={38}
              className="h-8 sm:h-12 w-full object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;