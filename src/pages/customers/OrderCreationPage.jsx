import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  UserPlus, 
  Building2, 
  CircleDollarSign, 
  Phone, 
  BarChart3, 
  ChevronDown,
  Bookmark,
  ArrowRight,
  Package,
  Layers
} from 'lucide-react';

const OrderCreationPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="flex-1 overflow-y-auto bg-white m-4 rounded-xl border border-gray-100 shadow-sm flex flex-col relative">
      
      {/* Top Banner with Stepper */}
      <div className="bg-[#2c5364] text-white p-6 m-4 rounded-xl flex items-center justify-between shadow-sm">
        <h2 className="text-2xl font-bold tracking-wide leading-tight max-w-xs">
          Order Creation Panel
        </h2>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-[#e0f5e9] text-[#22c55e] px-4 py-2 rounded-full font-medium text-sm shadow-sm cursor-pointer" onClick={() => navigate('/customers/new')}>
            <span className="w-6 h-6 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-xs mr-2">
              <Check className="w-4 h-4" strokeWidth={3} />
            </span>
            Customer Creation
          </div>
          <div className="w-8 h-[1px] bg-white/30"></div>
          <div className="flex items-center bg-[#f0f4f8] text-[#2c5364] px-4 py-2 rounded-full font-medium text-sm shadow-sm">
            <span className="w-6 h-6 rounded-full bg-[#2c5364] text-white flex items-center justify-center text-xs mr-2">2</span>
            Order Creation
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-8 py-2 text-sm text-gray-500">
        <span className="cursor-pointer hover:text-gray-700" onClick={() => navigate('/customers')}>Customers</span> 
        <span className="mx-2">›</span> 
        <span className="font-medium text-gray-800">Order Creation</span>
      </div>

      {/* Form Area */}
      <div className="flex-1 px-8 py-4 overflow-y-auto custom-scrollbar">
        <div className="max-w-5xl space-y-8 pb-24">
          
          {/* Section 1: Customer Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#3ca0d3] p-6">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-[#3ca0d3] rounded-lg flex items-center justify-center text-white mr-4 shadow-sm flex-shrink-0">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a233a]">Customer Selection</h3>
                <p className="text-xs text-gray-400 mt-1">Define corporate account details for dynamic tax and billing mapping.</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1a233a] mb-2">Search Customer <span className="text-red-500">*</span></label>
              <div className="relative">
                <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                  <option>ZAP Private Limited - GST: 27AABCU9603R1ZV | POC: Rahul Mehta</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col">
                <span className="text-xs font-medium text-gray-400 mb-2">Name</span>
                <div className="flex items-center text-[#1a233a] font-semibold text-lg">
                  <Building2 className="w-5 h-5 text-gray-400 mr-3" />
                  ZAP Private Limited
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col">
                <span className="text-xs font-medium text-gray-400 mb-2">GST</span>
                <div className="flex items-center text-[#1a233a] font-semibold text-lg">
                  <CircleDollarSign className="w-5 h-5 text-gray-400 mr-3" />
                  27AABCUJMSAIU462BC
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col">
                <span className="text-xs font-medium text-gray-400 mb-2">Phone</span>
                <div className="flex items-center text-[#1a233a] font-semibold text-lg">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  +91 764539543
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Product Requirements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#3ca0d3] p-6">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-[#3ca0d3] rounded-lg flex items-center justify-center text-white mr-4 shadow-sm flex-shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a233a]">Product Requirements</h3>
                <p className="text-xs text-gray-400 mt-1">Determine product size limits, raw material configurations, and volume structures.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Box Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option>Printed</option>
                    <option>Plain</option>
                    <option>Corrugated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Size <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option>Medium</option>
                    <option>Small</option>
                    <option>Large</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Measurement <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <Package className="w-4 h-4" />
                  </span>
                  <input type="text" defaultValue="998 * 654 * 663" className="w-full border border-[#c4d6eb] rounded-md pl-10 pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] font-medium" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Number of Orders <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <Layers className="w-4 h-4" />
                  </span>
                  <input type="text" defaultValue="5000" className="w-full border border-[#c4d6eb] rounded-md pl-10 pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] font-medium" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Joint Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option>Clean</option>
                    <option>Standard</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Ply Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option>5 Ply</option>
                    <option>3 Ply</option>
                    <option>7 Ply</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Print Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option>Black</option>
                    <option>CMYK</option>
                    <option>Pantone</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-8 flex justify-end items-center space-x-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] rounded-b-xl z-10">
        <button className="flex items-center px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          <Bookmark className="w-4 h-4 mr-2 text-gray-500" strokeWidth={2} />
          Save Draft
        </button>
        <button 
          onClick={() => navigate('/customers')}
          className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center"
        >
          Submit
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Preview Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-[#376c7b] px-8 py-6 flex justify-between items-start">
              <div>
                <p className="text-[#a4c9d5] text-sm mb-1 font-medium">Live Order Summary</p>
                <h2 className="text-3xl font-bold text-white">Preview</h2>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Package className="w-8 h-8 text-[#376c7b]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
              
              {/* Customer Section */}
              <div className="mb-6">
                <h4 className="text-[#1a233a] font-bold mb-4">Customer</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Name</span>
                    <span className="text-[#1a233a] font-bold text-sm">ZAP Private Limited</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">POC Name</span>
                    <span className="text-[#1a233a] font-bold text-sm">Rahul Mehta</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">GST Number</span>
                    <span className="text-[#1a233a] font-bold text-sm">22AAAAA0000A1Z5</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Phone</span>
                    <span className="text-[#1a233a] font-bold text-sm">+91 98765 43210</span>
                  </div>
                </div>
              </div>

              {/* Specifications Section */}
              <div className="mb-6">
                <h4 className="text-[#1a233a] font-bold mb-4">Specifications</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Box Type</span>
                    <span className="text-[#1a233a] font-bold text-sm">Printed</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Size</span>
                    <span className="text-[#1a233a] font-bold text-sm">Medium</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Measurement</span>
                    <span className="text-[#1a233a] font-bold text-sm">998 × 654 × 663</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Ply Type</span>
                    <span className="text-[#1a233a] font-bold text-sm">3 Ply</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Joint Type</span>
                    <span className="text-[#1a233a] font-bold text-sm">Pin</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Print Type</span>
                    <span className="text-[#1a233a] font-bold text-sm">No Print</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Number of Orders</span>
                    <span className="text-[#1a233a] font-bold text-sm">500</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500 text-sm font-medium">HSN/SAC</span>
                    <span className="text-[#1a233a] font-bold text-sm">#4819</span>
                  </div>
                </div>
              </div>

              {/* Calculation Section */}
              <div className="mb-2">
                <h4 className="text-[#1a233a] font-bold mb-4">Calculation</h4>
                {/* Empty calculation area as per screenshot */}
                <div className="h-4"></div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-gray-100 flex justify-end space-x-4 bg-white rounded-b-xl">
              <button 
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => navigate('/customers')}
                className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Create Order
              </button>
            </div>
            
          </div>
        </div>
      )}

    </main>
  );
};

export default OrderCreationPage;
