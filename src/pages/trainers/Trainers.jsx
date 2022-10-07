import { useEffect } from "react"
import Header from "../../components/Header"
import HeaderImage from "../../img/header_bg_3.jpg"
import "./Trainers.css"

const Trainers = () => {
  useEffect(() => {
    document.title = "Trainers - Fitness World"
  })

  return (
    <Header
      title="Our Trainers"
      children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis sapiente optio suscipit qui! Nesciunt expedita distinctio dolores doloribus quam!"
      image={HeaderImage}
    />
  )
}

export default Trainers
