import  './App.css'
import Herosection from './Herosection.jsx';
import { BsCart } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import  Products  from './Prod.jsx'
import { FaAngleDown } from "react-icons/fa6";
import {useSelector} from 'react-redux'

function Navbar({menu}){
    const {cartItems}= useSelector((state)=>state.cart);
    return(
    <div>
        <div style={{position:'sticky'}}>
    <nav>
    <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li  onClick={menu}><a href='#' >Brands <FaAngleDown className="brandsdropdown" /></a></li>
    <li><NavLink to='/about'>About</NavLink></li>
    </ul>
    {cartItems.quantity}
    <NavLink to='/cart' className="cart-color"> {cartItems.length} <BsCart className='cart' /></NavLink>
    </nav>
    </div>
    </div>
    );
}

export default Navbar;
