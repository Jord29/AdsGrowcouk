"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';

const servicesData = [
  {
    title: 'Facebook Ads',
    description: 'Reach your target audience with powerful ad campaigns tailored to your business goals.',
    gradient: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    features: [
      'Custom audience targeting',
      'Ad creatives and copy',
      'Performance monitoring',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 opacity-30">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    title: 'Google Ads',
    description: 'Drive traffic and conversions with high-impact Google Ads campaigns.',
    gradient: 'bg-gradient-to-br from-red-500 to-orange-500',
    features: [
      'Keyword research and setup',
      'Ad creation and optimization',
      'Conversion tracking',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 opacity-30">
      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
    </svg>
    ),
  },
  {
    title: 'Landing Pages',
    description: 'Create optimized landing pages to enhance user experience and boost conversion rates.',
    gradient: 'bg-gradient-to-br from-green-500 to-teal-500',
    features: [
      'Responsive design',
      'CRO-focused layout',
      'Integrated forms and tracking',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 opacity-30">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5V7h7v10zm5-5h-3v-3h3v3z"/>
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How can we help <span className="font-['Playfair_Display'] italic">you</span>?</h2>
          <p className="text-xl text-gray-400">We offer tailored services to grow your business online.</p>
        </div>

        {/* Service Boxes */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className={`relative p-8 rounded-xl text-white shadow-md hover:shadow-lg transition-shadow duration-200 ${service.gradient} overflow-hidden`}
            >
              {/* Service Title and Description */}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.description}</p>

              {/* Checkmarked Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-white mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Service Icon */}
              <div className="absolute bottom-4 right-4">
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;