import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Football Professionals
          </h2>
          <p className="text-lg text-slate-600">
            Hear from clubs, scouts, and agents who have transformed their recruitment process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;