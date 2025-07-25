import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-16'>
      <motion.h2 
      whileInView = {{opacity:1, y:0}}
      initial = {{opacity:0, y: -100}}
      transition={{ duration: 0.5}}      
      className='my-20 text-center text-4xl'> Experience </motion.h2>
      
      {/* Experience Container */}
      <div id="Experience" className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 w-full lg:w-3/4 p-6 bg-neutral-800 rounded-lg shadow-lg'>
            <div className='flex flex-wrap items-center'>
              {/* Year */}
              <motion.div
              whileInView = {{opacity: 1, x : 0}}
              initial= {{opacity: 0, x:-100}}
              transition= {{duration: 1}}
              className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
              </motion.div>

              {/* Role, Company, and Description */}
              <motion.div
              whileInView = {{opacity: 1, x:0}}
              initial = {{opacity:0, x:100}}
              transition = {{duration: 1}}
              className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                  {experience.role} -{' '}
                  <span className='text-sm text-purple-100'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
