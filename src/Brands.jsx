import  './App.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Brands(){
    return(
            <React.Fragment>
    <div className="brands">
        <div className="brand-list">
        <NavLink to='/adidas'><a href='#'>Adidas</a></NavLink>
        <NavLink to='/asics'><a  href='#'>Asics</a></NavLink>
        <a href='#'>Clarks</a>
        <a href='#'>Crocs</a>
        <a href='#'>Fila</a>
        <a href='#'>Jordan</a>
        <a href='#'>Puma</a>
        <a href='#'>Nike</a>
        <a href='#'>Neur</a>
        <a href='#'>Toms</a>
        <a href='#'>Yans</a>
        <a href='#'>Y-3</a>
        </div>
  </div>
  </React.Fragment>
  );
}

export default Brands;