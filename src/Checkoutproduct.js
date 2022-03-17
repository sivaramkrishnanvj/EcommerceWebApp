import React from 'react'
import "./Checkoutproduct.css"
import { useStateValue } from './State'

function Checkoutproduct({id,title,img,price,rating}) {
    const [{},dispatch]=useStateValue();    
    const removeFromCart=()=>{
     dispatch({
      type:"REMOVE_FROM_CART",
      id:id,
     });
    }
  return (
    <div className='checkout_product'>
    <img className='product_img' src={img} alt=""></img>
    <div className='product_info'>
        <p className='product_title'>{title}</p>
        <p className='product_price'>
            <small>Rs.</small>
            <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                <p>{rating}</p>
            </div>
            <button onClick={removeFromCart}>Delete item</button>
    </div>
    </div>
  )
}

export default Checkoutproduct