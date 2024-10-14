"use client";

// components/HowItWorks.jsx

import React from 'react';
import { 
  ChatBubbleLeftIcon, 
  ClipboardDocumentListIcon, 
  RocketLaunchIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'; // Updated import for v2

const HowItWorks = () => {
  return (
    <div id="howitworks" className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-24 sm:py-32">
      {/* Background Line Element */}
      <div className="absolute inset-x-1/2 top-1/2 h-1 bg-gray-600 z-0 w-0.5 transform -translate-x-1/2 sm:w-1 sm:left-1/2 sm:-translate-x-1/2"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-lg text-gray-300">
            Our streamlined process to help you achieve success.
          </p>
        </div>

        {/* Steps Container */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-gray-700 shadow-lg rounded-lg p-8 border border-gray-600 relative z-10">
            <ChatBubbleLeftIcon className="h-16 w-16 text-white" />
            <div className="text-lg font-semibold text-white mt-4">Step 1: Consultation</div>
            <p className="mt-2 text-gray-300 text-center">
              We will analyze your business and marketing goals to create a tailored strategy.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center bg-gray-700 shadow-lg rounded-lg p-8 border border-gray-600 relative z-10">
            <ClipboardDocumentListIcon className="h-16 w-16 text-white" />
            <div className="text-lg font-semibold text-white mt-4">Step 2: Strategy</div>
            <p className="mt-2 text-gray-300 text-center">
              Our team will develop a comprehensive plan to meet your objectives.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center bg-gray-700 shadow-lg rounded-lg p-8 border border-gray-600 relative z-10">
            <RocketLaunchIcon className="h-16 w-16 text-white" />
            <div className="text-lg font-semibold text-white mt-4">Step 3: Campaign</div>
            <p className="mt-2 text-gray-300 text-center">
              We will execute the strategy and launch your campaigns for maximum impact.
            </p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center bg-gray-700 shadow-lg rounded-lg p-8 border border-gray-600 relative z-10">
            <ChartBarIcon className="h-16 w-16 text-white" />
            <div className="text-lg font-semibold text-white mt-4">Step 4: Analysis</div>
            <p className="mt-2 text-gray-300 text-center">
              We continuously monitor and optimize your campaigns for the best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
