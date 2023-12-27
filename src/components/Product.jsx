import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ post }) => {
  // Provide a default value for cart
  const { cart } = useSelector((state) => state) || { cart: [] };
  const dispatch = useDispatch();

  const AddtoCart = () => {
    dispatch(add(post));
    toast.success('Item added to Cart');
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Item Removed from Cart');
  };

  
  const isInCart = Array.isArray(cart) && cart.find((p) => p.id === post.id);

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt="raj" className='h-full w-full' />
      </div>
     
      <div className='flex justify-between gap-12 items-center w-full mt-5'>
      <div>
        <p className='text-green-600 font-semibold'>${post.price}</p>
      </div>
      <div className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
      text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>
        {isInCart ? (
          <button  onClick={removeFromCart}>DENY to cart</button>
        ) : (
          <button onClick={AddtoCart}>Add to Cart</button>
        )}
      </div>
      </div>
     
    </div>
  );
};

export default Product;
