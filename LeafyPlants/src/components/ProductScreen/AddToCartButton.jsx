// src/components/AddToCartButton.js
import React from 'react';

const AddToCartButton = ({ item, handleAddToCart }) => {
  return (
    <button 
      className='bg-green-500 text-white py-2 px-4 rounded-lg'
      onClick={() => handleAddToCart(item)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
