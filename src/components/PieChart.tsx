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
    <div className="w-full overflow-x-auto pb-1">
      <ul className={`flex ${isMobile ? 'flex-wrap justify-center' : 'flex-col'} gap-1 min-w-min`}>
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center min-w-0 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full flex-shrink-0 mr-1" style={{ backgroundColor: entry.color }}></span>
            <span className={`text-xs text-gray-600 truncate`} title={entry.value}>
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
    <div className={`dashboard-card opacity-0 animate-scale-in ${className} flex flex-col h-full`}>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <div className="flex flex-col flex-grow relative">
        {/* Set a fixed height for the chart that leaves room for legends */}
        <div className={`${isMobile ? 'h-[60%]' : 'h-[70%]'} w-full`}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={isMobile ? 35 : 50}
                outerRadius={isMobile ? 55 : 70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Separate container for legends to ensure they stay within the card */}
        <div className={`${isMobile ? 'h-[40%]' : 'h-[30%]'} w-full overflow-y-auto`}>
          <CustomLegend payload={data.map(item => ({ 
            color: item.color, 
            value: `${item.name} (${item.percentage})`,
            dataKey: "value" 
          }))} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
