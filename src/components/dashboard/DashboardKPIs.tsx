import React, { useContext } from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import StatsCard from '@/components/StatsCard';
import { kpiData } from '@/data/dashboardData';
import { DateFilterContext } from '@/pages/Dashboard';

const DashboardKPIs = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { dateRange } = useContext(DateFilterContext);
  
  // Filter data based on date range
  const filterDataByDateRange = (data) => {
    if (!dateRange?.from || !data) return data;
    
    // Assuming kpiData has a date field or we're filtering on the metrics dates
    const filteredData = { ...data };
    
    // Apply filtering logic to each metric if they have date properties
    // If your KPIs don't have date properties and are calculated based on
    // other filtered data, you may need different logic here
    
    return filteredData;
  };
  
  const filteredKpiData = filterDataByDateRange(kpiData);
  
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ${isMobile ? 'mb-4' : 'mb-6'}`}>
      <StatsCard
        title="Total de chamadas"
        value={filteredKpiData.totalCalls}
        change={filteredKpiData.totalCallsChange}
        type={filteredKpiData.totalCallsChangeType}
        icon="phone"
        className="animate-delay-100"
      />
      <StatsCard
        title="Chamadas atendidas"
        value={filteredKpiData.answeredCalls}
        change={filteredKpiData.answeredCallsChange}
        type={filteredKpiData.answeredCallsChangeType}
        icon="check-circle"
        className="animate-delay-200"
      />
      <StatsCard
        title="Taxa de abandono"
        value={filteredKpiData.abandonRate}
        change={filteredKpiData.abandonRateChange}
        type={filteredKpiData.abandonRateChangeType}
        icon="alert-triangle"
        className="animate-delay-300"
      />
      <StatsCard
        title="Tempo médio"
        value={filteredKpiData.averageTime}
        change={filteredKpiData.averageTimeChange}
        type={filteredKpiData.averageTimeChangeType}
        icon="clock"
        className="animate-delay-400"
      />
    </div>
  );
};

export default DashboardKPIs;
