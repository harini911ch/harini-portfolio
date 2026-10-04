
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-grid-pattern"></div>

      <div className="hero-content">
        <div className="hero-top-line">
          <span></span>
          <p>WEB DEVELOPER · FREELANCER</p>
        </div>

        <h1>
          I turn ideas into
          <br />
          <span>digital experiences.</span>
        </h1>

        <p className="hero-description">
          I design and build modern, responsive websites and
          web applications that help businesses and individuals
          create a stronger presence online.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore My Work
            <span>↗</span>
          </a>

          <a href="#contact" className="secondary-button">
            Let's Work Together
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="meta-number">01</span>
            <span className="meta-label">DESIGN</span>
          </div>

          <div className="hero-meta-item">
            <span className="meta-number">02</span>
            <span className="meta-label">DEVELOP</span>
          </div>

          <div className="hero-meta-item">
            <span className="meta-number">03</span>
            <span className="meta-label">DELIVER</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-main-card">
          <div className="hero-card-glow"></div>

          <div className="hero-card-top">
            <span>PORTFOLIO / 2026</span>

            <span className="availability">
              <i></i>
              AVAILABLE
            </span>
          </div>

          <div className="hero-card-center">
            <div className="hero-monogram">
              H
            </div>

            <div className="hero-card-name">
              <span>CH</span>
              <strong>HARINI</strong>
              <small>WEB DEVELOPER</small>
            </div>
          </div>

          <div className="hero-card-middle">
            <span>CREATIVE</span>
            <span>+</span>
            <span>CODE</span>
          </div>

          <div className="hero-card-bottom">
            <span>REACT</span>
            <span>FULL-STACK</span>
            <span>UI / UX</span>
          </div>
        </div>

        <div className="floating-badge badge-one">
          <span className="badge-dot"></span>
          Responsive
        </div>

        <div className="floating-badge badge-two">
          <span>✦</span>
          Built with React
        </div>

        <div className="hero-side-text">
          <span>CREATIVE</span>
          <span>DEVELOPER</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

