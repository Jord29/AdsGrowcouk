"use client";

import React from 'react';
import Link from 'next/link'; // Import Next.js's Link component

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <p>&copy; 2024 AdsGrow. All rights reserved.</p>
          <p>
            {/* Link to Privacy Policy */}
            <Link href="/privacy-policy" className="hover:underline text-blue-400">
              Privacy Policy
            </Link>
            &nbsp;|&nbsp;
            {/* Link to Terms of Service */}
            <Link href="/terms-of-service" className="hover:underline text-blue-400">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
