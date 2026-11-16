import { Link } from 'react-router-dom'

import encoreHero from '../assets/encoreHero.png'
import encoreDiscover from '../assets/encoreDiscover.png'
import encoreConcerts from '../assets/encoreConcerts.png'
import encoreWishlist from '../assets/encoreWishlist.png'
import useScrollToSection from '../hooks/useScrollToSection'

function Encore() {
  const goToSection = useScrollToSection()

  return (
    <main className="projectPage" id="top">
      <section className="projectIntro">
        <h1 className="projectTitle">ENCORE</h1>
        <p className="projectIntroText">An interactive concert-tracking website that allows users to search for upcoming concerts and manage personalized event lists.</p>
        <div className="projectTags">
          <p className="projectTag">Frontend Development</p>
          <p className="projectTag">JavaScript</p>
          <p className="projectTag">Ticketmaster API</p>
          <p className="projectTag">HTML/CSS</p>
        </div>

        <img className="encoreHeroImage" src={encoreHero} alt="Encore homepage" />
        <div className="encoreButtons">
          <a
            className="encoreButton"
            href="https://angelicahanley.github.io/EncoreSite/index.html"
            target="_blank"
            rel="noopener noreferrer">
            View Website <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrowSymbol">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg> </a>
          <a
            className="encoreButton encoreButtonLight"
            href="https://github.com/AngelicaHanley/EncoreSite"
            target="_blank"
            rel="noopener noreferrer">
            GitHub <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrowSymbol">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg> </a>
        </div>
      </section>

      <section className="projectSection">
        <h2 className="sectionHeading">1. OVERVIEW</h2>
        <p>As someone who loves attending concerts, I wanted to create a website that makes discovering upcoming shows and keeping track of events easier.</p>
        <br></br>
        <p>Encore was developed as an individual project for my Advanced Web Development course at the University of Florida. It combines concert discovery with personalized event lists in one interactive website.</p>

        <div className="encoreTwoCards">
          <div className="encoreInfoCard">
            <h3 className="projectCardHeading">The Problem</h3>
            <p>Concertgoers discover shows across multiple platforms, making it difficult to keep track of events they plan to attend or are interested in.</p>
          </div>
          <div className="encoreInfoCard">
            <h3 className="projectCardHeading">The Solution</h3>
            <p>A website where users can search for concerts and save them to personalized Going and Wishlist collections.</p>
          </div>
        </div>
      </section>

      <section className="projectSection">
        <h2 className="sectionHeading">2. DESIGN &amp; DEVELOPMENT</h2>
        <h3 className="projectSubheading">Planning the Experience</h3>
        <p>I organized the website around three main pages: Discover, My Concerts, and Wishlist. I wanted the interface to make finding concerts and managing saved events simple and user-friendly.</p>
        <br></br>
        <p>I chose a dark theme with vibrant pink, purple, and teal accents to reflect the excitement of live music while maintaining visual consistency. I used a card-based layout to make concert information easy to find, with contrasting action buttons that allow users to quickly organize events into their personalized lists.</p>

        <div className="encoreVerticalCards">
          <div className="encoreInfoCard">
            <h3 className="projectCardHeading">Ticketmaster API Integration</h3>
            <p>Using asynchronous JavaScript and the Fetch API, I integrated the Ticketmaster Discovery API to retrieve upcoming concerts by artist and dynamically generate event cards with concert information.</p>
          </div>
          <div className="encoreInfoCard">
            <h3 className="projectCardHeading">Personalized Concert Lists</h3>
            <p>I implemented interactive Going and Wishlist buttons using JavaScript and localStorage, allowing users to save, remove, and organize concerts across browsing sessions.</p>
          </div>
          <div className="encoreInfoCard">
            <h3 className="projectCardHeading"> Technical Challenges</h3>
            <p>One challenge I encountered was working with the Ticketmaster API and understanding its JSON response structure. I used JavaScript debugging tools to inspect the returned data, identify the necessary information, and correctly display concert details on the event cards. This experience strengthened my understanding of API integration and debugging.</p>
          </div>
        </div>
      </section>

      <section className="encoreFinal">
        <h2 className="sectionHeading">3. FINAL PRODUCT</h2>
        <div className="encoreFeature">
          <img src={encoreDiscover} alt="Encore Discover page" loading="lazy" />
          <div>
            <h3 className="projectCardHeading">Concert Discovery</h3>
            <p>Users can search for upcoming concerts by artist and browse dynamically generated event cards displaying dates, venues, locations, and event imagery.</p>
          </div>
        </div>
        <div className="encoreFeature">
          <img src={encoreConcerts} alt="Encore My Concerts page" loading="lazy" />
          <div>
            <h3 className="projectCardHeading">My Concerts Page</h3>
            <p>Users can view and manage concerts they plan to attend, including removing events or moving them to their Wishlist.</p>
          </div>
        </div>
        <div className="encoreFeature">
          <img src={encoreWishlist} alt="Encore Wishlist page" loading="lazy" />
          <div>
            <h3 className="projectCardHeading">Wishlist Page</h3>
            <p>Users can save concerts they're interested in attending and move them to their Going list if their plans change.</p>
          </div>
        </div>
      </section>

      <section className="projectSection">
        <h2 className="sectionHeading">4. REFLECTION</h2>
        <p>Developing Encore strengthened my skills in asynchronous JavaScript, API integration, dynamic content generation, and browser storage. It also gave me more website design and development experience.</p>
        <div className="encoreInfoCard">
          <h3 className="projectCardHeading">Future Improvements</h3>
          <p>If I continued developing Encore, I would begin with Figma wireframes to better plan the user experience, implement location-based concert filtering, and integrate Firebase Authentication and Firestore to allow users to create accounts and save their concert lists across devices.</p>
        </div>
      </section>

      <div className="projectBottomLinks">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            goToSection('projects')
          }}
        >
          All Projects
        </a>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to Top ↑</a>
      </div>
    </main>
  )
}

export default Encore
