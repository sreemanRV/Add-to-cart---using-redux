import {Productlist} from './Productdata.jsx';
import Navbar from './Navbar.jsx'
import {addCart} from './cartSlice.jsx'
import {useDispatch} from 'react-redux'

function Asics(){
    const dispatch = useDispatch();
    const items = Productlist.filter(item=>item.own==="Asics");
     const handleAddcart = (productsdata)=>{
        dispatch(addCart(productsdata));
    };
    return(
            <div>
    <Navbar />
    <h3 style={{textAlign:"center"}}>Asics</h3>
    <div className="container">
            {
                items.map(item=>(
                
                <div key={item.id}>
            <div className="productlist">
            <img className="product-img" src={item.src}/>
            <div className="productdetails">
            <h3 className="productname">{item.title}</h3> 
            <p className="productcompany">{item.own}</p>
            <div className="we">
            <p>₹{item.price}</p>
            <button className="addtocart-btn" onClick={()=>{handleAddcart(item);}} >Add to Cart</button>
            </div>
            </div>   
        </div>
                </div>
               
       
                )
        )
            }
             </div>
            </div>

            );
}

export default Asics;