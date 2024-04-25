
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import axios from "axios";
import adminvalidate from "./adminvalidate";

const NewAdmin = () => {
    const [values, setValues] = useState({
       
        adminName: "",
        adminEmail: "",
        password: "",
      });
    
      const navigate = useNavigate();
      const [errors, setErrors] = useState({});
    
      const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = adminvalidate(values);
        setErrors(validationErrors);  
    
        if (errors.adminName ==="" && errors.adminEmail ==="" && errors.password ==="") {
          axios.post("http://localhost:8080/newadmin", values)
           .then((res) => {
              navigate("/admin");
              console.log(res);
            })
            .catch((err) => {
             console.error(err);
            });
          }
      };
    
      return (
        <>
          <div className="flex flex-col m-auto justify-center bg-[#fefefe] items-center border-2 w-96 h-3/5 my-14 text-xl rounded-xl font-sans">
            <h1 className="my-4 text-4xl text-green-500 font-bold">Admin register</h1>

            {/* <div className="flex gap-2 my-4">
              <div className="flex gap-1 bg-blue-500 py-5 px-5 rounded-lg text-white w-36 h-10 items-center justify-center cursor-pointer">
                <FaFacebookF /> Facebook
              </div>
              <div className="flex gap-1 bg-red-500 py-5 px-5 rounded-lg text-white w-36 h-10 items-center justify-center cursor-pointer">
                <FaGoogle /> Google
              </div>
            </div> */}
        
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First name"
                name="adminName"
                onChange={handleInput}
                className="w-80 h-12 py-3.5 my-2 px-4 rounded-md border-2 border-[#dadce0] text-base"
                autoComplete="off"
              />
              {errors.adminName && (
                <span key="Fname-error" className="text-red-500 text-sm">
                  {errors.adminName}
                </span>
              )}
             
              <input
                type="email"
                placeholder="Email"
                name="adminEmail"
                onChange={handleInput}
                className="w-80 h-12 my-2 px-4 rounded-md border-2 border-[#dadce0] text-base"
                autoComplete="off"
              />
              {errors.adminEmail && (
                <span key="email-error" className="text-red-500 text-sm">
                  {errors.adminEmail}
                </span>
              )}
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInput}
                className="w-80 h-12 my-2 px-4 rounded-md border-2 border-[#dadce0] text-base"
                autoComplete="off"
              />
              {errors.password && (
                <span key="password-error" className="text-red-500 text-sm">
                  {errors.password}
                </span>
              )}
              <button
                type="submit"
                className="uppercase bg-[#149253] rounded-md w-80 h-10 text-white my-4 cursor-pointer"
              >
                create account{" "}
              </button>
            </form>
            <div className="flex my-4 items-center text-base">
              <p>Already have an account?</p>
              <Link to="/Admin" className="text-[#129253]">
                Sign in
              </Link>
            </div>
          </div>
        </>
      );
    };

export default NewAdmin
