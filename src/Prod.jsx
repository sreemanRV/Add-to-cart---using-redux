import './App.css'
import {Productlist} from './Productdata.jsx';
import Footer from './Footer.jsx'
import {useState} from 'react'
import './App.jsx'
import {addCart} from './cartSlice.jsx'
import {useDispatch} from 'react-redux'

function Products(){
    const dispatch = useDispatch();
    const items = Productlist;
    const handleAddcart = (productsdata)=>{
        dispatch(addCart(productsdata));
    };
    return(
         <div>
    <div>
    <h3 className="heading">New Arriva<span>ls</span></h3>
    </div>
    <div className="container">
    {
    Productlist.map(productsdata=>(
    <div className="productlist">
    <img className="product-img" src={productsdata.src}/>
    <div className="productdetails">
            <h3 className="productname">{productsdata.title}</h3> 
            <p className="productcompany">{productsdata.own}</p>
            <div className="we">
            <p>₹{productsdata.price}</p>
            <button className="addtocart-btn" onClick={()=>{handleAddcart(productsdata);Cartinc();}} >Add to Cart</button>
            </div>
            </div>   
  </div>
  ))
    }
    </div>
    <Footer />
    </div>
            );
}

export default Products;
