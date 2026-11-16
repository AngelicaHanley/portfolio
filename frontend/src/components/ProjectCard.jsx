import { Link } from 'react-router-dom'

function ProjectCard({ title, description, image, tag, link}) {
  return (

    <div className="projectCard">
      <img src={image} alt={title} className="projectImage"/>
      <div className="projectCardContent">
        <p className="skillTag">{tag}</p>
        {/*<img src={tag} alt={title} className="projectTag"/>*/}
        <h3 className="projectCardTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
        <Link to={link} className="projectButton">→</Link>
      </div>
    </div>

  )
}

export default ProjectCard