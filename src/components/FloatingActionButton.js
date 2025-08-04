import React from 'react';
import { IoDocumentText, IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FloatingActionButtons = () => {
    return (
        <div className="fab-container">
            <a href="https://drive.google.com/file/d/1pbfKBbERbnUQNE_w3dnW1dX-wr_5BF-l/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <button className="fab-button"><IoDocumentText /></button>
            </a>
            <a href="https://www.linkedin.com/in/samridh-srivastava-a6b888ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <button className="fab-button"><FaLinkedin /></button>
            </a>
            <a href="https://github.com/samridhsri" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <button className="fab-button"><FaGithub /></button>
            </a>
            <a href="mailto:samridh@gmail.com" aria-label="Email">
                <button className="fab-button"><IoMail /></button>
            </a>
        </div>
    );
};

export default FloatingActionButtons;