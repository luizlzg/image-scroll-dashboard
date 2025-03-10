
import React from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';
import StatsList from '@/components/StatsList';
import { transferReasonsData, transferMotivationData, skillTransferData } from '@/data/dashboardData';

const TransferAnalysis = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-3 gap-6'}`}>
      <PieChart 
        data={transferReasonsData} 
        title="Taxa de transferência para atendimento humano" 
        className="animate-delay-300"
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
