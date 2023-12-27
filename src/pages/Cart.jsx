import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'; 

const Cart = () => {
  const cart = useSelector((state) => state.cart); 

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    console.log('Cart:', cart);
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  
  return (
    <div >
      {cart.length > 0 ? (
        <div className='flex  justify-evenly'>
          <div className='flex flex-col ml-4 mt-4 space-y-4'>
    {cart.map((item, index) => {
      return <div className='flex flex-col space-y-1'>
        <CartItem key={item.id} item={item} itemIndex={index} />
         
       <div className="w-full h-0.5 bg-slate-500" >

       </div>

         </div>
        
    })}
  </div>
    <div  className='flex  flex-col justify-between  mt-10 mb-10'>

    <div className='flex flex-col space-y-2'>
            <div className="text-green-700 text-xl font-bold">
              Your Cart
            </div>
            <div className="text-green-700 text-5xl font-bold">
              Summary
            </div>
            <p className="text-green-700 text-sm font-bold">
              <span className='flex'>
                Total Items: {cart.length}
              </span>
            </p>
          </div>
          <div className='flex flex-col space-y-5'>
            <p className="text-slate-500 text-xl font-bold">Total Amount:<span className='text-slate-700'> ${totalAmount}</span></p>
          <Link to="/">
          <button className="bg-green-700 text-white p-2  text-xl font-bold">
              CheckOut Now
            </button>
          </Link>
          
          </div>

    </div>
          

        </div>
      ) : (
        <div className='flex flex-col items-center  gap-y-4 justify-center h-screen' >
          <h1 className='text-white text-2xl  bg-slate-900 p-1 rounded-xl '>Cart Empty</h1>
          <Link to="/">
            <button className='text-white text-2xl bg-slate-900 p-1 rounded-xl '>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
