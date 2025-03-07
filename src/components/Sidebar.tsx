
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChartBig, Home, Settings, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Visão geral', href: '/visao-geral', icon: BarChartBig },
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm opacity-0 animate-fade-in">
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <div className="flex items-center">
          <img src="/lovable-uploads/1ef7ba5e-2404-4d4d-bc60-ad7165601379.png" alt="AutoMaCall Logo" className="h-8 w-auto" />
          <span className="ml-2 font-semibold text-lg">AutoMaCall</span>
        </div>
      </div>
      
      <div className="mt-5 px-3">
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2">Dashboard</p>
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  {
                    "bg-blue-50 text-blue-600": isActive,
                    "text-gray-700 hover:bg-gray-100": !isActive,
                  }
                )}
              >
                <item.icon className={cn("mr-3 h-5 w-5", {
                  "text-blue-500": isActive,
                  "text-gray-500": !isActive,
                })} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="mt-auto mb-5 px-3">
        <div className="space-y-1">
          <Link
            to="/settings"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-700 hover:bg-gray-100"
          >
            <Settings className="mr-3 h-5 w-5 text-gray-500" />
            Configurações
          </Link>
          <div className="flex items-center mt-5 px-3 py-3 rounded-lg bg-gray-50">
            <div className="flex-shrink-0">
              <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold text-sm">
                AS
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Alex Silva</p>
              <p className="text-xs font-medium text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
