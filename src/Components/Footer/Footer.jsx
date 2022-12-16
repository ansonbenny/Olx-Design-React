import React from 'react'
import './Footer.css'

function Footer(props) {
  var date = new Date()
  var year = date.getFullYear()

  return (
    <div>
      <div className={props.homeFooter ? 'footerHome' : 'footer'}>
        <div className='footerGrid'>
          <div className='footerItems'>
            <h6>POPULAR LOCATIONS</h6>
            <ul>
              <li><a href="ggs">Kolkata</a></li>
              <li><a href="ggs">Mumbai</a></li>
              <li><a href="ggs">Chennai</a></li>
              <li><a href="ggs">Pune</a></li>
            </ul>
          </div>

          <div className='footerItems'>
            <h6>TRENDING LOCATIONS</h6>
            <ul>
              <li><a href="ggs">Bhubaneshwar</a></li>
              <li><a href="ggs">Hyderabad</a></li>
              <li><a href="ggs">Chandigarh</a></li>
              <li><a href="ggs">Nashik</a></li>
            </ul>
          </div>

          <div className='footerItems'>
            <h6>ABOUT US</h6>
            <ul>
              <li><a href="ggs">About OLX Group</a></li>
              <li><a href="ggs">Careers</a></li>
              <li><a href="ggs">Contact Us</a></li>
              <li><a href="ggs">OLXPeople</a></li>
              <li><a href="ggs">Waah Jobs</a></li>
            </ul>
          </div>

          <div className='footerItems'>
            <h6>OLX</h6>
            <ul>
              <li><a href="ggs">Help</a></li>
              <li><a href="ggs">Sitemap</a></li>
              <li><a href="ggs">Legal & Privacy information</a></li>
              <li><a href="ggs">Blog</a></li>
              <li><a href="ggs">OLX Autos Sell Car</a></li>
            </ul>
          </div>

          <div className='footerItems'>
            <h6>FOLLOW US</h6>
            <div>
            <ul className='footerSlink'>
              <li><button href="ggs"><i className="fa-brands fa-facebook-f fa-xs"></i></button></li>
              <li><button href="ggs"><i className="fa-brands fa-instagram fa-xs"></i></button></li>
              <li><button href="ggs"><i className="fa-brands fa-twitter fa-xs"></i></button></li>
              <li><button href="ggs"><i className="fa-solid fa-play fa-xs"></i></button></li>
            </ul>
            </div>
            <div className='footerAppPlayIm'>
              <div className='footerAppPlayImFlex'>
              <div><img src="/Images/playstore.webp" alt="" /></div>
              <div><img src="/Images/appstore.webp" alt="" /></div>
              </div>
            </div>
          </div>
        </div>

        <div className='footerRightsArea'>
          <div className='footerRtsAreaLeft'>
            <p><span className='bold'>Other Countries &nbsp;&nbsp;</span>Pakistan - South Africa - Indonesia</p>
          </div>
          <div className='footerRtsAreaRight'>
            <p>All rights reserved © 2006-{year} OLX</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
