import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallary from "./pages/gallary/Gallary"
import Home from "./pages/home/Home"
import NotFound from "./pages/notFound/NotFound"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/Trainers"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Gallary />
      <Contact />
      <Trainers />
      <Plans />
      <About />
      <NotFound />
      <Footer />
    </BrowserRouter>
  )
}

export default App
