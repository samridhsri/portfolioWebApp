import React from "react";
import css from "../stylesheets/experienceComp.css";

const experiences = [
  {
    title: "Engagement Ambassador - NYU Phonathon",
    date: "Feb 2025 - Present",
    description:
      "Connect with NYU alumni to raise funds for scholarships and university programs. Strengthen alumni relations, promote giving, and build real-world communication and persuasion skills in a team-oriented environment.",
    linkFlag: false,
    link: "",
    tools: [
      "Fundraising",
      "Communication",
      "Persuasion",
      "Relationship Building",
      "Teamwork"
    ]
  },
  {
    title: "Digital And Advanced Analytics Intern",
    date: "Jan 2024 - Aug 2024",
    description:
      "Developed and deployed Web based portals using React. Worked on LLM projects using Retrieval Augmented Generation (RAG) and Vector Databases.",
    linkFlag: false,
    link: "",
    tools: ["Langchain", "Python", "React", "VectorDB", "Weaviate", "GPT", "RAG"]
  },
  {
    title: "Software Intern - Mahindra and Mahindra",
    date: "Sep 2023 - Dec 2023",
    description:
      "Led projects with Python, C, and OpenCV to build smart image recognition tools. Streamlined workflows with data insights and teamed up to launch solutions that hit business goals!",
    linkFlag: false,
    link: "",
    tools: ["Python", "OpenCV", "C#", "PyTorch", "UNet", "Computer Vision"]
  },
  {
    title: "Technical Head - Panacea CCE Club",
    date: "Aug 2022 - Aug 2023",
    description:
      "Organized 10+ events that saw participation skyrocket by 35%! Led an awesome team to create the club's website, making it super engaging and user-friendly. Also, revamped operations to save loads of time and keep the communication flowing smoothly across 20+ members.",
    linkFlag: false,
    link: "",
    tools: [
      "Leadership",
      "Project Management",
      "Team Coordination",
      "Web Development"
    ]
  },
  {
    title: "Video Editor & Technical Lead - TEDxVivekanandSchool, Ethos, and Other School Events",
    date: "2017 - 2019 ",
    description:
      "Handled the technical setups and made some awesome introductory videos for TEDx speakers, ensuring a seamless and engaging experience for the audience. It was an exciting opportunity to blend creativity and technology! Check out some of the videos in the link below",
    linkFlag: true,
    link:
      "https://www.youtube.com/playlist?list=PLV5Ym-bFVBAt8bO2FjKMMjL4lRcAGiLCz",
    tools: [
      "Adobe After Effects",
      "iMovie",
      "Video Editing",
      "Technical Setup",
      "Creativity",
      "Logistics"
    ]
  }
];


const experienceComp = () => {
  return (
    <div>
      <h3 className="title">Experience 💼 <br /> <span className="subtitle">(All the Cool stuff, I learnt along the way ✨)</span></h3>
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
                {experience.linkFlag && (
                  <p>
                    <a className="subtitle" href={experience.link} target="_blank" rel="noopener noreferrer">
                      YouTube Playlist
                    </a>
                  </p>
                )}

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
