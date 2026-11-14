import starLogo from "../assets/Star.png";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="navLogo">
          <img 
            src={starLogo}
            alt="star logo"
            className="starLogo"
          />Angelica Hanley
        </div>

        <div className="navLinks">
          <a href="#about" className="navLink">About Me</a>
          <a href="#projects" className="navLink">Projects</a>
          <a href="/resume" className="navLink">Resume</a>
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