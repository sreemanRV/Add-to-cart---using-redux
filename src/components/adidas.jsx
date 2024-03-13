import {products} from '../firebase.json';
import Navbar from './Navbar.jsx'
import {addCart} from '../slices/cartSlice.jsx'
import {useDispatch} from 'react-redux'

function Asics(){
    const dispatch = useDispatch();
    const items = products.filter(item=>item.brand==="Adidas");
     const handleAddcart = (productsdata)=>{
        dispatch(addCart(productsdata));
    };
    return(
            <div>
    <Navbar />
    <h3 style={{textAlign:"center"}}>Adidas</h3>
    <div className="container">
            {
                items.map(item=>(
                
                <div key={item.id}>
            <div className="productlist">
            <img className="product-img" src={item.img}/>
            <div className="productdetails">
            <h3 className="productname">{item.title}</h3> 
            <p className="productcompany">{item.brand}</p>
            <h3 className='productprice'>₹{item.price}</h3>

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