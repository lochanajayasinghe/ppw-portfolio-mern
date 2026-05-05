import { motion } from 'framer-motion';

const Certificates = () => {
  // Images expected to live in `src/assets/certs/`.
  // Add logos named: aws.png, freecodecamp.png, udemy.png, microsoft.png, azure.png, csharp.png
  const certs = [
    {
      title: "AWS Academy Cloud Foundations",
      platform: "AWS Academy",
      year: "2025",
      skill: "Cloud Computing",
      image: "/certs/aws.svg"
    },
    {
      title: "Responsive Web Design",
      platform: "freeCodeCamp",
      year: "2025",
      skill: "Frontend Development",
      image: "/certs/freecodecamp.svg"
    },
    {
      title: "MERN Stack Crash Course",
      platform: "Udemy",
      year: "2025",
      skill: "Full-Stack Development",
      image: "/certs/udemy.svg"
    },
    {
      title: "Build a mobile-optimized app from Power Apps",
      platform: "Microsoft Learn",
      year: "2026",
      skill: "Power Apps",
      image: "/certs/microsoft.svg"
    },
    {
      title: "Explore relational database services in Azure",
      platform: "Microsoft Learn",
      year: "2025",
      skill: "Azure Cloud",
      image: "/certs/azure.svg"
    },
    {
      title: "Create C# methods that return values",
      platform: "Microsoft Learn",
      year: "2025",
      skill: "C# Programming",
      image: "/certs/csharp.svg"
    }
  ];

  return (
    <section className="section-container pt-0">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        <span className="text-accentCyan font-mono text-2xl mr-2">06.</span> Certificates
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {certs.map((cert, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="glass-card overflow-hidden group"
          >
            <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-accentCyan/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
              <img
                src={cert.image || `https://via.placeholder.com/600x400/0f172a/94a3b8?text=Certificate`}
                alt={cert.title}
                onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/600x400/0f172a/94a3b8?text=Certificate`; }}
                className="max-h-28 w-auto object-contain transition-all duration-700 group-hover:scale-105 z-20"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-outfit font-bold text-white mb-3 group-hover:text-accentCyan transition-colors duration-300">{cert.title}</h3>
              <div className="flex justify-between items-center text-sm text-lightGrey mb-4">
                <span>{cert.platform}</span>
                <span className="text-accentPurple font-mono font-bold bg-accentPurple/10 px-2 py-1 rounded">{cert.year}</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                Skill: <span className="text-lightGrey">{cert.skill}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
