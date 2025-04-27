import React from 'react';
import Button from '../components/Button';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Transfer Strategy?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join over 800 clubs worldwide that are already using futbol Connect
            to revolutionize their transfer approach.
          </p>
          
          <div className="bg-slate-800 p-8 md:p-10 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">For Clubs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full w-5 h-5 mr-3 flex items-center justify-center text-xs mt-1">✓</span>
                    <span>Access to global player availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full w-5 h-5 mr-3 flex items-center justify-center text-xs mt-1">✓</span>
                    <span>Direct negotiations with other clubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full w-5 h-5 mr-3 flex items-center justify-center text-xs mt-1">✓</span>
                    <span>Reduced intermediary costs</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">For Scouts & Agents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full w-5 h-5 mr-3 flex items-center justify-center text-xs mt-1">✓</span>
                    <span>Expanded network and connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full w-5 h-5 mr-3 flex items-center justify-center text-xs mt-1">✓</span>
                    <span>Advanced player analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full w-5 h-5 mr-3 flex items-center justify-center text-xs mt-1">✓</span>
                    <span>Streamlined communication tools</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <form className="max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Club or Organization"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <select className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none">
                  <option value="" disabled selected>Select your role</option>
                  <option value="club_director">Club Director</option>
                  <option value="scout">Scout</option>
                  <option value="agent">Agent</option>
                  <option value="coach">Coach</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <Button variant="primary" size="lg" className="w-full">
                Request Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;