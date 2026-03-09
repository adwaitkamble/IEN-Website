import { useState } from 'react';
import TeamPageLayout from '../components/team/TeamPageLayout';
import { IEN_CORE_LEADERSHIP, STUDENTS_TEAM } from '../constants/teamData';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Users, GraduationCap } from 'lucide-react';

export default function Team() {
  const [activeTab, setActiveTab] = useState<'faculty' | 'students'>('faculty');
  
  const president = STUDENTS_TEAM.find(m => m.isHighlight);
  const otherStudents = STUDENTS_TEAM.filter(m => !m.isHighlight);

  return (
    <TeamPageLayout 
      title="Our Team" 
      subtitle="The dedicated individuals driving innovation and entrepreneurship at PCCOE."
      members={activeTab === 'faculty' ? IEN_CORE_LEADERSHIP : []}
    >
      {/* Tab Switcher */}
      <div className="flex justify-center mb-16 md:mb-20">
        <div className="inline-flex p-1.5 bg-navy-900/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
          <button
            onClick={() => setActiveTab('faculty')}
            className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'faculty' 
                ? 'bg-gold-500 text-navy-950 shadow-gold-glow' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users size={18} />
            Faculty Leadership
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'students' 
                ? 'bg-gold-500 text-navy-950 shadow-gold-glow' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <GraduationCap size={18} />
            Students Team
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'students' && (
          <motion.div
            key="students-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Highlighted Student (President) */}
            {president && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 md:mb-16 flex justify-center"
              >
                <Card variant="glass-dark" className="max-w-md w-full p-8 border-white/5 bg-white/[0.02] shadow-sm hover:shadow-md text-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:border-gold-500/30">
                  <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                    Student Leadership
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2 tracking-tight">{president.name}</h3>
                  <p className="text-gold-400 font-medium mb-4">{president.role}</p>
                  <div className="w-12 h-[1px] bg-white/10 mx-auto my-5" />
                  <p className="text-slate-400 text-sm font-light tracking-wide uppercase">{president.designation}</p>
                </Card>
              </motion.div>
            )}

            {/* Other Students Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherStudents.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold-500/30 transition-all duration-300 group shadow-sm hover:shadow-md relative overflow-hidden hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col h-full relative z-10">
                      <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-gold-400/90 text-sm font-medium mb-6">
                        {member.role}
                      </p>
                      <div className="mt-auto pt-5 border-t border-white/5">
                        <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TeamPageLayout>
  );
}
