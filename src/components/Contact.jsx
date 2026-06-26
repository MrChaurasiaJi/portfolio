import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-ring" aria-hidden="true">
        <div className="orbit-planet planet-1"></div>
        <div className="orbit-planet planet-2"></div>
        <div className="orbit-planet planet-3"></div>
        <div className="orbit-planet planet-4"></div>
        <div className="orbit-planet planet-5"></div>
        <div className="orbit-planet planet-6"></div>
        <div className="orbit-planet planet-7"></div>
        <div className="orbit-planet planet-8"></div>
      </div>

      <p className="eyebrow center">
        <span className="eyebrow-dot" /> reach.out()
      </p>

      <h2 className="section-title contact-title">
        Let's Build Something Amazing
      </h2>

      <p className="contact-sub">
        Open to internships, collaborations, exciting projects and
        opportunities in software development and AI.
      </p>

      <div className="contact-cards">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/krashnkantchaurasia"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card social-card"
        >
          <div className="social-logo linkedin">
            <FaLinkedin />
          </div>

          <h3>LinkedIn</h3>

          <p>Let's connect professionally</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MrChaurasiaJi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card social-card"
        >
          <div className="social-logo github">
            <FaGithub />
          </div>

          <h3>GitHub</h3>

          <p>Explore my projects & code</p>
        </a>

        {/* Email */}
        <a
          href="mailto:krashnkantxchauraia2007@gmail.com"
          className="contact-card social-card"
        >
          <div className="social-logo email">
            <MdEmail />
          </div>

          <h3>Email</h3>

          <p>Reach me directly</p>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/krashnkant2007"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card social-card"
        >
          <div className="social-logo instagram">
            <FaInstagram />
          </div>

          <h3>Instagram</h3>

          <p>Follow my journey</p>
        </a>
      </div>
    </section>
  );
}