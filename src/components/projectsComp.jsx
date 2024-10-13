import React from "react";
import css from "../stylesheets/projectsComp.css";

const projects = [
  {
    "title": "Manipal Convocation Portal",
    "date": "",
    "description": "Developed a web portal to streamline the convocation registration process. The portal is currently live and being used by my undergrad college",
    "tools": ["React", "Firebase", "MongoDB", "Twilio"],
    "link": "https://mujconvocation.in"
  },
  {
    "title": "Campus Ticket Hub",
    "date": "",
    "description": "Developed a Ticket Management System for show creation, venue management, and ticket booking using a full-stack application with VueJS and Flask.",
    "tools": ["VueJS", "Flask", "SQLite3", "Redis", "Celery"],
    "link": "https://github.com/samridhsri/Ticket-Booking-System"
  },
  {
    "title": "Semantic Image Segmentation of Breast Cancer using UNET",
    "description": "Implemented UNet using Tensorflow, trained the model on a publicly available dataset of 1578 images. Achieved accuracy of 97.91% and mean IOU score of 0.8341",
    "tools": ["TensorFlow", "UNet", "Computer Vision", "Python", "OpenCV"]
  },
  {
    "title": "WhatsApp Chat Analyzer",
    "description": "App analyses and evaluates exported WhatsApp chats then provides an insight.",
    "tools": ["Python", "Pandas","NumPy"]
  }
];

const ProjectsComp = () => {
  return (
    <div>
      <h3 className="title">Projects 🚀<span className="subtitle">(Some of the cool things I built 🛠️)</span></h3>
      <div className="container">
        {projects.map((project, index) => (
          <a className="projectLink" href={project.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className="projectBox">
              <div className="projectTitle">
                <h5 className="projectTitleText">{project.title}</h5>
              </div>
              <p className="date">{project.date}</p>
              <div className="projectDescription">
                <p className="projectDescriptionContent">{project.description}</p>
              </div>
              <div className="projectTools">
                <div className="toolContainer">
                  {project.tools.map((tool, toolIndex) => (
                    <div className="tool" key={toolIndex}>{tool}</div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComp;
