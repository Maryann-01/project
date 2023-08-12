import React from 'react'
import visionImg from "../../images/vision.png"
import missionImg from "../../images/missionImg.png"
import "../Content/Content.css"
const Content = () => {
   return (
      <div className="missionAndVis">
         <div className="mission ">
            <img src={missionImg} alt="mission Image" />
            <h6>Mission</h6>
            <p>Tristique elementum, ac maecenas enim fringilla placerat scelerisque semper.</p>
         </div>
         <div className="vision">
            <img src={visionImg} alt="vision Image" />
            <h6>Vision</h6>
            <p>Curabitur magna cras euismod pharetra, mauris malesuada sit enim, elementum.</p>
         </div>
      </div>
   )
}

export default Content