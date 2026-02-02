import { useState, useEffect } from "react";
import HeroSection from "../components/portfolio/HeroSection";
import ProjectCard from "../components/portfolio/ProjectCard";
import { projects } from "../data/portfolioData";

const HomePage = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-12" key={animationKey}>
      <HeroSection />

      {/* Projects Section */}
      <h3
        className="bakbak text-5xl text-center mt-16"
        style={{
          color: "var(--accent-primary)",
          textShadow: "0 0 20px var(--accent-glow)",
        }}
      >
        PROJECTS
      </h3>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
