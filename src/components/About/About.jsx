import {React,useState,useEffect} from 'react'
import "../About/About.css"
import Content from "../Content/Content"
import aboutImg from "../../images/aboutImage.png"
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs"
import arrowRight from "../../images/arrow-right.png"
import liveChat from "../../images/Live chat.png"
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
const scrollThreshhold=window.innerHeight/3
  const handleScroll = () => {
    if (window.pageYOffset >scrollThreshhold) {
      setIsVisible(true);

      
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="about">
      <img src={aboutImg} alt="aboutImage" className="aboutImg"/>
      <aside>
        <div className='aboutDiv'>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod magna fermentum nisl nec a volutpat a. Congue nisl mi porttitor nunc faucibus.</p>
        </div>
        <Content />
        <button className="about-btn btn"><Link to="/aboutUs" className="about-link">Read More</Link><img src={arrowRight}/></button>
      </aside>
      <div onClick={scrollToTop} style={{display:isVisible?"block":"none"}}>
       <img src={liveChat} alt="live chat icon" className="liveChat" />
      </div>
    </div>
  )
}

export default About