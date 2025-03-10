
import React from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-6 opacity-0 animate-fade-in">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className={`flex ${isMobile ? 'flex-wrap' : ''} items-center space-x-4`}>
        <div className="flex items-center">
          <span className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">
            Hoje
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
