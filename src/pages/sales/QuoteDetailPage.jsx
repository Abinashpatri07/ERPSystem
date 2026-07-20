import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Plus, 
  MoreHorizontal, 
  Search, 
  Edit, 
  Send, 
  Printer, 
  ChevronDown,
  FileText,
  ShoppingCart,
  Factory,
  Package,
  Truck,
  Receipt,
  CheckCircle,
  CreditCard,
  ArrowRightLeft
} from 'lucide-react';

const QuoteDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const tabs = [
    { name: 'Quotes', path: '/sales/quotes' },
    { name: 'Sales Orders', path: '/sales/orders' },
    { name: 'Invoices', path: '/sales/invoices' },
    { name: 'Payments', path: '/sales/payments' }
  ];

  const steps = [
    { name: 'Quote', icon: FileText, active: true },
    { name: 'Sales order', icon: ShoppingCart, active: false },
    { name: 'Production', icon: Factory, active: false },
    { name: 'Package', icon: Package, active: false },
    { name: 'Ship', icon: Truck, active: false },
    { name: 'Invoice', icon: Receipt, active: false },
    { name: 'Delivered', icon: CheckCircle, active: false },
    { name: 'Payment', icon: CreditCard, active: false },
  ];

  return (
    <main className="flex-1 overflow-hidden bg-white flex flex-col relative">
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white flex-shrink-0">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                tab.name === 'Quotes'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Split View Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar (Quotes List) */}
        <div className="w-[320px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#1a233a]">All Quotes</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => navigate('/sales/quotes/new')}
                className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
              <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="px-4 pb-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search customer, product or item..." 
                className="w-full bg-[#f4f7fb] border border-gray-200/60 rounded-md pl-9 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 text-[#1a233a]"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
            {/* Selected Quote Card */}
            <div className="border border-gray-200 bg-white rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-gray-400 font-medium text-[10px]">25/06/2026</span>
              </div>
              <p className="text-xs font-bold text-[#1a233a] mb-4 truncate">CLIMAMAX CONTROLS PRIVATE LIMITED</p>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400 font-medium">INV-00001</span>
                <span className="font-bold text-[#1a233a]">₹100.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-white custom-scrollbar">
          
          <div className="p-6">
            {/* Dark Teal Banner (Stepper) */}
            <div className="bg-[#244f5d] text-white p-6 mb-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold tracking-wide leading-tight mb-6">
                Quote Creation
              </h2>
              
              <div className="flex items-center w-full justify-between pb-1 overflow-x-auto hide-scrollbar">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <React.Fragment key={step.name}>
                      <div className={`flex items-center px-3 py-1.5 rounded-full font-medium text-xs flex-shrink-0 shadow-sm ${
                        step.active ? 'bg-[#e5f0fe] text-[#244f5d]' : 'bg-[#5c8a99] text-white'
                      }`}>
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-1.5 ${
                          step.active ? 'bg-[#244f5d] text-white' : 'bg-white text-[#5c8a99]'
                        }`}>
                          <Icon className="w-3 h-3" strokeWidth={2.5} />
                        </span>
                        {step.name}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="flex-1 h-[1px] bg-white/30 mx-2 min-w-[8px]"></div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Action Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-[#1a233a]">{id || 'QT-00002'}</h2>
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  Send
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                  <Printer className="w-4 h-4 mr-2" />
                  PDF/ Print
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm">
                  <ArrowRightLeft className="w-4 h-4 mr-2" />
                  Convert to SO
                </button>
                <button className="px-2 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quote Details Box */}
            <div className="mb-8">
              <h3 className="text-[15px] font-bold text-[#1a233a] mb-4">Quote Details</h3>
              <div className="border border-[#e6edf5] rounded-xl p-6 bg-white">
                <h4 className="text-xl text-[#1a233a] mb-1 tracking-tight">{id || 'QT-000002'}</h4>
                <p className="text-[11px] text-gray-700 mb-8 font-medium">Total : ₹10,000.00</p>
                
                <div className="grid grid-cols-5 gap-4">
                  <div>
                    <p className="text-xs font-bold text-[#1a233a] mb-1">Quote Type</p>
                    <p className="text-sm text-gray-500">Invoice</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a233a] mb-1">Quote Date</p>
                    <p className="text-sm text-gray-500">26/06/2026</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a233a] mb-1">Salesperson</p>
                    <p className="text-sm text-gray-500">---</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a233a] mb-1">Quote Number</p>
                    <p className="text-sm text-gray-400">QT-000001</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a233a] mb-1">Creation Date</p>
                    <p className="text-sm text-gray-400">25/06/2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details Box */}
            <div className="mb-8">
              <h3 className="text-[15px] font-bold text-[#1a233a] mb-4">Customer Details</h3>
              <div className="border border-[#e6edf5] rounded-xl p-6 bg-white">
                <h4 className="text-[15px] font-medium text-[#3b82f6] tracking-wide mb-6">CLIMAMAX CONTROLS PRIVATE LIMITED</h4>
                
                <div className="flex">
                  <div className="flex-1 pr-6 border-r border-[#e6edf5]">
                    <h5 className="text-[13px] font-bold text-[#1a233a] mb-2">Shipping Address</h5>
                    <p className="text-[13px] text-[#475569] leading-relaxed">
                      Wholesale Business, Import, Supplier Of Services<br/>
                      648/A, OM Chambers, Binnamangala 1st Stage<br/>
                      Bengaluru<br/>
                      Bengaluru Urban, Karnataka<br/>
                      India - 560038
                    </p>
                  </div>
                  <div className="flex-1 pl-8">
                    <h5 className="text-[13px] font-bold text-[#1a233a] mb-2">Shipping Address</h5>
                    <p className="text-[13px] text-[#475569] leading-relaxed">
                      Wholesale Business, Import, Supplier Of Services<br/>
                      648/A, OM Chambers, Binnamangala 1st Stage<br/>
                      Bengaluru<br/>
                      Bengaluru Urban, Karnataka<br/>
                      India - 560038
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="bg-[#f8f9fb] rounded-t-lg border-b border-[#e6edf5] px-6 py-3">
              <div className="grid grid-cols-12 text-xs font-medium text-gray-500">
                <div className="col-span-5">Items</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Amount</div>
              </div>
            </div>
            
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="grid grid-cols-12 text-xs items-center text-[#1a233a]">
                <div className="col-span-5 font-bold">Calibrated Glass Pipette</div>
                <div className="col-span-3 text-center font-bold">1,000 Box</div>
                <div className="col-span-2 text-right font-bold">30.00</div>
                <div className="col-span-2 text-right font-bold">50,645</div>
              </div>
            </div>

            {/* Totals */}
            <div className="flex justify-end mt-8 mb-12">
              <div className="w-72">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-bold text-[#1a233a]">Sub Total</span>
                  <span className="text-sm font-bold text-[#1a233a]">50,645</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-[10px] text-gray-500 font-medium">Adjustment</span>
                  <span className="text-xs text-gray-500 font-medium">0</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-sm font-bold text-[#1a233a]">Total Payable</span>
                  <span className="text-sm font-bold text-[#1a233a]">₹53,900.00</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default QuoteDetailPage;
