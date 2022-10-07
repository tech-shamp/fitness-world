import { useEffect } from "react"
import Header from "../../components/Header"
import HeaderImage from "../../img/header_bg_2.jpg"
import "./Plans.css"

const Plans = () => {
  useEffect(() => {
    document.title = "Plans - Fitness World"
  })

  return (
    <Header
      title="Our Plans"
      children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis sapiente optio suscipit qui! Nesciunt expedita distinctio dolores doloribus quam!"
      image={HeaderImage}
    />
  )
}

export default Plans
