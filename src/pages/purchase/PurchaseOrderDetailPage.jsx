import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, Plus, MoreHorizontal, Search, Edit2, Send, FileText } from 'lucide-react';

const tabs = ['Expenses', 'Procurement', 'Purchase Order', 'Bills', 'Payment'];

const ordersList = [
  {
    id: 'PO-00001',
    date: '25/06/2026',
    vendor: 'CLIMAMAX CONTROLS PRIVATE LIMITED',
    amount: '₹100.00',
    isActive: true
  }
];

const PurchaseOrderDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Purchase Order');

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#f8fafc]">
      {/* ── Sub Navigation ── */}
      <div className="shrink-0 border-b border-gray-200 bg-white px-6">
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

      {/* ── Scrollable Body ── */}
      <div className="flex-1 overflow-y-auto relative">
        
        {/* ── Sticky Dark Rounded Header ── */}
        <div className="sticky top-0 z-50 bg-[#f8fafc] px-6 pt-6 pb-2">
          <div className="bg-[#254754] text-white px-8 py-5 rounded-2xl flex items-center justify-between shadow-sm">
            <h1 className="text-[22px] font-bold">Purchase order</h1>

            {/* Workflow steps */}
            <div className="flex items-center">
              {/* Step 1: Procurement */}
              <div className="flex items-center gap-2 bg-[#dcfce7] text-[#16a34a] rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-4 h-4 rounded-full border border-[#16a34a] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold">Procurement</span>
              </div>

              {/* Line */}
              <div className="w-6 h-px bg-gray-400"></div>

              {/* Step 2: Purchase Orders */}
              <div className="flex items-center gap-2 bg-[#eff6ff] text-[#1e3a8a] rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold">Purchase Orders</span>
              </div>

              {/* Line */}
              <div className="w-6 h-px bg-gray-400"></div>

              {/* Step 3: Bills */}
              <div className="flex items-center gap-2 bg-[#5b8a9e] text-white rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#5b8a9e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold">Bills</span>
              </div>

              {/* Line */}
              <div className="w-6 h-px bg-gray-400"></div>

              {/* Step 4: Payment */}
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
          
            {/* Left Sidebar: List of Orders (Sticky & Independently Scrollable) */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-4 lg:sticky lg:top-27.5 lg:h-[calc(100vh-220px)] lg:overflow-y-auto hide-scrollbar">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#1e293b]">Purchase Orders</h2>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => navigate('/purchase/new')}
                    className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input 
                  type="text" 
                  placeholder="Search customer, product or item..." 
                  className="w-full bg-gray-100 border-none rounded-md pl-9 pr-3 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div className="flex flex-col gap-3">
                {ordersList.map((order) => (
                  <div 
                    key={order.id} 
                    className={`bg-white rounded-xl border p-4 cursor-pointer shadow-sm
                      ${order.isActive ? 'border-blue-200 ring-1 ring-blue-100' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="text-[11px] text-gray-400 mb-1">{order.date}</div>
                    <div className="text-[13px] font-bold text-[#1a233a] mb-3">{order.vendor}</div>
                    <div className="flex justify-between items-center">
                      <div className="text-[12px] text-gray-500 uppercase">{order.id}</div>
                      <div className="text-[13px] font-bold text-[#1a233a]">{order.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="flex-1 flex flex-col gap-4">
              
              {/* Header Actions */}
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#1e293b]">Purchase Order</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 text-[13px] font-semibold text-gray-700 shadow-sm">
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 text-[13px] font-semibold text-gray-700 shadow-sm">
                    <Send className="w-3.5 h-3.5" /> Send <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 text-[13px] font-semibold text-gray-700 shadow-sm">
                    <FileText className="w-3.5 h-3.5" /> PDF/ Print
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700 shadow-sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                
                <h1 className="text-2xl font-semibold text-[#1e293b] mb-1">PO-00001</h1>
                <p className="text-[13px] text-gray-500 mb-8">Purchase Order# PO-00001</p>

                <div className="grid grid-cols-5 gap-4 mb-10">
                  <div>
                    <div className="text-[12px] font-bold text-[#1a233a] mb-2">Vendor Address</div>
                    <div className="text-[13px] text-gray-500">CLIMAMAX</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#1a233a] mb-2">Delivery Address</div>
                    <div className="text-[13px] text-gray-500">
                      Bangalore<br/>India
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#1a233a] mb-2">Order Date</div>
                    <div className="text-[13px] text-gray-500">30/06/2026</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#1a233a] mb-2">Delivery Date</div>
                    <div className="text-[13px] text-gray-500">26/06/2026</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#1a233a] mb-2">Payment Terms</div>
                    <div className="text-[13px] text-gray-500">Due On Receipt</div>
                  </div>
                </div>

                {/* Table */}
                <div className="mb-8">
                  <div className="grid grid-cols-12 gap-4 pb-3 border-b border-gray-100 bg-[#f8fafc] px-4 rounded-t-md">
                    <div className="col-span-5 text-[12px] font-semibold text-[#1a233a] mt-2">Items &amp; Description</div>
                    <div className="col-span-2 text-[12px] font-semibold text-[#1a233a] mt-2">Ordered</div>
                    <div className="col-span-2 text-[12px] font-semibold text-[#1a233a] mt-2">Status</div>
                    <div className="col-span-1 text-[12px] font-semibold text-[#1a233a] text-right mt-2">Rate</div>
                    <div className="col-span-2 text-[12px] font-semibold text-[#1a233a] text-right mt-2">Amount</div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-4 py-4 px-4 border-b border-gray-100">
                    <div className="col-span-5">
                      <div className="text-[13px] font-bold text-[#1a233a]">Calibrated Glass Pipette</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">Standard High Resolution Glass Testing Pipettes</div>
                    </div>
                    <div className="col-span-2 text-[13px] text-gray-700">
                      566 <span className="text-[11px] text-gray-400">Box</span>
                    </div>
                    <div className="col-span-2 text-[13px] text-gray-700 flex flex-col gap-1">
                      <div><span className="font-semibold">0</span> Received</div>
                      <div><span className="font-semibold">0</span> Billed</div>
                    </div>
                    <div className="col-span-1 text-[13px] text-gray-700 text-right">30.00</div>
                    <div className="col-span-2 text-[13px] text-gray-700 text-right">50,645</div>
                  </div>
                </div>

                {/* Totals Section */}
                <div className="flex justify-end mb-12">
                  <div className="w-80">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                      <span className="text-[14px] font-bold text-[#1a233a]">Sub Total</span>
                      <span className="text-[14px] font-bold text-[#1a233a]">50,645</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[12px] text-gray-500">Total Quantity :</span>
                      <span className="text-[12px] text-gray-500">04 PCS</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[12px] text-gray-500">GST :</span>
                      <span className="text-[12px] text-gray-500">600.96</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                      <span className="text-[12px] text-gray-500">Discount Rate</span>
                      <span className="text-[12px] text-gray-500">400.97</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[15px] font-bold text-[#1a233a]">Total Payable</span>
                      <span className="text-[16px] font-bold text-[#1a233a]">₹53,900.00</span>
                    </div>
                  </div>
                </div>

                {/* Notes & Terms */}
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                  <div>
                    <h3 className="text-[14px] font-bold text-[#1a233a] mb-2">Customer Note</h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed">
                      Customer Requested Timely Delivery With Secure Packaging And Prior Dispatch Confirmation.
                    </p>
                  </div>
                  <div className="border-l border-gray-200 pl-8">
                    <h3 className="text-[14px] font-bold text-[#1a233a] mb-2">Term &amp; Condition</h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed">
                      Prices Are Exclusive Of Taxes. Payment Is Due Within 30 Days. Delivery Dates Are Estimated And Subject To Availability. Orders Cannot Be Cancelled After Production Begins. Goods Remain The Seller's Property Until Full Payment Is Received. All Disputes Are Subject To Local Jurisdiction.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default PurchaseOrderDetailPage;
