import SkillCard from './SkillCard'
import javascriptLogo from "../assets/javascriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import htmlLogo from "../assets/htmlLogo.png";

import githubLogo from "../assets/githubLogo.png";
import figmaLogo from "../assets/figmaLogo.png";
import cLogo from "../assets/cLogo.png";
import pythonLogo from "../assets/pythonLogo.png";

import illustratorLogo from "../assets/illustratorLogo.png";
import indesignLogo from "../assets/indesignLogo.png";
import canvaLogo from "../assets/canvaLogo.png";
import microsoftLogo from "../assets/microsoftLogo.png";

function Skills() {
  return (

    <div className="section">
      <div className="headings">
        <h2>SKILLS</h2>
      </div>

      <div className="skillsGrid">
        <SkillCard
          image= {javascriptLogo}
          title="JavaScript"
          tag="Web Development"
        />
        <SkillCard
          image= {reactLogo}
          title="React"
          tag="Web Development"
        />
        <SkillCard
          image= {figmaLogo}
          title="Figma"
          tag="UI/UX Design"
        />
        <SkillCard
          image= {tailwindLogo}
          title="Tailwind CSS"
          tag="Styling Framework"
        />
        <SkillCard
          image= {htmlLogo}
          title="HTML & CSS"
          tag="Web Foundation"
        />

        <SkillCard
          image= {githubLogo}
          title="Git & GitHub"
          tag="Version Control"
        />
        <SkillCard
          image= {cLogo}
          title="C++"
          tag="Language"
        />
        <SkillCard
          image= {pythonLogo}
          title="Python"
          tag="Language"
        />

        <SkillCard
          image= {illustratorLogo}
          title="Adobe Illustrator"
          tag="Graphic Design"
        />
        <SkillCard
          image= {indesignLogo}
          title="Adobe InDesign"
          tag="Graphic Design"
        />
        <SkillCard
          image= {canvaLogo}
          title="Canva"
          tag="Design Software"
        />
        <SkillCard
          image= {microsoftLogo}
          title="Microsoft Office"
          tag="Productivity Tools"
        />
      </div>

    </div>
  )
}

export default Skills