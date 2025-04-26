import React from 'react';
import { TestimonialType } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, role, company, content, image } = testimonial;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full">
      <div className="flex-grow">
        <Quote className="w-8 h-8 text-blue-400 mb-4" />
        <p className="text-slate-700 mb-6 italic">{content}</p>
      </div>
      <div className="flex items-center mt-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-slate-800">{name}</h4>
          <p className="text-sm text-slate-600">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;