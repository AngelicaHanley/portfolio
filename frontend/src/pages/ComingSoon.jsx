import { Link } from 'react-router-dom'


function ComingSoon() {
  return (
    <main className="comingSoon">
      <div className="comingSoonContent">
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

export default ComingSoon