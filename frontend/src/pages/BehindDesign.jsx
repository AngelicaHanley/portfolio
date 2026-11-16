import { Link } from 'react-router-dom'
import portfolioFigma from '../assets/portfolioFigma.png'


function BehindDesign() {
  return (
    <main className="comingSoon">
      <div className="comingSoonContent">

        <h1 className="projectTitle">PORTFOLIO WEBSITE</h1>
        <div className="behindDesignSection">
            <img src={portfolioFigma} alt="figma image" className="behindDesignSectionImg"/>
            <div className = "behindDesignText">
                <h2 className="sectionHeading">Portfolio Wireframes</h2>
                <a href="https://www.figma.com/design/8s67KXeDJqNFO0bBJMtBJ2/Figma-Portfolio?node-id=3-2&t=7CSNCvixjRtg7k2p-1" target="_blank" 
                  rel="noopener noreferrer"
                  className="contactButton">
                  <p>Figma</p>
                </a>
            </div>
        </div>

        <h1>Case Study Coming Soon!</h1>
        <p>
          I'm currently working on this project page.
          <br/>
          Check back soon!
        </p>

        <Link to="/" className="resumeButton">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}

export default BehindDesign