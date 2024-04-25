import React, { useState } from 'react';
import data from '../Data/data';
import data2 from '../Data/data2';
const AddToCartPage = () => {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h1>Add to Cart Page</h1>
      <div>
        {/* Display cart items */}
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={clearCart}>Clear Cart</button>
      </div>
      <div>
        {/* Display product list */}
        <h2>Product List</h2>
        {/* Display your product list here */}
        {/* Example: */}
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddToCartPage;

