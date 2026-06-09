import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import seashore from '../assets/projects_pics/seashore.jpg';
import helmet from '../assets/projects_pics/helmet.png';
import goldrate from '../assets/projects_pics/adhunigoldrate.png';
import aesStamp from '../assets/projects_pics/aesstamp.png';
import kudoszone from '../assets/projects_pics/kudoszone.png';
import addtocart from '../assets/projects_pics/addtocart.png';
import ekapp from '../assets/projects_pics/ek_app.png';
import placeholder from '../assets/projects_pics/placeholder.png';

const allProjects = [
  {
    title: 'Weld Defect Detection System',
    description:
      'An industry-applied computer vision inspection assistant designed to identify weld defects in standard and X-ray images using AI/ML workflows, image preprocessing, and object detection models.',
    github: '#',
    demo: '#',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'React', 'AWS'],
    image: placeholder,
    featured: true,
  },
  {
    title: 'Ente Kottakkal',
    description:
      'A community-focused digital platform developed for my village, providing blood bank records, public contacts, worker listings, bus timings, organization details, and local resource management.',
    github: 'https://github.com/thajucp123/ente-kottakkal-web',
    demo: 'https://ente-kottakkal-landing.vercel.app/',
    tech: ['Next.js', 'Flutter', 'Firebase', 'Kotlin', 'AWS'],
    image: ekapp,
    featured: true,
  },
  {
    title: 'AI Helmet Detection System',
    description:
      'An AI-powered safety monitoring application capable of detecting motorcycle riders with and without helmets using computer vision and real-time object detection techniques.',
    github: 'https://github.com/thajucp123/helmet-detection',
    demo: 'https://helmet-detection-xi.vercel.app/',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'React'],
    image: helmet,
    featured: true,
  },
  {
    title: 'Adhuni Gold Rate Generator',
    description:
      'An automation tool designed for Adhuni Gold Jewellers to dynamically generate daily gold-rate posters and WhatsApp status images using customizable templates and rendering workflows.',
    github: 'https://github.com/thajucp123/adhunigold-rate-generator',
    demo: 'https://adhunigold-rate.vercel.app/',
    tech: ['React', 'JavaScript', 'html2canvas', 'CSS'],
    image: goldrate,
    featured: false,
  },
  {
    title: 'AES Stamping App',
    description:
      'A lightweight internal web application developed for AES India to generate and download digital inspection stamping cards with customizable inspector details, agency information, signatures, and real-time preview functionality.',
    github: 'https://github.com/thajucp123/aes-stamping',
    demo: 'https://aes-stamping.vercel.app/',
    tech: ['React', 'Vite', 'JavaScript', 'html2canvas'],
    image: aesStamp,
    featured: false,
  },
  {
    title: 'Seashore Mediclinic',
    description:
      'A responsive healthcare website built for a local medical clinic, showcasing medical services, facilities, and appointment workflows with a clean and accessible user experience.',
    github: 'https://github.com/thajucp123/seashore-mediclinic',
    demo: 'https://seashore-mediclinic.vercel.app/',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: seashore,
    featured: false,
  },
  {
    title: 'KudosZone',
    description:
      'A lightweight social interaction and appreciation platform built as an early JavaScript and Firebase project focused on user engagement and real-time interactions.',
    github: 'https://github.com/thajucp123/kudos-zone.git',
    demo: 'https://kudos-zone.vercel.app/',
    tech: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
    image: kudoszone,
    featured: false,
  },
  {
    title: 'Add to Cart',
    description:
      'A simple e-commerce interaction prototype built using JavaScript and Firebase to explore cart management, dynamic UI updates, and frontend state handling.',
    github: 'https://github.com/thajucp123/add-to-cart.git',
    demo: 'https://addtocart-thaju.netlify.app/',
    tech: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
    image: addtocart,
    featured: false,
  },
];

const card = {
  hidden: { opacity: 0, y: 34 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Projects() {
  return (
    <div className="portfolio-shell">
      <section className="portfolio-section">
        <Link to="/" className="editorial-button mb-8 w-fit">
          <ArrowLeft size={15} />
          Back to Portfolio
        </Link>
        <span className="section-kicker block">Project Archive</span>
        <h1 className="section-heading mt-4">All Projects</h1>
        <p className="mt-6 max-w-xl text-sm uppercase leading-relaxed text-[#686863]">
          A collection of AI, web, mobile, automation, and community-focused work.
        </p>
      </section>

      <section className="portfolio-section">
        <div className="grid gap-4 md:grid-cols-2">
          {allProjects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -8 }}
              className="paper-card overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="h-[230px] w-full border-b border-[#c9c9c4] object-cover grayscale" />
              <div className="p-5 md:p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="mono-label">0{index + 1}</span>
                  {project.featured && <span className="rounded-full border border-[#a9a9a4] px-3 py-1.5 text-[11px] uppercase">Featured</span>}
                </div>
                <h2 className="text-[clamp(2rem,5vw,4.2rem)] uppercase leading-[0.9] tracking-[-0.055em]">{project.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-[#4a4a45]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-[#a9a9a4] px-3 py-1.5 text-[11px] uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="circle-button no-underline" whileHover={{ y: -3 }}>
                    <Github size={17} />
                  </motion.a>
                  <motion.a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} demo`} className="circle-button no-underline" whileHover={{ y: -3 }}>
                    <ExternalLink size={17} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
