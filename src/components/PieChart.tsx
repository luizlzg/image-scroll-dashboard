
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

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomLegend = ({ payload }: any) => {
  if (!payload) return null;
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <ul className={`flex flex-col space-y-2 ${isMobile ? 'mt-4' : 'mt-0'}`}>
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center">
          <span className="w-3 h-3 rounded-full inline-block mr-2" style={{ backgroundColor: entry.color }}></span>
          <span className="text-xs text-gray-600 truncate max-w-[120px]" title={`${entry.value} (${entry.payload.percentage})`}>
            {entry.value} ({entry.payload.percentage})
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
      <div className={`${isMobile ? 'flex flex-col' : 'flex items-center justify-center'} h-64`}>
        <div className={`${isMobile ? 'h-48 w-full' : 'h-64 w-3/4'}`}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={isMobile ? 40 : 60}
                outerRadius={isMobile ? 70 : 90}
                paddingAngle={1}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                content={<CustomLegend />} 
                layout={isMobile ? "horizontal" : "vertical"} 
                verticalAlign={isMobile ? "bottom" : "middle"} 
                align={isMobile ? "center" : "right"} 
                wrapperStyle={isMobile ? { position: 'relative', marginTop: '10px' } : { position: 'absolute', right: 0 }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
