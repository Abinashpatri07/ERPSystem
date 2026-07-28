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
  FileBarChart,
  UserCog
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
  { name: 'User Management', icon: UserCog, path: '/user-management' },
  { name: 'Report', icon: FileBarChart, path: '/report' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#3a6878] text-white flex flex-col h-full flex-shrink-0">
      <div className="p-6 pb-6 flex items-center gap-3 border-b border-white/5">
        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm shadow-sm border border-white/10">
          <Box className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-[22px] font-bold tracking-wider text-white leading-none mb-1 flex items-center">
            CORR<span className="text-[#fbb65c]">NEX</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#a2c2ce] font-semibold opacity-80 leading-none">Corrugation ERP</p>
        </div>
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
