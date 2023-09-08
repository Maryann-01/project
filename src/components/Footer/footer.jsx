import React from 'react'
import logo from "../../images/logo.png"
import "../Footer/footer.css"
import twitter from "../../images/1.png"
import fbk from "../../images/fb-simple 2.png"
import Ig from "../../images/instagram 1.png"
import phone from "../../images/call.png"
import mail from "../../images/Email.png"
import location from "../../images/location.png"
import specsLogo from "../../images/systemspecsLogo.png"
const footer = () => {
  return (
    <div className="footer">
      <main>
        <div className="firstPart">
          <img src={logo} alt="fundACause Logo" />
          <div className="socials">
            <img src={twitter} alt="twitter"/>
            <img src={fbk} alt="facebook"/>
            <img src={Ig} alt="instagram"/>
          </div>
        </div>
        <div  className="secondPart">
           <div className="socials">
             <img src={phone}/><span>310-437-2766</span>
           </div>
           <div className="socials">
             <img src={mail}/><span>unreal@outlook.com</span>
           </div>
           <div className="socials location">
            <img src={location} /><span>706 Campfire Ave. Meriden, CT 06450</span>
           </div>
        </div>
        <div className="thirdPart">
          <p>About Us</p>
          <p>Our Projects</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
      </main>
      <hr/>
      <div className="copyright">
        <p>Copyright © 2023 FundACause. All rights reserved. This platform was designed & developed by    </p>
        <img src={specsLogo} alt="SystemSpecs Logo"/>
      </div>
    </div>
  )
}

export default footer