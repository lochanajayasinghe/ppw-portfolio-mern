import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="section-container min-h-screen pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 max-w-4xl"
      >
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-accentCyan font-medium tracking-widest uppercase text-sm"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-outfit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-primaryWhite to-lightGrey"
        >
          J.L. Shasini Lochana.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightGrey to-slate-600"
        >
          Final Year IT Undergraduate.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-lightGrey mt-6 max-w-2xl leading-relaxed font-light"
        >
          I'm a final-year IT undergraduate at SLIIT, passionate about software development, 
          web technologies, and continuous professional growth. I specialize in building 
          exceptional digital experiences using modern tools and the MERN stack.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-5 mt-10"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 bg-gradient-to-r from-accentCyan to-blue-500 hover:from-blue-500 hover:to-accentPurple text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-accentCyan/20 hover:shadow-accentCyan/40 hover:-translate-y-1 cursor-pointer"
          >
            View Portfolio <ArrowRight size={18} />
          </Link>
          <a
            href="/cv/Shasini_Lochana_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-accentCyan text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
          >
            <FileText size={18} className="text-accentCyan" /> Download CV
          </a>
          <a
            href="https://github.com/lochanajayasinghe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-accentPurple text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
          >
            <GithubIcon size={18} className="text-accentPurple" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lochana-jayasinghe-a28674319/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-accentPurple text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
          >
             LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
