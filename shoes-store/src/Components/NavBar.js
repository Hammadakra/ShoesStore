import React from 'react';
import {Link} from 'react-router-dom';
import bgTile from './blackLogo.png'

function Navbar()
{
    return(
    <div>
         <div className="header">
       
       
        <div className='logoPic'
        >
        <Link to='/'><img id="logo" src={bgTile} /></Link>
        
        <div className="navLink">
        <Link to='/' ><h3>Home </h3></Link>
        <Link to='/product'><h3>Product </h3></Link>
        <Link to='/contact'><h3>Contact </h3></Link>
        </div>
        
        <div class="container">
  <input type="text" placeholder="Search..."/>
  <div class="search"></div>
`   </div>
        
        </div></div>
        <br/><br/><br/><br/> <br/><br/>      <br/><br/>
        <h2>FOOTER</h2>
    </div>
    );
}

export default Navbar;