import { useState } from "react";

const projects = [
  {
    title: "Responsive Web Development Landing Page",
    type: "Web Design",
    description: "A responsive landing page for a fictional digital agency, with semantic HTML, mobile-friendly layouts and JavaScript contact-form confirmation.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://ayindeabdullateef3-coder.github.io/My-first-project/",
    code: "https://github.com/ayindeabdullateef3-coder",
    image: "https://image.thum.io/get/width/1200/crop/720/noanimate/https://ayindeabdullateef3-coder.github.io/My-first-project/",
    alt: "Screenshot of the live Responsive Web Development Landing Page project"
  },
  {
    title: "Calculator App",
    type: "JavaScript",
    description: "An interactive calculator with basic arithmetic, decimal calculations, keyboard support, delete/clear controls, error handling and calculation history.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://ayindeabdullateef3-coder.github.io/Calculator/",
    code: "https://github.com/ayindeabdullateef3-coder",
    image: "https://image.thum.io/get/width/1200/crop/720/noanimate/https://ayindeabdullateef3-coder.github.io/Calculator/",
    alt: "Screenshot of the live Calculator App project"
  },
  {
    title: "Digital Clock",
    type: "JavaScript",
    description: "A real-time digital clock using JavaScript's Date object and setInterval, with clean time formatting and simple, legible styling.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://ayindeabdullateef3-coder.github.io/basic-digital-clock/",
    code: "https://github.com/ayindeabdullateef3-coder",
    image: "https://image.thum.io/get/width/1200/crop/720/noanimate/https://ayindeabdullateef3-coder.github.io/basic-digital-clock/",
    alt: "Screenshot of the live Digital Clock project"
  },
  {
    title: "Personal Portfolio Website",
    type: "Web Design",
    description: "A responsive portfolio with Home, Services, About, Projects and Contact sections, mobile navigation, a contact form and a downloadable CV.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://ayindeabdullateef3-coder.github.io/My-portfolio/",
    code: "https://github.com/ayindeabdullateef3-coder",
    image: "https://image.thum.io/get/width/1200/crop/720/noanimate/https://ayindeabdullateef3-coder.github.io/My-portfolio/",
    alt: "Screenshot of the live Personal Portfolio Website project"
  }
];

