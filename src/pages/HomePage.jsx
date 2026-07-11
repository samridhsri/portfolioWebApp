import HeroSection from "../components/portfolio/HeroSection";
import ProjectCard from "../components/portfolio/ProjectCard";
import { projects } from "../data/portfolioData";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <HeroSection />

      {/* Projects Section */}
      <section id="featured-projects" className="space-y-8 scroll-mt-24 pt-4">
        <div className="text-center space-y-3">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border backdrop-blur-md"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--accent-primary)',
              boxShadow: '0 0 16px var(--accent-glow-subtle)'
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_6px_var(--accent-primary)]" />
            <span>FEATURED SYSTEMS</span>
            <span>&bull;</span>
            <span>{projects.length} ARCHITECTURES</span>
          </div>

          <h2
            className="font-display text-3xl sm:text-5xl tracking-wide"
            style={{
              color: "var(--text-primary)",
              textShadow: "0 0 24px var(--accent-glow-subtle)",
            }}
          >
            PRODUCTION SYSTEMS
          </h2>

          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Selected machine learning architectures, distributed backend pipelines, and full-stack applications engineered for resilience, low latency, and deterministic scale.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
