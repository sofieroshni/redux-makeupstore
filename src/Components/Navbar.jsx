import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import cartSlice from '../Features/CartSlice.jsx'

const Navbar = () => {
  // Redux version af hooks
const cartItems = useSelector((state) => state.cart.cartItems);
//totalItems er "kurven". 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const userMoney = useSelector((state) => state.userMoney);
  
  return (
    <header className="fixed-top">
      <div className="d-flex justify-content-between bg-secondary p-3 text-white">
        <Link to='/' className="navbar-brand fs-4 fw-bolder">Shop</Link>
        <div className="d-flex gap-4 align-items-center">
          {/* <span>Penge på konto: {userMoney.toFixed(2)} kr</span> */}
          <Link to='/cart' className="text-white fs-2 text-decoration-none">
            <BsCart /> 
      {totalItems}
      {userMoney}
          </Link>
        {/* <Link to ="/checkout">Chekcout</Link> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar