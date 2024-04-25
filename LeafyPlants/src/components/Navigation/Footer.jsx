import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
// import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { TiSocialYoutube } from "react-icons/ti";
import { FiMapPin } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";

function Footer() {
  return (
    <>
      <div className="grid w-full p-3  grid-row  gap-20 grid-flow-col justify-center items-center text-center text-2xl text-white bg-[#114c36] md:text-xl sm:text-xs lg:text-lg ">
        <span>plants grow people</span>
        <span>plants grow people</span>
        <span>plants grow people</span>
        <span>plants grow people</span>
        <span>plants grow people</span>
      </div>
      <div className="grid px-12 py-4  w-full shadow-inner text-[#114c36] bg-white">
        <ul className="flex  gap-4">
          <li>
            <Link to="/mumbai" className="px-2 underline">
              Mumbai
            </Link>
          </li>
          <li>
            <Link to="/pune" className="px-2 underline">
              Pune
            </Link>
          </li>
          <li>
            <Link to="/satara" className="px-2 underline">
              Satara
            </Link>
          </li>
          <li>
            <Link to="/thane" className="px-2 underline">
              Thane
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid text-[#114c36]">
        <ul className="grid  grid-row p-14 grid-flow-col items-center gap-4">
          <li className="flex flex-col gap-2">
            <h4>ABOUT US</h4>

            <Link to="/About">Our story</Link>
          </li>

         
          <li className="flex flex-col gap-2">
            <h4>GET IN YOU</h4>
            <Link to="/admindashboard">Call: +918398293232</Link>{" "}
          </li>
          <li>
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
              {/* <Link
              to="/"
              className="w-12 h-2/5 mx-2 p-2  hover:bg-black  hover:text-white hover:rounded-full"
            >
              {" "}
              <FaLinkedinIn />
            </Link> */}
              <Link
              to="/"
              className="w-12 h-2/5 mx-2 p-2  hover:bg-black  hover:text-white hover:rounded-full"
            >
              {" "}
              <FiMapPin />
            </Link>
              {/* <Link
                to="/"
                className="w-12 h-2/5 mx-2 p-2  hover:bg-black  hover:text-white hover:rounded-full"
              >
                {" "}
                <TiSocialYoutube />
              </Link> */}
            </div>
          </li>
        </ul>
      </div>
      <br />

      <br />
    </>
  );
}

export default Footer;
