import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import adminValidation from './adminValidation';
import axios from 'axios';

import AdminSessionContext from '../context/AdminSessionContext';

const Admin = () => {
  const {AdminSessionId, setAdminSessionId } = useContext(AdminSessionContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (AdminSessionId >= 0) {
      navigate('/'); // Redirect to home page if already logged in
    }
  }, [AdminSessionId, navigate]);
  const [values, setValues] = useState({
    adminEmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(adminValidation(values));

    // Check if there are no validation errors
    if (!errors.adminEmail && !errors.password) {
    
       axios.post('http://localhost:8080/admin', values).then(res=>{
        if (res.data.Login) {
          // If login successful, set session ID and redirect to user page
          setAdminSessionId(res.data.Admin_Session_id);
          navigate('/admindashboard');
        } else {
          // If login failed, show alert
          alert("No record exists.");
        }
      })
      .catch(err => {
        // Log any errors
        console.error(err);
      });
  }
};


  return (
    <>
      <div className='flex flex-col m-auto justify-center bg-[#fefefe] items-center border-2 w-96 h-2/5 my-14  text-xl rounded-xl font-sans'>
        <h1 className='my-6 text-4xl text-green-500 font-bold'>Admin Login</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input type="email" placeholder='Admin' onChange={handleInput} name='adminEmail' className='w-80 h-10 my-4 px-4 rounded-md' />
          {errors.adminEmail && <span className='text-red-500 text-sm'>{errors.adminEmail}</span>}
          <input type="password" placeholder='Password' onChange={handleInput} name='password' className='w-80 h-10 my-4 px-4 rounded-md' />
          {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
          <input type="submit" className='uppercase bg-[#149253] rounded-md w-80 h-10 text-white my-4 cursor-pointer' value="Sign in" />
          <div className="flex my-4 items-center text-base">
            <p>Create new account</p>
            <Link to="/newadmin" className="text-[#129253]">
              New
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Admin;
