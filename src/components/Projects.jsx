import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Ente Kottakkal',
      description: 'A personal project for my village "Kottakkal". Provides a database of shops, workers, organisations, bus timings, blood bank info, and more.',
      github: '#',
      demo: '#',
      tech: ["Next.js", "Kotlin", "Flutter", "Firebase"]
    },
    {
      title: 'Seashore Mediclinic',
      description: 'A responsive React website showcasing medical services and facilities for Seashore Mediclinic. Features appointment booking and easy access to information.',
      github: '#',
      demo: '#',
      tech: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: 'Adhuni Gold Savings App',
      description: 'Prototype app for automating monthly gold saving schemes, with deposit tracking, gold rate integration, and admin dashboards.',
      github: '#',
      demo: '#',
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      title: 'Personal Blog',
      description: 'A minimal blogging platform with Markdown support and a clean UI. Built with Next.js and MongoDB.',
      github: '#',
      demo: '#',
      tech: ["React", "CSS", "JavaScript"]
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects 🚀</h2>
      {projects.map((project, index) => (
  <div key={index} className={`project ${index === 0 ? 'first-project' : ''}`}>
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      {/* Tech badges */}
      <div className="badges">
        {project.tech.map((tech, i) => (
          <span key={i} className="badge">{tech}</span>
        ))}
      </div>
    </div>
    <div className="project-buttons">
      <a href={project.github}>GitHub Repo</a>
      <a href={project.demo}>Live Demo</a>
    </div>
  </div>
))}

      <div className="all-projects-button">
        <a href="/projects" className="all-projects-btn">View All Projects</a>
      </div>
    </section>
  )
}

export default Projects
