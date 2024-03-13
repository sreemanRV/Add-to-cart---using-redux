import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Brands(){
    return(
    <div>
      <Navbar/>
        <div className='brand-container'>
                    <Link to='/adidas' className='brand-name'><div>
                    <div>
                    <img className='brand-img' src="b1.png"/>
                    </div>
                    <p style={{textAlign:"center"}}>Adidas</p>
                    </div></Link>
                    <Link to='/asics' className='brand-name'><div>
                    <div>
                    <img className='brand-img' src="b2.png"/>
                    </div>
                    <p style={{textAlign:"center"}}>Asics</p>
                    </div></Link>
                    <Link to='/crocs' className='brand-name'><div>
                    <div>
                    <img className='brand-img' src="b3.png"/>
                    </div>
                    <p style={{textAlign:"center"}}>Nike</p>
                    </div></Link>
                    <Link to='/jordan' className='brand-name'><div>
                    <div>
                    <img className='brand-img' src="b4.png"/>
                    </div>
                    <p style={{textAlign:"center"}}>Puma</p>
                    </div></Link>
</div>
</div>
    );
}

export default Brands;