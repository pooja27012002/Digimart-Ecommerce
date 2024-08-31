// import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Billing = ({cart}) => {
  const navigate = useNavigate();
  const checkout=()=>{
    navigate(`/checkout/${cart.totalPrice}`)
  }
  const totalBillings = (subTotal) =>{
    if(subTotal > 0) {
      return subTotal + 60
    }
    
  };
  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
    <div className="mb-2 flex justify-between">
      <p className="text-gray-700">Subtotal</p>
      <p className="text-gray-700">₹{cart.totalPrice}</p>
    </div>
    <div className="flex justify-between">
      <p className="text-gray-700">Shipping</p>
      <p className="text-gray-700">{cart.totalPrice > 0 ? "₹600" : 0}</p>
    </div>
    <hr className="my-4" />
    <div className="flex justify-between">
      <p className="text-lg font-bold">Total</p>
      <div className="">
        <p className="mb-1 text-lg font-bold">₹{cart.totalPrice > 0 ? totalBillings(cart.totalPrice) : 0} INR</p>
        <p className="text-sm text-gray-700">including GST</p>
      </div>
    </div>
    <button className="mt-6 w-full rounded-md bg-yellow-600 py-1.5 font-medium text-white hover:bg-yellow" onClick={checkout}>
      Check out
    </button>
  </div>
  )
}
