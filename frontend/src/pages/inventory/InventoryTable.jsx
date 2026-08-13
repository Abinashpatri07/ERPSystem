import React from 'react';

const mockInventory = [
  {
    id: 1,
    itemName: 'Kraft Paper 150 GSM',
    plant: 'Bhubaneswar Unit 1',
    description: 'Brown Kraft Paper Roll',
    purchaseRate: '₹42.00',
    receiveDate: '05/07/2026',
    value: '₹2,10,000',
    stock: '5,000'
  },
  {
    id: 2,
    itemName: 'Corrugated Board 5-Ply',
    plant: 'Cuttack Unit 2',
    description: 'Double Wall Board Sheet',
    purchaseRate: '₹58.00',
    receiveDate: '28/06/2026',
    value: '₹4,64,000',
    stock: '8,000'
  }
];

const InventoryTable = () => {
  return (
    <div className="flex-1 overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f4f6f8] border-b border-gray-200 text-[13px]">
            <th className="py-3 pl-8 pr-6 font-medium text-gray-500 w-16 text-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
            </th>
            <th className="py-3 px-6 font-medium text-gray-500 whitespace-nowrap">Item Name</th>
            <th className="py-3 px-6 font-medium text-gray-500 whitespace-nowrap">Plant</th>
            <th className="py-3 px-6 font-medium text-gray-500 whitespace-nowrap">Purchase Description</th>
            <th className="py-3 px-6 font-medium text-gray-500 whitespace-nowrap">Purchase Rate</th>
            <th className="py-3 px-6 font-medium text-gray-500 whitespace-nowrap">Receive Date</th>
            <th className="py-3 px-6 font-medium text-gray-500 whitespace-nowrap">Value</th>
            <th className="py-3 pr-8 pl-6 font-medium text-gray-500 whitespace-nowrap text-right">Stock In</th>
          </tr>
        </thead>
        <tbody>
          {mockInventory.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors text-[13px]">
              <td className="py-4 pl-8 pr-6 text-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
              </td>
              <td className="py-4 px-6 text-blue-500 font-medium cursor-pointer hover:underline">
                {item.itemName}
              </td>
              <td className="py-4 px-6 text-[#1a233a] font-medium">{item.plant}</td>
              <td className="py-4 px-6 text-[#1a233a] font-medium max-w-[200px] truncate" title={item.description}>
                {item.description}
              </td>
              <td className="py-4 px-6 text-[#1a233a] font-medium">{item.purchaseRate}</td>
              <td className="py-4 px-6 text-[#1a233a] font-medium">{item.receiveDate}</td>
              <td className="py-4 px-6 text-[#1a233a] font-medium">{item.value}</td>
              <td className="py-4 pr-8 pl-6 text-gray-900 font-medium text-right">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
