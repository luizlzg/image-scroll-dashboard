import React, { useContext } from 'react';
import PieChart from '@/components/PieChart';
import { callInterruptionData } from '@/data/dashboardData';
import { DateFilterContext } from '@/pages/Dashboard';

const EfficiencyMetrics = () => {
  const { dateRange } = useContext(DateFilterContext);
  
  // Filter data based on date range
  const filterDataByDateRange = (data, dateKey = 'date') => {
    if (!dateRange?.from || !data) return data;
    
    return data.filter(item => {
      const itemDate = new Date(item[dateKey]);
      const isAfterStart = dateRange.from && itemDate >= dateRange.from;
      const isBeforeEnd = dateRange.to ? itemDate <= dateRange.to : true;
      return isAfterStart && isBeforeEnd;
    });
  };
  
  const filteredCallInterruptionData = filterDataByDateRange(callInterruptionData);
  
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Eficiência e processos</h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <PieChart 
          data={filteredCallInterruptionData} 
          title="Momentos de interrupção da chamada" 
          className="animate-delay-100"
        />
      </div>
    </>
  );
};

export default EfficiencyMetrics;
