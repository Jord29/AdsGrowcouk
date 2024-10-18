"use client";

import React from 'react';
import Image from 'next/image';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Nova Tissue',
      description: 'Achieved an 11x Return on Ad Spend',
      imageUrl: 'https://websitegrow.co.uk/wp-content/uploads/2024/04/Screenshot-2024-07-31-at-19.18.01.png',
      stats: [
        { label: 'Increase in CTR', value: '85%' },
        { label: 'Reduction in CPA', value: '37%' },
      ],
    },
    {
      title: 'Book Your Boiler',
      description: 'Doubled ROI for a Local Business',
      imageUrl: 'https://websitegrow.co.uk/wp-content/uploads/2024/04/Screenshot-2024-08-09-at-19.11.18.png',
      stats: [
        { label: 'Increase in CTR', value: '57%' },
        { label: 'Reduction in CPR', value: '69%' },
      ],
    },
    {
      title: 'MAK Roofing Ltd',
      description: 'Increased Inquiries by 100%',
      imageUrl: '/images/439941655_727795805950597_5173042821696899852_n.jpg',
      stats: [
        { label: 'Increase in CTR', value: '63%' },
        { label: 'Reduction in CPA', value: '41%' },
      ],
    },
  ];

  return (
    <section id="work" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Results speak for <span className="font-['Playfair_Display'] italic">themselves</span>.</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            We've worked across a number of industries and have achieved some incredible results with some incredible people and brands.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.title} className="flex flex-col rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:border-gray-500">
              <div className="relative h-64">
                <Image 
                  src={study.imageUrl} 
                  alt={study.title} 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{study.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-300 mb-4">{study.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {study.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;