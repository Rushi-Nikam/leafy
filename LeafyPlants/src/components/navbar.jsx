import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SessionContext from "../context/Session";
import { useCartStore } from "../store/CartStore";

const Navbar = ({ isLoggedIn }) => {
  const session = useContext(SessionContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCartStore((state) => ({
    cart: state.cart,
  }));

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const links = [
    { id: 1, link: "/collections/plants", title: "Plants" },
    { id: 2, link: "/collections/seeds", title: "Seeds" },
    { id: 3, link: "/collections/service", title: "Service" },
    { id: 4, link: "/collections/GTools", title: "Gardening Accessories" },
    { id: 5, link: "/collections/Contact", title: "Contact us" },
  ];

  return (
    <div className="flex items-center justify-between px-4 md:px-12 py-5 font-semibold bg-[#fff6f4] min-h-[3.5rem] max-h-[5rem]">
      {/* Menu icon for mobile view */}
      <div className="md:hidden flex items-center">
        <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
          {menuOpen ? <IoCloseSharp size={28} /> : <TiThMenu size={28} />}
        </div>
      </div>

      {/* LeafyPlants logo, centered on mobile */}
      <div className="flex-1 text-center md:flex-none">
        <NavLink to="/">
          <h1 className="text-green-500 font-bold text-xl md:text-2xl">LeafyPlants</h1>
        </NavLink>
      </div>

      {/* Links for web view */}
      <ul className="hidden md:flex flex-row items-center gap-4 md:gap-8 mx-auto">
        {links?.map((link) => (
          <li key={link.id} className="list-none">
            <NavLink
              to={link.link}
              className="uppercase text-[#0f4c3c] text-sm md:text-base whitespace-nowrap"
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Search box and icons */}
      <div className="flex items-center gap-3 md:gap-5">
        <div id="search-box" className="flex flex-1 items-center px-4 bg-white rounded-full overflow-hidden min-w-[10rem] max-w-[20rem]">
          <input
            className="focus:outline-none text-xs md:text-sm font-normal w-full py-2 md:py-3 bg-transparent"
            type="search"
            placeholder="Search for plants, seeds and planters..."
          />
          <CiSearch size={20} className="cursor-pointer" />
        </div>
        {session?.sessionId >= 0 ? (
          <NavLink to="/Userpage">
            <FaUserLarge size={20} />
          </NavLink>
        ) : (
          <NavLink to="/Account">
            <FaUserLarge size={20} />
          </NavLink>
        )}
        <NavLink to="/Shoppingcart" className="relative">
          <HiOutlineShoppingCart size={23} />
          {totalItems > 0 && (
            <span className="absolute top-2 right-2 inline-flex items-center justify-center p-[6px] w-6 h-6 bg-green-500 text-white text-xs font-bold leading-none rounded-full">
              {totalItems}
            </span>
          )}
        </NavLink>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute left-0 top-36 w-full bg-[#fff6f4] flex flex-col items-start gap-4 py-4 px-6 md:hidden z-10 min-h-[10rem] max-h-[20rem]">
          {links?.map((link) => (
            <li key={link.id} className="list-none w-full border-b border-gray-300">
              <NavLink
                to={link.link}
                className="uppercase text-[#0f4c3c] text-base py-2 block"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
