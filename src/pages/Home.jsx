import { useState, useEffect } from "react";
import "../stylesheets/portfolio.css";
import PuzzlePiece from "../components/portfolio/PuzzlePiece";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectDetail from "../components/portfolio/ProjectDetail";
import AboutSection from "../components/portfolio/AboutSection";
import ResumeSection from "../components/portfolio/ResumeSection";
import ThemeToggle from "../components/portfolio/ThemeToggle";
import { projects } from "../data/portfolioData";

const getPuzzlePositions = (section) => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const positions = {
    home: [
      { id: 1, x: 100, y: 200, size: 120 },
      { id: 2, x: w - 200, y: 150, size: 100 },
      { id: 3, x: 200, y: h - 250, size: 90 },
      { id: 4, x: w - 150, y: h - 200, size: 110 },
      { id: 5, x: w / 2 - 50, y: 100, size: 85 },
      { id: 6, x: 50, y: h / 2, size: 95 },
      { id: 7, x: w - 250, y: h / 2 + 100, size: 105 },
    ],
    about: [
      { id: 1, x: w - 180, y: 250, size: 120 },
      { id: 2, x: 120, y: 180, size: 100 },
      { id: 3, x: w - 220, y: h - 300, size: 90 },
      { id: 4, x: 180, y: h - 180, size: 110 },
      { id: 5, x: w / 2 + 100, y: 120, size: 85 },
      { id: 6, x: w - 100, y: h / 2 - 50, size: 95 },
      { id: 7, x: 250, y: h / 2 + 100, size: 105 },
    ],
  };

  return positions[section] || positions.home;
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [currentPuzzles, setCurrentPuzzles] = useState(() =>
    getPuzzlePositions("home")
  );

  useEffect(() => {
    if (activeSection === "home" || activeSection === "about") {
      setCurrentPuzzles(getPuzzlePositions(activeSection));
    }
    setAnimationKey((prev) => prev + 1);
  }, [activeSection]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setActiveSection("project-detail");
  };

  return (
    <div className="min-h-screen grid-bg relative">
      {/* Puzzle Pieces Background */}
      {currentPuzzles.map((piece) => (
        <PuzzlePiece
          key={piece.id}
          id={piece.id}
          initialX={piece.x}
          initialY={piece.y}
          size={piece.size}
          isMoving={true}
        />
      ))}

      {/* Puzzle Tagline */}
      <div className="puzzle-tagline">
        "Every interface is a puzzle. I enjoy solving the hard parts."
      </div>

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Content Sections */}
        <div className="container mx-auto px-8 py-16">
          {activeSection === "home" && (
            <div className="max-w-4xl mx-auto space-y-12" key={animationKey}>
              <HeroSection setActiveSection={setActiveSection} />

              {/* Projects Section */}
              <h3 className="bakbak text-5xl text-center mt-16" style={{ color: 'var(--accent-primary)', textShadow: '0 0 20px var(--accent-glow)' }}>
                PROJECTS
              </h3>

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    onSelect={handleProjectSelect}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSection === "about" && <AboutSection />}

          {activeSection === "resume" && <ResumeSection />}

          {activeSection === "project-detail" && selectedProject && (
            <ProjectDetail
              project={selectedProject}
              onBack={() => setActiveSection("home")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
