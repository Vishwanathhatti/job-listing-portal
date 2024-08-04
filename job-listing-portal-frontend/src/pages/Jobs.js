import React from 'react';
import Filter from '../components/Filter';
import JobsDisplay from '../components/JobsDisplay';
import { useState, useEffect } from 'react';

const Jobs = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint is 768px
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="container mx-auto p-4 mt-16 min-h-[100vh]">
      {isMobile && (
        <button
          onClick={toggleFilter}
          className="mb-4 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {showFilter ? 'Hide Filter' : 'Show Filter'}
        </button>
      )}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
        {(showFilter || !isMobile) && (
          <div className={`flex-none ${isMobile ? 'w-full' : 'w-1/4'}`}>
            <Filter />
          </div>
        )}
        <div className={`flex-1 ${isMobile ? (showFilter ? 'w-full' : 'w-full') : 'w-3/4'}`}>
          <JobsDisplay />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
