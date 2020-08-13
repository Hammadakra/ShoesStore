import React from 'react';
import {Link} from 'react-router-dom';
import bgTile from './blackLogo.png'

function Navbar()
{
    return(
    <div>

         <div className="header">
        <div className='logoPic'>
        <Link to='/'><img id="logo" src={bgTile} /></Link>
        
        <div className="navLink">
        <Link to='/' ><h3>Home </h3></Link>
        <Link to='/product'><h3>Product </h3></Link>
        <Link to='/contact'><h3>Contact </h3></Link>
        <Link to='/contact'><h3>About </h3></Link>
        
        </div>
        
        <div class="container">
       <button className="signIn">SignIn</button>
        <button className="signIn">SignUp</button>
`   </div>

      <h2 class="ml6">
     <span class="text-wrapper">
    <span class="letters">Beautiful Things <br/>Of my store</span>
      </span>
</h2>

        <p>If attending an event such as a wedding or other banquet type <br/>party, high heeled shoes make a grand return.</p>
              <button className='shop'>Shop</button>
                </div></div>
      
        
    </div>
    );
}

export default Navbar;