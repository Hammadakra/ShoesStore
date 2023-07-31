import React from "react"
import "./style.css"
import bg from "./modelTest.jpg"
import { FaBeer } from "react-icons/fa"
function Home() {
  return (
    <div>
      <div className='home'>
        <p>
          <b>SHOES DESIGN & CUSTOM SHOESSSS MODELING</b>
        </p>
      </div>
      <div className='downhome'>
        <h1>All the Shoes Design Services You’ll Ever Need</h1>
      </div>
      <div className='colOne'>
        <h3>Unique American Style.</h3>
        <p>Unique to you that will last a lifetime.</p>
      </div>
      <div className='colOne'>
        <h3>
          Custom design and <br></br>Summer collection.
        </h3>
        <p>Unique to you that will last a lifetime.</p>
      </div>
      {/* check git test with my  */}
      <div className='colOne'>
        <h3>Pitching Your Ideas</h3>
        <p>Unique to you that will last a lifetime.</p>
      </div>
      <div className='colTwo'>
        <h3>Online Shoes Selling</h3>
        <p>Unique to you that will last a lifetime.</p>
      </div>
      <div className='colTwoAfter'>
        <h3>
          Movie Shoes Design
          <br />
          with modern design
        </h3>
        <p>Unique to you that will last a lifetime.</p>
      </div>
      <div className='colTwoA'>
        <h3>Pitching Your Ideas</h3>
        <p>Unique to you that will last a lifetime.</p>
      </div>
      <div className='demo'></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='testi'>
        <hr className='up' />
        <h1>TESTIMONIAL</h1>
        <img src={bg}></img>
        <p>
          Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in
          <br /> der Industrie bereits der Standard Demo-Text "Sed ut perspiciatis unde omnis iste natus.
        </p>
        <hr className='down' />
      </div>
      <header></header>
      <h3>
        {" "}
        Lets go for a <FaBeer />?{" "}
      </h3>
      <footer class='footer-distributed'>
        <div class='footer-left'>
          <img src='img/logo.png' />
          <h3>
            About<span>My Srore</span>
          </h3>

          <p class='footer-links'>
            <a href='#'>Home</a>|<a href='#'>Blog</a>|<a href='#'>About</a>|<a href='#'>Contact</a>
          </p>

          <p class='footer-company-name'>© 2019 Ultra Service Pvt. Ltd.</p>
        </div>

        <div class='footer-center'>
          <div>
            <i class='fa fa-map-marker'></i>
            <p>
              <span>Ghulshan iqbal, Sector - 11</span>
              Karachi pakistan - 400710
            </p>
          </div>

          <div>
            <i class='fa fa-phone'></i>
            <p>+92 309-2637740</p>
          </div>
          <div>
            <i class='fa fa-envelope'></i>
            <p>
              <a href='mailto:support@eduonix.com'>UltraService.com</a>
            </p>
          </div>
        </div>
        <div class='footer-right'>
          <p class='footer-company-about'>
            <span>About the company</span>
            We offer training and skill building courses across Technology, Design, Management, Science and Humanities.
          </p>
          <div class='footer-icons'>
            <a href='#'>
              <i class='fa fa-facebook'></i>
            </a>
            <a href='#'>
              <i class='fa fa-twitter'></i>
            </a>
            <a href='#'>
              <i class='fa fa-instagram'></i>
            </a>
            <a href='#'>
              <i class='fa fa-linkedin'></i>
            </a>
            <a href='#'>
              <i class='fa fa-youtube'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
