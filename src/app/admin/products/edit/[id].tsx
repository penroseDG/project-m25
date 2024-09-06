"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

interface Product {
    id: string;
    name: string;
    price: string;
    sku: string;
    status: string;
    description: string;
}

const EditProduct = () => {
    const router = useRouter();
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    // Giả sử có API để lấy thông tin sản phẩm theo ID
    useEffect(() => {
        const fetchProduct = async () => {
            // Giả lập API gọi sản phẩm
            const productData = await fetch(`/api/products/${id}`).then((res) => res.json());
            setProduct(productData);
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Product after edit:", product);
        router.push("/admin/products");
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setProduct((prevProduct) =>
            prevProduct ? { ...prevProduct, [name]: value } : null
        );
    };

    if (!product) {
        return <div className="p-6">Loading...</div>;
    }


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Edit Product: {product.name}</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">SKU</label>
                    <input
                        type="text"
                        name="sku"
                        value={product.sku}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        name="status"
                        value={product.status}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="Available">Available</option>
                        <option value="Sold Out">Sold Out</option>
                        <option value="In Review">In Review</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
