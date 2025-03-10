
import React from 'react';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import { timeData, volumeData } from '@/data/dashboardData';

const DashboardCharts = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <LineChart 
        data={timeData}
        title="Tempo médio de atendimento - IA" 
        className="animate-delay-100"
      />
      <BarChart 
        data={volumeData}
        title="Volume de chamadas por hora" 
        className="animate-delay-200"
      />
    </div>
  );
};

export default DashboardCharts;
