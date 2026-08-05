import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockQuotes = [
  {
    id: 1,
    date: '25/06/2026',
    quoteNo: 'QT-000001',
    customerName: 'CLIMAMAX CONTROLS PRIVATE LIMITED',
    order: 'NS',
    amount: '2,34,654',
    status: 'Accepted',
  }
];

const QuotesTable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f4f6f8] border-b border-gray-200 text-sm">
            <th className="py-3 pl-8 pr-6 font-semibold text-[#1a233a] w-16 text-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
            </th>
            <th className="py-3 px-6 font-semibold text-[#1a233a]">Date</th>
            <th className="py-3 px-6 font-semibold text-[#1a233a]">Quote Number</th>
            <th className="py-3 px-6 font-semibold text-[#1a233a]">Customer Name</th>
            <th className="py-3 px-6 font-semibold text-[#1a233a]">Order</th>
            <th className="py-3 px-6 font-semibold text-[#1a233a]">Amount</th>
            <th className="py-3 pr-8 pl-6 font-semibold text-[#1a233a]">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockQuotes.map((quote) => (
            <tr key={quote.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-[13px]">
              <td className="py-3 pl-8 pr-6 text-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
              </td>
              <td className="py-3 px-6 text-[#1a233a] font-medium">
                {quote.date}
              </td>
              <td 
                className="py-3 px-6 text-blue-600 font-medium cursor-pointer hover:underline"
                onClick={() => navigate(`/sales/quotes/${quote.quoteNo}`)}
              >
                {quote.quoteNo}
              </td>
              <td className="py-3 px-6 text-[#1a233a] font-medium">{quote.customerName}</td>
              <td className="py-3 px-6 text-[#1a233a] font-medium">{quote.order}</td>
              <td className="py-3 px-6 text-[#1a233a] font-medium">{quote.amount}</td>
              <td className="py-3 pr-8 pl-6 text-green-500 font-medium">{quote.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotesTable;
