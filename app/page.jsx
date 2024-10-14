// app/page.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';

const navItems = [
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Case Studies',
    href: '#case-studies',
  },
  {
    name: 'About Us',
    href: '#about-us',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const LandingPage = () => {
  return (
    <div>
      <Navbar navItems={navItems} />
      <Hero id="hero" />
      <Services id="services" />
      <HowItWorks id="how-it-works" />
      <Pricing id="pricing" />
      <CaseStudies id="case-studies" />
      <Comparison id="comparison" />
      <CTA id="cta" />
      <Footer id="footer" />
    </div>
  );
};

export default LandingPage;
