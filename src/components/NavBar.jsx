import { useState, useEffect } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* highlight the nav link for the section currently in viewport */
  useEffect(() => {
    const ids = ["work", "skills", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = ["About", "Work", "Skills", "Contact"];

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-bracket">{"<"}</span>
          KC
          <span className="nav-brand-bracket">{"/>"}</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`nav-link ${activeSection === l.toLowerCase() ? "nav-link-active" : ""}`}
            >
              {l}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            <span>Let&apos;s talk</span>
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? "bar bar1 open" : "bar bar1"} />
          <span className={open ? "bar bar2 open" : "bar bar2"} />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
