import Footer from './Footer.jsx'
import 'react-toastify/dist/ReactToastify.css';
import {products} from'../firebase.json'
import { GrFormNextLink } from "react-icons/gr";
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


function Products(){
    const[hover,setHover] = useState(false);
    const handleHover = (id)=>{
        setHover(id);
    }
    return(
         <div>
    <div className="heading">
    <div style={{marginLeft:"43.5rem",}}><h3>Ne<span>w Arriva</span>ls</h3></div>
    <Link to='/products'  className="viewall-product"><div className='viewall'><p>ViewAll</p><div style={{borderRadius:"50px",border:"1px solid #000",height:"20px",width:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}><GrFormNextLink/></div></div></Link>
    </div>
    <div className="container">
    {
    products.slice(products.length-6).map(productsdata=>{
        return(
    <div key={productsdata.id} className="productlist">
    <NavLink to={`/products/${productsdata.id}`}><div onMouseEnter={()=>{handleHover(productsdata.id)}} onMouseLeave={()=>handleHover(null)}><img className="product-img" src={hover ===productsdata.id ? productsdata.hoverimg:productsdata.img}/></div></NavLink>
    <div className="productdetails">
    <p className="productcompany">{productsdata.brand}</p>
            <h3 className="productname">{productsdata.title}</h3> 
            <h3 className='productprice'>₹ {productsdata.price}</h3>

            </div>   
  </div>
  
        )
        })
    }
    </div>
    <Footer />

    </div>
    );
}

export default Products;
