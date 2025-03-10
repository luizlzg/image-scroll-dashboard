import React, { useContext } from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';
import StatsList from '@/components/StatsList';
import { transferReasonsData, transferMotivationData, skillTransferData } from '@/data/dashboardData';
import { DateFilterContext } from '@/pages/Dashboard';

const TransferAnalysis = () => {
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
  
  const filteredTransferReasonsData = filterDataByDateRange(transferReasonsData);
  const filteredTransferMotivationData = filterDataByDateRange(transferMotivationData);
  const filteredSkillTransferData = filterDataByDateRange(skillTransferData, 'date');
  
  return (
    <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-3 gap-6'}`}>
      <PieChart 
        data={filteredTransferReasonsData} 
        title="Taxa de transferência para atendimento humano" 
        className="animate-delay-300"
      />
      <BarChart 
        data={filteredTransferMotivationData} 
        title="Motivo da transferência" 
        color="#6C5CE7" 
        className="animate-delay-400"
      />
      <StatsList 
        title="Skill de transferência" 
        items={filteredSkillTransferData} 
        className="animate-delay-500"
      />
    </div>
  );
};

export default TransferAnalysis;
