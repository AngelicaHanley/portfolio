import { Link } from 'react-router-dom'
import campbellBrand from '../assets/campbellBrand.png'
import campbellLogos from '../assets/campbellLogos.png'


function Campbell() {
  return (
    <main className="projectPage">
      <section className="projectIntro">
        <h1 className="projectTitle">CAMPBELL PHOTOGRAPHY</h1>
        <p className="projectIntroText">Developed a cohesive brand identity through logo design, typography, color palettes, and visual elements to create an elegant and recognizable brand.</p>
        <div className="projectTags">
          <p className="projectTag">Adobe Illustrator</p>
          <p className="projectTag">Brand Identity</p>
          <p className="projectTag">Graphic Design</p>
        </div>

        <div className="filmPopIntro">
          <div className="filmPopImages">
            <img src={campbellBrand} alt="Campbell Brand Identity" className="campbellImg" />
            <img src={campbellLogos} alt="Campbell Logos" className="campbellImg" />
          </div>

          <div className="encoreButtons">
            <a
              href={`${import.meta.env.BASE_URL}Angelica_Hanley_Campbell.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my Campbell PDF in a new tab" className="encoreButton">
              View PDF <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrowSymbol">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg>
            </a>

          </div>
        </div>
      </section>


      <div className="comingSoonContent">

        <h2>Case Study Coming Soon!</h2>
        <p>
          I'm currently working on this project page.
          <br />
          Check back soon!
        </p>

        <Link to="/" className="resumeButton">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}

export default Campbell