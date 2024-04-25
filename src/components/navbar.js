import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      link: "/collections/plants",
      title: "Plants",
    },
    {
      link: "/collections/seeds",
      title: "Seeds",
    },
    {
      link: "/collections/pots-planters",
      title: "Pots & Planters",
    },
    {
      link: "/collections/plant-care",
      title: "Plant Care",
    },
    {
      link: "/collections/gifting",
      title: "Gifting",
    },
    {
      link: "/collections/blog",
      title: "Blog",
    },
  ];
  return (
    <div className="flex items-center justify-between px-12 py-5 font-semibold bg-[#fff6f4]">
      <div>
        <div></div>
        <div>
          <ul className="flex items-center gap-8">
            {links?.map((link) => (
              <li>
                <NavLink to = {link.link} className="uppercase text-[#0f4c3c]" href={link.link}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-96 flex items-center gap-5">
        <div id="search-box" className="flex flex-1 items-center px-4 bg-white rounded-full overflow-hidden">
          <input
            className="focus:outline-none text-xs font-normal w-full py-3 bg-transparent"
            type="search"
            placeholder="Search for plants, seeds and planters..."
            value=""
          />
          <CiSearch size={20} className="cursor-pointer"/>
        </div>
        <FaUserLarge size={16}/>
        <HiOutlineShoppingCart size={20}/>
      </div>
    </div>
  );
};

export default Navbar;
