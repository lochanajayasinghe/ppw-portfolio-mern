import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Journal', to: 'journal' },
    { name: 'Career', to: 'career' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-darkerBlue/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="text-3xl font-outfit font-bold text-white cursor-pointer group flex items-center">
          SL<span className="text-accentCyan group-hover:text-accentPurple transition-colors duration-300">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-lightGrey hover:text-white cursor-pointer text-sm font-medium tracking-wide transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accentCyan to-accentPurple transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a 
            href="/cv/Shasini_Lochana_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-accentCyan border border-accentCyan rounded-full hover:text-white group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accentCyan rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Resume</span>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-lightGrey hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-darkBlue border-b border-white/5 shadow-2xl flex flex-col items-center gap-6 overflow-hidden"
          >
            <div className="py-8 flex flex-col items-center gap-6 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lightGrey hover:text-accentCyan text-lg font-outfit font-medium cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="/cv/Shasini_Lochana_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 bg-gradient-to-r from-accentCyan to-accentPurple text-white px-8 py-3 rounded-full text-lg w-3/4 text-center font-medium shadow-lg"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
