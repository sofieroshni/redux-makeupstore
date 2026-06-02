import React from "react";
import { useSelector } from "react-redux";
import { totalItem, totalPrice } from "../Features/CartSlice";
import { Link } from "react-router-dom";

const Checkout = () => {
//   const boughtItems = useSelector((state) => state.cart.boughtItems);
const boughtItems = useSelector(
 (state) => state.cart.boughtItems || [] 
);
  const userMoney = useSelector((state) => state.cart.userMoney);

  console.log("Bought items:", boughtItems);

  return (
     
    <div className=" container mt-5 mb-5 w-75">
      {boughtItems.length === 0 ? (
        <>
        <div className="mt-5 container"> <h1>Du har ikke købt noget endnu!</h1>
          <Link to="/"><button className="btn btn-primary">Gå til shoppen</button></Link></div>
         
        </>
      ) : (
        <>
          <h1>Tak for dit køb!</h1>
          <h2>Du har købt følgende produkter:</h2>
          <div className="container mt-5 mb-5 w-75">
            <h1>Tak for dit køb!</h1>
            <h2>Du har købt følgende produkter</h2>
            <ul className="list-group">                    
                {boughtItems.map((boughtItem)=>(
               <li   key={boughtItem.id} className="list-group-item d-flex  justify-content-between align-items-center text-bg-dark p-3">
                <p>{boughtItem.title} {boughtItem.price * boughtItem.quantity} Kr</p>
               <div className="d-flex align-items-center gap-2">
                <p className="mb-0">
                    Antal: 
                </p>
                <span className="badge text-bg-primary rounded-pill">{boughtItem.quantity}</span>
               </div>
                </li> 
                
            )
                )
                }

            </ul>
          </div>
          {/* <ul className="list-group">
            {boughtItems.map((boughtItem) => (
              <li key={boughtItem.id} className="list-group-item d-flex justify-content-between align-items-center text-dark p-3">
                <div>
                  <h5>{boughtItem.title}</h5>
                  <p>Pris: ${boughtItem.price}</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0">Antal:</p>
                  <span className="badge text-bg-primary rounded-pill">
                    {boughtItem.quantity}
                  </span>
                </div>
              </li>
            ))}
          </ul> */}

          <h3 className="mt-4">Samlet antal: {totalItem(boughtItems)} stk</h3>
          <h3>Samlet pris: {totalPrice(boughtItems)} kr</h3>
{userMoney - totalPrice(boughtItems) < 0 ? (
  <p className="bg-warning">
    Du er i minus {userMoney - totalPrice(boughtItems)} kr
  </p>
) : (
  <h3>
    Dine penge tilbage: {userMoney - totalPrice(boughtItems)} kr
  </h3>
)}          <Link to="/"><button className="btn  mt-3" style={{backgroundColor:"#764ABC", color:"white"}} >Tilbage til shop</button></Link>
        </>
      )}
    </div>
  );
};

export default Checkout;