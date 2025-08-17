import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Ente Kottakkal',
      description: 'A personal project for my village "Kottakkal". Provides a database of shops, workers, organisations, bus timings, blood bank info, and more.',
      github: '#',
      demo: '#'
    },
    {
      title: 'Seashore Mediclinic',
      description: 'A responsive React website showcasing medical services and facilities for Seashore Mediclinic. Features appointment booking and easy access to information.',
      github: '#',
      demo: '#'
    },
    {
      title: 'Adhuni Gold Savings App',
      description: 'Prototype app for automating monthly gold saving schemes, with deposit tracking, gold rate integration, and admin dashboards.',
      github: '#',
      demo: '#'
    },
    {
      title: 'Personal Blog',
      description: 'A minimal blogging platform with Markdown support and a clean UI. Built with Next.js and MongoDB.',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
