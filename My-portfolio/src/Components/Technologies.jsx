import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { SiPython, SiR, SiMysql, SiCplusplus, SiJavascript } from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Python */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiPython className="text-5xl text-yellow-400" />
        </motion.div>

        {/* R */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiR className="text-5xl text-blue-400" />
        </motion.div>

        {/* Java */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <FaJava className="text-5xl text-red-500" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiMysql className="text-5xl text-blue-500" />
        </motion.div>

        {/* C++ */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiCplusplus className="text-5xl text-blue-600" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiJavascript className="text-5xl text-yellow-300" />
        </motion.div>

        {/* AWS */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <FaAws className="text-5xl text-orange-500" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
