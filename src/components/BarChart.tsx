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

const CustomLegend = () => {
  return (
    <div className="custom-legend">
      {/* Custom legend content */}
    </div>
  );
};

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  title, 
  color = "#33C3F0",
  className 
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Truncate long names for better display on mobile
  const processedData = data.map(item => ({
    ...item,
    displayName: isMobile && item.name.length > 10 ? `${item.name.substring(0, 8)}...` : item.name
  }));
  
  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-6">{title}</h3>
      <div className={`${isMobile ? 'h-48' : 'h-64'}`}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={processedData}
            margin={{ 
              top: 5, 
              right: isMobile ? 5 : 30, 
              left: isMobile ? -15 : 20, 
              bottom: isMobile ? 15 : 5 
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey={isMobile ? "displayName" : "name"}
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: isMobile ? 8 : 12, 
                fill: '#9CA3AF',
                width: 70,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              height={isMobile ? 70 : 40}
              textAnchor={isMobile ? "end" : "middle"}
              angle={isMobile ? -45 : 0}
              minTickGap={5}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: isMobile ? 10 : 12, fill: '#9CA3AF' }}
              width={isMobile ? 25 : 40}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              content={<CustomLegend />} 
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ 
                position: 'relative', 
                marginTop: '10px', 
                paddingTop: '15px',
                width: '100%',
                overflowX: 'auto'
              }}
            />
            <Bar 
              dataKey="value" 
              fill={color}
              radius={[4, 4, 0, 0]}
              barSize={isMobile ? 15 : 30}
              animationDuration={1500}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
