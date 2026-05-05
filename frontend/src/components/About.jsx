import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        <span className="text-accentCyan font-mono text-2xl mr-2">01.</span> About Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 text-lightGrey text-lg leading-relaxed space-y-6"
        >
          <p>
            Hello! My name is J.L. Shasini Lochana and I enjoy creating things that live on the internet. 
            My interest in web development started back in high school when I decided to try editing custom 
            Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
          </p>
          <p>
            Currently, I am a final-year IT undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), 
            pursuing a BSc (Hons) in Information Technology. I am deeply passionate about software development, 
            the MERN stack, and modern application development methodologies.
          </p>
          <p>
            Through my academic journey, especially the Preparation for Professional World (PPW) module, 
            I have honed not only my technical skills but also my professional communication, 
            problem-solving, and teamwork abilities, preparing me for a successful career in the tech industry.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group max-w-sm mx-auto md:mx-0 w-full"
        >
          {/* Decorative frame */}
          <div className="absolute inset-0 border-2 border-accentCyan rounded-2xl translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 -z-10"></div>
          
          <div className="bg-slate-800 aspect-square rounded-2xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-transparent group-hover:bg-accentCyan/10 transition-colors duration-500 z-10 mix-blend-overlay"></div>
            <img
              src={profileImg}
              alt="Shasini Lochana"
              className="object-cover w-full h-full transition-all duration-500 scale-105 group-hover:scale-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
