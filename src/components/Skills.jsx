import { useEffect, useRef, useState } from "react";
import SKILLS, { SKILL_CATEGORIES } from "../data/skills";

function BouncingIcon({ Icon, color }) {
  const iconRef = useRef(null);
  const requestRef = useRef(null);
  const physicsRef = useRef({
    x: Math.random() * 50 + 20, 
    y: Math.random() * 50 + 20, 
    vx: (Math.random() > 0.5 ? 1 : -1) * (0.4 + Math.random() * 0.4), 
    vy: (Math.random() > 0.5 ? 1 : -1) * (0.4 + Math.random() * 0.4), 
  });

  useEffect(() => {
    const updatePhysics = () => {
      const iconElem = iconRef.current;
      if (!iconElem) return;

      const parent = iconElem.parentElement; 
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const iconRect = iconElem.getBoundingClientRect();

      const p = physicsRef.current;

      let nextX = p.x + p.vx;
      let nextY = p.y + p.vy;

      const maxX = parentRect.width - iconRect.width;
      const maxY = parentRect.height - iconRect.height;

      if (nextX <= 0) {
        nextX = 0;
        p.vx = -p.vx;
      } else if (nextX >= maxX) {
        nextX = maxX;
        p.vx = -p.vx;
      }

      if (nextY <= 0) {
        nextY = 0;
        p.vy = -p.vy;
      } else if (nextY >= maxY) {
        nextY = maxY;
        p.vy = -p.vy;
      }

      p.x = nextX;
      p.y = nextY;

      iconElem.style.transform = `translate(${p.x}px, ${p.y}px)`;

      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    requestRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={iconRef}
      className="skill-bg-icon-wrapper"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
        willChange: "transform",
      }}
    >
      <Icon className="skill-bg-icon" style={{ color }} />
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title center">Technical Skills</h2>

      <div className="skills-groups">
        {SKILL_CATEGORIES.map((category) => {
          const categorySkills = SKILLS.filter(
            (skill) => skill.category === category.name
          );

          return (
            <div key={category.name} className="skill-category">
              {/* Category Header */}
              <div
                className="category-header"
                style={{
                  "--glow": category.glow,
                }}
              >
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>

              {/* Skills Grid */}
              <div className="skills-grid">
                {categorySkills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="skill-card"
                      style={{
                        "--skill-color": skill.color,
                      }}
                    >
                      {Icon && <BouncingIcon Icon={Icon} color={skill.color} />}

                      {/* Main Content */}
                      <div className="skill-content">
                        <div className="skill-top">
                          <h4>{skill.name}</h4>
                          <span className="skill-level">{skill.level}%</span>
                        </div>

                        <div className="skill-progress">
                          <div
                            className="skill-progress-fill"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          />
                        </div>

                        <p>{skill.desc || "Proficiency Level"}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}