import React from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';
import StatsList from '@/components/StatsList';
import { ProcessedData } from '@/data/dashboardData';

interface TransferAnalysisProps {
  processedData: ProcessedData;
}

const TransferAnalysis = ({ processedData }: TransferAnalysisProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Verifica se processedData está definido e contém as propriedades necessárias
  if (!processedData) {
    return <div>Loading...</div>; // Ou qualquer outro indicador de carregamento
  }

  const { transferReasonsByCategory, callsBySubject } = processedData;

  // Preparar transferMotivationData para BarChart
  const transferMotivationData = callsBySubject.map(subject => ({
    name: subject.name,
    value: subject.value,
    color: subject.color,
  }));

  // Preparar skillTransferData para StatsList
  const skillTransferData = transferReasonsByCategory.map(reason => ({
    name: reason.name,
    value: reason.value,
    percentage: reason.percentage,
    color: reason.color,
  }));

  return (
    <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-3 gap-6'}`}>
      <PieChart 
        data={transferReasonsByCategory} 
        title="Taxa de transferência para atendimento humano" 
        className="animate-delay-300"
        color="#6C5CE7"
      />
      <BarChart 
        data={transferMotivationData} 
        title="Motivo da transferência" 
        color="#6C5CE7" 
        className="animate-delay-400"
      />
      <StatsList 
        title="Skill de transferência" 
        items={skillTransferData} 
        className="animate-delay-500"
      />
    </div>
  );
};

export default TransferAnalysis;