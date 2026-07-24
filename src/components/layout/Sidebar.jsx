import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Users, 
  ShoppingCart, 
  Box, 
  Factory, 
  Truck, 
  FileText, 
  UserCheck, 
  FileBarChart
} from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Customer', icon: User, path: '/customers' },
  { name: 'Sales', icon: Users, path: '/sales' },
  { name: 'Vendors', icon: UserCheck, path: '/vendors' },
  { name: 'Purchase', icon: ShoppingCart, path: '/purchase' },
  { name: 'Inventory', icon: Box, path: '/inventory' },
  { name: 'Production', icon: Factory, path: '/production' },
  { name: 'Supply Chain', icon: Truck, path: '/supply-chain' },
  { name: 'Accounting', icon: FileText, path: '/accounting' },
  { name: 'HRMS', icon: UserCheck, path: '/hrms' },
  { name: 'Report', icon: FileBarChart, path: '/report' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#3a6878] text-white flex flex-col h-full flex-shrink-0">
      <div className="p-6 pb-4">
        <h1 className="text-xl font-semibold tracking-wide">CORRNEX</h1>
        <p className="text-xs text-[#a2c2ce] mt-0.5">Corrugation ERP</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => `w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-white/15 text-white' 
                  : 'text-[#a2c2ce] hover:bg-white/5 hover:text-white'
              }`}
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-[#a2c2ce]'}`} strokeWidth={1.5} />
                  {item.name}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
