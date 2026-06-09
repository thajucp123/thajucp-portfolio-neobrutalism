import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Weld Defect Detection System',
    description: 'An industry-applied computer vision inspection assistant used at AES India to identify weld defects in standard and X-ray images.',
    github: '#',
    demo: '#',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'React', 'AWS'],
  },
  {
    title: 'Ente Kottakkal',
    description: 'A community-focused digital platform for blood bank records, public contacts, workers, bus timings, shops, and local organizations.',
    github: 'https://github.com/thajucp123/ente-kottakkal-web',
    demo: 'https://ente-kottakkal-landing.vercel.app/',
    tech: ['Next.js', 'Flutter', 'Firebase', 'Kotlin', 'AWS'],
  },
  {
    title: 'AI Helmet Detection System',
    description: 'A safety monitoring application that detects motorcycle riders with and without helmets using object detection models.',
    github: 'https://github.com/thajucp123/helmet-detection',
    demo: 'https://helmet-detection-xi.vercel.app/',
    tech: ['Python', 'YOLOv8', 'React', 'OpenCV'],
  },
  {
    title: 'Adhuni Gold Rate Generator',
    description: 'An automation tool for daily gold-rate poster and WhatsApp status generation with customizable rendering workflows.',
    github: 'https://github.com/thajucp123/adhunigold-rate-generator',
    demo: 'https://adhunigold-rate.vercel.app/',
    tech: ['React', 'JavaScript', 'html2canvas', 'CSS'],
  },
];

const card = {
  hidden: { opacity: 0, y: 34 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="section-kicker">Projects</span>
          <h2 className="section-heading mt-4">Selected Work</h2>
        </div>
        <motion.a href="/projects" className="editorial-button w-fit" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} style={{ backgroundColor: '#000', color: '#fff', fontSize: '14px', padding: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
          View More Projects
          <ArrowUpRight size={15} />
        </motion.a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            custom={index}
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ y: -8 }}
            className="paper-card group flex min-h-[330px] flex-col justify-between p-5 md:p-7"
          >
            <div>
              <div className="mb-8 flex items-start justify-between gap-5">
                <span className="mono-label text-[#686863]">0{index + 1}</span>
                <motion.span className="circle-button" whileHover={{ rotate: 45 }}>
                  <ArrowUpRight size={18} />
                </motion.span>
              </div>
              <h3 className="text-[clamp(2.2rem,5.7vw,4.9rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                {project.title}
              </h3>
              <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-[#4a4a45]">{project.description}</p>
            </div>

            <div className="mt-9">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#a9a9a4] px-3 py-1.5 text-[11px] uppercase text-[#30302d]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <motion.a href={project.github} aria-label={`${project.title} GitHub`} className="circle-button no-underline" whileHover={{ y: -3 }}>
                  <Github size={17} />
                </motion.a>
                <motion.a href={project.demo} aria-label={`${project.title} demo`} className="circle-button no-underline" whileHover={{ y: -3 }}>
                  <ExternalLink size={17} />
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
