import React from 'react';
import TeamPageLayout from '../../components/team/TeamPageLayout';
import { IIC_TEAM } from '../../constants/teamData';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Target, Flag, CheckCircle2, Award, Building, Users, Lightbulb, ArrowRight } from 'lucide-react';

const MISSION_POINTS = [
  "Engage faculty and students in comprehensive innovation and entrepreneurship-related activities.",
  "Facilitate the transition of ideas from conceptualization to Proof of Concept (PoC) and prototype development.",
  "Strengthen the pre-incubation and incubation pipeline through structured mentorship and resource mobilization."
];

const WHY_IIC_MATTERS = [
  {
    title: "Skill Development",
    desc: "Develops cognitive abilities and problem-solving skills through hands-on challenges and hackathons."
  },
  {
    title: "Mentorship Access",
    desc: "Creates a mentor pool comprising industry professionals, investors, and successful entrepreneurs."
  },
  {
    title: "National Exposure",
    desc: "Facilitates participation in National Innovation Contests and MIC-prescribed workshops."
  }
];

const LIFECYCLE_STEPS = [
  { icon: Lightbulb, title: "Ideation", desc: "Problem Identification", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { icon: Users, title: "Validation", desc: "Mentorship & Feedback", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { icon: Target, title: "Prototype", desc: "Proof of Concept", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { icon: Building, title: "Pre-Incubation", desc: "Ready for CIIL", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" }
];

export default function IICPage() {
  return (
    <TeamPageLayout 
      title="IIC – Institution Innovation Council" 
      subtitle="Fostering a culture of innovation and startup ecosystem at PCCOE."
      members={IIC_TEAM}
    >
      <div className="space-y-16 md:space-y-20">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
              Introduction
            </h2>
          </div>
          <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-4xl">
            The Institution’s Innovation Council (IIC) at PCCOE was established in 2018 in accordance with the Ministry of Education’s Innovation Cell (MIC) and AICTE guidelines. It serves as a systematic platform to cultivate a robust culture of innovation and a sustainable startup ecosystem within the institution.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/10 bg-white/5 sm:backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mr-4 shrink-0">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-gold-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wider">Vision</h3>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                To establish a premier institutional framework that systematically fosters innovation, critical thinking, and a vibrant startup culture among students and faculty.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/10 bg-white/5 sm:backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4 shrink-0">
                  <Flag className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wider">Mission</h3>
              </div>
              <ul className="space-y-4">
                {MISSION_POINTS.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 font-light text-sm md:text-base">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gold-500 mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Expanded Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          <div>
            <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
                Key Objectives
              </h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              <Card variant="tech" className="p-5 md:p-6 border-white/5 bg-navy-900/40 hover:bg-navy-900/60 transition-colors">
                <h4 className="text-base md:text-lg font-bold text-white mb-2 flex items-center">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-gold-400 mr-2 shrink-0" /> ARIIA Preparation
                </h4>
                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                  Systematically preparing the institution for the Atal Ranking of Institutions on Innovation Achievements (ARIIA) by documenting and enhancing innovation metrics.
                </p>
              </Card>
              <Card variant="tech" className="p-5 md:p-6 border-white/5 bg-navy-900/40 hover:bg-navy-900/60 transition-colors">
                <h4 className="text-base md:text-lg font-bold text-white mb-2 flex items-center">
                  <Building className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-2 shrink-0" /> MIC & AICTE Alignment
                </h4>
                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                  Operating strictly under the guidelines of the Ministry of Education's Innovation Cell (MIC) and AICTE to ensure national-level compliance and support.
                </p>
              </Card>
              <Card variant="tech" className="p-5 md:p-6 border-white/5 bg-navy-900/40 hover:bg-navy-900/60 transition-colors">
                <h4 className="text-base md:text-lg font-bold text-white mb-2 flex items-center">
                  <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mr-2 shrink-0" /> Pre-incubation Structure
                </h4>
                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                  Establishing a functional ecosystem for scouting and nurturing innovative ideas, providing the necessary groundwork before formal incubation at CIIL.
                </p>
              </Card>
            </div>
          </div>

          <div>
            <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
                Why IIC Matters
              </h2>
            </div>
            <Card variant="glass-dark" className="p-6 md:p-8 border-white/10 bg-white/5 sm:backdrop-blur-md h-[calc(100%-4rem)] md:h-[calc(100%-5rem)]">
              <ul className="space-y-6">
                {WHY_IIC_MATTERS.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-500/10 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-gold-400 font-bold text-sm md:text-base">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-sm md:text-base">{item.title}</h4>
                      <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>

        {/* Innovation Lifecycle Graphic (Textual) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
              Innovation Lifecycle
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between bg-navy-900/50 p-6 md:p-8 rounded-2xl border border-white/5">
            {LIFECYCLE_STEPS.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center mb-6 md:mb-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${step.bg} border ${step.border} flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                    <step.icon className={`w-5 h-5 md:w-6 md:h-6 ${step.color}`} />
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-base">{step.title}</h4>
                  <p className="text-slate-400 text-[10px] md:text-xs mt-1">{step.desc}</p>
                </div>
                {index < LIFECYCLE_STEPS.length - 1 && (
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gold-500/50 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </TeamPageLayout>
  );
}
