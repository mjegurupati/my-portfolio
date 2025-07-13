import React from 'react';
import {motion} from 'framer-motion';
import {CONTACT} from "../constants";


const Contact = () => {
  return (
    <div id = 'contact' className = 'border-b border-neutral-900 pb-20'>
      <motion.h2 
      whileInView = {{opacity: 1, y:0}}
      initial = {{opacity: 0, y: -100}}
      transition = {{ duration :0.5}}
      className = 'my-10 text-center text-3xl'>Got some ideas? Get in Touch!</motion.h2>
      <div className = 'text-center tracking-tighter'>
        <p className ='my-4 '>{CONTACT.address}</p>
        <a href = '#' className = 'border-b'>{CONTACT.email}</a>
      </div>
      
    </div>
  )
}

export default Contact
