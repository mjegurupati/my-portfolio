import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/projects/Profile_Img.jpeg';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Photo */}
        <motion.div
          className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center"
          variants={container(1.2)}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img
            src={profilePic}
            alt="Profile_Img"
            className="rounded-full object-cover w-64 h-64 lg:w-96 lg:h-96"
          />
        </motion.div>

        {/* Text */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="whitespace-nowrap pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
          >
            Mounica Jegurupati
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Data Analyst
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            <span className="text-2xl font-thick">Hello there</span>{' '}
            <span className="text-3xl">👋</span>, I'm a data enthusiast on a mission to transform raw data into actionable stories. I believe every question deserves an insightful answer—<strong className="text-purple-400">one backed by high-quality or reliable data</strong>. With a strong foundation in data warehousing and analysis, I thrive on solving complex business challenges and crafting innovative solutions that promote growth and inspire change.
          </motion.p>

          <motion.div
            variants={container(1.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6"
          >
            <a
              href="/Mounica_Jegurupati_Resume.pdf"
              download="Mounica_Jegurupati_Resume"
              className="inline-block py-2 px-6 text-lg text-white bg-gradient-to-r from-pink-300 to-purple-500 rounded-full hover:opacity-80 transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
