
import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

interface DataPoint {
  time: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
  yAxisLabel?: string;
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

const LineChart: React.FC<LineChartProps> = ({ data, title, yAxisLabel, className }) => {
  // Find the max value points
  const maxValuePoint = data.reduce(
    (max, point) => (point.value > max.value ? point : max),
    data[0]
  );
  
  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-6">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#33C3F0" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#33C3F0" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              domain={[0, 'dataMax + 20']}
              label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF', fontSize: 12 } } : undefined}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#33C3F0" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8, strokeWidth: 0, fill: '#33C3F0' }}
            />
            {/* Add reference dots for peak points */}
            <ReferenceDot 
              x={maxValuePoint.time} 
              y={maxValuePoint.value} 
              r={5} 
              fill="#33C3F0" 
              stroke="white" 
              strokeWidth={2} 
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
