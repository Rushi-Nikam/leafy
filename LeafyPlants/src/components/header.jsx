import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import SessionContext from '../context/Session';

const Header = () => {
  const session = useContext(SessionContext);

  return (
    <header className='px-12 py-3  grid sm:grid-cols-2 md:grid-cols-3 bg-[#0f4c36] text-white font-semibold'>
        <NavLink to='/Working' className='uppercase px-10  '>Vendor Register</NavLink>
        <NavLink to='/Working' className='uppercase px-10'>Free Shipping above ₹499 </NavLink>
    
        {session?.sessionId>=0?(
           <NavLink to='/admindashboard'className='uppercase px-10'>relavant information</NavLink>
        ):   <NavLink to='/Admin'className='uppercase px-10'>relavant information</NavLink>}
        {/* <NavLink to='/Userpage'>Franchise Enquiry</NavLink> */}
        {/* {session?.sessionId >= 0 ? (
          <NavLink to="/Userpage">
            <FaUserLarge size={20} />
          </NavLink>
        ) : (
          <NavLink to="/Account">
            <FaUserLarge size={20} />
          </NavLink>
        )} */}
    </header>
  )
}

export default Header;