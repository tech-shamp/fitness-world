import { useEffect } from "react"
import Header from "../../components/Header"
import StoryImage from "../../img/about1.jpg"
import VissionImage from "../../img/about2.jpg"
import MissionImage from "../../img/about3.png"
import HeaderImage from "../../img/header_bg_1.jpg"
import "./About.css"

const About = () => {
  useEffect(() => {
    document.title = "About - Fitness World"
  })

  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        officiis sapiente optio suscipit qui! Nesciunt expedita distinctio
        dolores doloribus quam!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our StoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              hic dolores eligendi cum impedit veritatis, pariatur error
              deserunt quas. A facilis amet voluptatem libero dolorum, vitae
              atque. Accusamus aperiam error saepe numquam blanditiis illo
              perspiciatis maxime ab est. Sint, consequatur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              cum suscipit sapiente natus blanditiis tenetur perspiciatis enim
              harum! Recusandae, tempore? Ipsam quo magni voluptas voluptates
              inventore quibusdam aliquam quia tempora.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quia asperiores exercitationem repellendus magni aliquid porro
              nostrum excepturi beatae maiores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              quisquam!
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              aliquid. A, totam voluptatibus dolor minus natus commodi suscipit
              vel. Fugiat rerum error quas nihil, iste harum sunt mollitia
              voluptas voluptate.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              quis quaerat corporis quod expedita consectetur optio
              exercitationem molestias modi dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quia asperiores exercitationem repellendus magni aliquid porro
              nostrum excepturi beatae maiores.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VissionImage} alt="Our VissionImage" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our MissionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              hic dolores eligendi cum impedit veritatis, pariatur error
              deserunt quas. A facilis amet voluptatem libero dolorum, vitae
              atque. Accusamus aperiam error saepe numquam blanditiis illo
              perspiciatis maxime ab est. Sint, consequatur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              cum suscipit sapiente natus blanditiis tenetur perspiciatis enim
              harum! Recusandae, tempore? Ipsam quo magni voluptas voluptates
              inventore quibusdam aliquam quia tempora.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quia asperiores exercitationem repellendus magni aliquid porro
              nostrum excepturi beatae maiores.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
