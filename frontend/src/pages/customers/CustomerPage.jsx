import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { ChevronDown, Plus, MoreHorizontal } from 'lucide-react';
import CustomerTable from './CustomerTable';

const CustomerPage = () => {
  const { searchQuery = '' } = useOutletContext() || {};
  
  const [customers, setCustomers] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/customers/');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        const mappedCustomers = data.map(item => ({
          id: item.id,
          name: item.display_name || item.company_name || 'N/A',
          gst: item.gstin || '-',
          primaryContact: `${item.primary_contact_first_name || ''} ${item.primary_contact_last_name || ''}`.trim() || 'N/A',
          email: item.email_address || '-',
          phone: item.primary_number || '-',
          receivable: `₹${item.opening_balance || '0.00'}`,
          status: 'Active'
        }));
        setCustomers(mappedCustomers);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Filter logic
  const safeQuery = (searchQuery || '').toLowerCase();
  const filteredCustomers = customers.filter(customer => 
    (customer.name || '').toLowerCase().includes(safeQuery) ||
    (customer.gst || '').toLowerCase().includes(safeQuery) ||
    (customer.email || '').toLowerCase().includes(safeQuery) ||
    (customer.phone || '').includes(safeQuery)
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
    <main className="flex-1 overflow-y-auto bg-[#f4f7f9] flex flex-col relative p-1.5 gap-1.5">
      
      {/* Page Toolbar */}
      <div className="flex items-center justify-between px-8 py-3 bg-white border border-gray-200 rounded-xl shadow-sm shrink-0">
        <div className="flex items-center space-x-1 cursor-pointer">
          <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8]">All Customer</h2>
          <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
        </div>
        <div className="flex items-center space-x-3">
          <Link 
            to="/customers/new"
            className="bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] hover:opacity-90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center transition-opacity shadow-sm"
          >
            <Plus className="w-3 h-3 mr-1" strokeWidth={2.5} />
            New
          </Link>
          <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-colors">
            <MoreHorizontal className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 overflow-hidden flex flex-col">
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
        </div>

    </main>
  );
};

export default CustomerPage;
