import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Herosection from './Herosection.jsx'
import About from './About.jsx'
import Cart from './Cart.jsx'
import Checkout from './checkout.jsx'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './login.jsx'
import ProtectedRoute from './protectedroute.jsx'
import Asics from './asics.jsx'
import Adidas from './adidas.jsx'
import SignUp from './signup.jsx'

function App() {
  return (
          <div>
  
    <Router>
    <Routes>
          <Route path='/' element={<SignUp />}/>
          <Route exact path='/home' element={<ProtectedRoute> <Herosection /> </ProtectedRoute>} />
          <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>}/>
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
          <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>}/>
          <Route path='/asics' element={<Asics />} />
          <Route path='/adidas' element={< Adidas/>} />
          <Route path='/login' element={<Login />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App
