import React from 'react';
import { CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Create your profile',
      description: 'Set up your club or agency profile with all relevant information including transfer requirements and player availability.',
    },
    {
      number: '02',
      title: 'Connect with clubs',
      description: 'Browse and connect with clubs and agencies worldwide based on your specific requirements and interests.',
    },
    {
      number: '03',
      title: 'Negotiate transfers',
      description: 'Use our secure platform to negotiate transfers directly, with built-in tools for contracts and agreements.',
    },
    {
      number: '04',
      title: 'Complete transactions',
      description: 'Finalize deals with confidence using our comprehensive transaction support and documentation.',
    },
  ];

  const benefits = [
    'No intermediary fees',
    'Direct club-to-club communication',
    'Secure and confidential',
    'Global reach',
    'Time-efficient process',
    'Data-driven decisions',
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How futbol Connect Works
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our platform streamlines the entire transfer process from initial discovery
              to final agreement, making transfers faster and more efficient.
            </p>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-slate-50 rounded-2xl p-8 md:p-10">
            <div className="relative h-64 md:h-80 mb-8 overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Football stadium" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Key Benefits
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;