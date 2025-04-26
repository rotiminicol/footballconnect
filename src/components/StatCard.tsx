import React from 'react';
import { StatType } from '../types';

interface StatCardProps {
  stat: StatType;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const { value, label } = stat;
  
  return (
    <div className="text-center p-6">
      <p className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{value}</p>
      <p className="text-slate-600 font-medium">{label}</p>
    </div>
  );
};

export default StatCard;