import './App.css';
import React from 'react';
import Navbar from './Navbar.jsx'
import { NavLink } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import {useSelector,useDispatch} from 'react-redux'
import { deleteCart,incrementItem ,decrementItem} from './cartSlice';

function Cart(){
    const dispatch = useDispatch();
     const { cartItems } = useSelector((state) => state.cart);
    const total = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
    const handleIncrement = (itemid)=>{
        dispatch(incrementItem(itemid));
    };
    const handleDecrement = (itemid)=>{
        dispatch(decrementItem(itemid));
    };
    
    return(
            <div>
            <Navbar />
            <div className='empty-cart'>
            <p style={{textAlign:'center'}}>Cart items</p>
         {cartItems.map((items)=>{
             const qtyPrice = items.price*items.quantity;
             return(
                    <div key={items.id}>
            <div className='cartlist'>
            <div className='cartitem'>
            <img className='cart-img' src={items.src} />
            <div style={{marginRight:'650px',width:'150px'}}>
            <p style={{fontWeight:700, fontSize:'25px'}}>{items.title}</p>
            <p style={{marginTop:'-20px'}}>{items.own}</p>
            <p style={{marginTop:'-10px'}}>₹ {items.price}</p>
            </div>
            
            <div className="quantity">
            <button className="qty-btn"  onClick={()=>handleDecrement(items.id)}>-</button>
            <div>{items.quantity}</div>
            <button className="qty-btn" onClick={()=>handleIncrement(items.id)}>+</button>
            </div>
            ₹{qtyPrice}
            <div>
            <RiDeleteBin6Line onClick={()=>{dispatch(deleteCart(items.id));}} className="remove-cart" />
            </div>
            </div>
            </div>
            <hr  /> 
         </div>
         
                    )})
            }
            
            {cartItems.length >=1 && (<div className="buydiv">
            <div className="cart-total">
            Total:<span style={{textDecoration:'none'}}> ₹ {total}</span>
            </div>
            
            <div className="">
            <NavLink to='/checkout' style={{color:'#fff'}}><button className="cart-buy">Place Order</button></NavLink>
            </div>   
            </div>
                          )
                  
            }
            
            </div> 
     </div>
     );
}

export default Cart;
