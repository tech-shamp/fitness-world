import { useEffect } from "react"
import { BsMessenger } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import Header from "../../components/Header"
import HeaderImage from "../../img/header_bg_2.jpg"
import "./Contact.css"

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Fitness World"
  })

  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil
        officia totam, animi culpa nobis nemo natus doloremque?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:iboy@duck.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="https://m.me/iboy.shamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+923124874118"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
