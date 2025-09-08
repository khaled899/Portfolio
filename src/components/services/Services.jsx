import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = [
  {
    title: "Web Development",
    items: [
      "Build and maintain websites and web applications",
      "Write and test code, including HTML, CSS, JavaScript, and React",
      "Using React and CSS frameworks e.g. Tailwind, Material UI, Bootstrap",
      "Optimize websites for maximum speed and scalability",
      "Implement responsive design for all devices",
      "Understand and work with APIs and web services",
      "Stay up-to-date with the latest web technologies and trends",
      "Implement and maintain SEO best practices",
    ],
  },
  // 👇 You can easily add more services later:
  // {
  //   title: 'UI/UX Design',
  //   items: [
  //     'Wireframing & prototyping',
  //     'Design systems with Figma',
  //     'Accessibility-focused design',
  //   ],
  // },
];

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container-services">
        {services.map((service, index) => (
          <article className="service" key={index}>
            <div className="service-head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service-list">
              {service.items.map((item, i) => (
                <li key={i}>
                  <BiCheck className="icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
