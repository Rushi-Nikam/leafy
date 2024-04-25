import React from 'react'

const Card = ({image_url, title}) => {
  return (
    <div className='cursor-pointer flex flex-col space-y-3 items-center'>
        <div className='w-72 overflow-hidden'>
            <img src={image_url} alt={title} className='rounded-sm hover:scale-105 transition-all duration-300 ease-in-out'/>
        </div>
        <h1 className='font-semibold text-lg'>{title}</h1>
    </div>
  )
}

export default Card