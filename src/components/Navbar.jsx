import { BsCart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {logoutUser} from '../slices/authenticationslice.jsx'

function Navbar(){
    const {cartItems}= useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    return(
    <div>
    <nav>
    <div className='left-align-content'>
    <img className='logo'  src='b1.png' alt='logo' />
    </div>
    <ul>
    <li><NavLink to='/home'>Home</NavLink></li>
    <li><NavLink to='/products'>Products</NavLink></li>
    <li><NavLink to='/brands'>Brands</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    </ul>
    <div className="right-align-content">
    <div>
    <div className="count">{cartItems.length>0 && cartItems.length}</div>
    <NavLink to='/cart' className="cart-color"> <BsCart className='cart' /></NavLink>
    </div>
    <button className="logout-btn" onClick={()=>dispatch(logoutUser())}>logout</button>
    </div>
    </nav>
    </div>
    );
}

export default Navbar;
