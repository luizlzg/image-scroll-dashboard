/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useMediaQuery } from '@/hooks/use-mobile';

interface DataPoint {
  name: string;
  value: number;
  percentage: string;
  color: string;
}

interface PieChartProps {
  data: DataPoint[];
  title: string;
  className?: string;
}

const CustomLegend = ({ payload }: any) => {
  if (!payload) return null;
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <ul className={`flex ${isMobile ? 'flex-wrap' : 'flex-col'} gap-2 ${isMobile ? 'justify-center mt-4' : 'mt-0'}`}>
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center">
          <span className="w-3 h-3 rounded-full inline-block mr-2" style={{ backgroundColor: entry.color }}></span>
          <span className="text-xs text-gray-600 whitespace-nowrap" title={entry.value}>
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
        <p className="text-sm font-medium text-gray-800">{payload[0].name}</p>
        <p className="text-sm text-gray-600">{payload[0].value} ({payload[0].payload.percentage})</p>
      </div>
    );
  }
  return null;
};

const PieChart: React.FC<PieChartProps> = ({ data, title, className }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Verifica se data está definido
  if (!data) {
    return <div>Loading...</div>; // Ou qualquer outro indicador de carregamento
  }

  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <div className={`${isMobile ? 'h-48' : 'h-64'}`}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={isMobile ? 40 : 60}
              outerRadius={isMobile ? 65 : 85}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              content={<CustomLegend />} 
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;