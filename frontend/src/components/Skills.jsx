import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS"],
      icon: "💻"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs"],
      icon: "⚙️"
    },
    {
      title: "Database Management",
      skills: ["MongoDB", "SQL", "Mongoose"],
      icon: "s🗄️"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "VS Code", "Figma", "Android Studio"],
      icon: "🛠️"
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Time Management", "Presentation Skills"],
      icon: "🤝"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-container relative">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        <span className="text-accentPurple font-mono text-2xl mr-2">02.</span> Technical & Soft Skills
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            variants={itemVariants}
            key={index} 
            className="glass-card p-8 group relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accentPurple/10 rounded-full blur-3xl group-hover:bg-accentPurple/20 transition-colors duration-500"></div>
            
            <div className="text-4xl mb-6">{category.icon}</div>
            <h3 className="text-xl font-outfit font-bold text-white mb-6 group-hover:text-accentPurple transition-colors duration-300">{category.title}</h3>
            
            <ul className="space-y-3">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-lightGrey text-sm font-medium">
                  <span className="text-accentCyan mr-3 text-lg leading-none">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
