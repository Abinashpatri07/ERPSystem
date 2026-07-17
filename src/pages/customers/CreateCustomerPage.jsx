import React, { useState } from 'react';
import { Mail, ChevronDown, Bookmark, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateCustomerPage = () => {
  const navigate = useNavigate();
  const [customerType, setCustomerType] = useState('Business');
  const [activeTab, setActiveTab] = useState('Other Details');

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
          <div className="w-8 h-[1px] bg-white/30"></div>
          <div className="flex items-center bg-[#5c8a99] px-4 py-2 rounded-full font-medium text-sm text-white">
            <span className="w-6 h-6 rounded-full bg-white text-[#244f5d] flex items-center justify-center text-xs mr-2">2</span>
            Order Creation
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
                  <input type="text" placeholder="Work Number" className="w-full pl-[52px] border border-[#c4d6eb] rounded-md pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
                </div>

                <div className="flex items-center flex-1">
                  <label className="text-sm font-medium text-[#1a233a] mr-4">Secondary</label>
                  <div className="flex flex-1 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center border-r border-[#c4d6eb] bg-gray-50 rounded-l-md px-3 text-sm text-gray-500">
                      +91
                    </div>
                    <input type="text" placeholder="Mobile" className="w-full pl-[52px] border border-[#c4d6eb] rounded-md pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
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
                <div className="border-2 border-dashed border-[#c4d6eb] rounded-lg h-32 flex items-center justify-center text-gray-400 text-sm">
                  {activeTab} content will go here
                </div>
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
          onClick={() => navigate('/customers/new/order')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          Save Customer
        </button>
      </div>

    </main>
  );
};

export default CreateCustomerPage;
