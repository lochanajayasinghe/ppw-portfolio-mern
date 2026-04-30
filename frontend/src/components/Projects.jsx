import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Projects = () => {
  const projectList = [
    {
      title: "Hospital Forecasting System",
      description: "A machine learning-driven system designed to predict and optimize hospital bed demand, focusing on emergency treatment units.",
      tech: ["Machine Learning", "Python", "React", "Node.js"],
      github: "https://github.com/lochanajayasinghe/hospital-forecasting-system"
    },
    {
      title: "Hostel Management System",
      description: "A comprehensive solution for managing hostel operations, including student registration, room allocation, and fee tracking.",
      tech: ["Java", "Spring Boot", "MySQL", "React"],
      github: "https://github.com/lochanajayasinghe/Hostel-Management-System"
    },
    {
      title: "Asset Management System",
      description: "An application to track and manage organizational assets, providing real-time visibility into asset lifecycle and maintenance.",
      tech: ["MERN Stack", "Tailwind CSS", "REST API"],
      github: "https://github.com/lochanajayasinghe/Asset-Management-System"
    },
    {
      title: "Oxygen Fitness Center GMS",
      description: "A tailored Gym Management System for Oxygen Fitness Center, featuring membership plans, billing, and member portals.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/lochanajayasinghe/Oxygen-Fitness-Center-GMS"
    },
    {
      title: "SkillSharing Platform",
      description: "A community-driven platform where users can offer and request skills, fostering peer-to-peer learning and collaboration.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/lochanajayasinghe/SkillSharing-platform"
    },
    {
      title: "FitFlex Gym Management",
      description: "A modern gym management application with interactive dashboards for tracking member attendance and fitness progress.",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/lochanajayasinghe/Gym-Management-System-FitFlex"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        <span className="text-accentCyan font-mono text-2xl mr-2">03.</span> Featured Projects
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projectList.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="glass-card overflow-hidden flex flex-col group"
          >
            <div className="p-8 flex-grow relative z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accentCyan/5 rounded-full blur-3xl group-hover:bg-accentCyan/20 transition-colors duration-500 -z-10"></div>
              
              <div className="flex justify-between items-center mb-8">
                <div className="text-accentCyan bg-accentCyan/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-lightGrey hover:text-accentCyan transition-colors duration-300">
                    <GithubIcon size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-outfit font-bold text-primaryWhite mb-4 group-hover:text-accentCyan transition-colors duration-300">{project.title}</h3>
              <p className="text-lightGrey text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="px-8 pb-8 pt-0 z-10">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
