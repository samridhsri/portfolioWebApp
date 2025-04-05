import React from "react";
import css from "../stylesheets/projectsComp.css";

const projects = [
  {
    title: "Enhanced ResNet for CIFAR-10 Classification",
    date: "2024",
    description:
      "Developed an optimized ResNet-based architecture integrating SE attention and MixCut augmentations. Achieved 96.19% accuracy with 4.79M parameters.",
    tools: ["PyTorch", "SE Attention", "Cosine Annealing", "CIFAR-10"],
    link: "https://github.com/samridhsri/DL-Project-1-Cifar10-Classification-Using-Resnet",
  },
  {
    title: "Urban Sustainability Calculator",
    date: "2024",
    description:
      "Built a real-time AI-powered sustainability tool analyzing environmental, economic, and social factors using OpenStreetMap and Google Gemini.",
    tools: ["Next.js", "Tailwind CSS", "React-Leaflet", "Flask"],
    link: "https://github.com/ranjan2601/Urban-Sustainability-Calculator",
  },
  {
    title: "Semantic Image Segmentation of Breast Cancer using UNET",
    date: "2023",
    description:
      "Designed a U-Net model trained on 1578 breast ultrasound images. Achieved 97.91% accuracy and IOU of 0.8341 using TensorFlow.",
    tools: ["TensorFlow", "UNet", "Computer Vision", "Python", "OpenCV"],
  },
  {
    title: "WhatsApp Chat Analyzer",
    date: "2023",
    description:
      "Analyzed 500K+ messages to extract 30+ metrics including emojis, peak activity hours, and sentiment trends. Visualized via Matplotlib.",
    tools: ["Python", "Pandas", "NumPy", "Seaborn"],
  },
  {
    title: "Campus Ticket Hub",
    date: "2023",
    description:
      "Built a full-stack system for event ticketing with user auth, PDF generation, and booking analytics.",
    tools: ["VueJS", "Flask", "SQLite3", "Redis", "Celery"],
    link: "https://github.com/samridhsri/Ticket-Booking-System",
  },
  {
    title: "Manipal Convocation Portal",
    date: "2022",
    description:
      "Live deployment used for convocation registrations. Built with React, Firebase, and MongoDB, integrated Hostinger's email API.",
    tools: ["React", "Firebase", "MongoDB", "Twilio"],
    link: "https://mujconvocation.in",
  },
];

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
