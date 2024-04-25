import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton'; // Import the AddToCartButton component
import { FaRegStar } from "react-icons/fa";

import data from '../Data/data';
import data2 from '../Data/data2';

const SingleProduct = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [priceMultiplier, setPriceMultiplier] = useState(1);

  useEffect(() => {
    const fetchProduct = () => {
      const selectedProduct = data.find(item => item.id === id);
      if(selectedProduct){
        setProduct(selectedProduct);
      } else {
        const selectedProduct = data2.find(item => item.id === id);
        if(selectedProduct){
          setProduct(selectedProduct);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (item) => {
    // Implement the logic to add the item to the cart
    
    console.log('Item added to cart:', item.title);
  };

  return (
    <div>
      {product ? (
        <div>
          <div className='flex gap-1 text-xl my-2 mx-24 text-green-500'>
            <Link to={`/`}><span>Home</span>  /  </Link> <span>{product.title}</span>
          </div>
          <div className='grid grid-cols-2 gap-4 my-10 w-full  font-serif'>
            <div className='w-full h-lvh mx-24'>
              <img className='h-5/6' src={product.image} alt={product.title}/>
            </div>
            <div className='mx-12 my-10'>
              <h2 className='font-bold text-4xl'>{product.title}</h2>
              <p className='text-2xl '>Description: {product.description}</p>
              <p className='text-2xl flex gap-2'>Rating: <p className='text-yellow-500 text-3xl'><FaRegStar /></p>{product.rating}</p>
              {/* {product?.quantity <= 10 ? 
              <p>Product quantity minimum. Order now</p>  
              :
              null
              } */}
              <p className='text-2xl text-green-500'>Price: ₹{product.price * priceMultiplier}</p>
              <div className='flex gap-10 mt-4 mb-8'>
              <button className='bg-green-500 text-white w-24  border-2 border-black rounded-md' onClick={() => setPriceMultiplier(3)}>Add 3</button>
              <button className='bg-green-500 text-white w-24  border-2 border-black rounded-md'  onClick={() => setPriceMultiplier(5)}>add 5</button>
              </div>
              
             
              {/* Add the AddToCartButton component here */}
              <AddToCartButton item={product} handleAddToCart={handleAddToCart} />
              <div>
           
              </div>
             
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default SingleProduct;
