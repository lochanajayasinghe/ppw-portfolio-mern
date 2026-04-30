import { motion } from 'framer-motion';

const CareerPlan = () => {
  const goals = [
    {
      phase: "Short-Term Goals",
      timeframe: "Next 1 Year",
      items: [
        "Successfully complete my BSc (Hons) in IT degree with a strong GPA.",
        "Improve full-stack development skills by contributing to open-source projects.",
        "Secure an internship or entry-level position as a Software Engineer."
      ]
    },
    {
      phase: "Medium-Term Goals",
      timeframe: "2-4 Years",
      items: [
        "Establish myself as a proficient Software Engineer in a reputed tech company.",
        "Work on large-scale, real-world projects from conception to deployment.",
        "Improve architectural problem-solving skills and mentor junior developers."
      ]
    },
    {
      phase: "Long-Term Goals",
      timeframe: "5+ Years",
      items: [
        "Become a Senior Software Engineer / Tech Lead.",
        "Contribute to the design and architecture of highly scalable systems.",
        "Start an innovative tech solution or startup focused on solving local problems."
      ]
    }
  ];

  const gapAnalysis = [
    {
      skill: "System Architecture",
      current: "Basic understanding",
      required: "Advanced design patterns",
      plan: "Study system design courses and analyze large-scale architectures."
    },
    {
      skill: "Cloud Technologies (AWS)",
      current: "Beginner",
      required: "Intermediate",
      plan: "Complete AWS Cloud Practitioner certification and build cloud-native apps."
    },
    {
      skill: "Agile/Scrum Leadership",
      current: "Participant level",
      required: "Scrum Master capability",
      plan: "Take on leadership roles in team projects and study Agile methodologies."
    }
  ];

  return (
    <section id="career" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        <span className="text-accentCyan font-mono text-2xl mr-2">05.</span> Career Development Plan
      </motion.h2>
      
      <div className="grid lg:grid-cols-3 gap-6 mt-12 mb-20">
        {goals.map((goal, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentCyan to-accentPurple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="inline-block bg-accentCyan/10 text-accentCyan text-xs font-mono px-3 py-1 rounded mb-6">
              {goal.timeframe}
            </div>
            <h3 className="text-2xl font-outfit font-bold text-white mb-6">{goal.phase}</h3>
            <ul className="space-y-4">
              {goal.items.map((item, i) => (
                <li key={i} className="text-lightGrey text-sm md:text-base flex items-start">
                  <span className="text-accentCyan mr-3 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-outfit font-bold text-white mb-8">Skills Gap Analysis</h3>
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50 text-white font-outfit border-b border-slate-700">
                  <th className="p-5 font-semibold">Skill / Competency</th>
                  <th className="p-5 font-semibold">Current Level</th>
                  <th className="p-5 font-semibold">Required Level</th>
                  <th className="p-5 font-semibold">Action Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {gapAnalysis.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors duration-300">
                    <td className="p-5 text-white font-medium">{row.skill}</td>
                    <td className="p-5 text-lightGrey">{row.current}</td>
                    <td className="p-5 text-accentCyan font-medium">{row.required}</td>
                    <td className="p-5 text-lightGrey text-sm">{row.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CareerPlan;
