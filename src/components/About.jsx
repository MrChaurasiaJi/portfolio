import useInView from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="section about" id="about" ref={ref}>
      <div className={`about-inner ${inView ? "in-view" : ""}`}>
        <p className="eyebrow">
          <span className="eyebrow-dot" /> about.md
        </p>

        <h2 className="section-title">My Journey</h2>

        <div className="about-card">
  <div className="about-line"></div>

  <div className="about-grid">
    
   <div className="about-content">
  <p className="about-text">
    I'm <strong>Krashnkant Chaurasia</strong>, a Second-Year
    <strong> B.Tech Computer Science and Engineering</strong> student at
    <strong> Sagar Institue of Science Technology and Research, Bhopal</strong>, passionate about technology and
    software development.
  </p>

  <p className="about-text">
    I enjoy building applications, solving problems, and learning how
    modern software systems work. My goal is to create solutions that are
    both practical and impactful.
  </p>

  <p className="about-text">
    I work with <strong>Java, Spring Boot, React, MySQL, C++,</strong>,
    and I enjoy exploring both frontend and backend development to build
    complete, user-friendly applications.
  </p>

  <p className="about-text">
    Currently, I am expanding my knowledge in
    <strong> Artificial Intelligence, Machine Learning, Cloud Computing,</strong>
    and <strong>Full-Stack Development</strong>, while continuously improving
    my technical and problem-solving skills.
  </p>
</div>  

    <div className="about-visual">
  <div className="orbit-container">
    <div className="center-circle">KK</div>

    <div className="orbit-ring orbit-ring-inner"></div>
    <span className="tech inner1">Java</span>
    <span className="tech inner2">C++</span>
    <span className="tech inner3">MySQL</span>
    <span className="tech inner4">OOPs</span>

    <div className="orbit-ring orbit-ring-outer"></div>
    <span className="tech outer1">React</span>
    <span className="tech outer2">JavaFx</span>
    <span className="tech outer3">JavaScript</span>
    <span className="tech outer4">DSA</span>
    
  </div>
</div>

  </div>
</div>

        <div className="about-highlights">
              <div className="highlight-card">
                <span>🎓</span>
                <h4>Education</h4>
                <p><b>B.Tech in Computer Science & Engineering</b><br />Second Year Student</p>
              </div>

              <div className="highlight-card">
                <span>⚡</span>
                <h4>Core Expertise</h4>
                <p>Java Development, Object-Oriented Programming, Database Management</p>
              </div>

              <div className="highlight-card">
                <span>🚀</span>
                <h4>Current Focus</h4>
                <p>Building Full-Stack Applications with React, Spring Boot, and Modern Web Technologies</p>
              </div>

              <div className="highlight-card">
                <span>🎯</span>
                <h4>Career Vision</h4>
                <p>Aspiring Software Engineer passionate about creating scalable and impactful solutions</p>
              </div>
            </div>
      </div>
    </section>
  );
}