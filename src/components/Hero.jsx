import React from 'react';
import { ArrowDownRight, Code2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const titleLines = ['Explore My', 'Portfolio'];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const rise = {
  hidden: { y: 46, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.45], [0, 90]);
  const titleY = useTransform(scrollYProgress, [0, 0.45], [0, -55]);

  return (
    <section id="hero" className="relative min-h-[700px] overflow-hidden px-5 pb-8 pt-12 md:px-10 lg:px-[108px]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ y: titleY }}
        className="relative z-10 text-center"
      >
        {titleLines.map((line, index) => (
          <motion.h1
            key={line}
            variants={rise}
            className="text-[clamp(3.8rem,12.2vw,10.2rem)] font-medium uppercase leading-[0.88] tracking-[-0.055em] text-[#151515]"
          >
            {index === 0 ? (
              <>
                <span className="text-[#a9a9a4]">E</span>XPLOR<span className="text-[#7d7d78]">E</span>{' '}
                <span className="hidden sm:inline">MY</span>
              </>
            ) : (
              <>
                P<span className="text-[#777772]">O</span>RTF<span className="outline-word">OLIO</span>
              </>
            )}
          </motion.h1>
        ))}
      </motion.div>

      <div className="relative z-20 -mt-10 grid min-h-[470px] grid-cols-1 items-start gap-8 lg:-mt-24 lg:grid-cols-[1fr_1.7fr_1fr]">
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="order-2 flex flex-col items-start gap-8 pt-2 text-left lg:order-1 lg:pt-28"
        >
          <div>
            <p className="text-[22px] uppercase leading-none tracking-[-0.04em]">Developer Est. 2021</p>
            <p className="mt-3 max-w-[230px] text-xs uppercase leading-relaxed text-[#686863]">
              AI/ML systems, full stack products, and cutting-edge web solutions.
            </p>
          </div>

          <motion.a
            href="#about"
            className="circle-button h-[94px] w-[94px]"
            aria-label="Scroll to about"
            whileHover={{ rotate: 45, scale: 1.05 }}
            animate={{ y: [0, 9, 0] }}
            transition={{ y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <ArrowDownRight size={42} strokeWidth={1.2} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: imageY }}
          className="relative order-1 mx-auto flex w-full max-w-[470px] justify-center self-end lg:order-2"
        >
          <motion.div
            className="absolute top-12 h-56 w-56 rounded-full border border-[#c9c9c4]"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <img
            src="/profile_image_headshot.png"
            alt="Thajudeen CP"
            className="profile-editorial-img relative z-10 h-[430px] w-full object-cover object-[50%_18%]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-5 z-20 flex items-center gap-2 rounded-full border border-[#a9a9a4] bg-[#fbfbfa]/80 px-4 py-2 backdrop-blur"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            <Code2 size={15} />
            <span className="text-xs uppercase">AI / MERN / Mobile</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-3 flex flex-col items-start justify-between gap-12 pt-2 text-left lg:items-end lg:pt-28 lg:text-right"
        >
          <motion.p variants={rise} className="max-w-[260px] text-[18px] uppercase leading-[1.05] tracking-[-0.04em]">
            I am passionate about creating applications and solutions that make a difference.
          </motion.p>

          <motion.ul variants={container} className="space-y-7 text-[18px] uppercase leading-none tracking-[-0.04em]">
            {['Full Stack', 'AI Products', 'Machine Learning', 'Computer Vision', 'Web Development'].map((service) => (
              <motion.li key={service} variants={rise}>
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
