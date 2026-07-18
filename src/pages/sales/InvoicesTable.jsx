import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockInvoices = [
  {
    id: 1,
    date: '30/06/2026',
    invoice: 'INV- 345671',
    orderNo: 'SO-00001',
    customerName: 'CLIMAMAX CONTROLS PRIVATE LIMITED',
    status: 'DRAFT',
    dueDate: '26/06/2026',
    amount: '₹4,67,254.00',
    balanceDue: '₹4,67,254.00',
  }
];

const InvoicesTable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-sm">
            <th className="py-3 px-4 font-semibold text-[#1a233a] w-12 text-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
            </th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Date</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Invoice</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Order Number</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Customer Name</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Status</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Due Date</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Amount</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Balance Due</th>
          </tr>
        </thead>
        <tbody>
          {mockInvoices.map((inv) => (
            <tr key={inv.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-sm">
              <td className="py-4 px-4 text-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
              </td>
              <td className="py-4 px-4 text-[#1a233a]">{inv.date}</td>
              <td 
                className="py-4 px-4 text-blue-500 font-medium cursor-pointer hover:underline"
                onClick={() => navigate(`/sales/invoices/${inv.id}`)} // Placeholder route
              >
                {inv.invoice}
              </td>
              <td className="py-4 px-4 text-[#1a233a]">{inv.orderNo}</td>
              <td className="py-4 px-4 text-[#1a233a]">{inv.customerName}</td>
              <td className="py-4 px-4 text-gray-400 font-medium">{inv.status}</td>
              <td className="py-4 px-4 text-[#1a233a]">{inv.dueDate}</td>
              <td className="py-4 px-4 text-[#1a233a] font-medium">{inv.amount}</td>
              <td className="py-4 px-4 text-[#1a233a] font-medium">{inv.balanceDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTable;
