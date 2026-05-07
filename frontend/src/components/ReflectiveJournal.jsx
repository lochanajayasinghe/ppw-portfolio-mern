// import { motion } from 'framer-motion';

// const ReflectiveJournal = () => {
//   const reflections = [
//     {
//       title: "Business Writing Skills",
//       content: "The PPW module fundamentally shifted my approach to business documentation. I learned the critical differences between academic writing and business writing, focusing on clarity, conciseness, and audience awareness. Crafting formal reports and proposals has greatly improved my ability to convey technical concepts to non-technical stakeholders."
//     },
//     {
//       title: "Email Writing & Communication",
//       content: "Professional communication is the backbone of any successful tech career. Through targeted exercises, I developed the skill to write clear, action-oriented emails. I now understand the nuances of tone, formatting, and the importance of prompt, professional responses in a corporate environment."
//     },
//     {
//       title: "Presentation Skills",
//       content: "Public speaking was previously a challenge for me. The structured presentations in PPW allowed me to build confidence. I learned how to structure a narrative, design impactful slides without overwhelming text, and engage an audience effectively, which is vital for defending architectural decisions or pitching ideas."
//     },
//     {
//       title: "Interview Skills",
//       content: "The mock interviews and resume building workshops were invaluable. I learned how to articulate my technical projects using the STAR method (Situation, Task, Action, Result). This preparation has not only refined my CV but also given me the confidence to handle behavioral and technical questions in real industry interviews."
//     }
//   ];

//   return (
//     <section id="journal" className="section-container relative">
//       <motion.h2 
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.5 }}
//         className="section-title"
//       >
//         <span className="text-accentPurple font-mono text-2xl mr-2">04.</span> Reflective Journal
//       </motion.h2>
      
//       <motion.p 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-lightGrey max-w-3xl mb-16 text-lg leading-relaxed"
//       >
//         The Preparation for Professional World (PPW) module has been a transformative experience, 
//         bridging the gap between academic knowledge and industry expectations. Below are key reflections on my professional growth.
//       </motion.p>

//       <div className="grid md:grid-cols-2 gap-8">
//         {reflections.map((item, index) => (
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             key={index} 
//             className="glass-card p-8 group hover:border-accentPurple/50"
//           >
//             <h3 className="text-xl font-outfit font-bold text-white mb-6 flex items-center gap-4">
//               <span className="bg-accentPurple/10 text-accentPurple text-sm font-mono px-3 py-1 rounded">0{index + 1}</span> 
//               <span className="group-hover:text-accentPurple transition-colors duration-300">{item.title}</span>
//             </h3>
//             <p className="text-lightGrey leading-relaxed text-sm md:text-base">
//               {item.content}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ReflectiveJournal;


import { motion } from 'framer-motion';

const ReflectiveJournal = () => {
  const reflections = [
    {
      title: "Business Writing Skills",
      content: "The PPW module at SLIIT fundamentally shifted my approach to business documentation. I learned the critical importance of being direct and clear, transitioning from an academic style to a professional one. A key takeaway was mastering the 'Full Block' and 'Open Punctuation' styles in formal letters. Learning to prioritize the audience’s needs over my own writing style has made my technical reports much more impactful for non-technical stakeholders."
    },
    {
      title: "Email Writing & Communication",
      content: "Professional email etiquette is the backbone of the corporate world. Through targeted PPW exercises, I realized how much impact a concise subject line and a structured body can have. I’ve adopted the habit of using action-oriented language and ensuring every email has a clear purpose. This has been particularly helpful when communicating complex project updates, ensuring there is no ambiguity in my requests or updates."
    },
    {
      title: "Presentation Skills",
      content: "Public speaking was a challenge I wanted to overcome. The PPW module provided a structured framework specifically the Begin Body Conclusion (BBC) method. I also applied the '6x7 rule' to my recent presentations, moving away from text-heavy slides to visual aids. The feedback I received helped me focus on non-verbal cues, such as maintaining steady eye contact and an open posture, which significantly boosted my professional confidence."
    },
    {
      title: "Interview Skills",
      content: "The mock interview preparation was transformative. I learned to use the STAR method (Situation, Task, Action, Result) to structure my answers effectively. Before this, I struggled to highlight my specific contributions to technical projects. Now, I can clearly articulate the problem, the specific tools I used like the MERN stack or machine learning models and the measurable results achieved, giving me the confidence to handle real world industry interviews."
    }
  ];

  return (
    <section id="journal" className="section-container relative py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8"
      >
        <span className="text-accentPurple font-mono text-2xl mr-2">04.</span> Reflective Journal
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lightGrey max-w-3xl mb-16 text-lg leading-relaxed"
      >
        The Preparation for Professional World (PPW) module has been a transformative experience, 
        bridging the gap between academic knowledge and industry expectations. Below are key reflections on my professional growth during the semester.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {reflections.map((item, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="glass-card p-8 group border border-white/10 rounded-xl bg-white/5 hover:border-accentPurple/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="bg-accentPurple/10 text-accentPurple text-sm font-mono px-3 py-1 rounded">0{index + 1}</span> 
              <span className="group-hover:text-accentPurple transition-colors duration-300">{item.title}</span>
            </h3>
            <p className="text-lightGrey leading-relaxed text-sm md:text-base">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReflectiveJournal;