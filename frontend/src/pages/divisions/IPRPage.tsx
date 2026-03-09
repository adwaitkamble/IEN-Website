import React from 'react';
import TeamPageLayout from '../../components/team/TeamPageLayout';
import { IPR_TEAM } from '../../constants/teamData';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { ShieldCheck, FileText, Copyright, Tag, Lightbulb, ArrowRight, CheckCircle2, TrendingUp, BookOpen, Briefcase } from 'lucide-react';

const IP_TYPES = [
  { icon: Lightbulb, title: "Patent", desc: "Protection for novel inventions and technical solutions.", color: "text-amber-400", bg: "bg-amber-400/10" },
  { icon: Copyright, title: "Copyright", desc: "Safeguarding original literary, artistic, and software works.", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: FileText, title: "Design", desc: "Protecting the aesthetic and visual aspects of a product.", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: Tag, title: "Trademark", desc: "Securing brand identity, logos, and commercial symbols.", color: "text-purple-400", bg: "bg-purple-400/10" }
];

const FILING_PROCESS = [
  { step: "01", title: "Idea Disclosure", desc: "Submit invention details to IPR Cell." },
  { step: "02", title: "Prior Art Search", desc: "Evaluate novelty and patentability." },
  { step: "03", title: "Drafting", desc: "Prepare provisional/complete specification." },
  { step: "04", title: "Filing & Publication", desc: "Submit to Indian Patent Office." },
  { step: "05", title: "Examination & Grant", desc: "Respond to FER and obtain grant." }
];

const FACULTY_SUPPORT = [
  "Financial assistance for patent filing fees.",
  "Technical guidance in drafting patent specifications.",
  "Regular training sessions on IPR laws and patent searching.",
  "Dedicated mentorship for identifying patentable research."
];

const COMMERCIALIZATION = [
  "Facilitating industry-academia technology transfer.",
  "Negotiating licensing agreements with corporate partners.",
  "Ensuring ethical management of institutional intellectual property.",
  "Connecting patent holders with CIIL for startup incubation."
];

export default function IPRPage() {
  return (
    <TeamPageLayout 
      title="IPR – Intellectual Property Rights Cell" 
      subtitle="Facilitating the protection of intellectual property and research."
      members={IPR_TEAM}
    >
      <div className="space-y-16 md:space-y-20">
        {/* Introduction & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
                Introduction
              </h2>
            </div>
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-4 md:mb-6">
              The Intellectual Property Rights (IPR) Cell at PCCOE is dedicated to facilitating the legal protection of intellectual assets generated through institutional research. It provides a comprehensive support system for faculty and students to secure patents, copyrights, and designs.
            </p>
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
              Our vision is to become a leading center for intellectual property creation and management, contributing significantly to the national repository of innovation and technological advancement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="glass-dark" className="p-6 md:p-8 border-white/10 bg-white/5 sm:backdrop-blur-md h-full flex flex-col justify-center text-center hover:border-gold-500/30 transition-colors">
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-gold-400 mx-auto mb-4 md:mb-6" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-1 md:mb-2">100+</h3>
              <p className="text-slate-400 font-light uppercase tracking-widest text-xs md:text-sm">Patents Filed</p>
              <div className="w-12 h-px bg-gold-500/30 mx-auto my-4 md:my-6" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-1 md:mb-2">50+</h3>
              <p className="text-slate-400 font-light uppercase tracking-widest text-xs md:text-sm">Patents Granted</p>
            </Card>
          </motion.div>
        </div>

        {/* Types of IP Supported */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
              Types of IP Supported
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {IP_TYPES.map((item, i) => (
              <Card key={i} variant="tech" className="p-5 md:p-6 border-white/5 bg-navy-900/40 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-md hover:border-gold-500/30 transition-all duration-300">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${item.bg} flex items-center justify-center mb-3 md:mb-4`}>
                  <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Patent Filing Process (5 Steps) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
              Patent Filing Process
            </h2>
          </div>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500/10 via-gold-500/50 to-gold-500/10 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
              {FILING_PROCESS.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group bg-navy-950/80 p-4 rounded-xl">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-navy-900 border border-gold-500/30 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 group-hover:bg-gold-500/20 transition-all duration-300 shadow-sm">
                    <span className="text-gold-400 font-display font-bold text-lg md:text-xl">{item.step}</span>
                  </div>
                  <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                  <p className="text-slate-400 text-[10px] md:text-xs font-light leading-relaxed px-2">
                    {item.desc}
                  </p>
                  
                  {/* Mobile Arrow */}
                  {index < 4 && (
                    <div className="lg:hidden my-3">
                      <ArrowRight className="w-5 h-5 text-gold-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Support & Commercialization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/10 bg-white/5 sm:backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4 shrink-0">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wider">Support for Faculty & Students</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {FACULTY_SUPPORT.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 font-light text-sm md:text-base">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gold-500 mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/10 bg-white/5 sm:backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-4 shrink-0">
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wider">Commercialization & Licensing</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {COMMERCIALIZATION.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 font-light text-sm md:text-base">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gold-500 mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </TeamPageLayout>
  );
}
