import React from 'react';
import Header from '@/components/Header';
import KPICard from '@/components/KPICard';
import MetricCard from '@/components/MetricCard';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';
import StatsList from '@/components/StatsList';
import { Activity, Clock, PhoneCall, XCircle } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-mobile';

const Dashboard = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Time line chart data
  const timeData = [
    { time: '00:00', value: 20 },
    { time: '03:00', value: 40 },
    { time: '06:00', value: 30 },
    { time: '09:00', value: 45 },
    { time: '12:00', value: 80 },
    { time: '15:00', value: 100 },
    { time: '18:00', value: 65 },
    { time: '21:00', value: 80 },
  ];

  // Volume bar chart data
  const volumeData = [
    { name: '00:00', value: 80 },
    { name: '02:00', value: 90 },
    { name: '04:00', value: 85 },
    { name: '06:00', value: 200 },
    { name: '08:00', value: 160 },
    { name: '10:00', value: 210 },
    { name: '12:00', value: 180 },
    { name: '14:00', value: 190 },
    { name: '16:00', value: 170 },
    { name: '18:00', value: 220 },
    { name: '20:00', value: 150 },
    { name: '22:00', value: 130 },
  ];

  // Results pie chart data
  const resultsData = [
    { name: 'Resolvidas pela IA', value: 68, percentage: '68%', color: '#6C5CE7' },
    { name: 'Transferidas para atendente humano', value: 20, percentage: '20%', color: '#33C3F0' },
    { name: 'Abandono', value: 8, percentage: '8%', color: '#50E3C2' },
    { name: 'Falha técnica', value: 4, percentage: '4%', color: '#FF6B6B' },
  ];

  // Topics bar chart data
  const topicsData = [
    { name: 'Agendamentos', value: 35 },
    { name: 'Guias', value: 30 },
    { name: 'Boletos', value: 22 },
    { name: 'Buscar redes', value: 18 },
    { name: 'Carteirinha', value: 15 },
  ];

  // Transfer reasons pie chart data
  const transferReasonsData = [
    { name: 'CPF não encontrado', value: 52, percentage: '52.1%', color: '#6C5CE7' },
    { name: 'Plano Dental', value: 23, percentage: '22.8%', color: '#50E3C2' },
    { name: 'Demanda não identificada', value: 14, percentage: '13.9%', color: '#33C3F0' },
    { name: 'E-mail não encontrado', value: 11, percentage: '11.2%', color: '#FFD166' },
  ];
  
  // Transfer motivation bar chart data
  const transferMotivationData = [
    { name: 'Agendamentos', value: 35 },
    { name: 'Guias', value: 30 },
    { name: 'Boletos', value: 22 },
    { name: 'Buscar redes', value: 18 },
    { name: 'Carteirinha', value: 12 },
  ];

  // Skill transfer list data
  const skillTransferData = [
    { id: '1400', name: 'Agendamento', percentage: '5%', value: '5%' },
    { id: '1404', name: 'Guia', percentage: '1%', value: '1%' },
    { id: '1402', name: 'Boletos', percentage: '1%', value: '1%' },
    { id: '1401', name: 'Buscar redes', percentage: '1%', value: '1%' },
    { id: '1400', name: 'Carteirinha', percentage: '0%', value: '0%' },
  ];

  // Call interruption data
  const callInterruptionData = [
    { name: 'Identificação do CPF', value: 52, percentage: '52.1%', color: '#6C5CE7' },
    { name: 'Selecionar plano', value: 23, percentage: '22.8%', color: '#50E3C2' },
    { name: 'Pergunta aberta', value: 14, percentage: '13.9%', color: '#33C3F0' },
    { name: 'Transferência ao atendente', value: 11, percentage: '11.2%', color: '#FFD166' },
    { name: 'Outros', value: 11, percentage: '11.2%', color: '#FF6B6B' },
  ];

  return (
    <div className={`${isMobile ? 'px-4' : 'max-w-7xl mx-auto px-4 sm:px-6 md:px-8'}`}>
      <Header title="Dashboard" subtitle="Monitoramento em tempo real" />
      
      {/* Indicadores operacionais section */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Indicadores operacionais</h2>
        </div>
        
        {/* Main KPI Card */}
        <KPICard 
          title="Chamadas resolvidas pela IA"
          value="1.754"
          percentage="68%"
          meta="Meta: 70% | Crescimento: +2.3% vs mês anterior"
          color="green"
          icon={<Activity className="h-5 w-5" />}
          className="mb-6"
        />
        
        {/* Small metrics row */}
        <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-6 mb-8`}>
          <MetricCard 
            title="Total de chamadas" 
            value="2.580" 
            icon={<PhoneCall className="h-5 w-5" />} 
            color="blue"
            className="animate-delay-100"
          />
          <MetricCard 
            title="TMA da IA" 
            value="2:22 min" 
            icon={<Clock className="h-5 w-5" />} 
            color="yellow"
            className="animate-delay-200"
          />
          <MetricCard 
            title="Taxa de abandono" 
            value="8%" 
            icon={<XCircle className="h-5 w-5" />} 
            color="red"
            className="animate-delay-300"
          />
        </div>
        
        {/* Charts */}
        <div className="space-y-6">
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
        
        {/* Second section - Results */}
        <div className="mt-10 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resultados das chamadas</h2>
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-6 mb-6`}>
            <PieChart 
              data={resultsData} 
              title="Resultados das chamadas" 
              className="animate-delay-100"
            />
            <BarChart 
              data={topicsData} 
              title="Chamada por assunto" 
              color="#50E3C2" 
              className="animate-delay-200"
            />
          </div>
          
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-6`}>
            <PieChart 
              data={transferReasonsData} 
              title="Taxa de transferência para atendimento humano" 
              className={`${isMobile ? 'col-span-1' : 'col-span-1 md:col-span-1'} animate-delay-300`}
            />
            <BarChart 
              data={transferMotivationData} 
              title="Motivo da transferência" 
              color="#6C5CE7" 
              className={`${isMobile ? 'col-span-1' : 'col-span-1 md:col-span-1'} animate-delay-400`}
            />
            <StatsList 
              title="Skill de transferência" 
              items={skillTransferData} 
              className={`${isMobile ? 'col-span-1' : 'col-span-1 md:col-span-1'} animate-delay-500`}
            />
          </div>
        </div>
        
        {/* Third section - Efficiency and Processes */}
        <div className="mt-10 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Eficiência e processos</h2>
          <div className="grid grid-cols-1 gap-6">
            <PieChart 
              data={callInterruptionData} 
              title="Momentos de interrupção da chamada" 
              className="animate-delay-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
