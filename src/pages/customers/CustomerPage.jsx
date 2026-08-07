import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Plus, MoreHorizontal, Filter } from 'lucide-react';
import CustomerTable from './CustomerTable';

const initialCustomers = [
  { id: 1, name: 'ZAP INDIA PRIVATE LIMITED', company: 'ZAP INDIA PRIVATE LIMITED', email: 'rajesg.zap@gmail.com', phone: '+91 746359465', receivables: '2,34,654' },
  { id: 2, name: 'ABC INDIA PRIVATE LIMITED', company: 'ABC INDIA PRIVATE LIMITED', email: 'nilesh.abc@gmail.com', phone: '+91 847259685', receivables: '3,44,600' }
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
    <main className="flex-1 overflow-y-auto bg-white flex flex-col relative">
      
      {/* Page Toolbar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8]">All Customer</h2>
        <div className="flex items-center space-x-2.5">
          <Link 
            to="/customers/new"
            className="bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] hover:opacity-90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center transition-opacity shadow-sm"
          >
            <Plus className="w-3 h-3 mr-1" strokeWidth={2.5} />
            New
          </Link>
          <button className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300/50 rounded-full flex items-center justify-center transition-colors">
            <Filter className="w-3 h-3" strokeWidth={1.5} />
          </button>
          <button className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300/50 rounded-full flex items-center justify-center transition-colors">
            <MoreHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
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
      <div className="px-6 py-4 border-t border-gray-100 bg-white text-xs text-gray-500 flex justify-between items-center mt-auto">
        <span>Showing {filteredCustomers.length} customer(s)</span>
        {selectedIds.length > 0 && (
          <span className="text-blue-600 font-medium">{selectedIds.length} selected</span>
        )}
      </div>

    </main>
  );
};

export default CustomerPage;
