import React from 'react';

const AddToCartButton = ({ item, handleAddToCart }) => {
  return (
    <button 
      className='bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold'
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
