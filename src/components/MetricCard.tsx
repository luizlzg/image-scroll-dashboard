
import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, Phone, XCircle } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: 'blue' | 'yellow' | 'red' | 'green' | 'purple';
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  color = 'blue',
  className,
}) => {
  const getIcon = () => {
    if (icon) return icon;
    
    switch (color) {
      case 'blue':
        return <Phone className="h-5 w-5" />;
      case 'yellow':
        return <Clock className="h-5 w-5" />;
      case 'red':
        return <XCircle className="h-5 w-5" />;
      default:
        return <Phone className="h-5 w-5" />;
    }
  };

  const getIconColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      case 'yellow':
        return 'bg-amber-100 text-amber-600';
      case 'red':
        return 'bg-red-100 text-red-600';
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'purple':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className={cn('dashboard-card opacity-0 animate-scale-in', className)}>
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-3">
          <div className={cn('p-2 rounded-full', getIconColor())}>
            {getIcon()}
          </div>
          <h3 className="ml-2 text-sm font-medium text-gray-500">{title}</h3>
        </div>
        <div className="mt-1">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
