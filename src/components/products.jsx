// ProductDetails.js
import Navbar from './Navbar.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../firebase.json';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import {addCart} from '../slices/cartSlice.jsx'
import {ToastContainer,toast} from 'react-toastify';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { TbRulerMeasure } from "react-icons/tb";


const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState();
  const [details,setDetails]= useState(false);
  const [active,setActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const[size,showSize] = useState(false);

  const showChart = ()=>{
    showSize(true);
  }
  const hideChart = ()=>{
    showSize(false);
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

    const rowData = [
      { UK:7, Euro:41.5, US:8},
      { UK:8, Euro: 42.5, US: 9 },
      { UK: 9, Euro: 44, US: 10 },
      { UK: 10, Euro: 45, US: 11 },
      { UK: 11, Euro: 46.5, US: 12 },
    ]
    
    // Column Definitions: Defines the columns to be displayed.
    const colDefs = [
      { field: "UK" },
      { field: "Euro" },
      { field: "US" },
    ];

  const shoeSizes = [7,8,9,10,11];

  const handleActive = ()=>{
    setActive(!active);
  }
  const Notify = ()=>{
    toast(`${data.title} added to the cart`);
}
  const showDetails = ()=>{
    setDetails(!details);
  }
  const handleAddcart = (item)=>{
    const vercel = {
      id:item.id,
      title: item.title,
      price: item.price,
      selectedSize:selectedSize,
      img:item.img,
    }
    console.log(dispatch(addCart(vercel)));
   }

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Assuming products is an array of product data
        const foundProduct = products.find(p => String(p.id) === String(id));
        setData(foundProduct);
        console.log(foundProduct.img)
      } 
      catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);
  if (!data) {
    return <div>...</div>;
  }
  return (
    <div>
        <Navbar />
                <div className='details-container'>
                    <div style={{marginTop:"25px"}}>
                    <img className='detail-img' onError={(e) => console.log("Error loading image:", e,"Image source:", e.target.src)} src={data.img}/>
                    </div>
                    <div className='product-detail-page'>
                        
                        <p>{data.brand}</p>
                        <h2 style={{fontWeight:750,marginTop:"-20px"}}>{data.title}</h2>
                        <p style={{marginTop:"-20px"}}>This reworked iteration is formed with a low-top silhouette that's<br/> complete with a court-inspired toe box and throwback colorways</p>
                        <p style={{fontSize:"24px",fontWeight:"700"}}>₹{data.price}</p> 
                        <div style={{marginTop:"-40px", display:'flex',justifyContent:"space-between",alignItems:"center"}}><p>Shoe Size (UK)</p> <div style={{display:'flex',alignItems:"center",gap:'10px'}}><TbRulerMeasure /> <p style={{cursor:"pointer"}} onClick={showChart}>Size Chart</p></div> </div>

      <div className='size-container'>
        {shoeSizes.map((size) => (
          <button className='size'
            key={size}
            onClick={() => handleSizeSelect(size)}
            style={{
              padding: '15px 40px',
              fontSize: '16px',
              backgroundColor: selectedSize === size ? 'black' : 'white',
              color: selectedSize === size ? 'white' : 'black',
              cursor: 'pointer',
            }}
          >
            {size}
          </button>
        ))}
      </div>
      {size &&(
            <div className="ag-theme-quartz table" // applying the grid theme
            style={{ height: 290, width: 610 }}>
                 <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><h4>Size guides</h4> <IoClose onClick={hideChart} style={{height:"25px",width:"25px"}} /></div>
                 <AgGridReact
                 rowData={rowData}
                 columnDefs={colDefs}
             />
               </div>
      )}
{data.details}
      {selectedSize && (
        <p>You selected size: {selectedSize}</p>
      )}
                        <div style={{marginBottom:"30px",height:"40px",display:"flex",alignItems:"center",gap:"29rem",borderBottom:"1px solid grey"}}><div><p>More details</p></div> {active ?<FaAngleUp style={{    transition: "transform 0.3s ease in out"}} onClick={()=>{handleActive(),showDetails()}} /> : <FaAngleDown onClick={()=>{handleActive(),showDetails()}} /> } </div>

                        {details && (<p>Manufacturer : HB Long Zhi Shoes industrial Co.LTD.<br/>
Country of Origin : China <br/> 
Imported By : Crocs india Pvt. Ltd. <br/>
Weight : 0.95 KG <br/>
Generic Name : SLIDE <br/>
Unit of Measurement : 1 Pair
</p>)}
<button className='details-atc-btn' onClick={()=>{Notify();handleAddcart(data);}} >Add to Cart</button>
                    </div>
                </div>
                <ToastContainer />
    </div>
  );
};

export default ProductDetails;
