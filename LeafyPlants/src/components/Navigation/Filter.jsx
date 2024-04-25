import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";

const Filter = () => {
  return (
    <>
      <div className='bg-[#fafafa] w-80 h-fit rounded-md border-2 border-gray-500 py-10 mx-10 justify-between '>
        
        <div className=' flex my-4 mx-10 px-10 text-md text-gray-500  w- 80font-bold gap-10'>
          <h1>Filter</h1>
          <Link to='/' className='hover:underline underline-offset-1 uppercase  '>Clear all</Link>
        </div>
    
       <div className='grid  grid-cols-2 justify-between  w-80 h-80  mx-10'> 
       <div className='my-4 '  >Type of Plants</div> <div className='my-4'><FaPlus  /></div> 
       <div className='my-4 '  >Type of Plants</div> <div className='my-4'><FaPlus  /></div> 
       <div className='my-4 '  >Type of Plants</div> <div className='my-4'><FaPlus  /></div> 
       <div className='my-4 '  >Type of Plants</div> <div className='my-4'><FaPlus  /></div> 
       <div className='my-4 '  >Type of Plants</div> <div className='my-4'><FaPlus  /></div> 
       <div className='my-4 '  >Type of Plants</div> <div className='my-4'><FaPlus  /></div> 
       </div>
       
           
      
     
      </div>
      
    </>
  )
}

export default Filter
