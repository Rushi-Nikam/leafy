import React from 'react'
import { Link } from 'react-router-dom'

const Show = () => {
  return (
    <>
    <div className=' flex  items-center justify-center w-screen h-screen '>
     <div className='text-center bg-[#eff8f2] w-3/6 h-96  rounded-lg items-center  '>
        <h1 className='text-6xl text-green-500 font-serif  mt-24 '>Thank You</h1>
        <p className='text-2xl text-[#ffd02a]'>I will give you response ASAP</p>
       <Link to='/'className='text-red-500 underline font-serif text-xl' >Go Back</Link>
        </div>
        </div>
    </>
  )
}

export default Show