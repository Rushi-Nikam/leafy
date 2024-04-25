import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Validation from '../LoginValidation'; // Import validation function
import axios from 'axios';
import SessionContext from '../../context/Session'; // Import session context
// import { useUser } from '../../context/UserContext';

const Account = () => {
  // Access session context
  const { sessionId, setSessionId } = useContext( SessionContext);
  const navigate = useNavigate(); // Access navigation function
  // const { setUser } = useUser();

  // Effect to redirect if user is already logged in
  useEffect(() => {
    if (sessionId >= 0) {
      navigate('/'); // Redirect to home page if already logged in
    }
  }, [sessionId, navigate]);

  // State for email, password, and validation errors
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Function to handle input change
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setErrors(Validation(values)); // Validate form fields
    // const userData = getUserData(); // Replace with your authentication logic
    // setUser(userData);

    // If there are no validation errors
    if (!errors.email && !errors.password) {
      // Make POST request to login endpoint
      axios.post('http://localhost:8080/login', values)
        .then(res => {
          if (res.data.Login) {
            // If login successful, set session ID and redirect to user page
            setSessionId(res.data.user_session_id);
            navigate('/UserPage');
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

  // Render login form
  return (
    <>
      <div className='flex flex-col m-auto justify-center bg-[#fefefe] items-center border-2 w-96 h-2/5 my-14 text-xl rounded-xl font-sans'>
        <h1 className='my-6 text-4xl text-green-500 font-bold'>Leafy</h1>
        <p>Welcome back! Sign in with</p>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' onChange={handleInput} name='email' className='w-80 h-10 my-4 px-4 rounded-md' />
          {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
          <input type="password" placeholder='Password' onChange={handleInput} name='password' className='w-80 h-10 my-4 px-4 rounded-md' />
          {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
          <p className='text-base my-2 cursor-pointer'>Forgot password?</p>
          <input type="submit" className='uppercase bg-[#149253] rounded-md w-80 h-10 text-white my-4 cursor-pointer' value="Sign in" />
        </form>
        <div className='flex my-4 items-center text-base'>
          <p>New here?</p>
          <Link to="/NewUser" className='text-[#129253]'>Create an account</Link>
        </div>
      </div>
    </>
  );
};

export default Account;
