
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
    <ul className={`flex ${isMobile ? 'flex-wrap justify-center gap-x-4' : 'flex-col'} space-y-2 ${isMobile ? 'mt-4' : 'mt-0'}`}>
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center mt-1">
          <span className="w-3 h-3 rounded-full inline-block mr-2" style={{ backgroundColor: entry.color }}></span>
          <span className="text-xs text-gray-600 truncate max-w-[140px]" title={entry.value}>
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
  
  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className={`flex flex-col h-auto min-h-[280px]`}>
        <div className={`${isMobile ? 'h-48' : 'h-64'} w-full`}>
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
                wrapperStyle={{ position: 'relative', marginTop: '10px', paddingTop: '15px' }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
