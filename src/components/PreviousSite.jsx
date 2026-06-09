import React from 'react';
import { ExternalLink, History } from 'lucide-react';
import { motion } from 'framer-motion';

function PreviousSite() {
  return (
    <section className="portfolio-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="paper-card grid gap-7 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8"
      >
        <div>
          <span className="circle-button mb-6">
            <History size={18} />
          </span>
          <span className="section-kicker block">Previous Version</span>
          <h2 className="mt-4 text-[clamp(2.5rem,7vw,5.8rem)] uppercase leading-[0.9] tracking-[-0.055em]">
            Wizardry Archive
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-7">
          <p className="text-[17px] leading-relaxed text-[#30302d]">
            The previous portfolio was a playful coding wizard experiment. This redesign moves the site into a quieter editorial system while keeping the archive available.
          </p>
          <motion.a
            href="https://wizardry.thajucp.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-button w-fit"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={{backgroundColor: '#000', color: '#fff'}}
          >
            Visit Archive
            <ExternalLink size={15} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default PreviousSite;
