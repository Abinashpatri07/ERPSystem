import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockSalesOrders = [
  {
    id: 1,
    date: '25/06/2026',
    salesOrderNo: 'SL-000001',
    referenceNo: 'QT-000001',
    customerName: 'CLIMAMAX CONTROLS PRIVATE LIMITED',
    orderStatus: 'Accepted',
    payment: '2,34,654',
    packed: '...',
  }
];

const SalesTable = () => {
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
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Sales Orders#</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Refence#</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Customer Name</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Order Status</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Payment</th>
            <th className="py-3 px-4 font-semibold text-[#1a233a]">Packed</th>
          </tr>
        </thead>
        <tbody>
          {mockSalesOrders.map((order) => (
            <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-sm">
              <td className="py-4 px-4 text-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
              </td>
              <td className="py-4 px-4 text-gray-700">{order.date}</td>
              <td 
                className="py-4 px-4 text-blue-500 font-medium cursor-pointer hover:underline"
                onClick={() => navigate(`/sales/order/${order.salesOrderNo}`)}
              >
                {order.salesOrderNo}
              </td>
              <td className="py-4 px-4 text-gray-700">{order.referenceNo}</td>
              <td className="py-4 px-4 text-[#1a233a] max-w-[200px] truncate" title={order.customerName}>
                {order.customerName}
              </td>
              <td className="py-4 px-4 text-green-500 font-medium">{order.orderStatus}</td>
              <td className="py-4 px-4 text-gray-700">{order.payment}</td>
              <td className="py-4 px-4 text-gray-700">{order.packed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
