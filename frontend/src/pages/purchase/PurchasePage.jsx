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
    <main className="flex-1 overflow-y-auto bg-[#f4f7f9] flex flex-col relative p-1.5 gap-1.5">

      {/* ── Page Toolbar & Navigation ── */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm shrink-0">
        {/* Sub Navigation */}
        <div className="px-8 border-b border-gray-100">
          <nav className="flex space-x-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1 px-4 py-2 text-[13px] border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === tab
                    ? 'text-[#1a233a] font-bold border-[#1a233a]'
                    : 'text-gray-500 font-medium border-transparent hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-3">
          <div className="flex items-center gap-1 cursor-pointer">
            <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] bg-clip-text text-transparent">
              {activeTab}
            </h2>
            <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                if (activeTab === 'Expenses') navigate('/purchase/expense/new');
                else if (activeTab === 'Bills') navigate('/purchase/bill/new');
                else navigate('/purchase/new');
              }}
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

      {/* ── Content ── */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 overflow-hidden flex flex-col">
        {/* Table Area */}
        <div className="flex-1 overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f4f6f8] border-b border-gray-200 text-sm">
                <th className="py-4 pl-8 pr-6 font-semibold text-[#1a233a] w-16 text-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 cursor-pointer"
                    onChange={() => { }}
                  />
                </th>
                {activeTab === 'Expenses' && (
                  <>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Date</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Expenses Account</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Reference#</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Vendor Name</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Paid Through</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Customer Name</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Status</th>
                    <th className="py-4 pr-6 font-semibold text-[#1a233a] text-right whitespace-nowrap">Amount</th>
                  </>
                )}
                {activeTab === 'Bills' && (
                  <>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Date</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Bill#</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Reference Number</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Vendor Name</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Status</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Due Date</th>
                    <th className="py-4 pr-6 font-semibold text-[#1a233a] text-right whitespace-nowrap">Amount</th>
                    <th className="py-4 pr-6 font-semibold text-[#1a233a] text-right whitespace-nowrap">Balance Due</th>
                  </>
                )}
                {activeTab !== 'Expenses' && activeTab !== 'Bills' && (
                  <>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Date</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Purchase Order</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Reference#</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Vendor Name</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Status</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Received</th>
                    <th className="py-4 px-6 font-semibold text-[#1a233a] whitespace-nowrap">Billed</th>
                    <th className="py-4 pr-6 font-semibold text-[#1a233a] text-right whitespace-nowrap">Amount</th>
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
                    className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-[13px] cursor-pointer
                        ${selectedRows.includes(expense.id) ? 'bg-blue-50' : 'bg-white'}`}
                  >
                    <td className="py-4 pl-8 pr-6 text-center" onClick={e => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(expense.id)}
                        onChange={() => toggleRow(expense.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 cursor-pointer"
                      />
                    </td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium whitespace-nowrap">{expense.date}</td>
                    <td className="py-4 px-6">
                      <span className="text-blue-600 hover:underline cursor-pointer font-medium">
                        {expense.expensesAccount}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{expense.reference || ''}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{expense.vendorName}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{expense.paidThrough}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{expense.customerName}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{expense.status}</td>
                    <td className="py-4 pr-6 text-[#1a233a] font-semibold text-right whitespace-nowrap">{expense.amount}</td>
                  </tr>
                ))
              ) : activeTab === 'Bills' ? (
                bills.map((bill, idx) => (
                  <tr
                    key={bill.id}
                    onClick={() => navigate('/purchase/bill/1')}
                    className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-[13px] cursor-pointer
                        ${selectedRows.includes(bill.id) ? 'bg-blue-50' : 'bg-white'}`}
                  >
                    <td className="py-4 pl-8 pr-6 text-center" onClick={e => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(bill.id)}
                        onChange={() => toggleRow(bill.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 cursor-pointer"
                      />
                    </td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium whitespace-nowrap">{bill.date}</td>
                    <td className="py-4 px-6">
                      <span className="text-blue-600 hover:underline cursor-pointer font-medium">
                        {bill.billNo}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{bill.reference}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium uppercase">{bill.vendorName}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{bill.status}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium whitespace-nowrap">{bill.dueDate}</td>
                    <td className="py-4 pr-6 text-[#1a233a] font-semibold text-right">{bill.amount}</td>
                    <td className="py-4 pr-6 text-[#1a233a] font-medium text-right">{bill.balanceDue}</td>
                  </tr>
                ))
              ) : (
                orders.map((order, idx) => (
                  <tr
                    key={order.id}
                    onClick={() => navigate(`/purchase/order/${order.id}`)}
                    className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-[13px] cursor-pointer
                        ${selectedRows.includes(order.id) ? 'bg-blue-50' : 'bg-white'}`}
                  >
                    <td className="py-4 pl-8 pr-6 text-center" onClick={e => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(order.id)}
                        onChange={() => toggleRow(order.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 cursor-pointer"
                      />
                    </td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium whitespace-nowrap">{order.date}</td>
                    <td className="py-4 px-6">
                      <span className="text-blue-600 hover:underline cursor-pointer font-medium">
                        {order.purchaseOrder}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{order.reference || ''}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{order.vendorName}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide ${statusColors[order.status] || 'bg-gray-100 text-gray-600'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{order.received}</td>
                    <td className="py-4 px-6 text-[#1a233a] font-medium">{order.billed}</td>
                    <td className="py-4 pr-6 text-[#1a233a] font-semibold text-right whitespace-nowrap">{order.amount}</td>
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
    </main>
  );
};

export default PurchasePage;
