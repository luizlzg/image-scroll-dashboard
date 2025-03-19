import React from 'react';
import PieChart from '@/components/PieChart';
import { ProcessedData } from '@/data/dashboardData';

interface EfficiencyMetricsProps {
  processedData: ProcessedData;
}

const EfficiencyMetrics = ({ processedData }: EfficiencyMetricsProps) => {
  // Verifica se processedData está definido e contém as propriedades necessárias
  if (!processedData) {
    return <div>Loading...</div>; // Ou qualquer outro indicador de carregamento
  }

  // Preparar callInterruptionData para PieChart
  const callInterruptionData = [
    { name: 'Resolvidas pela IA', value: processedData.resolvedByIA, color: '#6C5CE7' },
    { name: 'Transferidas para atendente humano', value: processedData.transferredCalls, color: '#33C3F0' },
    { name: 'Abandono', value: processedData.abandonedCalls, color: '#50E3C2' },
    { name: 'Falha técnica', value: processedData.failedCalls, color: '#FF6B6B' },
  ];

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