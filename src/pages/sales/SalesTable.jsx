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
  },
  {
    id: 2,
    date: '03/07/2026',
    salesOrderNo: 'SL-000023',
    referenceNo: 'QT-000023',
    customerName: 'ABC PACKAGING PRIVATE LIMITED',
    orderStatus: 'Accepted',
    payment: '3,42,180',
    packed: '...',
  },
  {
    id: 3,
    date: '08/07/2026',
    salesOrderNo: 'SL-000024',
    referenceNo: 'QT-000024',
    customerName: 'SUNRISE PRIVATE LIMITED',
    orderStatus: 'Accepted',
    payment: '2,15,600',
    packed: '...',
  }
];

const SalesTable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f4f6f8] border-b border-gray-200 text-sm">
            <th className="py-3 pl-8 pr-6 font-semibold text-[#1a233a] w-16 text-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
            </th>
            <th className="py-3 px-6 font-semibold text-gray-600">Date</th>
            <th className="py-3 px-6 font-semibold text-gray-600 whitespace-nowrap">Sales Order#</th>
            <th className="py-3 px-6 font-semibold text-gray-600">Reference#</th>
            <th className="py-3 px-6 font-semibold text-gray-600">Customer Name</th>
            <th className="py-3 px-6 font-semibold text-gray-600">Order Status</th>
            <th className="py-3 px-6 font-semibold text-gray-600">Payment</th>
            <th className="py-3 pr-8 pl-6 font-semibold text-gray-600 text-center">Packed</th>
          </tr>
        </thead>
        <tbody>
          {mockSalesOrders.map((order) => (
            <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-[13px]">
              <td className="py-3 pl-8 pr-6 text-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
              </td>
              <td className="py-3 px-6 text-[#1a233a] font-medium">{order.date}</td>
              <td 
                className="py-3 px-6 text-blue-600 font-medium cursor-pointer hover:underline whitespace-nowrap"
                onClick={() => navigate(`/sales/order/${order.salesOrderNo}`)}
              >
                {order.salesOrderNo}
              </td>
              <td className="py-3 px-6 text-[#1a233a] font-medium">{order.referenceNo}</td>
              <td className="py-3 px-6 text-[#1a233a] font-medium max-w-[200px] truncate" title={order.customerName}>
                {order.customerName}
              </td>
              <td className="py-3 px-6 text-green-500 font-medium">{order.orderStatus}</td>
              <td className="py-3 px-6 text-[#1a233a] font-medium">{order.payment}</td>
              <td className="py-3 pr-8 pl-6 text-gray-900 font-bold text-center text-lg">{order.packed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
