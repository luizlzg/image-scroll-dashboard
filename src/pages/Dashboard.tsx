
import React from 'react';
import Header from '@/components/Header';
import DashboardKPIs from '@/components/dashboard/DashboardKPIs';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import CallResults from '@/components/dashboard/CallResults';
import TransferAnalysis from '@/components/dashboard/TransferAnalysis';
import EfficiencyMetrics from '@/components/dashboard/EfficiencyMetrics';
import { useMediaQuery } from '@/hooks/use-mobile';

const Dashboard = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className={`${isMobile ? 'px-2' : 'max-w-7xl mx-auto px-4 sm:px-6 md:px-8'}`}>
      <Header title="Dashboard" subtitle="Monitoramento em tempo real" />
      
      {/* Indicadores operacionais section */}
      <div className="mt-4 sm:mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Indicadores operacionais</h2>
        </div>
        
        <DashboardKPIs />
        <DashboardCharts />
        
        {/* Second section - Results */}
        <div className="mt-6 sm:mt-10 mb-4 sm:mb-6">
          <CallResults />
          <TransferAnalysis />
        </div>
        
        {/* Third section - Efficiency and Processes */}
        <div className="mt-6 sm:mt-10 mb-6 sm:mb-10">
          <EfficiencyMetrics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
