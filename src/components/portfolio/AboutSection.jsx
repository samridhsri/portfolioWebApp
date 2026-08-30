import {
  LuLinkedin,
  LuGithub,
  LuMail,
  LuSparkles,
  LuGamepad2,
  LuMusic,
  LuUtensils,
  LuCompass,
  LuLayers,
  LuBrainCircuit,
  LuZap,
  LuRadio,
} from "react-icons/lu";

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Profile Header & Photo */}
      <div className="flex flex-col sm:flex-row items-center gap-8 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] transition-all">
        <div className="relative shrink-0">
          <div className="avatar-halo-glow" aria-hidden="true" />
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[var(--border-color)] relative z-10 shadow-2xl">
            <img
              src="images/aboutPage/aboutPageImage.jpeg"
              alt="Samridh Srivastava portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 text-center sm:text-left flex-1">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-color)] text-[var(--accent-primary)] mb-2"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
              <span>NEW YORK, NY // MS CE @ NYU</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-primary)]">
              Samridh Srivastava
            </h2>
            <p className="text-sm sm:text-base font-mono text-[var(--text-secondary)] mt-1.5 leading-relaxed">
              Engineer building distributed systems, ML pipelines, and tools driven by human curiosity.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start gap-3 pt-1">
            <a
              href="https://www.linkedin.com/in/samridh-srivastava-a6b888ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LuLinkedin className="text-xl" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/samridhsri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <LuGithub className="text-xl" aria-hidden="true" />
            </a>
            <a
              href="mailto:samridh@gmail.com"
              className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2"
              title="Send Email"
              aria-label="Send Email"
            >
              <LuMail className="text-xl" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Narrative: How I Think, Build & Navigate Life */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
        <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--border-subtle)]">
          <LuCompass className="text-[var(--accent-primary)] text-2xl" aria-hidden="true" />
          <h3 className="font-display text-2xl text-[var(--text-primary)]">
            How I Think, Build &amp; Navigate Life
          </h3>
        </div>

        <div className="space-y-4">
          <p>
            I like trying to measure things people usually consider abstract: why Spotify recommends the same songs on repeat, how to map musical taste as graph edges, why game graphics and CGI from 2012 felt better, or whether you can mathematically model luck. I build software to explore those questions and see where the numbers lead.
          </p>

          <p>
            Most new software looks and feels identical right now: minimal dark-mode templates with an LLM slapped on top. I love working with AI, but most workflows do not need a generative model. If a deterministic pipeline, classical machine learning, or a simple data structure solves the problem faster and cheaper, I will always build that instead. I value taste and practical engineering over chasing hype.
          </p>

          <p>
            Peter Parker has always been my favorite character because he deals with real life. He juggles money problems, family stress, and everyday chaos without losing hope or compromising on doing what is right. That resilience drives how I work. Looking ahead, I want to build tools that genuinely improve people&apos;s everyday routines, whether that means working on frontier AI architectures, building at the intersection of music and tech, or designing cognitive productivity software.
          </p>
        </div>
      </div>

      {/* Outside the Code Editor Bento Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <LuSparkles className="text-[var(--accent-primary)] text-2xl" aria-hidden="true" />
          <h3 className="font-display text-2xl text-[var(--text-primary)]">
            Outside the Code Editor
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Gaming */}
          <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] flex flex-col justify-between space-y-4 transition-all duration-200 hover:border-[var(--accent-primary)]">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)] font-semibold flex items-center gap-1.5">
                  <LuGamepad2 className="text-base" aria-hidden="true" />
                  <span>Gaming</span>
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)]">8+ Years</span>
              </div>
              <h4 className="font-display text-lg text-[var(--text-primary)]">
                In the Storm &amp; on the Grid
              </h4>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                Fortnite player since Chapter 1 Season 3. Outside of Battle Royale, I play Rocket League, replay Insomniac&apos;s Spider-Man series, explore Uncharted, or just chill drive across Los Santos in GTA.
              </p>
            </div>
          </div>

          {/* Card 2: Music Rotation */}
          <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] flex flex-col justify-between space-y-4 transition-all duration-200 hover:border-[var(--accent-primary)]">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-secondary)] font-semibold flex items-center gap-1.5">
                  <LuMusic className="text-base" aria-hidden="true" />
                  <span>Sonic Rotation</span>
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)]">Heavy Repeat</span>
              </div>
              <h4 className="font-display text-lg text-[var(--text-primary)]">
                Nostalgia, Synth &amp; Soul
              </h4>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                A mix of 2012–2016 pop, synth RnB, and South Asian melodies. On repeat: Charlie Puth, Coldplay, The Weeknd, Lauv, Troye Sivan, Arijit Singh, Rahat Fateh Ali Khan, and Vishal Mishra.
              </p>
            </div>
          </div>

          {/* Card 3: Habits & Quirks */}
          <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] flex flex-col justify-between space-y-4 transition-all duration-200 hover:border-[var(--accent-primary)]">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-emerald)] font-semibold flex items-center gap-1.5">
                  <LuUtensils className="text-base" aria-hidden="true" />
                  <span>Habits &amp; Quirks</span>
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)]">Offline Stats</span>
              </div>
              <h4 className="font-display text-lg text-[var(--text-primary)]">
                The Human Details
              </h4>
              <ul className="text-xs font-mono space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)]">&bull;</span>
                  <span>Passionate home cook experimenting with new recipes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)]">&bull;</span>
                  <span>Walking Marvel &amp; MCU encyclopedia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)]">&bull;</span>
                  <span>Chronically online &amp; fluent in meme culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)]">&bull;</span>
                  <span>Productivity freak testing Notion setups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)]">&bull;</span>
                  <span>The least athletic person who somehow doesn&apos;t look it</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Focus Areas: What I'm Exploring Next */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-4">
        <div className="flex items-center gap-2.5">
          <LuZap className="text-[var(--accent-primary)] text-xl" aria-hidden="true" />
          <h3 className="font-display text-xl text-[var(--text-primary)]">
            What I&apos;m Exploring &amp; Aspiring to Build
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-1.5 transition-all hover:border-[var(--accent-primary)]">
            <div className="flex items-center gap-2 text-[var(--accent-primary)]">
              <LuBrainCircuit className="text-lg" />
              <h4 className="font-mono text-xs uppercase tracking-wider font-semibold">Frontier AI</h4>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Reasoning architectures, agent orchestration, and systems beyond standard pattern recognition.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-1.5 transition-all hover:border-[var(--accent-secondary)]">
            <div className="flex items-center gap-2 text-[var(--accent-secondary)]">
              <LuRadio className="text-lg" />
              <h4 className="font-mono text-xs uppercase tracking-wider font-semibold">Music + Tech</h4>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Graph-based audio discovery, taste mapping, and algorithmic tools that decode what listeners love.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-1.5 transition-all hover:border-[var(--accent-emerald)]">
            <div className="flex items-center gap-2 text-[var(--accent-emerald)]">
              <LuLayers className="text-lg" />
              <h4 className="font-mono text-xs uppercase tracking-wider font-semibold">Tools for Thought</h4>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Fast, deterministic productivity software that turns messy thoughts into structured execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
