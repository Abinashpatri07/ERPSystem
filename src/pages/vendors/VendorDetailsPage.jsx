import React from 'react';
import {
  Plus,
  MoreHorizontal,
  Search,
  ChevronDown,
  ChevronUp,
  Mail,
  Edit,
  FileText,
  MoreVertical,
} from 'lucide-react';

const BAR_DATA = [
  { day: 'Mon', value: 110 },
  { day: 'Tue', value: 195 },
  { day: 'Wed', value: 148 },
  { day: 'Thu', value: 78 },
  { day: 'Fri', value: 62 },
  { day: 'Sat', value: 105 },
  { day: 'Sun', value: 125 },
];
const MAX_VAL = 200;
const CHART_H = 220; // px — the usable bar area height

const VendorDetailsPage = () => {
  return (
    <main className="flex-1 flex overflow-hidden bg-white">

      {/* ── Left Sidebar ── */}
      <div className="w-72 flex-shrink-0 border-r border-gray-200 flex flex-col bg-white">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h2 className="text-[15px] font-bold text-[#1a233a]">All vendors</h2>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white rounded p-1.5 hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
            <button className="bg-gray-100 text-gray-600 rounded p-1.5 hover:bg-gray-200 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search customer, product or item..."
              className="w-full bg-gray-50 border border-gray-200 rounded-md pl-9 pr-3 py-2 text-[12px] text-gray-600 focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">

          {/* Active */}
          <div className="relative border border-blue-200 bg-[#f8f9fb] rounded-lg p-4 cursor-pointer overflow-hidden">
            <div className="absolute top-0 left-0 w-[3px] h-full bg-blue-600 rounded-l-lg" />
            <p className="text-[10px] text-gray-400 font-medium mb-1">25/06/2026</p>
            <p className="text-[12px] font-bold text-[#1a233a] leading-snug">MERIDIAN SUPPLIES CO.</p>
            <p className="text-[12px] font-bold text-[#1a233a] text-right mt-2">₹100.00</p>
          </div>




        </div>
      </div>

      {/* ── Right Content ── */}
      <div className="flex-1 bg-[#f4f7f9] overflow-y-auto">
        <div className="p-6 md:p-8 flex flex-col gap-6 pb-16">

          {/* Title */}
          <h1 className="text-[20px] font-bold text-[#1a233a]">Meridian Supplies Co.</h1>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* ── Bar Chart ── */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[14px] font-bold text-[#1a233a]">Income</h3>
                <button className="text-[12px] text-blue-600 border border-blue-200 rounded px-3 py-1 flex items-center gap-1 hover:bg-blue-50 transition-colors">
                  Last 6 month <ChevronDown className="w-3 h-3" strokeWidth={3} />
                </button>
              </div>
              {/* Chart with Y-axis */}
              <div className="flex mt-4">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between text-[11px] text-gray-400 pr-3 text-right select-none"
                  style={{ height: CHART_H }}>
                  {[200, 150, 100, 50, 0].map(v => <span key={v}>{v}</span>)}
                </div>

                {/* Chart body */}
                <div className="flex-1 relative" style={{ height: CHART_H }}>

                  {/* Dashed horizontal gridlines */}
                  {[0, 25, 50, 75, 100].map((pct, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-dashed border-gray-200"
                      style={{ top: `${pct}%` }}
                    />
                  ))}
                  {/* Solid bottom border */}
                  <div className="absolute left-0 right-0 bottom-0 border-t border-gray-300" />

                  {/* Bars area */}
                  <div className="absolute inset-0 flex items-end gap-2 pb-0">
                    {BAR_DATA.map(({ day, value }) => {
                      const barH = Math.round((value / MAX_VAL) * CHART_H);
                      return (
                        <div key={day} className="flex-1 flex items-end" style={{ height: CHART_H }}>
                          {/* Background ghost bar (light blue, full height) */}
                          <div className="w-full relative" style={{ height: CHART_H }}>
                            <div className="absolute bottom-0 left-0 right-0 bg-[#dbeafe] rounded-t-sm" style={{ height: CHART_H }} />
                            {/* Foreground solid bar */}
                            <div
                              className="absolute bottom-0 left-0 right-0 bg-[#3b82f6] rounded-t-sm hover:opacity-90 transition-opacity cursor-pointer"
                              style={{ height: barH }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex pl-10 gap-2 mt-1">
                {BAR_DATA.map(({ day }) => (
                  <div key={day} className="flex-1 text-center text-[11px] text-gray-400">{day}</div>
                ))}
              </div>
            </div>

            {/* ── Donut Chart ── */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center">

              {/* 32% badge */}
              <div className="self-end mb-1 flex flex-col items-center">
                <span className="bg-white border border-gray-200 shadow-sm rounded-full px-2.5 py-0.5 text-[11px] font-bold text-gray-700">
                  32%
                </span>
                <span className="w-2 h-2 bg-orange-400 rotate-45 -mt-1" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />
              </div>

              {/* SVG */}
              <div className="relative w-44 h-44 my-2">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#f1f5f9" strokeWidth="14" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#14b8a6" strokeWidth="14"
                    strokeDasharray="80 239" strokeDashoffset="0" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#6366f1" strokeWidth="14"
                    strokeDasharray="96 239" strokeDashoffset="-82" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#f97316" strokeWidth="14"
                    strokeDasharray="63 239" strokeDashoffset="-180" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[26px] font-extrabold text-[#1a233a] leading-none">3986</span>
                  <span className="text-[9px] text-gray-400 font-bold tracking-widest mt-1">PRODUCTS</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex gap-3 mt-3">
                <span className="px-4 py-1 bg-[#f97316] text-white text-[11px] font-bold rounded">A</span>
                <span className="px-4 py-1 bg-[#6366f1] text-white text-[11px] font-bold rounded">B</span>
                <span className="px-4 py-1 bg-[#14b8a6] text-white text-[11px] font-bold rounded">C</span>
              </div>
            </div>
          </div>

          {/* Vendor info row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-[18px] font-bold text-[#1a233a]">Meridian Supplies Co.</h2>
              <p className="text-[12px] text-gray-500 mt-1">Vendor ID: VND-00042 • Since Jan 12, 2023</p>
              <a
                href="mailto:rajiv.menon@brightsolutions.com"
                className="flex items-center gap-2 text-[13px] text-blue-600 mt-2 hover:underline"
              >
                <Mail className="w-4 h-4" />
                rajiv.menon@brightsolutions.com
              </a>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#475569] rounded-md text-[13px] font-semibold shadow-sm hover:bg-gray-50 transition-colors">
                <Edit className="w-4 h-4 text-gray-400" /> Edit
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#475569] rounded-md text-[13px] font-semibold shadow-sm hover:bg-gray-50 transition-colors">
                <FileText className="w-4 h-4 text-gray-400" /> New Bill
              </button>
              <button className="px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors">
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Address section */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3.5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[14px] font-bold text-[#1a233a]">Address</span>
              <ChevronUp className="w-5 h-5 text-gray-400" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">

              {/* Billing */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] text-gray-500">Billing Address</span>
                  <button className="flex items-center gap-1 text-[12px] text-blue-500 hover:underline">
                    <Edit className="w-3 h-3" /> Edit
                  </button>
                </div>
                <p className="text-[13px] text-[#1a233a] mb-2">Wholesale Business, Import, Supplier Of Services</p>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  648/A, OM Chambers,<br />
                  Binnamangala 1st Stage<br />
                  Bengaluru<br />
                  Bengaluru Urban<br />
                  Karnataka<br />
                  India<br />
                  560038
                </p>
              </div>

              {/* Shipping */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] text-gray-500">Shipping Address</span>
                  <button className="flex items-center gap-1 text-[12px] text-blue-500 hover:underline">
                    <Edit className="w-3 h-3" /> Edit
                  </button>
                </div>
                <p className="text-[13px] text-[#1a233a] mb-2">Wholesale Business, Import, Supplier Of Services</p>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  648/A, OM Chambers,<br />
                  Binnamangala 1st Stage<br />
                  Bengaluru<br />
                  Bengaluru Urban<br />
                  Karnataka<br />
                  India<br />
                  560038
                </p>
              </div>

            </div>
          </div>

          {/* Other Details */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-6">
            <div className="flex justify-between items-center px-5 py-3.5 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[14px] font-bold text-[#1a233a]">Other Details</span>
              <ChevronUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-5">
              <div className="border border-gray-100 rounded-lg p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <span className="block text-[11px] text-gray-400 font-medium mb-1">Customer Type</span>
                    <span className="block text-[13px] font-bold text-[#1a233a]">Business</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-gray-400 font-medium mb-1">Portal Status</span>
                    <span className="block text-[13px] font-bold text-[#1a233a]">Active</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-gray-400 font-medium mb-1">Sales Region</span>
                    <span className="block text-[13px] font-bold text-[#1a233a]">South India</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-gray-400 font-medium mb-1">PAN</span>
                    <span className="block text-[13px] font-bold text-[#1a233a]">AANCC7891H</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-gray-400 font-medium mb-1">Customer Language</span>
                    <span className="block text-[13px] font-bold text-[#1a233a]">English, Hindi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Persons */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-4">
            <div className="flex justify-between items-center px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[14px] font-bold text-[#1a233a]">Contact Persons</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Bank Account Details */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-4">
            <div className="flex justify-between items-center px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[14px] font-bold text-[#1a233a]">Bank Account Details</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Record Info */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-4">
            <div className="flex justify-between items-center px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[14px] font-bold text-[#1a233a]">Record Info</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>

        </div>
      </div>

    </main>
  );
};

export default VendorDetailsPage;
