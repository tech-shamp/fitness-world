import { useEffect } from "react"
import Header from "../../components/Header"
import HeaderImage from "../../img/header_bg_3.jpg"
import "./Gallary.css"

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallary - Fitness World"
  })

  return <Header title="Gallary" image={HeaderImage}></Header>
}

export default Gallery
