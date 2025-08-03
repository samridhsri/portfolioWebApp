import React from "react";
import css from "../stylesheets/projectsComp.css";
import projects from "../data/projects.json";


const ProjectsComp = () => {
  return (
    <div>
      <h3 className="title">
        Projects 🚀 <br />
        <span className="subtitle">
          (Some of the cool things I built 🛠️)
        </span>
      </h3>
      <div className="container">
        {projects.map((project, index) => (
          <a
            className="projectLink"
            href={project.link || "#"}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="projectBox">
              <div className="projectTitle">
                <h5 className="projectTitleText">{project.title}</h5>
              </div>
              <p className="date">{project.date}</p>
              <div className="projectDescription">
                <p className="projectDescriptionContent">
                  {project.description}
                </p>
              </div>
              <div className="projectTools">
                <div className="toolContainer">
                  {project.tools.map((tool, toolIndex) => (
                    <div className="tool" key={toolIndex}>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsComp;
