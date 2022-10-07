import { useEffect } from "react"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import Header from "../../components/Header"
import Trainer from "../../components/Trainer"
import { trainers } from "../../data"
import HeaderImage from "../../img/header_bg_5.jpg"
import "./Trainers.css"

const Trainers = () => {
  useEffect(() => {
    document.title = "Trainers - Fitness World"
  })

  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        officiis sapiente optio suscipit qui! Nesciunt expedita distinctio
        dolores doloribus quam!
      </Header>

      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers
