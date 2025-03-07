
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Dashboard from './Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Index;
