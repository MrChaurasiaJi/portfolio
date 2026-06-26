import useInView from "../hooks/useInView";
import useTilt from "../hooks/useTilt";

/* map of tech names → emoji icons for visual richness */
const TECH_ICONS = {
  Java: "☕",
  JavaFX: "🖥",
  MySQL: "🛢",
  Maven: "📦",
  "Apache POI": "📊",
  PDFBox: "📄",
  RSA: "🔐",
  AES: "🔑",
  Sockets: "🔌",
  "Node.js": "🟢",
  Express: "⚡",
  JavaScript: "✦",
  JSON: "{ }",
  Python: "🐍",
  OpenCV: "👁",
  MediaPipe: "🤖",
  PyAutoGUI: "🖱",
};

export default function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.15);
  const { ref: tiltRef, onMove, onLeave } = useTilt();

  const setRefs = (el) => {
    ref.current = el;
    tiltRef.current = el;
  };

  return (
    <article
      ref={setRefs}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`project-card ${inView ? "in-view" : ""}`}
      style={{
        transitionDelay: `${index * 70}ms`,
        "--glow": project.glow,
      }}
    >
      <div className="project-spotlight" aria-hidden="true" />

      <div className="project-head">
        <span className="project-id">{project.id}</span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          view source <i className="arrow">&#8599;</i>
        </a>
      </div>

      <h3 className="project-name">{project.name}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-desc">{project.description}</p>
      <p className="project-role">{project.role}</p>

      <div className="project-stack">
        {project.stack.map((s) => (
          <span key={s} className="chip" style={{ "--chip-glow": project.glow }}>
            <span className="chip-icon">{TECH_ICONS[s] || "•"}</span>
            <span className="chip-label">{s}</span>
          </span>
        ))}
      </div>

      <div className="project-border" aria-hidden="true" />
    </article>
  );
}
