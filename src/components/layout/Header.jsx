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
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      
      <div className="flex items-center flex-1">
        <div className="relative w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
          </span>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="Search customer, product or item..." 
            className="w-full bg-[#f3f4f6] text-sm text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a6878]/30 transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center bg-[#f3f4f6] rounded-lg px-3 py-1.5 text-xs text-gray-600">
          <Calendar className="w-4 h-4 text-blue-500 mr-2" strokeWidth={2} />
          <div>
            <div className="font-medium text-gray-800">{formatDate(currentTime)}</div>
            <div className="text-gray-500">{formatTime(currentTime)}</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-500">
          <button className="hover:text-gray-700 transition-colors">
            <HelpCircle className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hover:text-gray-700 transition-colors relative">
            <Bell className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>

        <div className="flex items-center border-l pl-6 border-gray-200">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600 mr-3">
            MT
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-medium text-gray-800">Maruty Tandon</span>
            <span className="text-xs text-gray-500">marutyon43@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
