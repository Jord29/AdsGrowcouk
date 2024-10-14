"use client";

import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20">
      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-12 border-b border-gray-200 pb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">Our Pricing Plans</h2>
        <p className="text-lg text-gray-600 mt-4">
          Choose the plan that suits your business needs. Affordable and tailored for startups and established companies.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-6xl px-6 grid gap-10 grid-cols-1 md:grid-cols-3">
        {/* Facebook Ads Plan */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Facebook Ads</h3>
            <p className="text-4xl font-extrabold text-blue-600">£99 / mo</p>
            <p className="text-gray-600 mt-2 mb-6">Billed monthly</p>
            <p className="text-gray-600">Ideal for businesses looking to leverage Facebook for growth.</p>
          </div>
          {/* What's Included */}
          <ul className="mt-8 space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Comprehensive Ad Setup
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Audience Targeting
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Monthly Performance Report
            </li>
          </ul>
          {/* Button */}
          <button className="mt-10 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Google Ads Plan */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Google Ads</h3>
            <p className="text-4xl font-extrabold text-blue-600">£99 / mo</p>
            <p className="text-gray-600 mt-2 mb-6">Billed monthly</p>
            <p className="text-gray-600">Perfect for businesses seeking to increase search visibility.</p>
          </div>
          {/* What's Included */}
          <ul className="mt-8 space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Keyword Research
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Campaign Setup & Management
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Monthly Performance Report
            </li>
          </ul>
          {/* Button */}
          <button className="mt-10 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Combined Plan */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Google & Facebook Ads</h3>
            <p className="text-4xl font-extrabold text-blue-600">£150 / mo</p>
            <p className="text-gray-600 mt-2 mb-6">Billed monthly</p>
            <p className="text-gray-600">Ideal for businesses looking to maximize reach on both platforms.</p>
          </div>
          {/* What's Included */}
          <ul className="mt-8 space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Full Campaign Setup for Both Platforms
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Audience & Keyword Optimization
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">&#10003;</span> Monthly Performance Report
            </li>
          </ul>
          {/* Button */}
          <button className="mt-10 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
