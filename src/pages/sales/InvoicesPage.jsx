import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, MoreHorizontal } from 'lucide-react';
import InvoicesTable from './InvoicesTable';

const InvoicesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Quotes', path: '/sales/quotes' },
    { name: 'Sales Orders', path: '/sales/orders' },
    { name: 'Invoices', path: '/sales/invoices' },
    { name: 'Payments', path: '/sales/payments' }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-[#f8f9fb] flex flex-col relative">
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === tab.path || (tab.name === 'Invoices' && location.pathname.includes('/invoices'))
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Header */}
      <div className="px-8 py-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#1a233a]">All Invoices</h2>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate('/sales/invoices/new')}
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

      {/* Table Content */}
      <div className="px-8 pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <InvoicesTable />
        </div>
      </div>
    </main>
  );
};

export default InvoicesPage;
