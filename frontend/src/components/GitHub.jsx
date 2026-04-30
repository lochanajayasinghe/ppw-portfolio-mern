import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const GitHub = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 md:p-16 rounded-3xl border border-slate-700/50 w-full flex flex-col items-center shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>

        <GithubIcon size={80} className="text-white mb-8 relative z-10" />
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6 relative z-10">Check Out My Code</h2>
        <p className="text-lightGrey max-w-2xl mb-10 text-lg leading-relaxed relative z-10">
          My GitHub profile is where I showcase all my academic and personal software development projects. 
          Feel free to explore my repositories to see how I write code, solve problems, and structure applications.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/lochanajayasinghe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-200 px-10 py-4 rounded-full font-bold transition-colors text-lg relative z-10 shadow-lg"
        >
          Visit My GitHub <ExternalLink size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default GitHub;
