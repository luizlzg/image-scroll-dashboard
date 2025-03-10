import React, { useContext } from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';
import { resultsData, topicsData } from '@/data/dashboardData';
import { DateFilterContext } from '@/pages/Dashboard';

const CallResults = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
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
  
  const filteredResultsData = filterDataByDateRange(resultsData);
  const filteredTopicsData = filterDataByDateRange(topicsData);
  
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Resultados das chamadas</h2>
      <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-2 gap-6'} mb-4 sm:mb-6`}>
        <PieChart 
          data={filteredResultsData} 
          title="Resultados das chamadas" 
          className="animate-delay-100"
        />
        <BarChart 
          data={filteredTopicsData} 
          title="Chamada por assunto" 
          color="#50E3C2" 
          className="animate-delay-200"
        />
      </div>
    </>
  );
};

export default CallResults;
