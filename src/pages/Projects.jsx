import React from 'react'
import { Link } from 'react-router-dom'
import seashore from '../assets/projects_pics/seashore.jpg'
import helmet from '../assets/projects_pics/helmet.png'
import goldrate from '../assets/projects_pics/adhunigoldrate.png'
import aes_stamp from '../assets/projects_pics/aesstamp.png'
import kudoszone from '../assets/projects_pics/kudoszone.png'
import addtocart from '../assets/projects_pics/addtocart.png'
import placeholder from '../assets/projects_pics/placeholder.png'

function Projects() {
  const allProjects = [
{
title: 'Weld Defect Detection System',
description:
'An industry-applied computer vision inspection assistant designed to identify weld defects in standard and X-ray images using AI/ML workflows, image preprocessing, and object detection models.',
github: '#',
demo: '#',
tech: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'React', 'AWS'],
image: placeholder,
featured: true
},

{
title: 'AI Helmet Detection System',
description:
'An AI-powered safety monitoring application capable of detecting motorcycle riders with and without helmets using computer vision and real-time object detection techniques.',
github: 'https://github.com/thajucp123/helmet-detection',
demo: 'https://helmet-detection-xi.vercel.app/',
tech: ['Python', 'YOLOv8', 'OpenCV', 'React'],
image: helmet,
featured: true
},

{
title: 'Ente Kottakkal',
description:
'A community-focused digital platform developed for my village, providing blood bank records, public contacts, worker listings, bus timings, organization details, and local resource management.',
github: '#',
demo: '#',
tech: ['Next.js', 'Flutter', 'Firebase', 'Kotlin', 'AWS'],
image: placeholder,
featured: true
},

{
title: 'Adhuni Gold Rate Generator',
description:
'An automation tool designed for Adhuni Gold Jewellers to dynamically generate daily gold-rate posters and WhatsApp status images using customizable templates and rendering workflows.',
github: 'https://github.com/thajucp123/adhunigold-rate-generator',
demo: 'https://adhunigold-rate.vercel.app/',
tech: ['React', 'JavaScript', 'html2canvas', 'CSS'],
image: goldrate,
featured: false
},

{
title: 'AES Stamping App',
description:
'A lightweight internal web application developed for AES India to generate and download digital inspection stamping cards with customizable inspector details, agency information, witness/review indicators, signatures, and real-time preview functionality.',
github: 'https://github.com/thajucp123/aes-stamping',
demo: 'https://aes-stamping.vercel.app/',
tech: ['React', 'Vite', 'JavaScript', 'html2canvas'],
image: aes_stamp,
featured: false
},

{
title: 'Seashore Mediclinic',
description:
'A responsive healthcare website built for a local medical clinic, showcasing medical services, facilities, and appointment workflows with a clean and accessible user experience.',
github: 'https://github.com/thajucp123/seashore-mediclinic',
demo: 'https://seashore-mediclinic.vercel.app/',
tech: ['React', 'Node.js', 'MongoDB', 'Express'],
image: seashore,
featured: false
},

{
title: 'KudosZone',
description:
'A lightweight social interaction and appreciation platform built as an early JavaScript and Firebase project focused on user engagement and real-time interactions.',
github: 'https://github.com/thajucp123/kudos-zone.git',
demo: 'https://kudos-zone.vercel.app/',
tech: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
image: kudoszone,
featured: false
},

{
title: 'Add to Cart',
description:
'A simple e-commerce interaction prototype built using JavaScript and Firebase to explore cart management, dynamic UI updates, and frontend state handling.',
github: 'https://github.com/thajucp123/add-to-cart.git',
demo: 'https://addtocart-thaju.netlify.app/',
tech: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
image: addtocart,
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
              {/*<div className="placeholder-image">*/}
                {//<span>{project.title.charAt(0)}</span>
                }
                <img src={project.image} alt={project.title} />
              {/*</div>*/}
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
                <a href={project.github} className="project-link" target='_blank'>GitHub</a>
                <a href={project.demo} className="project-link" target='_blank'>Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
