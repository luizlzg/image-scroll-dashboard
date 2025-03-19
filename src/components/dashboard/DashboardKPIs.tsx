import React from 'react';
import KPICard from '@/components/KPICard';
import MetricCard from '@/components/MetricCard';
import { Activity, PhoneCall, Clock, XCircle } from 'lucide-react';
import BarChart from '../BarChart';
import PieChart from '../PieChart'; // Certifique-se de importar PieChart

const DashboardKPIs = ({ processedData }) => {
  // Verifica se processedData está definido e contém todas as propriedades necessárias
  if (!processedData) {
    return <div>Loading...</div>; // Ou qualquer outro indicador de carregamento
  }

  const {
    resolvedByIA,
    totalCalls,
    totalHandlingTimeAI,
    percentageResolvedByIA,
    percentageTransferred,
    percentageAbandoned,
    percentageFailed,
    volumeByHour,
    resultsByType,
    transferReasonsByCategory,
    callsBySubject,
  } = processedData;

  return (
    <>
      {/* Main KPI Card */}
      <KPICard
        title="Chamadas resolvidas pela IA"
        value={resolvedByIA}
        percentage={`${percentageResolvedByIA}%`}
        meta={`Meta: 70% | Crescimento: +2.3% vs mês anterior`}
        color="green"
        icon={<Activity className="h-5 w-5" />}
        className="mb-4 sm:mb-6"
      />

      {/* Small metrics row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 sm:mb-8">
        <MetricCard
          title="Total de chamadas"
          value={totalCalls}
          icon={<PhoneCall className="h-5 w-5" />}
          color="blue"
          className="animate-delay-100"
        />
        <MetricCard
          title="TMA da IA"
          value={`${(totalHandlingTimeAI / 60).toFixed(2)} min`}
          icon={<Clock className="h-5 w-5" />}
          color="yellow"
          className="animate-delay-200"
        />
        <MetricCard
          title="Taxa de abandono"
          value={`${percentageAbandoned}%`}
          icon={<XCircle className="h-5 w-5" />}
          color="red"
          className="animate-delay-300"
        />
      </div>
    </>
  );
};

export default DashboardKPIs;