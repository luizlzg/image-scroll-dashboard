import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useMediaQuery } from '@/hooks/use-mobile';

interface DataPoint {
  name: string;
  value: number;
}

interface BarChartProps {
  data: DataPoint[];
  title: string;
  color?: string;
  className?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
        <p className="text-sm text-gray-600">{`${label}`}</p>
        <p className="text-sm font-semibold text-blue-600">{`${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  if (!payload) return null;
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className="w-full overflow-x-auto">
      <ul className={`flex flex-wrap justify-center gap-2 min-w-min`}>
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center min-w-0 mx-1">
            <span className="w-3 h-3 rounded-full flex-shrink-0 mr-1" style={{ backgroundColor: entry.color }}></span>
            <span className="text-xs text-gray-600 truncate" title={entry.value}>
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BarChart: React.FC<BarChartProps> = ({ data, title, color = "#3B82F6", className }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Add display name property for better legend readability
  const enhancedData = data.map(item => ({
    ...item,
    displayName: item.name.length > 15 ? item.name.substring(0, 12) + '...' : item.name
  }));
  
  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className} flex flex-col`}>
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className="flex-grow">
        <div className={`${isMobile ? 'h-52' : 'h-64'} w-full`}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={enhancedData}
              margin={{
                top: 5,
                right: 10,
                left: isMobile ? -15 : 0,
                bottom: isMobile ? 40 : 20,
              }}
              barSize={isMobile ? 15 : 30}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis 
                dataKey={isMobile ? "displayName" : "name"} 
                tick={{ fontSize: isMobile ? 9 : 12, fill: '#6B7280' }}
                tickLine={false}
                axisLine={{ stroke: '#E5E7EB' }}
                height={60}
                angle={isMobile ? -45 : 0}
                textAnchor={isMobile ? "end" : "middle"}
                interval={0}
              />
              <YAxis 
                tick={{ fontSize: 10, fill: '#6B7280' }}
                tickLine={false}
                axisLine={false}
                width={25}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                content={<CustomLegend />}
                verticalAlign="bottom"
                wrapperStyle={{ 
                  position: 'relative',
                  width: '100%',
                  paddingTop: '10px'
                }}
              />
              <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
