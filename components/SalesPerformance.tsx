import React from 'react';

const SalesPerformance = () => {
  return (
    <div className="mt-10">
      <h2 className="mb-5 text-2xl font-semibold">Sales Performance</h2>
      <div className="w-full h-48 bg-white p-5 rounded-lg shadow-md text-center">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <polyline
            fill="none"
            stroke="#007bff"
            strokeWidth="2"
            points="0,40 10,35 20,30 30,25 40,20 50,15 60,20 70,30 80,35 90,40 100,30"
          />
          <polyline
            fill="none"
            stroke="#ff5733"
            strokeWidth="2"
            points="0,45 10,40 20,35 30,30 40,25 50,20 60,25 70,35 80,40 90,45 100,35"
          />
        </svg>
      </div>
    </div>
  );
};

export default SalesPerformance;
