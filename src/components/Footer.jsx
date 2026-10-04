
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-cta">
          <p className="footer-label">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <a href="#contact" className="footer-cta-button">
            Start a Project
            <span>↗</span>
          </a>
        </div>

        <div className="footer-side">
          <p>
            I create modern, responsive websites and web
            applications for businesses, startups and individuals.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/harini911ch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>

           <a
  href="https://www.linkedin.com/in/harini-ch-4b1b93341"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
  <span>↗</span>
</a>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <a href="#home" className="footer-logo">
          Harini<span>.</span>
        </a>

        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Harini. All rights reserved.
        </p>

        <div>
          <span>DESIGNED & BUILT WITH REACT</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

