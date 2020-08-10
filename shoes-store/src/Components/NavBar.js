import React from 'react';
import {Link} from 'react-router-dom';
import bgTile from './blackLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar()
{
    return(
    <div>
         <div className="header">
       
       
        <div className=' navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'><img id="logo" src={bgTile} /></Link>
        <Link to='/' >Home</Link>
        <Link to='/contact'>about</Link>
        <Link to='/product'>product</Link>
        </div></div>
    </div>
    );
}

export default Navbar;