
import React from 'react';

interface StatsItem {
  id: string;
  name: string;
  value: string;
  percentage: string;
}

interface StatsListProps {
  title: string;
  items: StatsItem[];
  className?: string;
}

const StatsList: React.FC<StatsListProps> = ({ title, items, className }) => {
  return (
    <div className={`dashboard-card opacity-0 animate-scale-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className="space-y-3 mt-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">{item.id}</span>
              <span className="text-sm text-gray-500">- {item.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsList;
