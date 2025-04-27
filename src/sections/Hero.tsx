import React from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-blue-900/40 px-4 py-2 rounded-full text-blue-300 mb-6">
            <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
            <span>Revolutionizing Football Transfers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Connect Directly with Clubs Worldwide
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            futbol Connect streamlines the transfer process by connecting clubs, 
            scouts, and agents directly, eliminating intermediaries and accelerating deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">800+</p>
              <p className="text-slate-400">Clubs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">35K+</p>
              <p className="text-slate-400">Players</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">£1.2B+</p>
              <p className="text-slate-400">Transfer Value</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">180+</p>
              <p className="text-slate-400">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;