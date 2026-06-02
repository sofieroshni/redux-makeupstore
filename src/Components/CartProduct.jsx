import React from "react";
import { useDispatch } from "react-redux";
import { Decrease, Increase, removeProduct } from "../Features/CartSlice";

const CartProduct = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (<div className="mt-5">
    <div className="d-flex border mb-3">
      <img src={cartItem.thumbnail} className="w-25 h-25" alt="" />
      <div className="detail ms-4">
        <h5 className="card-title text-dark mt-4">{cartItem.title}</h5>
        <p className="card-text text-dark">$ {cartItem.price}</p>
        <div className='buttons justify-content-center align-items-center gap-2'>
          <button className='rounded m-1'>{cartItem.quantity}</button>
          <button className='rounded m-1' onClick={() => dispatch(Decrease(cartItem.id))}>-</button>
          <button className='rounded m-1' onClick={() => dispatch(Increase(cartItem.id))}>+</button>
          <button className='rounded m-1' onClick={() => dispatch(removeProduct(cartItem.id))}>Remove</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartProduct;