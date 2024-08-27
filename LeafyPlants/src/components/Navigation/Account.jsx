import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Validation from '../LoginValidation'; // Import validation function
import SessionContext from '../../context/Session'; // Import session context

const Account = () => {
  // Access session context
  const { sessionId, setSessionId } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionId >= 0) {
      navigate('/');
    }
  }, [sessionId, navigate]);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const validationErrors = Validation(values); // Validate form fields
    setErrors(validationErrors);

    // Debugging statements
    console.log("Form values:", values);
    console.log("Validation errors:", validationErrors);

    // If there are no validation errors
    if (!validationErrors.email && !validationErrors.password) {
      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log("Response:", data); // Debugging statement

        if (data.Login) {
          // If login successful, set session ID and redirect to user page
          setSessionId(data.user_session_id);
          navigate('/UserPage');
        } else {
          // If login failed, show alert
          alert("No record exists.");
        }
      } catch (error) {
        // Log any errors
        console.error(error);
      }
    }
  };

  // Render login form
  return (
    <>
      <div className='flex flex-col m-auto justify-center bg-[#fefefe] items-center border-2 w-96 h-2/5 my-14 text-xl rounded-xl font-sans'>
        <h1 className='my-6 text-4xl text-green-500 font-bold'>Leafy</h1>
        <p>Welcome back! Sign in with</p>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInput}
            className="w-80 h-10 my-4 px-4 rounded-md"
            autoComplete="email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
            className="w-80 h-10 my-4 px-4 rounded-md"
            autoComplete="current-password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
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

