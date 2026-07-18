import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  ChevronDown,
  Bookmark,
  GripVertical,
  Package,
  Minus,
  Plus
} from 'lucide-react';

const CreateSalesOrderPage = () => {
  const navigate = useNavigate();
  const tabs = [
    { name: 'Quotes', path: '/sales/quotes' },
    { name: 'Sales Orders', path: '/sales' },
    { name: 'Invoices', path: '/sales/invoices' },
    { name: 'Payments', path: '/sales/payments' }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-[#f8f9fb] flex flex-col relative">
      
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                tab.name === 'Sales Orders'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar pb-24">
        
        {/* Top Banner with Stepper */}
        <div className="bg-[#244f5d] text-white p-6 mb-4 rounded-xl shadow-sm">
          <div className="inline-block px-3 py-1 mb-3 rounded-full border border-white/30 text-xs font-medium bg-white/5">
            Module: Core Sales
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide leading-tight">
              Sale Orders
            </h2>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-[#e0f5e9] text-[#22c55e] px-4 py-2 rounded-full font-medium text-sm shadow-sm cursor-pointer">
                <span className="w-5 h-5 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-xs mr-2">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                Quote
              </div>
              <div className="w-6 h-[1px] bg-white/30"></div>
              <div className="flex items-center bg-[#e5f0fe] text-[#244f5d] px-4 py-2 rounded-full font-medium text-sm shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#244f5d] text-white flex items-center justify-center text-xs mr-2">2</span>
                Sales order
              </div>
              <div className="w-6 h-[1px] bg-white/30"></div>
              <div className="flex items-center bg-[#5c8a99] px-4 py-2 rounded-full font-medium text-sm text-white">
                <span className="w-5 h-5 rounded-full bg-white text-[#244f5d] flex items-center justify-center text-xs mr-2">3</span>
                Invoices
              </div>
              <div className="w-6 h-[1px] bg-white/30"></div>
              <div className="flex items-center bg-[#5c8a99] px-4 py-2 rounded-full font-medium text-sm text-white">
                <span className="w-5 h-5 rounded-full bg-white text-[#244f5d] flex items-center justify-center text-xs mr-2">4</span>
                Payment
              </div>
            </div>
          </div>
        </div>

        {/* Form Area wrapped in the blue-bordered card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-[3px] border-t-blue-600 p-8">
          <form className="max-w-5xl space-y-6">
            
            {/* Customer Name */}
            <div className="flex items-center">
              <label className="w-48 text-sm font-medium text-[#1a233a]">Customer Name <span className="text-red-500">*</span></label>
              <div className="relative flex-1 max-w-2xl">
                <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                  <option></option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-[#1a233a] pointer-events-none" />
              </div>
            </div>

            {/* Row 2: Sales Order# & Reference# */}
            <div className="flex items-center space-x-8 max-w-5xl">
              <div className="flex items-center flex-1">
                <label className="w-48 text-sm font-medium text-[#1a233a]">Sales Order#</label>
                <input type="text" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
              </div>
              <div className="flex items-center flex-1">
                <label className="w-32 text-sm font-medium text-[#1a233a]">Reference#</label>
                <input type="text" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
              </div>
            </div>

            {/* Row 3: Sales Order Date & Shipment Date */}
            <div className="flex items-center space-x-8 max-w-5xl">
              <div className="flex items-center flex-1">
                <label className="w-48 text-sm font-medium text-[#1a233a]">Sales Order Date</label>
                <input type="date" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
              </div>
              <div className="flex items-center flex-1">
                <label className="w-32 text-sm font-medium text-[#1a233a]">Shipment Date</label>
                <input type="date" className="flex-1 border border-[#c4d6eb] rounded-md px-4 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" />
              </div>
            </div>

            {/* Row 4: Payment Terms & Salesperson */}
            <div className="flex items-center space-x-8 max-w-5xl">
              <div className="flex items-center flex-1">
                <label className="w-48 text-sm font-medium text-[#1a233a]">Payment Terms</label>
                <div className="relative flex-1">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option></option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center flex-1">
                <label className="w-32 text-sm font-medium text-[#1a233a]">Salesperson</label>
                <div className="relative flex-1">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option></option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              {/* Nested Item Table Container */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 border-t-2 border-t-blue-500 overflow-hidden">
                <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
                  <h3 className="text-lg font-bold text-[#1a233a]">Item Table</h3>
                  <button type="button" className="flex items-center px-4 py-1.5 border border-blue-200 text-blue-600 bg-blue-50 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                    Bulk Action
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </button>
                </div>
                
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-sm">
                      <th className="py-3 px-6 font-medium text-gray-500 w-[40%]">Item Details</th>
                      <th className="py-3 px-6 font-medium text-gray-500">Quantity</th>
                      <th className="py-3 px-6 font-medium text-gray-500">Rate</th>
                      <th className="py-3 px-6 font-medium text-gray-500">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-4 px-6 flex items-center">
                        <GripVertical className="w-4 h-4 text-gray-300 mr-3 cursor-grab" />
                        <div className="w-8 h-8 bg-[#e5f0fe] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <Package className="w-4 h-4 text-blue-600" />
                        </div>
                        <input type="text" className="w-full border border-[#c4d6eb] rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-[#3ca0d3]" />
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center border border-[#c4d6eb] rounded-md w-28 overflow-hidden">
                          <button type="button" className="px-2 py-1.5 text-gray-500 hover:bg-gray-50 border-r border-[#c4d6eb]">
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <input type="text" className="w-full text-center py-1.5 text-sm focus:outline-none" value="" readOnly />
                          <button type="button" className="px-2 py-1.5 text-gray-500 hover:bg-gray-50 border-l border-[#c4d6eb]">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 text-sm">₹</span>
                          <input type="text" className="w-full border border-[#c4d6eb] rounded-md pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:border-[#3ca0d3]" />
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 text-sm">₹</span>
                          <input type="text" className="w-full border border-[#c4d6eb] rounded-md pl-8 pr-3 py-1.5 text-sm bg-gray-50 focus:outline-none" readOnly />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-6 py-4">
                  {/* Space for add row button if needed */}
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
          onClick={() => navigate('/sales')}
          className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={() => navigate('/sales')}
          className="px-8 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm"
        >
          Save
        </button>
      </div>

    </main>
  );
};

export default CreateSalesOrderPage;
