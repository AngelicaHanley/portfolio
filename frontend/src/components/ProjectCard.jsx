

function ProjectCard({ title, description, image, tag, link}) {
  return (

    <div className="projectCard">
      <img src={image} alt={title} className="projectImage"/>
      <div className="projectCardContent">
        <img src={tag} alt={title} className="projectTag"/>
        <h3 className="projectTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
        <a href={link} className="projectButton">→</a>
      </div>
    </div>

  )
}

export default ProjectCard