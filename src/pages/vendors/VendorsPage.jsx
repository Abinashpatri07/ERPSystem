import React from 'react';
import { Plus, Filter, MoreHorizontal, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VendorsPage = () => {
  const navigate = useNavigate();

  const vendors = [
    {
      id: 1,
      name: 'Climamax',
      companyName: 'Climamax Controls',
      email: 'ramesh.clima@gmail.com',
      phone: '+91 7465925396',
      payables: '₹0.00',
      unusedCredit: '₹0.00'
    },
    {
      id: 2,
      name: 'Sunrise',
      companyName: 'Century Pulp & Paper',
      email: 'nilesh.rise@gmail.com',
      phone: '+91 8456293569',
      payables: '₹0.00',
      unusedCredit: '₹0.00'
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-white flex flex-col relative">
      
      {/* Page Toolbar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8]">All Vendors</h2>
        <div className="flex items-center space-x-2.5">
          <button 
            onClick={() => navigate('/vendors/new')}
            className="bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] hover:opacity-90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center transition-opacity shadow-sm"
          >
            <Plus className="w-3 h-3 mr-1" strokeWidth={2.5} />
            New
          </button>
          <button className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300/50 rounded-full flex items-center justify-center transition-colors">
            <Filter className="w-3 h-3" strokeWidth={1.5} />
          </button>
          <button className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300/50 rounded-full flex items-center justify-center transition-colors">
            <MoreHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="flex-1 pb-8 w-full overflow-x-auto">
        <div className="w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f4f6f8] border-b border-gray-200 text-sm">
                <th className="py-3 pl-8 pr-6 font-semibold text-[#1a233a] w-16 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                </th>
                <th className="py-3 px-6 font-semibold text-gray-600">Name</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Company Name</th>
                <th className="py-3 px-6 font-semibold text-gray-600">E-Mail Address</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Work Phone</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Payables(BCY)</th>
                <th className="py-3 pr-8 pl-6 font-semibold text-gray-600">Unused Credit (BCY)</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-[13px]">
                  <td className="py-3 pl-8 pr-6 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                  </td>
                  <td 
                    onClick={() => navigate(`/vendors/${vendor.id}`)}
                    className="py-3 px-6 text-blue-600 font-medium cursor-pointer hover:underline"
                  >
                    {vendor.name}
                  </td>
                  <td className="py-3 px-6 text-[#1a233a] font-medium">{vendor.companyName}</td>
                  <td className="py-3 px-6 text-blue-500 font-medium">{vendor.email}</td>
                  <td className="py-3 px-6 text-[#1a233a] font-medium">{vendor.phone}</td>
                  <td className="py-3 px-6 text-[#1a233a] font-medium">{vendor.payables}</td>
                  <td className="py-3 pr-8 pl-6 text-[#1a233a] font-medium">{vendor.unusedCredit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </main>
  );
};

export default VendorsPage;
