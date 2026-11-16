import starLogo from "../assets/Star.png";
import { Link } from 'react-router-dom'
import CopyEmailButton from './CopyEmailButton'
import useScrollToSection from '../hooks/useScrollToSection'


function Navbar() {
  const goToSection = useScrollToSection()

  return (
    <header>
      <nav>
        <Link to="/" className="navLogo">
          <img src={starLogo} alt="" className="starLogo" />
          <span className="navLogoText">Angelica Hanley</span>
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

          <CopyEmailButton />
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar