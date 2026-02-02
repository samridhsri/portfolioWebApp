import { experiences, skills, whatsNew } from "../../data/portfolioData";

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Profile Photo Placeholder */}
      <div className="photo-placeholder">
        <span>
          <img src="images/aboutPage/aboutPageImage.jpeg" />
        </span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ color: 'var(--text-secondary)' }}
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ color: 'var(--accent-primary)' }}
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="mailto:ss18906@nyu.edu"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ color: 'var(--accent-primary)' }}
          >
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
          </svg>
        </a>
      </div>

      {/* Bio */}
      <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        <p>
          <span className="bakbak text-2xl" style={{ color: 'var(--text-primary)' }}>Hey! I'm Samridh Srivastava</span>,
          a full-stack developer and machine learning engineer with experience in
          React, Vue.JS, Flask, FastAPI, and MongoDB. I specialize in building
          scalable data pipelines, deploying production ML systems, and creating
          end-to-end AI applications.
        </p>
        <p>
          Over the past year, I've worked on diverse projects including
          developing distributed RAG systems with FAISS and transformer models,
          building real-time data pipelines with Apache Spark and Kafka, and
          optimizing ML inference with ONNX. My experience spans from computer
          vision at Mahindra &amp; Mahindra to NLP and LLM workloads at Course5
          Intelligence.
        </p>
        <p>
          Currently, I'm pursuing my M.S. in Computer Engineering at NYU (CGPA:
          3.83/4.00), where I'm expanding my expertise in distributed systems,
          MLOps, and deep learning. I graduated from Manipal University Jaipur
          with a 9.05/10 CGPA, earning the Dean's List Award twice and achieving
          the highest junior year GPA (9.86/10).
        </p>
        <p>
          When I'm not immersed in coding, I enjoy playing video games, watching
          movies and TV series, or just relaxing while thinking of the next big
          project. I'm passionate about building systems that scale and solving
          complex technical challenges.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h3 className="bakbak text-3xl" style={{ color: 'var(--accent-primary)', textShadow: '0 0 15px var(--accent-glow)' }}>Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <h4 className="font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                {skill.category}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's New */}
      <div className="space-y-4">
        <h3 className="bakbak text-2xl flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
          What's New &#x2728;
        </h3>
        <ul className="space-y-3 text-base" style={{ color: 'var(--text-secondary)' }}>
          {whatsNew.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span>{item.emoji}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Work Experience */}
      <div className="space-y-6">
        <h3 className="bakbak text-3xl" style={{ color: 'var(--accent-primary)', textShadow: '0 0 15px var(--accent-glow)' }}>Work Experience</h3>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 rounded-lg space-y-3"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h4 className="bakbak text-xl" style={{ color: 'var(--text-primary)' }}>{exp.role}</h4>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{exp.company}</p>
              </div>
              <div className="text-right text-sm opacity-80" style={{ color: 'var(--text-tertiary)' }}>
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: 'var(--accent-primary)' }}>&rarr;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
