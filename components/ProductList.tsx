import React from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  price: string;
  status: string;
  category: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const router = useRouter();

  const handleEditProduct = (productId: string) => {
    router.push(`/admin/products/edit/${productId}`);
  };

  const handleViewProduct = (productId: string) => {
    router.push(`/admin/products/${productId}`);
  };

  const handleDeleteProduct = (productId: string) => {
    console.log(`Deleting product with id: ${productId}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Product List</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-4 text-left">Product ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-100">
              <td className="p-4">{product.id}</td>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.status}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleViewProduct(product.id)}>View</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
