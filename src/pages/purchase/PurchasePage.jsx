import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, Filter, MoreHorizontal, ChevronDown } from 'lucide-react';

const tabs = ['Expenses', 'Procurement', 'Purchase Order', 'Bills', 'Payment'];

const orders = [
  {
    id: 'PO-00001',
    date: '30/06/2026',
    purchaseOrder: 'PO-00001',
    reference: '',
    vendorName: 'CLIMAMAX',
    status: 'DRAFT',
    received: '---',
    billed: '---',
    amount: '₹53,900.00',
  },
];

const expenses = [
  {
    id: 'EXP-00001',
    date: '30/06/2026',
    expensesAccount: 'Job Costing',
    reference: '',
    vendorName: 'CLIMAMAX',
    paidThrough: 'Undeposited Funds',
    customerName: 'CLIMAMAX CONTROLS PRIVATE LIMITED',
    status: 'Non-Billable',
    amount: '₹4,67,254.00',
  },
];

const bills = [
  {
    id: 'BILL-00001',
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

const statusColors = {
  DRAFT: 'bg-gray-100 text-gray-600',
  CONFIRMED: 'bg-blue-100 text-blue-600',
  RECEIVED: 'bg-green-100 text-green-600',
  BILLED: 'bg-purple-100 text-purple-600',
  CANCELLED: 'bg-red-100 text-red-600',
};

const PurchasePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'Purchase Order');
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
            <h1 className="text-[20px] font-bold text-[#1a233a]">
              {activeTab === 'Expenses' ? 'All Expenses' : `All ${activeTab}`}
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (activeTab === 'Expenses') navigate('/purchase/expense/new');
                  else if (activeTab === 'Bills') navigate('/purchase/bill/new');
                  else navigate('/purchase/new');
                }}
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
                  {activeTab === 'Expenses' && (
                    <>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Date</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Expenses Account</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Reference#</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Vendor Name</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Paid Through</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Customer Name</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Status</th>
                      <th className="px-4 py-3 text-right text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Amount</th>
                    </>
                  )}
                  {activeTab === 'Bills' && (
                    <>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Date</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Bill#</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Reference Number</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Vendor Name</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Status</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Due Date</th>
                      <th className="px-4 py-3 text-right text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Amount</th>
                      <th className="px-4 py-3 text-right text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Balance Due</th>
                    </>
                  )}
                  {activeTab !== 'Expenses' && activeTab !== 'Bills' && (
                    <>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Date</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Purchase Order</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Reference#</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Vendor Name</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Status</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Received</th>
                      <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Billed</th>
                      <th className="px-4 py-3 text-right text-[12px] font-bold text-[#1a233a] whitespace-nowrap bg-[#f8f9fa]">Amount</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {activeTab === 'Expenses' ? (
                  expenses.map((expense, idx) => (
                    <tr
                      key={expense.id}
                      onClick={() => expense.expensesAccount === 'Job Costing' ? navigate('/purchase/expense/1') : null}
                      className={`border-b border-gray-100 transition-colors cursor-pointer
                        ${selectedRows.includes(expense.id) ? 'bg-blue-50' : idx % 2 === 0 ? 'bg-white' : 'bg-white'}`}
                    >
                      <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(expense.id)}
                          onChange={() => toggleRow(expense.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-3 text-[13px] text-gray-600 whitespace-nowrap">{expense.date}</td>
                      <td className="px-4 py-3">
                        <span className="text-[13px] text-blue-600 hover:underline cursor-pointer font-medium">
                          {expense.expensesAccount}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[13px] text-gray-500">{expense.reference || ''}</td>
                      <td className="px-4 py-3 text-[13px] font-medium text-[#1a233a]">{expense.vendorName}</td>
                      <td className="px-4 py-3 text-[13px] text-gray-600">{expense.paidThrough}</td>
                      <td className="px-4 py-3 text-[13px] text-gray-600">{expense.customerName}</td>
                      <td className="px-4 py-3 text-[13px] text-gray-600">{expense.status}</td>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1a233a] text-right whitespace-nowrap">{expense.amount}</td>
                    </tr>
                  ))
                ) : activeTab === 'Bills' ? (
                  bills.map((bill, idx) => (
                    <tr
                      key={bill.id}
                      onClick={() => navigate('/purchase/bill/1')}
                      className={`border-b border-gray-100 transition-colors cursor-pointer
                        ${selectedRows.includes(bill.id) ? 'bg-blue-50' : idx % 2 === 0 ? 'bg-[#fcfcfc]' : 'bg-white'}`}
                    >
                      <td className="px-4 py-4" onClick={e => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(bill.id)}
                          onChange={() => toggleRow(bill.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-4 text-[13px] text-gray-700 whitespace-nowrap">{bill.date}</td>
                      <td className="px-4 py-4">
                        <span className="text-[13px] text-blue-500 hover:underline cursor-pointer font-medium">
                          {bill.billNo}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[13px] text-gray-700">{bill.reference}</td>
                      <td className="px-4 py-4 text-[13px] text-gray-700 uppercase">{bill.vendorName}</td>
                      <td className="px-4 py-4 text-[13px] text-gray-700">{bill.status}</td>
                      <td className="px-4 py-4 text-[13px] text-gray-700 whitespace-nowrap">{bill.dueDate}</td>
                      <td className="px-4 py-4 text-right text-[13px] text-gray-700 font-medium">{bill.amount}</td>
                      <td className="px-4 py-4 text-right text-[13px] text-gray-700">{bill.balanceDue}</td>
                    </tr>
                  ))
                ) : (
                  orders.map((order, idx) => (
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
                  ))
                )}
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
