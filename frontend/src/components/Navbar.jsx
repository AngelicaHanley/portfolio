import starLogo from "../assets/Star.png";
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const goToSection = (id) => {
    navigate('/')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <header>
      <nav>
        <Link to="/" className="navLogo">
          <img src={starLogo} alt="" className="starLogo" />
          Angelica Hanley
        </Link>

        <div className="navLinks">
          <a href="#about" onClick={(e) => {
              e.preventDefault()
              goToSection('about')
            }}
            className="navLink">
              About Me
            </a>

          <a href="#projects" onClick={(e) => {
              e.preventDefault()
              goToSection('projects')
            }}
            className="navLink"
            >Projects</a>
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