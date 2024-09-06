"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Order {
  id: string;
  customerName: string;
  totalAmount: string;
  status: string;
  orderDate: string;
}

const orders: Order[] = [
  { id: "1", customerName: "John Doe", totalAmount: "$120", status: "Pending", orderDate: "2024-09-06" },
  { id: "2", customerName: "Jane Smith", totalAmount: "$220", status: "Shipped", orderDate: "2024-09-05" },
  { id: "3", customerName: "Alice Johnson", totalAmount: "$340", status: "Delivered", orderDate: "2024-09-04" },
];

const OrdersPage = () => {
  const router = useRouter();

  const handleViewOrder = (orderId: string) => {
    router.push(`/admin/orders/${orderId}`);
  };

  const handleEditOrder = (orderId: string) => {
    router.push(`/admin/orders/edit/${orderId}`);
  };

  const handleDeleteOrder = (orderId: string) => {
    console.log(`Deleting order with id: ${orderId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-4 text-left">Order ID</th>
            <th className="p-4 text-left">Customer Name</th>
            <th className="p-4 text-left">Total Amount</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Order Date</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-100">
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.customerName}</td>
              <td className="p-4">{order.totalAmount}</td>
              <td className="p-4">{order.status}</td>
              <td className="p-4">{order.orderDate}</td>
              <td className="p-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
                  onClick={() => handleViewOrder(order.id)}
                >
                  View
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-700"
                  onClick={() => handleEditOrder(order.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
