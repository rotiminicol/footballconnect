import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import Stats from '../sections/Stats';
import CTA from '../sections/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;