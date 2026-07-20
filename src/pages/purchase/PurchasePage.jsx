import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Filter, MoreHorizontal, ChevronDown } from 'lucide-react';

const tabs = ['Expenses', 'Procurement', 'Purchase Order', 'Bills', 'Payment'];

const orders = [
  {
    id: 'PO-00001',
    date: '30/06/2026',
    purchaseOrder: 'Job Costing',
    reference: '',
    vendorName: 'CLIMAMAX',
    status: 'DRAFT',
    received: '---',
    billed: '---',
    amount: '₹4,67,254.00',
  },
];

const statusColors = {
  DRAFT: 'bg-gray-100 text-gray-600',
  CONFIRMED: 'bg-blue-100 text-blue-600',
  RECEIVED: 'bg-green-100 text-green-600',
  BILLED: 'bg-purple-100 text-purple-600',
  CANCELLED: 'bg-red-100 text-red-600',
};

const PurchasePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Purchase Order');
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRow = (id) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  return (
    <main className="flex-1 flex flex-col overflow-hidden bg-white">

      {/* ── Sub Navigation ── */}
      <div className="border-b border-gray-200 bg-white px-6">
        <nav className="flex space-x-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1 px-4 py-4 text-[13px] font-medium border-b-2 transition-colors whitespace-nowrap
                ${activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          ))}
        </nav>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 overflow-y-auto bg-[#f8f9fb]">
        <div className="p-6 md:p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[20px] font-bold text-[#1a233a]">All Purchase Order</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/purchase/new')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold px-4 py-2 rounded-md transition-colors"
              >
                <Plus className="w-4 h-4" />
                New
              </button>
              <button className="flex items-center justify-center w-9 h-9 bg-white border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-9 h-9 bg-white border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-white">
                  <th className="w-10 px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      onChange={() => {}}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-500 whitespace-nowrap">Date</th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-500 whitespace-nowrap">Purchase Order</th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-500 whitespace-nowrap">Reference#</th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-500 whitespace-nowrap">Vendor Name</th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-500 whitespace-nowrap">Status</th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-500 whitespace-nowrap">Received</th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-gray-500 whitespace-nowrap">Billed</th>
                  <th className="px-4 py-3 text-right text-[12px] font-semibold text-gray-500 whitespace-nowrap">Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr
                    key={order.id}
                    onClick={() => navigate(`/purchase/order/${order.id}`)}
                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer
                      ${selectedRows.includes(order.id) ? 'bg-blue-50' : idx % 2 === 0 ? 'bg-white' : 'bg-white'}`}
                  >
                    <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(order.id)}
                        onChange={() => toggleRow(order.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 whitespace-nowrap">{order.date}</td>
                    <td className="px-4 py-3">
                      <span className="text-[13px] text-blue-600 hover:underline cursor-pointer font-medium">
                        {order.purchaseOrder}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-500">{order.reference || ''}</td>
                    <td className="px-4 py-3 text-[13px] font-medium text-[#1a233a]">{order.vendorName}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide ${statusColors[order.status] || 'bg-gray-100 text-gray-600'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-400">{order.received}</td>
                    <td className="px-4 py-3 text-[13px] text-gray-400">{order.billed}</td>
                    <td className="px-4 py-3 text-[13px] font-semibold text-[#1a233a] text-right whitespace-nowrap">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty state if no orders */}
            {orders.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <p className="text-[14px]">No purchase orders found</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default PurchasePage;
