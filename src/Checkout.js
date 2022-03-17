import { Title } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./State";


function Checkout() {
  const [{cart}] = useStateValue();

  console.log(cart);
  return (
    <div className="checkout">
     <div className="checkoutleft">
      <img
        className="ad"
        src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
        alt="image"
      />
      {cart?.length === 0 ? (
        <div>
          <h2>Shopping Cart is Empty</h2>
          <p>
            You have no items in your cart. Click on " Add to Cart " next to the
            item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="title">Your shopping Cart</h2>
         
             {
                cart?.map((items=>(
                <Checkoutproduct id={items.id} title={items.title} img={items.img} price={items.price} rating={items.rating} />
                ))
                )}
            
            
               

        </div>
      )}
      </div>
    </div>
  );
}

export default Checkout;
