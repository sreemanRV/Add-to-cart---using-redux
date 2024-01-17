import  './App.css'
import { BsCart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react'
import Brands from './Brands'
import {logoutUser} from './authenticationSlice.jsx'

function Navbar(){
    const {cartItems}= useSelector((state)=>state.cart);
        const [menu,setMenu] = useState(false);
        const dispatch = useDispatch();
    function DropdownMenu(){
        setMenu(!menu);
    }
    return(
    <div>
    <nav>
    <div className='left-align-content'>
    <img className='logo'  src='logo-en.jpg' alt='logo' />
    
    <ul>
    <li><NavLink to='/home'>Home</NavLink></li>
    <li><a>Brands <FaAngleDown onClick={DropdownMenu} className="brandsdropdown" /></a></li>
    <li><NavLink to='/about'>About</NavLink></li>
    </ul>
    </div>
    <div className="right-align-content">
    <div className="cart-count">
    <div className="count">{cartItems.length>0 && cartItems.length}</div>
    <NavLink to='/cart' className="cart-color"> <BsCart className='cart' /></NavLink>
    </div>
    <button className="logout-btn" onClick={()=>dispatch(logoutUser())}>logout</button>
    </div>
    </nav>
    {menu && <Brands />}
    </div>
    );
}

export default Navbar;
