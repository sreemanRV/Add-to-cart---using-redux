import  './App.css'
import {useState} from 'react'

function Footer(){
    return(
        <div>
        <div className="footer-row">
        <div className="footer-col">
           <h5>Info</h5>
           <p className="footer-text">Contact Us<br/><br/>
          Releases<br/><br/>
           Stores<br/><br/>
           Brands<br/><br/>
           Blogs
          </p>
           </div>
           <div className="footer-col">
           <h5>Help</h5>
           <p className="footer-text">Track Your Order<br/><br/>
           Warranty & Support <br/><br/>
           Return Policy<br/><br/>
           Service Centers<br/><br/>
           Bulk Orders<br/><br/>
           FAQs<br/><br/>
           Why Buy Direct
          </p>
           </div>
           <div className="footer-col">
           <h5>Policies</h5>
           <p className="footer-text">About boAt<br/><br/>
           Help Center<br/><br/>
           Privacy Policies<br/><br/>
           Terms & Conditions <br/><br/>
           Orders and Shipping<br/><br/>
           Investor Relations<br/><br/>
          </p> 
          </div>
          <div className="subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="subscribe-input">
          <input type="email" className="mail-id" placeholder="Enter your mail-id"/>
          <button className="subscribe-btn"  >Subscribe</button>
          </div>
          </div>
     </div>
     </div>
    );
}

export default Footer;
