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
  PackagePlus,
  ShoppingCart,
  Factory,
  Package,
  Truck,
  Receipt,
  CheckCircle,
  CreditCard,
  PackageCheck,
  HandCoins,
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
    { name: 'Quote', icon: PackagePlus, active: true },
    { name: 'Sales order', icon: FileText, active: false },
    { name: 'Production', icon: Factory, active: false },
    { name: 'Package', icon: Package, active: false },
    { name: 'Ship', icon: Truck, active: false },
    { name: 'Invoice', icon: Receipt, active: false },
    { name: 'Delivered', icon: PackageCheck, active: false },
    { name: 'Payment', icon: HandCoins, active: false },
  ];

  return (
    <main className="flex-1 overflow-hidden bg-[#f4f7fb] flex flex-col relative">
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white flex-shrink-0">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`py-2.5 text-sm font-medium border-b-2 transition-colors ${
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

      {/* Header & Stepper */}
      <div className="px-4 pt-2 bg-[#f4f7fb] flex-shrink-0 pb-2">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-5 py-2.5 flex flex-col gap-1.5">
          <h2 className="text-[16px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] self-start">
            Quote View
          </h2>
          
          <div className="relative overflow-x-auto pb-1 custom-scrollbar">
            <div className="flex items-start w-full min-w-[700px]">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.active;
                return (
                  <React.Fragment key={step.name}>
                    <div className="flex flex-col items-center shrink-0 w-[90px]">
                      <div className={`relative z-10 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1.5px] bg-white ${
                        isActive ? 'bg-gradient-to-br from-[#ff7a59] via-[#d54a88] to-[#402de8] border-transparent text-white shadow-md' : 'border-gray-200 text-gray-400'
                      }`}>
                        <Icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
                      </div>
                      <span className={`mt-1.5 text-[11px] font-medium text-center w-[90px] ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.name}
                      </span>
                    </div>

                    {/* Connecting Line */}
                    {index !== steps.length - 1 && (
                      <div className="flex-1 flex items-start pt-[19px] -mx-[25px]">
                        <div className={`h-[2px] w-full ${
                          index === 0 ? 'bg-gradient-to-r from-[#ff7a59] to-[#d54a88]' : 'bg-gray-200'
                        }`}></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Split View Content */}
      <div className="flex-1 flex overflow-hidden px-4 pb-4 gap-4">
        
        {/* Left Sidebar (Quotes List) */}
        <div className="w-[270px] bg-white rounded-2xl border border-gray-200 flex flex-col flex-shrink-0 shadow-sm overflow-hidden">
          <div className="px-4 py-3 flex items-center justify-between">
            <h2 className="text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8]">All Quotes</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => navigate('/sales/quotes/new')}
                className="w-[28px] h-[28px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button className="w-[28px] h-[28px] bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors shadow-sm">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="px-4 pb-3 border-b border-gray-100">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-3.5 h-3.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search quotes..." 
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg pl-8 pr-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#ff7a59]/30 text-[#1a2337] transition-all"
              />
            </div>
          </div>

          <div className="flex-1 p-4 space-y-3">
            {/* Selected Quote Card */}
            <div className="border border-gray-200 bg-white rounded-3xl px-4 py-3 cursor-pointer hover:border-[#ff7a59]/30 transition-colors shadow-sm">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[13px] font-medium text-gray-500">INV-00001</span>
                <span className="text-[10px] text-gray-400">25/06/2026</span>
              </div>
              <p className="text-xs font-bold text-[#1a233a] leading-tight mb-3">CLIMAMAX CONTROLS PRIVATE LIMITED</p>
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-gray-500 font-medium">Sales Quote</span>
                <span className="font-bold text-[#1a233a]">₹100.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden min-h-0">
            {/* Action Header */}
            <div className="pt-0 pb-2 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-2.5">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-[17px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8]">{id || 'QT-000001'}</h2>
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold text-[#ff7a59] bg-[#ffecd6] rounded-full">Unpaid</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                      <Printer className="w-3.5 h-3.5" />
                    </button>
                    <button className="flex items-center px-4 py-1.5 bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] text-white rounded-full text-[12px] font-medium hover:opacity-90 transition-opacity shadow-sm">
                      <ArrowRightLeft className="w-3.5 h-3.5 mr-1.5" />
                      Convert to SO
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Details Containers */}
            <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pb-3">
              <div className="space-y-2">
              
              {/* Quote Details Box */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-[15px] font-bold text-[#1a233a] pb-2 border-b border-gray-100 mb-2">Quote Details</h3>
                <p className="text-[16px] font-bold text-[#1a233a] mb-3">Total : ₹10,000.00</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                  <div className="bg-[#f9fafb] p-3 rounded-2xl">
                    <p className="text-xs font-semibold text-[#1a233a] mb-1">Quote Date</p>
                    <p className="text-[13px] text-gray-600">26/06/2026</p>
                  </div>
                  <div className="bg-[#f9fafb] p-3 rounded-2xl">
                    <p className="text-xs font-semibold text-[#1a233a] mb-1">Salesperson</p>
                    <p className="text-[13px] text-gray-600">Ramesh Kumar</p>
                  </div>
                  <div className="bg-[#f9fafb] p-3 rounded-2xl">
                    <p className="text-xs font-semibold text-[#1a233a] mb-1">Quote Number</p>
                    <p className="text-[13px] text-gray-600">QT-000001</p>
                  </div>
                  <div className="bg-[#f9fafb] p-3 rounded-2xl">
                    <p className="text-xs font-semibold text-[#1a233a] mb-1">Creation Date</p>
                    <p className="text-[13px] text-gray-600">25/06/2026</p>
                  </div>
                </div>
              </div>

              {/* Addresses Box */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row">
                <div className="flex-1 p-5">
                    <h5 className="text-[14px] font-semibold text-gray-500 mb-3">Billing Address</h5>
                    <p className="text-[13px] text-[#1a233a] font-medium leading-relaxed">
                      648/A, OM Chambers, Binnamangala 1st<br/>
                      Stage, Bengaluru, Karnataka 560038
                    </p>
                </div>
                
                {/* Divider */}
                <div className="w-auto mx-5 lg:mx-0 lg:w-[1px] h-[1px] lg:h-auto bg-gray-200 lg:my-5"></div>
                
                <div className="flex-1 p-5">
                    <h5 className="text-[14px] font-semibold text-gray-500 mb-3">Shipping Address</h5>
                    <p className="text-[13px] text-[#1a233a] font-medium leading-relaxed">
                      Warehouse No. 12,<br/>
                      KIADB Industrial Area, Whitefield,<br/>
                      Bengaluru, Karnataka 560066
                    </p>
                </div>
              </div>

              {/* Product Specification Box */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-[15px] font-bold text-[#1a233a] pb-3 border-b border-gray-100 mb-3">Product Specification</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
                  <div className="bg-[#f8f9fc] p-3 rounded-2xl">
                    <p className="text-xs text-gray-500 mb-1">Paper Type</p>
                    <p className="text-[13px] font-semibold text-[#1a233a]">Kraft</p>
                  </div>
                  <div className="bg-[#f8f9fc] p-3 rounded-2xl">
                    <p className="text-xs text-gray-500 mb-1">Size</p>
                    <p className="text-[13px] font-semibold text-[#1a233a]">18×12×10 In</p>
                  </div>
                  <div className="bg-[#f8f9fc] p-3 rounded-2xl">
                    <p className="text-xs text-gray-500 mb-1">Ply</p>
                    <p className="text-[13px] font-semibold text-[#1a233a]">5 Ply</p>
                  </div>
                  <div className="bg-[#f8f9fc] p-3 rounded-2xl">
                    <p className="text-xs text-gray-500 mb-1">BF</p>
                    <p className="text-[13px] font-semibold text-[#1a233a]">18 BF</p>
                  </div>
                  <div className="bg-[#f8f9fc] p-3 rounded-2xl">
                    <p className="text-xs text-gray-500 mb-1">Print</p>
                    <p className="text-[13px] font-semibold text-[#1a233a]">2 Color Flexo</p>
                  </div>
                </div>
              </div>

              {/* Calculation Box */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-[15px] font-bold text-[#1a233a] pb-3 border-b border-gray-100 mb-3">Calculation</h3>
                
                <div className="w-full">
                  <div className="grid grid-cols-12 text-[11px] font-medium text-gray-400 border-b border-gray-100 pb-2">
                    <div className="col-span-6">Items</div>
                    <div className="col-span-2">Ordered Quantity</div>
                    <div className="col-span-2">Unit Rate (INR)</div>
                    <div className="col-span-2 text-right">Amount Total</div>
                  </div>
                  
                  <div className="grid grid-cols-12 text-[12px] items-center text-[#1a233a] py-3 border-b border-gray-100">
                    <div className="col-span-6">
                      <p className="font-bold mb-0.5">5-Ply Corrugated Box</p>
                      <p className="text-[10px] text-gray-500">Kraft, 18×12×10 In, 18 BF</p>
                    </div>
                    <div className="col-span-2 font-bold">1,000 Box</div>
                    <div className="col-span-2 font-bold">30.00</div>
                    <div className="col-span-2 text-right font-bold">50,645</div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <div className="w-[300px]">
                    <div className="flex justify-between py-2.5">
                      <span className="text-[13px] font-bold text-[#1a233a]">Sub Total</span>
                      <span className="text-[13px] font-bold text-[#1a233a]">50,645</span>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <span className="text-[13px] text-gray-500">GST :</span>
                      <span className="text-[13px] text-gray-500">600.96</span>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <span className="text-[13px] text-gray-500">Discount Rate</span>
                      <span className="text-[13px] text-gray-500">400.97</span>
                    </div>
                    <div className="flex justify-between py-4 mt-2">
                      <span className="text-[15px] font-medium text-rose-400">Total Payable</span>
                      <span className="text-[15px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">₹53,900.00</span>
                    </div>
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

export default QuoteDetailPage;
