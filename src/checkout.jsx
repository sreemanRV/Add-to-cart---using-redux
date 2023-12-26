import './App.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {NavLink} from 'react-router-dom'
import {useEffect,useState} from 'react'

function Checkout(){
    const [component,showComponent] = useState(false);
    useEffect(()=>{
        setInterval(()=>showComponent(true),2000);
    });
    return(
            <div>
    {component && (<div className='checkout-page'>
            <div className='checkout'>
            <IoIosCheckmarkCircleOutline className='checkout-png' />
            <h2 style={{margin:"-15px"}}>Thankyou!</h2>
            <p style={{color:"#75E34F"}}>Your order has been placed</p>
            <button className='return-home'><NavLink to='/' style={{color:"#fff"}}>return to home</NavLink></button>
            </div>
            </div>)}
    
            </div>
            );
}

export default Checkout;