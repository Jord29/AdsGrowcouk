"use client";

// components/CTA.jsx

import React from 'react';
import Link from 'next/link'; // Import the Link component


const CTA = () => {
  return (
    <div className="py-16 bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">Ready to take your business to the next level?</h2>
        <p className="mt-4">Contact us today for a free consultation!</p>
        <div className="mt-6">
                 {/* Apply className directly to the Link component */}
                 <Link href="/contact" className="inline-block rounded-full bg-white text-blue-600 px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
