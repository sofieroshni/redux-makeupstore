import React from "react";
import { useSelector } from "react-redux";
import Product from "../Components/Product";

export const Products = () => {

  const products = useSelector(
    (state) => state.products.products
  );

  return (
    <div className='container justify-content-center align-items-center mt-5' style={{marginBottom:"300px", zIndex:"1000"}}>
<div  className='row row-cols-1 row-cols-md-4 g-4'>
          {
                products.map(p =>(
                    <Product  key={p.id} product={p} />
                ))
            }</div>
    </div>
  );
};

export default Products;