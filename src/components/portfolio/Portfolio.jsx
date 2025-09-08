import React from "react";
import "./portfolio.css";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/Games.png";
import IMG6 from "../../assets/Education.png";
import IMG8 from "../../assets/Paralex.png";
import IMG9 from "../../assets/course.png";
import IMG10 from "../../assets/Ella.png";
import IMG11 from "../../assets/amit.png";
import Trivaeg from "../../assets/Trivage.png";
import Protax from "../../assets/Protax.png";
import Alfadoor from "../../assets/Alphadoor.png";
import Egiptotours from "../../assets/Egipto.png";
import Wasad from "../../assets/Wasad.png";
import Hi5 from "../../assets/Hi5.png";
import Accountant from "../../assets/Accountant.png";
import XWork from "../../assets/X-work.png";
import Valero from "../../assets/Valero.png";
import Fagas from "../../assets/Fagas.png";
import AutoStation from "../../assets/Auto station.png";
import GClinic from "../../assets/G-clinic.png";
import Alkhbaz from "../../assets/ELkhbaz.png";
import hydeparkdevelopments from "../../assets/hydeparkdevelopments.png";
import bassamalkhouri from "../../assets/bassamalkhouri.png";
import Altamawy from "../../assets/Altamawy.png";


const ownTemplates = [
  {
    id: 1,
    image: IMG9,
    title: "Courses-Static-Version",
    github: "https://github.com/khaled899/Courses-Static-Version-.git",
    URL: "https://khaled899.github.io/Courses-Static-Version-/courses.html",
    status: "Live Demo",
  },
  { id: 2, image: IMG10, title: "Ella-Mart [Vue.js]", github: "https://github.com/khaled899/Ella-Mart.git", URL: "https://ella-mart.web.app/", status: "Live Demo" },
  { id: 3, image: IMG3, title: "Kasper [HTML,CSS]", github: "https://github.com/khaled899/Kasper", URL: "https://khaled899.github.io/Kasper/", status: "Live Demo" },
  { id: 4, image: IMG4, title: "Games Template [HTML,CSS]", github: "https://github.com/khaled899/Games", URL: "https://khaled899.github.io/Games/", status: "Live Demo" },
  { id: 5, image: IMG6, title: "Education Template [HTML,CSS]", github: "https://github.com/khaled899/Equcation", URL: "https://khaled899.github.io/Equcation/", status: "Live Demo" },
  { id: 7, image: IMG8, title: "Paralex [HTML , CSS , JavaScript]", github: "https://github.com/khaled899/Paralex.git", URL: "https://khaled899.github.io/Paralex/", status: "Live Demo" },
  { id: 8, image: Hi5, title: "HI 5", github: "https://github.com/khaled899/Nursery", URL: "https://khaled899.github.io/Nursery/", status: "Live Demo" },
  { id: 9, image: Accountant, title: "Accountant", github: "https://github.com/khaled899/Accountant", URL: "https://khaled899.github.io/Accountant/", status: "Live Demo" },
];

const liveProjects = [
  { id: 1, image: Alkhbaz, title: "Alkhbaz", github: "", URL: "https://alkhbaz.com/ar", status: "Live" },
  { id: 2, image: hydeparkdevelopments, title: "Hyde Park Development", github: "", URL: "https://www.hydeparkdevelopments.com/", status: "Live" },
  { id: 3, image: IMG11, title: "AMIT-Learning", github: "", URL: "https://amit-learning.com/", status: "Live" },
  { id: 4, image: XWork, title: "X-Work", github: "", URL: "https://xwrk-eg.com/", status: "Live" },
  { id: 5, image: Valero, title: "Valero", github: "", URL: "https://valerodevelopments.com/", status: "Live" },
  { id: 6, image: Fagas, title: "Fagas", github: "", URL: "https://fagaskwt.com/", status: "Live" },
  { id: 6, image: bassamalkhouri, title: "bassamalkhouri", github: "", URL: "https://bassamalkhouri.com/", status: "Live" },
  { id: 7, image: Hi5, title: "Hi5", github: "", URL: "https://hi5nursery.com/", status: "Live" },
  { id: 8, image: Altamawy, title: "Altamawy Financial", github: "", URL: "https://altamawyfinancial.com/", status: "Live" },
];

const wordpressProjects = [
  { id: 1, image: Trivaeg, title: "Trivaeg", URL: "https://trivaeg.com/", status: "Live" },
  { id: 2, image: Protax, title: "Protax", URL: "https://www.protax-ksa.com/", status: "Live" },
  { id: 3, image: Alfadoor, title: "Alfadoor", URL: "https://alfadoor.net/", status: "Live" },
  { id: 4, image: Egiptotours, title: "Egiptotours", URL: "https://egiptotours.com/", status: "Live" },
  { id: 5, image: Wasad, title: "Wasad Law Firm", URL: "https://wasadlawfirm.com/", status: "Live" },
  { id: 6, image: AutoStation, title: "Auto Station", URL: "https://autostationuae.com/", status: "Live" },
  { id: 7, image: GClinic, title: "G-Clinic", URL: "https://gclinicksa.com/", status: "Live" },
];

// 🔹 Reusable section component
const PortfolioSection = ({ subtitle, title, projects }) => (
  <section id="portfolio">
    <h5>{subtitle}</h5>
    <h2>{title}</h2>

    <div className="container portfolio-container">
      {projects.map((item) => (
        <article key={item.id} className="portfolio-item">
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <h3 style={{textAlign:"center" , fontSize:"1.4rem"}}>{item.title}</h3>
          <div className="pcta">
            {item.github && (
              <a href={item.github} className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {item.URL && (
              <a href={item.URL} className="btn btn-primary" target="_blank" rel="noreferrer">
                {item.status}
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export const Portfolio = () => {
  return (
    <>
      <PortfolioSection subtitle="My Recent Work" title="Live Projects" projects={liveProjects} />
      <PortfolioSection subtitle="My Recent Work" title="Live Projects WordPress" projects={wordpressProjects} />
      <PortfolioSection subtitle="My Recent Work" title="Own Templates" projects={ownTemplates} />
    </>
  );
};
