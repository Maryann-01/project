import React from 'react'
import "../Volunteer/Volunteer.css"
import arrowRight from "../../images/arrow-right.png"
const Volunteer = () => {
  return (
    <div id="volunteer">
      <div className="volunteerText">
        <h3>Volunteer</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod magna fermentum nisl nec a volutpat a. Congue nisl mi porttitor nunc faucibus.</p>
      </div>
      <button className="volunteer-btn btn"><span><a href="#contact" className="join-link">Join Us</a></span><img src={arrowRight}/></button>
    </div>
  )
}

export default Volunteer