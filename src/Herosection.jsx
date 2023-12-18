import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Brands from './Brands'
import  Products  from './Prod.jsx'
import './App.jsx'

function Herosection({addcart,cartinc}){
    return(
            <div>
            <section>
            <div>
            <h2>Shoes that sparkle you</h2>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className='cta-btn' onClick={cartinc}>Buy now</button>
            </div>
            <div>
            <img  className="hero-img" src="public/hero.png" alt=""/>
            </div>
            </section>
            <Products addcart={addcart} Cartinc={cartinc}/>
            
     </div>
            );
}

export default Herosection;