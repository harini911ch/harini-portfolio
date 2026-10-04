
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-number">
        01
      </div>

      <div className="about-heading">
        <p className="section-label">ABOUT ME</p>

        <h2>
          Building with purpose,
          <br />
          <span>not just pixels.</span>
        </h2>
      </div>

      <div className="about-main">
        <div className="about-intro">
          <p className="about-large-text">
            I'm Harini, a web developer focused on creating
            <strong> modern digital experiences</strong> that
            look good, work smoothly and help businesses grow.
          </p>

          <p className="about-text">
            I enjoy turning ideas into clean, responsive websites
            and practical web applications. My approach combines
            thoughtful design with solid frontend development and
            a growing full-stack skill set.
          </p>

          <a href="#contact" className="about-link">
            Let's build something together
            <span>↗</span>
          </a>
        </div>

        <div className="about-details">
          <div className="about-detail">
            <span className="detail-number">01</span>

            <div>
              <h3>Think</h3>
              <p>
                Understand the idea, audience and goals before
                writing the first line of code.
              </p>
            </div>
          </div>

          <div className="about-detail">
            <span className="detail-number">02</span>

            <div>
              <h3>Build</h3>
              <p>
                Turn the idea into a responsive and intuitive
                digital experience.
              </p>
            </div>
          </div>

          <div className="about-detail">
            <span className="detail-number">03</span>

            <div>
              <h3>Refine</h3>
              <p>
                Polish the details, test the experience and make
                sure everything feels right.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <span>REACT</span>
        <span>JAVASCRIPT</span>
        <span>NODE.JS</span>
        <span>POSTGRESQL</span>
        <span>UI / UX</span>
      </div>
    </section>
  );
}

export default About;

