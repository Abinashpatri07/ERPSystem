import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MoreHorizontal } from 'lucide-react';
import SalesTable from './SalesTable';

const SalesPage = () => {
  const navigate = useNavigate();
  const tabs = [
    { name: 'Quotes', path: '/sales/quotes' },
    { name: 'Sales Orders', path: '/sales/orders' },
    { name: 'Invoices', path: '/sales/invoices' },
    { name: 'Payments', path: '/sales/payments' }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-white flex flex-col relative">
      
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`py-2 text-sm font-medium border-b-2 transition-colors ${
                tab.name === 'Sales Orders'
                  ? 'border-gray-900 text-gray-900 font-bold'
                  : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Header */}
      <div className="px-8 py-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#1a233a]">All Sale Orders</h2>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate('/sales/new')}
            className="bg-[#3b82f6] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4 mr-2" strokeWidth={2} />
            New
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-2 rounded-lg transition-colors border border-gray-200">
            <MoreHorizontal className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="flex-1 px-8 pb-8">
        <SalesTable />
      </div>

    </main>
  );
};

export default SalesPage;
