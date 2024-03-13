import React from 'react';
import Navbar from './Navbar.jsx'
import { NavLink } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import {useSelector,useDispatch} from 'react-redux'
import { deleteCart,incrementItem ,decrementItem,clearCart} from '../slices/cartSlice';

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
            {cartItems.length>=1 && (<p style={{textAlign:'center'}}>Cart items</p>)}
            <div className='empty-cart'>
                {cartItems.length===0 &&(
                    <div className='cart-empty'>            
                    <div className='sad'>
                    <img style={{height:"300px",width:"300px"}} src='emptycart.png' alt='empty' />
                    <h2>Your Cart is Empty!</h2>
                    </div>                 
            </div>)}
            <div className='cart-container'>
                
         {cartItems.map((items)=>{
            const qtyPrice = items.price*items.quantity;
            return(
            <div key={items.id}>
            <div className='cartlist'>
            <div className='cartitem'>
            <img className='cart-img' src={items.img} />
            <div style={{width:"90px"}}><p style={{fontWeight:700, fontSize:'14px'}}>{items.title}</p></div>
            <p >{items.own}</p>
            <p >₹ {items.price}</p>
            <p>Shoe Size: {items.selectedSize}</p>
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
            )})}
            </div>
            {cartItems.length >=1 && (
                <>
            <div className='purchase-checkout'>
            <h4 style={{textAlign:"center"}}>
            Order Details
            </h4>
            <div className='purchase-content'>
            <p>Price ({cartItems.length} items)</p>
            <p>₹ {total}</p>
            </div>
            <div className='purchase-content'>
            <p>Delivery charges</p>
            <p style={{color:"green"}}><span style={{textDecoration:"line-through",color:"#000"}}>₹60</span> FREE</p>
            </div>
            <div style={{display:"flex",justifyContent:'space-between'}}>
            <div className="cart-total">
            Total:<span style={{textDecoration:'none'}}> ₹ {total}</span>
            </div>
            <div className="">
            <NavLink to='/checkout' style={{color:'#fff'}}><button onClick={()=>{dispatch(clearCart())}} className="cart-buy">Place Order</button></NavLink>
            </div>
            </div>
            </div> 
            </>
            )       
            }
     </div>
     </div>
     );
}

export default Cart;