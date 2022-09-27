import { useEffect } from "react"
import "./notFound.css"

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found"
  })

  return <div>NotFound</div>
}

export default NotFound
