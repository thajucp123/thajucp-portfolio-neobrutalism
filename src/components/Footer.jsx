import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="border-t border-[#c9c9c4] px-5 py-8 md:px-10 lg:px-[108px]">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <p className="text-xs uppercase text-[#686863]">&copy; {new Date().getFullYear()} Thajudeen CP. All rights reserved.</p>
        <div className="flex gap-2">
          <motion.a
            href="https://github.com/thajucp123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="circle-button no-underline"
            whileHover={{ y: -3 }}
          >
            <Github size={17} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/thaju-fakrudheen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="circle-button no-underline"
            whileHover={{ y: -3 }}
          >
            <Linkedin size={17} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
