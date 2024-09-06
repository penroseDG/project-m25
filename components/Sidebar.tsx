import React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed p-6">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <ul className="space-y-4">
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={() => router.push('/admin/dashboard')}>
          Dashboard
        </li>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={() => router.push('/admin/products')}>
          Products
        </li>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={() => router.push('/admin/orders')}>
          Orders
        </li>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={() => router.push('/admin/customers')}>
          Customers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
