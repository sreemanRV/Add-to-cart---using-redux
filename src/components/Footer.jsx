function Footer(){
    return(
        <div>
        <div className="footer-row">
        <div className="footer-col">
        <img style={{width:"50px"}} src='b1.png' alt='logo' />
        <p>Seek And Find In Every Action A Way To Do<br/> Things Better Growth Keep progressing by<br/> adjusting to an ever-changing world Every<br/> Action A Way To Do stuffs and To Do Things<br /> Better</p>
        </div>
        <div className="footer-col">
           <h4 style={{fontWeight:650}}>INFO</h4>
           <p className="footer-text">Contact Us</p>
           <p className="footer-text">Releases</p>
           <p className="footer-text"> Stores</p>
           <p className="footer-text">Brands</p>
           <p className="footer-text">Blogs</p>
           </div>
           <div className="footer-col">
           <h4 style={{fontWeight:650}}>HELP</h4>
           <p className="footer-text">Track Your Order</p>
           <p className="footer-text">Warranty & Support</p>
           <p className="footer-text">Return Policy</p>
           <p className="footer-text">Service Centers</p>
           <p className="footer-text">Bulk Orders</p>
           <p className="footer-text"> FAQs</p>
          <p className="footer-text"> Why Buy Direct
          </p>
           </div>
           <div className="footer-col">
           <p style={{fontWeight:650}}>POLICIES</p>
           <p className="footer-text">About Us</p>
           <p className="footer-text">Help Center</p>
           <p className="footer-text">Privacy Policies</p>
           <p className="footer-text">Terms & Conditions </p>
           <p className="footer-text">Orders and Shipping</p>
           <p className="footer-text">Investor Relations</p>
          </div>
          <div className="subscribe">
          <h4>Subscribe to Our Newsletter</h4>
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
