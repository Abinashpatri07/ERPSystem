import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerTable = ({ customers, selectedIds, onToggleSelectAll, onToggleSelect, searchQuery }) => {
  const navigate = useNavigate();

  // If there are customers, check if all are selected
  const allSelected = customers.length > 0 && selectedIds.length === customers.length;

  return (
    <div className="overflow-x-auto flex-1">
      <table className="w-full text-sm text-left">
        <thead className="bg-[#f8f9fb] text-gray-700 border-b border-gray-200 font-medium sticky top-0">
          <tr>
            <th className="px-6 py-4 w-12">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-500 focus:ring-blue-500 w-4 h-4 cursor-pointer" 
                checked={allSelected}
                onChange={onToggleSelectAll}
              />
            </th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Company Name</th>
            <th className="px-6 py-4">E-Mail</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Receivables</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {customers.length > 0 ? (
            customers.map(customer => (
              <tr 
                key={customer.id} 
                onClick={() => navigate('/customers/1')}
                className={`hover:bg-gray-50/80 transition-colors group cursor-pointer ${selectedIds.includes(customer.id) ? 'bg-blue-50/50' : ''}`}
              >
                <td className="px-6 py-4" onClick={e => e.stopPropagation()}>
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                    checked={selectedIds.includes(customer.id)}
                    onChange={() => onToggleSelect(customer.id)}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-blue-600 cursor-pointer hover:underline">
                  {customer.name}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {customer.company}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {customer.email}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {customer.phone}
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {customer.receivables}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                No customers found {searchQuery ? `matching "${searchQuery}"` : ''}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
