
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from './Dashboard';
import { useMediaQuery } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className={`${isMobile ? 'pl-0 pt-16' : 'pl-64'} min-h-screen bg-gray-50 transition-all duration-200`}>
        <main className="w-full overflow-hidden">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
