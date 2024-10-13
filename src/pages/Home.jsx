import React from "react";
import css from "../stylesheets/home.css";
import Navbar from "../components/navbar";
import ExperienceComp from "../components/experienceComp";
import ProjectsComp from "../components/projectsComp";
import PublicationsComp from "../components/PublicationComp";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";




const Home = () => {
    return (
        <>

            <section>
                <div className="flex">
                    <div className="navbarBox">
                        <Navbar />
                    </div>
                    {/* <div className="blankSpaceLeft"></div> */}
                    <div className="rightBox">
                        <div className="ContentBox">
                            <h3 className="body-name-title" id="homeSection">Hey! I'm Samridh 👋<br /><span id="job">Computer Engineering Student</span></h3>
                            <div className="buttonsUnderName">
                            <a href="https://drive.google.com/file/d/1etkUGspYqZiKjK9czQMgz5bzU8Ai5NWb/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                <button id="resumeBtn" className="btn"><IoDocumentText className="icons" /> Resume</button>
                                </a>
                                <a href="https://www.linkedin.com/in/samridh-srivastava-a6b888ba/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn"><FaLinkedin className="icons" /> LinkedIn</button>
                                </a>
                                <a href="https://github.com/samridhsri" target="_blank" rel="noopener noreferrer">
                                    <button className="btn"><FaGithub className="icons" /> Github</button>
                                </a>
                                <a href="mailto:samridh@gmail.com">
                                    <button className="btn"><IoMdMail className="icons" /> Mail</button>
                                </a>
                            </div>
                            <div id="line"></div>
                            <div>

                                <p className="body-subline">Hey! I'm Samridh Srivastava, a <span style={{ fontWeight: "600", color: "white" }}>full-stack developer</span> with experience in <span style={{ fontWeight: "600", color: "white" }}>React</span>, <span style={{ fontWeight: "600", color: "white" }}>VueJS</span>, <span style={{ fontWeight: "600", color: "white" }}>Flask</span>, and <span style={{ fontWeight: "600", color: "white" }}>MongoDB</span>.
                                    Over the last few years, I’ve worked on diverse projects, including developing web portals and Ticket Management Systems. My journey in tech has also led me to explore<span style={{ fontWeight: "600", color: "white" }}> advanced machine learning techniques </span>, where I’ve worked with <span style={{ fontWeight: "600", color: "white" }}>Large Language Models</span>, <span style={{ fontWeight: "600", color: "white" }}>fine-tuning transformers</span>, and integrating them with real-time web applications.
                                    <br /><br />

                                    Currently, I’m pursuing my <span style={{ fontWeight: "600", color: "white" }}>M.S. in Computer Engineering at NYU</span>, where I’m expanding my expertise in Computers. When I’m not immersed in coding, I enjoy playing Video Games, Watching Movies/TV Series, or just relaxing, always thinking of the next big project.</p>
                            </div>


                            <section id="experienceSection">
                                <ExperienceComp></ExperienceComp>

                            </section>
                            <section id="projectsSection">
                                <ProjectsComp />

                            </section>

                            <section id="publicationSection">
                                <PublicationsComp />

                            </section>
                        </div>


                    </div>
                    {/* <div className="blankSpaceRight"></div> */}


                </div>

            </section>
        </>
    )
}

export default Home;