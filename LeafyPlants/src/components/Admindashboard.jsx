import React, { useContext, useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import AdminSessionContext from '../context/AdminSessionContext';
import Avatar from 'react-avatar';

const Admindashboard = () => {
  const { adminSessionId, setAdminSessionId } = useContext(AdminSessionContext);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (adminSessionId === -1) {
      console.log("Admin is not logged in");
      navigate('/'); // Redirect if not logged in
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost/admin?id=${adminSessionId}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('Response:', data);
        setUserData(data.user); // Adjust based on the actual response structure
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [adminSessionId, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='w-full flex items-center justify-center py-6'>
        <div className='w-full md:w-10/12 h-80 my-12 rounded-md bg-[#eff8f2] flex flex-col md:flex-row'>
          <div className='flex items-center justify-center md:justify-start mx-4 md:mx-10'>
            <Avatar className='rounded-full' facebookId="100008343750912" size="100" />
          </div>
          <div className='flex items-center justify-center md:justify-start mx-4 md:mx-10 text-4xl md:text-6xl text-gray-500'>
            <h1>Admin Dashboard</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-6 px-4'>
        <div className='border-2 w-full md:w-96 flex items-center px-4 md:px-10 text-lg md:text-xl m-2 md:m-6 h-20 border-gray-300'>
          <Link to={`/userinfo`} className='flex gap-4 md:gap-10'>
            <FaRegUser className='text-3xl md:text-4xl' /> Customer Info
          </Link>
        </div>
        <div className='border-2 w-full md:w-96 flex items-center px-4 md:px-10 text-lg md:text-xl m-2 md:m-6 h-20 border-gray-300'>
          <Link className='flex gap-4 md:gap-10'>
            <FiBox className='text-3xl md:text-4xl' /> Booked Services
          </Link>
        </div>
        <div className='border-2 w-full md:w-96 flex items-center px-4 md:px-10 text-lg md:text-xl m-2 md:m-6 h-20 border-gray-300'>
          <Link to={`/vendorinfo`} className='flex gap-4 md:gap-10'>
            <FaRegUser className='text-3xl md:text-4xl' /> Vendor Info
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className='uppercase text-lg md:text-xl my-6 flex items-center justify-center underline'
        onClick={() => setAdminSessionId(-1)}
      >
        Log out
      </Link>
    </>
  );
}

export default Admindashboard;
