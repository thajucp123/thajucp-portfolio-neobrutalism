import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  const allProjects = [
    {
      title: 'Ente Kottakkal',
      description: 'A personal project for my village "Kottakkal". Provides a database of shops, workers, organisations, bus timings, blood bank info, and more.',
      github: '#',
      demo: '#',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/project1.jpg',
      featured: true
    },
    {
      title: 'Seashore Mediclinic',
      description: 'A responsive React website showcasing medical services and facilities for Seashore Mediclinic. Features appointment booking and easy access to information.',
      github: '#',
      demo: '#',
      tech: ['React', 'CSS3', 'JavaScript'],
      image: '/project2.jpg',
      featured: true
    },
    {
      title: 'Adhuni Gold Savings App',
      description: 'Prototype app for automating monthly gold saving schemes, with deposit tracking, gold rate integration, and admin dashboards.',
      github: '#',
      demo: '#',
      tech: ['Flutter', 'Firebase', 'Dart'],
      image: '/project3.jpg',
      featured: true
    },
    {
      title: 'Personal Blog',
      description: 'A minimal blogging platform with Markdown support and a clean UI. Built with Next.js and MongoDB.',
      github: '#',
      demo: '#',
      tech: ['Next.js', 'MongoDB', 'Markdown'],
      image: '/project4.jpg',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      github: '#',
      demo: '#',
      tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      image: '/project5.jpg',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      github: '#',
      demo: '#',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
      image: '/project6.jpg',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts and interactive charts.',
      github: '#',
      demo: '#',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      image: '/project7.jpg',
      featured: false
    },
    {
      title: 'Recipe Finder',
      description: 'A recipe discovery app with search, filtering, and meal planning features.',
      github: '#',
      demo: '#',
      tech: ['React', 'Spoonacular API', 'CSS3'],
      image: '/project8.jpg',
      featured: false
    }
  ]

  return (
    <div className="projects-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Portfolio</Link>
        <h1>All Projects</h1>
        <p>A collection of my work across various technologies and domains</p>
      </div>

      <div className="projects-grid">
        {allProjects.map((project, index) => (
          <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image">
              <div className="placeholder-image">
                <span>{project.title.charAt(0)}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">GitHub</a>
                <a href={project.demo} className="project-link">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
