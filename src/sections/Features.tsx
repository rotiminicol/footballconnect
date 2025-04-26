import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { features } from '../data';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Tools for Football Professionals
          </h2>
          <p className="text-lg text-slate-600">
            Our platform provides everything you need to streamline transfers,
            discover talent, and connect with global football clubs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;