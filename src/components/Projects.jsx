import React from 'react'

function Projects() {
  const projects = [
{
title: 'Weld Defect Detection System',
description:
'An industry-applied computer vision inspection assistant used at AES India, designed to identify weld defects in standard and X-ray images using AI/ML workflows. Built for improving industrial inspection efficiency through automated defect detection and image analysis.',
github: '#',
demo: '#',
tech: [
"Python",
"YOLOv8",
"OpenCV",
"PyTorch",
"React",
"AWS"
]
},

{
title: 'Ente Kottakkal',
description:
'A community-focused digital platform developed for my village, providing locally relevant information including blood bank records, public contacts, worker directories, bus timings, shop listings, and organization details.',
github: 'https://github.com/thajucp123/ente-kottakkal-web',
demo: 'https://ente-kottakkal-web.vercel.app/',
tech: [
"Next.js",
"Flutter",
"Firebase",
"Kotlin",
"AWS"
]
},

{
title: 'AI Helmet Detection System',
description:
'An AI-powered safety monitoring application capable of detecting motorcycle riders with and without helmets using computer vision and object detection models.',
github: 'https://github.com/thajucp123/helmet-detection',
demo: 'https://helmet-detection-xi.vercel.app/',
tech: [
"Python",
"YOLOv8",
"React",
"OpenCV"
]
},

{
title: 'Adhuni Gold Rate Generator',
description:
'An automation tool built for Adhuni Gold Jewellers to dynamically generate daily gold-rate posters and WhatsApp status images using customizable templates and automated rendering workflows.',
github: 'https://github.com/thajucp123/adhunigold-rate-generator',
demo: 'https://adhunigold-rate.vercel.app/',  
tech: [
"React",
"JavaScript",
"html2canvas",
"CSS"
]
}
]


  return (
    <section id="projects" className="projects">
    <svg
    className="pin-dot"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="6" fill="#000" />
  </svg>
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
      <a href={project.github} target='_blank'>GitHub Repo</a>
      <a href={project.demo} target='_blank'>Live Demo</a>
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
