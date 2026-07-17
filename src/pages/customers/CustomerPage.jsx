import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Plus, MoreHorizontal } from 'lucide-react';
import CustomerTable from './CustomerTable';

const initialCustomers = [
  { id: 1, name: 'ZAP INDIA PRIVATE LIMITED', company: 'ZAP INDIA PRIVATE LIMITED', email: 'rajesg.zap@gmail.com', phone: '+91 746359465', receivables: '2,34,654' },
  { id: 2, name: 'Apex Packaging Solutions', company: 'Apex Packaging Solutions', email: 'contact@apexpack.in', phone: '+91 9876543210', receivables: '1,12,000' },
  { id: 3, name: 'Global Cartons Ltd', company: 'Global Cartons Ltd', email: 'billing@globalcartons.com', phone: '+91 8899776655', receivables: '5,40,200' },
  { id: 4, name: 'EcoBox Enterprises', company: 'EcoBox Enterprises', email: 'hello@ecobox.co.in', phone: '+91 9988776655', receivables: '85,500' }
];

const CustomerPage = () => {
  // Retrieve search query from the MainLayout Outlet context
  const { searchQuery } = useOutletContext();
  
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedIds, setSelectedIds] = useState([]);

  // Filter logic
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );

  // Selection logic
  const handleToggleSelectAll = () => {
    if (selectedIds.length === filteredCustomers.length && filteredCustomers.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredCustomers.map(c => c.id));
    }
  };

  const handleToggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <main className="flex-1 overflow-y-auto bg-white m-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
      
      {/* Page Toolbar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">All Customer</h2>
        <div className="flex items-center space-x-3">
          <Link 
            to="/customers/new"
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4 mr-2" strokeWidth={2} />
            New Customer
          </Link>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-2 rounded-lg transition-colors">
            <MoreHorizontal className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Table Component */}
      <CustomerTable 
        customers={filteredCustomers} 
        selectedIds={selectedIds}
        onToggleSelectAll={handleToggleSelectAll}
        onToggleSelect={handleToggleSelect}
        searchQuery={searchQuery}
      />
      
      {/* Footer */}
      <div className="px-6 py-3 border-t border-gray-100 bg-[#f8f9fb] text-xs text-gray-500 flex justify-between items-center rounded-b-xl mt-auto">
        <span>Showing {filteredCustomers.length} customer(s)</span>
        {selectedIds.length > 0 && (
          <span className="text-blue-600 font-medium">{selectedIds.length} selected</span>
        )}
      </div>

    </main>
  );
};

export default CustomerPage;
