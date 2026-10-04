import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-number">04</div>

      <div className="contact-heading">
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's make it real.</span>
        </h2>

        <p className="contact-intro">
          Whether you need a new website, a redesign, or a custom
          web application, tell me what you're working on and
          let's talk about how I can help.
        </p>
      </div>

      <div className="contact-main">
        <div className="contact-left">
          <div className="contact-message">
            <span>START A CONVERSATION</span>

            <h3>
              Good projects
              <br />
              start with a
              <br />
              <strong>simple message.</strong>
            </h3>
          </div>

          <div className="contact-links">
            <a
             href="mailto:chittapuramharini@gmail.com"
              className="contact-link"
            >
              <div className="contact-link-icon">@</div>

              <div>
                <span>EMAIL</span>
               <strong>chittapuramharini@gmail.com</strong>
              </div>

              <span className="contact-link-arrow">↗</span>
            </a>

            <a
             href="https://www.linkedin.com/in/harini-ch-4b1b93341"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">in</div>

              <div>
                <span>LINKEDIN</span>
               <strong>View my profile</strong>
              </div>

              <span className="contact-link-arrow">↗</span>
            </a>

            <a
              href="https://github.com/harini911ch"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">&lt;/&gt;</div>

              <div>
                <span>GITHUB</span>
                <strong>View my work</strong>
              </div>

              <span className="contact-link-arrow">↗</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-top">
            <span>PROJECT ENQUIRY</span>
            <span>01 — 04</span>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="project">WHAT DO YOU NEED?</label>

            <select
              id="project"
              name="project"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a project type
              </option>

              <option value="business-website">
                Business Website
              </option>

              <option value="landing-page">
                Landing Page
              </option>

              <option value="portfolio">
                Portfolio Website
              </option>

              <option value="redesign">
                Website Redesign
              </option>

              <option value="web-application">
                Web Application
              </option>

              <option value="other">
                Something else
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">TELL ME ABOUT IT</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me a little about your idea, goals, timeline or anything else that might help..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Send Project Enquiry
            <span>↗</span>
          </button>

          {submitted && (
            <div className="form-success">
              <span>✓</span>
              Thanks! Your enquiry has been submitted successfully.
            </div>
          )}

          <p className="form-note">
            I usually respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;