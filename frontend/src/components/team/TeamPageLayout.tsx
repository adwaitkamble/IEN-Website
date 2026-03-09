import React, { useState, useEffect } from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { TeamMember } from '../../constants/teamData';
import { Card } from '../ui/Card';
import { BackgroundLayer } from '../ui/BackgroundLayer';

interface TeamPageLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
  highlightedMember?: TeamMember;
  children?: React.ReactNode;
}

function TeamPageLayoutComponent({
  title,
  subtitle,
  description,
  members,
  highlightedMember,
  children
}: TeamPageLayoutProps) {

  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimate = !prefersReducedMotion;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.03 : 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: isMobile ? 12 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-16 md:pb-24 relative z-10 overflow-hidden">
      
      {/* Background */}
      <BackgroundLayer />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* ================= HEADER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>

          <div className="w-16 h-1 bg-gold-500/50 mx-auto mb-6 rounded-full" />

          {subtitle && (
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-slate-400 text-base max-w-3xl mx-auto mt-6 font-light leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {/* ================= CUSTOM CHILDREN (CIIL, IPR, etc.) ================= */}
        {children && (
          <div className="mb-16 md:mb-24">
            {children}
          </div>
        )}

        {/* ================= HIGHLIGHTED MEMBER ================= */}
        {highlightedMember && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16 md:mb-24 flex justify-center"
          >
            <Card className="max-w-md w-full p-8 border-white/10 bg-white/[0.02] text-center relative overflow-hidden">
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold tracking-widest uppercase mb-6">
                Leadership
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2 tracking-tight">
                {highlightedMember.name}
              </h3>

              <p className="text-gold-400 font-medium mb-4">
                {highlightedMember.role}
              </p>

              <div className="w-12 h-[1px] bg-white/10 mx-auto my-5" />

              <p className="text-slate-400 text-sm font-light tracking-wide uppercase">
                {highlightedMember.designation}
              </p>

            </Card>
          </motion.div>
        )}

        {/* ================= TEAM GRID ================= */}
        {members.length > 0 && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {members.map((member, index) => (
              <motion.div key={`${member.name}-${index}`} variants={itemVariants}>
                <Card className="h-full p-6 md:p-8 border-white/10 bg-white/[0.02] hover:border-gold-500/30 transition-all duration-300">
                  
                  <div className="flex flex-col h-full">
                    
                    <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-1 tracking-tight">
                      {member.name}
                    </h3>

                    <p className="text-gold-400 text-sm font-medium mb-6">
                      {member.role}
                    </p>

                    <div className="mt-auto pt-5 border-t border-white/10">
                      <p className="text-slate-400 text-xs uppercase tracking-widest font-medium">
                        {member.designation}
                      </p>
                    </div>

                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default React.memo(TeamPageLayoutComponent);