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
      image: "/certs/aws.jpg"
    },
    {
      title: "Foundational C# with Microsoft",
      platform: "freeCodeCamp",
      year: "2025",
      skill: "Frontend Development",
      image: "/certs/foundational-csharp.png"
    },
    {
      title: "Oracle SQL - A Complete Introduction",
      platform: "Udemy",
      year: "2025",
      skill: "Full-Stack Development",
      image: "/certs/oracle-sql-complete-introduction.png"
    },
    {
      title: "Create a canvas app in Power Apps",
      platform: "Microsoft Learn",
      year: "2026",
      skill: "Power Apps",
      image: "/certs/create-canvas-app-power-apps.png"
    },
    {
      title: "Create and run simple C# console applications",
      platform: "Microsoft Learn",
      year: "2025",
      skill: "Azure Cloud",
      image: "/certs/create-and-run-simple-csharp.png"
    },
    {
      title: "Debug C# console applications",
      platform: "Microsoft Learn",
      year: "2025",
      skill: "C# Programming",
      image: "/certs/debug-csharp-console-applications.png"
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
            <div className="h-48 bg-slate-800 relative overflow-hidden flex items-start justify-center p-4">
              <div className="absolute inset-0 bg-accentCyan/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
              <img
                src={cert.image ? encodeURI(cert.image) : `https://via.placeholder.com/600x400/0f172a/94a3b8?text=Certificate`}
                alt={cert.title}
                onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/600x400/0f172a/94a3b8?text=Certificate`; }}
                className="max-h-40 w-auto object-contain transition-all duration-700 group-hover:scale-105 z-20"
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
