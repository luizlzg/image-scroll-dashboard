
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

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
  
  return (
    <ul className="flex flex-col space-y-2 mt-4">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center">
          <span className="w-3 h-3 rounded-full inline-block mr-2" style={{ backgroundColor: entry.color }}></span>
          <span className="text-xs text-gray-600">{entry.value} ({entry.payload.percentage})</span>
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
  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className="h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} layout="vertical" verticalAlign="middle" align="right" />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;
