import React from 'react'
import { Link } from 'react-router-dom'
import PlantCard from '../PlantCard'

const Service = () => {
  return (
    <>
    <div>
      <img src="https://www.ugaoo.com/cdn/shop/files/final-web-banner.jpg?v=1674630750" />

    </div>
    <div className='grid grid-flow-col py-20 px-24'>
      <div className='w-7/12 '>
      <img src="https://www.ugaoo.com/cdn/shop/files/Garden-Maintenance-Banner.png?v=1666235265" className='w-full ' alt="" />
    </div>
    <div className='w-11/12 my-8 font-serif '>
      <h1 className='text-4xl '>Garden Maintenance</h1>
      <ol className='' >
        <li className='text-xl my-2'>1 .Single Day Maintenance Services</li>
        {/* <li className='text-xl my-2'>2 .monthly Maintenance Services</li> */}
        <li className='text-xl my-2'>2 .Flower Garden Setup</li>
      </ol>
     
     <Link to="/Forms"> <button className='bg-green-800 flex items-center justify-center py-2 my-2 mx-8 px-10 text-white rounded-lg uppercase '>fill out Form</button></Link>
    </div>
    
    </div>
    
    <div className='grid grid-flow-col py-20 px-24'>
    <div className='w-11/12 font-serif mx-24 my-12 '>
      <h1 className='text-4xl'>Vertical Garden</h1>
     <ol>
      <li className='text-xl my-2'>1. New Installation in Bio-Wall System</li>
      <li className='text-xl my-2'>2. Maintenance / Existing as well as New</li>
     </ol>
      
  
     <Link to="/Formes">     <button className='bg-green-800 flex items-center justify-center py-2 my-2 mx-8 px-10 text-white rounded-lg uppercase '>fill out Form</button></Link>
    </div>
      <div className='w-8/12 mx-72 '>
      <img src="https://www.ugaoo.com/cdn/shop/files/Vertical-Garden-Banner.png?v=1666235479" className='w-full' alt="" />
    </div>
    
    </div>
    
    
    
  </>  )
}

export default Service;