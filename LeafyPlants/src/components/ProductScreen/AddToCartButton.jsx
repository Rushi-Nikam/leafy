import React, { useState } from 'react';
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";


const AddToCartButton = ({ item, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity state
  const [totalPrice, setTotalPrice] = useState(); // Initialize total price state

  // Function to handle increasing the quantity and updating the total price
 // Function to handle increasing the quantity and updating the total price
const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      // setTotalPrice(totalPrice + item.price);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // setTotalPrice(totalPrice - item.price);
    }
  };

  return (
    <div className='flex gap-5 text-2xl' >
      {/* Display product information */}
      {/* <p>Product: {item.title}</p> */}
    
      {/* <p>price ₹{totalPrice}</p> */}

      {/* Add to cart button */}

      {/* Button to increase quantity */}
      <button  onClick={decreaseQuantity}><FaCircleMinus /></button>
      <p className='flex items-center text-center justify-center '>{quantity}</p>
      <button onClick={increaseQuantity}><FaCirclePlus /></button>
      <div>

      <button className='uppercase bg-green-500 w-96 h-12 text-xl rounded-sm text-white' onClick={() => handleAddToCart(item)}>Add TO  Cart</button>
      </div>
    </div>
  );
};

export default AddToCartButton;
