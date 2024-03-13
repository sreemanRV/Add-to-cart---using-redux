import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {NavLink} from 'react-router-dom'
import {useEffect,useState} from 'react'

function Checkout(){
    const [component,showComponent] = useState(false);
    useEffect(()=>{
        setTimeout(()=>showComponent(true),1500);
    });
    return(
            <div>
    {component && (<div className='checkout-page'>
            <div className='checkout'>
            <IoIosCheckmarkCircleOutline className='checkout-png' />
            <h2 style={{margin:"-15px"}}>Thankyou!</h2>
            <p style={{color:"#fff",fontWeight:"700"}}>Your order has been placed</p>
            <NavLink to='/home' style={{color:"#fff"}}><button className='return-home'>return to home</button></NavLink>
            </div>
            </div>)}
            </div>
            );
}

export default Checkout;