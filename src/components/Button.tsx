import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}) => {
  const baseStyles = "font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-slate-800 text-white hover:bg-slate-900 active:bg-black",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-1.5",
    md: "px-5 py-2.5",
    lg: "text-lg px-6 py-3"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;