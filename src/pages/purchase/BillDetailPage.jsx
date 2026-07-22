import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search, Plus, MoreHorizontal, Edit, FileText, Download } from 'lucide-react';

const BillDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] overflow-hidden">
      
      {/* ── Sub Navigation ── */}
      <div className="flex-shrink-0 border-b border-gray-200 bg-white px-6">
        <nav className="flex space-x-1">
          {['Expenses', 'Procurement', 'Purchase Order', 'Bills', 'Payment'].map(tab => (
            <button
              key={tab}
              className={`flex items-center gap-1 px-4 py-4 text-[13px] font-medium border-b-2 transition-colors whitespace-nowrap
                ${tab === 'Bills'
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

      {/* ── Scrollable Form Body ── */}
      <div className="flex-1 overflow-y-auto relative bg-[#f8fafc]">
        {/* Sticky Header Wrapper */}
        <div className="sticky top-0 z-50 px-6 lg:px-8 pt-6 pb-2 bg-[#f8fafc]">
          <div className="bg-[#254754] text-white px-6 lg:px-8 py-5 rounded-2xl flex items-center justify-between shadow-sm">
            <h1 className="text-[22px] font-bold">Bill Details</h1>

            {/* Workflow steps */}
            <div className="flex items-center">
              {/* Step 1: Expenses (Completed) */}
              <div className="flex items-center gap-2 bg-[#dcfce7] text-[#16a34a] rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-5 h-5 rounded-full border border-[#16a34a] flex items-center justify-center">
                  <FileText className="w-3 h-3 text-[#16a34a]" />
                </div>
                <span className="text-[13px] font-semibold">Expenses</span>
              </div>

              {/* Line */}
              <div className="w-6 h-[1px] bg-gray-400"></div>

              {/* Step 2: Bills (Active) */}
              <div className="flex items-center gap-2 bg-white text-[#254754] rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-[#254754] flex items-center justify-center">
                  <FileText className="w-3 h-3 text-white" />
                </div>
                <span className="text-[13px] font-semibold">Bills</span>
              </div>

              {/* Line */}
              <div className="w-6 h-[1px] bg-gray-400"></div>

              {/* Step 3: Payment */}
              <div className="flex items-center gap-2 bg-[#5b8a9e] text-white rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#5b8a9e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold">Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Layout (Split View) ── */}
        <div className="px-6 lg:px-8 pb-24 pt-4 flex flex-col lg:flex-row gap-6 relative">
          
          {/* Left Sidebar: List of Bills (Sticky & Independently Scrollable) */}
          <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-4 lg:sticky lg:top-[110px] lg:h-[calc(100vh-220px)] lg:overflow-y-auto hide-scrollbar">
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] font-bold text-[#1a233a]">All Bills</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => navigate('/purchase/bill/new')}
                  className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Search customer, product or item..."
                className="w-full pl-8 pr-3 py-2 text-[12px] bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-blue-500 focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
            </div>

            {/* List Item */}
            <div className="bg-white border-2 border-blue-500 rounded-lg p-4 cursor-pointer shadow-sm relative">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] text-gray-500">25/06/2026</span>
              </div>
              <h3 className="text-[13px] font-bold text-[#1a233a] mb-3 uppercase truncate">CLIMAMAX CONTROLS PRIVATE LIMITED</h3>
              <div className="flex justify-between items-center text-[12px]">
                <span className="text-blue-500 font-medium">OPEN</span>
              </div>
              <div className="flex justify-between items-center text-[12px] mt-1">
                <span className="text-gray-500">SO-00001</span>
                <span className="font-bold text-[#1a233a]">₹100.00</span>
              </div>
            </div>
          </div>

          {/* Right Area: Bill Details */}
          <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
            
            {/* Header Actions */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-[#1a233a]">Bill Details</h2>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 bg-gray-50 rounded-md text-[13px] font-semibold text-gray-700 hover:bg-gray-100">
                  <Edit className="w-3.5 h-3.5" />
                  Edit
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 bg-gray-50 rounded-md text-[13px] font-semibold text-gray-700 hover:bg-gray-100">
                  <FileText className="w-3.5 h-3.5" />
                  PDF/Print
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 bg-gray-50 rounded-md text-[13px] font-semibold text-gray-700 hover:bg-gray-100">
                  <Download className="w-3.5 h-3.5" />
                  Record Payment
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 bg-gray-50 rounded-md text-gray-700 hover:bg-gray-100">
                  <MoreHorizontal className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8">
              
              {/* Top Section */}
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-[13px] text-gray-500 font-bold mb-1 uppercase tracking-wider">BILL</p>
                  <h1 className="text-[24px] font-bold text-[#1a233a] mb-6">Bill# 8645</h1>

                  <div className="grid grid-cols-[140px_1fr] gap-y-3 text-[13px]">
                    <span className="text-gray-500">Order Number</span>
                    <span className="font-medium text-[#1a233a]">5453</span>

                    <span className="text-gray-500">Bill Date</span>
                    <span className="font-medium text-[#1a233a]">15/07/2026</span>

                    <span className="text-gray-500">Due Date</span>
                    <span className="font-medium text-[#1a233a]">15/07/2026</span>

                    <span className="text-gray-500">Payment Terms</span>
                    <span className="font-medium text-[#1a233a]">Due On Receipt</span>

                    <span className="text-gray-500">Balance Due</span>
                    <span className="font-medium text-[#1a233a]">₹5,000.00</span>

                    <span className="text-gray-500">Total Amount</span>
                    <span className="font-medium text-[#1a233a]">₹5,000.00</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-3 mb-10">
                    <span className="text-[13px] text-gray-600">Show PDF View Style Layout</span>
                    <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow"></div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[13px] text-blue-500 mb-1 cursor-pointer hover:underline">Vendor Address</p>
                    <p className="text-[13px] text-gray-700 leading-relaxed">
                      Suite 400, Financial District<br/>
                      Mumbai, MH 400001<br/>
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Item Table */}
              <div className="mb-8 overflow-hidden rounded-lg border border-gray-100">
                <table className="w-full text-left">
                  <thead className="bg-[#fcfcfc] border-b border-gray-100">
                    <tr>
                      <th className="py-3 px-4 font-semibold text-gray-500 text-[13px]">Item</th>
                      <th className="py-3 px-4 font-semibold text-gray-500 text-[13px]">Account</th>
                      <th className="py-3 px-4 font-semibold text-gray-500 text-[13px]">Quantity</th>
                      <th className="py-3 px-4 font-semibold text-gray-500 text-[13px] text-right">Rate</th>
                      <th className="py-3 px-4 font-semibold text-gray-500 text-[13px] text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-4 px-4">
                        <p className="text-[13px] font-bold text-[#1a233a]">Paper</p>
                        <p className="text-[11px] text-gray-400">Premium A4 Copier Paper Reams</p>
                      </td>
                      <td className="py-4 px-4 text-[13px] text-gray-700">Inventory Asset</td>
                      <td className="py-4 px-4 text-[13px] text-gray-700">
                        <span className="font-medium text-[#1a233a]">1000</span> <span className="text-[10px] text-gray-400">PCS</span>
                      </td>
                      <td className="py-4 px-4 text-[13px] text-gray-700 text-right">500.00</td>
                      <td className="py-4 px-4 text-[13px] text-gray-700 text-right">5,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Notes & Totals */}
              <div className="grid grid-cols-[1fr_300px] gap-8 mb-10">
                <div className="border border-gray-100 rounded-xl p-6 bg-[#fcfcfc]">
                  <h3 className="text-[16px] font-bold text-[#1a233a] mb-4">Internal Bill Notes / Reminders</h3>
                  <div className="border border-blue-100 bg-white rounded-lg p-4">
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      This Transaction Covers Initial Core Paper Stock Orders Mapped To Office Administration Expenses. Balance Reconciled Directly With Account Manager.
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3 text-[13px]">
                  <div className="flex justify-between text-gray-700">
                    <span>Sub Total</span>
                    <span>₹5,000.00</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Discount</span>
                    <span>(-) ₹0.00</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax Rate</span>
                    <span>(+) ₹0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#1a233a] text-[16px] mt-2 pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span>₹5,000.00</span>
                  </div>
                </div>
              </div>

              {/* Journal Section */}
              <div>
                <div className="flex border-b border-gray-200 mb-4">
                  <button className="px-4 py-2 text-[13px] font-bold text-blue-600 border-b-2 border-blue-600">
                    Journal
                  </button>
                </div>

                <div className="bg-[#f0fdf4] text-[#16a34a] px-4 py-2.5 rounded-md text-[12px] font-medium mb-4">
                  <span className="text-gray-600">Amount Is Displayed In Your Base Currency</span> <span className="font-bold text-[#1a233a]">INR</span>
                </div>

                <h3 className="font-bold text-[#1a233a] text-[14px] mb-3">Expense</h3>

                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 font-bold text-[#1a233a] text-[13px] w-1/2">Account</th>
                      <th className="py-3 font-bold text-[#1a233a] text-[13px]">Debit</th>
                      <th className="py-3 font-bold text-[#1a233a] text-[13px]">Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 text-[13px] text-gray-700">Materials</td>
                      <td className="py-4 text-[13px] text-gray-700">4,67,254.00</td>
                      <td className="py-4 text-[13px] text-gray-700">0.00</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 text-[13px] text-gray-700">Undeposited Funds</td>
                      <td className="py-4 text-[13px] text-gray-700">0.00</td>
                      <td className="py-4 text-[13px] text-gray-700">4,67,254.00</td>
                    </tr>
                    <tr className="border-b border-gray-200 font-bold bg-[#fcfcfc]">
                      <td className="py-4 px-2 text-[14px] text-[#1a233a]">Total</td>
                      <td className="py-4 text-[13px] text-[#1a233a]">4,67,254.00</td>
                      <td className="py-4 text-[13px] text-[#1a233a]">4,67,254.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BillDetailPage;
