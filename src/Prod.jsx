import './App.css'
import {Productlist} from './Productdata.jsx';
import Footer from './Footer.jsx'
import './App.jsx'
import {addCart} from './cartSlice.jsx'
import {useDispatch} from 'react-redux'
import { auth } from './firebase-config';

function Products(){
    const dispatch = useDispatch();
    const handleAddcart = async(productsdata)=>{
        dispatch(addCart(productsdata));

        await fetch('./productdata.jsx'), {
            auth,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Productlist
            })
    };
}
    return(
         <div>
    <div>
    <h3 className="heading">New Arriva<span>ls</span></h3>
    </div>
    <div className="container">
    {
    Productlist.map(productsdata=>(
    <div key={productsdata.id} className="productlist">
    <img className="product-img" src={productsdata.src}/>
    <div className="productdetails">
            <h3 className="productname">{productsdata.title}</h3> 
            <p className="productcompany">{productsdata.own}</p>
            <div className="we">
            <p>₹{productsdata.price}</p>
            <button className="addtocart-btn" onClick={()=>{handleAddcart(productsdata);}} >Add to Cart</button>
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
