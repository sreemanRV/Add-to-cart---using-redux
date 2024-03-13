import React from 'react'
import './App.css'
import Herosection from './components/Herosection.jsx'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/checkout.jsx'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './components/login.jsx'
import ProtectedRoute from './components/protectedroute.jsx'
import Asics from './components/asics.jsx'
import Adidas from './components/adidas.jsx'
import SignUp from './components/signup.jsx'
import Brands from './components/Brands.jsx'
import ProductsPage from './components/Product.jsx'
import ProductDetails from './components/products.jsx'


function App() {
  return (
          <div>
  
    <Router>
    <Routes>
          <Route path='/' element={<SignUp />}/>
          <Route exact path='/home' element={ <Herosection />} />
          <Route path='/about' element={<About />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/brands' element={<Brands />}/>
          <Route path='/asics' element={<Asics />} />
          <Route path='/adidas' element={< Adidas/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Products' element={<ProtectedRoute><ProductsPage /></ProtectedRoute>}/>
          <Route path='/products/:id' element={<ProductDetails />} />
          
    </Routes>
    </Router>
    </div>
  );
}

export default App
