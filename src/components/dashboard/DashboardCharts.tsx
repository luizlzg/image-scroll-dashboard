import React from 'react';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import { ProcessedData } from '@/data/dashboardData';

interface DashboardChartsProps {
  processedData: ProcessedData;
}

const DashboardCharts = ({ processedData }: DashboardChartsProps) => {
  // Verifica se processedData está definido e contém as propriedades necessárias
  if (!processedData) {
    return <div>Loading...</div>; // Ou qualquer outro indicador de carregamento
  }

  const { timeData, volumeByHour } = processedData;

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6">
      <LineChart 
        data={timeData}
        title="Tempo médio de atendimento - IA" 
        className="animate-delay-100"
      />
      <BarChart 
        data={volumeByHour}
        title="Volume de chamadas por hora" 
        className="animate-delay-200"
      />
    </div>
  );
};

export default DashboardCharts;