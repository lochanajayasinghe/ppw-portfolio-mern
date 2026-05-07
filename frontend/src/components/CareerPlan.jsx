// import { motion } from 'framer-motion';

// const CareerPlan = () => {
//   const goals = [
//     {
//       phase: "Short-Term Goals",
//       timeframe: "Next 1 Year (2026)",
//       items: [
//         "Successfully complete my BSc (Hons) in IT at SLIIT with a focus on Healthcare Data Science.",
//         "Present my research paper on 'Hospital Resource Optimization' at the IEEE I2CACIS 2026 conference.",
//         "Transition from trainee to a specialist Implementation Engineer at Asian Logistic Solutions, mastering the RoadRunner TMS."
//       ]
//     },
//     {
//       phase: "Medium-Term Goals",
//       timeframe: "2-4 Years",
//       items: [
//         "Establish myself as a proficient Software Engineer specializing in logistics technology and system integration.",
//         "Attain professional certifications such as AWS Solutions Architect Associate to enhance cloud-native deployment skills.",
//         "Take ownership of large-scale deployment projects and mentor junior developers or interns."
//       ]
//     },
//     {
//       phase: "Long-Term Goals",
//       timeframe: "5+ Years",
//       items: [
//         "Advance to a Senior Software Engineer or Tech Lead position, designing high-scalability architectures.",
//         "Contribute to the strategic design of innovative tech solutions for healthcare or logistics in Sri Lanka.",
//         "Develop an AI-driven startup or tool focused on solving local infrastructure inefficiencies."
//       ]
//     }
//   ];

//   const gapAnalysis = [
//     {
//       skill: "System Architecture",
//       current: "Basic understanding",
//       required: "Advanced design patterns",
//       plan: "Complete a professional 'System Design' certification and analyze large-scale architectures by Q4 2026."
//     },
//     {
//       skill: "Cloud Technologies",
//       current: "Beginner (AWS Academy)",
//       required: "Professional Practitioner",
//       plan: "Deploy a full-stack MERN project on AWS using EC2 and S3 to gain hands-on production experience."
//     },
//     {
//       skill: "Industry-Specific Software",
//       current: "Training (RoadRunner TMS)",
//       required: "Implementation Specialist",
//       plan: "Complete internal training modules for Booking, Finance, and Fleet management by August 2026."
//     },
//     {
//       skill: "Project Management",
//       current: "Team Participant",
//       required: "Scrum Master / Agile Lead",
//       plan: "Study for and attempt the PSM I (Professional Scrum Master) certification to lead development sprints."
//     }
//   ];

//   return (
//     <section id="career" className="section-container py-20">
//       <motion.h2 
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl md:text-4xl font-bold text-white mb-8"
//       >
//         <span className="text-accentCyan font-mono text-2xl mr-2">05.</span> Career Development Plan
//       </motion.h2>
      
//       <div className="grid lg:grid-cols-3 gap-6 mt-12 mb-20">
//         {goals.map((goal, index) => (
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             key={index} 
//             className="glass-card p-8 relative overflow-hidden group border border-white/10 rounded-xl bg-white/5 hover:border-accentCyan/50 transition-all duration-300"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentCyan to-accentPurple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
//             <div className="inline-block bg-accentCyan/10 text-accentCyan text-xs font-mono px-3 py-1 rounded mb-6">
//               {goal.timeframe}
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-6">{goal.phase}</h3>
//             <ul className="space-y-4">
//               {goal.items.map((item, i) => (
//                 <li key={i} className="text-lightGrey text-sm md:text-base flex items-start">
//                   <span className="text-accentCyan mr-3 mt-1">▹</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-50px" }}
//         transition={{ duration: 0.6 }}
//       >
//         <h3 className="text-3xl font-bold text-white mb-8">Skills Gap Analysis</h3>
//         <div className="glass-card overflow-hidden border border-white/10 rounded-xl bg-white/5">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-white/5 text-white border-b border-white/10">
//                   <th className="p-5 font-semibold">Skill / Competency</th>
//                   <th className="p-5 font-semibold">Current Level</th>
//                   <th className="p-5 font-semibold">Required Level</th>
//                   <th className="p-5 font-semibold">Action Plan</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/5">
//                 {gapAnalysis.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-white/5 transition-colors duration-300">
//                     <td className="p-5 text-white font-medium">{row.skill}</td>
//                     <td className="p-5 text-lightGrey">{row.current}</td>
//                     <td className="p-5 text-accentCyan font-medium">{row.required}</td>
//                     <td className="p-5 text-lightGrey text-sm">{row.plan}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default CareerPlan;

