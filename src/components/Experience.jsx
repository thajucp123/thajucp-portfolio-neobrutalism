import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">Experience</span>
          <h2 className="section-heading mt-4">Current Role</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="paper-card p-6 md:p-9"
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <span className="circle-button">
              <BriefcaseBusiness size={18} />
            </span>
            <span className="rounded-full border border-[#a9a9a4] px-4 py-2 text-xs uppercase">Aug 2021 - Present</span>
          </div>
          <h3 className="text-[clamp(2rem,5vw,4.5rem)] uppercase leading-[0.9] tracking-[-0.055em]">
            Technical Operations Associate
          </h3>
          <p className="mt-3 text-lg uppercase text-[#686863]">AES India</p>
          <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-[#30302d]">
            Working across AI/ML development, technical operations, inspection coordination, systems support, and internal tooling. I build computer vision inspection assistants, full stack workflow tools, automation systems, and deployment-ready integrations for industrial teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
