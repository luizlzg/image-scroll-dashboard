// No arquivo LineChart.tsx
import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useMediaQuery } from '@/hooks/use-mobile';

interface DataPoint {
  name: string;
  value: number;
  time: string; // Adicionando a propriedade time
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
  className?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
        <p className="text-sm text-gray-600">{`${label}`}</p>
        <p className="text-sm font-semibold text-blue-600">{`${payload[0].value.toFixed(2)} min`}</p>
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

const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  title, 
  className 
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Verifica se data está definido
  if (!data) {
    return <div>Loading...</div>; // Ou qualquer outro indicador de carregamento
  }

  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-6">{title}</h3>
      <div className={`${isMobile ? 'h-48' : 'h-64'}`}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{ 
              top: 5, 
              right: isMobile ? 5 : 30, 
              left: isMobile ? -15 : 20, 
              bottom: isMobile ? 15 : 5 
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f5" />
            <XAxis 
              dataKey="name"
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
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#33C3F0"
              dot={false}
              strokeWidth={2}
              animationDuration={1500}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;