import ProjectCard from './ProjectCard'
import encoreThumbnail from "../assets/encoreThumbnail.png";
import filmPopThumbnail from "../assets/filmPopThumbnail.png";
import afterdarkThumbnail from "../assets/afterdarkThumbnail.png";
import campbellThumbnail from "../assets/campbellThumbnail.png";

function Projects() {
  return (

    <div className="section" id="projects">
      <div className="headings">
        <h2>PROJECTS</h2>
      </div>

      <div className="projectsGrid">
      <ProjectCard
        title="ENCORE"
        description="A concert-tracking website that allows users to discover upcoming concerts and organize events into personalized Going and Wishlist collections."
        image={encoreThumbnail}
        tag="Web Development & UI Design"
        link="/encore"
      />

      <ProjectCard
        title="FILMPOP"
        description="Collaborated with a team to develop a mobile application that provides personalized movie recommendations and an interactive browsing experience."
        image={filmPopThumbnail}
        tag="Mobile App & UI Design"
        link="/filmPop"
      />

      <ProjectCard
        title="AFTERDARK ANALYTICS"
        description="A collaborative React application that analyzes user inputs, including mood, energy, and responsibilities, to generate a personalized recommendation for a night out."
        image={afterdarkThumbnail}
        tag="React Development & UI Design"
        link="/afterDark"
      />

      <ProjectCard
        title="CAMPBELL PHOTOGRAPHY"
        description="Developed a cohesive brand identity through logo design, typography, color palettes, and visual elements to create an elegant and recognizable brand."
        image={campbellThumbnail}
        tag="Brand Identity & Graphic Design"
        link="/campbell"
      />
      </div>

    </div>
  )
}

export default Projects