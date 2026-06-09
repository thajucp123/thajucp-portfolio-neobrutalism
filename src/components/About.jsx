import React from 'react';
import { ArrowUpRight, Bot, Download, Github, Linkedin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import cv from '../assets/cv/THAJUDEEN_CP_AI-ML_CV.pdf';

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function About({ toggleChat }) {
  return (
    <motion.section
      id="about"
      className="portfolio-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      style={{ paddingRight: '3rem' }}
    >
      <div className="grid gap-10 lg:grid-cols-[0.55fr_1.15fr] lg:items-end">
        <motion.div variants={fadeUp} className="relative min-h-[420px] overflow-hidden border border-[#c9c9c4] bg-[#f4f4f1]">
          <img
            src="/profile_image_headshot.png"
            alt="Thajudeen CP profile"
            className="profile-editorial-img absolute inset-0 h-full w-full object-cover object-[50%_18%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[#fbebfa]/90 p-5 backdrop-blur-sm">
            <p className="mono-label text-[#050505]"><b><big>THAJUDEEN CP</big></b></p>
            <p className="mt-2 text-sm text-[#686863]">AI/ML Engineer / Full Stack Developer</p>
          </div>
        </motion.div>

        <div>
          <motion.span variants={fadeUp} className="section-kicker block">
            About Me
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-heading mt-4 max-w-[760px]" style={{fontSize: '6rem'}}>
            Practical AI Systems with clean product edges.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-9 grid gap-6 text-[17px] leading-relaxed text-[#30302d] md:grid-cols-2">
            <p>
              I am Thajudeen, an AI/ML engineer and full stack developer from Kerala, India, currently working at AES India in technical operations and systems support.
            </p>
            <p>
              I build practical software systems, AI-powered tools, computer vision workflows, and web products using Python, React, Next.js, Node.js, OpenCV, and modern ML tooling.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href={cv} download className="editorial-button">
              <Download size={15} />
              Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/thaju-fakrudheen/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-button"
            >
              <Linkedin size={15} />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/thajucp123"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-button"
            >
              <Github size={15} />
              GitHub
            </motion.a>
            <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} type="button" onClick={toggleChat} className="editorial-button" style={{ backgroundColor: '#000', color: '#fff' }}>
              <Bot size={15} />
              KnowThaj
            </motion.button>
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="#book"
              className="editorial-button"
            >
              <BookOpen size={15} />
              Books
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
