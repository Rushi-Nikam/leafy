import React from 'react'

const PlantCard = ({id, image, title, rating, price}) => {
  return (
    <div className='w-full overflow-hidden'>
        <div className='relative w-80 overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
            <img src={image} alt = {title} className='w-full h-full object-cover'/>
            <span className='text-sm bg-[#fed02f] px-3 py-1 absolute top-3 left-3'>SALE</span>
        </div>
        <h1 className='mb-5 font-semibold text-2xl mt-2'>{title}</h1>

        <p>{rating}</p>
        <p className='text-[#149253] text-xl font-semibold mb-3'>From ₹{price}</p>

        <button href={`/product/${id}`} className='w-full uppercase px-12 py-3 bg-[#149253] text-white'>view product</button>
    </div>
  )
}

export default PlantCard;