import React, { useState } from 'react';
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
  Eye,
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
  const [showPreview, setShowPreview] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const tabs = [
    { name: 'Quotes', path: '/sales/quotes' },
    { name: 'Sales Orders', path: '/sales/orders' },
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

              <div>
                <label className="block text-sm font-medium text-[#1a233a] mb-2">Product Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border border-[#c4d6eb] rounded-md px-4 py-2.5 text-sm text-[#1a233a] focus:outline-none focus:border-[#3ca0d3] appearance-none bg-white font-medium">
                    <option>Standard</option>
                    <option>Butterfly</option>
                    <option>Custom</option>
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
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-8 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] rounded-b-xl z-10">
        <div>
          <button 
            onClick={() => setShowPreview(true)}
            className="flex items-center px-4 py-2 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors"
          >
            <Eye className="w-4 h-4 mr-2" strokeWidth={2} />
            Preview Quote
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <Bookmark className="w-4 h-4 mr-2 text-gray-500" strokeWidth={2} />
            Save Draft
          </button>
          <button 
            onClick={() => navigate('/sales/quotes')}
            className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setShowOrderSummary(true)}
            className="px-8 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Save
          </button>
        </div>
      </div>

      {/* Quote Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-8">
          <div className="bg-gray-100 w-full max-w-5xl h-full rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-white px-6 py-4 border-b flex justify-between items-center shadow-sm z-10">
              <h3 className="text-lg font-bold text-slate-800 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-indigo-600" />
                Quote Preview
              </h3>
              <button 
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                Close Preview
              </button>
            </div>
            
            {/* Modal Body - Document Area */}
            <div className="flex-1 overflow-y-auto p-8 flex justify-center custom-scrollbar">
              <div className="bg-white w-[800px] min-h-[1050px] shadow-lg relative p-12">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                  <span className="text-[150px] font-black tracking-widest transform -rotate-45 text-gray-900">PREVIEW</span>
                </div>

                {/* Header */}
                <div className="flex justify-between items-start border-b-2 border-gray-100 pb-8 mb-8">
                  <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">QUOTE</h1>
                    <p className="text-gray-500 mt-1 font-medium">QT-000003</p>
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-bold text-gray-800">Globex Advanced Ltd.</h2>
                    <p className="text-sm text-gray-500 mt-1">142 Tech Park, Sector 4<br/>Bangalore, KA 560034<br/>GSTIN: 29AABCU9603R1Z2</p>
                  </div>
                </div>

                {/* Bill To & Details */}
                <div className="flex justify-between mb-10">
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Quote For</h3>
                    <p className="font-bold text-gray-800">ZAP Private Limited</p>
                    <p className="text-sm text-gray-600 mt-1">GST: 27AABCUJMSAIU462BC<br/>Phone: +91 764539543<br/>Attn: Rahul Mehta</p>
                  </div>
                  <div className="text-right">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                      <span className="text-gray-500">Quote Date:</span>
                      <span className="font-medium text-gray-800">18 Jul 2026</span>
                      <span className="text-gray-500">Valid Until:</span>
                      <span className="font-medium text-gray-800">18 Aug 2026</span>
                      <span className="text-gray-500">Sales Person:</span>
                      <span className="font-medium text-gray-800">Manoj Kumar</span>
                    </div>
                  </div>
                </div>

                {/* Specifications Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8">
                  <h3 className="text-sm font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Product Specifications: Custom Corrugated Box</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div><span className="text-gray-500">Type:</span> <span className="font-medium text-gray-800">Printed</span></div>
                    <div><span className="text-gray-500">Size:</span> <span className="font-medium text-gray-800">Medium</span></div>
                    <div><span className="text-gray-500">Measurement:</span> <span className="font-medium text-gray-800">998 x 654 x 663</span></div>
                    <div><span className="text-gray-500">Joint:</span> <span className="font-medium text-gray-800">Clean</span></div>
                    <div><span className="text-gray-500">Ply:</span> <span className="font-medium text-gray-800">5 Ply</span></div>
                    <div><span className="text-gray-500">Print:</span> <span className="font-medium text-gray-800">CMYK (4 Colors)</span></div>
                  </div>
                </div>

                {/* Pricing Table */}
                <table className="w-full text-left mb-8">
                  <thead>
                    <tr className="border-b-2 border-gray-800 text-gray-800">
                      <th className="py-3 text-sm font-bold w-1/2">Item Description</th>
                      <th className="py-3 text-sm font-bold text-center">Qty</th>
                      <th className="py-3 text-sm font-bold text-right">Rate</th>
                      <th className="py-3 text-sm font-bold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-4">
                        <p className="font-bold text-gray-800">Custom Box Manufacturing</p>
                        <p className="text-gray-500 mt-1">High-density premium finish as per specifications.</p>
                      </td>
                      <td className="py-4 text-center font-medium">5000</td>
                      <td className="py-4 text-right">₹ 145.00</td>
                      <td className="py-4 text-right font-medium">₹ 7,25,000.00</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4">
                        <p className="font-bold text-gray-800">Setup & Tooling Charge</p>
                        <p className="text-gray-500 mt-1">One-time die and plate creation fee.</p>
                      </td>
                      <td className="py-4 text-center font-medium">1</td>
                      <td className="py-4 text-right">₹ 12,000.00</td>
                      <td className="py-4 text-right font-medium">₹ 12,000.00</td>
                    </tr>
                  </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end mb-12">
                  <div className="w-72">
                    <div className="flex justify-between py-2 text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-800">₹ 7,37,000.00</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm border-b border-gray-200">
                      <span className="text-gray-600">IGST (18%)</span>
                      <span className="font-medium text-gray-800">₹ 1,32,660.00</span>
                    </div>
                    <div className="flex justify-between py-3 text-lg font-bold text-gray-900 bg-gray-50 px-3 mt-2 rounded-lg">
                      <span>Total</span>
                      <span>₹ 8,69,660.00</span>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-2">Terms & Conditions</h4>
                  <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                    <li>Quote is valid for 30 days from the date of issuance.</li>
                    <li>Payment terms: 50% advance, 50% against delivery.</li>
                    <li>Delivery timeline: 15-20 business days from artwork approval.</li>
                    <li>Subject to Bangalore jurisdiction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Order Summary Modal */}
      {showOrderSummary && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh]">
            
            {/* Header */}
            <div className="bg-[#3a6878] px-6 py-4 flex justify-between items-center">
              <div>
                <p className="text-white/80 text-xs font-medium mb-0.5">Live Order Summary</p>
                <h3 className="text-xl font-bold text-white">Preview</h3>
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-[#3a6878]" />
              </div>
            </div>
            
            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-8">
              
              {/* Customer */}
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-4">Customer</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Name</span>
                    <span className="text-sm text-gray-800 font-bold">ZAP Private Limited</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">POC Name</span>
                    <span className="text-sm text-gray-800 font-bold">Rahul Mehta</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">GST Number</span>
                    <span className="text-sm text-gray-800 font-bold">22AAAAA0000A1Z5</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Phone</span>
                    <span className="text-sm text-gray-800 font-bold">+91 98765 43210</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-4">Specifications</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Box Type</span>
                    <span className="text-sm text-gray-800 font-bold">Printed</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Size</span>
                    <span className="text-sm text-gray-800 font-bold">Medium</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Measurement</span>
                    <span className="text-sm text-gray-800 font-bold">998 * 654 * 663</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Ply Type</span>
                    <span className="text-sm text-gray-800 font-bold">3 Ply</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Joint Type</span>
                    <span className="text-sm text-gray-800 font-bold">Pin</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Print Type</span>
                    <span className="text-sm text-gray-800 font-bold">No Print</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Number of Orders</span>
                    <span className="text-sm text-gray-800 font-bold">500</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">HSN/SAC</span>
                    <span className="text-sm text-gray-800 font-bold">#4819</span>
                  </div>
                </div>
              </div>

              {/* Calculation */}
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-4">Calculation</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Board Size</span>
                    <span className="text-sm text-gray-800 font-bold">18 * 12 * 10 in</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Paper</span>
                    <span className="text-sm text-gray-800 font-bold">5 Ply (180 GSM + 150 GSM + 180 GSM)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Top</span>
                    <span className="text-sm text-gray-800 font-bold">5 Ply (180 GSM + 150 GSM + 180 GSM)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Inside</span>
                    <span className="text-sm text-gray-800 font-bold">Test Liner 150 GSM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Box Width</span>
                    <span className="text-sm text-gray-800 font-bold">420 g</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Total Width</span>
                    <span className="text-sm text-gray-800 font-bold">4.20 kg (10 Boxes)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Rate</span>
                    <span className="text-sm text-gray-800 font-bold">₹62.50 / Box</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Box Value</span>
                    <span className="text-sm text-gray-800 font-bold">₹625.00</span>
                  </div>
                </div>
              </div>

              {/* Estimated Total Block */}
              <div className="bg-[#eaf4fd] rounded-xl p-6 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-[#4491e0] uppercase tracking-wider mb-2">Estimated Total</p>
                  <h2 className="text-4xl font-bold text-[#1a233a]">4,45,596</h2>
                </div>
                <div className="text-xl font-medium text-[#4491e0]">
                  @ ₹142/BOX
                </div>
              </div>

              {/* Production Status */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">Production Status</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
                  Ready for Production
                </span>
              </div>

            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-end items-center space-x-3">
              <button 
                onClick={() => setShowOrderSummary(false)}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => navigate('/sales/quotes')}
                className="px-6 py-2.5 bg-[#2563eb] text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
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

export default CreateQuotePage;
