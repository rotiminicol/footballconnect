import React from 'react';
import StatCard from '../components/StatCard';
import { stats } from '../data';

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Global Network and Impact</h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Football Connect has become the leading platform for clubs worldwide, 
            facilitating transfers across all levels of professional football.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={{...stat, value: stat.value}} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;