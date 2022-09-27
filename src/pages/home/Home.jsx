import { useEffect } from "react"
import FAQs from "../../components/FAQs"
import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs"
import Testimonials from "../../components/Testimonials"
import Values from "../../components/Values"
import "./Home.css"

const Home = () => {
  useEffect(() => {
    document.title = "Home - Fitness World"
  })

  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home
