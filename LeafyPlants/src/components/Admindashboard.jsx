import React, { useContext, useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import AdminSessionContext from '../context/AdminSessionContext';
import Avatar from 'react-avatar';

const Admindashboard = () => {
  const { adminSessionId, setAdminSessionId } = useContext(AdminSessionContext); // Destructure from context
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminSessionId) {
      console.log("Admin is not login")
      navigate('/'); // Redirect if not logged in
      return; // Ensure the function exits here
    }

    const fetchUserData = async () => {
      try {
        const response = await fetcdh('http://localhost/admindata?id=' + adminSessionId);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Response:', data); // Log the response
        setUserData(data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchUserData();
  }, [adminSessionId, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message or spinner while data is being fetched
  }

  return (
    <>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-10/12 h-80 my-12 rounded-md bg-[#eff8f2] flex'>
          <div className='flex items-center mx-10'>
            <Avatar className='rounded-full' facebookId="100008343750912" size="100" />
          </div>
          <div className='flex items-center mx-10 text-6xl text-gray-500'>
            <h1>Admin Dashboard</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='border-2 w-96 flex items-center px-10 text-xl m-10 h-20 border-gray-300'>
          <Link to={`/userinfo`} className='flex gap-10'>
            <FaRegUser className='text-4xl' /> Customer Info
          </Link>
        </div>
        <div className='border-2 w-96 flex items-center px-10 text-xl m-10 h-20 border-gray-300'>
          <Link className='flex gap-10'>
            <FiBox className='text-4xl' /> Booked Services
          </Link>
        </div>
        <div className='border-2 w-96 flex items-center px-10 text-xl m-10 h-20 border-gray-300'>
          <Link to={`/vendorinfo`} className='flex gap-10'>
            <FaRegUser className='text-4xl' /> Vendor Info
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className='uppercase text-xl my-10 gap-y-10 underline flex items-center justify-center'
        onClick={() => setAdminSessionId(-1)} // Clear session ID on logout
      >
        Log out
      </Link>
    </>
  );
}

export default Admindashboard;
