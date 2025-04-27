import React from 'react';
import { Activity } from 'lucide-react';

interface LogoProps {
  colorClass?: string;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ colorClass = 'text-blue-600', withText = true }) => {
  return (
    <div className="flex items-center gap-2">
      <Activity className={`w-8 h-8 ${colorClass}`} />
      {withText && (
        <span className={`font-bold text-xl ${colorClass}`}>futbolconnect</span>
      )}
    </div>
  );
};

export default Logo;