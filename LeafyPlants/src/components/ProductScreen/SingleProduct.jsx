import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import { FaRegStar } from "react-icons/fa";
import { useCartStore } from '../../store/CartStore';
import data from '../Data/data';
import data2 from '../Data/data2';

const SingleProduct = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addProductToCart = useCartStore(state => state.addProductToCart);

  const fetchProduct = useCallback(() => {
    setLoading(true);
    try {
      const selectedProduct = data.find(item => item.id === id) || data2.find(item => item.id === id);
      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        setError("Product not found");
      }
    } catch (err) {
      setError("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {product ? (
        <div>
          <div className='flex gap-1 text-xl my-2 mx-24 text-green-500'>
            <Link to={`/`}><span>Home</span> / </Link> <span>{product.title}</span>
          </div>
          <div className='grid grid-cols-2 gap-4 my-10 w-full font-serif'>
            <div className='w-full h-lvh mx-24'>
              <img className='h-5/6' src={product.image} alt={product.title} />
            </div>
            <div className='mx-12 my-10'>
              <h2 className='font-bold text-green-500 text-4xl'>{product.title}</h2>
              <div className='text-2xl'><span className='text-green-500'>Description:</span> {product.description}</div>
              <div className='text-2xl flex gap-2'>
              <span className='text-green-500'> Rating:</span>  <p className='text-yellow-500 text-3xl'><FaRegStar /></p>{product.rating}
              </div>
              <p className='text-2xl'> <span className='text-green-500'> Price:</span>  ₹{product.price}</p>
              <AddToCartButton item={product} handleAddToCart={() => addProductToCart(product)} />
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
