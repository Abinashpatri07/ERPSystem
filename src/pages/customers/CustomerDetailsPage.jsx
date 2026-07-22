import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreHorizontal, Edit, Mail, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

const CustomerDetailsPage = () => {
  const navigate = useNavigate();
  const [addressExpanded, setAddressExpanded] = useState(true);
  const [otherDetailsExpanded, setOtherDetailsExpanded] = useState(true);

  return (
    <div className="flex h-full bg-[#f8fafc] overflow-hidden">
      
      {/* ── Left Sidebar (List) ── */}
      <div className="w-full lg:w-[320px] shrink-0 flex flex-col border-r border-gray-200 bg-white">
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-bold text-[#1a233a]">All Customer</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => navigate('/customers/new')}
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
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 hide-scrollbar">
          {/* Active List Item */}
          <div className="bg-white border-2 border-blue-500 rounded-lg p-4 cursor-pointer shadow-sm relative mb-3">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[11px] text-gray-500">25/06/2026</span>
            </div>
            <h3 className="text-[13px] font-bold text-[#1a233a] mb-4 uppercase truncate">CLIMAMAX CONTROLS PRIVATE LIMITED</h3>
            <div className="flex justify-end items-center text-[12px]">
              <span className="font-bold text-[#1a233a]">₹100.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Area (Details) ── */}
      <div className="flex-1 min-w-0 bg-[#f4f7f9] overflow-y-auto">
        <div className="p-6 lg:p-8 space-y-6">
          
          <h1 className="text-[20px] font-bold text-[#1a233a] uppercase">CLIMAMAX CONTROLS PRIVATE LIMITED</h1>

          {/* Charts Row */}
          <div className="grid grid-cols-[1fr_300px] gap-6 items-stretch">
            
            {/* Income Bar Chart Box */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col relative h-[320px]">
              <div className="flex justify-between items-center mb-8 relative z-10">
                <h3 className="text-[16px] font-bold text-[#1a233a]">Income</h3>
                <button className="flex items-center gap-1 px-3 py-1.5 text-[12px] font-medium text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50">
                  Last 6 month
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Mock Bar Chart */}
              <div className="flex-1 relative mt-4 ml-8 mb-6">
                
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between z-0 border-l border-b border-gray-300">
                  <div className="border-t border-dashed border-gray-300 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-gray-500 w-6 text-right">200</span></div>
                  <div className="border-t border-dashed border-gray-300 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-gray-500 w-6 text-right">150</span></div>
                  <div className="border-t border-dashed border-gray-300 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-gray-500 w-6 text-right">100</span></div>
                  <div className="border-t border-dashed border-gray-300 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-gray-500 w-6 text-right">50</span></div>
                  <div className="w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-gray-500 w-6 text-right">0</span></div>
                </div>

                {/* Columns Container */}
                <div className="absolute inset-0 z-10 flex border-r border-dashed border-gray-300">
                  {[{h:'60%',l:'Mon'}, {h:'98%',l:'Tue'}, {h:'75%',l:'Wed'}, {h:'40%',l:'Thu'}, {h:'35%',l:'Fri'}, {h:'55%',l:'Sat'}, {h:'65%',l:'Sun'}].map((bar, i) => (
                    <div key={i} className="flex-1 border-l border-dashed border-gray-300 relative flex justify-center h-full">
                      
                      {/* Bar Wrapper */}
                      <div className="relative w-7 h-full flex flex-col justify-end">
                        {/* Background Bar */}
                        <div className="absolute inset-0 bg-[#f4f9ff]"></div>
                        {/* Solid Bar */}
                        <div className="relative w-full bg-[#3b82f6] rounded-t-sm" style={{height: bar.h}}></div>
                      </div>

                      {/* Label */}
                      <span className="absolute -bottom-6 text-[11px] text-gray-400 font-medium">{bar.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Donut Chart Box */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center relative h-[320px]">
              
              <div className="relative w-48 h-48 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#fb923c" strokeWidth="12" strokeDasharray="78 173.2" transform="rotate(-90 50 50)"></circle>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#6366f1" strokeWidth="12" strokeDasharray="83 168.2" transform="rotate(25 50 50)"></circle>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#34d399" strokeWidth="12" strokeDasharray="83 168.2" transform="rotate(147 50 50)"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[24px] font-bold text-[#1a233a] leading-none">3986</span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-wider mt-1">PRODUCTS</span>
                </div>
                {/* Small popup tag */}
                <div className="absolute top-2 right-2 bg-white shadow-sm border border-gray-100 rounded-md px-2 py-0.5 text-[11px] font-bold text-[#1a233a]">
                  32%
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-10 h-4 bg-[#fb923c] rounded text-[10px] text-white flex items-center justify-center font-bold">A</span>
                <span className="w-10 h-4 bg-[#6366f1] rounded text-[10px] text-white flex items-center justify-center font-bold">B</span>
                <span className="w-10 h-4 bg-[#34d399] rounded text-[10px] text-white flex items-center justify-center font-bold">C</span>
              </div>
            </div>

          </div>

          {/* Contact Box */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-[18px] font-bold text-[#1a233a] mb-3">Mr. Bikas Patro</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-500 text-[13px]">
                  <Mail className="w-3.5 h-3.5" />
                  <a href="mailto:bikas@climamax.com" className="hover:underline">bikas@climamax.com</a>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-[13px]">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91-8763003435</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 bg-blue-50 text-blue-600 rounded-md text-[13px] font-semibold hover:bg-blue-100 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Invite To Portal
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-[13px] font-semibold hover:bg-blue-700 transition-colors">
                <Mail className="w-4 h-4" />
                Send Email
              </button>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            
            {/* Address Section */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setAddressExpanded(!addressExpanded)}
                className="w-full flex items-center justify-between p-4 bg-[#f8fafc] hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-[#1a233a] text-[14px]">Address</span>
                {addressExpanded ? <ChevronUp className="w-5 h-5 text-[#1a233a]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              
              {addressExpanded && (
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Billing Address */}
                  <div className="border border-gray-200 rounded-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[12px] font-semibold text-gray-500">Billing Address</span>
                      <button className="flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline">
                        <Edit className="w-3 h-3" /> Edit
                      </button>
                    </div>
                    <h4 className="font-bold text-[#1a233a] text-[14px] mb-3">Wholesale Business, Import, Supplier Of Services</h4>
                    <p className="text-[13px] text-gray-700 leading-relaxed">
                      648/A, OM Chambers,<br/>
                      Binnamangala 1st Stage<br/>
                      Bengaluru<br/>
                      Bengaluru Urban<br/>
                      Karnataka<br/>
                      India<br/>
                      560038
                    </p>
                  </div>

                  {/* Shipping Address */}
                  <div className="border border-gray-200 rounded-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[12px] font-semibold text-gray-500">Shipping Address</span>
                      <button className="flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline">
                        <Edit className="w-3 h-3" /> Edit
                      </button>
                    </div>
                    <h4 className="font-bold text-[#1a233a] text-[14px] mb-3">Wholesale Business, Import, Supplier Of Services</h4>
                    <p className="text-[13px] text-gray-700 leading-relaxed">
                      648/A, OM Chambers,<br/>
                      Binnamangala 1st Stage<br/>
                      Bengaluru<br/>
                      Bengaluru Urban<br/>
                      Karnataka<br/>
                      India<br/>
                      560038
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Other Details Section */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setOtherDetailsExpanded(!otherDetailsExpanded)}
                className="w-full flex items-center justify-between p-4 bg-[#f8fafc] hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-[#1a233a] text-[14px]">Other Details</span>
                {otherDetailsExpanded ? <ChevronUp className="w-5 h-5 text-[#1a233a]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              
              {otherDetailsExpanded && (
                <div className="p-6">
                  <div className="border border-gray-200 rounded-lg p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8">
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium mb-1">Customer Type</div>
                      <div className="text-[13px] font-bold text-[#1a233a]">Business</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium mb-1">Portal Status</div>
                      <div className="text-[13px] font-bold text-[#1a233a]">Active</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium mb-1">Sales Region</div>
                      <div className="text-[13px] font-bold text-[#1a233a]">South India</div>
                    </div>
                    <div className="hidden lg:block"></div> {/* empty for grid spacing */}
                    
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium mb-1">PAN</div>
                      <div className="text-[13px] font-bold text-[#1a233a]">AANCC7891H</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium mb-1">Customer Language</div>
                      <div className="text-[13px] font-bold text-[#1a233a]">English, Hindi</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Collapsed Sections */}
            {['Contact Persons', 'Bank Account Details', 'Record Info'].map(title => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full flex items-center justify-between p-4 bg-[#f8fafc] hover:bg-gray-100 transition-colors">
                  <span className="font-bold text-[#1a233a] text-[14px]">{title}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            ))}

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
