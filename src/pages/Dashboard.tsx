import React, { useState, useContext } from 'react';
import { DateRange } from "react-day-picker";
import { addDays, subDays } from "date-fns";
import Header from '@/components/Header';
import DateRangePicker from '@/components/DateRangePicker';
import DashboardKPIs from '@/components/dashboard/DashboardKPIs';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import CallResults from '@/components/dashboard/CallResults';
import TransferAnalysis from '@/components/dashboard/TransferAnalysis';
import EfficiencyMetrics from '@/components/dashboard/EfficiencyMetrics';
import { useMediaQuery } from '@/hooks/use-mobile';

// Create a context for the date range filter
export const DateFilterContext = React.createContext<{
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}>({
  dateRange: undefined,
  setDateRange: () => {},
});

const Dashboard = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Initialize with last 7 days as default
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });
  
  return (
    <DateFilterContext.Provider value={{ dateRange, setDateRange }}>
      <div className={`${isMobile ? 'px-2' : 'max-w-7xl mx-auto px-4 sm:px-6 md:px-8'}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Header title="Visão geral" subtitle="Monitoramento em tempo real" />
          <DateRangePicker 
            dateRange={dateRange}
            setDateRange={setDateRange}
            className="md:w-auto"
          />
        </div>
        
        {/* Indicadores operacionais section */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Indicadores operacionais</h2>
          </div>
          <DashboardKPIs />
          <DashboardCharts />
          
          {/* Second section - Results */}
          <div className="mt-6 sm:mt-10 mb-4 sm:mb-6">
            <CallResults />
            <TransferAnalysis />
          </div>
          
          {/* Third section - Efficiency and Processes */}
          <div className="mt-6 sm:mt-10 mb-6 sm:mb-10">
            <EfficiencyMetrics />
          </div>
        </div>
      </div>
    </DateFilterContext.Provider>
  );
};

export default Dashboard;
