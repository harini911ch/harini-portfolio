
function Services() {
  const services = [
    {
      number: "01",
      title: "Business Websites",
      description:
        "Professional websites that give your business a strong online presence and make it easier for customers to discover, understand and contact you.",
      tags: ["Responsive", "Modern UI", "Mobile First"],
    },
    {
      number: "02",
      title: "Landing Pages",
      description:
        "Focused landing pages designed to communicate your product, service or idea clearly and guide visitors toward taking action.",
      tags: ["Fast", "Focused", "Conversion"],
    },
    {
      number: "03",
      title: "Web Applications",
      description:
        "Interactive React applications built around real functionality, intuitive user experiences and clean frontend architecture.",
      tags: ["React", "Interactive", "Scalable"],
    },
    {
      number: "04",
      title: "Website Redesign",
      description:
        "Modern redesigns that improve the visual identity, usability, responsiveness and overall experience of an existing website.",
      tags: ["Modernize", "UX", "Responsive"],
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-top">
        <div>
          <p className="section-label">WHAT I DO</p>

          <h2>
            Digital solutions
            <br />
            <span>built around you.</span>
          </h2>
        </div>

        <p className="services-intro">
          I help businesses and individuals turn ideas into
          professional digital experiences that are practical,
          responsive and easy to use.
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <div className="service-row-number">
              {service.number}
            </div>

            <div className="service-row-main">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="service-arrow">
              ↗
            </div>
          </article>
        ))}
      </div>

      <div className="services-footer">
        <span>HAVE AN IDEA?</span>

        <a href="#contact">
          Let's discuss your project
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Services;

