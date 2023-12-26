import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Brands from './Brands'
import Herosection from './Herosection.jsx'
import  Products  from './Prod.jsx';
import About from './About.jsx'
import Cart from './Cart.jsx'
import Checkout from './checkout.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
    const [menu,setMenu] = useState(false);
    function DropdownMenu(){
        setMenu(!menu);
    }

  return (
          
          
          <div>
  
    <BrowserRouter>
    <Navbar menu={DropdownMenu} />
    {menu && <Brands />}
    <Routes>
          <Route path='/' element={<Herosection />} />
          <Route path='/about' element={<About />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App
