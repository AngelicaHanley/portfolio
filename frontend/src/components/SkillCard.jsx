

function SkillCard({ title, image, tag}) {
  return (

    <div className="skillCard">
      <img src={image} alt={title} className="skillImage"/>
      <div className="skillCardContent">
        <p className="skillTitle">{title}</p>
        <p className="skillTag">{tag}</p>
      </div>
    </div>

  )
}

export default SkillCard