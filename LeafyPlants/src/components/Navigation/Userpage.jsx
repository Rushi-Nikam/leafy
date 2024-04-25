import React, { useContext, useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import SessionContext from '../../context/Session';
import axios from 'axios';

import Avatar from 'react-avatar'

const Userpage = () => {
  const session = useContext(SessionContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
          const response = await axios.get('http://localhost:8080/userdata', {
              params: { id: session?.sessionId }
          });
          console.log('Response:', response.data);
          setUserData(response.data.user);
      } catch (error) {
          console.error('Error fetching user data:', error);
      }
  };

    if (session?.sessionId) {
      fetchUserData();
    }
  }, [session?.sessionId]);

  return (
    <>
      <div className='w-full h-full  flex items-center justify-center '>
        <div className='w-10/12 h-80 my-12 rounded-md bg-[#eff8f2] flex'>
        <div className='flex items-center mx-10'><Avatar className='rounded-full' facebookId="100008343750912" size="100" /></div>
          <div className='flex flex-col justify-center my-12 mx-14 text-6xl text-gray-500'>
          <h1>Hi, {userData?.Fname} {userData?.Lname}</h1>
            <p>I hope you love the plants </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='border-2 w-96 flex items-center px-10 text-xl m-10 h-20 border-gray-300'>
          <Link to={`/profile`} className='flex gap-10'>
            <FaRegUser className='text-4xl' /> Profile</Link>
        </div>
        <div className='border-2 w-96 flex items-center px-10 text-xl m-10 h-20 border-gray-300'>
          <Link className='flex gap-10'><FiBox className='text-4xl' /> Order History</Link>
        </div>
        <div className='border-2 w-96 flex items-center px-10 text-xl m-10 h-20 border-gray-300'>
          <Link className='flex gap-10'><MdOutlineLocationOn className='text-4xl' /> Address</Link>
        </div>
      </div>
      <Link to="/" className='uppercase text-xl my-10 gap-y-10 underline flex items-center justify-center' onClick={() => session?.setSessionId(-1)}>Log out</Link>
    </>
  );
};

export default Userpage;
