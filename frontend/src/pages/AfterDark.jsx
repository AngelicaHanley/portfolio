import { Link } from 'react-router-dom'
import AfterDarkHome from '../assets/AfterDarkHome.png'
import AfterDarkResults from '../assets/AfterDarkResults.png'


function AfterDark() {
  return (
    <main className="projectPage">
      <section className="projectIntro">
        <h1 className="projectTitle">AFTERDARK ANALYTICS</h1>
        <p className="projectIntroText">A collaborative React application that analyzes user inputs, including mood, energy, and responsibilities, to generate a personalized recommendation for a night out.</p>
        <div className="projectTags">
          <p className="projectTag">React</p>
          <p className="projectTag">JavaScript</p>
          <p className="projectTag">Tailwind CSS</p>
          <p className="projectTag">Python</p>
        </div>

        <div className="filmPopIntro">
          <div className="filmPopImages">
            <img src={AfterDarkHome} alt="AfterDark Analytics home screen" className="filmPopImg"/>
            <img src={AfterDarkResults} alt="AfterDark Analytics results screen" className="filmPopImg"/>
          </div>

          <div className="encoreButtons">
              <a
                className="encoreButton"
                href="https://www.figma.com/design/vz47TPpdYzOGV3YXi0eCwD/AfterdarkAnalytics?node-id=0-1&t=MYFRp1AUQxM9EHv7-1"
                target="_blank"
                rel="noopener noreferrer">
                Figma <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrowSymbol">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg> </a>
              <a
                className="encoreButton encoreButtonLight"
                href="https://github.com/aubreyfortmayer/AfterdarkAnalytics"
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

export default AfterDark