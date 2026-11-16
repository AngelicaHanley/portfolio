import starLogo from "../assets/Star.png";
import githubLogo from "../assets/githubSocial.svg";
import linkedinLogo from "../assets/linkedinSocial.png";
import CopyEmailButton from './CopyEmailButton'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <footer className="footer">
        <div className="footerTop">
          <div className="footerLogo">
            <img 
              src={starLogo}
              alt="star logo"
              className="starLogo"
            />
            <p>Designed & Developed with {'<3'} by Me.</p>
        </div>
        <Link to="/comingSoon" className="behindDesign">
          Behind the Design
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="arrowSymbol">
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="footerBottom">
        <p>© 2026 Angelica Hanley</p>
          <div className="footerLinks">
            <a href="https://www.linkedin.com/in/angelicahanley/" target="_blank" 
                rel="noopener noreferrer"
              className="socialButton">
              <img src={linkedinLogo}
                alt="linkedin link"
                className="socialButton"/>
            </a>
            <a href="https://github.com/AngelicaHanley" target="_blank" 
                rel="noopener noreferrer"
              className="socialButton">
              <img src={githubLogo}
                alt="github link"
                className="socialButton"/>
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </footer>
  )
}

export default Footer