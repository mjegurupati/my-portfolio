import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'My Journey', href: '#Experience' },
    { name: 'What I’ve Built', href: '#Projects' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  return (
    <nav className="mb-10 flex items-center justify-between py-6 px-4 md:px-8 relative">
      {/* Logo Container */}
      <div className="flex flex-shrink-0 items-center flex-grow">
        <a 
          href="#" 
          className="text-2xl md:text-3xl font-thin text-white font-marck-script text-left whitespace-nowrap"
        >
          My Vision Board
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-white hover:text-blue-500 transition"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Social Icons and Hamburger Menu */}
      <div className="flex items-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/mounica-jegurupati-v18201008"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mjegurupati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <button 
          className="md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-8 flex flex-col bg-gray-800 p-4 rounded-md space-y-2 md:hidden">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
