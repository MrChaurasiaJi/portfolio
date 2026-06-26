import useInView from "../hooks/useInView";
import useTypewriter from "../hooks/useTypewriter";
import TERMINAL_LINES from "../data/terminal";

export default function Hero() {
  const [ref, inView] = useInView(0.1);
  const output = useTypewriter(TERMINAL_LINES, inView);

  return (
    <header className="hero" id="top" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
        <div className="particles" />
      </div>

      <div className="hero-grid">
        <div className={`hero-copy ${inView ? "in-view" : ""}`}>
          <p className="eyebrow">
            <span className="eyebrow-dot" /> portfolio.init()
          </p>

          <h1 className="hero-title">
            <span className="hero-title-line">Krashnkant</span>
            <span className="hero-title-line hero-title-grad">
              Chaurasia
            </span>
          </h1>

          {/* Availability Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Internships
          </div>
          <h2 className="hero-subtitle">Software Developer & CSE Student</h2>
          <p className="hero-sub">
          I love building useful software and web applications. I combine core 
          computer science knowledge with clean coding to solve everyday problems and learn new skills.
        </p>
        

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              <span>🚀 View Projects</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              📃 Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">shipped projects</span>
            </div>

            <div className="stat-divider" />

            <div className="stat">
              <span className="stat-num">2nd</span>
              <span className="stat-label">year B.Tech CSE</span>
            </div>

            <div className="stat-divider" />

            <div className="stat">
              <span className="stat-num">8.23</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>

          
        </div>

        <div className="terminal-wrap">
          <div
            className="terminal"
            role="img"
            aria-label="Terminal animation introducing Krashnkant"
          >
            <div className="terminal-bar">
              <span className="dot dot-red" />
              <span className="dot dot-amber" />
              <span className="dot dot-green" />
              <span className="terminal-title">
                krashnkant@sistec: ~
              </span>
            </div>

            <div className="terminal-body">
              {output.map((line, i) => (
                <div key={i} className="terminal-line">
                  <div>
                    <span className="prompt">
                      guest@portfolio:~$
                    </span>{" "}
                    {line.cmd}

                    {i === output.length - 1 && !line.showOut && (
                      <span className="cursor">_</span>
                    )}
                  </div>

                  {line.showOut && (
                    <div className="terminal-out">
                      {line.out}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="terminal-glow" aria-hidden="true" />
        </div>
      </div>

      <a
        href="#about"
        className="scroll-hint"
        aria-label="Scroll to work section"
      >
        <span className="scroll-hint-line" />
        scroll
      </a>
    </header>
  );
}