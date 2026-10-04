
function Skills() {
  const skills = [
    {
      name: "React",
      category: "FRONTEND",
    },
    {
      name: "JavaScript",
      category: "FRONTEND",
    },
    {
      name: "HTML / CSS",
      category: "FRONTEND",
    },
    {
      name: "Node.js",
      category: "BACKEND",
    },
    {
      name: "Express",
      category: "BACKEND",
    },
    {
      name: "Java",
      category: "BACKEND",
    },
    {
      name: "Spring Boot",
      category: "BACKEND",
    },
    {
      name: "PostgreSQL",
      category: "DATABASE",
    },
    {
      name: "SQL",
      category: "DATABASE",
    },
    {
      name: "Git / GitHub",
      category: "TOOLS",
    },
    {
      name: "Docker",
      category: "TOOLS",
    },
    {
      name: "REST APIs",
      category: "TOOLS",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-top">
        <div>
          <p className="section-label">MY TOOLKIT</p>

          <h2>
            Technologies I use
            <br />
            <span>to bring ideas to life.</span>
          </h2>
        </div>

        <div className="skills-counter">
          <strong>12+</strong>
          <span>TECHNOLOGIES<br />& TOOLS</span>
        </div>
      </div>

      <div className="skills-intro">
        <p>
          I work across the frontend and backend to create
          responsive websites, interactive applications and
          practical digital solutions.
        </p>
      </div>

      <div className="skills-cloud">
        {skills.map((skill, index) => (
          <div
            className={`skill-item ${
              index === 0 ? "skill-featured" : ""
            }`}
            key={skill.name}
          >
            <span className="skill-category">
              {skill.category}
            </span>

            <span className="skill-name">
              {skill.name}
            </span>

            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>

      <div className="skills-bottom">
        <span>ALWAYS LEARNING</span>

        <div className="skills-line"></div>

        <span>ALWAYS BUILDING</span>
      </div>
    </section>
  );
}

export default Skills;

