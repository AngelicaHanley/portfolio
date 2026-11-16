import internshipFile from "../assets/internshipFile.svg";
import newGradFile from "../assets/newGradFile.svg";
import resume from "../assets/resume.svg";
import { Link } from 'react-router-dom'


function Resume() {

  return (
    <>
    <div className="resumeHero">
      <h1>Currently Looking For ...</h1>
      <div className="resumeHeroContent">
        <img src={internshipFile} alt="internship roles" className="fileImage"/>
        <img src={newGradFile} alt="new grad roles" className="fileImage"/>
        <p className ="resumeHeroText">
          I'm currently seeking opportunities in web development, UI/web design, and front-end development. I'd love to connect and explore potential opportunities!
        </p>
      </div>
    </div> 

    <div className="resumeContent">
      
      <div className="resumeHeading">
        <h2>RESUME</h2>
      </div>

        <a
          href={`${import.meta.env.BASE_URL}Angelica_Hanley_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my resume PDF in a new tab" className="resumeLink">
          <img
            src={resume}
            alt="Preview of my resume"
            className="resumeImage"
          />
        </a>

      <a href={`${import.meta.env.BASE_URL}Angelica_Hanley_Resume.pdf`}
        download="Angelica_Hanley_Resume.pdf"
        className="resumeButton downloadButton">
        Download PDF
      </a>
      
    </div> 
    </>
  )
}

export default Resume