import React from 'react'
import "./Product.css"
import { useStateValue } from './State'


function Product({id,title,img,price,rating}) {
    const[{cart},dispatch] = useStateValue();
    const addToCart = () => {
     dispatch({
         type:"ADD_TO_CART",
        item:{
            id:id,
            title:title,
            img:img,
            price:price,
            rating:rating,
     }    });
    };
  return (
    <div className='product'>
        <div className='product_info'>
        <p>{title}</p>
        <p className='price'>
            <small>Rs.</small>
            <strong>{price}</strong>
        </p>
        <div className='rating'>
            <p>{rating}</p>
        </div>
        </div>
        
        <img src={img} alt="img"/>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product