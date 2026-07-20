import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockQuotes = [
  {
    id: 1,
    date: '25/06/2026',
    quoteNo: 'QT-000001',
    referenceNo: 'PO-001',
    customerName: 'CLIMAMAX CONTROLS PRIVATE LIMITED',
    status: 'Accepted',
    amount: '2,34,654',
  }
];

const QuotesTable = () => {
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
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Quote Number</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Refence Number</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Customer Name</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Status</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Amount</th>
          </tr>
        </thead>
        <tbody>
          {mockQuotes.map((quote) => (
            <tr key={quote.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-sm">
              <td className="py-4 px-4 text-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
              </td>
              <td className="py-4 px-4 text-[#1a233a]">
                {quote.date}
              </td>
              <td 
                className="py-4 px-4 text-blue-500 font-medium cursor-pointer hover:underline"
                onClick={() => navigate(`/sales/quotes/${quote.quoteNo}`)}
              >
                {quote.quoteNo}
              </td>
              <td className="py-4 px-4 text-[#1a233a]">{quote.referenceNo}</td>
              <td className="py-4 px-4 text-[#1a233a]">{quote.customerName}</td>
              <td className="py-4 px-4 text-green-500 font-medium">{quote.status}</td>
              <td className="py-4 px-4 text-[#1a233a] font-medium">{quote.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotesTable;
