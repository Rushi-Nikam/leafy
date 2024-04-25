import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
const PlantCard = ({ item, handleAddToCart }) => {
  return (
    <>
      <div className=''>
        <div className='grid grid-cols-3 gap-3 w-full overflow-hidden'>
          {item.map((val) => (
            <div key={val.id} className='mx-10 w-fit'>
              <div className='relative w-80 overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
                <img src={val.image} alt="" />
                <span className='text-sm bg-[#fed02f] px-3 py-1 absolute top-3 left-3'>SALE</span>
              </div>
              <div className='mb-5 font-semibold text-2xl mt-2'>
              {val.title}
              </div>
              <div className='flex'>
                <div>

              <FaRegStar className='text-yellow-500' />
                </div>
                {val.rating}
              </div>
              <div className='text-[#149253] text-xl font-semibold mb-3'>
                {val.price}
              </div>
              <Link to={`/SingleProduct/${val.id}`}>
                <button className='w-full uppercase px-12 py-3 mb-3 bg-[#149253] text-white'>view product</button>
              </Link>
              {/* Utilize AddToCartButton */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlantCard;
