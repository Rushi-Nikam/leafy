import React , {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link, } from "react-router-dom";
// import data from "../../images/ContactUs/ContactUs.png";
import { ImFacebook2 } from "react-icons/im";
// import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
// import { TiSocialYoutube } from "react-icons/ti";
import axios from "axios";
import ContactValidation from "../ContactValidation";

const Contact = () => {
const navigate = useNavigate();
  const [values, setValues] = useState({
    username:'',
    email:'',
    number:'',
    message:'',
  });
  
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const submitHandler=(event)=>{
   event.preventDefault();
   const validationErrors = ContactValidation(values);
    setErrors(validationErrors);
    if (errors.username ==="" && errors.number ==="" && errors.email ==="" && errors.message ==="") {
      axios.post('http://localhost:8080/Contact', values)
        .then(res => { 
          

            navigate('/Show');
         
            })
        .catch(err => {
          console.error(err)});
    }
  };
  return (
    <>
      <div className=" w-fit min-h-min ">
        <img
          src="https://www.ugaoo.com/cdn/shop/files/Desktop-Banner_1_751e1387-21fd-46b3-afd9-7ddee7cc3450.jpg?v=1707311446"
          alt="img"
        />
      </div>
      <div className="flex">
        <div className=" mx-14 my-12 w-2/4">
          <h2 className="text-3xl mb-8 mx-12 ">Contact With Us</h2>
          <form action="" method="POST" onSubmit={submitHandler}>
            <div className="mx-12">
              <input
                type="text"
                placeholder="Name"
                onChange={handleInput}
                name="username"
                className="flex border-2 w-full h-12 p-5"
                autoComplete="off"
               
              />
              {errors.username && <span key="username -error" className='text-red-500 text-sm'>{errors.username}</span>}
            </div>
            <div className="mx-12 my-5">
              <input
                className="flex border-2 w-full h-12 p-5"
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="off"
                onChange={handleInput}
              />
              {errors.email && <span key="email-error" className='text-red-500 text-sm'>{errors.email}</span>}
            </div>
            <div className="mx-12 my-5">
              <input
                className="flex border-2 w-full h-12 p-5"
                type="tel"
                placeholder="Number"
                name="number"
                autoComplete="off"
                onChange={handleInput}
               
              />
               {errors.number && <span key="number-error" className='text-red-500 text-sm'>{errors.number}</span>}
            </div>

            <div className="mx-12">
              <textarea
                className="flex border-2 w-full h-32 p-5"
                id="message"
                placeholder="message"
                name="message"
                rows="5"
                onChange={handleInput}
            
              ></textarea>
               {errors.message && <span key="message-error" className='text-red-500 text-sm'>{errors.message}</span>}
            </div>
            <input 
              type="submit"  value="send message"
            className="bg-[#149253] rounded mx-12 my-4 px-12 py-4 font-sans font-semibold uppercase text-white space-x-2.5"/>
          </form>
        </div>
        <div className=" text-slate-700 font-sans px-10 py-10 m-10 ">
          <h2 className="text-2xl  my-2">Name</h2>
          <p className="mb-8"> LeafyPlants Agritech Pvt.Ltd</p>
          <h2 className="text-2xl my-4">Email</h2>
          <p className="mb-8">leafyPlantssupport12@gmail.com</p>
          <h2 className="text-2xl my-4">Follow US</h2>
          <div className="flex  w-32 ">
            <Link
              to="/"
              className="w-12 h-2/5 mx-2 p-2  hover:bg-black  hover:text-white hover:rounded-full"
            >
              {" "}
              <ImFacebook2 />
            </Link>
            <Link
              to="/"
              className="w-12 h-2/5 mx-2 p-2   hover:bg-black  hover:text-white hover:rounded-full"
            >
              {" "}
              {/* <RiTwitterXFill /> */}
              <PiTelegramLogo />
            </Link>
            <Link
              to="/"
              className="w-12 h-2/5 mx-2 p-2  hover:bg-black  hover:text-white hover:rounded-full"
            >
              {" "}
              <FaInstagram />
            </Link>

            <Link
              to="/"
              className="w-12 h-2/5 mx-2 p-2  hover:bg-black  hover:text-white hover:rounded-full"
            >
              {" "}
              <FiMapPin />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mb-12  items-center m-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2914798718734!2d73.75010007496505!3d18.605954982504276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97c138deee7%3A0x5548eed7fc280ee5!2sBhumkar%20Chowk!5e0!3m2!1sen!2sin!4v1711985362699!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
