import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const CV = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 w-full flex flex-col items-center relative overflow-hidden group"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accentCyan/10 via-transparent to-accentPurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="bg-slate-800 p-6 rounded-full mb-8 shadow-inner relative z-10">
          <FileText size={48} className="text-accentCyan" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-6 relative z-10">Curriculum Vitae</h2>
        <h3 className="text-xl text-accentCyan mb-6 font-medium relative z-10">Shasini Lochana - IT Undergraduate</h3>
        
        <p className="text-lightGrey max-w-xl mb-10 leading-relaxed relative z-10">
          My CV highlights my academic background, technical skills, projects, and career objectives. 
          It provides a comprehensive overview of my qualifications for roles in software development.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/cv/Shasini_Lochana_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-accentCyan to-blue-500 hover:from-blue-500 hover:to-accentPurple text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-accentCyan/20 relative z-10"
        >
          <Download size={20} /> Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CV;
