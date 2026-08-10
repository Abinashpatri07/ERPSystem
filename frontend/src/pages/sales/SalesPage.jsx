import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MoreHorizontal, ChevronDown } from 'lucide-react';
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
    <main className="flex-1 overflow-y-auto bg-[#f4f7f9] flex flex-col relative p-1.5 gap-1.5">
      
      {/* Page Toolbar & Navigation */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm shrink-0">
        {/* Sub Navigation */}
        <div className="px-8 border-b border-gray-100">
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
        <div className="px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-1 cursor-pointer">
            <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] bg-clip-text text-transparent inline-block w-fit">
              All Sale Orders
            </h2>
            <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/sales/new')}
              className="bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] hover:opacity-90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center transition-opacity shadow-sm"
            >
              <Plus className="w-3 h-3 mr-1" strokeWidth={2.5} />
              New
            </button>
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-colors">
              <MoreHorizontal className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 overflow-hidden flex flex-col">
        <SalesTable />
      </div>

    </main>
  );
};

export default SalesPage;
