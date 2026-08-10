import React, { useState, useEffect } from 'react';
import { Search, Calendar, HelpCircle, Bell } from 'lucide-react';
import { formatDate, formatTime } from '../../utils/helpers';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      style={{
        height: '52px',
        background: '#ffffff',
        borderBottom: '1px solid #e8ecef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        flexShrink: 0,
        gap: '20px',
      }}
    >
      {/* Left Side (Search & Date/Time) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1 }}>
        
        {/* Search Bar */}
        <div style={{ position: 'relative', width: '260px' }}>
          <Search
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '14px',
              height: '14px',
              color: '#adb5bd',
            }}
            strokeWidth={1.8}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="Search customer, product or item..."
            style={{
              width: '100%',
              background: '#f4f6f8',
              border: '1px solid #e8ecef',
              borderRadius: '20px',
              padding: '6px 12px 6px 30px',
              fontSize: '12px',
              color: '#495057',
              outline: 'none',
            }}
            onFocus={e => {
              e.target.style.borderColor = '#3a6878';
              e.target.style.boxShadow = '0 0 0 3px rgba(58,104,120,0.1)';
            }}
            onBlur={e => {
              e.target.style.borderColor = '#e8ecef';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Date & Time */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#f4f6f8',
            border: '1px solid #e8ecef',
            borderRadius: '8px',
            padding: '4px 10px',
          }}
        >
          <Calendar style={{ width: '14px', height: '14px', color: '#3a6878' }} strokeWidth={2} />
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#343a40', lineHeight: 1.2 }}>
              {formatDate(currentTime)}
            </div>
            <div style={{ fontSize: '10px', color: '#868e96', lineHeight: 1.2, marginTop: '1px' }}>
              {formatTime(currentTime)}
            </div>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

        {/* Help Icon */}
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#868e96',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            borderRadius: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#343a40'}
          onMouseLeave={e => e.currentTarget.style.color = '#868e96'}
        >
          <HelpCircle style={{ width: '16px', height: '16px' }} strokeWidth={1.6} />
        </button>

        {/* Bell Icon */}
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#868e96',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            borderRadius: '6px',
            position: 'relative',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#343a40'}
          onMouseLeave={e => e.currentTarget.style.color = '#868e96'}
        >
          <Bell style={{ width: '16px', height: '16px' }} strokeWidth={1.6} />
          <span
            style={{
              position: 'absolute',
              top: '3px',
              right: '3px',
              width: '6px',
              height: '6px',
              background: '#e74c3c',
              borderRadius: '50%',
              border: '1.5px solid #fff',
            }}
          />
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: '#e8ecef' }} />

        {/* User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#3a6878',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 700,
              color: '#fff',
              flexShrink: 0,
            }}
          >
            MT
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#343a40', lineHeight: 1.2 }}>
              Maruty Tandon
            </div>
            <div style={{ fontSize: '11px', color: '#868e96', lineHeight: 1.2, marginTop: '1px' }}>
              marutyon43@gmail.com
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
