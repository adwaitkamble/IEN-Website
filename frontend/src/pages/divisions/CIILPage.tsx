import React from 'react';
import TeamPageLayout from '../../components/team/TeamPageLayout';
import { CIIL_TEAM } from '../../constants/teamData';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Rocket, Users, Building2, Handshake, ArrowRight, Coins } from 'lucide-react';

const STATS = [
  { icon: Rocket, value: "50+", label: "Startups Incubated" },
  { icon: Users, value: "200+", label: "Jobs Created" },
  { icon: Handshake, value: "30+", label: "Industry Partners" },
  { icon: Coins, value: "₹5Cr+", label: "Funding Raised" }
];

const PIPELINE_STEPS = [
  { title: "Pre-incubation", desc: "Idea validation and team formation." },
  { title: "Validation", desc: "Market research and customer discovery." },
  { title: "Prototype", desc: "MVP development and initial testing." },
  { title: "Market Testing", desc: "Pilot launch and user feedback." },
  { title: "Funding", desc: "Seed investment and scaling." }
];

export default function CIILPage() {
  const ceo = CIIL_TEAM.find(m => m.isHighlight);
  const coordinators = CIIL_TEAM.filter(m => !m.isHighlight);

  return (
    <TeamPageLayout 
      title="CIIL – Center for Innovation & Industry Linkage" 
      subtitle="Bridging the gap between academia and industry through collaborative projects."
      members={coordinators}
      highlightedMember={ceo}
    >
      <div className="space-y-16 md:space-y-24">
        {/* Introduction & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
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
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-4 md:mb-6">
              The Center for Innovation, Incubation and Linkages (CIIL) is a Section-8 non-profit company established in 2020 under the Pimpri Chinchwad Education Trust (PCET). It functions as a formal incubator to bridge the gap between academic research and commercial market viability.
            </p>
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
              Our vision is to nurture and promote the formation of successful companies and promising innovations by integrating advanced technology, expert human capital, and strategic business mentorship with necessary funding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {STATS.map((stat, i) => (
              <Card key={i} variant="tech" className="p-4 md:p-6 border-white/5 bg-navy-950/80 text-center hover:bg-navy-900/80 transition-colors">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-gold-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-bold">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Incubation Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-2 border-gold-500/50 pl-4 md:pl-6 py-1 md:py-2 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">
              Incubation Pipeline
            </h2>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500/10 via-gold-500/50 to-gold-500/10 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
              {PIPELINE_STEPS.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-navy-950 border border-gold-500/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-105 group-hover:border-gold-500/50 transition-all duration-300 shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-gold-400 font-display font-bold text-xl md:text-2xl relative z-10">0{index + 1}</span>
                  </div>
                  <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                  <p className="text-slate-400 text-[10px] md:text-xs font-light leading-relaxed px-2">
                    {item.desc}
                  </p>
                  
                  {/* Mobile Arrow */}
                  {index < 4 && (
                    <div className="lg:hidden my-4 md:my-6">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gold-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Ecosystem & Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/5 bg-navy-950/80 sm:backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 md:mb-6">
                <Coins className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-wider mb-3 md:mb-4">Funding Ecosystem</h3>
              <p className="text-slate-400 font-light leading-relaxed text-xs md:text-sm">
                Facilitating access to seed, angel, and venture capital funding for scalable startups. We connect promising ventures with our network of investors and government grants (NISP, Startup India, MSINS).
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/5 bg-navy-950/80 sm:backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-wider mb-3 md:mb-4">Industry Collaboration</h3>
              <p className="text-slate-400 font-light leading-relaxed text-xs md:text-sm">
                Strengthening industry linkages through collaborative projects and MoUs. We focus on thrust areas including Digital Innovation, Social Innovation, and E-Mobility to solve real-world industry problems.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/5 bg-navy-950/80 sm:backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 md:mb-6">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-wider mb-3 md:mb-4">Startup Mentorship</h3>
              <p className="text-slate-400 font-light leading-relaxed text-xs md:text-sm">
                Mentorship programs involving technology experts and business leaders. We provide execution support through the Young Innovator Program (YIP) and dedicated pre-incubation services.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </TeamPageLayout>
  );
}