import { motion } from 'framer-motion';

const CareerPlan = () => {
  const goals = [
    {
      phase: "Short-Term Goals",
      timeframe: "Next 1 Year (2026)",
      items: [
        "Successfully complete my BSc (Hons) in IT at SLIIT with a strong GPA.",
        "Gain deep expertise in Transport Management Systems (TMS) during my tenure at Asian Logistic Solutions.",
        "Present my research on 'Hospital Resource Optimization' at the IEEE I2CACIS 2026 conference.",
        "Begin targeted preparation for technical assessments at top-tier firms like LSEG and WSO2."
      ]
    },
    {
      phase: "Medium-Term Goals",
      timeframe: "2-4 Years",
      items: [
        "Secure a position as a Software Engineer at a globally recognized organization such as LSEG or WSO2.",
        "Contribute to large-scale, high-performance financial or integration infrastructure.",
        "Attain professional certifications in Cloud Computing (AWS/Azure) and Advanced System Design.",
        "Actively contribute to open-source projects to build visibility within the developer community."
      ]
    },
    {
      phase: "Long-Term Goals",
      timeframe: "5+ Years",
      items: [
        "Advance to a Senior Software Engineer or Tech Lead role within a global tech firm.",
        "Spearhead the architecture of scalable, distributed systems that solve complex logistics or healthcare problems.",
        "Establish a technical blog or mentorship program to give back to the SLIIT developer community.",
        "Explore entrepreneurial opportunities in AI-driven predictive analytics."
      ]
    }
  ];

  const gapAnalysis = [
    {
      skill: "Enterprise Integration",
      current: "MERN Stack Proficiency",
      required: "Expertise in Middleware/ESBs",
      plan: "Study WSO2's integration products and participate in their community workshops to understand enterprise-level connectivity."
    },
    {
      skill: "Financial Systems / Fintech",
      current: "General IT Knowledge",
      required: "Low-latency/High-security Logic",
      plan: "Research LSEG’s technology stack and prepare for their specific technical interview challenges (DSA and System Design)."
    },
    {
      skill: "Cloud & DevOps",
      current: "Beginner (AWS Academy)",
      required: "Cloud-Native Practitioner",
      plan: "Deploy a production-ready application using Kubernetes and Docker to simulate real-world infrastructure used by firms like WSO2."
    },
    {
      skill: "Industry-Specific Software",
      current: "Developer at Asian Logistic Solutions",
      required: "Domain Expert",
      plan: "Master the RoadRunner TMS architecture to understand how enterprise-scale logistics applications handle complex data workflows."
    }
  ];

  return (
    <section id="career" className="section-container py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8"
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
            className="glass-card p-8 relative overflow-hidden group border border-white/10 rounded-xl bg-white/5 hover:border-accentCyan/50 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentCyan to-accentPurple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="inline-block bg-accentCyan/10 text-accentCyan text-xs font-mono px-3 py-1 rounded mb-6">
              {goal.timeframe}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{goal.phase}</h3>
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
        <h3 className="text-3xl font-bold text-white mb-8">Target Skills & Gap Analysis</h3>
        <div className="glass-card overflow-hidden border border-white/10 rounded-xl bg-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-white border-b border-white/10">
                  <th className="p-5 font-semibold">Focus Area</th>
                  <th className="p-5 font-semibold">Current State</th>
                  <th className="p-5 font-semibold">Target Requirement</th>
                  <th className="p-5 font-semibold">Action Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {gapAnalysis.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors duration-300">
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