function Projects() {
  const projects = [
    {
      number: "01",
      category: "BUSINESS WEBSITE",
      title: "Glow Beauty Studio",
      description:
        "A premium beauty studio website created to give the business a polished online presence, showcase services and make it easy for customers to get in touch.",
      tags: ["React", "Responsive Design", "UI Design"],
      liveLink: "https://glow-beauty-studio-pi.vercel.app/",
      githubLink: "https://github.com/harini911ch/glow-beauty-studio",
      previewClass: "beauty-project",
      type: "beauty",
    },

    {
      number: "02",
      category: "CAFÉ WEBSITE",
      title: "Brew & Bean Café",
      description:
        "An interactive café website featuring menu categories, shopping cart functionality, GST calculation, bill generation and order confirmation.",
      tags: ["React", "JavaScript", "Interactive UI"],
      liveLink: "https://brew-bean-cafe-rho.vercel.app/",
      githubLink: "https://github.com/harini911ch/brew-bean-cafe",
      previewClass: "cafe-project",
      type: "cafe",
    },

    {
      number: "03",
      category: "FULL-STACK APPLICATION",
      title: "VertexLearn AI",
      description:
        "A full-stack learning management platform with authentication, role-based access, course management, modules, lectures and an AI service.",
      tags: ["React", "Node.js", "PostgreSQL"],
      liveLink: null,
      githubLink: "https://github.com/harini911ch/vertexlearn-ai",
      previewClass: "vertex-project",
      type: "vertex",
    },

    {
      number: "04",
      category: "FULL-STACK APPLICATION",
      title: "PickSmart AI",
      description:
        "An AI-powered comparison platform that helps users compare ride and food delivery options, identify the best choice based on price and speed, and receive useful surge alerts.",
      tags: ["React", "Node.js", "Express"],
      liveLink: null,
githubLink: "https://github.com/harini911ch/pickSmart-AI-cost-Comparision",
      previewClass: "picksmart-project",
      type: "picksmart",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div>
          <p className="section-label">SELECTED WORK</p>

          <h2>
            Work that speaks
            <br />
            <span>for itself.</span>
          </h2>
        </div>

        <p className="projects-intro">
          A selection of websites and applications I've built,
          combining thoughtful design with practical functionality.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            className={`project-showcase ${
              index % 2 !== 0 ? "project-reverse" : ""
            }`}
            key={project.number}
          >
            <div
              className={`project-visual ${project.previewClass}`}
            >
              {project.type === "beauty" && (
                <div className="beauty-ui">
                  <div className="beauty-ui-nav">
                    <span>GLOW</span>

                    <div>
                      <span>Home</span>
                      <span>Services</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  <div className="beauty-ui-content">
                    <small>WELCOME TO</small>
                    <strong>GLOW</strong>
                    <span>BEAUTY STUDIO</span>

                    <button type="button">
                      Explore Services
                    </button>
                  </div>
                </div>
              )}

              {project.type === "cafe" && (
                <div className="cafe-ui">
                  <div className="cafe-ui-nav">
                    <strong>BREW & BEAN</strong>
                    <span>☰</span>
                  </div>

                  <div className="cafe-ui-content">
                    <small>FRESHLY BREWED</small>

                    <h3>
                      Good coffee.
                      <br />
                      Good moments.
                    </h3>

                    <div className="cafe-ui-button">
                      View Menu
                    </div>
                  </div>

                  <div className="cafe-ui-menu">
                    <span>☕</span>
                    <span>🍰</span>
                    <span>🥐</span>
                  </div>
                </div>
              )}

              {project.type === "vertex" && (
                <div className="vertex-ui">
                  <div className="vertex-sidebar">
                    <strong>V</strong>
                    <span>⌂</span>
                    <span>▣</span>
                    <span>◫</span>
                    <span>⚙</span>
                  </div>

                  <div className="vertex-content">
                    <div className="vertex-top">
                      <span>Dashboard</span>
                      <span>●</span>
                    </div>

                    <div className="vertex-welcome">
                      <small>WELCOME BACK</small>

                      <h3>
                        Keep learning.
                        <br />
                        Keep building.
                      </h3>
                    </div>

                    <div className="vertex-stats">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              )}

              {project.type === "picksmart" && (
  <div className="picksmart-ui">
    <div className="picksmart-header">
      <div className="picksmart-brand">
        <div className="picksmart-brand-icon">✦</div>

        <div>
          <strong>PickSmart</strong>
          <small>AI COMPARISON</small>
        </div>
      </div>

      <div className="picksmart-header-status">
        <span></span>
        Live
      </div>
    </div>

    <div className="picksmart-title">
      <small>SMARTER CHOICES. BETTER PRICES.</small>

      <h3>
        Compare.
        <br />
        <span>Choose smarter.</span>
      </h3>
    </div>

    <div className="picksmart-switch">
      <div className="picksmart-switch-item active">
        🚗
        <span>Rides</span>
      </div>

      <div className="picksmart-switch-item">
        🍔
        <span>Food</span>
      </div>
    </div>

    <div className="picksmart-results">
      <div className="picksmart-result best">
        <div className="result-left">
          <div className="result-icon">U</div>

          <div>
            <strong>Uber</strong>
            <small>12 min · 4.8 km</small>
          </div>
        </div>

        <div className="result-price">
          <strong>₹118</strong>
          <small>BEST VALUE</small>
        </div>
      </div>

      <div className="picksmart-result">
        <div className="result-left">
          <div className="result-icon ola">O</div>

          <div>
            <strong>Ola</strong>
            <small>15 min · 4.8 km</small>
          </div>
        </div>

        <div className="result-price">
          <strong>₹132</strong>
          <small>+ ₹14</small>
        </div>
      </div>

      <div className="picksmart-result">
        <div className="result-left">
          <div className="result-icon rapido">R</div>

          <div>
            <strong>Rapido</strong>
            <small>18 min · 4.8 km</small>
          </div>
        </div>

        <div className="result-price">
          <strong>₹142</strong>
          <small>+ ₹24</small>
        </div>
      </div>
    </div>

    <div className="picksmart-insight">
      <span>✦</span>

      <div>
        <strong>AI Recommendation</strong>
        <small>
          Uber saves ₹24 compared with the highest option.
        </small>
      </div>

      <b>✓</b>
    </div>

    <div className="picksmart-bottom">
      <span>POWERED BY SMART COMPARISON</span>
      <span>PRICE · SPEED · VALUE</span>
    </div>
  </div>
)}

              <div className="project-number-large">
                {project.number}
              </div>
            </div>

            <div className="project-info">
              <div className="project-info-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-main-link"
                  >
                    Live Website
                    <span>↗</span>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer">
        <span>MORE PROJECTS COMING SOON</span>

        <a
          href="https://github.com/harini911ch"
          target="_blank"
          rel="noreferrer"
        >
          Explore GitHub
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;