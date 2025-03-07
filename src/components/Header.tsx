
import React from 'react';
import { Bell, Search } from 'lucide-react';
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
        {!isMobile && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-56 pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar..."
            />
          </div>
        )}
        <button className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 relative transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>
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
