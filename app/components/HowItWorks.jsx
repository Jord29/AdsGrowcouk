"use client";

import React from 'react';
import { 
  ChatBubbleLeftIcon, 
  ClipboardDocumentListIcon, 
  RocketLaunchIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  return (
    <section id="howitworks" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Background Line Element */}
      <div className="absolute inset-x-1/2 top-1/2 h-1 bg-blue-600/20 z-0 w-0.5 transform -translate-x-1/2 sm:w-1 sm:left-1/2 sm:-translate-x-1/2"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Process</h2>
          <p className="mt-4 text-xl text-gray-400">
            Our streamlined process to help you achieve success.
          </p>
        </div>

        {/* Steps Container */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-gray-800 relative z-10 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl">
            <ChatBubbleLeftIcon className="h-16 w-16 text-blue-500" />
            <div className="text-lg font-semibold text-white mt-4">Consultation</div>
            <p className="mt-2 text-gray-400 text-center">
              We analyze your business and marketing goals to create a tailored strategy.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-gray-800 relative z-10 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl">
            <ClipboardDocumentListIcon className="h-16 w-16 text-blue-500" />
            <div className="text-lg font-semibold text-white mt-4">Strategy</div>
            <p className="mt-2 text-gray-400 text-center">
              Our team develops a comprehensive plan to meet your objectives.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-gray-800 relative z-10 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl">
            <RocketLaunchIcon className="h-16 w-16 text-blue-500" />
            <div className="text-lg font-semibold text-white mt-4">Campaign</div>
            <p className="mt-2 text-gray-400 text-center">
              We execute the strategy and launch your campaigns for maximum impact.
            </p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-gray-800 relative z-10 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl">
            <ChartBarIcon className="h-16 w-16 text-blue-500" />
            <div className="text-lg font-semibold text-white mt-4">Analysis</div>
            <p className="mt-2 text-gray-400 text-center">
              We continuously monitor and optimize your campaigns for the best results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;