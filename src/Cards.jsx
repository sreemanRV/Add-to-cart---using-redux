import React from 'react'
import './App.css'

function Cards({item}){
    const {id,title,own,src,price} = item;
return(
        <div>
        <div className="productlist">
    <img className="product-img" src={src}/>
    <div className="productdetails">
            <h3 className="productname">{title}</h3> 
            <p className="productcompany">{own}</p>
            <div className="we">
            <p>₹{price}</p>
            <button className="addtocart-btn">Add to Cart</button>
            </div>
            </div>
  </div>
  </div>
            );
}

export default Cards;

