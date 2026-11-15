import starLogo from "../assets/Star.png";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="navLogo">
          <img src={starLogo} alt="" className="starLogo" />
          Angelica Hanley
        </Link>

        <div className="navLinks">
          <Link to="/about" className="navLink">About Me</Link>
          <Link to="/projects" className="navLink">Projects</Link>
          <Link to="/resume" className="navLink">Resume</Link>
          <a href="angelicahanley2@gmail.com"
            className="contactButton">
            Contact Me!
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar