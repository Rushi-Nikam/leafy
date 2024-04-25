import React from 'react'
import {Link} from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

const Satara = () => {
  return (
    <>
    <div className='flex flex-col justify-center mx-20 font-sans'>

    
      <div className='my-10 font-bold text-6xl'>Satara</div>
      <div className='flex gap-10'>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Rudra Nursery</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span>At post Tambave , Bargevasti, Satara - Lonand Rd, Lonand, Maharashtra 415521
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span>10:30 am  - 7:30 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>9867581588</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/v64GTBTtGoTaqxK58`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Trimurti Nursery</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span>Shop No 1near, Nira - Satara Rd, Padegaon, Maharashtra 412102
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span>9:00 am - 10:00 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>09730465591</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/Pj7REgV5hKtC7wRA9`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
   
      </div>
      <div className='flex gap-10'>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Hindavi Agro</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span>6VVX+6W5, Pune - Satara Rd, Pune, Maharashtra 412205 
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span> 9:00 am - 10:00 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>9645598053</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/JqKoAdKrqnATaJMM8`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
     
    
   
      </div>
      
     
   
     
     
      </div>
    </>
  )
}
export default Satara;
