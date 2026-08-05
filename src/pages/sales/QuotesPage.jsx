import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, MoreHorizontal, Filter } from 'lucide-react';
import QuotesTable from './QuotesTable';

const QuotesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
          {tabs.map((tab) => {
            // Check if active based on path
            const isActive = tab.name === 'Quotes';
            return (
              <button
                key={tab.name}
                onClick={() => navigate(tab.path)}
                className={`py-2 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? 'border-gray-900 text-gray-900 font-bold'
                    : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Header */}
      <div className="px-8 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] bg-clip-text text-transparent">
          All Quotes
        </h2>
        <div className="flex items-center space-x-2.5">
          <button 
            onClick={() => navigate('/sales/quotes/new')}
            className="bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] hover:opacity-90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center transition-opacity shadow-sm"
          >
            <Plus className="w-3 h-3 mr-1" strokeWidth={2.5} />
            New
          </button>
          <button className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300/50 rounded-full flex items-center justify-center transition-colors">
            <Filter className="w-3 h-3" strokeWidth={1.5} />
          </button>
          <button className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300/50 rounded-full flex items-center justify-center transition-colors">
            <MoreHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="flex-1 pb-8 w-full overflow-x-auto">
        <QuotesTable />
      </div>

    </main>
  );
};

export default QuotesPage;
