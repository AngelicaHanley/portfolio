import headshot from "../assets/Headshot.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Hero() {
  return (
    <div className="hero">
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
            <p className="resumeButton">Resume</p>
            <div className="socialFiles">
              <img 
                src={linkedin}
                alt="linkedIn button"
                class="fileImg"
                />
              <img 
                src={github}
                alt="github button"
                class="fileImg"
                /> 
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero