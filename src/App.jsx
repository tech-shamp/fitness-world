import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./app.css"
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
      <Routes>
        <Route index element={<Home />} />
        <Route path="plans" element={<Plans />} />
        <Route path="gallary" element={<Gallary />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
