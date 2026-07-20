import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bookmark, 
  ChevronDown, 
  Mail,
  Globe2,
  UploadCloud,
  Copy
} from 'lucide-react';

const CreateVendorPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Other Details');

  const tabs = [
    'Other Details',
    'Billing & Delivery Address',
    'Contact Person',
    'Remark & Audit Log'
  ];

  return (
    <main className="flex-1 overflow-hidden bg-[#f8f9fb] flex flex-col relative">
      
      {/* Top Banner - Fixed/Constant */}
      <div className="p-4 md:px-8 md:pt-8 flex-shrink-0 z-10">
        <div className="bg-[#244f5d] text-white p-6 md:p-8 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-wide leading-tight mb-2">
              New Vendor
            </h2>
            <p className="text-[#8cb6c4] text-sm">
              Standardize customer data, bank accounts, and geographical sales tags.
            </p>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-3">
              1
            </span>
            <span className="text-blue-600 font-bold text-sm">Vendor Creation</span>
          </div>
        </div>
      </div>

      {/* Main Form Container - Scrollable */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar">
        
        {/* Main Form Box */}
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 border-t-[4px] border-t-blue-600 overflow-hidden mb-6">
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-[#1a233a]">Vendor Details</h3>
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium border border-green-100">
                Draft — Auto-saving
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              
              {/* Primary Contact */}
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-bold text-gray-700 w-48 mb-2 md:mb-0 shrink-0">
                  Primary Contact <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-1 space-x-4">
                  <div className="relative w-32 shrink-0">
                    <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                      <option></option>
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" 
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" 
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-bold text-gray-700 w-48 mb-2 md:mb-0 shrink-0">
                  Company Name
                </label>
                <input 
                  type="text" 
                  className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" 
                />
              </div>

              {/* Vendor Display Name */}
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-bold text-gray-700 w-48 mb-2 md:mb-0 shrink-0">
                  Vendor Display Name <span className="text-red-500">*</span>
                </label>
                <div className="flex-1 relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                    <option></option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Vendor Email */}
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-bold text-gray-700 w-48 mb-2 md:mb-0 shrink-0">
                  Vendor Email
                </label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input 
                    type="email" 
                    className="w-full border border-[#c4d6eb] rounded-md pl-10 pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" 
                  />
                </div>
              </div>

              {/* Vendor Phone */}
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-bold text-gray-700 w-48 mb-2 md:mb-0 shrink-0">
                  Vendor Phone
                </label>
                <div className="flex flex-1 space-x-4">
                  <input type="text" placeholder="Work Phone" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" />
                  <input type="text" placeholder="Mobile" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              {/* Website */}
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-bold text-gray-700 w-48 mb-2 md:mb-0 shrink-0">
                  Website
                </label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <Globe2 className="w-4 h-4" />
                  </span>
                  <input 
                    type="url" 
                    className="w-full border border-[#c4d6eb] rounded-md pl-10 pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" 
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-100">
            <div className="flex px-8 space-x-6 border-b border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-8">

              {/* === OTHER DETAILS TAB === */}
              {activeTab === 'Other Details' && (
                <div className="grid grid-cols-2 gap-x-16 gap-y-6">

                  {/* Left Column */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      PAN <span className="text-gray-600">*</span>
                    </label>
                    <div className="flex-1 relative">
                      <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                        <option></option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      TDS <span className="text-gray-600">*</span>
                    </label>
                    <div className="flex-1 relative">
                      <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                        <option></option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      MSME Registered? <span className="text-gray-600">*</span>
                    </label>
                    <div className="flex-1 flex items-center">
                      <label className="flex items-center cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="msme" className="peer sr-only" />
                          <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-600 group-hover:border-blue-400 flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                          </div>
                        </div>
                        <span className="ml-2.5 text-[13px] text-[#1a233a]">This Vendor Is MSME Registered</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      Enable Portal?
                    </label>
                    <div className="flex-1 flex items-center">
                      <label className="flex items-center cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="portal" className="peer sr-only" />
                          <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-600 group-hover:border-blue-400 flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                          </div>
                        </div>
                        <span className="ml-2.5 text-[13px] text-[#1a233a]">Allow Portal Access For This Vendor</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      Currency<span className="text-gray-600">*</span>
                    </label>
                    <div className="flex-1 relative">
                      <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                        <option>INR - Indian Rupees</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0 pt-2">
                      Documents<span className="text-gray-600">*</span>
                    </label>
                    <div className="flex-1">
                      <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                        <UploadCloud className="w-6 h-6 text-gray-500 mb-2" strokeWidth={2} />
                        <p className="text-[13px] font-bold text-[#1a233a]">Click To Upload File</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      Accounts Payable
                    </label>
                    <div className="flex-1">
                      <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500" />
                    </div>
                  </div>

                  <div></div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      Opening Balance <span className="text-gray-600">*</span>
                    </label>
                    <div className="flex-1 relative">
                      <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                        <option>INR  0.00</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div></div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <label className="text-[13px] font-bold text-[#1a233a] w-40 mb-2 md:mb-0 shrink-0">
                      Payment Terms<span className="text-gray-600">*</span>
                    </label>
                    <div className="flex-1 relative">
                      <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white">
                        <option></option>
                        <option>Net 15</option>
                        <option>Net 30</option>
                        <option>Net 45</option>
                        <option>Net 60</option>
                        <option>Due On Receipt</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                </div>
              )}

              {/* === BILLING & DELIVERY ADDRESS TAB === */}
              {activeTab === 'Billing & Delivery Address' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  
                  {/* Billing Address */}
                  <div>
                    <h3 className="text-[15px] font-bold text-[#1a233a] mb-6">Billing Address</h3>
                    <div className="space-y-5">
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Attention</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Country / Region</label>
                        <div className="relative">
                          <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white shadow-sm">
                            <option>India</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Address</label>
                        <textarea rows="2" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm resize-none" placeholder="Street 1"></textarea>
                        <textarea rows="2" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm resize-none mt-3" placeholder="Street 2"></textarea>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">City</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">State</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Zip Code</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Phone</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Fax</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-[15px] font-bold text-[#1a233a]">Shipping Address</h3>
                      <button className="text-[12px] font-semibold text-blue-600 flex items-center hover:underline">
                        <Copy className="w-3.5 h-3.5 mr-1" />
                        Copy billing address
                      </button>
                    </div>
                    <div className="space-y-5">
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Attention</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Country / Region</label>
                        <div className="relative">
                          <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 appearance-none bg-white shadow-sm">
                            <option>India</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Address</label>
                        <textarea rows="2" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm resize-none" placeholder="Street 1"></textarea>
                        <textarea rows="2" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm resize-none mt-3" placeholder="Street 2"></textarea>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">City</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">State</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Zip Code</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Phone</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Fax</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" />
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* === OTHER TABS PLACEHOLDER === */}
              {activeTab !== 'Other Details' && activeTab !== 'Billing & Delivery Address' && (
                <div className="h-64 flex items-center justify-center text-gray-400 italic">
                  {activeTab} content will go here.
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Footer Actions - Constant at bottom */}
      <div className="flex-shrink-0 bg-[#f8f9fb] p-4 md:px-8 pb-8 pt-4 flex justify-end items-center space-x-3 z-10 border-t border-gray-200/50">
        <button className="flex items-center px-4 py-2 bg-[#f4f6f8] text-[#1a233a] rounded-md text-sm font-bold hover:bg-[#e2e8f0] transition-colors">
          <Bookmark className="w-4 h-4 mr-2 text-[#475569]" strokeWidth={2.5} />
          Save Draft
        </button>
        <button 
          onClick={() => navigate('/vendors')}
          className="px-6 py-2 bg-white border border-gray-200 text-[#1a233a] rounded-md text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm"
        >
          Cancel
        </button>
        <button 
          onClick={() => navigate('/vendors')}
          className="px-8 py-2 bg-[#2563eb] text-white rounded-md text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
        >
          Save
        </button>
      </div>

    </main>
  );
};

export default CreateVendorPage;
