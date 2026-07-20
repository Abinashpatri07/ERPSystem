import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown, Search, Calendar, Plus, Minus, GripVertical,
  RotateCcw, Bookmark,
} from 'lucide-react';

const CreatePurchaseOrderPage = () => {
  const navigate = useNavigate();

  const [customerType, setCustomerType] = useState('Organization');
  const [taxType, setTaxType] = useState('TCS');
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => setRows(prev => [...prev, { id: Date.now() }]);
  const removeRow = (id) => setRows(prev => prev.filter(r => r.id !== id));

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#f4f7f9]">

      {/* ── Scrollable Form Body ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-8 py-6 space-y-6 pb-24">

          {/* ── Dark Rounded Header ── */}
          <div className="bg-[#254754] text-white px-8 py-5 rounded-2xl flex items-center justify-between shadow-sm">
            <h1 className="text-[22px] font-bold">Create purchase order</h1>

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
              <div className="w-6 h-[1px] bg-gray-400"></div>

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
              <div className="w-6 h-[1px] bg-gray-400"></div>

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
              <div className="w-6 h-[1px] bg-gray-400"></div>

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

          {/* ── Section 1: Main Fields ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3b82f6]" />
            <div className="grid grid-cols-2 gap-x-10 gap-y-5">

              {/* Vendor */}
              <div className="col-span-2 flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Vendor <span className="text-gray-500">*</span></label>
                <div className="flex-1 relative flex gap-2">
                  <div className="flex-1 relative">
                    <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                      <option></option>
                      <option>CLIMAMAX</option>
                      <option>Meridian Supplies Co.</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <button className="w-9 h-9 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Customer Type */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Customer Type <span className="text-gray-500">*</span></label>
                <div className="flex gap-5">
                  {['Organization', 'Customer'].map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() => setCustomerType(type)}
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer
                          ${customerType === type ? 'border-blue-600 bg-white' : 'border-gray-300'}`}
                      >
                        {customerType === type && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                      </div>
                      <span className="text-[13px] text-[#1a233a]">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Purchase Order# */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Purchase Order#</label>
                <div className="flex-1">
                  <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Delivery Address</label>
                <div className="flex-1">
                  <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              {/* Reference# */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Reference#</label>
                <div className="flex-1">
                  <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Date</label>
                <div className="flex-1 relative">
                  <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 pr-10 text-[13px] focus:outline-none focus:border-blue-500" placeholder="DD/MM/YYYY" />
                  <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Delivery Date */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Delivery Date</label>
                <div className="flex-1 relative">
                  <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 pr-10 text-[13px] focus:outline-none focus:border-blue-500" placeholder="DD/MM/YYYY" />
                  <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Payment Terms */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Payment Terms</label>
                <div className="flex-1 relative">
                  <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                    <option></option>
                    <option>Net 15</option>
                    <option>Net 30</option>
                    <option>Net 45</option>
                    <option>Due On Receipt</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Shipment Preference */}
              <div className="flex items-center">
                <label className="text-[13px] font-semibold text-[#1a233a] w-44 shrink-0">Shipment Preference</label>
                <div className="flex-1 relative">
                  <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                    <option></option>
                    <option>Standard</option>
                    <option>Express</option>
                    <option>Overnight</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

          {/* ── Item Table ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3b82f6]" />
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] font-bold text-[#1a233a]">Item Table</h2>
              <div className="relative">
                <button className="flex items-center gap-2 border border-gray-200 rounded-md px-4 py-2 text-[13px] font-semibold text-[#1a233a] bg-white hover:bg-gray-50 transition-colors shadow-sm">
                  Bulk Action <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Table header */}
            <div className="grid gap-2 border-b border-gray-200 pb-3 mb-2"
              style={{ gridTemplateColumns: '32px 1fr 180px 130px 120px 120px 36px' }}>
              <div />
              <div className="text-[12px] font-semibold text-gray-500">Item Details</div>
              <div className="text-[12px] font-semibold text-gray-500">Account</div>
              <div className="text-[12px] font-semibold text-gray-500">Quantity</div>
              <div className="text-[12px] font-semibold text-gray-500">Rate</div>
              <div className="text-[12px] font-semibold text-gray-500">Amount</div>
              <div />
            </div>

            {/* Table rows */}
            {rows.map(row => (
              <div key={row.id} className="grid gap-2 items-center py-2 border-b border-gray-100"
                style={{ gridTemplateColumns: '32px 1fr 180px 130px 120px 120px 36px' }}>
                <GripVertical className="w-4 h-4 text-gray-300 cursor-grab" />

                {/* Item Details */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                    <RotateCcw className="w-3.5 h-3.5" />
                  </div>
                  <input type="text" placeholder="Select item..." className="flex-1 border border-gray-200 rounded-md px-2 py-1.5 text-[12px] focus:outline-none focus:border-blue-500" />
                </div>

                {/* Account */}
                <div className="relative">
                  <select className="w-full border border-gray-200 rounded-md px-2 py-1.5 text-[12px] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                    <option></option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>

                {/* Quantity */}
                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                  <button className="px-2 py-1.5 hover:bg-gray-100 transition-colors text-gray-500">
                    <Minus className="w-3 h-3" />
                  </button>
                  <input type="number" defaultValue="1" className="flex-1 text-center text-[12px] py-1.5 focus:outline-none w-10" />
                  <button className="px-2 py-1.5 hover:bg-gray-100 transition-colors text-gray-500">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Rate */}
                <div className="relative">
                  <span className="absolute left-2.5 top-1.5 text-gray-400 text-[12px]">₹</span>
                  <input type="number" className="w-full border border-gray-200 rounded-md pl-6 pr-2 py-1.5 text-[12px] focus:outline-none focus:border-blue-500" placeholder="0.00" />
                </div>

                {/* Amount */}
                <div className="relative">
                  <span className="absolute left-2.5 top-1.5 text-gray-400 text-[12px]">₹</span>
                  <input type="number" className="w-full border border-gray-200 rounded-md pl-6 pr-2 py-1.5 text-[12px] focus:outline-none focus:border-blue-500 bg-gray-50" placeholder="0.00" readOnly />
                </div>

                {/* Remove row */}
                <button onClick={() => removeRow(row.id)} className="text-gray-300 hover:text-red-400 transition-colors text-lg leading-none flex justify-center">
                  ×
                </button>
              </div>
            ))}

            {/* Add Row + note */}
            <div className="flex items-center justify-between mt-4">
              <button onClick={addRow} className="flex items-center gap-1.5 text-[13px] text-blue-600 border border-blue-200 rounded-md px-3 py-1.5 hover:bg-blue-50 transition-colors font-semibold">
                Add New Row <Plus className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-gray-400 italic">Items Selected Dynamically Synchronize With Central Ledger Accounts Automatically.</p>
            </div>
          </div>

          {/* ── Bottom Section: Notes + Totals ── */}
          <div className="grid grid-cols-2 gap-5">

            {/* Customer Note */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden p-6">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3b82f6]" />
              <h2 className="text-[16px] font-bold text-[#1a233a] mb-4">Customer Note</h2>
              <textarea
                rows={6}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500 resize-none"
                placeholder=""
              />
              <p className="text-[11px] text-gray-400 mt-2">It Will Not Be Shown In PDF</p>
            </div>

            {/* Invoice Totals Console */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-[16px] font-bold text-[#1a233a] mb-4">Invoice Totals Console</h2>

              {/* Discount */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-semibold text-[#1a233a]">Discount</span>
                  <div className="flex">
                    <button className="px-3 py-1 text-[12px] font-semibold bg-gray-100 text-gray-600 rounded-l border border-gray-200 hover:bg-gray-200 transition-colors">%</button>
                    <button className="px-3 py-1 text-[12px] font-semibold bg-blue-600 text-white rounded-r border border-blue-600">₹</button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="number" className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500" placeholder="0.00" />
                  <span className="text-[13px] text-gray-500 w-16 text-right">-$0.00</span>
                </div>
              </div>

              {/* Tax Allocation */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-semibold text-[#1a233a]">Tax Allocation Mapping</span>
                  <div className="flex gap-3">
                    {['TDS', 'TCS'].map(t => (
                      <label key={t} className="flex items-center gap-1.5 cursor-pointer">
                        <div
                          onClick={() => setTaxType(t)}
                          className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center cursor-pointer
                            ${taxType === t ? 'border-blue-600' : 'border-gray-300'}`}
                        >
                          {taxType === t && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                        </div>
                        <span className="text-[12px] text-gray-600">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="number" className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500" placeholder="0.00" />
                  <span className="text-[13px] text-gray-500 w-16 text-right">-$0.00</span>
                </div>
              </div>

              {/* Manual Adjustments */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-semibold text-[#1a233a]">Manual Adjustments</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="number" className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500" placeholder="0.00" />
                  <span className="text-[13px] text-gray-500 w-16 text-right">-$0.00</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="bg-[#1e3a4a] text-white rounded-xl px-5 py-4 flex justify-between items-center">
                <span className="text-[15px] font-bold">Grand Total</span>
                <span className="text-[18px] font-bold">₹7,20,951.00</span>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3b82f6]" />
            <h2 className="text-[16px] font-bold text-[#1a233a] mb-4">Terms &amp; Conditions</h2>
            <textarea
              rows={4}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500 resize-none"
              placeholder=""
            />
          </div>

        </div>
      </div>

      {/* ── Fixed Footer ── */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-8 py-3 flex justify-end items-center gap-3">
        <button className="flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-md text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
          <Bookmark className="w-4 h-4" /> Save Draft
        </button>
        <button
          onClick={() => navigate('/purchase')}
          className="px-5 py-2 border border-gray-200 rounded-md text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => navigate('/purchase')}
          className="px-6 py-2 bg-blue-600 text-white rounded-md text-[13px] font-bold hover:bg-blue-700 transition-colors"
        >
          Save
        </button>
      </div>

    </div>
  );
};

export default CreatePurchaseOrderPage;
