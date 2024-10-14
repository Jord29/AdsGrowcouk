// components/CaseStudies.jsx


import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    { title: 'Nova Tissue', description: 'Achieved an 11x Return on Ad Spend', imageUrl: 'https://websitegrow.co.uk/wp-content/uploads/2024/04/Screenshot-2024-07-31-at-19.18.01.png' },
    { title: 'Book Your Boiler', description: 'Doubled ROI for a Local Business', imageUrl: 'https://websitegrow.co.uk/wp-content/uploads/2024/04/Screenshot-2024-08-09-at-19.11.18.png' },
    { title: 'MAK Roofing Ltd', description: 'Increased Inquiries by 100%', imageUrl: '/images/439941655_727795805950597_5173042821696899852_n.jpg' },
  ];

  return (
    <div id="work" className="py-20 bg-gray-100 text-black border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Success Stories</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.title} className="flex flex-col items-center rounded-lg overflow-hidden bg-white relative pb-6">
              <div className="relative w-full">
                <img src={study.imageUrl} alt={study.title} className="h-48 w-full object-cover" />
                <div className="pt-3 absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-25 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 p-2">{study.title}</h3>
              <div className="bg-white p-2 border border-white-300 rounded-xl shadow-md transition-all duration-200 hover:shadow-gray-100">
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

