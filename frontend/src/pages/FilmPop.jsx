import { Link } from 'react-router-dom'
import filmPopHome from '../assets/filmPopHome.png'
import filmPopMovies from '../assets/filmPopMovies.png'


function FilmPop() {
  return (
    <main className="projectPage">
      <section className="projectIntro">
        <h1 className="projectTitle">FILMPOP</h1>
        <p className="projectIntroText">Collaborated with a team to develop a mobile application that provides personalized movie recommendations and an interactive browsing experience.</p>
        <div className="projectTags">
          <p className="projectTag">React Native</p>
          <p className="projectTag">Expo Go</p>
          <p className="projectTag">Firebase</p>
          <p className="projectTag">TMDB API</p>
        </div>

        <div className="filmPopIntro">
          <div className="filmPopImages">
            <img src={filmPopHome} alt="filmPop home screen" className="filmPopImg"/>
            <img src={filmPopMovies} alt="filmPop recommendations screen" className="filmPopImg"/>
          </div>

          <div className="encoreButtons">
              <a
                className="encoreButton"
                href="https://www.figma.com/design/mQY9mfNUPjTTbMAZlZntzu/FilmPop-Pages?node-id=0-1&t=G9Ecw7NReVnckSYz-1"
                target="_blank"
                rel="noopener noreferrer">
                Figma <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrowSymbol">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg> </a>
              <a
                className="encoreButton encoreButtonLight"
                href="https://github.com/isa-par06/FilmPop"
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

export default FilmPop