import React from 'react';
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const inputClass =
  'w-full border-0 border-b border-[#a9a9a4] bg-transparent px-0 py-4 text-sm uppercase text-[#151515] outline-none transition-colors placeholder:text-[#8b8b86] focus:border-[#151515]';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">Contact</span>
          <h2 className="section-heading mt-4">Let's Build</h2>
          <p className="mt-7 max-w-[320px] text-sm uppercase leading-relaxed text-[#686863]">
            Have a project, idea, or collaboration in mind? Send the first note.
          </p>
          <div className="mt-7 flex gap-2">
            <motion.a href="mailto:mail@thajucp.in" aria-label="Email" className="circle-button no-underline" whileHover={{ y: -3 }}>
              <Mail size={17} />
            </motion.a>
            <motion.a href="https://github.com/thajucp123" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="circle-button no-underline" whileHover={{ y: -3 }}>
              <Github size={17} />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/thaju-fakrudheen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="circle-button no-underline" whileHover={{ y: -3 }}>
              <Linkedin size={17} />
            </motion.a>
            <motion.a href="https://www.instagram.com/chaaju__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="circle-button no-underline" whileHover={{ y: -3 }}>
              <Instagram size={17} />
            </motion.a>
          </div>
          <p className="mt-7 max-w-[320px] text-sm leading-relaxed text-[#686863]">You can email me directly at <u className="font-bold">mail@thajucp.in</u></p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="paper-card p-6 md:p-9"
        >
          <span className="circle-button mb-4">
            <Mail size={18} />
          </span>
          <input id="name" type="text" placeholder="Your Name" required className={inputClass} />
          <input id="email" type="email" placeholder="Your Email" required className={inputClass} />
          <textarea id="message" placeholder="Your Message" rows="5" required className={`${inputClass} resize-none`} />
          <motion.button type="submit" className="editorial-button mt-7" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            <Send size={15} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
