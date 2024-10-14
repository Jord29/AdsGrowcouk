"use client"; 

import React from 'react';

const Comparison = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            But, why would you want to work <span className="italic">with us?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our affordable, result-driven approach.
          </p>
        </div>

        {/* Comparison Box */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Other Agencies */}
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Other Agencies</h3>
            <ul className="text-left space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <span className="text-red-500">✗</span>
                <span>High cost with hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-red-500">✗</span>
                <span>No performance guarantees</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-red-500">✗</span>
                <span>Slow communication</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-red-500">✗</span>
                <span>Outdated growth strategies</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-red-500">✗</span>
                <span>Limited channel support</span>
              </li>
            </ul>
          </div>

          {/* Our Agency */}
          <div className="flex-1 p-8">
            <h3 className="text-2xl font-semibold mb-4">Why Work With Us?</h3>
            <ul className="text-left space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Low cost with no hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Guaranteed performance or money-back</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Fast, responsive communication</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Modern, data-driven strategies</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Multi-channel support for all your needs</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Free bonuses such as initial consultation & reports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
