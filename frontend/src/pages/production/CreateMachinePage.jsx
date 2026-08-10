import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, ChevronDown, ChevronUp } from 'lucide-react';

const CreateMachinePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#f4f7f9]">
      
      {/* ── Scrollable Form Body ── */}
      <div className="flex-1 overflow-y-auto relative bg-[#f8fafc]">
        
        {/* ── Sticky Header Wrapper ── */}
        <div className="sticky top-0 z-50 px-8 pt-6 pb-2 bg-[#f8fafc]">
          <div className="bg-[#254754] text-white px-8 py-5 rounded-2xl flex items-center justify-between shadow-sm">
            <h1 className="text-[22px] font-bold">Create Machine</h1>

            {/* Workflow steps */}
            <div className="flex items-center">
              {/* Step 1: Machine Creation */}
              <div className="flex items-center gap-2 bg-[#e2e8f0] text-[#1e293b] rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-[#94a3b8] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-[#1a233a]">Machine Creation</span>
              </div>

              {/* Line */}
              <div className="w-6 h-[1px] bg-gray-400"></div>

              {/* Step 2: Machine Listing */}
              <div className="flex items-center gap-2 bg-[#5b8a9e] text-white rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#5b8a9e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold">Machine Listing</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Form Content ── */}
        <div className="px-8 pb-24 pt-4 relative">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Top blue bar */}
            <div className="h-1 bg-blue-600 w-full absolute top-0 left-0"></div>
            
            <div className="p-8">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-[20px] font-bold text-[#1a233a] mb-1">Add Machine Details</h2>
                  <p className="text-[13px] text-gray-500">Set up a new production workflow.</p>
                </div>
                <div className="bg-[#dcfce7] text-[#16a34a] text-[12px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  Draft — Auto-saving
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
                
                {/* Column 1 */}
                <div className="space-y-6">
                  {/* Machine Code */}
                  <div className="grid grid-cols-[140px_1fr] items-center">
                    <label className="text-[13px] font-semibold text-gray-700">Machine Code</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Machine Name */}
                  <div className="grid grid-cols-[140px_1fr] items-center">
                    <label className="text-[13px] font-semibold text-gray-700">Machine Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* To T Day */}
                  <div className="grid grid-cols-[140px_1fr] items-center">
                    <label className="text-[13px] font-semibold text-gray-700">To T Day</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  {/* Weekly Off */}
                  <div className="grid grid-cols-[140px_1fr] items-center">
                    <label className="text-[13px] font-semibold text-gray-700">Weekly Off</label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500 hide-arrows"
                      />
                      <div className="absolute right-0 top-0 bottom-0 border-l border-gray-200 flex flex-col justify-center items-center w-8 bg-gray-50 rounded-r-md">
                        <button className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-200 w-full border-b border-gray-200">
                          <ChevronUp className="w-3 h-3" />
                        </button>
                        <button className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-200 w-full">
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Working Day */}
                  <div className="grid grid-cols-[140px_1fr] items-center">
                    <label className="text-[13px] font-semibold text-gray-700">Working Day</label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500 hide-arrows"
                      />
                      <div className="absolute right-0 top-0 bottom-0 border-l border-gray-200 flex flex-col justify-center items-center w-8 bg-gray-50 rounded-r-md">
                        <button className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-200 w-full border-b border-gray-200">
                          <ChevronUp className="w-3 h-3" />
                        </button>
                        <button className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-200 w-full">
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Poss HR */}
                  <div className="grid grid-cols-[140px_1fr] items-center">
                    <label className="text-[13px] font-semibold text-gray-700">Poss HR</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fixed Bottom Actions ── */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-8 py-4 flex justify-end items-center gap-4 z-50">
        <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
          <Bookmark className="w-4 h-4" /> Save Draft
        </button>
        <button 
          onClick={() => navigate('/production')}
          className="px-6 py-2 text-[13px] font-semibold text-gray-700 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button className="px-6 py-2 text-[13px] font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateMachinePage;
