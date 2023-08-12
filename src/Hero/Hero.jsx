import React from 'react'
import hero from "../images/Hero.png"
import arrowRight from "../images/arrow-right.png"
import './Hero.css'

const _Hero = () => {
  return (
    <div className="heroSect">
      <div className="leftContent">
        <div className="text">
          <h1>Show Love & Care by Funding A Cause Today</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquet feugiat egestas libero facilisis convallis purus aliquam.</p>
        </div>
        <button className="arrowBtn btn"><span className="hero-btn">Make a Donation </span><img src={arrowRight} alt="arrow-right"/></button>
      </div>
    </div>
  )
}


const Hero = () => {
  return (
    <div className='hero__wrapper'>
      <div className="hero__content">
        <div className="hero__header">
          Show Love & Care by Funding A Cause Today
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorem. Quae eos aperiam natus ipsa.</p>

        <button className="hero__cta">
          Make a Donation
          <img src={arrowRight} alt="arrow right" />
        </button>
      </div>
    </div>
  )
}


export default Hero