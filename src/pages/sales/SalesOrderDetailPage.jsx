import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  Plus, 
  MoreHorizontal, 
  Search, 
  Edit, 
  Send, 
  Printer, 
  ArrowRightLeft,
  MoreVertical,
  ChevronDown
} from 'lucide-react';

const SalesOrderDetailPage = () => {
  const navigate = useNavigate();
  const tabs = ['Quotes', 'Sales Orders', 'Invoices', 'Payments'];

  return (
    <main className="flex-1 overflow-y-hidden bg-[#f8f9fb] flex flex-col relative">
      
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white flex-shrink-0">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                tab === 'Sales Orders'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col">
        
        {/* Top Banner with Stepper */}
        <div className="bg-[#244f5d] text-white p-6 mb-4 rounded-xl shadow-sm flex-shrink-0">
          <div className="inline-block px-3 py-1 mb-3 rounded-full border border-white/30 text-xs font-medium bg-white/5">
            Module: Core Sales
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide leading-tight">
              Sale Orders
            </h2>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-[#e0f5e9] text-[#22c55e] px-4 py-2 rounded-full font-medium text-sm shadow-sm">
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

        {/* Master Detail View Area */}
        <div className="flex-1 flex space-x-4 overflow-hidden min-h-0">
          
          {/* Left Master List */}
          <div className="w-[320px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col flex-shrink-0 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#1a233a]">Sale Orders</h3>
                <div className="flex items-center space-x-2">
                  <button onClick={() => navigate('/sales/new')} className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center shadow-sm">
                    <Plus className="w-5 h-5" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md flex items-center justify-center">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="w-4 h-4 text-gray-400" />
                </span>
                <input 
                  type="text" 
                  placeholder="Search customer, product or item..." 
                  className="w-full border border-gray-200 bg-gray-50 rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500" 
                />
              </div>
            </div>
            
            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-3">
              {/* Active Card */}
              <div className="border border-blue-200 bg-blue-50/30 rounded-xl p-4 shadow-sm cursor-pointer">
                <div className="text-[10px] text-gray-500 font-medium mb-1">25/06/2026</div>
                <div className="text-sm font-bold text-[#1a233a] leading-tight mb-3">CLIMAMAX CONTROLS PRIVATE LIMITED</div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">SO-00001</span>
                  <span className="text-xs font-bold text-[#1a233a]">₹100.00</span>
                </div>
              </div>
              {/* Other inactive cards could go here */}
            </div>
          </div>

          {/* Right Detail View */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
            
            {/* Detail Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <h2 className="text-2xl font-semibold text-[#1a233a]">SO-00001</h2>
              <div className="flex items-center space-x-2">
                <button className="flex items-center px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Edit className="w-4 h-4 mr-2 text-gray-500" />
                  Edit
                </button>
                <button className="flex items-center px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Send className="w-4 h-4 mr-2 text-gray-500" />
                  Send
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
                </button>
                <button className="flex items-center px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Printer className="w-4 h-4 mr-2 text-gray-500" />
                  PDF/ Print
                </button>
                <button className="flex items-center px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium shadow-sm">
                  <ArrowRightLeft className="w-4 h-4 mr-2" />
                  Convert to Invoice
                </button>
                <button className="flex items-center px-2 py-1.5 border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Detail Content */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              
              <h3 className="text-lg font-bold text-[#1a233a] mb-6">Ordered Products Line Items</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                
                {/* Sales Order Status Card */}
                <div className="border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-[#1a233a] mb-1">Sales Order</h4>
                  <p className="text-sm text-gray-500 mb-6">Sales Order# SO-00001</p>
                  
                  <h5 className="text-sm font-bold text-[#1a233a] mb-4">Status</h5>
                  
                  <div className="pl-2 border-l-[3px] border-yellow-400 space-y-4">
                    <div className="flex justify-between items-center pl-4">
                      <span className="text-sm font-medium text-[#1a233a]">Order</span>
                      <span className="text-sm font-medium text-green-500">Closed</span>
                    </div>
                    <div className="flex justify-between items-center pl-4">
                      <span className="text-sm font-medium text-[#1a233a]">Invoice</span>
                      <span className="text-sm font-medium text-green-500">Invoiced</span>
                    </div>
                    <div className="flex justify-between items-center pl-4">
                      <span className="text-sm font-medium text-[#1a233a]">Payment</span>
                      <span className="text-sm font-medium text-green-500">Unpaid</span>
                    </div>
                    <div className="flex justify-between items-center pl-4">
                      <span className="text-sm font-medium text-[#1a233a]">Shipment</span>
                      <span className="text-sm font-medium text-orange-400">Pending</span>
                    </div>
                  </div>
                </div>

                {/* Details Card */}
                <div className="border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-[#1a233a] mb-6">Details</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-600 w-48">Reference#</span>
                      <span className="text-sm font-medium text-[#1a233a] flex-1">QT-000001</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-600 w-48">Order Date</span>
                      <span className="text-sm font-medium text-[#1a233a] flex-1">25/06/2026</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-600 w-48">Expected Shipment Date</span>
                      <span className="text-sm font-medium text-[#1a233a] flex-1">10/07/2026</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-600 w-48">Payment Terms</span>
                      <span className="text-sm font-medium text-[#1a233a] flex-1">Due On Receipt</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-600 w-48">Salesperson</span>
                      <span className="text-sm font-medium text-[#1a233a] flex-1">Ramesh Kumar</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Address Details */}
              <h3 className="text-lg font-bold text-[#1a233a] mb-4">Address Details</h3>
              
              <div className="border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-blue-600 mb-3">CLIMAMAX CONTROLS PRIVATE LIMITED</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Wholesale Business, Import, Supplier Of Services</p>
                    <p>648/A, OM Chambers, Binnamangala 1st Stage</p>
                    <p>Bengaluru</p>
                    <p>Bengaluru Urban, Karnataka</p>
                    <p>India - 560038</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-px bg-gray-200"></div>

                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#1a233a] mb-3">Shipping Address</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Wholesale Business, Import, Supplier Of Services</p>
                    <p>648/A, OM Chambers, Binnamangala 1st Stage</p>
                    <p>Bengaluru</p>
                    <p>Bengaluru Urban, Karnataka</p>
                    <p>India - 560038</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
};

export default SalesOrderDetailPage;
