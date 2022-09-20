import { Link } from "react-router-dom"
import Images from "../img/main_header.png"

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>
            Join The Legends Of The <span>Fitness World</span>
          </h1>
          <p>
            {/* We Provide our best Oppurtunity and Qualified Trainers For Best Workout Yourself you Want! */}
            {/* The Quality of your health determines the quality of your life and
             nothing is more important than that. */}
            An Exercise system that keeps you safe, makes things simple, and
            gives you support so you feel capable and confident.
          </p>
          <Link to="plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Images} alt="#100DaysOfWorkOut" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
