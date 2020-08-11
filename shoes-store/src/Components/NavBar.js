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
        <Link to='/contact'><h3>About </h3></Link>
        
        </div>
        
        <div class="container">
  <button className="signIn">SignIn</button>
  <button className="signUp">SignUp</button>
`   </div>
<div class="wrapper"><h1>ENJOY THE JOURNEY OF LIFE<br/>BEST SHOES IN STORE </h1></div>
        <p>If attending an event such as a wedding or other banquet type party, the <br/>high heeled shoes make a grand return.</p>
              <button></button>
                </div></div>
        <br/><br/><br/><br/> <br/><br/>      <br/><br/>
        <h2>FOOTER</h2>
    </div>
    );
}

export default Navbar;