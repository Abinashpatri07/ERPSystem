import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  User,
  Users,
  UserCog,
  ShoppingCart,
  Network,
  Monitor,
  Truck,
  ClipboardList,
  UserPlus,
  ShieldCheck,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard',       icon: LayoutDashboard, path: '/' },
  { name: 'Customer',        icon: User,            path: '/customers' },
  { name: 'Sales',           icon: Users,           path: '/sales' },
  { name: 'Vendors',         icon: UserCog,         path: '/vendors' },
  { name: 'Purchase',        icon: ShoppingCart,    path: '/purchase' },
  { name: 'Inventory',       icon: Network,         path: '/inventory' },
  { name: 'Production',      icon: Monitor,         path: '/production' },
  { name: 'Supply Chain',    icon: Truck,           path: '/supply-chain' },
  { name: 'Accounting',      icon: ClipboardList,   path: '/accounting' },
  { name: 'HRMS',            icon: UserPlus,        path: '/hrms' },
  { name: 'User Management', icon: ShieldCheck,     path: '/user-management' },
  { name: 'Report',          icon: FileText,        path: '/report' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      style={{
        width: collapsed ? '68px' : '220px',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        background: '#3a6878',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flexShrink: 0,
      }}
    >
      {/* Logo / Brand */}
      <div
        style={{
          padding: collapsed ? '18px 14px' : '18px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          minHeight: '64px',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Logo icon box */}
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#fbb65c', fontWeight: 800, fontSize: '14px' }}>N</span>
        </div>

        {/* Brand text */}
        <div
          style={{
            opacity: collapsed ? 0 : 1,
            transform: collapsed ? 'translateX(-6px)' : 'translateX(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            whiteSpace: 'nowrap',
            pointerEvents: collapsed ? 'none' : 'auto',
          }}
        >
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', lineHeight: 1, letterSpacing: '0.5px' }}>
            CORR<span style={{ color: '#fbb65c' }}>NEX</span>
          </div>
          <div style={{ color: '#7aaab8', fontSize: '10px', marginTop: '3px', letterSpacing: '0.3px' }}>
            Corrugation ERP
          </div>
        </div>
      </div>
      {/* Nav Items */}
      <nav
        className="custom-scrollbar"
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: collapsed ? '12px 8px' : '12px 10px',
          transition: 'padding 0.3s ease',
        }}
      >
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              title={collapsed ? item.name : ''}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                padding: collapsed ? '9px 10px' : '10px 16px',
                borderRadius: '7px',
                marginBottom: '4px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                justifyContent: collapsed ? 'center' : 'flex-start',
                transition: 'all 0.2s ease',
                background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: isActive ? '#ffffff' : '#94b8c8',
              })}
              className={({ isActive }) =>
                isActive ? '' : 'sidebar-nav-item'
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    style={{
                      width: '20px',
                      height: '20px',
                      minWidth: '20px',
                      color: isActive ? '#ffffff' : '#94b8c8',
                    }}
                    strokeWidth={1.6}
                  />
                  <span
                    style={{
                      marginLeft: collapsed ? '0px' : '12px',
                      opacity: collapsed ? 0 : 1,
                      maxWidth: collapsed ? '0px' : '160px',
                      overflow: 'hidden',
                      display: 'inline-block',
                      transition: 'opacity 0.2s ease, max-width 0.3s ease, margin-left 0.3s ease',
                    }}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: collapsed ? '10px 8px' : '10px 14px',
          flexShrink: 0,
          transition: 'padding 0.3s ease',
        }}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Expand' : 'Collapse'}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 10px',
            borderRadius: '7px',
            border: 'none',
            background: 'transparent',
            color: '#7aaab8',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 500,
            justifyContent: collapsed ? 'center' : 'flex-start',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#7aaab8';
          }}
        >
          {collapsed
            ? <ChevronRight style={{ width: '17px', height: '17px' }} strokeWidth={2} />
            : <>
                <ChevronLeft style={{ width: '17px', height: '17px' }} strokeWidth={2} />
                <span style={{ whiteSpace: 'nowrap' }}>Collapse</span>
              </>
          }
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
