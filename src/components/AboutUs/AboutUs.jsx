import React from 'react'
import "../AboutUs/AboutUs.css"
import { Link } from 'react-router-dom'
import Home from "../Home"
import Content from "../Content/Content"
import "../../images/vision.png"
import "../../images/missionImg.png"
import arrowRight from "../../images/arrow-right.png"
import aboutImg from "../../images/aboutImage.png"
import member1 from "../../images/Frame 45777.png"
import member2 from "../../images/Frame 45777 (1).png"
import member3 from "../../images/Frame 45777 (2).png"
import member4 from "../../images/Frame 45777 (3).png"
import arrowLeft from "../../images/arrow-left.png"
import ScrollToTopArrow from '../ScrollToTopArrow/ScrollToTopArrow'
const AboutUs = () => {
  // const imageData=[{
  //   img:aboutImg,
  //   text:"Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod magna fermentum nisl nec a volutpat a. Congue nisl mi porttitor nunc faucibus."
  // }]
  const teams = [
    {
      id: 1,
      img: member1,
      text: "Uche Agbor",
      title: "Chairman"
    }, {
      id: 2,
      img: member2,
      text: "Uche Agbor",
      title: "Chairman"
    }, {
      id: 3,
      img: member3,
      text: "Uche Agbor",
      title: "Chairman"
    }, {
      id: 4,
      img: member4,
      text: "Uche Agbor",
      title: "Chairman"
    }
  ]
  return (
    <div className="aboutUs">
      <section className="aboutNav">
        <Link to="/Home" className="redirect">
          <img src={arrowLeft} />
          <p>Back to Home</p>
        </Link>
        <h3>About Us</h3>
      </section>
      <section className="flexAbout secondAbout ">
        <div className="textbox">
          <h3>We are who we are.</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod magna fermentum nisl nec a volutpat a. Congue nisl mi porttitor nunc faucibus.</p>
        </div>
        <img src={aboutImg} alt="about Image" className="img" />
      </section>
      <div className="content">
        <Content />
      </div>
      <div className="flexAbout thirdAbout headlineDiv">
        <img src={aboutImg} className="textbox-img" />
        <div className="textbox">
          <h2>Headline goes here</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod magna fermentum nisl nec a volutpat a. Congue nisl mi porttitor nunc faucibus.</p>
        </div>
      </div>
      <div className="flexAbout fourthAbout  headlineDiv">
        <div className="textbox ">
          <h2>Headline goes here</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod magna fermentum nisl nec a volutpat a. Congue nisl mi porttitor nunc faucibus.</p>
        </div>
        <img src={aboutImg} className="textbox-img"/>
      </div>
      <div className='teamHeader'>
        <h3>Meet Our Team</h3>
        <div className="team">
          {teams.map((team) => {
            return (
              <div key={team.id} className="teams">
                <img src={team.img} />
                <div className="teamText">
                  <h6>{team.text}</h6>
                  <p>{team.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <section className="Volunteer">
        <div className="vol">
          <h3>Volunteer</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod magna fermentum nisl nec a volutpat a. Congue nisl mi porttitor nunc faucibus.</p>
        </div>
        <button className="volunteer-btn btn"><span>Join Us</span> <img src={arrowRight} /></button>
      </section>
      <div className="scrollArrow">
        <ScrollToTopArrow />
      </div>
    </div>
  )
}

export default AboutUs