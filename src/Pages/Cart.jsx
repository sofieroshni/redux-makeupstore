import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../Components/CartProduct.jsx";
import Checkout from "./Checkout.jsx";
import { Link } from "react-router";
import { checkout, totalItem, totalPrice } from "../Features/CartSlice.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );
const boughtItems = useSelector(
 (state) => state.cart.boughtItems || [] 
);
  return (
<div className ="container mt-1 mb-5" >
  <div className="row ">
    <div className="col-8">
      {cartItems.length === 0 ? (
        <p>Kurven er tom</p>
      ) : (
        cartItems.map((item) => (
          <CartProduct
            key={item.id}
            cartItem={item}
          />
        ))
      )}
    </div>
  </div>
  <div className="col-4">
    <div className="bg-secondary p-3 text-white">
      <h5>Antal produkter i Kurv: {totalItem(cartItems)}</h5>
      <h5>Samlet Pris; {totalPrice(cartItems)} Kr</h5>
      <Link  className="btn "to ="/checkout" style={{backgroundColor:"#764ABC"}}>    
             <button  onClick={() => dispatch(checkout())} style={{border:"none", background:"none", color:"white"}}>Checkout</button>
        </Link>
    </div>
  </div>
</div> 
    // <div className="container mt-5">
    //     <Link to ="/checkout">    
    //           <button className='btn btn-primary' onClick={() => dispatch(checkout())}>checkout</button>
    //     </Link>

    //   {cartItems.length === 0 ? (
    //     <p>Kurven er tom</p>
    //   ) : (
    //     cartItems.map((item) => (
    //       <CartProduct
    //         key={item.id}
    //         cartItem={item}
    //       />
    //     ))
    //   )}
    // </div>
  );
};

export default Cart;