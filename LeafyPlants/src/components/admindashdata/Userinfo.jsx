import React, { useState, useEffect } from 'react';

const Userinfo = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch customer data when component mounts
    fetch('http://localhost:8080/login')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching customer data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-center my-10'>
      <h2 className='text-4xl my-2 underline'>Customer Details</h2>
      <table className='flex flex-col justify-center items-center mb-96'>
        <thead className='flex text-center'>
          <tr>
            <th className="border border-black px-4 py-2 w-24">Sr.no</th>
            <th className="border border-black px-4 py-2 w-48">First name</th>
            <th className="border border-black px-4 py-2 w-48">Last name</th>
            <th className="border border-black px-4 py-2 w-72">Email</th>
            <th className="border border-black px-4 py-2 w-48">Password</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td className="border border-black px-4 py-2 w-24">{customer.id}</td>
              <td className="border border-black px-4 py-2 w-48">{customer.Fname}</td>
              <td className="border border-black px-4 py-2 w-48">{customer.Lname}</td>
              <td className="border border-black px-4 py-2 w-72">{customer.email}</td>
              <td className="border border-black px-4 py-2 w-48">{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userinfo;
