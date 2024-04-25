import React from 'react'
import {Link} from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

const Mumbai = () => {
  return (
    <>
    <div className='flex flex-col justify-center mx-20 font-sans'>

    
      <div className='my-10 font-bold text-6xl'>Mumbai</div>
      <div className='flex gap-10'>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Toni Nursery</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span>JQWR+34G, Old Mumbai - Pune Hwy, Kalbhor Nagar, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span>10:30 am  - 7:30 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>02114286008</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/Y3co5uNuNqxE8FQy6`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Vrukshvalli The Plants Mall</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span>54/19 Punavale, Mumbai, Road, Pune, Maharashtra 411033
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span>9:00 am - 10:00 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>8180001460</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/TF1WrqwyY565tXSB9`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
   
      </div>
      <div className='flex gap-10'>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Sunny Nursery</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span> 1, Orchard Ave, Panchkutir Ganesh Nagar, Powai, Mumbai, Maharashtra 400076
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span> 9:00 am - 9:00 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>9665558053</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/a1BUeVMT7cRPBy5DA`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Plants World</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span> Banaji Fire Temple Compound, opp. Charni Road Station East, next to B J P C Institution, Charni Road East, Kranti Nagar, Thakurdwar, Girgaon, Mumbai, Maharashtra 400002
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span> 9:00 am - 9:00 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>9820264013</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/BpsVLcW21QB6teLL6`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
   
      </div>
      <div className='flex gap-10'>
      <div className=' grid  w-6/12 h-72  items-center  bg-[#eff8f2] mb-10' >
        <div className='mx-10 gap-10'>
        <h1 className=' text-2xl mb-2'>Lila Nursery</h1>
         <p className='mb-4'>
       <span className='font-bold'> Address: </span> Kanti Kunj, Saraswati Rd, next to Punjab National Bank, GOI Staff Colony, Santacruz West, Mumbai, Maharashtra 400054
         </p>
         <p className='my-4 uppercase'><span className='font-bold'>Time:</span> 9:00 am  - 9:00 pm</p>
         <p className='mb-4'><span className='font-bold'>Contact No:</span>09930601299</p>
         <Link target='_blank' to={`https://maps.app.goo.gl/avLZ1bBq8wgL12gr9`} className='flex uppercase border-2 py-2 w-24 items-center text-center justify-center text-[#249452] bg-[#ffd10a]'>map 
         <div><GoArrowUpRight /></div></Link>
        </div>
      </div>
      
    
   
      </div>
      
     
   
     
     
      </div>
    </>
  )
}
export default Mumbai;
