import React from 'react';
import { motion, useReducedMotion, Variants } from 'motion/react';

export default function TermsOfService() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-32 pb-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl"
        >
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-sm">
              Effective Date: March 2026
            </p>
          </header>

          <div className="space-y-10 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Innovation & Entrepreneurship Network (IEN) website and participating in our programs, you agree to comply with and be bound by these Terms of Service. These terms apply to all students, faculty, and external participants.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">2. Institutional & Academic Use</h2>
              <p>
                This website is an official platform for the IEN student body at Pimpri Chinchwad College of Engineering (PCCOE). It is intended for academic, innovation, and entrepreneurship-related activities. Any commercial misuse or unauthorized access is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">3. Code of Conduct</h2>
              <p className="mb-4">
                Participants in IEN events and incubation programs are expected to maintain a high standard of professional and academic integrity. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li>Respectful communication with mentors, peers, and faculty.</li>
                <li>Honest representation of project ideas and progress.</li>
                <li>Compliance with PCCOE's general campus code of conduct.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">4. Intellectual Property</h2>
              <p>
                Unless otherwise agreed upon in writing for specific sponsored projects, all intellectual property (IP) developed by students during IEN programs remains the property of the respective student(s). IEN and PCCOE reserve the right to showcase these projects for institutional promotion and reporting purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">5. Event Participation</h2>
              <p>
                Registration for events does not guarantee participation. Selection criteria may apply for specific workshops or incubation cohorts. Participants are responsible for their own safety and conduct during physical events held on the PCCOE campus.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">6. Limitation of Liability</h2>
              <p>
                IEN and PCCOE provide this website and its programs on an "as-is" basis. While we strive for excellence, we are not liable for any technical errors, project failures, or external outcomes resulting from participation in our innovation programs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">7. External Links</h2>
              <p>
                Our website may contain links to external sites (e.g., PCCOE official site, government portals, or partner organizations). We are not responsible for the content or privacy practices of these external platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of India and the internal regulations of Pimpri Chinchwad College of Engineering, Pune. Any disputes shall be subject to the jurisdiction of the courts in Pune, Maharashtra.
              </p>
            </section>

            <section className="pt-8 border-t border-white/10">
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">9. Contact Information</h2>
              <p>
                For any clarifications regarding these terms, please reach out to the IEN Faculty Coordinator or the student core team at the PCCOE campus.
              </p>
              <div className="mt-4 p-4 bg-white/[0.03] rounded-lg border border-white/5 inline-block">
                <p className="text-white font-medium">IEN PCCOE</p>
                <p className="text-slate-400">Innovation & Entrepreneurship Network</p>
                <p className="text-slate-400">PCCOE, Nigdi, Pune - 411044</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
