import React from 'react';
import { motion, useReducedMotion, Variants } from 'motion/react';

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-sm">
              Last Updated: March 2026
            </p>
          </header>

          <div className="space-y-10 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">1. Introduction</h2>
              <p>
                The Innovation & Entrepreneurship Network (IEN) at Pimpri Chinchwad College of Engineering (PCCOE), Pune, is committed to protecting the privacy of our students, faculty, and participants. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website and programs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you voluntarily provide to us when registering for events, incubation programs, or newsletters. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li>Personal Identifiers: Name, Email Address, Phone Number.</li>
                <li>Academic Details: PRN/Roll Number, Department, Year of Study.</li>
                <li>Program Data: Startup ideas, project descriptions, and team details for incubation.</li>
                <li>Event Data: Registration details and attendance records for IEN-hosted events.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                Your data is used strictly for institutional and academic purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li>Facilitating event registrations and participation.</li>
                <li>Coordinating mentorship and startup incubation programs.</li>
                <li>Communicating updates regarding innovation initiatives and opportunities.</li>
                <li>Internal reporting and academic record-keeping as per PCCOE guidelines.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">4. Data Protection & Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. As a student-led body under PCCOE, we adhere to the college's overarching data security protocols. We do not sell, trade, or rent your personal identification information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">5. Analytics & Performance</h2>
              <p>
                We use basic analytics tools (such as Vercel Analytics) to monitor website performance and improve user experience. These tools collect non-identifiable technical data such as browser type, device information, and page visit duration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">6. Institutional Governance</h2>
              <p>
                IEN operates under the aegis of Pimpri Chinchwad College of Engineering. All data handling is subject to the rules and regulations of the institution. For more information on the college's general policies, please visit <a href="https://www.pccoepune.com" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">www.pccoepune.com</a>.
              </p>
            </section>

            <section className="pt-8 border-t border-white/10">
              <h2 className="text-xl font-display font-semibold text-gold-400 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact the IEN core team at:
              </p>
              <div className="mt-4 p-4 bg-white/[0.03] rounded-lg border border-white/5 inline-block">
                <p className="text-white font-medium">IEN PCCOE Innovation Hub</p>
                <p className="text-slate-400">Email: ien@pccoe.org</p>
                <p className="text-slate-400">Location: PCCOE Campus, Nigdi, Pune</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
