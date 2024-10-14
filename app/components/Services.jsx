"use client";

// components/Services.jsx

import React from 'react';
import { CheckCircle } from 'lucide-react'; // Using lucide-react for icons

const servicesData = [
  {
    title: 'Facebook Ads',
    description: 'Reach your target audience with powerful ad campaigns tailored to your business goals.',
    image: '/icons/facebook-ads.svg',
    gradient: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    features: [
      'Custom audience targeting',
      'Ad creatives and copy',
      'Performance monitoring',
    ],
  },
  {
    title: 'Google Ads',
    description: 'Drive traffic and conversions with high-impact Google Ads campaigns.',
    image: '/icons/google-ads.svg',
    gradient: 'bg-gradient-to-br from-red-500 to-orange-500',
    features: [
      'Keyword research and setup',
      'Ad creation and optimization',
      'Conversion tracking',
    ],
  },
  {
    title: 'Landing Pages',
    description: 'Create optimized landing pages to enhance user experience and boost conversion rates.',
    image: '/icons/landing-page.svg',
    gradient: 'bg-gradient-to-br from-green-500 to-teal-500',
    features: [
      'Responsive design',
      'CRO-focused layout',
      'Integrated forms and tracking',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Our Services</h2>
        <p className="mt-2 text-lg text-gray-600">We offer tailored services to grow your business online.</p>
      </div>

      {/* Service Boxes */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 max-w-7xl mx-auto">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className={`relative p-8 rounded-xl text-white shadow-md hover:shadow-lg transition-shadow duration-200 ${service.gradient}`}
          >
            {/* Service Title and Description */}
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm mb-4">{service.description}</p>

            {/* Checkmarked Features */}
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <CheckCircle className="w-5 h-5 text-white mr-2" /> {/* Checkmark icon */}
                  {feature}
                </li>
              ))}
            </ul>

            {/* Transparent Image (Bottom Right) */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute bottom-4 right-4 w-16 h-16 opacity-30"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

