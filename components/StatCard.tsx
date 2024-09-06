import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  growth: string;
}

const StatCard = ({ title, value, growth }: StatCardProps) => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center">
      <h3 className="mb-2 text-xl text-gray-800">{title}</h3>
      <p className="text-4xl font-bold mb-2">{value}</p>
      <span className={growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
        {growth}
      </span>
    </div>
  );
};

export default StatCard;
