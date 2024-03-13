import Navbar from './Navbar'
import { useState } from 'react';
import { products } from '../firebase.json';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function ProductsPage(){
       const[hover,setHover] = useState(false);
       const[searchTerm,setSearchTerm]=useState("");
       const handleHover = (id)=>{
              setHover(id);
          }
    return(
     <div>
       <Navbar />
       <div className='searching' style={{textAlign:"center",marginTop:"40px",marginBottom:"40px"}}><h3 style={{fontSize:"25px",fontWeight:"2000px"}}>Ou<span>r Produc</span>ts</h3></div>
       <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} className='searchproduct' type="text" placeholder='Search for product'  /> <IoIosSearch className='searchicon' />
       <div className="container">
       {products.filter((product)=>{
                     if(product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                     return product;
              }
              }).map((product)=>{
       return(
              <>
                  <div key={product.id} className="productlist">
   <NavLink to={`/products/${product.id}`}><div onMouseEnter={()=>handleHover(product.id)} onMouseLeave={()=>handleHover(null)}><img className="product-img" src={ hover === product.id ? product.hoverimg : product.img}/></div></NavLink>
    <div className="productdetails">
    <p className="productcompany">{product.brand}</p>
            <h3 className="productname">{product.title}</h3> 
            <h3 className='productprice'>₹ {product.price}</h3>
            </div>   
  </div>
              </>
       )
       })}
       </div>
     </div>
            );
}

export default ProductsPage;