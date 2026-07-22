import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Filter, MoreHorizontal, ChevronDown } from 'lucide-react';

const tabs = ['Manufacturing', 'Job Cards', 'Shop Floor', 'Manufacturing Calendar'];

const manufacturingData = [
  {
    id: 'MFG-00001',
    date: '30/06/2026',
    billNo: '8645',
    reference: '8688322738',
    vendorName: 'CLIMAMAX',
    status: 'Undeposited Funds',
    dueDate: '10/06/2026',
    amount: '₹5,999.00',
    balanceDue: '1,000.00',
  },
];

const ProductionPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Manufacturing');
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
              {tab === 'Manufacturing Calendar' && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Scrollable Form Body ── */}
      <div className="flex-1 overflow-y-auto bg-[#f4f7f9] p-6 lg:p-8">
        <div className="flex flex-col h-full space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-[22px] font-bold text-[#1a233a]">
              All Manufacturing
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (activeTab === 'Manufacturing') navigate('/production/manufacturing/new');
                }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold px-4 py-2 rounded-md transition-colors"
              >
                <Plus className="w-4 h-4" />
                New
              </button>
              <button className="p-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 bg-gray-50">
                <Filter className="w-4 h-4" />
              </button>
              <button className="p-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 bg-gray-50">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-[#f8f9fa]">
                  <th className="w-10 px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      onChange={() => {}}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Date</th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Bill#</th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Reference Number</th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Vendor Name</th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Status</th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Due Date</th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Amount</th>
                  <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Balance Due</th>
                </tr>
              </thead>
              <tbody>
                {manufacturingData.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-100 transition-colors cursor-pointer
                      ${selectedRows.includes(item.id) ? 'bg-blue-50' : idx % 2 === 0 ? 'bg-white' : 'bg-[#fcfcfc]'}`}
                  >
                    <td className="px-4 py-4" onClick={e => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => toggleRow(item.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-4 text-[13px] text-gray-700 whitespace-nowrap">{item.date}</td>
                    <td className="px-4 py-4">
                      <span className="text-[13px] text-blue-500 hover:underline cursor-pointer font-medium">
                        {item.billNo}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-[13px] text-gray-700">{item.reference}</td>
                    <td className="px-4 py-4 text-[13px] text-gray-700 uppercase">{item.vendorName}</td>
                    <td className="px-4 py-4 text-[13px] text-gray-700">{item.status}</td>
                    <td className="px-4 py-4 text-[13px] text-gray-700 whitespace-nowrap">{item.dueDate}</td>
                    <td className="px-4 py-4 text-[13px] text-gray-700 font-medium">{item.amount}</td>
                    <td className="px-4 py-4 text-[13px] text-gray-700">{item.balanceDue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProductionPage;
