import { Link } from 'react-router-dom'
import portfolioFigma from '../assets/portfolioFigma.png'


function BehindDesign() {
  return (
    <main className="projectPage">
      <section className="projectIntro">
        <h1 className="projectTitle">BEHIND THE DESIGN</h1>
        <p className="projectIntroText">I designed and developed this portfolio website to showcase my projects, technical skills, and passion for front-end development and UI design. I began by creating wireframes in Figma to plan the website's layout and user interface. </p>
        <br></br>
        <p className="projectIntroText">I brought the design to life using responsive layouts, reusable components, and interactive elements to create an engaging, user-friendly experience.</p>
        <div className="projectTags">
          <p className="projectTag">React</p>
          <p className="projectTag">JavaScript</p>
          <p className="projectTag">HTML / CSS</p>
          <p className="projectTag">Figma</p>
        </div>

        <div className="filmPopIntro">
          <div className="behindDesignSection">
            <img src={portfolioFigma} alt="figma image" className="behindDesignSectionImg"/>
          </div>

          <div className="encoreButtons">
              <a
                className="encoreButton"
                href="https://www.figma.com/design/8s67KXeDJqNFO0bBJMtBJ2/Figma-Portfolio?node-id=3-2&t=7CSNCvixjRtg7k2p-1"
                target="_blank"
                rel="noopener noreferrer">
                Figma <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrowSymbol">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg> </a>
              <a
                className="encoreButton encoreButtonLight"
                href="https://github.com/AngelicaHanley/portfolio"
                target="_blank"
                rel="noopener noreferrer">
                GitHub <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrowSymbol">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg> </a>
          </div>
        </div>
      </section>
      
      <div className="comingSoonContent">
        <h2>Case Study Coming Soon!</h2>
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