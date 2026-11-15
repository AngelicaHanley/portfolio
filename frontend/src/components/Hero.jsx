import headshot from "../assets/Headshot.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero" id="about">
      <img 
        src={headshot}
        alt="Angelica Hanley headshot"
        className="headshot"
      />
      <div className="heroContent">
        <h1>Hi, I’m Angelica Hanley!</h1>
        <p>I’m a Computer Science graduate from the University of Florida, now pursuing a Master’s in Mass Communication with a concentration in Web Design. I'm passionate about website development, UX/UI design, and creating 
            user-focused web experiences.</p>
        <div className="heroButtons">
            <Link to="/resume" className="resumeButton">Resume</Link>
            <div className="socialFiles">
              <a href="https://www.linkedin.com/in/angelicahanley/" target="_blank" 
                  rel="noopener noreferrer"
                className="fileImg">
                <img 
                  src={linkedin}
                  alt="linkedIn button"
                  class="fileImg"
                  />
              </a>

              <a href="https://github.com/AngelicaHanley" target="_blank" 
                  rel="noopener noreferrer" className="fileImg"
                >
                <img 
                  src={github}
                  alt="github button"
                  class="fileImg"
                /> 
              </a>
       
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero