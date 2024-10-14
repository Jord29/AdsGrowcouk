"use client"; // Add this at the very top of your component file


// components/ContactUs.jsx
import React, { useState } from 'react';

// app/components/ContactUs.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('Message sent successfully!');
    } else {
      setStatus('Failed to send message.');
    }
  } catch (error) {
    setStatus('Failed to send message.');
  }
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Replace with your API endpoint or service
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 sm:px-8 lg:px-10 bg-gray-900 text-white rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <p className="text-center text-gray-300 mb-12">
        Have any questions or inquiries? Please reach out to us using the form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg"
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold text-white rounded-lg"
        >
          Send Message
        </button>
      </form>
      <p className="mt-6 text-center">{status}</p>
    </div>
  );
};

export default ContactUs;
