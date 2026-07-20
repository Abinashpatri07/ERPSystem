import React from 'react';
import { Plus, Filter, MoreHorizontal, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VendorsPage = () => {
  const navigate = useNavigate();

  const vendors = [
    {
      id: 1,
      name: 'Climamax',
      companyName: 'Climamax',
      email: 'ramesh.clima@gmail.com',
      phone: '+91 7465925396',
      payables: '₹0.00',
      unusedCredit: '₹0.00'
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-white flex flex-col relative">
      
      {/* Sub Navigation */}
      <div className="px-8 border-b border-gray-200 bg-white">
        <nav className="flex space-x-8">
          <button
            className="py-4 text-sm font-medium border-b-2 border-blue-500 text-blue-600 transition-colors"
          >
            Vendors
          </button>
        </nav>
      </div>

      <div className="flex-1 p-8">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#1a233a]">All Vendors</h1>
          <div className="flex space-x-3">
            <button 
              onClick={() => navigate('/vendors/new')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center shadow-sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              New
            </button>
            <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8f9fb] border-b border-gray-200 text-sm font-medium text-gray-700">
                <th className="py-4 px-4 w-12 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                </th>
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Company Name</th>
                <th className="py-4 px-4">E-Mail Address</th>
                <th className="py-4 px-4">Work Phone</th>
                <th className="py-4 px-4">Payables(BCY)</th>
                <th className="py-4 px-4">Unused Credit (BCY)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                  </td>
                  <td 
                    onClick={() => navigate(`/vendors/${vendor.id}`)}
                    className="py-4 px-4 text-blue-600 font-medium cursor-pointer hover:underline"
                  >
                    {vendor.name}
                  </td>
                  <td className="py-4 px-4 text-[#1a233a]">{vendor.companyName}</td>
                  <td className="py-4 px-4 text-[#1a233a]">{vendor.email}</td>
                  <td className="py-4 px-4 text-[#1a233a]">{vendor.phone}</td>
                  <td className="py-4 px-4 text-[#1a233a]">{vendor.payables}</td>
                  <td className="py-4 px-4 text-[#1a233a]">{vendor.unusedCredit}</td>
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
