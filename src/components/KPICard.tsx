
import React from 'react';
import { cn } from '@/lib/utils';
import { Activity, ArrowUpRight } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  percentage?: string;
  meta?: string;
  growth?: string;
  comparison?: string;
  icon?: React.ReactNode;
  className?: string;
  color?: 'green' | 'blue' | 'yellow' | 'red';
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  percentage,
  meta,
  growth,
  comparison,
  icon,
  className,
  color = 'green'
}) => {
  const colors = {
    green: {
      bg: 'bg-dashboard-lightGreen',
      icon: 'bg-dashboard-green text-white',
      text: 'text-green-600',
    },
    blue: {
      bg: 'bg-dashboard-lightBlue',
      icon: 'bg-dashboard-blue text-white',
      text: 'text-blue-600',
    },
    yellow: {
      bg: 'bg-dashboard-lightYellow',
      icon: 'bg-dashboard-yellow text-white',
      text: 'text-amber-600',
    },
    red: {
      bg: 'bg-dashboard-lightRed',
      icon: 'bg-dashboard-red text-white',
      text: 'text-red-600',
    },
  };

  return (
    <div 
      className={cn(
        'rounded-xl p-6 transition-all duration-300 opacity-0 animate-scale-in',
        colors[color].bg,
        className
      )}
    >
      <div className="flex items-start">
        <div className={cn('p-3 rounded-full mr-4', colors[color].icon)}>
          {icon || <Activity className="h-5 w-5" />}
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>
            {percentage && (
              <span className={cn('ml-2 px-2 py-1 text-xs font-medium rounded-full', colors[color].text, 'bg-white/50')}>
                {percentage}
              </span>
            )}
          </div>
          <div className="mt-2 flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
          </div>
          {(meta || growth) && (
            <div className="mt-2 text-sm text-gray-600">
              {meta && <span>{meta}</span>}
              {growth && (
                <span className="flex items-center ml-2 text-green-600">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {growth} {comparison && <span className="text-gray-500 ml-1">{comparison}</span>}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KPICard;
