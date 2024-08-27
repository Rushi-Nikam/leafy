import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SessionContext from '../../context/Session';

const Profile = () => {
  const session = useContext(SessionContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/userdata', {
          params: { id: session?.sessionId }
        });
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
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData?.Fname} {userData?.Lname}</p>
          <p>Email: {userData?.email}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
          <div>Loading...</div>
        )}
        <Link to="/" className='uppercase text-xl my-10 gap-y-10 underline flex items-center justify-center' onClick={() => session?.setSessionId()}>Log out</Link>
    </div>
    
  );
};

export default Profile;
