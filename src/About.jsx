import './App.css'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
function About(){
    return(
         <div>
         <Navbar />
 <div className='aboutus-container'>
 <h3 style={{marginLeft:"40px"}}>About <span>us</span></h3>
         <div className='aboutus'>
         <img className='aboutus-img' src='aboutus.webp'/>
         <p className="aboutus-info"><span className='aboutheading'>We</span> started our journey as a small shoe manufacturing unit in Karnal, manufacturing a humble 4 pairs a day. Today, manufacturing 50,000 pairs a day and being one of the leading manufacturers in the leather footwear industry in India, we have indeed come a long way shoe manufacturing. Be a part of the company Growth Keep progressing by adjusting to an ever-changing world that has ten brands that have been making for a much e­ffortless journey for its customers. We have set our eyes on opening 1,000 exclusive showrooms in India and abroad, and be closer to our 1000 Cr. vision Create an environment that empowers individuals and allows them to grow and flourish</p>
         </div>
            <div className="aboutflex"><div className="first"><h2 style={{color:"#D75742"}}>RESPONSIVE CUSHION</h2><p style={{fontSize:"36px"}}>Heel and forefoot brand Zoom Air<br/> units makes for a soft,responsive<br/> and springy ride</p></div><div><img className="sdimg" src="shoe.png" alt="" /></div></div>
            <div className="second"><h2 style={{color:"#D75742"}}>SECURE COMFORT</h2><p style={{fontSize:"36px"}}>A consistent fit with engineered<br/> mesh allows for breathability,<br/> while ultralight, super strong<br/> flywire cables provide incredible<br/> support</p></div>
            <div className="third"><div><img className="sdimg" src="ad.png" /></div><div className=''><h2 style={{color:"#D75742"}}>SMOOTH FOOTSTRIKE</h2><p style={{fontSize:"36px"}}> The Heel is designed to support<br/> your natural range of motion<br/> and the outsole works to absorb<br/> impact cushion on for a soft and<br/> smooth transition</p></div></div>
         <div style={{marginLeft:"40px"}}>
         <h3>Innovati<span>on</span></h3>


<p>Seek And Find In Every Action A Way To Do Things Better Growth Keep progressing by adjusting to an ever-changing world
Explore new markets where we do not have a presence A Way To Do Things Better Growth Keep progressing by adjusting to an ever-changing world Every Action A Way To Do stuffs A Way To Do Things Better</p>
         </div>
         <div>
         <p style={{marginLeft:"40px"}}><span className="quote">"</span>In line with our approach to always be A Little Better, Never Perfect, we remain committed to making small-yet-consistent changes that accelerate our goal of being a better business<span className="quote">"</span></p>
         </div>
         </div>
    <Footer />
    </div>
);
}

export default About;
