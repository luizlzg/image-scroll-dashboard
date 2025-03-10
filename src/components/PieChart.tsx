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
    <div className="w-full overflow-x-auto pb-2">
      <ul className={`flex ${isMobile ? 'flex-wrap justify-center' : 'flex-col'} gap-2 min-w-min`}>
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center min-w-0">
            <span className="w-3 h-3 rounded-full flex-shrink-0 mr-2" style={{ backgroundColor: entry.color }}></span>
            <span className={`text-xs text-gray-600 ${isMobile ? 'max-w-[100px]' : 'max-w-full'} truncate`} title={entry.value}>
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
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
    <div className={`dashboard-card opacity-0 animate-scale-in ${className} flex flex-col`}>
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className={`flex flex-col flex-grow`}>
        <div className={`${isMobile ? 'h-40' : 'h-52'} w-full`}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart margin={{ bottom: 5 }}>
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
                wrapperStyle={{ 
                  width: '100%',
                  position: 'relative', 
                  marginTop: '10px',
                  bottom: 0
                }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
