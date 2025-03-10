
import React from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';
import { resultsData, topicsData } from '@/data/dashboardData';

const CallResults = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Resultados das chamadas</h2>
      <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-2 gap-6'} mb-4 sm:mb-6`}>
        <PieChart 
          data={resultsData} 
          title="Resultados das chamadas" 
          className="animate-delay-100"
        />
        <BarChart 
          data={topicsData} 
          title="Chamada por assunto" 
          color="#50E3C2" 
          className="animate-delay-200"
        />
      </div>
    </>
  );
};

export default CallResults;
