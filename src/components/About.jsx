import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
function About(){
    return(
         <div>
         <Navbar />
 <div className='aboutus-container'>
    <div style={{width:'auto',height:'650px'}}>
         <img className='aboutus-img' src='about.webp'/>
         </div>
         <div style={{backgroundColor:"#f5f5f5"}} className='aboutus-design'>
            <div className="aboutflex">
                <div>
                <h2 style={{color:"#D75742"}}>RESPONSIVE CUSHION</h2>
                <p style={{fontSize:"30px"}}>Heel and forefoot brand Zoom Air units<br/>  makes for a soft,responsive and springy<br/> ride</p></div>
                <div style={{display:"flex",alignItems:'center'}}><div className='image-bg1'></div><img className="sdimg1" src="shoe.png" alt="" /></div></div>
            <div className="third">
                <div style={{display:"flex",alignItems:'center',marginRight:'150px'}}><img className="sdimg" src="ad.png" /><div className='image-bg'></div></div>
                <div className=''><h2 style={{color:"#D75742"}}>SMOOTH FOOTSTRIKE</h2><p style={{fontSize:"30px"}}> The Heel is designed to support your<br/> natural range of motion and the  outsole <br/>works to absorb impact cushion on<br/> for a soft and smooth transition</p></div>
            </div>
            <div className="second">
                <div><h2 style={{color:"#D75742"}}>SECURE COMFORT</h2><p style={{fontSize:"30px"}}>A consistent fit with engineered mesh<br/> allows for breathability, while<br/> ultralight, super strong flywire<br/> cables provide incredible support</p></div>
                <div style={{display:"flex",alignItems:'center',marginTop:"-50px",marginLeft:"100px"}}><div className='image-bg2'></div><img className="sdimg2" src="second.png" alt="" /></div>
                </div>
            </div>
         <div className='align-footer-dtls'>
         <p style={{marginLeft:"40px"}}><span className="quote">"</span>In line with our approach to always be A Little Better, Never Perfect, we remain committed to making small-yet-consistent changes that accelerate our goal of being a better business<span className="quote">"</span></p>
         </div>
         </div>
    <Footer />
    </div>
);
}

export default About;
