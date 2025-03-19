import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import DashboardKPIs from '@/components/dashboard/DashboardKPIs';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import CallResults from '@/components/dashboard/CallResults';
import TransferAnalysis from '@/components/dashboard/TransferAnalysis';
import EfficiencyMetrics from '@/components/dashboard/EfficiencyMetrics';
import { useMediaQuery } from '@/hooks/use-mobile';
import { fetchData, ProcessedData } from '@/data/dashboardData';

const Dashboard = () => {
  const [processedData, setProcessedData] = useState<ProcessedData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        if (result.processedData) {
          setProcessedData(result.processedData);
        } else {
          setError("Dados inválidos recebidos da API");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        setError("Erro ao buscar os dados");
      } finally {
        setIsLoadingData(false);
      }
    };

    getData();
  }, []);

  // Use useEffect para monitorar a atualização do estado processedData
  useEffect(() => {
    console.log("Processed Data:", JSON.stringify(processedData, null, 2));
  }, [processedData]);

  if (isLoadingData) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else if (!processedData) {
    return <div>Dados não disponíveis</div>;
  } else {
    return (
      <div className={`${isMobile ? 'px-2' : 'max-w-7xl mx-auto px-4 sm:px-6 md:px-8'}`}>
        <Header title="Visão geral" subtitle="Monitoramento em tempo real" />

        {/* Indicadores operacionais section */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Indicadores operacionais</h2>
          </div>

          {/* Passando processedData para DashboardKPIs */}
          <DashboardKPIs processedData={processedData} />

          <DashboardCharts processedData={processedData} />

          {/* Second section - Results */}
          <div className="mt-6 sm:mt-10 mb-4 sm:mb-6">
            <CallResults processedData={processedData} />
            <TransferAnalysis processedData={processedData} />
          </div>

          {/* Third section - Efficiency and Processes */}
          <div className="mt-6 sm:mt-10 mb-6 sm:mb-10">
            <EfficiencyMetrics processedData={processedData} />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;