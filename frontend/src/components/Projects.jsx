import ProjectCard from './ProjectCard'
import encoreThumbnail from "../assets/encoreThumbnail.png";
import encoreTag from "../assets/encoreTag.png";

function Projects() {
  return (

    <div className="portfolio">
      <div className="headings">
        <h2>PROJECTS</h2>
      </div>

      <div className="projectsGrid">
      <ProjectCard
        title="ENCORE"
        description="A concert-tracking website that allows users to search for upcoming concerts and manage personalized event lists."
        image={encoreThumbnail}
        tag={encoreTag}
        link="/portfolio/encore"
      />

      <ProjectCard
        title="ENCORE"
        description="A concert-tracking website that allows users to search for upcoming concerts and manage personalized event lists."
        image={encoreThumbnail}
        tag={encoreTag}
        link="/portfolio/encore"
      />
      </div>

    </div>
  )
}

export default Projects