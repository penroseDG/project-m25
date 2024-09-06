"use client";
import React, { useState } from 'react';
import styles from '../../../styles/Customers.module.css';
const Customers = () => {
    const [customers, setCustomers] = useState([
        { id: '12542', username: 'RikkeiAcademy', email: 'rikkei@test.com', role: 'Admin', date: '20 Jan, 2022', active: true },
        { id: '32423', username: 'User1', email: 'user1@gmail.com', role: 'User', date: '27 Feb, 2022', active: true },
    ]);

    const toggleActiveStatus = (id: string) => {
        setCustomers(customers.map(customer =>
            customer.id === id ? { ...customer, active: !customer.active } : customer
        ));
    };

    return (
        <div className={styles.container}>
            <h1>Customers</h1>
            <table className={styles.customerTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên đăng nhập</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.username}</td>
                            <td>{customer.email}</td>
                            <td>{customer.role}</td>
                            <td>{customer.date}</td>
                            <td>
                                <button className={styles.viewButton}>View</button>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={customer.active}
                                        onChange={() => toggleActiveStatus(customer.id)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
        </div>
    );
};

export default Customers;
