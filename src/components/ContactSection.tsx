import { motion } from 'motion/react';
import { Mail, Phone, Clock, CheckCircle2, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-bg">
      {/* Space Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0a0a1a_0%,_#020205_100%)]" />
        
        {/* Static Stars */}
        <div className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Ccircle cx='20' cy='30' r='1' fill='%23fff' opacity='0.8'/%3E%3Ccircle cx='100' cy='150' r='1' fill='%23fff' opacity='0.5'/%3E%3Ccircle cx='200' cy='50' r='1.5' fill='%23fff' opacity='0.9'/%3E%3Ccircle cx='300' cy='250' r='1' fill='%23fff' opacity='0.6'/%3E%3Ccircle cx='350' cy='100' r='2' fill='%23fff' opacity='0.4'/%3E%3Ccircle cx='50' cy='300' r='1.5' fill='%23fff' opacity='0.7'/%3E%3C/svg%3E")`,
            backgroundSize: '400px 400px',
          }}
        />
        
        {/* Subtle Nebula Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Whether you're looking to build a new digital frontier with AI or discuss the precision of industrial R&D, my signal is always open. Let’s bridge the gap between imagination and execution.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">Shajidulhoquefardeen@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+8801647465507</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Response Time</h4>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="bg-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h4 className="text-white font-semibold flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                What to Expect
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Free consultation to understand your needs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Detailed project proposal within 48 hours
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Regular updates throughout development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Ongoing support and maintenance included
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your full name"
                    className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your.email@example.com"
                    className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                  <textarea 
                    id="details" 
                    rows={5}
                    placeholder="Tell me about your automation needs, current challenges, and project goals..."
                    className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl px-6 py-4 flex items-center justify-center gap-2 transition-colors"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
