import PROJECTS from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="eyebrow">
          <span className="eyebrow-dot" /> 04 builds, all running code
        </p>
        <h2 className="section-title">Selected work</h2>
      </div>
      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
