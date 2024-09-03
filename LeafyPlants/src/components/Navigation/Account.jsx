import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Validation from '../LoginValidation'; // Import validation function
import SessionContext from '../../context/Session'; // Import session context

const Account = () => {
  // Access session context
  const { sessionId, setSessionId } = useContext(SessionContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    if (sessionId >= 0) {
      navigate('/');
    }
  }, [sessionId, navigate]);

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
      setLoading(true); // Set loading state to true
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
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  // Render login form
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefefe] p-4 sm:p-6 md:p-8 lg:p-10">
      <div className='bg-white border-2 w-full max-w-md mx-auto p-6 rounded-xl shadow-lg'>
        <h1 className='text-3xl font-bold text-green-500 mb-4 text-center'>Leafy</h1>
        <p className='text-center mb-4'>Welcome back! Sign in with</p>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInput}
            className="w-full h-12 mb-4 px-4 border rounded-md"
            autoComplete="email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
            className="w-full h-12 mb-4 px-4 border rounded-md"
            autoComplete="current-password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          <p className='text-base mb-2 cursor-pointer text-center'>Forgot password?</p>
          <input
            type="submit"
            className='bg-[#149253] rounded-md w-full h-12 text-white cursor-pointer uppercase'
            value="Sign in"
          />
        </form>
        <div className='flex flex-col items-center mt-4 text-base'>
          <p>New here?</p>
          <Link to="/NewUser" className='text-[#129253]'>Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
