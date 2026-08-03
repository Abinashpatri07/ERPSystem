import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreHorizontal, Mail, ExternalLink, ChevronUp, ChevronDown, Edit } from 'lucide-react';

const CustomerDetailsPage = () => {
  const navigate = useNavigate();
  const [addressExpanded, setAddressExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('Order History');

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
          {/* Customer List Item */}
          <div className="bg-white border border-gray-200 rounded-[10px] p-4 cursor-pointer hover:border-gray-300 transition-colors shadow-sm mb-3">
            <div className="mb-2">
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">25/08/2026</span>
            </div>
            <h3 className="text-[11px] font-extrabold text-[#1a233a] mb-4 uppercase leading-snug tracking-tight">
              CLIMAMAX CONTROLS PRIVATE LIMITED
            </h3>
            <div className="text-right">
              <span className="text-[12px] font-extrabold text-[#1a233a]">₹100.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Area (Details) ── */}
      <div className="flex-1 min-w-0 bg-[#f4f7f9] overflow-y-auto">
        <div className="p-6 lg:p-8 space-y-6">
          
          {/* Header Section */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-[20px] font-bold text-[#1a233a] uppercase">CLIMAMAX CONTROLS PRIVATE LIMITED</h1>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
              <span className="text-[13px] text-gray-500 font-medium">CLIC-01142</span>
              <span className="px-2.5 py-1 bg-[#e6f4fc] text-[#2a8ebd] text-[11px] font-bold rounded-full">In Good Standing</span>
            </div>
            
            <div className="text-[12px] text-gray-500 mt-4 font-medium">
              FMCG • Export & Domestic • Onboarded 14-Mar-2022 • Owner: R. Sharma (KAM)
            </div>

            <div className="mt-5 text-[16px] text-[#1a233a]">
              Total Order : <span className="font-bold text-[#0ea5e9] text-[20px]">₹4.86 Cr</span>
            </div>

            {/* Stat Cards */}
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              <div className="bg-[#fcfdff] rounded-lg p-5 min-w-[170px] border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex-1">
                <div className="text-[11px] text-gray-400 font-bold mb-2">Lifetime Value</div>
                <div className="text-[22px] font-bold text-[#1a233a]">₹4.86 <span className="text-[13px] font-bold">CR</span></div>
                <div className="text-[10px] text-gray-400 mt-2 font-medium">Since Mar 2022</div>
              </div>
              <div className="bg-[#fcfdff] rounded-lg p-5 min-w-[170px] border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex-1">
                <div className="text-[11px] text-gray-400 font-bold mb-2">Outstanding Balance</div>
                <div className="text-[22px] font-bold text-[#1a233a]">₹18.4 <span className="text-[13px] font-bold">L</span></div>
                <div className="text-[10px] text-gray-400 mt-2 font-medium">Within Credit Terms</div>
              </div>
              <div className="bg-[#fcfdff] rounded-lg p-5 min-w-[170px] border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex-1">
                <div className="text-[11px] text-gray-400 font-bold mb-2">Credit Limit / Period</div>
                <div className="text-[22px] font-bold text-[#1a233a]">₹40 <span className="text-[13px] font-bold">L</span></div>
                <div className="text-[10px] text-gray-400 mt-2 font-medium">45 Days</div>
              </div>
              <div className="bg-[#fcfdff] rounded-lg p-5 min-w-[170px] border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex-1">
                <div className="text-[11px] text-gray-400 font-bold mb-2">On-Time Delivery</div>
                <div className="text-[22px] font-bold text-green-600">96.2%</div>
                <div className="text-[10px] text-gray-400 mt-2 font-medium">Last 12 Months</div>
              </div>
              <div className="bg-[#fcfdff] rounded-lg p-5 min-w-[170px] border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex-1">
                <div className="text-[11px] text-gray-400 font-bold mb-2">Last Order</div>
                <div className="text-[22px] font-bold text-[#1a233a]">3 <span className="text-[13px] font-bold uppercase">Days Ago</span></div>
                <div className="text-[10px] text-gray-400 mt-2 font-medium">SO-11294 • ₹6.2 L</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-gray-200 mt-6 pb-2">
            {['Overview', 'Commercial Terms', 'Box Specifications', 'Order History'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-[13px] ${
                  activeTab === tab
                    ? 'font-bold text-white bg-[#366c82] shadow-sm rounded-md'
                    : 'font-medium text-gray-400 hover:text-gray-600 transition-colors'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content - Overview */}
          {activeTab === 'Overview' && (
          <div className="mt-6 space-y-6">
            
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
                <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 bg-white text-blue-600 rounded-md text-[13px] font-semibold hover:bg-blue-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Invite To Portal
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-[13px] font-semibold hover:bg-blue-700 transition-colors">
                  <Mail className="w-4 h-4" />
                  Send Email
                </button>
              </div>
            </div>

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
                      <span className="text-[12px] font-semibold text-gray-500">Biling Address</span>
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

            {/* Contacts Directory */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-[15px] font-bold text-[#1a233a] mb-6">Contacts Directory</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[13px] font-bold text-gray-600">
                        SK
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-[#1a233a]">Suresh Kulkarni</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">Purchase Manager • Purchase</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-500 text-[12px] bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 98220 44102
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-[12px] bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <Mail className="w-3.5 h-3.5" />
                        s.kulkarni@veenafoods.in
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-[15px] font-bold text-[#1a233a] mb-6">Bank Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px] text-left">
                  <thead>
                    <tr className="text-gray-500 font-medium border-b border-gray-100">
                      <th className="pb-3 px-2">Bank Name</th>
                      <th className="pb-3 px-2">Account Holder Name</th>
                      <th className="pb-3 px-2">Account No</th>
                      <th className="pb-3 px-2">IFSC Code</th>
                      <th className="pb-3 px-2">Open Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#1a233a]">
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-2 font-medium">HDFC Bank</td>
                      <td className="py-4 px-2 text-gray-600">Climamex Private Limited</td>
                      <td className="py-4 px-2 font-medium">123456789012</td>
                      <td className="py-4 px-2 text-gray-600">HDFC0000123</td>
                      <td className="py-4 px-2 text-gray-600">01-Jul-2026</td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-2 font-medium">IDFC Bank</td>
                      <td className="py-4 px-2 text-gray-600">Niman Private Limited</td>
                      <td className="py-4 px-2 font-medium">123456789012</td>
                      <td className="py-4 px-2 text-gray-600">IDFC0000223</td>
                      <td className="py-4 px-2 text-gray-600">07-Jul-2026</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-2 font-medium">ICICI Bank</td>
                      <td className="py-4 px-2 text-gray-600">Godrej Private Limited</td>
                      <td className="py-4 px-2 font-medium">123456789012</td>
                      <td className="py-4 px-2 text-gray-600">ICICI0000333</td>
                      <td className="py-4 px-2 text-gray-600">12-Jul-2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
          )}

          {/* Tab Content - Commercial Terms */}
          {activeTab === 'Commercial Terms' && (
            <div className="mt-6 space-y-8">
              
              {/* Credit & Payment */}
              <div>
                <h3 className="text-[15px] font-bold text-[#1a233a] mb-4">Credit & Payment</h3>
                <div className="flex flex-nowrap gap-4 overflow-x-auto pb-2">
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Credit Limit</div>
                    <div className="text-[16px] font-bold text-[#1a233a] mb-4">₹40,00,000</div>
                    <div className="text-[10px] font-bold text-gray-500 mb-1">Overdue Status</div>
                    <div className="inline-flex px-2 py-0.5 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full">
                      No overdue
                    </div>
                  </div>
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Credit Period</div>
                    <div className="text-[14px] font-medium text-gray-800 mb-4">45 Days</div>
                    <div className="text-[10px] font-bold text-gray-500 mb-1">Available Credit</div>
                    <div className="text-[13px] font-bold text-[#1a233a]">₹21,60,000</div>
                  </div>
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Payment Terms</div>
                    <div className="text-[14px] font-medium text-gray-800">Credit — Post Delivery</div>
                  </div>
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Outstanding Balance</div>
                    <div className="text-[14px] font-medium text-gray-800">₹18,40,000</div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-[15px] font-bold text-[#1a233a] mb-4">Pricing</h3>
                <div className="flex flex-nowrap gap-4 overflow-x-auto pb-2">
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Rate Category</div>
                    <div className="text-[14px] font-medium text-gray-800">Negotiated — Key Account</div>
                  </div>
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Price List</div>
                    <div className="text-[14px] font-medium text-gray-800">PL-KA-2026-Q3</div>
                  </div>
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Standard Discount</div>
                    <div className="text-[14px] font-medium text-gray-800">3.5% on Invoice value</div>
                  </div>
                  <div className="bg-white border border-[#c4d6eb] rounded-xl p-5 min-w-[200px] flex-1">
                    <div className="text-[12px] font-medium text-gray-700 mb-2">Volume Slab Pricing</div>
                    <div className="text-[13px] font-medium text-gray-600 leading-snug">Applicable above 50,000<br/>boxes/order</div>
                  </div>
                </div>
              </div>

              {/* Recent Payment Activity */}
              <div>
                <h3 className="text-[15px] font-bold text-[#1a233a] mb-4">Recent Payment Activity</h3>
                <div className="bg-white rounded-xl border border-[#c4d6eb] overflow-hidden">
                  <table className="w-full text-left text-[12px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-medium">
                        <th className="py-4 px-6 font-medium">Invoice No.</th>
                        <th className="py-4 px-6 font-medium">Amount</th>
                        <th className="py-4 px-6 font-medium">Due Date</th>
                        <th className="py-4 px-6 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#1a233a]">
                      <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">INV-8821</td>
                        <td className="py-4 px-6 font-bold">₹6,20,000</td>
                        <td className="py-4 px-6 font-medium text-gray-600">05-Aug-2026</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100">Pending</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">INV-8790</td>
                        <td className="py-4 px-6 font-bold">₹4,10,000</td>
                        <td className="py-4 px-6 font-medium text-gray-600">18-Jul-2026</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full border border-green-100">Paid</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">INV-8754</td>
                        <td className="py-4 px-6 font-bold">₹8,10,000</td>
                        <td className="py-4 px-6 font-medium text-gray-600">02-Jul-2026</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full border border-green-100">Paid</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* Tab Content - Box Specifications */}
          {activeTab === 'Box Specifications' && (
            <div className="mt-6 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                
                {/* Header Area */}
                <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-6">
                  <div>
                    <div className="inline-flex px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded mb-3">
                      BOX-VF-3PLY-001
                    </div>
                    <h3 className="text-[20px] font-bold text-[#1a233a]">5kg Master Export Carton (Biscuits & Snacks)</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[#1a233a] font-bold text-[28px] leading-none mb-1">
                      ₹42.50 <span className="text-[12px] text-gray-500 font-medium">/ box</span>
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">Monthly Vol: 45,000 pcs</div>
                  </div>
                </div>

                {/* Cards Area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1 */}
                  <div className="bg-[#fafffb] border border-[#bbf7d0] rounded-xl p-5 relative">
                    <div className="absolute top-5 right-5 inline-flex px-2 py-0.5 bg-[#bbf7d0] text-[#166534] text-[10px] font-bold rounded-full">
                      Active
                    </div>
                    <h4 className="text-[14px] font-bold text-[#1a233a] mb-4 pr-16">RSC 5-Ply Export Box</h4>
                    <div className="text-[12px] text-gray-500 font-medium mb-4 space-y-1">
                      <div className="text-gray-600">SPEC-VF-0142</div>
                      <div>400 × 300 × 250 mm</div>
                      <div>150/120/100/120/150</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full">Die-0219</span>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full">2 Color Print</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#fafffb] border border-[#bbf7d0] rounded-xl p-5 relative">
                    <div className="absolute top-5 right-5 inline-flex px-2 py-0.5 bg-[#bbf7d0] text-[#166534] text-[10px] font-bold rounded-full">
                      Active
                    </div>
                    <h4 className="text-[14px] font-bold text-[#1a233a] mb-4 pr-16">HSC 3-Ply Retail Box</h4>
                    <div className="text-[12px] text-gray-500 font-medium mb-4 space-y-1">
                      <div className="text-gray-600">SPEC-VF-0098</div>
                      <div>300 × 220 × 180 mm</div>
                      <div>Flute C · GSM 150/120/150</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full">Die-0229</span>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full">3 Color Print</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#fff9f5] border border-[#fed7aa] rounded-xl p-5 relative">
                    <div className="absolute top-5 right-5 inline-flex px-2 py-0.5 bg-[#ffedd5] text-[#c2410c] text-[10px] font-bold rounded-full">
                      Under Review
                    </div>
                    <h4 className="text-[14px] font-bold text-[#1a233a] mb-4 pr-20">Die-Cut Mailer Box</h4>
                    <div className="text-[12px] text-gray-500 font-medium mb-4 space-y-1">
                      <div className="text-gray-600">SPEC-VF-0077</div>
                      <div>250 × 180 × 90 mm</div>
                      <div>Flute E · GSM 150/100/150</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full">Die-0229</span>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full">3 Color Print</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* Tab Content - Order History */}
          {activeTab === 'Order History' && (
            <div className="mt-6 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-[16px] font-bold text-[#1a233a] mb-6">History</h3>
                
                <div className="overflow-hidden border border-gray-200 rounded-xl">
                  <table className="w-full text-left text-[12px]">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase text-[10px]">
                        <th className="py-4 px-6">Order No.</th>
                        <th className="py-4 px-6">Date</th>
                        <th className="py-4 px-6">Box Spec</th>
                        <th className="py-4 px-6">Quantity</th>
                        <th className="py-4 px-6">Value</th>
                        <th className="py-4 px-6">Delivery Status</th>
                        <th className="py-4 px-6">Payment Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#1a233a]">
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">SO-11294</td>
                        <td className="py-4 px-6 font-medium text-gray-600">27-Jul-2026</td>
                        <td className="py-4 px-6 font-medium text-gray-700">RSC 5-Ply Export Box</td>
                        <td className="py-4 px-6 font-bold">25,000</td>
                        <td className="py-4 px-6 font-medium">₹6,20,000</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full">Delivered</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full">Pending</span>
                        </td>
                      </tr>
                      
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">SO-11268</td>
                        <td className="py-4 px-6 font-medium text-gray-600">19-Jul-2026</td>
                        <td className="py-4 px-6 font-medium text-gray-700">HSC 3-Ply Retail Box</td>
                        <td className="py-4 px-6 font-bold">62,000</td>
                        <td className="py-4 px-6 font-medium">₹9,90,000</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#ffedd5] text-[#c2410c] text-[10px] font-bold rounded-full">Partially Dispatched</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full">Paid</span>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">SO-11201</td>
                        <td className="py-4 px-6 font-medium text-gray-600">02-Jul-2026</td>
                        <td className="py-4 px-6 font-medium text-gray-700">Die-Cut Mailer Box</td>
                        <td className="py-4 px-6 font-bold">18,600</td>
                        <td className="py-4 px-6 font-medium">₹4,10,000</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full">Delivered</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full">Paid</span>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">SO-11150</td>
                        <td className="py-4 px-6 font-medium text-gray-600">14-Jun-2026</td>
                        <td className="py-4 px-6 font-medium text-gray-700">RSC 5-Ply Export Box</td>
                        <td className="py-4 px-6 font-bold">30,000</td>
                        <td className="py-4 px-6 font-medium">₹7,45,000</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full">Delivered</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-[#e0f5e7] text-[#16a34a] text-[10px] font-bold rounded-full">Paid</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">SO-11042</td>
                        <td className="py-4 px-6 font-medium text-gray-600">28-May-2026</td>
                        <td className="py-4 px-6 font-medium text-gray-700">RSC 3-Ply Bulk Pack</td>
                        <td className="py-4 px-6 font-bold">12,000</td>
                        <td className="py-4 px-6 font-medium">₹2,18,000</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full">Cancelled</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full">N/A</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
