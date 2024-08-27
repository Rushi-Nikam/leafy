import React, { useContext } from 'react';
import CartContext from '../../context/cart_context';

const ShoppingCart = ({ onCheckout }) => {
  const { cart, removeProductFromCart, updateProductQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate the discount
  const discount = totalPrice > 3000 ? 0.05 * totalPrice : 0;
  const finalPrice = totalPrice - discount;

  return (
    <div className='p-4'>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='border-solid border-blue-300 border-2'>
          <h2 className='text-2xl font-bold mb-4 p-4'>Shopping Cart</h2>
          <div className='grid grid-cols-5 gap-4 p-4 border-b border-gray-300 bg-gray-100'>
            <div className='font-semibold'>Image & Title</div>
            <div className='font-semibold text-center'>Quantity</div>
            <div className='font-semibold text-center'>Price</div>
            <div className='font-semibold text-center'>Actions</div>
            <div></div> {/* Empty column for alignment */}
          </div>
          {cart.map(product => (
            <div className='grid grid-cols-5 gap-4 items-center p-4 border-b border-gray-300' key={product.id}>
              <div className='flex items-center'>
                <img className='my-3' src={product.image} alt={product.title} style={{ width: '100px' }} />
                <div className='ml-4'>
                  <h3 className='text-lg font-semibold'>{product.title}</h3>
                </div>
              </div>
              <div className='text-center'>
                <div className='flex items-center w-20 h-8 justify-center bg-gray-500 rounded-xl text-white'>
                  <button 
                    className='bg-green-500 flex items-center justify-center p-2 w-8 h-8 text-2xl rounded-full'
                    onClick={() => updateProductQuantity(product.id, product.quantity - 1)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span className='mx-2'>{product.quantity}</span>
                  <button 
                    className='bg-green-500 flex items-center justify-center p-2 w-8 h-8 text-2xl rounded-full'
                    onClick={() => updateProductQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='text-center'>
                ₹{product.price * product.quantity}
              </div>
              <div className='text-center'>
                <button 
                  className='bg-red-500 text-white py-1 px-4 rounded'
                  onClick={() => removeProductFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
              <div></div> {/* Empty column for alignment */}
            </div>
          ))}
          <div className='p-4 text-right border-t border-gray-300'>
            <div className='mb-2'>
              <p className='text-lg font-semibold'>Original Total Price: ₹{totalPrice.toFixed(2)}</p>
              {discount > 0 && (
                <p className='text-lg font-semibold text-red-500'>
                  Discount Applied: ₹{discount.toFixed(2)}
                </p>
              )}
            </div>
            {discount > 0 && (
              <h3 className='text-xl font-semibold'>
                New Buying Price: ₹{finalPrice.toFixed(2)}
              </h3>
            )}
            <div className='mt-4'>
              <button 
                className='bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold'
                onClick={onCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
