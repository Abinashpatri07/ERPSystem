import React, { useState } from 'react';
import { Mail, ChevronDown, Bookmark, Globe, Check, UploadCloud, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateCustomerPage = () => {
  const navigate = useNavigate();
  const [customerType, setCustomerType] = useState('Business');
  const [activeTab, setActiveTab] = useState('Other Details');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const tabs = ['Other Details', 'Billing & Delivery Address', 'Contact Person', 'Remark & Audit Log'];

  return (
    <main className="flex-1 overflow-y-auto bg-[#f8f9fb] m-4 flex flex-col relative">
      
      {/* Top Banner with Stepper */}
      <div className="bg-[#244f5d] text-white p-6 mb-4 rounded-xl flex items-center justify-between shadow-sm">
        <h2 className="text-2xl font-bold tracking-wide leading-tight max-w-xs">
          Create New Customer Profile
        </h2>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-[#e5f0fe] text-[#244f5d] px-4 py-2 rounded-full font-medium text-sm shadow-sm">
            <span className="w-6 h-6 rounded-full bg-[#244f5d] text-white flex items-center justify-center text-xs mr-2">1</span>
            Customer Creation
          </div>
        </div>
      </div>

      {/* Form Area wrapped in the blue-bordered card */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-24"> {/* pb-24 to ensure space for fixed footer */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-[3px] border-t-blue-600 p-8">
          <form className="max-w-4xl space-y-6">
            
            {/* Customer Type */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium text-[#1a233a]">Customer Type <span className="text-red-500">*</span></label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer text-sm text-[#1a233a]">
                  <input 
                    type="radio" 
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-2" 
                    checked={customerType === 'Business'}
                    onChange={() => setCustomerType('Business')}
                  />
                  Business
                </label>
                <label className="flex items-center cursor-pointer text-sm text-[#1a233a]">
                  <input 
                    type="radio" 
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-2" 
                    checked={customerType === 'Individual'}
                    onChange={() => setCustomerType('Individual')}
                  />
                  Individual
                </label>
              </div>
            </div>

            {/* Primary Contact */}
            <div className="flex items-start">
              <label className="w-48 text-sm font-medium text-[#1a233a] mt-3">Primary Contact <span className="text-red-500">*</span></label>
              <div className="flex-1 flex items-center space-x-4">
                <div className="relative w-32">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option></option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Dr.</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
                <input type="text" placeholder="First Name" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
                <input type="text" placeholder="Last Name" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
              </div>
            </div>

            {/* Company Name */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium text-[#1a233a]">Company Name <span className="text-red-500">*</span></label>
              <input type="text" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
            </div>

            {/* Display Name */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium text-[#1a233a]">Display Name <span className="text-red-500">*</span></label>
              <div className="relative flex-1">
                <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                  <option></option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium text-[#1a233a]">Email Address <span className="text-red-500">*</span></label>
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Mail className="w-4 h-4 text-[#1a233a]" />
                </span>
                <input type="email" className="w-full border border-[#c4d6eb] rounded-md pl-11 pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium text-[#1a233a]">Primary Number <span className="text-red-500">*</span></label>
              <div className="flex-1 flex items-center space-x-6">
                
                <div className="flex flex-1 relative">
                  <div className="absolute inset-y-0 left-0 flex items-center justify-center border-r border-[#c4d6eb] bg-gray-50 rounded-l-md px-3 text-sm text-gray-500">
                    +91
                  </div>
                  <input type="text" placeholder="Work Number" className="w-full pl-13 border border-[#c4d6eb] rounded-md pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
                </div>

                <div className="flex items-center flex-1">
                  <label className="text-sm font-medium text-[#1a233a] mr-4">Secondary</label>
                  <div className="flex flex-1 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center border-r border-[#c4d6eb] bg-gray-50 rounded-l-md px-3 text-sm text-gray-500">
                      +91
                    </div>
                    <input type="text" placeholder="Mobile" className="w-full pl-13 border border-[#c4d6eb] rounded-md pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
                  </div>
                </div>

              </div>
            </div>

            {/* Customer Language */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium text-[#1a233a]">Customer Language <span className="text-red-500">*</span></label>
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Globe className="w-4 h-4 text-[#1a233a]" />
                </span>
                <select className="w-full border border-[#c4d6eb] rounded-md pl-11 pr-8 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                  <option></option>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
              </div>
            </div>

            <div className="pt-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                        activeTab === tab 
                          ? 'border-blue-600 text-blue-600' 
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Tab content placeholder */}
              <div className="py-6">
                
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
                          <span className="ml-2.5 text-[13px] text-[#1a233a]">This Customer Is MSME Registered</span>
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
                          <span className="ml-2.5 text-[13px] text-[#1a233a]">Allow Portal Access For This Customer</span>
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
                        Accounts Receivable
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

                {/* === CONTACT PERSON TAB === */}
                {activeTab === 'Contact Person' && (
                  <div className="max-w-4xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Name</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" placeholder="Contact Person Name" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Email Address</label>
                        <input type="email" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" placeholder="Email Address" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Mobile Number</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" placeholder="Mobile Number" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[13px] font-bold text-[#1a233a] mb-2">Designation</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-blue-500 bg-white shadow-sm" placeholder="Designation" />
                      </div>
                    </div>
                  </div>
                )}

                {/* === OTHER TABS PLACEHOLDER === */}
                {activeTab !== 'Other Details' && activeTab !== 'Billing & Delivery Address' && activeTab !== 'Contact Person' && (
                  <div className="h-64 flex items-center justify-center text-gray-400 italic">
                    {activeTab} content will go here.
                  </div>
                )}
              </div>
            </div>

          </form>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-8 flex justify-end items-center space-x-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] rounded-b-xl z-10">
        <button className="flex items-center px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          <Bookmark className="w-4 h-4 mr-2 text-gray-500" strokeWidth={2} />
          Save Draft
        </button>
        <button 
          onClick={() => navigate('/customers')}
          className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={() => setShowSuccessModal(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          Save Customer
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-112.5 min-h-100 flex flex-col items-center relative overflow-hidden animate-in fade-in zoom-in duration-300">
            
            {/* Green Curved Header */}
            <div className="absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[150%] h-70 bg-[#22c55e] rounded-b-[50%]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center w-full px-8 pt-21.25 pb-8">
              
              {/* Checkmark Circle */}
              <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] mb-6">
                <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" strokeWidth={4} />
                </div>
              </div>
              
              {/* Text Content */}
              <h3 className="text-[22px] font-bold text-[#22c55e] text-center mb-4 leading-snug">
                Customer Profile<br/>Successfully Created.
              </h3>
              
              <p className="text-[10px] font-bold text-gray-400 mb-6 tracking-wide">
                *Redirect in 3 Sec*
              </p>
              
              <button 
                onClick={() => {
                  setShowSuccessModal(false);
                  navigate('/customers');
                }}
                className="px-10 py-1.5 border-2 border-[#22c55e] text-[#22c55e] rounded-[10px] font-bold text-sm hover:bg-green-50 transition-colors bg-white shadow-sm"
              >
                Okay
              </button>
            </div>
            
          </div>
        </div>
      )}

    </main>
  );
};

export default CreateCustomerPage;
