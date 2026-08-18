import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MoreHorizontal, ChevronDown } from 'lucide-react';

const machineData = [
  {
    id: 1,
    code: '61/01',
    name: 'AD 1228_5C',
    toTDay: '11',
    weeklyOff: '02',
    working: '09',
    possHR: '216',
    reportedHRS: '108.93',
    utilization: '50.43'
  }
];

const MachinePage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-1 overflow-y-auto bg-[#f4f7f9] flex flex-col relative p-1.5 gap-1.5">
      
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm shrink-0 px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-1 cursor-pointer">
          <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] bg-clip-text text-transparent inline-block w-fit">
            Machines
          </h2>
          <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate('/machine/new')}
            className="bg-gradient-to-r from-[#ff7a59] via-[#d54a88] to-[#402de8] hover:opacity-90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center transition-opacity shadow-sm"
          >
            <Plus className="w-3 h-3 mr-1" strokeWidth={2.5} />
            New
          </button>
          <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-colors">
            <MoreHorizontal className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 overflow-hidden flex flex-col">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-[#f8f9fa]">
              <th className="w-10 px-4 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              </th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Machine Code</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Machine Name</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">To T Day</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Weekly Off</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Working</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Poss HR</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Reported HRS</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#1a233a] whitespace-nowrap">Utilization</th>
            </tr>
          </thead>
          <tbody>
            {machineData.map((machine) => (
              <tr key={machine.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer bg-white">
                <td className="px-4 py-4 text-left">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                </td>
                <td className="px-4 py-4 text-[13px] text-gray-700">{machine.code}</td>
                <td className="px-4 py-4">
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/machine/${machine.id}`);
                    }}
                    className="text-[13px] text-blue-500 hover:underline cursor-pointer"
                  >
                    {machine.name}
                  </span>
                </td>
                <td className="px-4 py-4 text-[13px] text-gray-700">{machine.toTDay}</td>
                <td className="px-4 py-4 text-[13px] text-gray-700">{machine.weeklyOff}</td>
                <td className="px-4 py-4 text-[13px] text-gray-700">{machine.working}</td>
                <td className="px-4 py-4 text-[13px] text-gray-700">{machine.possHR}</td>
                <td className="px-4 py-4 text-[13px] text-gray-700">{machine.reportedHRS}</td>
                <td className="px-4 py-4 text-[13px] text-gray-700">{machine.utilization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </main>
  );
};

export default MachinePage;
