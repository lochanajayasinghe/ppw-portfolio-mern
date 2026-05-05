import { useState } from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/lochanajayasinghe2002@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _template: 'box'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent! (Check your email to activate it for the first time)' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container relative">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        <span className="text-accentCyan font-mono text-2xl mr-2">07.</span> Get In Touch
      </motion.h2>
      
      <div className="grid md:grid-cols-5 gap-12 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 space-y-10"
        >
          <p className="text-lightGrey text-lg leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-5 text-lightGrey group">
              <div className="bg-slate-800 p-4 rounded-full text-accentCyan group-hover:bg-accentCyan group-hover:text-white transition-colors duration-300 shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-white text-lg">Location</h4>
                <p className="text-sm">Kandy, Sri Lanka</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 text-lightGrey group">
              <div className="bg-slate-800 p-4 rounded-full text-accentPurple group-hover:bg-accentPurple group-hover:text-white transition-colors duration-300 shadow-lg">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-white text-lg">Email</h4>
                <p className="text-sm">lochanajayasinghe2002@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 text-lightGrey group">
              <div className="bg-slate-800 p-4 rounded-full text-accentCyan group-hover:bg-accentCyan group-hover:text-white transition-colors duration-300 shadow-lg">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-white text-lg">LinkedIn</h4>
                <p className="text-sm"><a href="https://www.linkedin.com/in/lochana-jayasinghe-a28674319/" target="_blank" rel="noopener noreferrer" className="text-lightGrey hover:text-accentCyan">lochana-jayasinghe-a28674319</a></p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-3 glass-card p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-lightGrey mb-2 font-outfit" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-lightGrey mb-2 font-outfit" htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-lightGrey mb-2 font-outfit" htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-lightGrey mb-2 font-outfit" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-all resize-none"
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accentCyan to-blue-500 hover:from-blue-500 hover:to-accentPurple text-white font-bold py-4 rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-center text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
              >
                {status.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
