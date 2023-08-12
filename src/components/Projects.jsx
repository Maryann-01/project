import frame1 from "../images/frame1.png"
import frame2 from "../images/frame2.png"
import frame3 from "../images/frame3.png"
import frame4 from "../images/frame4.png"
import frame5 from "../images/frame5.png"
import frame6 from "../images/frame6.png"
const projects = [
  {
    id: 1,
    img: frame1,
    title: "Renovation of Igbayii Church",
    text: "Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod "
  }, {
    id: 2,
    img: frame2,
    title: "Renovation of Igbayii Church",
    text: "Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod "
  }, {
    id: 3,
    img: frame3,
    title: "Renovation of Igbayii Church",
    text: "Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod "

  }, {
    id: 4,
    img: frame4,
    title: "Renovation of Igbayii Church",
    text: "Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod "
  },
  {
    id: 5,
    img: frame5,
    title: "Renovation of Igbayii Church",
    text: "Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod "
  },
  {
    id: 6,
    img: frame6,
    title: "Renovation of Igbayii Church",
    text: "Lorem ipsum dolor sit amet consectetur. Cras ut in facilisis in. Feugiat feugiat euismod "
  }
]
const Projects = () => {
  return (
    <section id="project">
      <div class="ourProjects">
        <h3>Our Projects</h3>
        <br/>
        <br/>
        <div className="projectCardContainer">
          {projects.map((project) => {
            return (
              <div key={project.id} className="projectCard">
                <img src={project.img} />
                <div class="projectTxt">
                  <h6>{project.title}</h6>
                  <p>{project.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br/>
      <br/>

    </section>
  )
}

export default Projects