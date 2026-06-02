import React from "react";
import { Add } from "../Features/cartSlice";
import { useDispatch } from "react-redux";
export const Product = ({ product }) => {
const dispatch = useDispatch();

  return (
     <div style={{ zIndex:"1000"}} >
            <div className ="card justify-content-center text-align-center" >
<img
  src={product.thumbnail}
  alt={product.title}
  style={{
    width: "100%",
    objectFit: "cover"
  }}
/>  <div className="card-body">
      <p className='text-secondary'>{product.category}</p>

    <h5 className="card-title text-dark">{product.price}</h5>
    <p className="card-text">{product.description}</p>
         <button
            className="btn" style={{backgroundColor:"#764ABC", color:"white"}} 
            onClick={() => dispatch(Add(product))}
          >
            Tilføj
          </button>
  </div>
  <div>
  </div>
</div>

        </div>
  );
};

export default Product;