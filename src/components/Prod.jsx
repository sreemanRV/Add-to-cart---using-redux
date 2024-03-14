import Footer from './Footer.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { GrFormNextLink } from "react-icons/gr";
import { Link, NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';


function Products(){
    const[hover,setHover] = useState(false);
    const [product,setProduct] = useState([]);
    const handleHover = (id)=>{
        setHover(id);
    }
    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch('http://your-api-url/products');
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProduct(data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchProducts();
      }, []);
    return(
         <div>
    <div className="heading">
    <div style={{marginLeft:"43.5rem",}}><h3>Ne<span>w Arriva</span>ls</h3></div>
    <Link to='/products'  className="viewall-product"><div className='viewall'><p>ViewAll</p><div style={{borderRadius:"50px",border:"1px solid #000",height:"20px",width:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}><GrFormNextLink/></div></div></Link>
    </div>
    <div className="container">
    {
    product.slice(product.length-6).map(productsdata=>{
        return(
    <div key={productsdata.id} className="productlist">
    <NavLink to={`/products/${productsdata.id}`}><div onMouseEnter={()=>{handleHover(productsdata.id)}} onMouseLeave={()=>handleHover(null)}><img className="product-img" src={hover ===productsdata.id ? productsdata.hoverimg:productsdata.img}/></div></NavLink>
    <div className="productdetails">
    <p className="productcompany">{productsdata.Brand}</p>
            <h3 className="productname">{productsdata.Name}</h3> 
            <h3 className='productprice'>₹ {productsdata.Price}</h3>
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
