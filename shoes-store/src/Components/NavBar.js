import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Navbar()
{
    return(
    <div>
        <div className='Nav'>
        <Link to='/' >Home</Link>
        <Link to='/contact'>about</Link>
        <Link to='/product'>product</Link>
        </div>
    </div>
    );
}

export default Navbar;