import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            delectus reprehenderit, doloribus corrupti enim aperiam! Sapiente
            aliquam quisquam eveniet eligendi.
          </p>
          <div className="footer__socials">
            <a
              href="http://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="http://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/events">Events</Link>
          <Link to="/communities">Communities</Link>
          <Link to="/faq">FAQs</Link>
        </article>
        <article>
          <h4>Get in Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/support">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022 Technical Shampy, Inc. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
