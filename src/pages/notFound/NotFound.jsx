import { useEffect } from "react"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./notFound.css"

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found"
  })

  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          <FaHome />
          Go Back Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
