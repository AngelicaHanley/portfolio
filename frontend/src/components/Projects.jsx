import ProjectCard from './ProjectCard'
import encoreThumbnail from "../assets/encoreThumbnail.png";
import filmPopThumbnail from "../assets/filmPopThumbnail.png";
import afterdarkThumbnail from "../assets/afterdarkThumbnail.png";
import campbellThumbnail from "../assets/campbellThumbnail.png";

function Projects() {
  return (

    <div className="section">
      <div className="headings">
        <h2>PROJECTS</h2>
      </div>

      <div className="projectsGrid">
      <ProjectCard
        title="ENCORE"
        description="A concert-tracking website that allows users to discover upcoming concerts, create Going and Wishlist lists to organize and keep track of concerts they're interested in attending."
        image={encoreThumbnail}
        tag="Web Development & UI Design"
        link="/portfolio/encore"
      />

      <ProjectCard
        title="FILMPOP"
        description="Developed a mobile app within a team, that provides users with personalized movie recommendations and an interactive browsing experience."
        image={filmPopThumbnail}
        tag="Mobile App & UI Design"
        link="/portfolio/filmPop"
      />

      <ProjectCard
        title="AFTERDARK ANALYTICS"
        description="Created an interactive React application with dynamic user inputs and form validation to generate personalized recommendations."
        image={afterdarkThumbnail}
        tag="React Development & UI Design"
        link="/portfolio/afterdarkAnalytics"
      />

      <ProjectCard
        title="CAMPBELL PHOTOGRAPHY"
        description="Developed a cohesive brand identity through logo design, typography, color palettes, and visual elements to create an elegant and recognizable brand."
        image={campbellThumbnail}
        tag="Brand Identity & Graphic Design"
        link="/portfolio/campbellPhotography"
      />
      </div>

    </div>
  )
}

export default Projects