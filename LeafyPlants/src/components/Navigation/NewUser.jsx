import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import axios from "axios";
import validation from "../validation";

const NewUser = () => {
  const [values, setValues] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);  

    // if (errors.Fname ==="" && errors.Lname ==="" && errors.email ==="" && errors.password ==="") {
      axios
        .post("http://localhost:8080/NewUser", values)
        .then((res) => {
          navigate("/Account");
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      // }
  };

  return (
    <>
      <div className="flex flex-col m-auto justify-center bg-[#fefefe] items-center border-2 w-96 h-3/5 my-14 text-xl rounded-xl font-sans">
        <h1 className="my-4 text-4xl text-green-500 font-bold">Leafy</h1>
        <p>Welcome back! Sign in with</p>
        {/* <div className="flex gap-2 my-4">
          <div className="flex gap-1 bg-blue-500 py-5 px-5 rounded-lg text-white w-36 h-10 items-center justify-center cursor-pointer">
            <FaFacebookF /> Facebook
          </div>
          <div className="flex gap-1 bg-red-500 py-5 px-5 rounded-lg text-white w-36 h-10 items-center justify-center cursor-pointer">
            <FaGoogle /> Google
          </div>
        </div> */}
        <div className="font-thin to-transparent">or use your email</div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="Fname"
            onChange={handleInput}
            className="w-80 h-12 py-3.5 my-2 px-4 rounded-md border-2 border-[#dadce0] text-base"
            autoComplete="off"
          />
          {errors.Fname && (
            <span key="Fname-error" className="text-red-500 text-sm">
              {errors.Fname}
            </span>
          )}
          <input
            type="text"
            placeholder="Last name"
            name="Lname"
            onChange={handleInput}
            className="w-80 h-12 my-2 px-4 rounded-md border-2 border-[#dadce0] text-base"
            autoComplete="off"
          />
          {errors.Lname && (
            <span key="lname-error" className="text-red-500 text-sm">
              {errors.Lname}
            </span>
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInput}
            className="w-80 h-12 my-2 px-4 rounded-md border-2 border-[#dadce0] text-base"
            autoComplete="off"
          />
          {errors.email && (
            <span key="email-error" className="text-red-500 text-sm">
              {errors.email}
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
          <Link to="/Account" className="text-[#129253]">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewUser;
