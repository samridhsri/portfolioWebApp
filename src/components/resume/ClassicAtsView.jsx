import React from "react";
import {
  resumeProfile,
  experiences,
  education,
  researchPublication,
  roleTracks,
} from "../../data/resumeData";
import { projects } from "../../data/portfolioData";

const ClassicAtsView = ({ activeRole }) => {
  const currentRole = roleTracks.find((r) => r.id === activeRole) || roleTracks[0];

  // Specific project selections for ATS representation based on active role
  const selectedProjectIds =
    activeRole === "ai-engineer"
      ? ["ai-research-intelligence-platform", "triage-ai-productivity-agent", "llm-inference-optimizer"]
      : activeRole === "ml-engineer"
      ? ["plant-disease", "llm-inference-optimizer", "roberta-lora"]
      : activeRole === "sde"
      ? ["f1-telemetry", "ai-research-intelligence-platform", "triage-ai-productivity-agent"]
      : activeRole === "data-engineer"
      ? ["ai-research-intelligence-platform", "f1-telemetry"]
      : activeRole === "data-scientist"
      ? ["llm-inference-optimizer", "f1-telemetry"]
      : ["ai-research-intelligence-platform", "llm-inference-optimizer", "f1-telemetry"];

  const atsProjects = projects.filter((p) => selectedProjectIds.includes(p.id));

  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 sm:p-10 rounded-2xl shadow-[var(--glass-shadow)] max-w-4xl mx-auto space-y-8 font-sans text-[var(--text-primary)] print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
      {/* ATS Header */}
      <div className="text-center space-y-2 border-b border-[var(--border-subtle)] pb-6 print:border-black print:pb-3">
        <h1 className="text-3xl font-bold tracking-tight uppercase font-mono print:text-2xl">
          {resumeProfile.name}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--text-secondary)] print:text-black">
          <span>{resumeProfile.email}</span>
          <span>&bull;</span>
          <span>{resumeProfile.location}</span>
          <span>&bull;</span>
          <a href={resumeProfile.linkedin} target="_blank" rel="noreferrer" className="underline">
            LinkedIn
          </a>
          <span>&bull;</span>
          <a href={resumeProfile.github} target="_blank" rel="noreferrer" className="underline">
            GitHub
          </a>
          <span>&bull;</span>
          <a href={resumeProfile.portfolio} target="_blank" rel="noreferrer" className="underline">
            Portfolio
          </a>
        </div>
        <p className="text-xs font-mono font-medium text-[var(--accent-primary)] print:text-black italic pt-1">
          {currentRole.title}
        </p>
        <p className="text-[11px] font-mono text-[var(--text-tertiary)] print:text-gray-700">
          {resumeProfile.workAuthorization}
        </p>
      </div>

      {/* SECTION: EDUCATION */}
      <section className="space-y-3">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-[var(--border-color)] pb-1 text-[var(--accent-primary)] print:text-black print:border-black">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="space-y-1 text-xs font-mono">
              <div className="flex justify-between items-baseline flex-wrap font-semibold">
                <span className="text-[var(--text-primary)] print:text-black">{edu.institution}, {edu.location}</span>
                <span className="text-[var(--text-tertiary)] print:text-black">{edu.period}</span>
              </div>
              <div className="flex justify-between items-baseline flex-wrap">
                <span className="italic text-[var(--text-secondary)] print:text-black">{edu.degree} ({edu.gpa})</span>
              </div>
              {edu.id === "nyu-tandon" && (
                <p className="text-[11px] text-[var(--text-secondary)] print:text-black pt-0.5">
                  &bull; Student Caller (Engagement Ambassador), NYU Phonathon &ndash; Engaged alumni and donors to raise funds for campus initiatives.
                </p>
              )}
              {edu.id === "muj-btech" && (
                <p className="text-[11px] text-[var(--text-secondary)] print:text-black pt-0.5">
                  &bull; Honors: Dean's List Award x2, Highest Junior Year GPA (9.86 / 10.00) &bull; Developed MUJ Convocation Portal used by 2,000+ students.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: SKILLS */}
      <section className="space-y-2">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-[var(--border-color)] pb-1 text-[var(--accent-primary)] print:text-black print:border-black">
          Technical Skills
        </h2>
        <div className="space-y-1 text-xs font-mono text-[var(--text-secondary)] print:text-black leading-relaxed">
          <p>
            <strong className="text-[var(--text-primary)] print:text-black">Programming &amp; Core:</strong> Python, SQL, C++, JavaScript, TypeScript, Java, Bash, DSA, OOP, System Design
          </p>
          <p>
            <strong className="text-[var(--text-primary)] print:text-black">AI &amp; Machine Learning:</strong> PyTorch, Transformers, LangGraph, LangChain, RAG, Multimodal VLMs, GGUF Quantization, LoRA/PEFT, ONNX Runtime, Hugging Face, OpenCV, YOLOv8
          </p>
          <p>
            <strong className="text-[var(--text-primary)] print:text-black">Data &amp; Distributed Systems:</strong> Apache Kafka, Apache Spark, PySpark, PostgreSQL (pgvector), Redis / RQ, MongoDB, Ray, FAISS
          </p>
          <p>
            <strong className="text-[var(--text-primary)] print:text-black">Backend &amp; DevOps:</strong> FastAPI, Flask, Node.js, Docker, Kubernetes, AWS, Terraform, CI/CD, GitHub Actions, MLflow, Prometheus, Grafana
          </p>
        </div>
      </section>

      {/* SECTION: EXPERIENCE */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-[var(--border-color)] pb-1 text-[var(--accent-primary)] print:text-black print:border-black">
          Professional Experience
        </h2>
        <div className="space-y-5">
          {experiences.map((exp) => {
            const relevantBullets = exp.bullets.filter(
              (b) => activeRole === "all" || b.roles.includes(activeRole)
            );
            const bulletsToRender =
              relevantBullets.length > 0 ? relevantBullets : exp.bullets;

            return (
              <div key={exp.id} className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between items-baseline flex-wrap font-semibold">
                  <span className="text-sm text-[var(--text-primary)] print:text-black">{exp.company}</span>
                  <span className="text-[var(--text-tertiary)] print:text-black">{exp.location}</span>
                </div>
                <div className="flex justify-between items-baseline flex-wrap italic text-[var(--accent-secondary)] print:text-black">
                  <span>{exp.role}</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[var(--text-secondary)] print:text-black leading-relaxed">
                  {bulletsToRender.map((b, idx) => (
                    <li key={idx}>{b.text}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: PROJECTS & PUBLICATIONS */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-[var(--border-color)] pb-1 text-[var(--accent-primary)] print:text-black print:border-black">
          Selected Projects &amp; Publications
        </h2>
        <div className="space-y-4">
          {atsProjects.map((proj) => (
            <div key={proj.id} className="space-y-1 text-xs font-mono">
              <div className="flex justify-between items-baseline flex-wrap font-semibold">
                <span className="text-sm text-[var(--text-primary)] print:text-black">{proj.title}</span>
                <span className="text-[11px] text-[var(--text-tertiary)] print:text-black">{proj.tags.slice(0, 5).join(", ")}</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-[var(--text-secondary)] print:text-black leading-relaxed">
                {proj.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Publication Entry */}
          <div className="space-y-1 text-xs font-mono pt-2 border-t border-[var(--border-subtle)] print:border-black">
            <div className="flex justify-between items-baseline flex-wrap font-semibold">
              <span className="text-[var(--text-primary)] print:text-black">Publication: {researchPublication.title}</span>
              <span className="text-[var(--text-tertiary)] print:text-black">{researchPublication.year}</span>
            </div>
            <p className="text-[var(--text-secondary)] print:text-black">
              {researchPublication.authors} &bull; <em>{researchPublication.venue}</em>. DOI:{" "}
              <a href={researchPublication.doiUrl} target="_blank" rel="noreferrer" className="underline">
                {researchPublication.doi}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassicAtsView;
