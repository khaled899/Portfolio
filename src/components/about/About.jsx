import React from "react";
import "./about.css";
import { BsAward } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
import khaled from "../../assets/khaled2.jpeg"

export const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        {/* Optional Profile Image */}
        <div className="about-me">
          <div className="about-me-img">
            <img src={khaled} alt="Khaled" />
          </div>
        </div>

        {/* Main content */}
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <BsAward className="about-icon" title="Experience icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" title="Projects icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Hi 👋, I'm Khaled — a Senior Front-End Developer based in Cairo with over 5 years of hands-on experience crafting high-performance, user-centric web applications. I specialize in modern
            JavaScript frameworks like React, Next.js, and TypeScript, with a strong focus on building scalable, responsive, and accessible interfaces. Over the past few years, I've successfully
            delivered 15+ full-scale projects across various industries, including e-commerce, education, and SaaS. My work often involves close collaboration with designers, backend engineers, and
            clients — turning complex product ideas into elegant, maintainable code and seamless user experiences. I’m passionate about clean architecture, UI/UX best practices, and staying up-to-date
            with the latest front-end technologies.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
