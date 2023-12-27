import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import {toast} from "react-hot-toast";
import {remove} from "../Slices/CartSlice"
const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
            dispatch(remove(item.id));
           toast.error("Succesfully removed");
  }
  return (
    <div className="  max-h-[200px] max-w-[500px] flex space-evenley">
      <div className='flex  space-x-4'>
        <div className=' flex justify-center items-center h-[180px]'>
          <img className='h-full w-full' src={item.image} alt="raj"></img>
        </div>
        <div className='flex flex-col space-y-5'>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title}
          </h1>
          <br></br>
          <h1 className='w-40 text-gray-400 font-normal text-[10px] text-left'>
          {item.description.split(" ").slice(0,10).join(" ")+"..."}
          </h1>
          <div className='flex justify-between'>
            <p className="text-green-700 text-xl font-bold">
              ${item.price}
            </p>
            <div  onClick={removeFromCart}>
            <RiDeleteBin6Fill/>
            </div>
          </div>
        </div>
        
      </div>
     

     
       
    </div>
  )
}

export default CartItem
