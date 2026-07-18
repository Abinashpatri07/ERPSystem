import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserPlus, 
  Building2, 
  CircleDollarSign, 
  Phone, 
  BarChart3, 
  ChevronDown,
  Bookmark,
  FileText,
  ShoppingCart,
  Factory,
  Package,
  Truck,
  Receipt,
  CheckCircle,
  CreditCard,
  Calendar,
  Layers,
  Printer,
  Palette,
  Maximize,
  UploadCloud,
  ClipboardList
} from 'lucide-react';

const CreateQuotePage = () => {
  const navigate = useNavigate();
  const tabs = [
    { name: 'Quotes', path: '/sales/quotes' },
    { name: 'Sales Orders', path: '/sales' },
    { name: 'Invoices', path: '/sales/invoices' },
    { name: 'Payments', path: '/sales/payments' }
  ];

  // Stepper Items
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
    <main className="flex-1 overflow-y-auto bg-[#f8f9fb] flex flex-col relative">
      
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white">
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

      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar pb-24">
        
        {/* Top Banner with Stepper */}
        <div className="bg-[#244f5d] text-white p-6 mb-4 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold tracking-wide leading-tight mb-6">
            Quote Creation
          </h2>
          
          <div className="flex items-center overflow-x-auto pb-2 custom-scrollbar">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <div className={`flex items-center px-4 py-2 rounded-full font-medium text-sm flex-shrink-0 shadow-sm ${
                    step.active ? 'bg-white text-[#244f5d]' : 'bg-[#5c8a99] text-white'
                  }`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 ${
                      step.active ? 'bg-[#244f5d] text-white' : 'bg-white text-[#5c8a99]'
                    }`}>
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    {step.name}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-[1px] bg-white/30 flex-shrink-0 mx-1"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Form Area */}
        <div className="max-w-5xl space-y-6">
          
          {/* Section 1: Customer Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-[3px] border-t-blue-600 p-8">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4 shadow-sm flex-shrink-0">
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
              <div className="border border-[#c4d6eb] rounded-xl p-4 bg-white shadow-sm flex flex-col">
                <span className="text-xs font-medium text-gray-400 mb-2">Name</span>
                <div className="flex items-center text-[#1a233a] font-semibold text-lg">
                  <Building2 className="w-5 h-5 text-gray-400 mr-3" />
                  ZAP Private Limited
                </div>
              </div>
              <div className="border border-[#c4d6eb] rounded-xl p-4 bg-white shadow-sm flex flex-col">
                <span className="text-xs font-medium text-gray-400 mb-2">GST</span>
                <div className="flex items-center text-[#1a233a] font-semibold text-lg">
                  <CircleDollarSign className="w-5 h-5 text-gray-400 mr-3" />
                  27AABCUJMSAIU462BC
                </div>
              </div>
              <div className="border border-[#c4d6eb] rounded-xl p-4 bg-white shadow-sm flex flex-col">
                <span className="text-xs font-medium text-gray-400 mb-2">Phone</span>
                <div className="flex items-center text-[#1a233a] font-semibold text-lg">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  +91 764539543
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Quote */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-[3px] border-t-[#3ca0d3] p-8">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-[#3ca0d3] rounded-lg flex items-center justify-center text-white mr-4 shadow-sm flex-shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a233a]">Quote</h3>
                <p className="text-xs text-gray-400 mt-1">Determine product size limits, raw material configurations, and volume structures.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Quote <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  defaultValue="QT-000003"
                  className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] font-medium" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Reference#</label>
                <input 
                  type="text" 
                  className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Quote Date</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="DD/MM/YYYY"
                    className="w-full border border-[#c4d6eb] rounded-md pl-4 pr-10 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" 
                  />
                  <Calendar className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Expire Date</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="DD/MM/YYYY"
                    className="w-full border border-[#c4d6eb] rounded-md pl-4 pr-10 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" 
                  />
                  <Calendar className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Sales Persons</label>
                <div className="relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option>Manoj Kumar</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#1a233a] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Project Name</label>
                <input 
                  type="text" 
                  placeholder="Select Project"
                  className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-[#3ca0d3]" 
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3]" 
                />
              </div>
            </div>
          </div>

          {/* Section 3: Product Requirements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-[3px] border-t-[#3ca0d3] p-8">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-[#3ca0d3] rounded-lg flex items-center justify-center text-white mr-4 shadow-sm flex-shrink-0">
                <Factory className="w-5 h-5" />
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

          {/* Section 4: Print Specifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-[3px] border-t-white p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-100 to-blue-200"></div>
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-[#8cb6c4] rounded-lg flex items-center justify-center text-white mr-4 shadow-sm flex-shrink-0">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a233a]">Print Specifications</h3>
                <p className="text-xs text-gray-400 mt-1">Required for printed boxes.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Number of Colors <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <Palette className="w-4 h-4" />
                  </span>
                  <input type="text" defaultValue="4" className="w-full border border-[#c4d6eb] rounded-md pl-10 pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] font-medium" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Print Area <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <Maximize className="w-4 h-4" />
                  </span>
                  <input type="text" defaultValue="120 * 80 mm" className="w-full border border-[#c4d6eb] rounded-md pl-10 pr-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] font-medium" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Artwork Upload <span className="text-red-500">*</span></label>
                <div className="border-2 border-dashed border-blue-400 rounded-lg p-6 flex items-center justify-center bg-white cursor-pointer hover:bg-blue-50/50 transition-colors h-[88px]">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <UploadCloud className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#1a233a]">Drop artwork or click to upload</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">PDF, AI, PSD, PNG or JPG - up to 25 MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Printing Notes</label>
                <textarea 
                  className="w-full border border-[#c4d6eb] rounded-md px-4 py-3 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] h-[88px] resize-none font-medium" 
                  defaultValue="High-density premium finish expected on all outer faces."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Section 5: Additional Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-[3px] border-t-orange-500 p-8">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white mr-4 shadow-sm flex-shrink-0">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a233a]">Additional Information</h3>
                <p className="text-xs text-gray-400 mt-1">Delivery, priority and instructions.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Delivery Date <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    defaultValue="07/15/2026"
                    className="w-full border border-[#c4d6eb] rounded-md pl-10 pr-10 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] font-medium" 
                  />
                  <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-300 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Customer Type <span className="text-red-500">*</span></label>
                <div className="flex items-center space-x-6 mt-3">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="customerType" className="peer sr-only" />
                      <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-600 group-hover:border-blue-400 flex items-center justify-center transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Normal</span>
                  </label>

                  <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="customerType" className="peer sr-only" defaultChecked />
                      <div className="w-4 h-4 rounded-full border border-blue-600 flex items-center justify-center transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-600 scale-100 transition-transform"></div>
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-[#1a233a] font-medium">Urgent</span>
                  </label>

                  <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="customerType" className="peer sr-only" />
                      <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-600 group-hover:border-blue-400 flex items-center justify-center transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">High Priority</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Remarks / Special Instructions</label>
                <textarea 
                  className="w-full border border-[#c4d6eb] rounded-md px-4 py-3 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] h-28 resize-none" 
                  defaultValue="Batch requires additional edge reinforcing during custom slotting."
                ></textarea>
              </div>
            </div>
          </div>

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
          className="px-8 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          Save
        </button>
      </div>

    </main>
  );
};

export default CreateQuotePage;
