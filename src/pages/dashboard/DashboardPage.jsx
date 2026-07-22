import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  ShoppingCart,
  Package,
  Factory,
  Settings,
  Recycle,
  Truck,
  RefreshCw,
  Download,
  TrendingUp,
} from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────────

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const allData = {
  all: [
    { name: 'JAN', output: 28, wastage: 25 },
    { name: 'FEB', output: 32, wastage: 28 },
    { name: 'MAR', output: 10, wastage: 8 },
    { name: 'APR', output: 18, wastage: 40 },
    { name: 'MAY', output: 45, wastage: 65 },
    { name: 'JUN', output: 55, wastage: 70 },
    { name: 'JUL', output: 78, wastage: 90 },
    { name: 'AUG', output: 72, wastage: 85 },
    { name: 'SEP', output: 88, wastage: 95 },
    { name: 'OCT', output: 90, wastage: 98 },
    { name: 'NOV', output: 95, wastage: 100 },
    { name: 'DEC', output: 92, wastage: 95 },
  ],
  '14days': [
    { name: 'Day 1', output: 60, wastage: 45 },
    { name: 'Day 3', output: 72, wastage: 55 },
    { name: 'Day 5', output: 65, wastage: 50 },
    { name: 'Day 7', output: 80, wastage: 62 },
    { name: 'Day 9', output: 75, wastage: 58 },
    { name: 'Day 11', output: 88, wastage: 70 },
    { name: 'Day 14', output: 92, wastage: 75 },
  ],
  '7days': [
    { name: 'Mon', output: 70, wastage: 52 },
    { name: 'Tue', output: 78, wastage: 60 },
    { name: 'Wed', output: 65, wastage: 48 },
    { name: 'Thu', output: 82, wastage: 65 },
    { name: 'Fri', output: 90, wastage: 72 },
    { name: 'Sat', output: 55, wastage: 40 },
    { name: 'Sun', output: 48, wastage: 35 },
  ],
};

const oeeData = [
  { name: '',             value: 20, color: '#e8843a' },
  { name: '',             value: 12, color: '#f5c842' },
  { name: 'Quality',      value: 10, color: '#7ab648' },
  { name: 'Availability', value: 36, color: '#c0392b' },
  { name: 'Performance',  value: 22, color: '#3498db' },
];

const metricCards = [
  {
    label: 'Sales (MTD)',
    value: '₹4.87 Cr',
    change: '+11.4%',
    icon: ShoppingCart,
  },
  {
    label: 'Material Cost / Ton',
    value: '₹18,240',
    change: '+11.4%',
    icon: Package,
  },
  {
    label: 'Production Output',
    value: '48,620',
    change: '+11.4%',
    icon: Factory,
  },
  {
    label: 'Overall Equipment Effectiveness',
    value: '82.6%',
    change: '+11.4%',
    icon: Settings,
  },
  {
    label: 'Wastage',
    value: '3.2%',
    change: '+11.4%',
    icon: Recycle,
  },
  {
    label: 'OTIF Dispatch',
    value: '94.1%',
    change: '+11.4%',
    icon: Truck,
  },
];

const tabs = ['Overview', 'Sales', 'Purchase', 'Production', 'Machine', 'Quality'];

// ─── Custom Tooltip ─────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 text-sm">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: entry.color }} />
            {entry.name}: <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};



// ─── Metric Card ────────────────────────────────────────────────────────────────
const MetricCard = ({ label, value, change, icon: Icon }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
    {/* Blue top accent border */}
    <div className="h-1 bg-blue-500 w-full" />
    <div className="p-4 flex flex-col gap-2 flex-1">
      <div className="flex items-start justify-between">
        <p className="text-xs text-gray-500 font-medium leading-snug max-w-[65%]">{label}</p>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-sky-50">
          <Icon className="w-4 h-4 text-sky-500" strokeWidth={1.8} />
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-800 tracking-tight">{value}</p>
      <p className="text-xs text-emerald-500 font-medium flex items-center gap-1">
        <TrendingUp className="w-3 h-3" />
        {change} vs last month
      </p>
    </div>
  </div>
);

// ─── Dashboard Page ─────────────────────────────────────────────────────────────
const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [timeRange, setTimeRange] = useState('all');
  const [chartFilter, setChartFilter] = useState('both'); // 'both' | 'output' | 'wastage'
  const [lastUpdated] = useState('Just Now');

  const chartData = allData[timeRange] || allData['all'];

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#f8f9fb]">
      <div className="p-6 max-w-screen-2xl mx-auto">

        {/* ── Page Header ── */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Manufacturing ERP Dashboard</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Monitor Production, Machines, Inventory, Sales, Purchase And Plant Performance.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-400">Last Updated {lastUpdated}</span>
            <button
              id="dashboard-refresh-btn"
              className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
            >
              <RefreshCw className="w-4 h-4" strokeWidth={1.8} />
            </button>
            <button
              id="dashboard-export-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-200 text-blue-600 text-sm font-medium hover:bg-blue-50 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" strokeWidth={1.8} />
              Export
            </button>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex items-center gap-1 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`dashboard-tab-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#3a6878] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {metricCards.map((card, i) => (
            <MetricCard key={i} {...card} />
          ))}
        </div>

        {/* ── Charts Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Production Output vs Wastage Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            {/* Chart Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 className="text-sm font-semibold text-gray-800">Production Output vs Wastage</h2>
              <div className="flex items-center gap-2">
                {/* Time range buttons */}
                {[['14days', '14 Days'], ['7days', '7 days'], ['all', 'All']].map(([key, label]) => (
                  <button
                    key={key}
                    id={`chart-range-${key}`}
                    onClick={() => setTimeRange(key)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      timeRange === key
                        ? 'bg-gray-800 text-white'
                        : 'border border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
                {/* Filter buttons */}
                {[['both', 'Production'], ['output', 'Output'], ['wastage', 'Wastage']].map(([key, label]) => (
                  <button
                    key={key}
                    id={`chart-filter-${key}`}
                    onClick={() => setChartFilter(key)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      chartFilter === key
                        ? 'bg-gray-100 text-gray-800 font-semibold'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Line Chart */}
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10, fill: '#9ca3af' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: '#9ca3af' }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 110]}
                  ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                />
                <Tooltip content={<CustomTooltip />} />
                {(chartFilter === 'both' || chartFilter === 'output') && (
                  <Line
                    type="monotone"
                    dataKey="output"
                    name="Output (units)"
                    stroke="#7c3aed"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5, fill: '#7c3aed' }}
                  />
                )}
                {(chartFilter === 'both' || chartFilter === 'wastage') && (
                  <Line
                    type="monotone"
                    dataKey="wastage"
                    name="Wastage (%)"
                    stroke="#ec4899"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5, fill: '#ec4899' }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-violet-500 inline-block">
                  Output (units)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-pink-400 inline-block">
                  Wastage (%)
                </span>
              </div>
            </div>
          </div>

          {/* OEE Composition Donut */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">OEE Composition</h2>
            <div className="flex-1 flex flex-col items-center justify-center">
              <PieChart width={230} height={230}>
                <Pie
                  data={oeeData}
                  cx={115}
                  cy={115}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  labelLine={false}
                >
                  {oeeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              {/* Legend — only named segments */}
              <div className="flex flex-col gap-2 mt-1 w-full px-2">
                {oeeData.filter(item => item.name).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default DashboardPage;
