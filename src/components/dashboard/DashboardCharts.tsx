import React, { useContext } from 'react';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import { timeData, volumeData } from '@/data/dashboardData';
import { DateFilterContext } from '@/pages/Dashboard';

const DashboardCharts = () => {
  const { dateRange } = useContext(DateFilterContext);
  
  // Filter data based on date range
  const filterDataByDateRange = (data, dateKey = 'time') => {
    if (!dateRange?.from || !data) return data;
    
    return data.filter(item => {
      const itemDate = new Date(item[dateKey]);
      const isAfterStart = dateRange.from && itemDate >= dateRange.from;
      const isBeforeEnd = dateRange.to ? itemDate <= dateRange.to : true;
      return isAfterStart && isBeforeEnd;
    });
  };

  const filteredTimeData = filterDataByDateRange(timeData);
  const filteredVolumeData = filterDataByDateRange(volumeData);

  return (
    <div className="space-y-4 sm:space-y-6">
      <LineChart 
        data={filteredTimeData}
        title="Tempo médio de atendimento - IA" 
        className="animate-delay-100"
      />
      <BarChart 
        data={filteredVolumeData}
        title="Volume de chamadas por hora" 
        className="animate-delay-200"
      />
    </div>
  );
};

export default DashboardCharts;
