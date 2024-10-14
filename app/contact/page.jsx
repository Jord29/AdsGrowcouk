// app/contact/page.jsx

import React from 'react';
import ContactUs from '../components/ContactUs'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Adjust the path based on your folder structure
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
      <div>
        {/* Include the Navbar at the top */}
        <Navbar />
  
        {/* Main content area with the contact form */}
        <main className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <ContactUs />
          </div>
        </main>
  
        {/* Include the Footer at the bottom */}
        <Footer />
      </div>
    );
  };

export default ContactPage;
