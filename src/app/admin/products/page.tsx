"use client";

import React from "react";
import ProductList from '../../../../components/ProductList';

const products = [
  { id: '1', name: 'MacBook Pro', price: '$1200', status: 'Available', category: 'Electronics' },
  { id: '2', name: 'iPhone 12', price: '$999', status: 'Sold Out', category: 'Phones' },
  { id: '3', name: 'AirPods', price: '$199', status: 'Available', category: 'Accessories' },
];

const ProductsPage = () => {
  return (
    <div className="p-6">
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
