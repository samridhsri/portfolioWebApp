import React from "react";
import '../stylesheets/navbar.css'; 
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
// import { SiAboutdotme } from "react-icons/si";
import { PiNewspaperDuotone } from "react-icons/pi";


const Navbar = () => {
    return(
        <nav>
            <div>
                <ul className="nav">
                    <li>
                        <a href="#homeSection"><FaHome className="icon"/></a>  {/* Home Section */}
                    </li>
                    <li>
                       <a href="#experienceSection"><FaBriefcase className="icon"/></a> {/* Experience Section */}
                    </li>
                    <li>
                       <a href="#projectsSection"><FaLaptopCode className="icon"/></a> {/* Projects Section */}
                    </li>
                    <li>
                       <a href="#publicationSection"><PiNewspaperDuotone className="icon"/></a> {/* Publications Section */}
                    </li>
                    <li>
                        {/* <a href="#aboutSection"><SiAboutdotme className="icon"/></a> About Section */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
