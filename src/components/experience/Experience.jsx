import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "SCSS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "Bootstrap", level: "Experienced" },
  { name: "Tailwind", level: "Experienced" },
  { name: "React", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Vue.js", level: "Intermediate" },
  { name: "Nuxt.js", level: "Intermediate" },
  { name: "Pinia.js", level: "Intermediate" },
  { name: "Redux.js", level: "Intermediate" },
  { name: "Vuetlify.js", level: "Intermediate" },
  { name: "Wordpress", level: "Intermediate" },
];

const backendSkills = [
  { name: "MySQL", level: "Intermediate" },
  { name: "Python", level: "Basic" },
  { name: "PHP", level: "Basic" },
];

const SkillList = ({ skills }) => (
  <>
    {skills.map((skill, index) => (
      <article className="experience-details" key={index}>
        <BsFillPatchCheckFill className="icon" />
        <div>
          <h4>{skill.name}</h4>
          <small className="text-light">{skill.level}</small>
        </div>
      </article>
    ))}
  </>
);

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-front">
          <h3>Frontend Developer</h3>
          <div className="experience-content">
            <SkillList skills={frontendSkills} />
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Developer</h3>
          <div className="experience-content">
            <SkillList skills={backendSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};
