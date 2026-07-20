import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  MoreHorizontal, 
  Search, 
  Edit, 
  Send, 
  Printer, 
  Download,
  Settings,
  ZoomIn,
  ZoomOut,
  Maximize,
  ChevronDown
} from 'lucide-react';

const InvoiceDetailPage = () => {
  const navigate = useNavigate();

  const tabs = [
    { name: 'Quotes', path: '/sales/quotes' },
    { name: 'Sales Orders', path: '/sales/orders' },
    { name: 'Invoices', path: '/sales/invoices' },
    { name: 'Payments', path: '/sales/payments' }
  ];

  return (
    <main className="flex-1 overflow-hidden bg-[#f8f9fb] flex flex-col relative">
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white flex-shrink-0">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                tab.name === 'Invoices'
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
        
        {/* Left Sidebar (Invoice List) */}
        <div className="w-[380px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#1a233a]">All Invoices</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => navigate('/sales/invoices/new')}
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
                className="w-full bg-[#f4f7fb] border-none rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-[#1a233a]"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
            {/* Selected Invoice Card */}
            <div className="border border-blue-200 bg-blue-50/30 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-blue-500 font-medium text-sm">INV-00001</span>
                <span className="text-[10px] text-gray-400">25/06/2026</span>
              </div>
              <p className="text-sm font-bold text-[#1a233a] mb-3 truncate">CLIMAMAX CONTROLS PRIVATE LIMITED</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">SO-00001</span>
                <span className="font-bold text-[#1a233a]">₹100.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#f4f7fb]">
          {/* Header */}
          <div className="px-8 py-4 flex items-center justify-between bg-white border-b border-gray-200 flex-shrink-0">
            <h2 className="text-2xl font-semibold text-[#1a233a]">INV-00001</h2>
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
                <Download className="w-4 h-4 mr-2" />
                Record Payment
              </button>
              <button className="px-2 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 flex flex-col items-center">
            
            {/* Toolbar */}
            <div className="w-full max-w-[850px] flex justify-end mb-4 sticky top-0 z-10">
              <div className="flex items-center bg-[#eef2f6] rounded-full px-2 py-1 shadow-sm border border-gray-200/60 backdrop-blur-sm">
                <button className="p-2 text-gray-600 hover:text-[#1a233a] hover:bg-white rounded-full transition-colors"><Settings className="w-5 h-5" /></button>
                <button className="p-2 text-gray-600 hover:text-[#1a233a] hover:bg-white rounded-full transition-colors"><ZoomIn className="w-5 h-5" /></button>
                <span className="px-3 text-xs font-semibold text-gray-600">100%</span>
                <button className="p-2 text-gray-600 hover:text-[#1a233a] hover:bg-white rounded-full transition-colors"><ZoomOut className="w-5 h-5" /></button>
                <button className="p-2 text-gray-600 hover:text-[#1a233a] hover:bg-white rounded-full transition-colors"><Maximize className="w-4 h-4" /></button>
              </div>
            </div>

            {/* A4 Document */}
            <div className="w-full max-w-[850px] bg-white rounded-lg shadow-sm border border-gray-200 min-h-[1100px] p-12 relative overflow-hidden mb-8">
              
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <span className="text-[200px] font-black transform -rotate-45 tracking-widest text-[#1a233a]">COPY</span>
              </div>

              {/* Document Header */}
              <div className="flex justify-between items-start border-b border-gray-100 pb-8 mb-8 relative z-10">
                <div>
                  <h1 className="text-xl font-bold text-[#0f172a] mb-1 tracking-tight">GLOBEX ADVANCED LTD</h1>
                  <p className="text-[#3b82f6] text-sm font-medium mb-3">Standard Dispatch Settle Unit</p>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                    MIDC Industrial Area, Mahape, Navi Mumbai,<br/>
                    MH - 400710
                  </p>
                </div>
                <div className="text-right">
                  <h2 className="text-xl font-bold text-[#0f172a] mb-1 tracking-tight">INVOICE STATEMENT</h2>
                  <p className="text-[#3b82f6] text-sm font-medium mb-2">#INV-2026-001</p>
                  <p className="text-gray-500 text-xs font-medium">15 Jul 2026 • Net 30</p>
                </div>
              </div>

              {/* Info section */}
              <div className="flex justify-between items-start border-b border-gray-100 pb-8 mb-8 relative z-10">
                <div className="w-1/2 pr-8">
                  <h3 className="text-[10px] font-bold text-[#3b82f6] uppercase tracking-wider mb-3">CLIENT INFORMATION</h3>
                  <p className="text-sm font-bold text-[#0f172a] mb-1">Globex Advanced Logistics</p>
                  <p className="text-xs text-gray-500 mb-2">Sarah Jenkins</p>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[250px]">
                    5th Floor, Tower C, Tech Park, Sector V,<br/>
                    Kolkata, WB - 700091
                  </p>
                </div>
                <div className="w-1/2 pl-4">
                  <h3 className="text-[10px] font-bold text-[#3b82f6] uppercase tracking-wider mb-3">SHIPPING DESTINATION</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[250px] mb-4">
                    Warehouse 4B, Port Logistics Zone, Haldia,<br/>
                    WB - 721607
                  </p>
                  <p className="text-xs font-bold text-[#0f172a]">GSTIN: <span className="text-gray-600 font-medium">19BGBBB2222B2Z2</span></p>
                </div>
              </div>

              {/* Items Table */}
              <div className="relative z-10 mb-12">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 text-[10px] font-bold text-[#3b82f6] uppercase tracking-wider w-1/2">ITEM DESCRIPTION</th>
                      <th className="py-3 text-[10px] font-bold text-[#3b82f6] uppercase tracking-wider text-center">QUANTITY</th>
                      <th className="py-3 text-[10px] font-bold text-[#3b82f6] uppercase tracking-wider text-right">RATE</th>
                      <th className="py-3 text-[10px] font-bold text-[#3b82f6] uppercase tracking-wider text-right">NET SUM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-5">
                        <p className="text-xs font-bold text-[#0f172a] mb-1">Heavy Duty Industrial Ball Bearings</p>
                        <p className="text-[10px] text-gray-400 font-medium tracking-wide">SKU: BRG-HD-309</p>
                      </td>
                      <td className="py-5 text-center text-xs text-gray-600 font-medium">20 PCS</td>
                      <td className="py-5 text-right text-xs text-gray-600">₹1250</td>
                      <td className="py-5 text-right text-xs font-bold text-[#0f172a]">₹23,750</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-5">
                        <p className="text-xs font-bold text-[#0f172a] mb-1">High-Temp Pressure Control Valve</p>
                        <p className="text-[10px] text-gray-400 font-medium tracking-wide">SKU: VLV-HT-892</p>
                      </td>
                      <td className="py-5 text-center text-xs text-gray-600 font-medium">2 PCS</td>
                      <td className="py-5 text-right text-xs text-gray-600">₹8900</td>
                      <td className="py-5 text-right text-xs font-bold text-[#0f172a]">₹18,020</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-5">
                        <p className="text-xs font-bold text-[#0f172a] mb-1">Flexible Copper Coaxial Wire Reel (50m)</p>
                        <p className="text-[10px] text-gray-400 font-medium tracking-wide">SKU: COP-W50</p>
                      </td>
                      <td className="py-5 text-center text-xs text-gray-600 font-medium">1 REEL</td>
                      <td className="py-5 text-right text-xs text-gray-600">₹4150</td>
                      <td className="py-5 text-right text-xs font-bold text-[#0f172a]">₹4,150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-end relative z-10">
                <div className="w-64 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-medium">Subtotal:</span>
                    <span className="text-[#0f172a] font-bold">₹ 46,950</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-red-500 font-medium">Discounts:</span>
                    <span className="text-red-500 font-bold">- ₹ 3,030</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-medium">Consolidated Taxes:</span>
                    <span className="text-[#0f172a] font-bold">₹ 8,944.4</span>
                  </div>
                  <div className="pt-3 mt-1 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-sm font-bold text-[#0f172a]">Total (INR):</span>
                    <span className="text-sm font-bold text-[#0f172a]">₹ 52,514</span>
                  </div>
                </div>
              </div>

            </div>

            {/* More Information */}
            <div className="w-full max-w-[850px] bg-[#f8fbff] rounded-xl p-8 border border-blue-50/50 mb-12">
              <h3 className="text-lg font-semibold text-[#1a233a] mb-6">More Information</h3>
              <div className="grid grid-cols-2 gap-y-4 max-w-md text-sm">
                <div className="text-gray-500">Salesperson</div>
                <div className="text-[#1a233a] font-medium">Manoj Kumar</div>
                <div className="text-gray-500">Email Recipients</div>
                <div className="text-[#1a233a] font-medium">manojkumar@globex.com</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default InvoiceDetailPage;