const skills = [
  { title: "HTML5", detail: "Semantic structure, forms and accessible markup.", symbol: "</>" },
  { title: "CSS3", detail: "Flexbox, Grid, media queries and responsive layouts.", symbol: "✳" },
  { title: "JavaScript", detail: "DOM manipulation, events, validation and UI behavior.", symbol: "JS" },
  { title: "React", detail: "Components, props, state and rendering interactive UI.", symbol: "⚛" },
  { title: "Git & GitHub", detail: "Version control, repositories and project publishing.", symbol: "⌘" }
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={close}><span className="brand-icon">A</span> Ayinde<span className="blue">.</span></a>
        <button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <div className={`nav-links ${open ? "show" : ""}`}>
          {["About", "Skills", "Projects", "Contact"].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
          )}
          <a className="nav-download" href="/Ayinde-Lateef-CV.docx" download>Download CV ↓</a>
        </div>
      </nav>
    </header>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-preview" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open live project: ${project.title}`}>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement.classList.add("preview-unavailable");
          }}
        />
        <span className="preview-label">LIVE PROJECT PREVIEW</span>
      </a>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>
          <a href={project.code} target="_blank" rel="noreferrer">Source profile ↗</a>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Design", "JavaScript"];
  const visibleProjects = filter === "All" ? projects : projects.filter(project => project.type === filter);

  return (
    <>
      <Header />
      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> OPEN TO JUNIOR ROLES & INTERNSHIPS</div>
            <p className="intro">Hello, I'm</p>
            <h1>Ayinde Lateef<br /><span>Olalekan.</span></h1>
            <h2>Front-End Developer</h2>
            <p className="hero-text">I build responsive, user-friendly websites with HTML, CSS, JavaScript and React—turning ideas into clear, accessible and interactive web experiences.</p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore my work ↗</a>
              <a className="button secondary" href="#contact">Let's connect</a>
            </div>
            <div className="socials">
              <a href="https://github.com/ayindeabdullateef3-coder" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/ayinde-abdullateef-b40ab120b" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:ayindelateef2021@gmail.com">Email ↗</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-card">
              <div className="code-head"><span>● ● ●</span><small>developer.jsx</small></div>
              <pre><code><span className="purple">const</span> developer = {'{'}{"\n"}  name: <span className="green">'Ayinde'</span>,{"\n"}  focus: <span className="green">'Front-end'</span>,{"\n"}  tools: [<span className="yellow">'React'</span>,{"\n"}    <span className="yellow">'JavaScript'</span>],{"\n"}  mindset: <span className="green">'Always learning'</span>{"\n"}{'}'};</code></pre>
              <div className="code-foot">✦ Building one project at a time</div>
            </div>
            <div className="float-note">⚛ React-powered UI</div>
          </div>
        </section>

        <section className="section muted-section" id="about">
          <div className="wrap two-col">
            <div><p className="kicker">01 / ABOUT ME</p><h2>Curious by nature.<br /><span className="blue">Developer by choice.</span></h2></div>
            <div className="about-copy">
              <p className="lead">I'm a self-taught front-end developer who enjoys making the web useful, accessible and easy to navigate.</p>
              <p>My learning is hands-on: I study concepts, apply them to projects and improve through practice. I've built and deployed projects exploring responsive layouts, JavaScript interactions, form handling and user-focused design.</p>
              <p>My Human Anatomy background strengthened my analytical approach to learning and problem-solving. I'm looking for an opportunity to contribute, learn from experienced developers and grow through real-world work.</p>
              <div className="stats"><div><b>04</b><small>Existing live projects</small></div><div><b>05</b><small>Skills highlighted</small></div><div><b>2026</b><small>Degree completed</small></div></div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="skills">
          <div className="section-head"><div><p className="kicker">02 / TOOLKIT</p><h2>Skills I bring <span className="blue">to the table.</span></h2></div><p>Core technologies I use to create responsive and interactive interfaces.</p></div>
          <div className="skills-grid">
            {skills.map(skill => <article className="skill-card" key={skill.title}><div className="skill-symbol">{skill.symbol}</div><h3>{skill.title}</h3><p>{skill.detail}</p></article>)}
          </div>
          <p className="skill-note"><span>✦</span> React is the framework used to build this portfolio. Keep the wording aligned with what you can confidently explain in an interview.</p>
        </section>

        <section className="section muted-section" id="projects">
          <div className="wrap">
            <div className="section-head"><div><p className="kicker">03 / SELECTED WORK</p><h2>Built by learning.<br /><span className="blue">Improved through practice.</span></h2></div><p>Explore the projects I've used to practice front-end fundamentals.</p></div>
            <div className="filters" aria-label="Filter projects">
              {categories.map(category => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}
            </div>
            <div className="projects-grid">{visibleProjects.map(project => <ProjectCard key={project.title} project={project} />)}</div>
            <p className="note">Project previews are screenshots of the live pages. Source links lead to my GitHub profile; individual repository links can be added when confirmed.</p>
          </div>
        </section>

        <section className="section wrap approach">
          <div><p className="kicker">04 / HOW I WORK</p><h2>Good work starts with <span className="blue">good habits.</span></h2><p className="dim">I bring curiosity, care and a willingness to learn to every project.</p></div>
          <div className="habits">
            <div><span>01</span><section><h3>Think about the user</h3><p>Prioritize clear navigation, readable content and layouts that work on small screens.</p></section></div>
            <div><span>02</span><section><h3>Keep code clear</h3><p>Use semantic markup and organized components to make projects easier to maintain.</p></section></div>
            <div><span>03</span><section><h3>Learn through building</h3><p>Practice concepts in real projects, welcome feedback and keep improving.</p></section></div>
          </div>
        </section>

        <section className="wrap contact-wrap" id="contact">
          <div className="contact-box">
            <div><p className="kicker">05 / GET IN TOUCH</p><h2>Have a role or project<br />in mind? <span className="blue">Let's talk.</span></h2><p className="dim">I'm open to junior front-end roles, internships, collaborations and projects where I can contribute and grow.</p><a className="button primary" href="mailto:ayindelateef2021@gmail.com?subject=Front-End%20Developer%20Opportunity">Email me about an opportunity ↗</a></div>
            <div className="contact-details">
              <div><small>EMAIL</small><a href="mailto:ayindelateef2021@gmail.com">ayindelateef2021@gmail.com</a></div>
              <div><small>LINKEDIN</small><a href="https://linkedin.com/in/ayinde-abdullateef-b40ab120b" target="_blank" rel="noreferrer">Connect with me ↗</a></div>
              <div><small>GITHUB</small><a href="https://github.com/ayindeabdullateef3-coder" target="_blank" rel="noreferrer">Explore my code ↗</a></div>
              <div><small>LOCATION</small><span>Nigeria · Open to remote opportunities</span></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-icon">A</span> Ayinde<span className="blue">.</span></a><p>Built with React, CSS and curiosity.</p><a href="#home">Back to top ↑</a><small>© {new Date().getFullYear()} Ayinde Lateef Olalekan</small></div></footer>
    </>
  );
}

export default App;
