import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Brands from './Brands'
import  Products  from './Prod.jsx'
import './App.jsx'
import Slider from './carouseldata.jsx'
function Herosection(){
    return(
            <div>
            <Navbar />
            <section>
            <Slider />
            </section>
            <Products/>
            
     </div>
            );
}

export default Herosection;