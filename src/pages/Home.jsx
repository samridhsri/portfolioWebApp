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
                                <a href="https://drive.google.com/file/d/1pbfKBbERbnUQNE_w3dnW1dX-wr_5BF-l/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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

                                {/* <span style={{ fontWeight: "700", color: "white" }}>I am actively seeking exciting Summer Internship opportunities for 2025, where I can apply my skills in full-stack development and advanced machine learning to impactful projects.</span> */}
                            </div>

                            <section id="whatsNewSection">
                                <h3 className="sectionTitle">What's New ✨</h3>
                                <ul className="whatsNewList">
                                    <li><strong>📞 Started a new role</strong> as an Engagement Ambassador at <span style={{ color: "#F39C12" }}>NYU Phonathon</span> – Feb 2025</li>
                                    <li><strong>🧠 Built:</strong> Urban Sustainability Calculator using Next.js + Google Gemini</li>
                                    <li><strong>🧠 Built:</strong> Exploratory Data Analysis on the role of AI in Tech Layoffs</li>
                                    <li><strong>🎓 Just finished:</strong> MLops, Deep Learning, Digital Signal Processing at NYU Tandon – Fall 2024</li>
                                    <li><strong>📣 Currently seeking:</strong> Full-stack or ML Internship for Summer 2025</li>
                                </ul>
                            </section>



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