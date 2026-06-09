import React, { useState } from 'react';
import { Dribbble, Github, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/#about' },
  { label: 'Services', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
];

const socialItems = [
  { label: 'GitHub', href: 'https://github.com/thajucp123', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/chaaju__/', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thaju-fakrudheen/', icon: Linkedin },
];

const navVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="relative z-50 border-b border-[#c9c9c4] bg-[#fbfbfa]"
    >
      <div className="flex min-h-[96px] items-center justify-between gap-5 px-5 md:px-10 lg:px-[68px]">
        <motion.a variants={itemVariants} href="/" className="text-[32px] font-semibold tracking-[-0.04em] text-[#151515] no-underline">
          <b><big>THAJUDEEN CP</big></b><span className="text-[#8f8f8a]">.</span>
        </motion.a>

        <motion.div variants={itemVariants} className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              key={item.label}
              href={item.href}
              className="pill-link rounded-full px-8 py-3 text-xs uppercase no-underline"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            {socialItems.map(({ label, href, icon: Icon, mark }) => (
              <motion.a
                key={label}
                href={href}
                target={href === '#' ? undefined : '_blank'}
                rel={href === '#' ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="circle-button no-underline"
                whileHover={{ y: -3, rotate: Icon === Dribbble ? -8 : 0 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icon ? <Icon size={17} strokeWidth={1.8} /> : <span className="text-xs font-bold">{mark}</span>}
              </motion.a>
            ))}
          </div>

          <motion.button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="circle-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#c9c9c4] bg-[#fbfbfa] lg:hidden"
          >
            <div className="grid gap-2 p-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="pill-link rounded-full px-5 py-3 text-center text-xs uppercase no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
