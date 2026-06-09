import React from 'react';
import { BrainCircuit, Code2, Layers3, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceGroups = [
  {
    title: 'AI/ML',
    icon: BrainCircuit,
    skills: ['Python', 'Computer Vision', 'OpenCV', 'YOLOv8', 'TensorFlow', 'PyTorch', 'Scikit-Learn'],
  },
  {
    title: 'Web Development',
    icon: Code2,
    skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'TypeScript'],
  },
  {
    title: 'DevOps',
    icon: Layers3,
    skills: ['Firebase', 'AWS', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    title: 'Other',
    icon: Smartphone,
    skills: ['Flutter', 'Kotlin', 'Figma', 'Photoshop'],
  },
];

const row = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="section-kicker">Services</span>
          <h2 className="section-heading mt-4">What I Do</h2>
        </div>
        <p className="max-w-[310px] text-sm uppercase leading-relaxed text-[#686863] md:text-right">
          Interfaces, machine learning workflows, and launch-ready applications shaped with full-stack judgment.
        </p>
      </div>

      <div className="border-y border-[#c9c9c4]">
        {serviceGroups.map(({ title, icon: Icon, skills }, index) => (
          <motion.div
            key={title}
            custom={index}
            variants={row}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="group grid gap-5 border-b border-[#c9c9c4] py-7 last:border-b-0 md:grid-cols-[0.55fr_1fr]"
          >
            <div className="flex items-center gap-4">
              <motion.span className="circle-button shrink-0" whileHover={{ rotate: 12, scale: 1.04 }}>
                <Icon size={18} />
              </motion.span>
              <h3 className="text-[clamp(2rem,5.5vw,4.8rem)] uppercase leading-none tracking-[-0.055em] transition-transform duration-300 group-hover:translate-x-2">
                {title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-[#a9a9a4] px-4 py-2 text-xs uppercase text-[#30302d]"
                  whileHover={{ y: -3, backgroundColor: '#151515', color: '#ffffff' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
