import React from 'react';
import { motion } from 'framer-motion';
import about_Image from '../assets/projects/Camera_BW_Img_cpy.jpeg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Know <span className="text-neutral-300">me</span>
      </h2>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img className="rounded-2xl w-64 sm:w-64 lg:w-80" src={about_Image} alt="about" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
