import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FeatureType } from '../types';

interface FeatureCardProps {
  feature: FeatureType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { title, description, icon } = feature;
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;