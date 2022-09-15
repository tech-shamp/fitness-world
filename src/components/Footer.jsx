import { Link, NavLink } from "react-router-dom"
import { links } from "../data"
import Logo from "../img/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <h3>About Us</h3>
          <p>
            This is just a simple and basic structure of footer i will not be
            using it officially.
          </p>
        </div>
      </div>
      <div>
        <ul>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
