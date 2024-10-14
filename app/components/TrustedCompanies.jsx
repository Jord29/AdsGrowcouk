"use client";

// components/TrustedCompanies.jsx

import React from 'react';

const TrustedCompanies = () => {
  const trustedCompanies = [
    { name: 'Microsoft', class: 'text-blue-600' },
    { name: 'Adobe', class: 'text-red-600' },
    { name: 'Shopify', class: 'text-green-600' },
    { name: 'Slack', class: 'text-purple-600' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base font-medium text-gray-500">
          Trusted by industry-leading companies
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustedCompanies.map((company) => (
            <div key={company.name} className="col-span-1 flex justify-center md:col-span-1">
              <span className={`text-2xl font-bold ${company.class}`}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
