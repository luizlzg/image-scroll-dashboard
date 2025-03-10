
import React from 'react';
import PieChart from '@/components/PieChart';
import { callInterruptionData } from '@/data/dashboardData';

const EfficiencyMetrics = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Eficiência e processos</h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <PieChart 
          data={callInterruptionData} 
          title="Momentos de interrupção da chamada" 
          className="animate-delay-100"
        />
      </div>
    </>
  );
};

export default EfficiencyMetrics;
