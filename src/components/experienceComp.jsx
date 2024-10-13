import React from "react";
import css from "../stylesheets/experienceComp.css";

const experiences = [
  {
    "title": "Digital And Advanced Analytics Intern",
    "date": "Jan 2024 - Aug 2024",
    "description": "Developed and deployed Web based portals using React. Worked on LLM projects using Retrieval Augmented Generation (RAG) and Vector Databases.",
    "tools": ["Langchain", "Python", "React", "VectorDB", "Weaviate", "GPT", "RAG"]
  },
  {
    "title": "Software Intern - Mahindra and Mahindra",
    "date": "Sep 2023 - Dec 2023",
    "description": "Led projects with Python, C, and OpenCV to build smart image recognition tools. Streamlined workflows with data insights and teamed up to launch solutions that hit business goals!",
    "tools": ["Python", "OpenCV", "C#", "PyTorch", "UNet", "Computer Vision"]
  }
  
];

const experienceComp = () => {
  return (
    <div>
      <h3 className="title">Experience 💼<span className="subtitle">(All the Cool stuff, I learnt along the way ✨)</span></h3>
      <div className="container">
        {experiences.map((experience, index) => (
          <div className="experienceBox" key={index}>
            <div className="leftSide">
              <p className="dateExp">{experience.date}</p>
            </div>
            <div className="blankSpace"></div>
            <div className="rightSide">
              <div className="experienceTitle">
                <h5 className="experienceTitleText">{experience.title}</h5>
              </div>
              <div className="experienceDescription">
                <p className="experienceDescriptionContent">
                  {experience.description}
                </p>
              </div>
              <div className="experienceTools">
                <div className="expToolContainer">
                  {experience.tools.map((tool, toolIndex) => (
                    <div className="expTool" key={toolIndex}>{tool}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default experienceComp;
