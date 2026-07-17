import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MoreHorizontal } from 'lucide-react';
import SalesTable from './SalesTable';

const SalesPage = () => {
  const navigate = useNavigate();
  const tabs = ['Quotes', 'Sales Orders', 'Invoices', 'Payments'];

  return (
    <main className="flex-1 overflow-y-auto bg-white flex flex-col relative">
      
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                tab === 'Sales Orders'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
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
