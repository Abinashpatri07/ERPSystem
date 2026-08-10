import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, Settings, Clock, Package, CheckCircle, TrendingUp, AlertCircle, FileText, Activity, Box } from 'lucide-react';

const BAR_DATA = [
  { day: 'Mon', value: 120, height: '120px', color: '#34d399' },
  { day: 'Tue', value: 200, height: '200px', color: '#fbbf24' },
  { day: 'Wed', value: 150, height: '150px', color: '#84cc16' },
  { day: 'Thu', value: 80, height: '80px', color: '#0ea5e9' },
  { day: 'Fri', value: 70, height: '70px', color: '#a855f7' },
  { day: 'Sat', value: 110, height: '110px', color: '#6366f1' },
  { day: 'Sun', value: 130, height: '130px', color: '#14b8a6' },
];
const MAX_VAL = 200;

const MachineDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const productionReportData = Array(6).fill({
    date: '20 Jul 2026',
    todaysHours: 24,
    weeklyOff: 0,
    workingDay: 'Yes',
    plannedHours: 12,
    reportedHours: 11,
    idleHours: '01',
    downtime: '0.5 hrs',
    utilization: '92%'
  });

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#f4f7f9]">
      
      {/* ── Top Header ── */}
      <div className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between shadow-sm z-10">
        <div>
          <h1 className="text-[22px] font-bold text-[#1a233a] mb-1">Machine Details</h1>
          <p className="text-[13px] text-gray-500">Monitor machine performance, utilization, maintenance history and production metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-md hover:bg-blue-100 transition-colors">
            <Calendar className="w-4 h-4" /> Schedule Maintenance
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-md hover:bg-blue-100 transition-colors">
            <Settings className="w-4 h-4" /> Create Work Order
          </button>
        </div>
      </div>

      {/* ── Scrollable Body ── */}
      <div className="flex-1 overflow-y-auto p-8 relative">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* 1. Main Info Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex justify-between items-center relative overflow-hidden">
            {/* Top accent line */}
            <div className="h-1 bg-gray-200 w-full absolute top-0 left-0"></div>

            <div className="flex items-center gap-8 flex-1">
              {/* Machine Icon Box */}
              <div className="w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 text-[#475569]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              {/* Machine Specs Grid */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#1a233a]">AD 1228_5C</h2>
                  <span className="px-3 py-1 bg-[#dcfce7] text-[#16a34a] text-[12px] font-bold rounded-full flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#16a34a] rounded-full"></div> Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Code</div>
                    <div className="text-[14px] font-semibold text-[#1a233a]">MC-001</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Department</div>
                    <div className="text-[14px] font-semibold text-[#1a233a]">Corrugation</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Production Line</div>
                    <div className="text-[14px] font-semibold text-[#1a233a]">Line A</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Reported HRS</div>
                    <div className="text-[14px] font-semibold text-[#1a233a]">108.93</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Location</div>
                    <div className="text-[14px] font-semibold text-[#1a233a]">Plant 01</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Manufacturer</div>
                    <div className="text-[14px] font-semibold text-[#1a233a]">BHS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Utilization Donut & Info */}
            <div className="flex items-center gap-10 pl-10 border-l border-gray-100">
              <div className="flex flex-col items-center">
                <span className="text-[14px] font-semibold text-[#1a233a] mb-4">Utilization</span>
                
                {/* CSS Donut Chart */}
                <div className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center bg-gray-100 shadow-inner"
                     style={{ background: `conic-gradient(#2563eb 0% 92%, #e5e7eb 92% 100%)` }}>
                  <div className="absolute inset-2 bg-white rounded-full shadow-sm flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#1a233a]">92%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <div className="text-[12px] text-gray-500 mb-0.5">Operator</div>
                  <div className="text-[13px] font-semibold text-[#1a233a]">Rahul Das</div>
                </div>
                <div>
                  <div className="text-[12px] text-gray-500 mb-0.5">Current Shift</div>
                  <div className="text-[13px] font-semibold text-[#1a233a]">Shift A</div>
                </div>
                <div>
                  <div className="text-[12px] text-gray-500 mb-0.5">Running Since</div>
                  <div className="text-[13px] font-semibold text-[#1a233a]">08:20 AM</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Four Metrics Cards */}
          <div className="grid grid-cols-4 gap-6">
            {/* Today's Runtime */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4 border border-green-100">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Today's Runtime</div>
                <div className="text-xl font-bold text-[#1a233a]">9 Hours</div>
              </div>
            </div>

            {/* Today's Production */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4 border border-blue-100">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Today's Production</div>
                <div className="text-xl font-bold text-[#1a233a]">4,250 <span className="text-[12px] font-medium text-gray-500">Boxes</span></div>
              </div>
            </div>

            {/* Reported Hours */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-4 border border-pink-100">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Reported Hours</div>
                <div className="text-xl font-bold text-[#1a233a]">216 <span className="text-[12px] font-medium text-gray-500">Hours</span></div>
              </div>
            </div>

            {/* Machine Efficiency */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-4 border border-orange-100">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Machine Efficiency</div>
                <div className="text-xl font-bold text-[#1a233a]">96%</div>
              </div>
            </div>
          </div>

          {/* 3. Bottom Split Section */}
          <div className="flex gap-6 h-[400px]">
            
            {/* Left: Machine Utilization Analytics (Bar Chart) */}
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative flex flex-col">
              <div className="flex items-center justify-between mb-8 z-10 relative">
                <h3 className="text-[16px] font-bold text-[#1a233a]">Machine Utilization Analytics</h3>
                <button className="flex items-center gap-1 px-3 py-1.5 text-[12px] font-semibold text-blue-600 bg-white border border-blue-200 rounded-md shadow-sm">
                  Last Week <span className="text-[10px]">▼</span>
                </button>
              </div>

              {/* Bar Chart Area */}
              <div className="flex-1 relative flex mt-2">
                
                {/* Horizontal Grid Lines & Y Axis Labels */}
                <div className="absolute right-0 left-12 flex flex-col justify-between pointer-events-none" style={{ height: '200px', top: 'auto', bottom: '40px' }}>
                  {[200, 150, 100, 50, 0].map(val => (
                    <div key={val} className="w-full border-t border-dashed border-gray-300 relative">
                      <span className="absolute -left-12 -top-[10px] text-[12px] text-gray-500 font-medium w-10 text-right">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Bars Container */}
                <div className="absolute right-0 left-12 bottom-[40px] pr-4 flex justify-between items-end h-[200px]">
                  {BAR_DATA.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 relative group w-14">
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 bg-gray-800 text-white text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.value} hrs
                      </div>
                      
                      {/* Bar */}
                      <div 
                        className="w-12 rounded-t-xl rounded-b-md transition-all duration-300 hover:opacity-80 flex flex-col items-center justify-end pb-2"
                        style={{ height: item.height, backgroundColor: item.color }}
                      >
                        <span className="text-white text-[11px] font-semibold">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* X Axis Labels */}
                <div className="absolute bottom-0 right-0 left-12 pr-4 flex justify-between">
                  {BAR_DATA.map((item, index) => (
                    <div key={index} className="w-14 text-center text-[12px] font-medium text-gray-500">
                      {item.day}
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Right: Live Summary Table */}
            <div className="w-[340px] shrink-0 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
              <div className="bg-[#447186] text-white px-6 py-5 flex items-center justify-between">
                <h3 className="text-[16px] font-bold">Live Summary</h3>
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <Package className="w-4 h-4 text-[#447186]" />
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar p-6">
                <h4 className="text-[13px] font-bold text-[#1a233a] mb-4">Machine Summary</h4>
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Machine Health</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">96%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Current Status</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">Running</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Today's Runtime</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">9 Hours</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Current Shift</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">Shift A</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Operator</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">Rahul Das</span>
                  </div>
                  
                  {/* Gap between sections */}
                  <div className="h-6"></div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Temperature</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">42°C</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Power</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">18.4 kW</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Utilization</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">92%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">OEE</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">89%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">Production</span>
                    <span className="text-[13px] font-bold text-[#1a233a]">4,250 Boxes</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* ── NEW LAYOUT APPENDED ── */}
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-6">
            
            {/* Top KPI Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="text-[11px] text-gray-500 mb-2">Average Utilization</div>
                <div className="text-2xl font-bold text-gray-800">85.4%</div>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="text-[11px] text-gray-500 mb-2">Peak Utilization</div>
                <div className="text-2xl font-bold text-gray-800">96%</div>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="text-[11px] text-gray-500 mb-2">Lowest Utilization</div>
                <div className="text-2xl font-bold text-gray-800">62%</div>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="text-[11px] text-gray-500 mb-2">Operating Hours</div>
                <div className="text-2xl font-bold text-gray-800">92h</div>
              </div>
            </div>

            {/* Middle Row: Machine Info & Live Status */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Machine Information */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Box className="w-5 h-5 text-blue-500" />
                  <h2 className="text-base font-semibold text-gray-800">Machine Information</h2>
                </div>
                <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Machine Code</div>
                    <div className="text-[13px] font-semibold text-gray-800">MC-001</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Machine Name</div>
                    <div className="text-[13px] font-semibold text-gray-800">AD 1228_5C</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Machine Type</div>
                    <div className="text-[13px] font-semibold text-gray-800">Corrugator</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Manufacturer</div>
                    <div className="text-[13px] font-semibold text-gray-800">BHS</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Model Number</div>
                    <div className="text-[13px] font-semibold text-gray-800">BHS-009541</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Serial Number</div>
                    <div className="text-[13px] font-semibold text-gray-800">SN-789456</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Installation Date</div>
                    <div className="text-[13px] font-semibold text-gray-800">2019-02-14</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Warranty Expiry</div>
                    <div className="text-[13px] font-semibold text-gray-800">2028-02-14</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Department</div>
                    <div className="text-[13px] font-semibold text-gray-800">Corrugation</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Production Line</div>
                    <div className="text-[13px] font-semibold text-gray-800">Line A</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Plant</div>
                    <div className="text-[13px] font-semibold text-gray-800">Plant A</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Machine Capacity</div>
                    <div className="text-[13px] font-semibold text-gray-800">6,000 Boxes/day</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Current Operator</div>
                    <div className="text-[13px] font-semibold text-gray-800">Rahul Das</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-gray-500 mb-1">Supervisor</div>
                    <div className="text-[13px] font-semibold text-gray-800">Meera Iyer</div>
                  </div>
                </div>
              </div>

              {/* Live Machine Status */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <h2 className="text-base font-semibold text-gray-800">Live Machine Status</h2>
                  </div>
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-[10px] font-medium flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Online
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Running Status</span>
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-[10px] font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Running
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Current Shift</span>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Shift A
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Operator</span>
                    <span className="text-[13px] font-semibold text-gray-800">Rahul Das</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Running Since</span>
                    <span className="text-[13px] font-semibold text-gray-800">08:20 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Temperature</span>
                    <span className="text-[13px] font-semibold text-gray-800">42°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Power Consumption</span>
                    <span className="text-[13px] font-semibold text-gray-800">18.4 kW</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">RPM</span>
                    <span className="text-[13px] font-semibold text-gray-800">1240</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Machine Speed</span>
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-[10px] font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Normal
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Oil Level</span>
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-[10px] font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Good
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">Network Status</span>
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-[10px] font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Online
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row: Production Performance & Working Hours Summary */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Production Performance */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Box className="w-5 h-5 text-blue-500" />
                  <h2 className="text-base font-semibold text-gray-800">Production Performance</h2>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] text-gray-500">Today's Target</span>
                    <span className="text-sm font-bold text-gray-800">5,000</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-blue-100 bg-blue-50/30 rounded-xl p-4">
                    <div className="text-[12px] text-blue-500 font-medium mb-1">Completed</div>
                    <div className="text-2xl font-bold text-gray-800">4,250</div>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-xl p-4">
                    <div className="text-[12px] text-gray-500 font-medium mb-1">Remaining</div>
                    <div className="text-2xl font-bold text-gray-800">750</div>
                  </div>
                  <div className="border border-red-100 bg-red-50/50 rounded-xl p-4">
                    <div className="text-[12px] text-red-500 font-medium mb-1">Rejected</div>
                    <div className="text-2xl font-bold text-gray-800">32</div>
                  </div>
                  <div className="border border-green-100 bg-green-50/50 rounded-xl p-4">
                    <div className="text-[12px] text-green-600 font-medium mb-1">Quality Score</div>
                    <div className="text-2xl font-bold text-gray-800">99.2%</div>
                  </div>
                </div>
              </div>

              {/* Working Hours Summary */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <h2 className="text-base font-semibold text-gray-800">Working Hours Summary</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 bg-white rounded-xl p-4">
                    <div className="text-[12px] text-gray-500 mb-1">Today's Hours</div>
                    <div className="text-xl font-bold text-gray-800">11</div>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-xl p-4">
                    <div className="text-[12px] text-gray-500 mb-1">Weekly Off</div>
                    <div className="text-xl font-bold text-gray-800">2</div>
                  </div>
                  <div className="border border-blue-200 bg-white rounded-xl p-4">
                    <div className="text-[12px] text-gray-500 mb-1">Working Days</div>
                    <div className="text-xl font-bold text-gray-800">9</div>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-xl p-4">
                    <div className="text-[12px] text-gray-500 mb-1">Reported Hours</div>
                    <div className="text-xl font-bold text-gray-800">216</div>
                  </div>
                  <div className="border border-green-200 bg-green-50/50 rounded-xl p-4">
                    <div className="text-[12px] text-gray-500 mb-1">Runtime</div>
                    <div className="text-xl font-bold text-green-600">108 Hrs</div>
                  </div>
                  <div className="border border-orange-200 bg-orange-50/50 rounded-xl p-4">
                    <div className="text-[12px] text-gray-500 mb-1">Idle Hours</div>
                    <div className="text-xl font-bold text-orange-500">12 Hrs</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Table: Production Report */}
            <div>
              <h2 className="text-base font-semibold text-gray-800 mb-1">Production Report</h2>
              <p className="text-[12px] text-gray-500 mb-3">Detailed runtime, utilization, and downtime records</p>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/80 border-b border-gray-200">
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Date</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Today's Hours</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Weekly Off</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Working Day</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Planned Hours</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Reported Hours</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Idle Hours</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Downtime</th>
                      <th className="py-3 px-4 text-[12px] font-semibold text-gray-600">Utilization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionReportData.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.date}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.todaysHours}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.weeklyOff}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.workingDay}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.plannedHours}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.reportedHours}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.idleHours}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.downtime}</td>
                        <td className="py-3 px-4 text-[13px] text-gray-600">{row.utilization}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="py-3 px-4 flex items-center justify-between border-t border-gray-100 bg-white">
                  <span className="text-[12px] text-gray-500">Showing <span className="font-semibold text-gray-700">1-6</span> of <span className="font-semibold text-gray-700">128</span></span>
                  <div className="flex items-center gap-1">
                    <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50">&lt;</button>
                    <button className="w-7 h-7 flex items-center justify-center rounded bg-blue-50 text-blue-600 font-medium">1</button>
                    <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">2</button>
                    <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">3</button>
                    <span className="text-gray-400 px-1">...</span>
                    <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">11</button>
                    <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50">&gt;</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MachineDetailsPage;
